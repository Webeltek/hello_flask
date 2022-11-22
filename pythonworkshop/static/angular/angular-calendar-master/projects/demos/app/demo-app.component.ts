import { Component, Input,
  OnInit, Output, EventEmitter,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { 
  CalendarDateFormatter,
  CalendarView, CalendarEvent, DAYS_OF_WEEK } from 'angular-calendar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomDateFormatter } from './custom-date-formatter.provider';
import { HttpEventService } from 'projects/angular-calendar/src/modules/week/http-service.service';
import { EventDialog, PythEvent, getColors } from 'projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

export interface PythUser {
  id : number; 
  user_email : string;
  user_pass_hash : string;
  user_is_logged_in : string;
  user_confirmed : string;
  access_token : string;
  last_seen : string;
  is_admin : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './demo-app.html',
  styleUrls: ['./demo-app.css'],
  changeDetection : ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class DemoAppComponent implements OnInit, OnDestroy{

  isMobLayout = false;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  daysInWeek = 7;
  locale : string = "nb";
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];

  setView(view: CalendarView) {
    this.view = view;
  }

  events : CalendarEvent[] = [];
  users : PythUser[] = [];
  loggedInUserId : number;
  toBeDeletedPythEvt : PythEvent;

  private destroy$ = new Subject<void>();

  constructor(
    private httpService: HttpEventService,
    private tokenStorage: TokenStorageService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private router: Router ) {}

  getDbUsers(){
    this.httpService.getUsers().subscribe((response) => {
      if(response.hasOwnProperty('users')) {
        let storageUsrObj = this.tokenStorage.getUser();
        this.loggedInUserId = storageUsrObj.id;
        console.log("getDBUsers()  storageUsrObj.user_email", storageUsrObj.user_email);
      
        let respObj  = response as any ;
        for (let pythUser of respObj.users){
          this.users.push(pythUser);
        }
        this.users = [...this.users];
        console.log("getDBUsers() this.users",this.users)
      } else {
        console.log("getDbUsers() string response msg:",response);
        this.tokenStorage.signOut();
        this.router.navigate(['login',{session: 'expired' }]);
      }
      
    })
    this.getDbEvents();
  }

  getEventTitle(pythEv : PythEvent){
      if ( this.tokenStorage.getUser().is_admin){
        //console.log("getEventTitle() this.users",this.users);
        //console.log("getEventTitle() pythEv.userId",pythEv.userId);
        let eventUser =  this.users.filter((user)=> {
          //console.log("getEventTitle() user.id == pythEv.userId",user.id == pythEv.userId)
          return user.id == pythEv.userId
        });
        //console.log("getEventTitle() eventUser array",eventUser );
        return eventUser[0].user_email;
      } else {
        return pythEv.title;
      }
    
  }

  getDbEvents(){
    this.httpService.getEvents().subscribe((response ) => {
      //console.log("getDbEvents() Response: ",response);
      //console.log("getDbEvents() Response type: "+ typeof response);
      if(response.hasOwnProperty('events')) {
        this.events = [];
        let respObj  =  response as any;
        for (let pythEvt of  respObj.events){
          let calEvent : CalendarEvent=  {
              id : pythEvt.uid,
              userId : pythEvt.userId,
              start : new Date(parseInt(pythEvt.start,10)),
              end : new Date(parseInt(pythEvt.end,10)),
              title : this.getEventTitle(pythEvt),
              color : getColors(pythEvt.userId,this.tokenStorage.getUser().id),
            }
          this.events.push(calEvent);
          
        }
        this.events = [...this.events];
        //console.log("getDbEvents() Follows events : ");  
        //console.log(this.events);
      } else {
        console.log("getDbEvents() string response msg:",response);
        this.tokenStorage.signOut();
        this.router.navigate(['login',{session: 'expired' }]);
      }
  })
  }

  subscribeToInsertDelEvt() {
    this.httpService.addedEvent.subscribe((emitedValue: any) => { 
        this.getDbEvents();
    })
    this.httpService.deletedEvent.subscribe((emitedValue: any) => { 
      this.getDbEvents();
  })
  }

  ngOnChanges(){}

  ngOnInit() {
    this.getDbUsers();
    this.subscribeToInsertDelEvt();
    
    const CALENDAR_RESPONSIVE = {
      small: {
        breakpoint: '(max-width: 576px)',
        daysInWeek: 2,
        isMobile : true
      },
      medium: {
        breakpoint: '(max-width: 768px)',
        daysInWeek: 3,
        isMobile : true
      },
      large: {
        breakpoint: '(max-width: 960px)',
        daysInWeek: 5,
        isMobile : false
      },
    };

    this.breakpointObserver
      .observe(
        Object.values(CALENDAR_RESPONSIVE).map(({ breakpoint }) => breakpoint)
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((state: BreakpointState) => {
        const foundBreakpoint = Object.values(CALENDAR_RESPONSIVE).find(
          ({ breakpoint }) => !!state.breakpoints[breakpoint]
        );
        this.isMobLayout = false;
        if (foundBreakpoint) {
          //this.daysInWeek = foundBreakpoint.daysInWeek;
          this.isMobLayout = foundBreakpoint.isMobile;
          //console.log("is Mob Layout",foundBreakpoint.isMobile);
        } else {
          //this.daysInWeek = 7;
          //console.log("between Mob Layout state",foundBreakpoint.isMobile)
        }
        this.cd.markForCheck();
      }); 
  }

  deleteEvent(uid : string){
    this.httpService.deleteEvent(uid);
  }

  rooms : string[] = ["Møterom stort", "Møterom lite", "Møterom 214", "Møterom 210" , "Aktivitets plan"];

  openDialog(clickedWeekViewEvent : {
    event: CalendarEvent;
    sourceEvent: MouseEvent | KeyboardEvent;
  }) {

    if ((clickedWeekViewEvent.event.userId==this.tokenStorage.getUser().id
     && !this.tokenStorage.getUser().is_admin) || this.tokenStorage.getUser().is_admin) {
      var hourContainedEvTitle = "";
      this.httpService.getEvents().subscribe((response) => {
        if(response.hasOwnProperty('events')) {
          let responseObj = response as any;
          let clickedPythEvtStart = clickedWeekViewEvent.event.start.getTime().toString();
          //console.log("clickedWeekViewEvent.event.start",clickedWeekViewEvent.event.start)
          for (let pythEvt of responseObj.events) {
            if ( pythEvt.start == clickedPythEvtStart ){
              this.toBeDeletedPythEvt = pythEvt;
              //console.log("this.toBeDeletedPythEvt",this.toBeDeletedPythEvt)
            }
            
          }

          const dialogRef = this.dialog.open(EventDialog, {
            data: {
              toBeDeleted : true,
              toBeDeletedPythEvt : this.toBeDeletedPythEvt
            },
          });
          dialogRef.afterClosed().subscribe(
            (result) => {
              if (typeof result !== 'undefined') {
                //console.log("result object",result)
                this.deleteEvent(result.toBeDeletedPythEvt.uid);
              }
            },
            (error) => {
              console.log("afterClosed() error : " + error);
            }
          );
        }
        
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}