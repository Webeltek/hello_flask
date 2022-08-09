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
import { CalendarEventActionsComponent } from 'projects/angular-calendar/src/modules/common/calendar-event-actions.component';
import { addDays } from 'date-fns';
import { HttpResponse } from '@angular/common/http';
import { DateAdapter } from 'projects/angular-calendar/src/date-adapters/date-adapter';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

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

  
  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  events : CalendarEvent[] = [];
  toBeDeletedPythEvt : PythEvent;

  private destroy$ = new Subject<void>();

  constructor(
    private httpService: HttpEventService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
    
  ) {}

  getDbEvents(){
    this.httpService.getEvents().subscribe((response ) => {
      //console.log("Response type: "+ typeof response);
      this.events = [];
      let responseObj =  JSON.parse(response);
      for (let pythEvt of  responseObj){
        let calEvent : CalendarEvent=  {
            id : pythEvt.uid,
            start : new Date(parseInt(pythEvt.start,10)),
            end : new Date(parseInt(pythEvt.end,10)),
            title : pythEvt.title,
            color : this.colors.blue
          }
        this.events.push(calEvent);    
      }
      this.events = [...this.events]; 
      console.log("Follows events : ");  
      console.log(this.events);
  })
  }

  subscribeToInsertEvt() {
    this.httpService.addedEvent.subscribe((emitedValue: any) => { 
        this.getDbEvents();
    })
  }

  ngOnChanges(){}

  ngOnInit() {
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
    var hourContainedEvTitle = "";
    //console.log("segment Date in openDialog(): ",this.segment.date ) ;
    this.httpService.getEvents().subscribe((response) => {
      let responseObj = JSON.parse(response);
      let clickedPythEvtStart = clickedWeekViewEvent.event.start.getTime().toString();
      //console.log("clickedWeekViewEvent.event.start",clickedWeekViewEvent.event.start)
      for (let pythEvt of responseObj) {
        if ( pythEvt.start == clickedPythEvtStart){
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

  ngOnDestroy() {
    this.destroy$.next();
  }
}