import { Component, ViewChild, OnInit , Inject} from '@angular/core';
import { HttpEventService } from 'projects/angular-calendar/src/modules/week/http-service.service';
import { PythUser } from '../demo-app.component';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, NavigationEnd} from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PythEvent } from 'projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component';
import { MatTableDataSource} from '@angular/material/table';
import { CalendarEvent } from 'calendar-utils';
import { DataSource } from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { DatePipe} from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@UntilDestroy()
@Component({
  selector: 'app-root',
  styleUrls: ['./home.component.scss'],
  templateUrl : './home.component.html'
  
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor( private observer: BreakpointObserver,
    public tokenStorage: TokenStorageService,
    private router: Router,
    public dialog: MatDialog) {}

  role: string ='';
  userEmail : string = '';
  loginStateSubscription: Subscription = new Subscription();
  breakPointObsSubscr : Subscription = new Subscription();
  rooms : string[] = ["alle rom","Møterom stort", "Møterom lite", "Møterom 214", "Møterom 210" , "Aktivitets plan"];
  toDelPythEvts : PythEvent[] = [];


  ngOnInit(): void {
    
  }

  

  ngAfterViewInit() {
    this.loginStateSubscription = this.tokenStorage.authenticated$.subscribe( (loginState : boolean)=>{
          if(loginState){
            this.userEmail = this.tokenStorage.getUser().user_email;
            this.role = this.tokenStorage.getUser().is_admin ? "admin" : "user";
          }

          this.breakPointObsSubscr = this.breakPointObsSubscr = this.observer
          .observe(['(max-width: 800px)'])
          .pipe(delay(1), untilDestroyed(this))
          .subscribe((res) => {
              if (!loginState) {
                this.sidenav.mode = 'over';
                this.sidenav.close();
              } else if(!res.matches && loginState) {
                this.sidenav.mode = 'side';
                this.sidenav.open();
              } else if(res.matches && loginState) {
                this.sidenav.mode = 'over';
                this.sidenav.close();
              }
          });
  
          this.router.events
          .pipe(
            untilDestroyed(this),
            filter((e) => e instanceof NavigationEnd)
          )
          .subscribe(() => {
            if (this.sidenav.mode === 'over') {
              this.sidenav.close();
            }
          });

      });
  } 

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['login']);
  }

  delEvents(events : PythEvent[]){

  }

  editEvents(){
    const dialogRef = this.dialog.open(EditEventsDialog, {
      data: {
        rooms: this.rooms
      },
    });

    dialogRef.afterClosed().subscribe(
      (resultIds) => {
        if (typeof resultIds !== 'undefined') {
          this.delEvents(resultIds);
        }
      },
      (error) => {
        console.log("editEvents() afterClosed() error : " + error);
      }
    );
  }

  editRooms(){
    const dialogRef = this.dialog.open(EditRoomsDialog, {
      data: {
        rooms: this.rooms
      },
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (typeof result !== 'undefined') {
          
        }
      },
      (error) => {
        console.log("HomeComp editRooms() afterClosed() error : " + error);
      }
    );
  }

  ngOnDestroy(){
    this.breakPointObsSubscr.unsubscribe();
    this.loginStateSubscription.unsubscribe();
  }

}

export interface TableRow {
  id : number;
  user_email: string;
  rom: string;
  start: Date;
  end : Date;
  title: string;
}
const ELEMENT_DATA: TableRow[] = [];

@Component({
  selector: 'edit-events-dialog',
  templateUrl: 'edit.events.html',
  styleUrls: ['./home.component.scss']
})

export class EditEventsDialog {
  constructor( public dialogRef: MatDialogRef<EditEventsDialog>,
      @Inject(MAT_DIALOG_DATA) public data: {
        rooms : string[] },
        private httpService: HttpEventService,
        private tokenStorage: TokenStorageService,) {}

  rooms : string[] = this.data.rooms;
  users : PythUser[] = [];
  events : CalendarEvent[] = [];
  pythEvents : PythEvent[] = [];
  tableRows : TableRow[] = [];
  datepipe : DatePipe = new DatePipe('en-US');

  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  rangeStartDate = new Date();
  rangeEndDate = new Date();



  selectedRooms = new FormControl('alle rom');

  displayedColumns: string[] = ['select', 'user_email','start','title'];
  dataToDisplay = [...ELEMENT_DATA];
  dataSourceEx = new ExampleDataSource(this.dataToDisplay);
  selection = new SelectionModel<TableRow>(true, []);

