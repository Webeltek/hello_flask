import {
  Component,
  Input,
  NgZone,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ElementRef
} from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { switchMapTo, startWith, map, switchMap } from 'rxjs/operators';
import { DateAdapter } from '../../date-adapters/date-adapter';

@Component({
  selector: 'mwl-calendar-week-view-current-time-marker-mob',
  template: `
    <ng-template
      #defaultTemplate
      let-columnDate="columnDate"
      let-dayStartHour="dayStartHour"
      let-dayStartMinute="dayStartMinute"
      let-dayEndHour="dayEndHour"
      let-dayEndMinute="dayEndMinute"
      let-isVisible="isVisible"
      let-topPx="topPx"
    >
      <div
        class="cal-current-time-marker"
        *ngIf="isVisible"
        [style.top.px]="topPx"
      ></div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        columnDate: columnDate,
        dayStartHour: dayStartHour,
        dayStartMinute: dayStartMinute,
        dayEndHour: dayEndHour,
        dayEndMinute: dayEndMinute,
        isVisible: (marker$ | async)?.isVisible,
        topPx: (marker$ | async)?.top
      }"
    >
    </ng-template>
  `,
})
export class CalendarWeekViewCurrentTimeMarkerComponentMob implements OnChanges {
  @Input() columnDate: Date;

  @Input() dayStartHour: number;

  @Input() dayStartMinute: number;

  @Input() dayEndHour: number;

  @Input() dayEndMinute: number;

  @Input() hourSegments: number;

  @Input() hourDuration: number;

  @Input() hourSegmentHeight: number;

  @Input() hourSegmentWidth : number;

  @Input() customTemplate: TemplateRef<any>;

  @Input() columnIndex : number;

  columnDate$ = new BehaviorSubject<Date>(undefined);

  marker$: Observable<{isVisible: boolean; top: number;}> 
  = this.zone.onStable.pipe(
    switchMap(() => interval(60 * 1000)),
    startWith(0),
    switchMapTo(this.columnDate$),
    map((columnDate) => {
      const startOfDay = this.dateAdapter.setMinutes(
        this.dateAdapter.setHours(columnDate, 0),0);
      const endOfDay = this.dateAdapter.setMinutes(
        this.dateAdapter.setHours(columnDate, 5),59);
      const hourWidthModifier = 1;
      const hourHeightModifier =
        (this.hourSegments * this.hourSegmentWidth) /
        (this.hourDuration || 60);
      const nowHours = new Date().getHours();  
      const now = new Date(new Date().setHours(6*nowHours/24));
      if(this.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay &&  now <= endOfDay) 
        {
        //console.log("marker now-startOfDay diff in minutes",this.dateAdapter.differenceInMinutes(now, startOfDay))
        //console.log("marker start-end of day diff in min: ", this.dateAdapter.differenceInMinutes(endOfDay, startOfDay))
        }
      return {
        isVisible:
          this.dateAdapter.isSameDay(columnDate, now) &&
          now >= startOfDay &&
          now <= endOfDay,
        top:
          this.hourSegmentHeight * 
          this.dateAdapter.differenceInMinutes(now, startOfDay) /
          this.dateAdapter.differenceInMinutes(endOfDay, startOfDay),
      };
    })
  );

  constructor(private dateAdapter: DateAdapter, private zone: NgZone) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.columnDate) {
      this.columnDate$.next(changes.columnDate.currentValue);
    }
    if(changes.hourSegmentWidth){
      this.columnDate$.next(this.columnDate)
    }
  }
}
