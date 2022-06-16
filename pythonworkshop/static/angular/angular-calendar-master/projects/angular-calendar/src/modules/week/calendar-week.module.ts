import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarWeekViewComponent } from './calendar-week-view.component';
import { CalendarWeekViewHeaderComponent } from './calendar-week-view-header.component';
import { CalendarWeekViewEventComponent } from './calendar-week-view-event.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarWeekViewHourSegmentComponent, RadioNgModelExample } from './calendar-week-view-hour-segment.component';
import { EventDialog } from './calendar-week-view-hour-segment.component';
import { CalendarWeekViewCurrentTimeMarkerComponent } from './calendar-week-view-current-time-marker.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

export {
  CalendarWeekViewComponent,
  CalendarWeekViewBeforeRenderEvent,
} from './calendar-week-view.component';
export {
  WeekViewAllDayEvent as CalendarWeekViewAllDayEvent,
  WeekViewAllDayEventRow as CalendarWeekViewAllDayEventRow,
  GetWeekViewArgs as CalendarGetWeekViewArgs,
} from 'calendar-utils';
export { getWeekViewPeriod } from '../common/util';

// needed for ivy, not part of the public api
export { CalendarWeekViewHeaderComponent as ɵCalendarWeekViewHeaderComponent } from './calendar-week-view-header.component';
export { CalendarWeekViewEventComponent as ɵCalendarWeekViewEventComponent } from './calendar-week-view-event.component';
export { CalendarWeekViewHourSegmentComponent as ɵCalendarWeekViewHourSegmentComponent } from './calendar-week-view-hour-segment.component';
export { CalendarWeekViewCurrentTimeMarkerComponent as ɵCalendarWeekViewCurrentTimeMarkerComponent } from './calendar-week-view-current-time-marker.component';

@NgModule({
  imports: [
    CommonModule,
    ResizableModule,
    DragAndDropModule,
    CalendarCommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
  ],
  declarations: [
    CalendarWeekViewComponent,
    CalendarWeekViewHeaderComponent,
    CalendarWeekViewEventComponent,
    CalendarWeekViewHourSegmentComponent,
    CalendarWeekViewCurrentTimeMarkerComponent,
    EventDialog,
    RadioNgModelExample,
  ],
  exports: [
    ResizableModule,
    DragAndDropModule,
    CalendarWeekViewComponent,
    CalendarWeekViewHeaderComponent,
    CalendarWeekViewEventComponent,
    CalendarWeekViewHourSegmentComponent,
    CalendarWeekViewCurrentTimeMarkerComponent,
    MatDialogModule,
    EventDialog,
    RadioNgModelExample,
  ],
})
export class CalendarWeekModule {}
