import { 
  Component, Inject, Input, Output,
  TemplateRef  } from '@angular/core';
import { WeekViewHourSegment } from 'calendar-utils';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEvent } from 'calendar-utils';
import { FormControl,FormBuilder, FormGroup } from '@angular/forms';
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

  private events : CalendarEvent[] = [];

  openDialog()  {
    let clickedSegmDate = this.segment.date;
    this.httpService.getEvents().subscribe( (response) => {
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
      let isBisyDay = false;
      let bisyPeriod = "";

      //console.log("clicked date", this.segment.date)
      
      if (this.events.some((dbEvent : CalendarEvent) => {
          let isClickedDateInsideDbEvent  = this.segment.date >= dbEvent.start && 
                this.segment.date <= dbEvent.end;
          isBisyDay = this.segment.date.getHours() == dbEvent.start.getHours();
          if(isBisyDay){
              bisyPeriod = dbEvent.title;
              console.log("bisyPeriod string: ",bisyPeriod);
          }  
          return !isClickedDateInsideDbEvent; 
          }
        ))
          {
            const dialogRef = this.dialog.open(EventDialog, {
              data: {
                date: clickedSegmDate,
                romIndex: this.roomInd,
                isBisyDay: isBisyDay,
                bisyPeriod : bisyPeriod 
              },
            });

            dialogRef.afterClosed().subscribe(
              (result) => {
                if (typeof result !== 'undefined') {
                  let uniqueId = this.generateUniqueID();
                  let startEndDate = this.generatePythStartEndDate(result.dayPeriodVal,this.roomInd);
                  //console.log("roomInd : " + this.roomInd.toString(10));
                  this.pythEvt =  
                    {
                      uid : uniqueId,
                      row : this.roomInd.toString(),
                      title: result.dayPeriodVal,
                      start: startEndDate.start,
                      end: startEndDate.end,
                      color: "#FFAE00"
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
