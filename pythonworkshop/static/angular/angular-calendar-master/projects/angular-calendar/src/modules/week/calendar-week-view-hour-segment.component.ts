import { Component, Inject, Input, Output, TemplateRef , EventEmitter, OnInit} from '@angular/core';
import { WeekViewHourSegment } from 'calendar-utils';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEvent } from 'calendar-utils';
import { FormControl,FormBuilder, FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Console } from 'console';
import { HttpService } from './http-service.service';


export interface DialogData {
  date: Date;
}

export interface PythEvent {
  uid : string;
  row : string;
  title : string;
  start : string;
  end : string;
  color : string;
}

@Component({
  selector: 'mwl-calendar-week-view-hour-segment',
  template: `
    <ng-template
      #defaultTemplate
      let-segment="segment"
      let-locale="locale"
      let-segmentHeight="segmentHeight"
      let-isTimeLabel="isTimeLabel"
      let-daysInWeek="daysInWeek"
    >
      <ng-container *ngIf="isTimeLabel; then hourTemplate else eventTemplate">
      </ng-container>  
    </ng-template>
    <ng-template #hourTemplate>
        <div
          [attr.aria-hidden]="
            {}
              | calendarA11y
                : (daysInWeek === 1
                    ? 'hideDayHourSegment'
                    : 'hideWeekHourSegment')
          "
          class="cal-hour-segment"
          [style.height.px]="segmentHeight"
          [class.cal-hour-start]="segment.isStart"
          [class.cal-after-hour-start]="!segment.isStart"
          [ngClass]="segment.cssClass"
          (click) = "!isTimeLabel ? openDialog() : null"
        >
          <div class="cal-time" *ngIf="isTimeLabel"
          >
            {{
                currentRoom
            }}
          </div>
        </div>
    </ng-template>
    <ng-template #eventTemplate>
        <div
          [attr.aria-hidden]="
            {}
              | calendarA11y
                : (daysInWeek === 1
                    ? 'hideDayHourSegment'
                    : 'hideWeekHourSegment')
          "
          class="cal-hour-segment"
          [style.height.px]="segmentHeight"
          [class.cal-hour-start]="segment.isStart"
          [class.cal-after-hour-start]="!segment.isStart"
          [ngClass]="segment.cssClass"
          (click) = "!isTimeLabel ? openDialog() : null"
        >
          <div class="cal-time" *ngIf="isTimeLabel"
          >
            {{
                currentRoom
            }}
          </div>
        </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale,
        segmentHeight: segmentHeight,
        isTimeLabel: isTimeLabel,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `,
})

export class CalendarWeekViewHourSegmentComponent {
  constructor(public dialog: MatDialog, private httpService: HttpService) {}

  @Input() roomInd : number;

  @Input() segment: WeekViewHourSegment;

  @Input() segmentHeight: number;

  @Input() locale: string;

  @Input() isTimeLabel: boolean;

  @Input() daysInWeek: number;

  @Input() customTemplate: TemplateRef<any>;

  @Input() set currentRoomIndex ( roomNum : number) {
    this.currentRoom = this.rooms[roomNum]
  }

  currentRoom : string;
  rooms : string[] = ["Møterom stort", "Møterom lite", "Møterom 214", "Møterom 210" , "Aktivitet plan"];

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

  pythEvt : PythEvent;

  generateUniqueID( digit = 1000 ) {
    return new Date().getTime().toString(16) + Math.floor( digit * Math.random() ).toString(16)
  }

  generatePythStartEndDate(dayPeriod : string){
    let clickedDate = this.segment.date;
    let startDate, endDate;
    switch (dayPeriod) {
        case "Formiddag" : {
            startDate = clickedDate.setHours(2);
            endDate = clickedDate.setHours(11); 
        }
        case "Ettermiddag" : {
          startDate = clickedDate.setHours(13);
          endDate = clickedDate.setHours(22); 
        }
        case "Heldag" : {
          startDate = clickedDate.setHours(2);
          endDate = clickedDate.setHours(22);   
        }
    }
    return {start : startDate, end : endDate};
  }

  openDialog(){
    const dialogRef = this.dialog.open(EventDialog, {
      data: {
        date: this.segment.date,
        romIndex: this.roomInd,
      },
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
      let startStr = this.generatePythStartEndDate(result); 
      this.pythEvt =  
        {
          uid : this.generateUniqueID(),
          row : this.roomInd.toString(),
          title: result.dayPeriodVal,
          start: this.generatePythStartEndDate(result).start,
          end: this.generatePythStartEndDate(result).end,
          color: this.colors.yellow
        };
      console.log("afterClosed() result:"+ JSON.stringify(this.pythEvt));
      this.addEvent(this.pythEvt);
    },
    (error) => {
      console.log("afterClosed() error : " + error); 
    }
    );
  }

  addEvent(pythEvt : PythEvent) : void {
    this.httpService.insertEvent(pythEvt).subscribe(
      (response) => { console.log("addEvent() response: " + JSON.stringify(response));},
        (error) => { console.log("addEvent() error : " + JSON.stringify(error)) ; }
    )
  }

}

@Component({
  selector: 'event-dialog',
  templateUrl: 'event-dialog.html',
})
export class EventDialog {
  constructor( public dialogRef: MatDialogRef<EventDialog>,
     @Inject(MAT_DIALOG_DATA) public data: { date:Date,romIndex:number },
     public fb: FormBuilder) { 
    }

    valgtPerCtrl = this.fb.control("");
    userForm  = this.fb.group({
        valgtPer : this.valgtPerCtrl
      }); 

  closeDialog(){
    this.dialogRef.close({ dayPeriodVal : this.valgtPerCtrl.value} )
  } 

  perioder: string[] = ['Formiddag','Ettermiddag','Heldag'];

  onSubmit(){
    console.log("onSibmit dialod form value: " + JSON.stringify(this.valgtPerCtrl.value) )
  }

}


/* segment.displayDate
              | calendarDate
                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')
                : locale */
