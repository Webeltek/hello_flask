import { 
  Component, Inject, Input, Output, OnInit,
  TemplateRef, ViewEncapsulation  } from '@angular/core';
import { WeekViewHourSegment } from 'calendar-utils';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEvent } from 'calendar-utils';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Console } from 'console';
import { HttpEventService } from './http-service.service';
import { strictEqual } from 'assert';
import { DateAdapter } from '../../date-adapters/date-adapter';


export interface DialogData {
  date: Date;
}

export interface PythEvent {
  id? : number;
  uid : string;
  userId? : number;
  row : string;
  title : string;
  start : string;
  end : string;
  color : string;
}

export function getColors(colorName : string) {
  switch(colorName) {
    case "red": {
      console.log("getColors() : red")
      return {primary: '#ad2121',secondary: '#FAE3E3' };
      break;
    }
    case "blue" : {
      console.log("getColors() : blue")
      return {primary: '#1e90ff',secondary: '#D1E8FF'};
      break;
    }
    case "yellow": {
      console.log("getColors() : yellow")
      return {primary: '#e3bc08',secondary: '#FDF1BA'};
      break;
    }
  }
};

@Component({
  selector: 'mwl-calendar-week-view-hour-segment',
  template: `
    <ng-template
      #defaultTemplate
      let-segment="segment"
      let-locale="locale"
      let-isOdd="isOdd"
      let-segmentHeight="segmentHeight"
      let-segmentWidth="segmentWidth"
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
          [class.cal-hour-segment-odd]="isOdd"
          [style.height.px]="segmentHeight"
          [style.width.px]="segmentWidth"
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
        <div #divEventTempl
          [attr.aria-hidden]="
            {}
              | calendarA11y
                : (daysInWeek === 1
                    ? 'hideDayHourSegment'
                    : 'hideWeekHourSegment')
          "
          class="cal-hour-segment"
          [style.height.px]="segmentHeight"
          [style.width.px]="segmentWidth"
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
  constructor(
    public dialog: MatDialog, 
    private httpService: HttpEventService) {}

  @Input() roomInd : number;

  @Input() segment: WeekViewHourSegment;

  @Input() isOdd: boolean;

  @Input() segmentHeight: number;

  @Input() locale: string;

  @Input() isTimeLabel: boolean;

  @Input() segmentWidth: number;

  @Input() daysInWeek: number;

  @Input() customTemplate: TemplateRef<any>;

  @Input() set currentRoomIndex ( roomNum : number) {
    this.currentRoom = this.rooms[roomNum]
  }

  currentRoom : string;
  rooms : string[] = ["Møterom stort", "Møterom lite", "Møterom 214", "Møterom 210" , "Aktivitets plan"];


  pythEvt : PythEvent;

  generateUniqueID( digit = 1000 ) {
    return new Date().getTime().toString(16) + Math.floor( digit * Math.random() ).toString(16)
  }

getDateArray( date ) {
    // Helper to get each elements of Date object as an array
    let _dt = date instanceof Date ? date : new Date( date )

        return [ _dt.getFullYear(), _dt.getMonth(), _dt.getDate(), _dt.getHours(), _dt.getMinutes(), _dt.getSeconds(), _dt.getMilliseconds() ]
}

getDateString( date ) {
    // Helper to get Date object as a string of "Y-m-d H:i:s" format
    let _dt = this.getDateArray( date )

    //return _dt[0] +'-'+ (_dt[1] + 1) +'-'+ _dt[2] +' '+ _dt[3] +':'+ _dt[4] +':'+ _dt[5]
    return `${_dt[0]}-${_dt[1] + 1}-${_dt[2]} ${_dt[3]}:${_dt[4]}:${_dt[5]}`
}

  generatePythStartEndDate(dayPeriod : string, roomInd : number){
    let clickDate = new Date(this.segment.date);
    let startDate: number , endDate : number ;
    switch (dayPeriod) {
        case "Formiddag" : {
          startDate = clickDate.setHours(roomInd,0);
          endDate = clickDate.setHours(roomInd,30);
          break;
        }
        case "Ettermiddag" : {
          startDate = clickDate.setHours(roomInd,30);
          console.log("Etterm start hour " + new Date(startDate) );
          endDate = clickDate.setMinutes(new Date(startDate).getMinutes()+30);
          console.log("Etterm end hour " + new Date(endDate));
          break; 
        }
        case "Heldag" : {
          startDate = clickDate.setHours(roomInd,0);
          console.log("Heldag sum roomInd +1 = "+ (roomInd+1).toString())
          endDate = clickDate.setHours(roomInd+1,0);
          break;   
        }
    }
    return { start : startDate.toString(), end : endDate.toString() };
  }

  addEvent(pythEvt : PythEvent) : void {
    this.httpService.insertEvent(pythEvt);
  }

  ngOnInit(){
    this.httpService.clickedEvent.subscribe((clickedEvt) =>{
      this.openDialog();
    })
  }

  private events : CalendarEvent[] = [];

  isClickedOverEvent(){
    let clickedSegmDate = this.segment.date;
    return this.events.length > 0 && this.events.some( (dbEvent : CalendarEvent) => {
      let clickedSegmEndDate = new Date(this.segment.date);
      //console.log("clickedSEGMDATE",this.segment.date);
      clickedSegmEndDate.setMinutes(clickedSegmDate.getMinutes() + 30);
      //console.log("clickedSegmEndDate",clickedSegmEndDate);
      let isClickedOverEvent = dbEvent.start >= this.segment.date &&
      dbEvent.end <= clickedSegmEndDate;  
      return isClickedOverEvent ; 
      })
  }

  openDialog() {
    var hourContainedEvTitle = "";
    //console.log("segment Date in openDialog(): ",this.segment.date ) ;
    this.httpService.getEvents().subscribe((response) => {
      this.events = [];
      let responseObj = JSON.parse(response);
      for (let pythEvt of responseObj) {
        let calEvent: CalendarEvent = {
          id: pythEvt.uid,
          start: new Date(parseInt(pythEvt.start, 10)),
          end: new Date(parseInt(pythEvt.end, 10)),
          title: pythEvt.title,
          color: getColors("blue")
        }
        this.events.push(calEvent);
      }

      if (!this.isClickedOverEvent()) {
        console.log("calWVhourSegm isClick",this.isClickedOverEvent());
        for (var dbEvt of this.events) {
          let segmStartHour = this.segment.date.getHours();
          let modifiedSegmentDate = new Date(this.segment.date);
          let segmStartHourDate = new Date(modifiedSegmentDate.setHours(segmStartHour, 0));
          let segmEndHourDate = new Date(modifiedSegmentDate.setHours(segmStartHour + 1, 0));
          var isDbEventContainedHour =
            dbEvt.start >= segmStartHourDate &&
            dbEvt.end <= segmEndHourDate;
          if (isDbEventContainedHour) {
            hourContainedEvTitle = dbEvt.title;
            console.log("hourContainedEvtTtl", hourContainedEvTitle);
          }
        }
        const dialogRef = this.dialog.open(EventDialog, {
          data: {
            date: this.segment.date,
            rooms: this.rooms,
            romIndex: this.roomInd,
            hourContainedEvTitle: hourContainedEvTitle
          },
        });

        dialogRef.afterClosed().subscribe(
          (result) => {
            if (typeof result !== 'undefined') {
              let uniqueId = this.generateUniqueID();
              let startEndDate = this.generatePythStartEndDate(result.dayPeriodVal, this.roomInd);
              //console.log("roomInd : " + this.roomInd.toString(10));
              this.pythEvt =
              {
                uid: uniqueId,
                row: this.roomInd.toString(),
                title: result.dayPeriodVal,
                start: startEndDate.start,
                end: startEndDate.end,
                color: "blue"
              };
              //console.log("afterClosed() result:", this.pythEvt);
              this.addEvent(this.pythEvt);
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

@Component({
  selector: 'event-dialog',
  templateUrl: 'event-dialog.html',
  styleUrls: ['event-dialog.scss']
})
export class EventDialog {
  constructor( public dialogRef: MatDialogRef<EventDialog>,
     @Inject(MAT_DIALOG_DATA) public data: {
      clickedDbEvt : CalendarEvent, 
      toBeDeleted : boolean,
      toBeDeletedPythEvt : PythEvent,
      date:Date,romIndex:number,
      hourContainedEvTitle: string },
     public fb: FormBuilder) {}

    containedEvTitle = this.data.hourContainedEvTitle;
    toBeDeleted = this.data.toBeDeleted;
    rooms : string[] = ["Møterom stort", "Møterom lite", "Møterom 214", "Møterom 210" , "Aktivitets plan"];

    valgtPerCtrl = this.fb.control("");
    userForm  = this.fb.group({
        valgtPer : this.valgtPerCtrl
      });
      
  

  closeDialog(){
    this.dialogRef.close({
      clickedDbEvt: this.data.clickedDbEvt, 
      dayPeriodVal : this.valgtPerCtrl.value, 
      toBeDeleted : this.data.toBeDeleted, 
      toBeDeletedPythEvt : this.data.toBeDeletedPythEvt
      } )
  }
  
  ngOnInit(){} 

  get remPerioder() {
    let perioder = ['Formiddag','Ettermiddag','Heldag'];
    //console.log("containedEvtTitl", this.data.hourContainedEvTitle);
    if (this.containedEvTitle!="") {
      perioder = perioder.filter( (perVal) =>{
        let containedEvtTitle = this.containedEvTitle;
        //console.log("remPerCondition :",perVal != containedEvtTitle && perVal !='Heldag');
           return perVal != containedEvtTitle && perVal !='Heldag';
         })
       return perioder;
    } else {
      return perioder;
    }
    
  }
  

  onSubmit(){
    //console.log("onSibmit dialod form value: " + JSON.stringify(this.valgtPerCtrl.value) )
  }

}


/* segment.displayDate
              | calendarDate
                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')
                : locale */
