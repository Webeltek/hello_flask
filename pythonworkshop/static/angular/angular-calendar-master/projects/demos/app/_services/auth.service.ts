import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
//import { Socket } from 'ngx-socket-io'; 

const AUTH_API = '/api/auth/';
const MAIN_API = '/services/api/'
const baseurl = '';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
    private router: Router,
    //private socket: Socket
    ) { }

  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache'
});

  login(email: string, password: string) {
    return this.http.post(baseurl+AUTH_API + 'login', {
      email,
      password
    }, { headers : this.httpHeaders, observe : 'body'});
  }

  register( email: string, password: string): Observable<any> {
    return this.http.post(baseurl+AUTH_API + 'register', {
      email : email,
      password : password
    }, { headers : this.httpHeaders, observe : 'response', responseType : 'json'} );
  }

  sendAdminRegConfirm( email: string, password: string,temp_user_id: number): Observable<any> {
    return this.http.post(baseurl+AUTH_API + 'reg_admin_confirm', {
      email : email, password: password, temp_user_id
    }, { headers : this.httpHeaders, observe : 'response', responseType : 'json'} );
  }

  changeEmail(newEmail: string, oldpassword: string): Observable<any> {
      return this.http.post(baseurl+MAIN_API + 'changepass', {
        email : newEmail,
        oldpassword : oldpassword
      }, { headers : this.httpHeaders, observe : 'response', responseType : 'json'} );
    }
  

  changePass(email: string, oldpassword: string, newpassword: string): Observable<any> {
    return this.http.post(baseurl+AUTH_API + 'changepass', {
      email : email,
      oldpassword : oldpassword,
      newpassword: newpassword
    }, { headers : this.httpHeaders, observe : 'response', responseType : 'json'} );
  }

  /* getMessage() {
    return this.socket.fromEvent('user_confirmed').pipe(map((data: any) => {
      console.log("AuthServ event user_confirmed received");
    }))
  } */
}
