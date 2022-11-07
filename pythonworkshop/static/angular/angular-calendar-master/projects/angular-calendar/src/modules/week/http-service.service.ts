import { HttpClient } from  '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 

import { Injectable , Output, EventEmitter} from  '@angular/core';
import { PythEvent } from './calendar-week-view-hour-segment.component';
import { map } from 'rxjs/operators';
import { PythUser } from 'projects/demos/app/demo-app.component';

@Injectable({
providedIn:  'root'
})
export class HttpEventService{
    private servicesUrl = "/api/services/events";
    private usersUrl = "/api/services/users"
    private insertUrl = "/api/services/insert";
    private deleteUrl = "/api/services/delete";

    @Output() addedEvent: EventEmitter<any> = new EventEmitter();

    @Output() deletedEvent: EventEmitter<any> = new EventEmitter();

    @Output() clickedEvent: EventEmitter<any> = new EventEmitter();

    constructor(private http: HttpClient) { }

    httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json; charset=UTF-8',
        'Cache-Control': 'no-cache'
    });

    roptions = { headers : this.httpHeaders, observe: 'body', responseType : 'json'}

    getEvents(){
        return this.http.get(this.servicesUrl,
            { headers : this.httpHeaders, observe: 'body', responseType : 'json'})
    }

    getUsers(){
        return this.http.get(this.usersUrl,
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
                this.deletedEvent.emit(null);
                //console.log("deleteEvent() response: " + JSON.stringify(response));
                },
                (error) => { console.log("deleteEvent() error : " + JSON.stringify(error)) ; }
            )
        }

}
