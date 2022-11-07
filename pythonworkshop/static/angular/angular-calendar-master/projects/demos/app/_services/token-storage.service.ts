import { Injectable ,  Output, EventEmitter} from '@angular/core';
import { BehaviorSubject } from 'rxjs';


const CONFIRM_KEY = 'confirm-token'
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  currenLoginState = this.authenticated$.asObservable();

  signOut(): void {
    window.sessionStorage.clear();
    this.authenticated$.next(false);
  }

  public saveConfirmToken(token: string): void {
    window.sessionStorage.removeItem(CONFIRM_KEY);
    window.sessionStorage.setItem(CONFIRM_KEY, token);
  }

  public getConfirmToken(): string | null {
    return window.sessionStorage.getItem(CONFIRM_KEY);
  }
  
  public saveToken(token: string): void {
    //console.log("tokenStorage saveToken() token:",token)
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.authenticated$.next(true)
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      this.authenticated$.next(true);
      //console.log("tokenStorage getUser():",JSON.parse(user))
      return JSON.parse(user);
    }

    return {};
  }
}