  ngOnInit(){
    this.getDbUsers();
    this.selectedRooms.valueChanges.subscribe((value)=>{
      let filteredRows : TableRow[] = [];
      console.log("HomeComp filterValue",value);
      for (let row of this.tableRows){
        if ( row.rom.includes(value)){
          filteredRows.push(row);
          //console.log("HomeComp filterValue in loop",value);
        } else if ( value==="alle rom"){
          filteredRows=[...this.tableRows]
        }
      }
      this.dataSourceEx.setData(filteredRows);
    })

    this.range.valueChanges.subscribe(res=>{
      this.rangeStartDate = res.start;
      this.rangeEndDate = res.end;
      //console.log("HomeComp rangeValue",res);
      let filteredRows : TableRow[] = [];
      for (let row of this.tableRows){
        if(typeof row.start!=='undefined' 
        && res.start<row.start && row.start<res.end){
          filteredRows.push(row);
          //console.log("HomeComp rangeValue in loop",res);
        }
      }
      this.dataSourceEx.setData(filteredRows);
    })
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableRows.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.tableRows);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TableRow): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  

  /* removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSourceEx.setData(this.dataToDisplay);
  } */

  getDbUsers(){
    this.httpService.getUsers().subscribe({
        next : (response) => {
          if(response.hasOwnProperty('users')) {
            let storageUsrObj = this.tokenStorage.getUser();
            //console.log("getDBUsers()  storageUsrObj.user_email", storageUsrObj.user_email);
          
            let respObj  = response as any ;
            for (let pythUser of respObj.users){
              this.users.push(pythUser);
            }
            this.users = [...this.users];
            //console.log("getDBUsers() this.users",this.users)
          } else {
            console.log("getDbUsers() string response msg:",response);
          }
          
        },
        complete : () => {
          this.getDbEvents();
        }
    })
  }

  getDbEvents(){
    this.httpService.getEvents().subscribe((response)=>{
      if(response.hasOwnProperty('events')) {
        this.events = [];
        let respObj  =  response as any;
        for (let objEvt of  respObj.events){
          let tableRow : TableRow=  {
              id : objEvt.id,
              user_email : this.users.filter((user)=>objEvt.userId==user.id)[0].user_email,
              rom : this.rooms[parseInt(objEvt.row,10)],
              start : new Date(parseInt(objEvt.start,10)),
              end : new Date(parseInt(objEvt.end,10)),
              title : String(objEvt.title).substring(0,3),
            }
          this.tableRows.push(tableRow);
          //console.log("HomeComp tableRow.user_email ",this.users.filter((user)=>objEvt.userId==user.id)[0].user_email);
          let calEvent : CalendarEvent=  {
            userId : objEvt.userId,
            start : new Date(parseInt(objEvt.start,10)),
            end : new Date(parseInt(objEvt.end,10)),
          }
          this.events.push(calEvent);
        }
        this.tableRows = [...this.tableRows];
        this.dataSourceEx.setData(this.tableRows);
        //console.log("getDbEvents() Follows events : ");  
        //console.log(this.events);
      } else {
        console.log("getDbEvents() string response msg:",response);
        
      }
    })
  }

  closeDialog(){
    this.selection.selected
    this.dialogRef.close({
      selectedRowsIds: this.selection.selected.map(row=>row.id),
      } )
  }
  

  onSubmit(){
    //console.log("onSibmit dialod form value: " + JSON.stringify(this.valgtPerCtrl.value) )
  }

}

class ExampleDataSource extends DataSource<TableRow> {
  private _dataStream = new ReplaySubject<TableRow[]>();

  constructor(initialData: TableRow[]) {
    super();
    this.setData(initialData);
  }


  connect(): Observable<TableRow[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: TableRow[]) {
    this._dataStream.next(data);
  }
}

@Component({
  selector: 'edit-rooms-dialog',
  templateUrl: 'edit.rooms.html',
  styleUrls: ['./home.component.scss']
})

export class EditRoomsDialog {
  constructor( public dialogRef: MatDialogRef<EditEventsDialog>,
      @Inject(MAT_DIALOG_DATA) public data: {
        rooms : string[] },
        private httpService: HttpEventService,
        private tokenStorage: TokenStorageService,) {}

  rooms : string[] = this.data.rooms;
  users : PythUser[] = [];
  events : CalendarEvent[] = [];
  pythEvents : PythEvent[] = [];

      }