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
  rooms : string[] = ["Møterom stort", "Møterom lite", "Møterom 214", "Møterom 210" , "Aktivitets plan"];
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
      (result) => {
        if (typeof result !== 'undefined') {
          
          this.toDelPythEvts = new Array();
          this.delEvents(this.toDelPythEvts);
        }
      },
      (error) => {
        console.log("editEvents() afterClosed() error : " + error);
      }
    );
  }

  ngOnDestroy(){
    this.breakPointObsSubscr.unsubscribe();
    this.loginStateSubscription.unsubscribe();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: CalendarEvent[] = [
  {id: 1, userId : 2,title:"undefined", start: new Date(), end: new Date()},
  {id: 2, userId : 2,title:"undefined", start: new Date(), end: new Date()}
];

@Component({
  selector: 'edit-events-dialog',
  templateUrl: 'edit.events.html'
})

export class EditEventsDialog {
  constructor( public dialogRef: MatDialogRef<EditEventsDialog>,
      @Inject(MAT_DIALOG_DATA) public data: {
        rooms : string[] },
        private httpService: HttpEventService) {}

  rooms : string[] = this.data.rooms;
  events : CalendarEvent[] = [];

  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  displayedColumns: string[] = ['id', 'userId','title'];
  dataToDisplay = [...ELEMENT_DATA];
  dataSourceEx =new ExampleDataSource(this.dataToDisplay);
  
  addData() {
    this.getDbEvents();
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSourceEx.setData(this.dataToDisplay);
  }

  getDbEvents(){
    this.httpService.getEvents().subscribe((response)=>{
      if(response.hasOwnProperty('events')) {
        this.events = [];
        let respObj  =  response as any;
        for (let pythEvt of  respObj.events){
          let calEvent : CalendarEvent=  {
              id : pythEvt.uid,
              userId : pythEvt.userId,
              start : new Date(parseInt(pythEvt.start,10)),
              end : new Date(parseInt(pythEvt.end,10)),
              title : 'undef title',
            }
          this.events.push(calEvent);
          
        }
        this.events = [...this.events];
        this.dataSourceEx.setData(this.events);
        //console.log("getDbEvents() Follows events : ");  
        //console.log(this.events);
      } else {
        console.log("getDbEvents() string response msg:",response);
        
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
      
  

  closeDialog(){
    this.dialogRef.close({
      rooms: this.rooms,
      } )
  }
  
  ngOnInit(){} 

  onSubmit(){
    //console.log("onSibmit dialod form value: " + JSON.stringify(this.valgtPerCtrl.value) )
  }

}

class ExampleDataSource extends DataSource<CalendarEvent> {
  private _dataStream = new ReplaySubject<CalendarEvent[]>();

  constructor(initialData: CalendarEvent[]) {
    super();
    this.setData(initialData);
  }


  connect(): Observable<CalendarEvent[]> {
    return this._dataStream;
  }

  disconnect() {}


  setData(data: CalendarEvent[]) {
    this._dataStream.next(data);
  }
}
