import { Component, ViewChild, OnInit , Inject, OnDestroy} from '@angular/core';
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
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PythEvent } from 'projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component';
import { MatTableDataSource} from '@angular/material/table';
import { CalendarEvent } from 'calendar-utils';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject} from 'rxjs';
import { DatePipe} from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';

export interface Room {
  row: string,
  title: string
}

@UntilDestroy()
@Component({
  selector: 'app-root',
  styleUrls: ['./home.component.scss'],
  templateUrl : './home.component.html'
  
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor( private observer: BreakpointObserver,
    public tokenStorage: TokenStorageService,
    private router: Router,
    public dialog: MatDialog,
    private httpService: HttpEventService,) {}

  role: string ='';
  userEmail : string = '';
  loginStateSubscription: Subscription = new Subscription();
  breakPointObsSubscr : Subscription = new Subscription();
  roomNamesArr : string[] = [];
  toDelPythEvts : PythEvent[] = [];


  ngOnInit(): void {
    this.httpService.roomNamesArr$.subscribe((roomNamesArr)=>{
      this.roomNamesArr= roomNamesArr;
      //console.log("HomeComp ngOnInit() roomNamesArr",this.roomNamesArr);
    })
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

  delEvents(eventIds : number[]){
    this.httpService.deleteEvent(eventIds);
  }

  editEvents(){
    console.log("HomeC editEvents() this.roomNamesArr: ",this.roomNamesArr)
    const dialogRef = this.dialog.open(EditEventsDialog, {
      data: {
        rooms: this.roomNamesArr
      },
    });

    dialogRef.afterClosed().subscribe(
      (obj) => {
        if (this.roomNamesArr[0]==="alle rom"){
          this.roomNamesArr.shift();
        }
        if (typeof obj!=='undefined' && typeof obj.selectedRowsIds !== 'undefined') {
          this.delEvents(obj.selectedRowsIds);
          //console.log("HomeComp to delete ids",obj.selectedRowsIds)
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
        rooms: this.roomNamesArr
      },
    });

    dialogRef.afterClosed().subscribe(
      (obj) => {
        if (typeof obj !== 'undefined' && typeof obj.toEditRooms !== 'undefined') {
          console.log("HomeComp dial afterClosed() obj.toEditRooms",obj.toEditRooms);
          let roomTitles: string[] = obj.toEditRooms;
          this.httpService.updateRooms(roomTitles);
        } else if(typeof obj == 'undefined'){
          console.log("HomeC dial afterClosed obj is undefined")
        }
      },
      (error) => {
        console.log("HomeComp editRooms() afterClosed() error : " + error);
      }
    );

    dialogRef.backdropClick().subscribe((mouseEvent)=>{
      let roomTitles: string[] = this.httpService.roomNamesArr$.getValue()
      console.log("HomeC editRooms() backdropClick() roomTitles:",roomTitles)
    })
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
        rooms : string[]},
        private httpService: HttpEventService,
        private tokenStorage: TokenStorageService,) {
          if (this.data.rooms[0]!=="alle rom"){
            this.data.rooms.unshift("alle rom");
            console.log("EditEventsDial  unshifted rooms: ",this.data.rooms)
          }
        }


  rooms : string[]= this.data.rooms;
  users : PythUser[] = [];
  events : CalendarEvent[] = [];
  pythEvents : PythEvent[] = [];
  tableRows : TableRow[] = [];
  datepipe : DatePipe = new DatePipe('en-US');
  currentDate = new Date();


  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  selectedRooms = new FormControl('alle rom');

  displayedColumns: string[] = ['select', 'rom','user_email','start','title'];
  dataToDisplay = [...ELEMENT_DATA];
  dataSourceEx = new ExampleDataSource(this.dataToDisplay);
  selection = new SelectionModel<TableRow>(true, []);

  ngOnInit(){
    this.getDbUsers();
    this.selectedRooms.valueChanges.subscribe((value)=>{
      let filteredRows : TableRow[] = [];
      for (let row of this.tableRows){
        //console.log("Homecomp row.rom :",row.rom);
        if ( value.includes(row.rom)){
          filteredRows.push(row);
          //console.log("HomeComp filterValue in loop",value);
        } else if ( value==="alle rom"){
          filteredRows=[...this.tableRows]
        }
      }
      this.dataSourceEx.setData(filteredRows);
    })

    this.range.valueChanges.subscribe(range=>{
      if(range.start!==null && range.end!==null){
      range.end=new Date(range.end.setHours(23,59,59,999));
      //console.log("HomeComp rangeValue",res);
      let filteredRows : TableRow[] = [];
      for (let row of this.tableRows){
        if(typeof row.start!=='undefined' 
        && range.start<=row.start && row.start<=range.end){
          filteredRows.push(row);
          //console.log("HomeComp rangeValue in loop",range);
        }
      }
      this.dataSourceEx.setData(filteredRows);
      }
      
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
              rom : this.rooms[parseInt(objEvt.row,10)+1],
              start : new Date(parseInt(objEvt.start,10)),
              end : new Date(parseInt(objEvt.end,10)),
              title : String(objEvt.title).substring(0,3),
            }
          this.tableRows.push(tableRow);
          //console.log("HomeComp tableRow.user_email ",this.users.filter((user)=>objEvt.userId==user.id)[0].user_email);
          let calEvent : CalendarEvent=  {
            title : objEvt.title,
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
  }
  

  onSubmit(){
    //console.log(" Close dial selection.selected",this.selection.selected);
    //console.log("Close dial selection.selected.map",this.selection.selected.map(row=>row.id));
    this.dialogRef.close({
      selectedRowsIds: this.selection.selected.map(row=>row.id),
      } )
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

export interface MarkedRoomToDel{
  idx: number,
  markedToDel : boolean
} 

@Component({
  selector: 'edit-rooms-dialog',
  templateUrl: 'edit.rooms.html',
  styleUrls: ['./home.component.scss']
})

export class EditRoomsDialog implements OnInit{
  constructor( public dialogRef: MatDialogRef<EditRoomsDialog>,
      @Inject(MAT_DIALOG_DATA) public data: {
        rooms : string[] },
        private httpService: HttpEventService,
        private tokenStorage: TokenStorageService,
        public fb: FormBuilder) {
        }

  rooms : string[] = this.data.rooms;
  users : PythUser[] = [];
  events : CalendarEvent[] = [];
  pythEvents : PythEvent[] = [];
  markedRoomsToDel : MarkedRoomToDel[]=[];

  roomsFormGroup = this.fb.group({
    roomsArr : this.fb.array([])
  });

  ngOnInit(): void {
    for (let roomInd =0; roomInd < this.rooms.length; roomInd++){
      this.roomsArr.push(this.fb.control(this.rooms[roomInd]));
    }
    for (let roomInd =0; roomInd < this.roomsArr.value.length; roomInd++){
        this.markedRoomsToDel.push({idx:roomInd,markedToDel:false});
    }
  }

  get roomsArr(){
    return this.roomsFormGroup.get('roomsArr') as FormArray;
  }

  updateInput(roomName:string,idx:number){
    //console.log("HomeComp keyup val",roomName);
    this.roomsArr.at(idx).setValue(roomName);
    this.roomsArr.at(idx).setValidators([Validators.minLength(10)])
    this.roomsArr.at(idx).updateValueAndValidity();
    console.log("HomeComp roomsDialog updateInput() is invalid",this.roomsArr.at(idx).invalid); 
    console.log("HomeComp roomsDialog updateInput() status",this.roomsArr.at(idx).status); 
  }

  addRoom(newRoomName: string){
    this.httpService.insertRoom({row:'',title:newRoomName})
    this.roomsArr.push(this.fb.control(newRoomName));
  }

  removeRoom(idx: number){
    console.log("HomeC roomsArr room to delete: ",this.roomsArr.value[idx])
    this.httpService.deleteRoom({row:idx.toString(),title:this.roomsArr.value[idx]});
    this.roomsArr.removeAt(idx);
    this.markedRoomsToDel = [];
    for (let roomInd =0; roomInd < this.roomsArr.value.length; roomInd++){
      this.markedRoomsToDel.push({idx:roomInd,markedToDel:false});
    }
    console.log("HomeC markedRoomsToDel:",this.markedRoomsToDel)
  }

  onSubmit(){
    let roomNames : string[]= [];
    let controls = this.roomsArr.controls;
    for (let control of controls){
      control.updateValueAndValidity();
      console.log("HomeComp roomsDialog onSubmit() errors",control.errors); 
    }
    this.dialogRef.close({
      toEditRooms: this.roomsArr.value,
      } )

  }


}