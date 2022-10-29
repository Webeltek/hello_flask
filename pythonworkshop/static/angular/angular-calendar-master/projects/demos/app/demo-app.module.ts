import { registerLocaleData } from '@angular/common';
import localeNo from '@angular/common/locales/nb';
import { NgModule , LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { DemoAppComponent } from './demo-app.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ROUTES } from './demo-app.routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmComponent } from './confirm/confirm.component';
import { authInterceptorProviders } from './_helpers/auth-interceptor.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    DemoAppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ConfirmComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers : [
    { provide: LOCALE_ID, useValue: 'nb' },
    authInterceptorProviders],
  bootstrap: [HomeComponent]
})
export class DemoAppModule { 
  constructor(){
    registerLocaleData(localeNo);
  }
}
