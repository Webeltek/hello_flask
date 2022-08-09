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


@NgModule({
  declarations: [
    DemoAppComponent
  ],
  imports: [
    BrowserModule,
    
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

    BrowserAnimationsModule
  ],
  providers : [
    { provide: LOCALE_ID, useValue: 'nb' }],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule { 
  constructor(){
    registerLocaleData(localeNo);
  }
}
