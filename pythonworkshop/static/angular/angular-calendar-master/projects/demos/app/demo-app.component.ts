import { Component, Input,
  OnInit,
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

@Component({
  selector: 'app-root',
  templateUrl: './demo-app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  daysInWeek = 14;
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

  events: CalendarEvent[] = [
    {
      title: 'Click me',
      color: this.colors.yellow,
      start: new Date(2022,5,12,1),
      end: new Date(2022,5,12,3),
    },
    {
      title: 'Or click me',
      color: this.colors.blue,
      start: new Date(2022,5,13,4),
      end: new Date(2022,5,13,6),
    },
  ];

  private destroy$ = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {}

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