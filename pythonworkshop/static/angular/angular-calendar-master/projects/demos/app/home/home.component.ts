import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpEventService } from 'projects/angular-calendar/src/modules/week/http-service.service';
import { PythUser } from '../demo-app.component';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, NavigationEnd} from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-root',
  styleUrls: ['./home.component.scss'],
  templateUrl : './home.component.html'
  
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor( private observer: BreakpointObserver,
    public tokenStorage: TokenStorageService, private router: Router) {
     }

  roles: string[] = [];
  userEmail : string = '';
  loginStateSubscription: Subscription = new Subscription();
  breakPointObsSubscr : Subscription = new Subscription();


  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
      this.userEmail = this.tokenStorage.getUser().user_email;
    }
  
  }

  ngAfterViewInit() {
    this.loginStateSubscription = this.tokenStorage.authenticated$.subscribe( (loginState : boolean)=>{
          this.breakPointObsSubscr = this.breakPointObsSubscr = this.observer
          .observe(['(max-width: 800px)'])
          .pipe(delay(1), untilDestroyed(this))
          .subscribe((res) => {
              if (!loginState) {
                this.sidenav.mode = 'over';
                this.sidenav.close();
              } else if(!res.matches && loginState) {
                this.sidenav.mode = 'side';
                this.sidenav.open();
              }
          });
  
          this.router.events
          .pipe(
            untilDestroyed(this),
            filter((e) => e instanceof NavigationEnd)
          )
          .subscribe(() => {
            if (this.sidenav.mode === 'over') {
              this.sidenav.close();
            }
          });
        
      });
  }
    

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['login']);
  }

  ngOnDestroy(){
    this.breakPointObsSubscr.unsubscribe();
    this.loginStateSubscription.unsubscribe();
  }

}
