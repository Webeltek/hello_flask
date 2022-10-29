import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = '/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache'
});

  login(email: string, password: string) {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, { headers : this.httpHeaders, observe : 'body'});
  }

  register( email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      email : email,
      password : password
    }, { headers : this.httpHeaders, observe : 'body', responseType : 'json'} );
  }

  confirm( token : string): Observable<any>{
    return this.http.get(AUTH_API + 'confirm/'+token, 
      { headers: this.httpHeaders, observe: 'body', responseType : 'json'});
  }
}
