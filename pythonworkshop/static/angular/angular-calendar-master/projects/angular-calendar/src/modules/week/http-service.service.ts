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
    private insertUrl = "/services/insert"

    @Output() addedEvent: EventEmitter<any> = new EventEmitter();

    constructor(private http: HttpClient) { }

    getEvents(){
        return this.http.get<string>(this.servicesUrl,
                        { observe: 'body', responseType : 'json'})
    }

    httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json; charset=UTF-8',
        'Cache-Control': 'no-cache'
    });

    options = { headers : this.httpHeaders}

    insertEvent(pythEvent : PythEvent ){
    this.http.post(this.insertUrl, pythEvent ) 
        .subscribe((response) =>{
            this.addedEvent.emit(null);
            console.log("addEvent() response: " + JSON.stringify(response));
            },
            (error) => { console.log("addEvent() error : " + JSON.stringify(error)) ; }
        )
    }

}
