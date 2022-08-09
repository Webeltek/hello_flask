import { HttpClient } from  '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 

import { Injectable , Output, EventEmitter} from  '@angular/core';
import { PythEvent } from './calendar-week-view-hour-segment.component';
import { map } from 'rxjs/operators';

@Injectable({
providedIn:  'root'
})
export class HttpEventService{
    private servicesUrl = "/services/events";
    private insertUrl = "/services/insert";
    private deleteUrl = "/services/delete";

    @Output() addedEvent: EventEmitter<any> = new EventEmitter();

    @Output() clickedEvent: EventEmitter<any> = new EventEmitter();

    constructor(private http: HttpClient) { }

    httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json; charset=UTF-8',
        'Cache-Control': 'no-cache'
    });

    roptions = { headers : this.httpHeaders, observe: 'body', responseType : 'json'}

    getEvents(){
        return this.http.get<string>(this.servicesUrl,
            { headers : this.httpHeaders, observe: 'body', responseType : 'json'})
    }

    insertEvent(pythEvent : PythEvent ){
    this.http.post(this.insertUrl, pythEvent, 
        { headers : this.httpHeaders, observe: 'body', responseType : 'json'} ) 
        .subscribe((response) =>{
            this.addedEvent.emit(null);
            console.log("addEvent() response: " + JSON.stringify(response));
            },
            (error) => { console.log("addEvent() error : " + JSON.stringify(error)) ; }
        )
    }

    deleteEvent(uid : string ){
        this.http.post(this.deleteUrl, {uid: uid},
            { headers : this.httpHeaders, observe: 'body', responseType : 'json'} ) 
            .subscribe((response) =>{
                this.addedEvent.emit(null);
                console.log("deleteEvent() response: " + JSON.stringify(response));
                },
                (error) => { console.log("deleteEvent() error : " + JSON.stringify(error)) ; }
            )
        }

}
