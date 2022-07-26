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
import { PythEvent } from 'projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component';
import { CalendarEventActionsComponent } from 'projects/angular-calendar/src/modules/common/calendar-event-actions.component';
import { addDays } from 'date-fns';
import { HttpResponse } from '@angular/common/http';
import { DateAdapter } from 'projects/angular-calendar/src/date-adapters/date-adapter';

@Component({
  selector: 'app-root',
  templateUrl: './demo-app.html',
  styleUrls: ['./demo-app.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class DemoAppComponent implements OnInit, OnDestroy{

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
  
  registerViewDateChange(){
    
  };

  

  private destroy$ = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private httpService: HttpEventService,
    private dateAdapter: DateAdapter
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

  ngOnChanges(){

  }

  ngOnInit() {
    const CALENDAR_RESPONSIVE = {
      small: {
        breakpoint: '(max-width: 576px)',
        daysInWeek: 2,
      },
      medium: {
        breakpoint: '(max-width: 768px)',
        daysInWeek: 3,
      },
      large: {
        breakpoint: '(max-width: 960px)',
        daysInWeek: 5,
      },
    };

    this.getDbEvents();
    this.subscribeToInsertEvt();

    /* this.breakpointObserver
      .observe(
        Object.values(CALENDAR_RESPONSIVE).map(({ breakpoint }) => breakpoint)
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((state: BreakpointState) => {
        const foundBreakpoint = Object.values(CALENDAR_RESPONSIVE).find(
          ({ breakpoint }) => !!state.breakpoints[breakpoint]
        );
        if (foundBreakpoint) {
          this.daysInWeek = foundBreakpoint.daysInWeek;
        } else {
          this.daysInWeek = 7;
        }
        this.cd.markForCheck();
      }); */
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}