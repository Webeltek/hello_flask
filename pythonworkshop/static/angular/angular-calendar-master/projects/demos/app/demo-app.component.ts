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
import { EventDialog } from 'projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PythEvent } from 'projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component';
import { getColors } from 'projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component';
import { CalendarEventActionsComponent } from 'projects/angular-calendar/src/modules/common/calendar-event-actions.component';
import { addDays } from 'date-fns';
import { HttpResponse } from '@angular/common/http';
import { DateAdapter } from 'projects/angular-calendar/src/date-adapters/date-adapter';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

interface PythUser {
  id : number; 
  user_email : string;
  user_pass_hash : string;
  user_confirmed : string;
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
  curr_userId : number;
  toBeDeletedPythEvt : PythEvent;

  private destroy$ = new Subject<void>();

  constructor(
    private httpService: HttpEventService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef ) {}

  getDbUsers(){
    this.httpService.getUsers().subscribe((response) => {
      let respObj =  JSON.parse(response);
      //console.log("getDBUsers() JSON.parse() : ", respObj)
      this.users = [];
      for (let pythUser of respObj.users){
        this.users.push(pythUser);
      }
      this.curr_userId = respObj.curr_user;
    })
  }

  getDbUserEmail(pythEvUserId : number){
    this.getDbUsers();
    for (let curr_user of this.users){
      if (pythEvUserId == curr_user.id){
        return curr_user.user_email;
      } else "user_not_found"
    }
  }

  getDbEvents(){
    this.httpService.getEvents().subscribe((response ) => {
      console.log("Response type: "+ typeof response);
      let pythUsers = this.getDbUsers();
      this.events = [];
      let respObj : PythEvent[] =  JSON.parse(response);
      for (let pythEvt of  respObj){
        let calEvent : CalendarEvent=  {
            id : pythEvt.uid,
            userId : pythEvt.userId,
            start : new Date(parseInt(pythEvt.start,10)),
            end : new Date(parseInt(pythEvt.end,10)),
            title : this.getDbUserEmail(pythEvt.userId),
            color : getColors(pythEvt.color),
            allDay : false 
          }
        this.events.push(calEvent);
         
      }
      this.events = [...this.events];
      //console.log("Follows events : ");  
      //console.log(this.events);
  })
  }

  subscribeToInsertEvt() {
    this.httpService.addedEvent.subscribe((emitedValue: any) => { 
        this.getDbEvents();
    })
  }

  ngOnChanges(){}

  ngOnInit() {
    this.getDbUsers();
    this.getDbEvents();
    this.subscribeToInsertEvt();
    
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
    let logged_user: PythUser;
    for (let user of this.users) {
      console.log("openDialog() user.id :",user.id);
      console.log("openDialog() this.curr_userId:",this.curr_userId);
       if(user.id == this.curr_userId){
        console.log("openDialog()  :",logged_user);
        logged_user = user;
       }
    }
    console.log("openDialog() loggedUser", logged_user)

    if (clickedWeekViewEvent.event.color.primary != getColors('red').primary
     && !logged_user.is_admin) {
      var hourContainedEvTitle = "";
      //console.log("segment Date in openDialog(): ",this.segment.date ) ; 
      this.httpService.getEvents().subscribe((response) => {
        let responseObj = JSON.parse(response);
        let clickedPythEvtStart = clickedWeekViewEvent.event.start.getTime().toString();
        //console.log("clickedWeekViewEvent.event.start",clickedWeekViewEvent.event.start)
        for (let pythEvt of responseObj) {
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
      
        
      });
    } else if(logged_user.is_admin){
      var hourContainedEvTitle = "";
      //console.log("segment Date in openDialog(): ",this.segment.date ) ; 
      this.httpService.getEvents().subscribe((response) => {
        let responseObj = JSON.parse(response);
        let clickedPythEvtStart = clickedWeekViewEvent.event.start.getTime().toString();
        //console.log("clickedWeekViewEvent.event.start",clickedWeekViewEvent.event.start)
        for (let pythEvt of responseObj) {
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
      
        
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}