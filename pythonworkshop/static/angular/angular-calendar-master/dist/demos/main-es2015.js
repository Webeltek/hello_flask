(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90008:
/*!*********************************************************************!*\
  !*** ./projects/angular-calendar/src/date-adapters/date-adapter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAdapter": function() { return /* binding */ DateAdapter; }
/* harmony export */ });
class DateAdapter {}

/***/ }),

/***/ 20789:
/*!***********************************************************************!*\
  !*** ./projects/angular-calendar/src/date-adapters/date-fns/index.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapterFactory": function() { return /* binding */ adapterFactory; }
/* harmony export */ });
/* harmony import */ var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils/date-adapters/date-fns */ 47421);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 48749);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 71387);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 12260);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 81770);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 94395);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 52259);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 86453);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 75494);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 93510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 69695);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 75689);


function adapterFactory() {
  return Object.assign(Object.assign({}, (0,calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__.adapterFactory)()), {
    addWeeks: date_fns__WEBPACK_IMPORTED_MODULE_1__.default,
    addMonths: date_fns__WEBPACK_IMPORTED_MODULE_2__.default,
    subDays: date_fns__WEBPACK_IMPORTED_MODULE_3__.default,
    subWeeks: date_fns__WEBPACK_IMPORTED_MODULE_4__.default,
    subMonths: date_fns__WEBPACK_IMPORTED_MODULE_5__.default,
    getISOWeek: date_fns__WEBPACK_IMPORTED_MODULE_6__.default,
    setDate: date_fns__WEBPACK_IMPORTED_MODULE_7__.default,
    setMonth: date_fns__WEBPACK_IMPORTED_MODULE_8__.default,
    setYear: date_fns__WEBPACK_IMPORTED_MODULE_9__.default,
    getDate: date_fns__WEBPACK_IMPORTED_MODULE_10__.default,
    getYear: date_fns__WEBPACK_IMPORTED_MODULE_11__.default
  });
}

/***/ }),

/***/ 3746:
/*!******************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/calendar.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarA11y": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarA11y; },
/* harmony export */   "CalendarAngularDateFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarAngularDateFormatter; },
/* harmony export */   "CalendarCommonModule": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule; },
/* harmony export */   "CalendarDateFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarDateFormatter; },
/* harmony export */   "CalendarEventTimesChangedEventType": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTimesChangedEventType; },
/* harmony export */   "CalendarEventTitleFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTitleFormatter; },
/* harmony export */   "CalendarMomentDateFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarMomentDateFormatter; },
/* harmony export */   "CalendarNativeDateFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarNativeDateFormatter; },
/* harmony export */   "CalendarUtils": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarUtils; },
/* harmony export */   "CalendarView": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarView; },
/* harmony export */   "DAYS_OF_WEEK": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.DAYS_OF_WEEK; },
/* harmony export */   "DateAdapter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.DateAdapter; },
/* harmony export */   "MOMENT": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.MOMENT; },
/* harmony export */   "ɵCalendarA11yPipe": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarA11yPipe"]; },
/* harmony export */   "ɵCalendarDatePipe": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarDatePipe"]; },
/* harmony export */   "ɵCalendarEventActionsComponent": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarEventActionsComponent"]; },
/* harmony export */   "ɵCalendarEventTitleComponent": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarEventTitleComponent"]; },
/* harmony export */   "ɵCalendarEventTitlePipe": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarEventTitlePipe"]; },
/* harmony export */   "ɵCalendarNextViewDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarNextViewDirective"]; },
/* harmony export */   "ɵCalendarPreviousViewDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarPreviousViewDirective"]; },
/* harmony export */   "ɵCalendarTodayDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarTodayDirective"]; },
/* harmony export */   "ɵCalendarTooltipDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarTooltipDirective"]; },
/* harmony export */   "ɵCalendarTooltipWindowComponent": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarTooltipWindowComponent"]; },
/* harmony export */   "ɵClickDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵClickDirective"]; },
/* harmony export */   "ɵKeydownEnterDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵKeydownEnterDirective"]; },
/* harmony export */   "CalendarMonthModule": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule; },
/* harmony export */   "CalendarMonthViewComponent": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthViewComponent; },
/* harmony export */   "collapseAnimation": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.collapseAnimation; },
/* harmony export */   "ɵCalendarMonthCellComponent": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__["ɵCalendarMonthCellComponent"]; },
/* harmony export */   "ɵCalendarMonthViewHeaderComponent": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__["ɵCalendarMonthViewHeaderComponent"]; },
/* harmony export */   "ɵCalendarOpenDayEventsComponent": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__["ɵCalendarOpenDayEventsComponent"]; },
/* harmony export */   "CalendarWeekModule": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule; },
/* harmony export */   "CalendarWeekViewComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewComponent; },
/* harmony export */   "getWeekViewPeriod": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.getWeekViewPeriod; },
/* harmony export */   "ɵCalendarWeekViewCurrentTimeMarkerComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewCurrentTimeMarkerComponent"]; },
/* harmony export */   "ɵCalendarWeekViewEventComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewEventComponent"]; },
/* harmony export */   "ɵCalendarWeekViewHeaderComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewHeaderComponent"]; },
/* harmony export */   "ɵCalendarWeekViewHourSegmentComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewHourSegmentComponent"]; },
/* harmony export */   "CalendarDayModule": function() { return /* reexport safe */ _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule; },
/* harmony export */   "CalendarDayViewComponent": function() { return /* reexport safe */ _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayViewComponent; },
/* harmony export */   "CalendarModule": function() { return /* binding */ CalendarModule; }
/* harmony export */ });
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/calendar-common.module */ 38711);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/calendar-common.module */ 6693);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/calendar-common.module */ 40199);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/calendar-common.module */ 67400);
/* harmony import */ var _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month/calendar-month.module */ 5465);
/* harmony import */ var _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week/calendar-week.module */ 47175);
/* harmony import */ var _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day/calendar-day.module */ 88533);
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/calendar-utils.provider */ 27579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);










/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */

let CalendarModule = /*#__PURE__*/(() => {
  class CalendarModule {
    static forRoot(dateAdapter, config = {}) {
      return {
        ngModule: CalendarModule,
        providers: [dateAdapter, config.eventTitleFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_4__.CalendarEventTitleFormatter, config.dateFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_5__.CalendarDateFormatter, config.utils || _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarUtils, config.a11y || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__.CalendarA11y]
      };
    }

  }

  CalendarModule.ɵfac = function CalendarModule_Factory(t) {
    return new (t || CalendarModule)();
  };

  CalendarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: CalendarModule
  });
  CalendarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [[_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule, _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule, _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule, _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule, _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule]
  });
  return CalendarModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CalendarModule, {
    imports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule, _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule, _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule],
    exports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule, _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule, _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule]
  });
})();

/***/ }),

/***/ 62479:
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarA11yPipe": function() { return /* binding */ CalendarA11yPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-a11y.provider */ 40199);




/**
 * This pipe is primarily for rendering aria labels. Example usage:
 * ```typescript
 * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
 * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
 * ```
 */

let CalendarA11yPipe = /*#__PURE__*/(() => {
  class CalendarA11yPipe {
    constructor(calendarA11y, locale) {
      this.calendarA11y = calendarA11y;
      this.locale = locale;
    }

    transform(a11yParams, method) {
      a11yParams.locale = a11yParams.locale || this.locale;

      if (typeof this.calendarA11y[method] === 'undefined') {
        const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarA11y.prototype)).filter(iMethod => iMethod !== 'constructor');
        throw new Error(`${method} is not a valid a11y method. Can only be one of ${allowedMethods.join(', ')}`);
      }

      return this.calendarA11y[method](a11yParams);
    }

  }

  CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) {
    return new (t || CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarA11y, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID, 16));
  };

  CalendarA11yPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "calendarA11y",
    type: CalendarA11yPipe,
    pure: true
  });
  return CalendarA11yPipe;
})();

/***/ }),

/***/ 40199:
/*!********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-a11y.provider.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarA11y": function() { return /* binding */ CalendarA11y; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



/**
 * This class is responsible for adding accessibility to the calendar.
 * You may override any of its methods via angulars DI to suit your requirements.
 * For example:
 *
 * ```typescript
 * import { A11yParams, CalendarA11y } from 'angular-calendar';
 * import { formatDate, I18nPluralPipe } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * // adding your own a11y params
 * export interface CustomA11yParams extends A11yParams {
 *   isDrSuess?: boolean;
 * }
 *
 * @Injectable()
 * export class CustomCalendarA11y extends CalendarA11y {
 *   constructor(protected i18nPlural: I18nPluralPipe) {
 *     super(i18nPlural);
 *   }
 *
 *   // overriding a function
 *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
 *     if (isDrSuess) {
 *       return `
 *         ${formatDate(date, 'EEEE MMMM d', locale)}
 *          Today you are you! That is truer than true! There is no one alive
 *          who is you-er than you!
 *       `;
 *     }
 *   }
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *  provide: CalendarA11y,
 *  useClass: CustomCalendarA11y
 * }]
 * ```
 */

let CalendarA11y = /*#__PURE__*/(() => {
  class CalendarA11y {
    constructor(i18nPlural) {
      this.i18nPlural = i18nPlural;
    }
    /**
     * Aria label for the badges/date of a cell
     * @example: `Saturday October 19 1 event click to expand`
     */


    monthCell({
      day,
      locale
    }) {
      if (day.badgeTotal > 0) {
        return `
        ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(day.date, 'EEEE MMMM d', locale)},
        ${this.i18nPlural.transform(day.badgeTotal, {
          '=0': 'No events',
          '=1': 'One event',
          other: '# events'
        })},
         click to expand
      `;
      } else {
        return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(day.date, 'EEEE MMMM d', locale)}`;
      }
    }
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */


    openDayEventsLandmark({
      date,
      locale
    }) {
      return `
      Beginning of expanded view for ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE MMMM dd', locale)}
    `;
    }
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */


    openDayEventsAlert({
      date,
      locale
    }) {
      return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE MMMM dd', locale)} expanded`;
    }
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */


    eventDescription({
      event,
      locale
    }) {
      if (event.allDay === true) {
        return this.allDayEventDescription({
          event,
          locale
        });
      }

      const aria = `
      ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.start, 'EEEE MMMM dd', locale)},
      ${event.title}, from ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.start, 'hh:mm a', locale)}
    `;

      if (event.end) {
        return aria + ` to ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.end, 'hh:mm a', locale)}`;
      }

      return aria;
    }
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */


    allDayEventDescription({
      event,
      locale
    }) {
      const aria = `
      ${event.title}, event spans multiple days:
      start time ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.start, 'MMMM dd hh:mm a', locale)}
    `;

      if (event.end) {
        return aria + `, stop time ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.end, 'MMMM d hh:mm a', locale)}`;
      }

      return aria + `, no stop time`;
    }
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */


    actionButtonLabel({
      action
    }) {
      return action.a11yLabel;
    }
    /**
     * @returns {number} Tab index to be given to month cells
     */


    monthCellTabIndex() {
      return 0;
    }
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */


    hideMonthCellEvents() {
      return true;
    }
    /**
     * @returns true if event titles should be aria-hidden (global)
     */


    hideEventTitle() {
      return true;
    }
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */


    hideWeekHourSegment() {
      return true;
    }
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */


    hideDayHourSegment() {
      return true;
    }

  }

  CalendarA11y.ɵfac = function CalendarA11y_Factory(t) {
    return new (t || CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.I18nPluralPipe));
  };

  CalendarA11y.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CalendarA11y,
    factory: CalendarA11y.ɵfac
  });
  return CalendarA11y;
})();

/***/ }),

/***/ 6366:
/*!**************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarAngularDateFormatter": function() { return /* binding */ CalendarAngularDateFormatter; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);




/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */

let CalendarAngularDateFormatter = /*#__PURE__*/(() => {
  class CalendarAngularDateFormatter {
    constructor(dateAdapter) {
      this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */


    monthViewColumnHeader({
      date,
      locale
    }) {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE', locale);
    }
    /**
     * The month view cell day number
     */


    monthViewDayNumber({
      date,
      locale
    }) {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'd', locale);
    }
    /**
     * The month view title
     */


    monthViewTitle({
      date,
      locale
    }) {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'LLLL y', locale);
    }
    /**
     * The week view header week day labels
     */


    weekViewColumnHeader({
      date,
      locale
    }) {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE', locale);
    }
    /**
     * The week view sub header day and month labels
     */


    weekViewColumnSubHeader({
      date,
      locale
    }) {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'MMM d', locale);
    }
    /**
     * The week view title
     */


    weekViewTitle({
      date,
      locale,
      weekStartsOn,
      excludeDays,
      daysInWeek
    }) {
      const {
        viewStart,
        viewEnd
      } = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getWeekViewPeriod)(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);

      const format = (dateToFormat, showYear) => (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);

      return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */


    weekViewHour({
      date,
      locale
    }) {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'h a', locale);
    }
    /**
     * The time formatting down the left hand side of the day view
     */


    dayViewHour({
      date,
      locale
    }) {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'h a', locale);
    }
    /**
     * The day view title
     */


    dayViewTitle({
      date,
      locale
    }) {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE, MMMM d, y', locale);
    }

  }

  CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) {
    return new (t || CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__.DateAdapter));
  };

  CalendarAngularDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CalendarAngularDateFormatter,
    factory: CalendarAngularDateFormatter.ɵfac
  });
  return CalendarAngularDateFormatter;
})();

/***/ }),

/***/ 67400:
/*!********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-common.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTitleFormatter": function() { return /* reexport safe */ _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTitleFormatter; },
/* harmony export */   "CalendarMomentDateFormatter": function() { return /* reexport safe */ _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__.CalendarMomentDateFormatter; },
/* harmony export */   "MOMENT": function() { return /* reexport safe */ _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__.MOMENT; },
/* harmony export */   "CalendarNativeDateFormatter": function() { return /* reexport safe */ _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__.CalendarNativeDateFormatter; },
/* harmony export */   "CalendarAngularDateFormatter": function() { return /* reexport safe */ _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_3__.CalendarAngularDateFormatter; },
/* harmony export */   "CalendarDateFormatter": function() { return /* reexport safe */ _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__.CalendarDateFormatter; },
/* harmony export */   "CalendarUtils": function() { return /* reexport safe */ _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__.CalendarUtils; },
/* harmony export */   "CalendarA11y": function() { return /* reexport safe */ _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarA11y; },
/* harmony export */   "CalendarEventTimesChangedEventType": function() { return /* reexport safe */ _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_7__.CalendarEventTimesChangedEventType; },
/* harmony export */   "DateAdapter": function() { return /* reexport safe */ _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__.DateAdapter; },
/* harmony export */   "CalendarView": function() { return /* reexport safe */ _calendar_view_enum__WEBPACK_IMPORTED_MODULE_9__.CalendarView; },
/* harmony export */   "ɵCalendarEventActionsComponent": function() { return /* reexport safe */ _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventActionsComponent; },
/* harmony export */   "ɵCalendarEventTitleComponent": function() { return /* reexport safe */ _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventTitleComponent; },
/* harmony export */   "ɵCalendarTooltipDirective": function() { return /* reexport safe */ _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipDirective; },
/* harmony export */   "ɵCalendarTooltipWindowComponent": function() { return /* reexport safe */ _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipWindowComponent; },
/* harmony export */   "ɵCalendarPreviousViewDirective": function() { return /* reexport safe */ _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarPreviousViewDirective; },
/* harmony export */   "ɵCalendarNextViewDirective": function() { return /* reexport safe */ _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective; },
/* harmony export */   "ɵCalendarTodayDirective": function() { return /* reexport safe */ _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__.CalendarTodayDirective; },
/* harmony export */   "ɵCalendarDatePipe": function() { return /* reexport safe */ _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarDatePipe; },
/* harmony export */   "ɵCalendarEventTitlePipe": function() { return /* reexport safe */ _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__.CalendarEventTitlePipe; },
/* harmony export */   "ɵClickDirective": function() { return /* reexport safe */ _click_directive__WEBPACK_IMPORTED_MODULE_18__.ClickDirective; },
/* harmony export */   "ɵKeydownEnterDirective": function() { return /* reexport safe */ _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__.KeydownEnterDirective; },
/* harmony export */   "ɵCalendarA11yPipe": function() { return /* reexport safe */ _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__.CalendarA11yPipe; },
/* harmony export */   "DAYS_OF_WEEK": function() { return /* reexport safe */ calendar_utils__WEBPACK_IMPORTED_MODULE_21__.DAYS_OF_WEEK; },
/* harmony export */   "CalendarCommonModule": function() { return /* binding */ CalendarCommonModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar-event-actions.component */ 32136);
/* harmony import */ var _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar-event-title.component */ 58974);
/* harmony import */ var _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar-tooltip.directive */ 69416);
/* harmony import */ var _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar-previous-view.directive */ 31726);
/* harmony import */ var _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calendar-next-view.directive */ 60897);
/* harmony import */ var _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./calendar-today.directive */ 22167);
/* harmony import */ var _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./calendar-date.pipe */ 12153);
/* harmony import */ var _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./calendar-event-title.pipe */ 44602);
/* harmony import */ var _click_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./click.directive */ 81567);
/* harmony import */ var _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keydown-enter.directive */ 93759);
/* harmony import */ var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-event-title-formatter.provider */ 38711);
/* harmony import */ var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-date-formatter.provider */ 6693);
/* harmony import */ var _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-utils.provider */ 27579);
/* harmony import */ var _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-a11y.provider */ 40199);
/* harmony import */ var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./calendar-a11y.pipe */ 62479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-moment-date-formatter.provider */ 19898);
/* harmony import */ var _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-native-date-formatter.provider */ 90316);
/* harmony import */ var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-angular-date-formatter.provider */ 6366);
/* harmony import */ var _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar-event-times-changed-event.interface */ 91203);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);
/* harmony import */ var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-view.enum */ 4606);
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! calendar-utils */ 90489);




























 // needed for ivy, not part of the public api













/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */

let CalendarCommonModule = /*#__PURE__*/(() => {
  class CalendarCommonModule {
    static forRoot(dateAdapter, config = {}) {
      return {
        ngModule: CalendarCommonModule,
        providers: [dateAdapter, config.eventTitleFormatter || _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTitleFormatter, config.dateFormatter || _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__.CalendarDateFormatter, config.utils || _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__.CalendarUtils, config.a11y || _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarA11y]
      };
    }

  }

  CalendarCommonModule.ɵfac = function CalendarCommonModule_Factory(t) {
    return new (t || CalendarCommonModule)();
  };

  CalendarCommonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: CalendarCommonModule
  });
  CalendarCommonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.I18nPluralPipe],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule]]
  });
  return CalendarCommonModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](CalendarCommonModule, {
    declarations: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventActionsComponent, _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventTitleComponent, _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipWindowComponent, _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipDirective, _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarPreviousViewDirective, _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective, _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__.CalendarTodayDirective, _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarDatePipe, _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__.CalendarEventTitlePipe, _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__.CalendarA11yPipe, _click_directive__WEBPACK_IMPORTED_MODULE_18__.ClickDirective, _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__.KeydownEnterDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule],
    exports: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventActionsComponent, _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventTitleComponent, _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipWindowComponent, _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipDirective, _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarPreviousViewDirective, _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective, _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__.CalendarTodayDirective, _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarDatePipe, _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__.CalendarEventTitlePipe, _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__.CalendarA11yPipe, _click_directive__WEBPACK_IMPORTED_MODULE_18__.ClickDirective, _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__.KeydownEnterDirective]
  });
})();

/***/ }),

/***/ 6693:
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDateFormatter": function() { return /* binding */ CalendarDateFormatter; }
/* harmony export */ });
/* harmony import */ var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-angular-date-formatter.provider */ 6366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { formatDate } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * @Injectable()
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return formatDate(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */

let CalendarDateFormatter = /*#__PURE__*/(() => {
  class CalendarDateFormatter extends _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarAngularDateFormatter {}

  CalendarDateFormatter.ɵfac = /*@__PURE__*/function () {
    let ɵCalendarDateFormatter_BaseFactory;
    return function CalendarDateFormatter_Factory(t) {
      return (ɵCalendarDateFormatter_BaseFactory || (ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CalendarDateFormatter)))(t || CalendarDateFormatter);
    };
  }();

  CalendarDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CalendarDateFormatter,
    factory: CalendarDateFormatter.ɵfac
  });
  return CalendarDateFormatter;
})();

/***/ }),

/***/ 12153:
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDatePipe": function() { return /* binding */ CalendarDatePipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-date-formatter.provider */ 6693);




/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */

let CalendarDatePipe = /*#__PURE__*/(() => {
  class CalendarDatePipe {
    constructor(dateFormatter, locale) {
      this.dateFormatter = dateFormatter;
      this.locale = locale;
    }

    transform(date, method, locale = this.locale, weekStartsOn = 0, excludeDays = [], daysInWeek) {
      if (typeof this.dateFormatter[method] === 'undefined') {
        const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarDateFormatter.prototype)).filter(iMethod => iMethod !== 'constructor');
        throw new Error(`${method} is not a valid date formatter. Can only be one of ${allowedMethods.join(', ')}`);
      }

      return this.dateFormatter[method]({
        date,
        locale,
        weekStartsOn,
        excludeDays,
        daysInWeek
      });
    }

  }

  CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) {
    return new (t || CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarDateFormatter, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID, 16));
  };

  CalendarDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "calendarDate",
    type: CalendarDatePipe,
    pure: true
  });
  return CalendarDatePipe;
})();

/***/ }),

/***/ 45824:
/*!***************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-drag-helper.provider.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDragHelper": function() { return /* binding */ CalendarDragHelper; }
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 33878);

class CalendarDragHelper {
  constructor(dragContainerElement, draggableElement) {
    this.dragContainerElement = dragContainerElement;
    this.startPosition = draggableElement.getBoundingClientRect();
  }

  validateDrag({
    x,
    y,
    snapDraggedEvents,
    dragAlreadyMoved,
    transform
  }) {
    const isDraggedWithinThreshold = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isWithinThreshold)({
      x,
      y
    }) || dragAlreadyMoved;

    if (snapDraggedEvents) {
      const inner = Object.assign({}, this.startPosition, {
        left: this.startPosition.left + transform.x,
        right: this.startPosition.right + transform.x,
        top: this.startPosition.top + transform.y,
        bottom: this.startPosition.bottom + transform.y
      });

      if (isDraggedWithinThreshold) {
        const outer = this.dragContainerElement.getBoundingClientRect();
        const isTopInside = outer.top < inner.top && inner.top < outer.bottom;
        const isBottomInside = outer.top < inner.bottom && inner.bottom < outer.bottom;
        return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isInsideLeftAndRight)(outer, inner) && (isTopInside || isBottomInside);
      }
      /* istanbul ignore next */


      return false;
    } else {
      return isDraggedWithinThreshold;
    }
  }

}

/***/ }),

/***/ 32136:
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventActionsComponent": function() { return /* binding */ CalendarEventActionsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click.directive */ 81567);
/* harmony import */ var _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keydown-enter.directive */ 93759);
/* harmony import */ var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-a11y.pipe */ 62479);






const _c0 = function (a0) {
  return {
    action: a0
  };
};

function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template_a_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const action_r7 = restoredCtx.$implicit;
      const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).event;
      return action_r7.onClick({
        event: event_r3,
        sourceEvent: $event
      });
    })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template_a_mwlKeydownEnter_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const action_r7 = restoredCtx.$implicit;
      const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).event;
      return action_r7.onClick({
        event: event_r3,
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const action_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", action_r7.cssClass)("innerHtml", action_r7.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, action_r7), "actionButtonLabel"));
  }
}

function CalendarEventActionsComponent_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template, 3, 8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const event_r3 = ctx_r13.event;
    const trackByActionId_r4 = ctx_r13.trackByActionId;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r4);
  }
}

function CalendarEventActionsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_1_span_1_Template, 4, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
  }

  if (rf & 2) {
    const event_r3 = ctx.event;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r3.actions);
  }
}

function CalendarEventActionsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
  }
}

const _c1 = function (a0, a1) {
  return {
    event: a0,
    trackByActionId: a1
  };
};

let CalendarEventActionsComponent = /*#__PURE__*/(() => {
  class CalendarEventActionsComponent {
    constructor() {
      this.trackByActionId = (index, action) => action.id ? action.id : action;
    }

  }

  CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) {
    return new (t || CalendarEventActionsComponent)();
  };

  CalendarEventActionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarEventActionsComponent,
    selectors: [["mwl-calendar-event-actions"]],
    inputs: {
      event: "event",
      customTemplate: "customTemplate"
    },
    decls: 6,
    vars: 5,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]],
    template: function CalendarEventActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarEventActionsComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _click_directive__WEBPACK_IMPORTED_MODULE_2__.ClickDirective, _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_3__.KeydownEnterDirective],
    pipes: [_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_4__.CalendarA11yPipe],
    encapsulation: 2
  });
  return CalendarEventActionsComponent;
})();

/***/ }),

/***/ 91203:
/*!******************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTimesChangedEventType": function() { return /* binding */ CalendarEventTimesChangedEventType; }
/* harmony export */ });
var CalendarEventTimesChangedEventType = /*#__PURE__*/(() => {
  (function (CalendarEventTimesChangedEventType) {
    CalendarEventTimesChangedEventType["Drag"] = "drag";
    CalendarEventTimesChangedEventType["Drop"] = "drop";
    CalendarEventTimesChangedEventType["Resize"] = "resize";
  })(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));

  return CalendarEventTimesChangedEventType;
})();

/***/ }),

/***/ 38711:
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTitleFormatter": function() { return /* binding */ CalendarEventTitleFormatter; }
/* harmony export */ });
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * @Injectable()
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
class CalendarEventTitleFormatter {
  /**
   * The month view event title.
   */
  month(event, title) {
    return event.title;
  }
  /**
   * The month view event tooltip. Return a falsey value from this to disable the tooltip.
   */


  monthTooltip(event, title) {
    return event.title;
  }
  /**
   * The week view event title.
   */


  week(event, title) {
    return event.title;
  }
  /**
   * The week view event tooltip. Return a falsey value from this to disable the tooltip.
   */


  weekTooltip(event, title) {
    return event.title;
  }
  /**
   * The day view event title.
   */


  day(event, title) {
    return event.title;
  }
  /**
   * The day view event tooltip. Return a falsey value from this to disable the tooltip.
   */


  dayTooltip(event, title) {
    return event.title;
  }

}

/***/ }),

/***/ 58974:
/*!****************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTitleComponent": function() { return /* binding */ CalendarEventTitleComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-event-title.pipe */ 44602);
/* harmony import */ var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-a11y.pipe */ 62479);





const _c0 = function () {
  return {};
};

function CalendarEventTitleComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
  }

  if (rf & 2) {
    const event_r3 = ctx.event;
    const view_r4 = ctx.view;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, event_r3.title, view_r4, event_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0), "hideEventTitle"));
  }
}

function CalendarEventTitleComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
  }
}

const _c1 = function (a0, a1) {
  return {
    event: a0,
    view: a1
  };
};

let CalendarEventTitleComponent = /*#__PURE__*/(() => {
  class CalendarEventTitleComponent {}

  CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) {
    return new (t || CalendarEventTitleComponent)();
  };

  CalendarEventTitleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarEventTitleComponent,
    selectors: [["mwl-calendar-event-title"]],
    inputs: {
      event: "event",
      customTemplate: "customTemplate",
      view: "view"
    },
    decls: 6,
    vars: 5,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
    template: function CalendarEventTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventTitleComponent_ng_template_1_Template, 6, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarEventTitleComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.view));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
    pipes: [_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_2__.CalendarEventTitlePipe, _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_3__.CalendarA11yPipe],
    encapsulation: 2
  });
  return CalendarEventTitleComponent;
})();

/***/ }),

/***/ 44602:
/*!***********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTitlePipe": function() { return /* binding */ CalendarEventTitlePipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-event-title-formatter.provider */ 38711);


let CalendarEventTitlePipe = /*#__PURE__*/(() => {
  class CalendarEventTitlePipe {
    constructor(calendarEventTitle) {
      this.calendarEventTitle = calendarEventTitle;
    }

    transform(title, titleType, event) {
      return this.calendarEventTitle[titleType](event, title);
    }

  }

  CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) {
    return new (t || CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__.CalendarEventTitleFormatter, 16));
  };

  CalendarEventTitlePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "calendarEventTitle",
    type: CalendarEventTitlePipe,
    pure: true
  });
  return CalendarEventTitlePipe;
})();

/***/ }),

/***/ 19898:
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-moment-date-formatter.provider.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOMENT": function() { return /* binding */ MOMENT; },
/* harmony export */   "CalendarMomentDateFormatter": function() { return /* binding */ CalendarMomentDateFormatter; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);




const MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */

let CalendarMomentDateFormatter = /*#__PURE__*/(() => {
  class CalendarMomentDateFormatter {
    /**
     * @hidden
     */
    constructor(moment, dateAdapter) {
      this.moment = moment;
      this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */


    monthViewColumnHeader({
      date,
      locale
    }) {
      return this.moment(date).locale(locale).format('dddd');
    }
    /**
     * The month view cell day number
     */


    monthViewDayNumber({
      date,
      locale
    }) {
      return this.moment(date).locale(locale).format('D');
    }
    /**
     * The month view title
     */


    monthViewTitle({
      date,
      locale
    }) {
      return this.moment(date).locale(locale).format('MMMM YYYY');
    }
    /**
     * The week view header week day labels
     */


    weekViewColumnHeader({
      date,
      locale
    }) {
      return this.moment(date).locale(locale).format('dddd');
    }
    /**
     * The week view sub header day and month labels
     */


    weekViewColumnSubHeader({
      date,
      locale
    }) {
      return this.moment(date).locale(locale).format('MMM D');
    }
    /**
     * The week view title
     */


    weekViewTitle({
      date,
      locale,
      weekStartsOn,
      excludeDays,
      daysInWeek
    }) {
      const {
        viewStart,
        viewEnd
      } = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getWeekViewPeriod)(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);

      const format = (dateToFormat, showYear) => this.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));

      return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */


    weekViewHour({
      date,
      locale
    }) {
      return this.moment(date).locale(locale).format('ha');
    }
    /**
     * The time formatting down the left hand side of the day view
     */


    dayViewHour({
      date,
      locale
    }) {
      return this.moment(date).locale(locale).format('ha');
    }
    /**
     * The day view title
     */


    dayViewTitle({
      date,
      locale
    }) {
      return this.moment(date).locale(locale).format('dddd, LL'); // dddd = Thursday
    } // LL = locale-dependent Month Day, Year


  }

  CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) {
    return new (t || CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__.DateAdapter));
  };

  CalendarMomentDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CalendarMomentDateFormatter,
    factory: CalendarMomentDateFormatter.ɵfac
  });
  return CalendarMomentDateFormatter;
})();

/***/ }),

/***/ 90316:
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-native-date-formatter.provider.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarNativeDateFormatter": function() { return /* binding */ CalendarNativeDateFormatter; }
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);



/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */

let CalendarNativeDateFormatter = /*#__PURE__*/(() => {
  class CalendarNativeDateFormatter {
    constructor(dateAdapter) {
      this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */


    monthViewColumnHeader({
      date,
      locale
    }) {
      return new Intl.DateTimeFormat(locale, {
        weekday: 'long'
      }).format(date);
    }
    /**
     * The month view cell day number
     */


    monthViewDayNumber({
      date,
      locale
    }) {
      return new Intl.DateTimeFormat(locale, {
        day: 'numeric'
      }).format(date);
    }
    /**
     * The month view title
     */


    monthViewTitle({
      date,
      locale
    }) {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long'
      }).format(date);
    }
    /**
     * The week view header week day labels
     */


    weekViewColumnHeader({
      date,
      locale
    }) {
      return new Intl.DateTimeFormat(locale, {
        weekday: 'long'
      }).format(date);
    }
    /**
     * The week view sub header day and month labels
     */


    weekViewColumnSubHeader({
      date,
      locale
    }) {
      return new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'short'
      }).format(date);
    }
    /**
     * The week view title
     */


    weekViewTitle({
      date,
      locale,
      weekStartsOn,
      excludeDays,
      daysInWeek
    }) {
      const {
        viewStart,
        viewEnd
      } = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getWeekViewPeriod)(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);

      const format = (dateToFormat, showYear) => new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'short',
        year: showYear ? 'numeric' : undefined
      }).format(dateToFormat);

      return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */


    weekViewHour({
      date,
      locale
    }) {
      return new Intl.DateTimeFormat(locale, {
        hour: 'numeric'
      }).format(date);
    }
    /**
     * The time formatting down the left hand side of the day view
     */


    dayViewHour({
      date,
      locale
    }) {
      return new Intl.DateTimeFormat(locale, {
        hour: 'numeric'
      }).format(date);
    }
    /**
     * The day view title
     */


    dayViewTitle({
      date,
      locale
    }) {
      return new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
      }).format(date);
    }

  }

  CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) {
    return new (t || CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__.DateAdapter));
  };

  CalendarNativeDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CalendarNativeDateFormatter,
    factory: CalendarNativeDateFormatter.ɵfac
  });
  return CalendarNativeDateFormatter;
})();

/***/ }),

/***/ 60897:
/*!**************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarNextViewDirective": function() { return /* binding */ CalendarNextViewDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-view.enum */ 4606);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);





/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */

let CalendarNextViewDirective = /*#__PURE__*/(() => {
  class CalendarNextViewDirective {
    constructor(dateAdapter) {
      this.dateAdapter = dateAdapter;
      /**
       * Days to skip when going forward by 1 day
       */

      this.excludeDays = [];
      /**
       * Called when the view date is changed
       */

      this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * @hidden
     */


    onClick() {
      const addFn = {
        day: this.dateAdapter.addDays,
        week: this.dateAdapter.addWeeks,
        month: this.dateAdapter.addMonths
      }[this.view];

      if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Day) {
        this.viewDateChange.emit((0,_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, 1, this.excludeDays));
      } else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week && this.daysInWeek) {
        this.viewDateChange.emit((0,_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
      } else {
        this.viewDateChange.emit(addFn(this.viewDate, 1));
      }
    }

  }

  CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) {
    return new (t || CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__.DateAdapter));
  };

  CalendarNextViewDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CalendarNextViewDirective,
    selectors: [["", "mwlCalendarNextView", ""]],
    hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      view: "view",
      viewDate: "viewDate",
      excludeDays: "excludeDays",
      daysInWeek: "daysInWeek"
    },
    outputs: {
      viewDateChange: "viewDateChange"
    }
  });
  return CalendarNextViewDirective;
})();

/***/ }),

/***/ 31726:
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPreviousViewDirective": function() { return /* binding */ CalendarPreviousViewDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-view.enum */ 4606);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);





/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */

let CalendarPreviousViewDirective = /*#__PURE__*/(() => {
  class CalendarPreviousViewDirective {
    constructor(dateAdapter) {
      this.dateAdapter = dateAdapter;
      /**
       * Days to skip when going back by 1 day
       */

      this.excludeDays = [];
      /**
       * Called when the view date is changed
       */

      this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * @hidden
     */


    onClick() {
      const subFn = {
        day: this.dateAdapter.subDays,
        week: this.dateAdapter.subWeeks,
        month: this.dateAdapter.subMonths
      }[this.view];

      if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Day) {
        this.viewDateChange.emit((0,_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, -1, this.excludeDays));
      } else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week && this.daysInWeek) {
        this.viewDateChange.emit((0,_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
      } else {
        this.viewDateChange.emit(subFn(this.viewDate, 1));
      }
    }

  }

  CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) {
    return new (t || CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__.DateAdapter));
  };

  CalendarPreviousViewDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CalendarPreviousViewDirective,
    selectors: [["", "mwlCalendarPreviousView", ""]],
    hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      view: "view",
      viewDate: "viewDate",
      excludeDays: "excludeDays",
      daysInWeek: "daysInWeek"
    },
    outputs: {
      viewDateChange: "viewDateChange"
    }
  });
  return CalendarPreviousViewDirective;
})();

/***/ }),

/***/ 70923:
/*!*****************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-resize-helper.provider.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarResizeHelper": function() { return /* binding */ CalendarResizeHelper; }
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 33878);

class CalendarResizeHelper {
  constructor(resizeContainerElement, minWidth, rtl) {
    this.resizeContainerElement = resizeContainerElement;
    this.minWidth = minWidth;
    this.rtl = rtl;
  }

  validateResize({
    rectangle,
    edges
  }) {
    if (this.rtl) {
      // TODO - find a way of testing this, for some reason the tests always fail but it does actually work

      /* istanbul ignore next */
      if (typeof edges.left !== 'undefined') {
        rectangle.left -= edges.left;
        rectangle.right += edges.left;
      } else if (typeof edges.right !== 'undefined') {
        rectangle.left += edges.right;
        rectangle.right -= edges.right;
      }

      rectangle.width = rectangle.right - rectangle.left;
    }

    if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
      return false;
    }

    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isInside)(this.resizeContainerElement.getBoundingClientRect(), rectangle);
  }

}

/***/ }),

/***/ 22167:
/*!**********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-today.directive.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarTodayDirective": function() { return /* binding */ CalendarTodayDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);



/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */

let CalendarTodayDirective = /*#__PURE__*/(() => {
  class CalendarTodayDirective {
    constructor(dateAdapter) {
      this.dateAdapter = dateAdapter;
      /**
       * Called when the view date is changed
       */

      this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * @hidden
     */


    onClick() {
      this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    }

  }

  CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) {
    return new (t || CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__.DateAdapter));
  };

  CalendarTodayDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CalendarTodayDirective,
    selectors: [["", "mwlCalendarToday", ""]],
    hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      viewDate: "viewDate"
    },
    outputs: {
      viewDateChange: "viewDateChange"
    }
  });
  return CalendarTodayDirective;
})();

/***/ }),

/***/ 69416:
/*!************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarTooltipWindowComponent": function() { return /* binding */ CalendarTooltipWindowComponent; },
/* harmony export */   "CalendarTooltipDirective": function() { return /* binding */ CalendarTooltipDirective; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! positioning */ 74853);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 47599);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24390);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 44094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);







function CalendarTooltipWindowComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n    ");
  }

  if (rf & 2) {
    const contents_r3 = ctx.contents;
    const placement_r4 = ctx.placement;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", contents_r3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}

function CalendarTooltipWindowComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
  }
}

const _c0 = function (a0, a1, a2) {
  return {
    contents: a0,
    placement: a1,
    event: a2
  };
};

let CalendarTooltipWindowComponent = /*#__PURE__*/(() => {
  class CalendarTooltipWindowComponent {}

  CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) {
    return new (t || CalendarTooltipWindowComponent)();
  };

  CalendarTooltipWindowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CalendarTooltipWindowComponent,
    selectors: [["mwl-calendar-tooltip-window"]],
    inputs: {
      contents: "contents",
      placement: "placement",
      event: "event",
      customTemplate: "customTemplate"
    },
    decls: 6,
    vars: 6,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
    template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarTooltipWindowComponent_ng_template_1_Template, 8, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarTooltipWindowComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, ctx.contents, ctx.placement, ctx.event));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
    encapsulation: 2
  });
  return CalendarTooltipWindowComponent;
})();
let CalendarTooltipDirective = /*#__PURE__*/(() => {
  class CalendarTooltipDirective {
    constructor(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document // eslint-disable-line
    ) {
      this.elementRef = elementRef;
      this.injector = injector;
      this.renderer = renderer;
      this.viewContainerRef = viewContainerRef;
      this.document = document;
      this.placement = 'auto'; // eslint-disable-line  @angular-eslint/no-input-rename

      this.delay = null; // eslint-disable-line  @angular-eslint/no-input-rename

      this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }

    ngOnChanges(changes) {
      if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
        this.tooltipRef.instance.contents = this.contents;
        this.tooltipRef.instance.customTemplate = this.customTemplate;
        this.tooltipRef.instance.event = this.event;
        this.tooltipRef.changeDetectorRef.markForCheck();

        if (!this.contents) {
          this.hide();
        }
      }
    }

    ngOnDestroy() {
      this.hide();
    }

    onMouseOver() {
      const delay$ = this.delay === null ? (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('now') : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(this.delay);
      delay$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.cancelTooltipDelay$)).subscribe(() => {
        this.show();
      });
    }

    onMouseOut() {
      this.hide();
    }

    show() {
      if (!this.tooltipRef && this.contents) {
        this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
        this.tooltipRef.instance.contents = this.contents;
        this.tooltipRef.instance.customTemplate = this.customTemplate;
        this.tooltipRef.instance.event = this.event;

        if (this.appendToBody) {
          this.document.body.appendChild(this.tooltipRef.location.nativeElement);
        }

        requestAnimationFrame(() => {
          this.positionTooltip();
        });
      }
    }

    hide() {
      if (this.tooltipRef) {
        this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
        this.tooltipRef = null;
      }

      this.cancelTooltipDelay$.next();
    }

    positionTooltip(previousPositions = []) {
      if (this.tooltipRef) {
        this.tooltipRef.changeDetectorRef.detectChanges();
        this.tooltipRef.instance.placement = (0,positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements)(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

        if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
          this.positionTooltip([...previousPositions, this.tooltipRef.instance.placement]);
        }
      }
    }

  }

  CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) {
    return new (t || CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
  };

  CalendarTooltipDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CalendarTooltipDirective,
    selectors: [["", "mwlCalendarTooltip", ""]],
    hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() {
          return ctx.onMouseOver();
        })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() {
          return ctx.onMouseOut();
        });
      }
    },
    inputs: {
      contents: ["mwlCalendarTooltip", "contents"],
      placement: ["tooltipPlacement", "placement"],
      customTemplate: ["tooltipTemplate", "customTemplate"],
      event: ["tooltipEvent", "event"],
      appendToBody: ["tooltipAppendToBody", "appendToBody"],
      delay: ["tooltipDelay", "delay"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
  return CalendarTooltipDirective;
})();

/***/ }),

/***/ 27579:
/*!*********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarUtils": function() { return /* binding */ CalendarUtils; }
/* harmony export */ });
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils */ 90489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);



let CalendarUtils = /*#__PURE__*/(() => {
  class CalendarUtils {
    constructor(dateAdapter) {
      this.dateAdapter = dateAdapter;
    }

    getMonthView(args) {
      return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_0__.getMonthView)(this.dateAdapter, args);
    }

    getWeekViewHeader(args) {
      return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_0__.getWeekViewHeader)(this.dateAdapter, args);
    }

    getWeekView(args) {
      return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_0__.getWeekView)(this.dateAdapter, args);
    }

  }

  CalendarUtils.ɵfac = function CalendarUtils_Factory(t) {
    return new (t || CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__.DateAdapter));
  };

  CalendarUtils.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CalendarUtils,
    factory: CalendarUtils.ɵfac
  });
  return CalendarUtils;
})();

/***/ }),

/***/ 4606:
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-view.enum.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarView": function() { return /* binding */ CalendarView; }
/* harmony export */ });
var CalendarView = /*#__PURE__*/(() => {
  (function (CalendarView) {
    CalendarView["Month"] = "month";
    CalendarView["Week"] = "week";
    CalendarView["Day"] = "day";
  })(CalendarView || (CalendarView = {}));

  return CalendarView;
})();

/***/ }),

/***/ 81567:
/*!*************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/click.directive.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickDirective": function() { return /* binding */ ClickDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 54926);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 44094);





let ClickDirective = /*#__PURE__*/(() => {
  class ClickDirective {
    constructor(renderer, elm, document) {
      this.renderer = renderer;
      this.elm = elm;
      this.document = document;
      this.clickListenerDisabled = false;
      this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // eslint-disable-line

      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }

    ngOnInit() {
      if (!this.clickListenerDisabled) {
        this.listen().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(event => {
          event.stopPropagation();
          this.click.emit(event);
        });
      }
    }

    ngOnDestroy() {
      this.destroy$.next();
    }

    listen() {
      return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
        return this.renderer.listen(this.elm.nativeElement, 'click', event => {
          observer.next(event);
        });
      });
    }

  }

  ClickDirective.ɵfac = function ClickDirective_Factory(t) {
    return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
  };

  ClickDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ClickDirective,
    selectors: [["", "mwlClick", ""]],
    inputs: {
      clickListenerDisabled: "clickListenerDisabled"
    },
    outputs: {
      click: "mwlClick"
    }
  });
  return ClickDirective;
})();

/***/ }),

/***/ 93759:
/*!*********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/keydown-enter.directive.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeydownEnterDirective": function() { return /* binding */ KeydownEnterDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


let KeydownEnterDirective = /*#__PURE__*/(() => {
  class KeydownEnterDirective {
    constructor(host, ngZone, renderer) {
      this.host = host;
      this.ngZone = ngZone;
      this.renderer = renderer;
      this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // eslint-disable-line

      this.keydownListener = null;
    }

    ngOnInit() {
      this.ngZone.runOutsideAngular(() => {
        this.keydownListener = this.renderer.listen(this.host.nativeElement, 'keydown', event => {
          if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.ngZone.run(() => {
              this.keydown.emit(event);
            });
          }
        });
      });
    }

    ngOnDestroy() {
      if (this.keydownListener !== null) {
        this.keydownListener();
        this.keydownListener = null;
      }
    }

  }

  KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) {
    return new (t || KeydownEnterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };

  KeydownEnterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: KeydownEnterDirective,
    selectors: [["", "mwlKeydownEnter", ""]],
    outputs: {
      keydown: "mwlKeydownEnter"
    }
  });
  return KeydownEnterDirective;
})();

/***/ }),

/***/ 33878:
/*!**************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/util.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateEvents": function() { return /* binding */ validateEvents; },
/* harmony export */   "isInsideLeftAndRight": function() { return /* binding */ isInsideLeftAndRight; },
/* harmony export */   "isInside": function() { return /* binding */ isInside; },
/* harmony export */   "roundToNearest": function() { return /* binding */ roundToNearest; },
/* harmony export */   "trackByEventId": function() { return /* binding */ trackByEventId; },
/* harmony export */   "trackByWeekDayHeaderDate": function() { return /* binding */ trackByWeekDayHeaderDate; },
/* harmony export */   "trackByHourSegment": function() { return /* binding */ trackByHourSegment; },
/* harmony export */   "trackByHour": function() { return /* binding */ trackByHour; },
/* harmony export */   "trackByWeekAllDayEvent": function() { return /* binding */ trackByWeekAllDayEvent; },
/* harmony export */   "trackByWeekTimeEvent": function() { return /* binding */ trackByWeekTimeEvent; },
/* harmony export */   "getMinutesMoved": function() { return /* binding */ getMinutesMoved; },
/* harmony export */   "getDefaultEventEnd": function() { return /* binding */ getDefaultEventEnd; },
/* harmony export */   "addDaysWithExclusions": function() { return /* binding */ addDaysWithExclusions; },
/* harmony export */   "isDraggedWithinPeriod": function() { return /* binding */ isDraggedWithinPeriod; },
/* harmony export */   "shouldFireDroppedEvent": function() { return /* binding */ shouldFireDroppedEvent; },
/* harmony export */   "getWeekViewPeriod": function() { return /* binding */ getWeekViewPeriod; },
/* harmony export */   "isWithinThreshold": function() { return /* binding */ isWithinThreshold; }
/* harmony export */ });
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils */ 90489);

const validateEvents = events => {
  const warn = (...args) => console.warn('angular-calendar', ...args);

  return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_0__.validateEvents)(events, warn);
};
function isInsideLeftAndRight(outer, inner) {
  return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right);
}

function isInsideTopAndBottom(outer, inner) {
  return Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
}

function isInside(outer, inner) {
  return isInsideLeftAndRight(outer, inner) && isInsideTopAndBottom(outer, inner);
}
function roundToNearest(amount, precision) {
  return Math.round(amount / precision) * precision;
}
const trackByEventId = (index, event) => event.id ? event.id : event;
const trackByWeekDayHeaderDate = (index, day) => day.date.toISOString();
const trackByHourSegment = (index, segment) => segment.date.toISOString();
const trackByHour = (index, hour) => hour.segments[0].date.toISOString();
const trackByWeekAllDayEvent = (index, weekEvent) => weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
const trackByWeekTimeEvent = (index, weekEvent) => weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
const MINUTES_IN_HOUR = 60;

function getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration) {
  return (hourDuration || MINUTES_IN_HOUR) / (hourSegments * hourSegmentHeight);
}

function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize, hourDuration) {
  const draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
  const pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration);
  return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
  if (event.end) {
    return event.end;
  } else {
    return dateAdapter.addMinutes(event.start, minimumMinutes);
  }
}
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
  let daysCounter = 0;
  let daysToAdd = 0;
  const changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
  let result = date;

  while (daysToAdd <= Math.abs(days)) {
    result = changeDays(date, daysCounter);
    const day = dateAdapter.getDay(result);

    if (excluded.indexOf(day) === -1) {
      daysToAdd++;
    }

    daysCounter++;
  }

  return result;
}
function isDraggedWithinPeriod(newStart, newEnd, period) {
  const end = newEnd || newStart;
  return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
}
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
  return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
}
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded = [], daysInWeek) {
  let viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
    weekStartsOn
  });
  const endOfWeek = dateAdapter.endOfWeek(viewDate, {
    weekStartsOn
  });

  while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
    viewStart = dateAdapter.addDays(viewStart, 1);
  }

  if (daysInWeek) {
    const viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
    return {
      viewStart,
      viewEnd
    };
  } else {
    let viewEnd = endOfWeek;

    while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 && viewEnd > viewStart) {
      viewEnd = dateAdapter.subDays(viewEnd, 1);
    }

    return {
      viewStart,
      viewEnd
    };
  }
}
function isWithinThreshold({
  x,
  y
}) {
  const DRAG_THRESHOLD = 1;
  return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}

/***/ }),

/***/ 50811:
/*!**********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDayViewComponent": function() { return /* binding */ CalendarDayViewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../week/calendar-week-view.component */ 1913);



/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */

let CalendarDayViewComponent = /*#__PURE__*/(() => {
  class CalendarDayViewComponent {
    constructor() {
      /**
       * An array of events to display on view
       * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
       */
      this.events = [];
      /**
       * The number of segments in an hour. Must divide equally into 60.
       */

      this.hourSegments = 2;
      /**
       * The height in pixels of each hour segment
       */

      this.hourSegmentHeight = 30;
      /**
       * The minimum height in pixels of each event
       */

      this.minimumEventHeight = 30;
      /**
       * The day start hours in 24 hour time. Must be 0-23
       */

      this.dayStartHour = 0;
      /**
       * The day start minutes. Must be 0-59
       */

      this.dayStartMinute = 0;
      /**
       * The day end hours in 24 hour time. Must be 0-23
       */

      this.dayEndHour = 23;
      /**
       * The day end minutes. Must be 0-59
       */

      this.dayEndMinute = 59;
      /**
       * The placement of the event tooltip
       */

      this.tooltipPlacement = 'auto';
      /**
       * Whether to append tooltips to the body or next to the trigger element
       */

      this.tooltipAppendToBody = true;
      /**
       * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
       * will be displayed immediately.
       */

      this.tooltipDelay = null;
      /**
       * Whether to snap events to a grid when dragging
       */

      this.snapDraggedEvents = true;
      /**
       * Called when an event title is clicked
       */

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Called when an hour segment is clicked
       */

      this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Called when an event is resized or dragged and dropped
       */

      this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * An output that will be called before the view is rendered for the current day.
       * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
       */

      this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }

  }

  CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) {
    return new (t || CalendarDayViewComponent)();
  };

  CalendarDayViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarDayViewComponent,
    selectors: [["mwl-calendar-day-view"]],
    inputs: {
      viewDate: "viewDate",
      events: "events",
      hourSegments: "hourSegments",
      hourSegmentHeight: "hourSegmentHeight",
      hourDuration: "hourDuration",
      minimumEventHeight: "minimumEventHeight",
      dayStartHour: "dayStartHour",
      dayStartMinute: "dayStartMinute",
      dayEndHour: "dayEndHour",
      dayEndMinute: "dayEndMinute",
      refresh: "refresh",
      locale: "locale",
      eventSnapSize: "eventSnapSize",
      tooltipPlacement: "tooltipPlacement",
      tooltipTemplate: "tooltipTemplate",
      tooltipAppendToBody: "tooltipAppendToBody",
      tooltipDelay: "tooltipDelay",
      hourSegmentTemplate: "hourSegmentTemplate",
      eventTemplate: "eventTemplate",
      eventTitleTemplate: "eventTitleTemplate",
      eventActionsTemplate: "eventActionsTemplate",
      snapDraggedEvents: "snapDraggedEvents",
      allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
      currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
      validateEventTimesChanged: "validateEventTimesChanged"
    },
    outputs: {
      eventClicked: "eventClicked",
      hourSegmentClicked: "hourSegmentClicked",
      eventTimesChanged: "eventTimesChanged",
      beforeViewRender: "beforeViewRender"
    },
    decls: 3,
    vars: 26,
    consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourDuration", "hourSegmentHeight", "minimumEventHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "validateEventTimesChanged", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]],
    template: function CalendarDayViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mwl-calendar-week-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_1_listener($event) {
          return ctx.eventClicked.emit($event);
        })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_1_listener($event) {
          return ctx.hourSegmentClicked.emit($event);
        })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_1_listener($event) {
          return ctx.eventTimesChanged.emit($event);
        })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_1_listener($event) {
          return ctx.beforeViewRender.emit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourDuration", ctx.hourDuration)("hourSegmentHeight", ctx.hourSegmentHeight)("minimumEventHeight", ctx.minimumEventHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate)("validateEventTimesChanged", ctx.validateEventTimesChanged);
      }
    },
    directives: [_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_1__.CalendarWeekViewComponent],
    encapsulation: 2
  });
  return CalendarDayViewComponent;
})();

/***/ }),

/***/ 88533:
/*!**************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/day/calendar-day.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDayViewComponent": function() { return /* reexport safe */ _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarDayViewComponent; },
/* harmony export */   "CalendarDayModule": function() { return /* binding */ CalendarDayModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-day-view.component */ 50811);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-common.module */ 67400);
/* harmony import */ var _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../week/calendar-week.module */ 47175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);






let CalendarDayModule = /*#__PURE__*/(() => {
  class CalendarDayModule {}

  CalendarDayModule.ɵfac = function CalendarDayModule_Factory(t) {
    return new (t || CalendarDayModule)();
  };

  CalendarDayModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CalendarDayModule
  });
  CalendarDayModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__.CalendarCommonModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekModule]]
  });
  return CalendarDayModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarDayModule, {
    declarations: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarDayViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__.CalendarCommonModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekModule],
    exports: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarDayViewComponent]
  });
})();

/***/ }),

/***/ 68161:
/*!**************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month-cell.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarMonthCellComponent": function() { return /* binding */ CalendarMonthCellComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/calendar-tooltip.directive */ 69416);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);
/* harmony import */ var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-date.pipe */ 12153);
/* harmony import */ var _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/calendar-event-title.pipe */ 44602);











function CalendarMonthCellComponent_ng_template_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r3.badgeTotal);
  }
}

const _c0 = function (a0) {
  return {
    backgroundColor: a0
  };
};

const _c1 = function (a0, a1) {
  return {
    event: a0,
    draggedFrom: a1
  };
};

const _c2 = function (a0, a1) {
  return {
    x: a0,
    y: a1
  };
};

const _c3 = function () {
  return {
    delay: 300,
    delta: 30
  };
};

const _c4 = function () {
  return {};
};

function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const event_r19 = restoredCtx.$implicit;
      const highlightDay_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).highlightDay;
      return highlightDay_r7.emit({
        event: event_r19
      });
    })("mouseleave", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mouseleave_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const event_r19 = restoredCtx.$implicit;
      const unhighlightDay_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).unhighlightDay;
      return unhighlightDay_r8.emit({
        event: event_r19
      });
    })("mwlClick", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const event_r19 = restoredCtx.$implicit;
      const eventClicked_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked;
      return eventClicked_r9.emit({
        event: event_r19,
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const event_r19 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
    const tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
    const tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
    const tooltipDelay_r12 = ctx_r27.tooltipDelay;
    const day_r3 = ctx_r27.day;
    const validateDrag_r14 = ctx_r27.validateDrag;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", event_r19.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c1, event_r19, day_r3))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c2, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4), "hideMonthCellEvents"));
  }
}

function CalendarMonthCellComponent_ng_template_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template, 3, 32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const day_r3 = ctx_r28.day;
    const trackByEventId_r13 = ctx_r28.trackByEventId;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
  }
}

const _c5 = function (a0, a1) {
  return {
    day: a0,
    locale: a1
  };
};

function CalendarMonthCellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalendarMonthCellComponent_ng_template_1_span_6_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CalendarMonthCellComponent_ng_template_1_div_14_Template, 4, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
  }

  if (rf & 2) {
    const day_r3 = ctx.day;
    const locale_r5 = ctx.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c5, day_r3, locale_r5), "monthCell"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r3.badgeTotal > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 7, day_r3.date, "monthViewDayNumber", locale_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r3.events.length > 0);
  }
}

function CalendarMonthCellComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
  }
}

const _c6 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
  return {
    day: a0,
    openDay: a1,
    locale: a2,
    tooltipPlacement: a3,
    highlightDay: a4,
    unhighlightDay: a5,
    eventClicked: a6,
    tooltipTemplate: a7,
    tooltipAppendToBody: a8,
    tooltipDelay: a9,
    trackByEventId: a10,
    validateDrag: a11
  };
};

let CalendarMonthCellComponent = /*#__PURE__*/(() => {
  class CalendarMonthCellComponent {
    constructor() {
      this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByEventId;
      this.validateDrag = _common_util__WEBPACK_IMPORTED_MODULE_1__.isWithinThreshold;
    }

  }

  CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) {
    return new (t || CalendarMonthCellComponent)();
  };

  CalendarMonthCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarMonthCellComponent,
    selectors: [["mwl-calendar-month-cell"]],
    hostAttrs: [1, "cal-cell", "cal-day-cell"],
    hostVars: 18,
    hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
      }
    },
    inputs: {
      day: "day",
      openDay: "openDay",
      locale: "locale",
      tooltipPlacement: "tooltipPlacement",
      tooltipAppendToBody: "tooltipAppendToBody",
      customTemplate: "customTemplate",
      tooltipTemplate: "tooltipTemplate",
      tooltipDelay: "tooltipDelay"
    },
    outputs: {
      highlightDay: "highlightDay",
      unhighlightDay: "unhighlightDay",
      eventClicked: "eventClicked"
    },
    decls: 6,
    vars: 15,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]],
    template: function CalendarMonthCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_1_Template, 16, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthCellComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c6, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__.CalendarTooltipDirective, _common_click_directive__WEBPACK_IMPORTED_MODULE_5__.ClickDirective],
    pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_6__.CalendarA11yPipe, _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_7__.CalendarDatePipe, _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_8__.CalendarEventTitlePipe],
    encapsulation: 2
  });
  return CalendarMonthCellComponent;
})();

/***/ }),

/***/ 38818:
/*!*********************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month-view-header.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarMonthViewHeaderComponent": function() { return /* binding */ CalendarMonthViewHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-date.pipe */ 12153);






function CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const day_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r8.columnHeaderClicked.emit({
        isoDayNumber: day_r7.day,
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", day_r7.isPast)("cal-today", day_r7.isToday)("cal-future", day_r7.isFuture)("cal-weekend", day_r7.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r7.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 10, day_r7.date, "monthViewColumnHeader", locale_r4), "\n        ");
  }
}

function CalendarMonthViewHeaderComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template, 3, 14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
  }

  if (rf & 2) {
    const days_r3 = ctx.days;
    const trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
  }
}

function CalendarMonthViewHeaderComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
  }
}

const _c0 = function (a0, a1, a2) {
  return {
    days: a0,
    locale: a1,
    trackByWeekDayHeaderDate: a2
  };
};

let CalendarMonthViewHeaderComponent = /*#__PURE__*/(() => {
  class CalendarMonthViewHeaderComponent {
    constructor() {
      this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByWeekDayHeaderDate;
    }

  }

  CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) {
    return new (t || CalendarMonthViewHeaderComponent)();
  };

  CalendarMonthViewHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarMonthViewHeaderComponent,
    selectors: [["mwl-calendar-month-view-header"]],
    inputs: {
      days: "days",
      locale: "locale",
      customTemplate: "customTemplate"
    },
    outputs: {
      columnHeaderClicked: "columnHeaderClicked"
    },
    decls: 6,
    vars: 6,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]],
    template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_1_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthViewHeaderComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
    pipes: [_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__.CalendarDatePipe],
    encapsulation: 2
  });
  return CalendarMonthViewHeaderComponent;
})();

/***/ }),

/***/ 21426:
/*!**************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarMonthViewComponent": function() { return /* binding */ CalendarMonthViewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/calendar-event-times-changed-event.interface */ 91203);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-utils.provider */ 27579);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);
/* harmony import */ var _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-month-view-header.component */ 38818);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar-open-day-events.component */ 33473);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-month-cell.component */ 68161);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/keydown-enter.directive */ 93759);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);















const _c0 = function (a0) {
  return {
    backgroundColor: a0
  };
};

const _c1 = function () {
  return {};
};

function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const day_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r4.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      });
    })("mwlKeydownEnter", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const day_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r6.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      });
    })("highlightDay", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r7.toggleDayHighlight($event.event, true);
    })("unhighlightDay", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r8.toggleDayHighlight($event.event, false);
    })("drop", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_drop_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const day_r3 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r9.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom);
    })("eventClicked", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r10.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r2.openDay)("locale", ctx_r2.locale)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, day_r3.backgroundColor))("clickListenerDisabled", ctx_r2.dayClicked.observers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1), "monthCellTabIndex"));
  }
}

function CalendarMonthViewComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template, 3, 18, "mwl-calendar-month-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mwl-calendar-open-day-events", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_8_Template_mwl_calendar_open_day_events_eventClicked_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      });
    })("drop", function CalendarMonthViewComponent_div_8_Template_mwl_calendar_open_day_events_drop_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r13.eventDropped(ctx_r13.openDay, $event.dropData.event, $event.dropData.draggedFrom);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowIndex_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 9, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r0.trackByDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locale", ctx_r0.locale)("isOpen", ctx_r0.openRowIndex === rowIndex_r1)("events", ctx_r0.openDay == null ? null : ctx_r0.openDay.events)("date", ctx_r0.openDay == null ? null : ctx_r0.openDay.date)("customTemplate", ctx_r0.openDayEventsTemplate)("eventTitleTemplate", ctx_r0.eventTitleTemplate)("eventActionsTemplate", ctx_r0.eventActionsTemplate);
  }
}
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */


let CalendarMonthViewComponent = /*#__PURE__*/(() => {
  class CalendarMonthViewComponent {
    /**
     * @hidden
     */
    constructor(cdr, utils, locale, dateAdapter) {
      this.cdr = cdr;
      this.utils = utils;
      this.dateAdapter = dateAdapter;
      /**
       * An array of events to display on view.
       * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
       */

      this.events = [];
      /**
       * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
       */

      this.excludeDays = [];
      /**
       * Whether the events list for the day of the `viewDate` option is visible or not
       */

      this.activeDayIsOpen = false;
      /**
       * The placement of the event tooltip
       */

      this.tooltipPlacement = 'auto';
      /**
       * Whether to append tooltips to the body or next to the trigger element
       */

      this.tooltipAppendToBody = true;
      /**
       * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
       * will be displayed immediately.
       */

      this.tooltipDelay = null;
      /**
       * An output that will be called before the view is rendered for the current month.
       * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
       */

      this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Called when the day cell is clicked
       */

      this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Called when the event title is clicked
       */

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Called when a header week day is clicked. Returns ISO day number.
       */

      this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Called when an event is dragged and dropped
       */

      this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * @hidden
       */

      this.trackByRowOffset = (index, offset) => this.view.days.slice(offset, this.view.totalDaysVisibleInWeek).map(day => day.date.toISOString()).join('-');
      /**
       * @hidden
       */


      this.trackByDate = (index, day) => day.date.toISOString();

      this.locale = locale;
    }
    /**
     * @hidden
     */


    ngOnInit() {
      if (this.refresh) {
        this.refreshSubscription = this.refresh.subscribe(() => {
          this.refreshAll();
          this.cdr.markForCheck();
        });
      }
    }
    /**
     * @hidden
     */


    ngOnChanges(changes) {
      const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
      const refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

      if (refreshHeader) {
        this.refreshHeader();
      }

      if (changes.events) {
        (0,_common_util__WEBPACK_IMPORTED_MODULE_1__.validateEvents)(this.events);
      }

      if (refreshBody) {
        this.refreshBody();
      }

      if (refreshHeader || refreshBody) {
        this.emitBeforeViewRender();
      }

      if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
        this.checkActiveDayIsOpen();
      }
    }
    /**
     * @hidden
     */


    ngOnDestroy() {
      if (this.refreshSubscription) {
        this.refreshSubscription.unsubscribe();
      }
    }
    /**
     * @hidden
     */


    toggleDayHighlight(event, isHighlighted) {
      this.view.days.forEach(day => {
        if (isHighlighted && day.events.indexOf(event) > -1) {
          day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
        } else {
          delete day.backgroundColor;
        }
      });
    }
    /**
     * @hidden
     */


    eventDropped(droppedOn, event, draggedFrom) {
      if (droppedOn !== draggedFrom) {
        const year = this.dateAdapter.getYear(droppedOn.date);
        const month = this.dateAdapter.getMonth(droppedOn.date);
        const date = this.dateAdapter.getDate(droppedOn.date);
        const newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
        let newEnd;

        if (event.end) {
          const secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
          newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
        }

        this.eventTimesChanged.emit({
          event,
          newStart,
          newEnd,
          day: droppedOn,
          type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarEventTimesChangedEventType.Drop
        });
      }
    }

    refreshHeader() {
      this.columnHeaders = this.utils.getWeekViewHeader({
        viewDate: this.viewDate,
        weekStartsOn: this.weekStartsOn,
        excluded: this.excludeDays,
        weekendDays: this.weekendDays
      });
    }

    refreshBody() {
      this.view = this.utils.getMonthView({
        events: this.events,
        viewDate: this.viewDate,
        weekStartsOn: this.weekStartsOn,
        excluded: this.excludeDays,
        weekendDays: this.weekendDays
      });
    }

    checkActiveDayIsOpen() {
      if (this.activeDayIsOpen === true) {
        const activeDay = this.activeDay || this.viewDate;
        this.openDay = this.view.days.find(day => this.dateAdapter.isSameDay(day.date, activeDay));
        const index = this.view.days.indexOf(this.openDay);
        this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
      } else {
        this.openRowIndex = null;
        this.openDay = null;
      }
    }

    refreshAll() {
      this.refreshHeader();
      this.refreshBody();
      this.emitBeforeViewRender();
      this.checkActiveDayIsOpen();
    }

    emitBeforeViewRender() {
      if (this.columnHeaders && this.view) {
        this.beforeViewRender.emit({
          header: this.columnHeaders,
          body: this.view.days,
          period: this.view.period
        });
      }
    }

  }

  CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) {
    return new (t || CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__.CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_4__.DateAdapter));
  };

  CalendarMonthViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarMonthViewComponent,
    selectors: [["mwl-calendar-month-view"]],
    inputs: {
      viewDate: "viewDate",
      events: "events",
      excludeDays: "excludeDays",
      activeDayIsOpen: "activeDayIsOpen",
      activeDay: "activeDay",
      refresh: "refresh",
      locale: "locale",
      tooltipPlacement: "tooltipPlacement",
      tooltipTemplate: "tooltipTemplate",
      tooltipAppendToBody: "tooltipAppendToBody",
      tooltipDelay: "tooltipDelay",
      weekStartsOn: "weekStartsOn",
      headerTemplate: "headerTemplate",
      cellTemplate: "cellTemplate",
      openDayEventsTemplate: "openDayEventsTemplate",
      eventTitleTemplate: "eventTitleTemplate",
      eventActionsTemplate: "eventActionsTemplate",
      weekendDays: "weekendDays"
    },
    outputs: {
      beforeViewRender: "beforeViewRender",
      dayClicked: "dayClicked",
      eventClicked: "eventClicked",
      columnHeaderClicked: "columnHeaderClicked",
      eventTimesChanged: "eventTimesChanged"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 12,
    vars: 5,
    consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 1, "cal-cell-row"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]],
    template: function CalendarMonthViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mwl-calendar-month-view-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_3_listener($event) {
          return ctx.columnHeaderClicked.emit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CalendarMonthViewComponent_div_8_Template, 11, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
      }
    },
    directives: [_calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_5__.CalendarMonthViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_7__.CalendarOpenDayEventsComponent, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__.DroppableDirective, _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_9__.CalendarMonthCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _common_click_directive__WEBPACK_IMPORTED_MODULE_10__.ClickDirective, _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__.KeydownEnterDirective],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_12__.CalendarA11yPipe],
    encapsulation: 2
  });
  return CalendarMonthViewComponent;
})();

/***/ }),

/***/ 5465:
/*!******************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarMonthViewComponent": function() { return /* reexport safe */ _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarMonthViewComponent; },
/* harmony export */   "collapseAnimation": function() { return /* reexport safe */ _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.collapseAnimation; },
/* harmony export */   "ɵCalendarMonthCellComponent": function() { return /* reexport safe */ _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthCellComponent; },
/* harmony export */   "ɵCalendarMonthViewHeaderComponent": function() { return /* reexport safe */ _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__.CalendarMonthViewHeaderComponent; },
/* harmony export */   "ɵCalendarOpenDayEventsComponent": function() { return /* reexport safe */ _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.CalendarOpenDayEventsComponent; },
/* harmony export */   "CalendarMonthModule": function() { return /* binding */ CalendarMonthModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-month-view.component */ 21426);
/* harmony import */ var _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-month-view-header.component */ 38818);
/* harmony import */ var _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-month-cell.component */ 68161);
/* harmony import */ var _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-open-day-events.component */ 33473);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-common.module */ 67400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);









 // needed for ivy, not part of the public api




let CalendarMonthModule = /*#__PURE__*/(() => {
  class CalendarMonthModule {}

  CalendarMonthModule.ɵfac = function CalendarMonthModule_Factory(t) {
    return new (t || CalendarMonthModule)();
  };

  CalendarMonthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CalendarMonthModule
  });
  CalendarMonthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__.CalendarCommonModule], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule]
  });
  return CalendarMonthModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CalendarMonthModule, {
    declarations: [_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarMonthViewComponent, _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthCellComponent, _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.CalendarOpenDayEventsComponent, _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__.CalendarMonthViewHeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__.CalendarCommonModule],
    exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarMonthViewComponent, _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthCellComponent, _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.CalendarOpenDayEventsComponent, _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__.CalendarMonthViewHeaderComponent]
  });
})();

/***/ }),

/***/ 33473:
/*!*******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-open-day-events.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collapseAnimation": function() { return /* binding */ collapseAnimation; },
/* harmony export */   "CalendarOpenDayEventsComponent": function() { return /* binding */ CalendarOpenDayEventsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/calendar-event-title.component */ 58974);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/keydown-enter.directive */ 93759);
/* harmony import */ var _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/calendar-event-actions.component */ 32136);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);












const _c0 = function (a0) {
  return {
    event: a0
  };
};

const _c1 = function (a0, a1) {
  return {
    x: a0,
    y: a1
  };
};

const _c2 = function () {
  return {
    delay: 300,
    delta: 30
  };
};

const _c3 = function (a0) {
  return {
    backgroundColor: a0
  };
};

const _c4 = function (a0, a1) {
  return {
    event: a0,
    locale: a1
  };
};

function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n           \n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mwl-calendar-event-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template_mwl_calendar_event_title_mwlClick_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const event_r10 = restoredCtx.$implicit;
      const eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked;
      return eventClicked_r4.emit({
        event: event_r10,
        sourceEvent: $event
      });
    })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template_mwl_calendar_event_title_mwlKeydownEnter_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const event_r10 = restoredCtx.$implicit;
      const eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked;
      return eventClicked_r4.emit({
        event: event_r10,
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n           \n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mwl-calendar-event-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const validateDrag_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).validateDrag;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", event_r10.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, event_r10))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c1, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, event_r10.color == null ? null : event_r10.color.primary));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c4, event_r10, ctx_r9.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
  }
}

const _c5 = function (a0, a1) {
  return {
    date: a0,
    locale: a1
  };
};

function CalendarOpenDayEventsComponent_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template, 12, 27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const events_r3 = ctx_r17.events;
    const trackByEventId_r6 = ctx_r17.trackByEventId;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
  }
}

function CalendarOpenDayEventsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarOpenDayEventsComponent_ng_template_1_div_1_Template, 10, 17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
  }

  if (rf & 2) {
    const isOpen_r5 = ctx.isOpen;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isOpen_r5);
  }
}

function CalendarOpenDayEventsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
  }
}

const _c6 = function (a0, a1, a2, a3, a4) {
  return {
    events: a0,
    eventClicked: a1,
    isOpen: a2,
    trackByEventId: a3,
    validateDrag: a4
  };
};

const collapseAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('collapse', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  height: 0,
  overflow: 'hidden',
  'padding-top': 0,
  'padding-bottom': 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  height: '*',
  overflow: 'hidden',
  'padding-top': '*',
  'padding-bottom': '*'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('150ms ease-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('150ms ease-in'))]);
let CalendarOpenDayEventsComponent = /*#__PURE__*/(() => {
  class CalendarOpenDayEventsComponent {
    constructor() {
      this.isOpen = false;
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByEventId;
      this.validateDrag = _common_util__WEBPACK_IMPORTED_MODULE_2__.isWithinThreshold;
    }

  }

  CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) {
    return new (t || CalendarOpenDayEventsComponent)();
  };

  CalendarOpenDayEventsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarOpenDayEventsComponent,
    selectors: [["mwl-calendar-open-day-events"]],
    inputs: {
      locale: "locale",
      isOpen: "isOpen",
      events: "events",
      customTemplate: "customTemplate",
      eventTitleTemplate: "eventTitleTemplate",
      eventActionsTemplate: "eventActionsTemplate",
      date: "date"
    },
    outputs: {
      eventClicked: "eventClicked"
    },
    decls: 6,
    vars: 8,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]],
    template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarOpenDayEventsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarOpenDayEventsComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c6, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_5__.CalendarEventTitleComponent, _common_click_directive__WEBPACK_IMPORTED_MODULE_6__.ClickDirective, _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_7__.KeydownEnterDirective, _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_8__.CalendarEventActionsComponent],
    pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_9__.CalendarA11yPipe],
    encapsulation: 2,
    data: {
      animation: [collapseAnimation]
    }
  });
  return CalendarOpenDayEventsComponent;
})();

/***/ }),

/***/ 6556:
/*!********************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-current-time-marker.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewCurrentTimeMarkerComponent": function() { return /* binding */ CalendarWeekViewCurrentTimeMarkerComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69606);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 48657);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 57993);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 23669);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 49005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);






function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
  }

  if (rf & 2) {
    const topPx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().topPx;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", topPx_r9, "px");
  }
}

function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_div_1_Template, 1, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
  }

  if (rf & 2) {
    const isVisible_r8 = ctx.isVisible;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isVisible_r8);
  }
}

function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
  }
}

const _c0 = function (a0, a1, a2, a3, a4, a5, a6) {
  return {
    columnDate: a0,
    dayStartHour: a1,
    dayStartMinute: a2,
    dayEndHour: a3,
    dayEndMinute: a4,
    isVisible: a5,
    topPx: a6
  };
};

let CalendarWeekViewCurrentTimeMarkerComponent = /*#__PURE__*/(() => {
  class CalendarWeekViewCurrentTimeMarkerComponent {
    constructor(dateAdapter, zone) {
      this.dateAdapter = dateAdapter;
      this.zone = zone;
      this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
      this.marker$ = this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(60 * 1000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMapTo)(this.columnDate$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(columnDate => {
        const startOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayStartHour), this.dayStartMinute);
        const endOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayEndHour), this.dayEndMinute);
        const hourHeightModifier = this.hourSegments * this.hourSegmentHeight / (this.hourDuration || 60);
        const now = new Date();
        return {
          isVisible: this.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
          top: this.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
        };
      }));
    }

    ngOnChanges(changes) {
      if (changes.columnDate) {
        this.columnDate$.next(changes.columnDate.currentValue);
      }
    }

  }

  CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) {
    return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };

  CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarWeekViewCurrentTimeMarkerComponent,
    selectors: [["mwl-calendar-week-view-current-time-marker"]],
    inputs: {
      columnDate: "columnDate",
      dayStartHour: "dayStartHour",
      dayStartMinute: "dayStartMinute",
      dayEndHour: "dayEndHour",
      dayEndMinute: "dayEndMinute",
      hourSegments: "hourSegments",
      hourDuration: "hourDuration",
      hourSegmentHeight: "hourSegmentHeight",
      customTemplate: "customTemplate"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 8,
    vars: 14,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]],
    template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](6, _c0, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.marker$)) == null ? null : tmp_1_0.top));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    encapsulation: 2
  });
  return CalendarWeekViewCurrentTimeMarkerComponent;
})();

/***/ }),

/***/ 61862:
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-event.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewEventComponent": function() { return /* binding */ CalendarWeekViewEventComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/calendar-tooltip.directive */ 69416);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/keydown-enter.directive */ 93759);
/* harmony import */ var _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/calendar-event-actions.component */ 32136);
/* harmony import */ var _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/calendar-event-title.component */ 58974);
/* harmony import */ var _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-event-title.pipe */ 44602);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);











const _c0 = function (a0, a1) {
  return {
    backgroundColor: a0,
    borderColor: a1
  };
};

const _c1 = function (a0, a1) {
  return {
    event: a0,
    locale: a1
  };
};

function CalendarWeekViewEventComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_1_Template_div_mwlClick_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const eventClicked_r5 = restoredCtx.eventClicked;
      return eventClicked_r5.emit({
        sourceEvent: $event
      });
    })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_1_Template_div_mwlKeydownEnter_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const eventClicked_r5 = restoredCtx.eventClicked;
      return eventClicked_r5.emit({
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mwl-calendar-event-actions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n         \n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mwl-calendar-event-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
  }

  if (rf & 2) {
    const weekEvent_r3 = ctx.weekEvent;
    const tooltipPlacement_r4 = ctx.tooltipPlacement;
    const tooltipTemplate_r6 = ctx.tooltipTemplate;
    const tooltipAppendToBody_r7 = ctx.tooltipAppendToBody;
    const tooltipDisabled_r8 = ctx.tooltipDisabled;
    const tooltipDelay_r9 = ctx.tooltipDelay;
    const daysInWeek_r11 = ctx.daysInWeek;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r8 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 13, weekEvent_r3.event.title, daysInWeek_r11 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r6)("tooltipAppendToBody", tooltipAppendToBody_r7)("tooltipDelay", tooltipDelay_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c1, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r1.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventActionsTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventTitleTemplate)("view", daysInWeek_r11 === 1 ? "day" : "week");
  }
}

function CalendarWeekViewEventComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
  }
}

const _c2 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
  return {
    weekEvent: a0,
    tooltipPlacement: a1,
    eventClicked: a2,
    tooltipTemplate: a3,
    tooltipAppendToBody: a4,
    tooltipDisabled: a5,
    tooltipDelay: a6,
    column: a7,
    daysInWeek: a8
  };
};

let CalendarWeekViewEventComponent = /*#__PURE__*/(() => {
  class CalendarWeekViewEventComponent {
    constructor() {
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }

  }

  CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) {
    return new (t || CalendarWeekViewEventComponent)();
  };

  CalendarWeekViewEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarWeekViewEventComponent,
    selectors: [["mwl-calendar-week-view-event"]],
    inputs: {
      locale: "locale",
      weekEvent: "weekEvent",
      tooltipPlacement: "tooltipPlacement",
      tooltipAppendToBody: "tooltipAppendToBody",
      tooltipDisabled: "tooltipDisabled",
      tooltipDelay: "tooltipDelay",
      customTemplate: "customTemplate",
      eventTitleTemplate: "eventTitleTemplate",
      eventActionsTemplate: "eventActionsTemplate",
      tooltipTemplate: "tooltipTemplate",
      column: "column",
      daysInWeek: "daysInWeek"
    },
    outputs: {
      eventClicked: "eventClicked"
    },
    decls: 6,
    vars: 12,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
    template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewEventComponent_ng_template_1_Template, 12, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewEventComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c2, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__.CalendarTooltipDirective, _common_click_directive__WEBPACK_IMPORTED_MODULE_3__.ClickDirective, _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_4__.KeydownEnterDirective, _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_5__.CalendarEventActionsComponent, _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_6__.CalendarEventTitleComponent],
    pipes: [_common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_7__.CalendarEventTitlePipe, _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_8__.CalendarA11yPipe],
    encapsulation: 2
  });
  return CalendarWeekViewEventComponent;
})();

/***/ }),

/***/ 55428:
/*!*******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-header.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewHeaderComponent": function() { return /* binding */ CalendarWeekViewHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/calendar-date.pipe */ 12153);








function CalendarWeekViewHeaderComponent_ng_template_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_1_div_13_Template_div_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const day_r10 = restoredCtx.$implicit;
      const dayHeaderClicked_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dayHeaderClicked;
      return dayHeaderClicked_r5.emit({
        day: day_r10,
        sourceEvent: $event
      });
    })("drop", function CalendarWeekViewHeaderComponent_ng_template_1_div_13_Template_div_drop_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const day_r10 = restoredCtx.$implicit;
      const eventDropped_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().eventDropped;
      return eventDropped_r6.emit({
        event: $event.dropData.event,
        newStart: day_r10.date
      });
    })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_1_div_13_Template_div_dragEnter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const day_r10 = restoredCtx.$implicit;
      const dragEnter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dragEnter;
      return dragEnter_r8.emit({
        date: day_r10.date
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", day_r10.isPast)("cal-today", day_r10.isToday)("cal-future", day_r10.isFuture)("cal-weekend", day_r10.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r10.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 11, day_r10.date, "weekViewColumnHeader", locale_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 15, day_r10.date, "weekViewColumnSubHeader", locale_r4));
  }
}

function CalendarWeekViewHeaderComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CalendarWeekViewHeaderComponent_ng_template_1_div_13_Template, 11, 19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
  }

  if (rf & 2) {
    const days_r3 = ctx.days;
    const trackByWeekDayHeaderDate_r7 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r7);
  }
}

function CalendarWeekViewHeaderComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
  }
}

const _c0 = function (a0, a1, a2, a3, a4, a5) {
  return {
    days: a0,
    locale: a1,
    dayHeaderClicked: a2,
    eventDropped: a3,
    dragEnter: a4,
    trackByWeekDayHeaderDate: a5
  };
};

let CalendarWeekViewHeaderComponent = /*#__PURE__*/(() => {
  class CalendarWeekViewHeaderComponent {
    constructor() {
      // custom inputs

      /**
       * @hidden
       */
      this.trackByHourSegment = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByHourSegment;
      /**
       * @hidden
       */

      this.trackByHour = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByHour;
      this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByWeekDayHeaderDate;
    }

  }

  CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) {
    return new (t || CalendarWeekViewHeaderComponent)();
  };

  CalendarWeekViewHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarWeekViewHeaderComponent,
    selectors: [["mwl-calendar-week-view-header"]],
    inputs: {
      hourSegmentTemplate: "hourSegmentTemplate",
      days: "days",
      locale: "locale",
      customTemplate: "customTemplate"
    },
    outputs: {
      dayHeaderClicked: "dayHeaderClicked",
      eventDropped: "eventDropped",
      dragEnter: "dragEnter"
    },
    decls: 6,
    vars: 9,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], [1, "cal-header"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]],
    template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_1_Template, 16, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHeaderComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c0, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _common_click_directive__WEBPACK_IMPORTED_MODULE_4__.ClickDirective],
    pipes: [_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__.CalendarDatePipe],
    encapsulation: 2
  });
  return CalendarWeekViewHeaderComponent;
})();

/***/ }),

/***/ 20923:
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewHourSegmentComponent": function() { return /* binding */ CalendarWeekViewHourSegmentComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);




function CalendarWeekViewHourSegmentComponent_ng_template_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", ctx_r8.currentRoom, "\n        ");
  }
}

const _c0 = function () {
  return {};
};

function CalendarWeekViewHourSegmentComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHourSegmentComponent_ng_template_1_div_4_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
  }

  if (rf & 2) {
    const segment_r3 = ctx.segment;
    const segmentHeight_r5 = ctx.segmentHeight;
    const isTimeLabel_r6 = ctx.isTimeLabel;
    const daysInWeek_r7 = ctx.daysInWeek;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", segmentHeight_r5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", segment_r3.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isTimeLabel_r6);
  }
}

function CalendarWeekViewHourSegmentComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
  }
}

const _c1 = function (a0, a1, a2, a3, a4) {
  return {
    segment: a0,
    locale: a1,
    segmentHeight: a2,
    isTimeLabel: a3,
    daysInWeek: a4
  };
};

let CalendarWeekViewHourSegmentComponent = /*#__PURE__*/(() => {
  class CalendarWeekViewHourSegmentComponent {
    constructor() {
      this.rooms = ["Møterom stort", "Møterom lite", "Møterom 214", "Møterom 210", "Aktivitet plan"];
    }

    set currentRoomIndex(roomNum) {
      this.currentRoom = this.rooms[roomNum];
    }

  }

  CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) {
    return new (t || CalendarWeekViewHourSegmentComponent)();
  };

  CalendarWeekViewHourSegmentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarWeekViewHourSegmentComponent,
    selectors: [["mwl-calendar-week-view-hour-segment"]],
    inputs: {
      segment: "segment",
      segmentHeight: "segmentHeight",
      locale: "locale",
      isTimeLabel: "isTimeLabel",
      daysInWeek: "daysInWeek",
      customTemplate: "customTemplate",
      currentRoomIndex: "currentRoomIndex"
    },
    decls: 6,
    vars: 8,
    consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]],
    template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewHourSegmentComponent_ng_template_1_Template, 7, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHourSegmentComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_2__.CalendarA11yPipe],
    encapsulation: 2
  });
  return CalendarWeekViewHourSegmentComponent;
})();

/***/ }),

/***/ 1913:
/*!************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewComponent": function() { return /* binding */ CalendarWeekViewComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils */ 90489);
/* harmony import */ var _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/calendar-drag-helper.provider */ 45824);
/* harmony import */ var _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/calendar-resize-helper.provider */ 70923);
/* harmony import */ var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-event-times-changed-event.interface */ 91203);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-utils.provider */ 27579);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);
/* harmony import */ var _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-week-view-header.component */ 55428);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-resizable-element */ 90093);
/* harmony import */ var _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar-week-view-event.component */ 61862);
/* harmony import */ var _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calendar-week-view-hour-segment.component */ 20923);
/* harmony import */ var _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./calendar-week-view-current-time-marker.component */ 6556);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/click.directive */ 81567);



















function CalendarWeekViewComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_6_div_7_Template_div_drop_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const day_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r8.eventDropped($event, day_r7.date, true);
    })("dragEnter", function CalendarWeekViewComponent_div_6_div_7_Template_div_dragEnter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const day_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r10.dateDragEnter(day_r7.date);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return {
    left: true
  };
};

function CalendarWeekViewComponent_div_6_div_10_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}

const _c1 = function () {
  return {
    right: true
  };
};

function CalendarWeekViewComponent_div_6_div_10_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
  }
}

const _c2 = function (a0, a1) {
  return {
    left: a0,
    right: a1
  };
};

const _c3 = function (a0, a1) {
  return {
    event: a0,
    calendarId: a1
  };
};

const _c4 = function (a0, a1) {
  return {
    x: a0,
    y: a1
  };
};

const _c5 = function (a0) {
  return {
    x: a0
  };
};

const _c6 = function () {
  return {};
};

const _c7 = function () {
  return {
    delay: 300,
    delta: 30
  };
};

function CalendarWeekViewComponent_div_6_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizeStart_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r18.allDayEventResizeStarted(_r12, allDayEvent_r14, $event);
    })("resizing", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizing_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return ctx_r20.allDayEventResizing(allDayEvent_r14, $event, ctx_r20.dayColumnWidth);
    })("resizeEnd", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizeEnd_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return ctx_r21.allDayEventResizeEnded(allDayEvent_r14);
    })("dragStart", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragStart_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r22.dragStarted(_r12, _r15, allDayEvent_r14, false);
    })("dragging", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragging_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return ctx_r23.allDayEventDragMove();
    })("dragEnd", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragEnd_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return ctx_r24.dragEnded(allDayEvent_r14, $event, ctx_r24.dayColumnWidth);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_6_div_10_div_3_div_3_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mwl-calendar-week-view-event", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_mwl_calendar_week_view_event_eventClicked_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return ctx_r25.eventClicked.emit({
        event: allDayEvent_r14.event,
        sourceEvent: $event.sourceEvent
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CalendarWeekViewComponent_div_6_div_10_div_3_div_8_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const allDayEvent_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100 / ctx_r13.days.length * allDayEvent_r14.span, "%")("margin-left", ctx_r13.rtl ? null : 100 / ctx_r13.days.length * allDayEvent_r14.offset, "%")("margin-right", ctx_r13.rtl ? 100 / ctx_r13.days.length * (ctx_r13.days.length - allDayEvent_r14.offset) * -1 : null, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r14.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r14.endsAfterWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](32, _c2, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](35, _c3, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](38, _c4, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](41, _c5, ctx_r13.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c6))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.beforeStart) && !allDayEvent_r14.startsBeforeWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r13.locale)("weekEvent", allDayEvent_r14)("tooltipPlacement", ctx_r13.tooltipPlacement)("tooltipTemplate", ctx_r13.tooltipTemplate)("tooltipAppendToBody", ctx_r13.tooltipAppendToBody)("tooltipDelay", ctx_r13.tooltipDelay)("customTemplate", ctx_r13.eventTemplate)("eventTitleTemplate", ctx_r13.eventTitleTemplate)("eventActionsTemplate", ctx_r13.eventActionsTemplate)("daysInWeek", ctx_r13.daysInWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.afterEnd) && !allDayEvent_r14.endsAfterWeek);
  }
}

function CalendarWeekViewComponent_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_6_div_10_div_3_Template, 10, 45, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const eventRow_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", eventRow_r11.row)("ngForTrackBy", ctx_r6.trackByWeekAllDayEvent);
  }
}

function CalendarWeekViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_6_Template_div_dragEnter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r26.dragEnter("allDay");
    })("dragLeave", function CalendarWeekViewComponent_div_6_Template_div_dragLeave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r28.dragLeave("allDay");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_6_div_7_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CalendarWeekViewComponent_div_6_div_10_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.allDayEventsLabelTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.days)("ngForTrackBy", ctx_r0.trackByWeekDayHeaderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.view.allDayEventRows)("ngForTrackBy", ctx_r0.trackById);
  }
}

function CalendarWeekViewComponent_div_10_div_2_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const segment_r34 = ctx.$implicit;
    const roomIndex_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r33.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r34)("segmentHeight", ctx_r33.hourSegmentHeight)("locale", ctx_r33.locale)("customTemplate", ctx_r33.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r33.daysInWeek)("currentRoomIndex", roomIndex_r32);
  }
}

function CalendarWeekViewComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_10_div_2_mwl_calendar_week_view_hour_segment_2_Template, 2, 9, "mwl-calendar-week-view-hour-segment", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const hour_r30 = ctx.$implicit;
    const odd_r31 = ctx.odd;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r30.segments)("ngForTrackBy", ctx_r29.trackByHourSegment);
  }
}

function CalendarWeekViewComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_10_div_2_Template, 4, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.view.hourColumns[0].hours)("ngForTrackBy", ctx_r1.trackByHour);
  }
}

const _c8 = function () {
  return {
    left: true,
    top: true
  };
};

function CalendarWeekViewComponent_div_15_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c8));
  }
}

function CalendarWeekViewComponent_div_15_div_6_ng_template_5_Template(rf, ctx) {}

function CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mwl-calendar-week-view-event", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template_mwl_calendar_week_view_event_eventClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);
      const timeEvent_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r46.eventClicked.emit({
        event: timeEvent_r39.event,
        sourceEvent: $event.sourceEvent
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                ");
  }

  if (rf & 2) {
    const timeEvent_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r44.locale)("weekEvent", timeEvent_r39)("tooltipPlacement", ctx_r44.tooltipPlacement)("tooltipTemplate", ctx_r44.tooltipTemplate)("tooltipAppendToBody", ctx_r44.tooltipAppendToBody)("tooltipDisabled", ctx_r44.dragActive || ctx_r44.timeEventResizes.size > 0)("tooltipDelay", ctx_r44.tooltipDelay)("customTemplate", ctx_r44.eventTemplate)("eventTitleTemplate", ctx_r44.eventTitleTemplate)("eventActionsTemplate", ctx_r44.eventActionsTemplate)("column", column_r36)("daysInWeek", ctx_r44.daysInWeek);
  }
}

const _c9 = function () {
  return {
    right: true,
    bottom: true
  };
};

function CalendarWeekViewComponent_div_15_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c9));
  }
}

const _c10 = function (a0, a1, a2, a3) {
  return {
    left: a0,
    right: a1,
    top: a2,
    bottom: a3
  };
};

function CalendarWeekViewComponent_div_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizeStart_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);
      const timeEvent_r39 = restoredCtx.$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

      return ctx_r51.timeEventResizeStarted(_r2, timeEvent_r39, $event);
    })("resizing", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizing_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);
      const timeEvent_r39 = restoredCtx.$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r53.timeEventResizing(timeEvent_r39, $event);
    })("resizeEnd", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizeEnd_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);
      const timeEvent_r39 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r54.timeEventResizeEnded(timeEvent_r39);
    })("dragStart", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragStart_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);
      const timeEvent_r39 = restoredCtx.$implicit;

      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

      return ctx_r55.dragStarted(_r2, _r40, timeEvent_r39, true);
    })("dragging", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragging_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);
      const timeEvent_r39 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r56.dragMove(timeEvent_r39, $event);
    })("dragEnd", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragEnd_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);
      const timeEvent_r39 = restoredCtx.$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r57.dragEnded(timeEvent_r39, $event, ctx_r57.dayColumnWidth, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_15_div_6_div_3_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CalendarWeekViewComponent_div_15_div_6_ng_template_5_Template, 0, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template, 4, 12, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CalendarWeekViewComponent_div_15_div_6_div_10_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const timeEvent_r39 = ctx.$implicit;

    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", timeEvent_r39.top, "px")("width", timeEvent_r39.height, "px")("top", timeEvent_r39.left, "%")("height", timeEvent_r39.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", timeEvent_r39.event.draggable && ctx_r37.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r39.startsBeforeDay)("cal-ends-within-day", !timeEvent_r39.endsAfterDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", timeEvent_r39.event.cssClass)("hidden", timeEvent_r39.height === 0 && timeEvent_r39.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](29, _c10, ctx_r37.dayColumnWidth, ctx_r37.dayColumnWidth, ctx_r37.eventSnapSize || ctx_r37.hourSegmentHeight, ctx_r37.eventSnapSize || ctx_r37.hourSegmentHeight))("validateResize", ctx_r37.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](34, _c3, timeEvent_r39.event, ctx_r37.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](37, _c4, timeEvent_r39.event.draggable && ctx_r37.timeEventResizes.size === 0, timeEvent_r39.event.draggable && ctx_r37.timeEventResizes.size === 0))("dragSnapGrid", ctx_r37.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](40, _c4, ctx_r37.dayColumnWidth, ctx_r37.eventSnapSize || ctx_r37.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c6))("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c7))("ghostDragEnabled", !ctx_r37.snapDraggedEvents)("ghostElementTemplate", _r43)("validateDrag", ctx_r37.validateDrag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r39.event == null ? null : timeEvent_r39.event.resizable == null ? null : timeEvent_r39.event.resizable.beforeStart) && !timeEvent_r39.startsBeforeDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r39.event == null ? null : timeEvent_r39.event.resizable == null ? null : timeEvent_r39.event.resizable.afterEnd) && !timeEvent_r39.endsAfterDay);
  }
}

function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const segment_r61 = restoredCtx.$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return ctx_r62.hourSegmentClicked.emit({
        date: segment_r61.date,
        sourceEvent: $event
      });
    })("drop", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const segment_r61 = restoredCtx.$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return ctx_r64.eventDropped($event, segment_r61.date, false);
    })("dragEnter", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const segment_r61 = restoredCtx.$implicit;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return ctx_r65.dateDragEnter(segment_r61.date);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const segment_r61 = ctx.$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r60.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r61)("segmentHeight", ctx_r60.hourSegmentHeight)("locale", ctx_r60.locale)("customTemplate", ctx_r60.hourSegmentTemplate)("daysInWeek", ctx_r60.daysInWeek)("clickListenerDisabled", ctx_r60.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r60.dragActive || !ctx_r60.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r60.daysInWeek === 1);
  }
}

function CalendarWeekViewComponent_div_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template, 2, 10, "mwl-calendar-week-view-hour-segment", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const hour_r58 = ctx.$implicit;
    const odd_r59 = ctx.odd;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r58.segments)("ngForTrackBy", ctx_r38.trackByHourSegment);
  }
}

function CalendarWeekViewComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mwl-calendar-week-view-current-time-marker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_15_div_6_Template, 12, 45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CalendarWeekViewComponent_div_15_div_9_Template, 4, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r36 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDate", column_r36.date)("dayStartHour", ctx_r3.dayStartHour)("dayStartMinute", ctx_r3.dayStartMinute)("dayEndHour", ctx_r3.dayEndHour)("dayEndMinute", ctx_r3.dayEndMinute)("hourSegments", ctx_r3.hourSegments)("hourDuration", ctx_r3.hourDuration)("hourSegmentHeight", ctx_r3.hourSegmentHeight)("customTemplate", ctx_r3.currentTimeMarkerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r36.events)("ngForTrackBy", ctx_r3.trackByWeekTimeEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r36.hours)("ngForTrackBy", ctx_r3.trackByHour);
  }
}
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */


let CalendarWeekViewComponent = /*#__PURE__*/(() => {
  class CalendarWeekViewComponent {
    /**
     * @hidden
     */
    constructor(cdr, utils, locale, dateAdapter, element) {
      this.cdr = cdr;
      this.utils = utils;
      this.dateAdapter = dateAdapter;
      this.element = element;
      this.eventDroppedHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.dragEnterHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * An array of events to display on view
       * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
       */

      this.events = [];
      /**
       * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
       */

      this.excludeDays = [];
      /**
       * The placement of the event tooltip
       */

      this.tooltipPlacement = 'auto';
      /**
       * Whether to append tooltips to the body or next to the trigger element
       */

      this.tooltipAppendToBody = true;
      /**
       * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
       * will be displayed immediately.
       */

      this.tooltipDelay = null;
      /**
       * The precision to display events.
       * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
       */

      this.precision = 'days';
      /**
       * Whether to snap events to a grid when dragging
       */

      this.snapDraggedEvents = true;
      /**
       * The number of segments in an hour. Must divide equally into 60.
       */

      this.hourSegments = 2;
      /**
       * The height in pixels of each hour segment
       */

      this.hourSegmentHeight = 30;
      /**
       * The minimum height in pixels of each event
       */

      this.minimumEventHeight = 30;
      /**
       * The day start hours in 24 hour time. Must be 0-23
       */

      this.dayStartHour = 0;
      /**
       * The day start minutes. Must be 0-59
       */

      this.dayStartMinute = 0;
      /**
       * The day end hours in 24 hour time. Must be 0-23
       */

      this.dayEndHour = 23;
      /**
       * The day end minutes. Must be 0-59
       */

      this.dayEndMinute = 59;
      /**
       * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
       */

      this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * Called when an event title is clicked
       */

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * Called when an event is resized or dragged and dropped
       */

      this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * An output that will be called before the view is rendered for the current week.
       * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
       */

      this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * Called when an hour segment is clicked
       */

      this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * @hidden
       */

      this.allDayEventResizes = new Map();
      /**
       * @hidden
       */

      this.timeEventResizes = new Map();
      /**
       * @hidden
       */

      this.eventDragEnterByType = {
        allDay: 0,
        time: 0
      };
      /**
       * @hidden
       */

      this.dragActive = false;
      /**
       * @hidden
       */

      this.dragAlreadyMoved = false;
      /**
       * @hidden
       */

      this.calendarId = Symbol('angular calendar week view id');
      /**
       * @hidden
       */

      this.rtl = false;
      /**
       * @hidden
       */

      this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByWeekDayHeaderDate;
      /**
       * @hidden
       */

      this.trackByHourSegment = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByHourSegment;
      /**
       * @hidden
       */

      this.trackByHour = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByHour;
      /**
       * @hidden
       */

      this.trackByWeekAllDayEvent = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByWeekAllDayEvent;
      /**
       * @hidden
       */

      this.trackByWeekTimeEvent = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByWeekTimeEvent;
      /**
       * @hidden
       */

      this.trackByHourColumn = (index, column) => column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
      /**
       * @hidden
       */


      this.trackById = (index, row) => row.id;

      this.locale = locale;
    }
    /**
     * @hidden
     */


    ngOnInit() {
      if (this.refresh) {
        this.refreshSubscription = this.refresh.subscribe(() => {
          this.refreshAll();
          this.cdr.markForCheck();
        });
      }
    }
    /**
     * @hidden
     */


    ngOnChanges(changes) {
      const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
      const refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.hourDuration || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek || changes.minimumEventHeight;

      if (refreshHeader) {
        this.refreshHeader();
      }

      if (changes.events) {
        (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.validateEvents)(this.events);
      }

      if (refreshBody) {
        this.refreshBody();
      }

      if (refreshHeader || refreshBody) {
        this.emitBeforeViewRender();
      }
    }
    /**
     * @hidden
     */


    ngOnDestroy() {
      if (this.refreshSubscription) {
        this.refreshSubscription.unsubscribe();
      }
    }
    /**
     * @hidden
     */


    ngAfterViewInit() {
      this.rtl = typeof window !== 'undefined' && getComputedStyle(this.element.nativeElement).direction === 'rtl';
      this.cdr.detectChanges();
    }
    /**
     * @hidden
     */


    timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
      this.timeEventResizes.set(timeEvent.event, resizeEvent);
      this.resizeStarted(eventsContainer, timeEvent);
    }
    /**
     * @hidden
     */


    timeEventResizing(timeEvent, resizeEvent) {
      this.timeEventResizes.set(timeEvent.event, resizeEvent);
      const adjustedEvents = new Map();
      const tempEvents = [...this.events];
      this.timeEventResizes.forEach((lastResizeEvent, event) => {
        const newEventDates = this.getTimeEventResizedDates(event, lastResizeEvent);
        const adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
        adjustedEvents.set(adjustedEvent, event);
        const eventIndex = tempEvents.indexOf(event);
        tempEvents[eventIndex] = adjustedEvent;
      });
      this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
    }
    /**
     * @hidden
     */


    timeEventResizeEnded(timeEvent) {
      this.view = this.getWeekView(this.events);
      const lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

      if (lastResizeEvent) {
        this.timeEventResizes.delete(timeEvent.event);
        const newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
        this.eventTimesChanged.emit({
          newStart: newEventDates.start,
          newEnd: newEventDates.end,
          event: timeEvent.event,
          type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Resize
        });
      }
    }
    /**
     * @hidden
     */


    allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
      this.allDayEventResizes.set(allDayEvent, {
        originalOffset: allDayEvent.offset,
        originalSpan: allDayEvent.span,
        edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
      });
      this.resizeStarted(allDayEventsContainer, allDayEvent, this.getDayColumnWidth(allDayEventsContainer));
    }
    /**
     * @hidden
     */


    allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
      const currentResize = this.allDayEventResizes.get(allDayEvent);
      const modifier = this.rtl ? -1 : 1;

      if (typeof resizeEvent.edges.left !== 'undefined') {
        const diff = Math.round(+resizeEvent.edges.left / dayWidth) * modifier;
        allDayEvent.offset = currentResize.originalOffset + diff;
        allDayEvent.span = currentResize.originalSpan - diff;
      } else if (typeof resizeEvent.edges.right !== 'undefined') {
        const diff = Math.round(+resizeEvent.edges.right / dayWidth) * modifier;
        allDayEvent.span = currentResize.originalSpan + diff;
      }
    }
    /**
     * @hidden
     */


    allDayEventResizeEnded(allDayEvent) {
      const currentResize = this.allDayEventResizes.get(allDayEvent);

      if (currentResize) {
        const allDayEventResizingBeforeStart = currentResize.edge === 'left';
        let daysDiff;

        if (allDayEventResizingBeforeStart) {
          daysDiff = allDayEvent.offset - currentResize.originalOffset;
        } else {
          daysDiff = allDayEvent.span - currentResize.originalSpan;
        }

        allDayEvent.offset = currentResize.originalOffset;
        allDayEvent.span = currentResize.originalSpan;
        const newDates = this.getAllDayEventResizedDates(allDayEvent.event, daysDiff, allDayEventResizingBeforeStart);
        this.eventTimesChanged.emit({
          newStart: newDates.start,
          newEnd: newDates.end,
          event: allDayEvent.event,
          type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Resize
        });
        this.allDayEventResizes.delete(allDayEvent);
      }
    }
    /**
     * @hidden
     */


    getDayColumnWidth(eventRowContainer) {
      return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    }
    /**
     * @hidden
     */


    dateDragEnter(date) {
      this.lastDragEnterDate = date;
    }
    /**
     * @hidden
     */


    eventDropped(dropEvent, date, allDay) {
      if ((0,_common_util__WEBPACK_IMPORTED_MODULE_2__.shouldFireDroppedEvent)(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime() && (!this.snapDraggedEvents || dropEvent.dropData.event !== this.lastDraggedEvent)) {
        this.eventTimesChanged.emit({
          type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Drop,
          event: dropEvent.dropData.event,
          newStart: date,
          allDay
        });
      }

      this.lastDraggedEvent = null;
    }
    /**
     * @hidden
     */


    dragEnter(type) {
      this.eventDragEnterByType[type]++;
    }
    /**
     * @hidden
     */


    dragLeave(type) {
      this.eventDragEnterByType[type]--;
    }
    /**
     * @hidden
     */


    dragStarted(eventsContainerElement, eventElement, event, useY) {
      this.dayColumnWidth = this.getDayColumnWidth(eventsContainerElement);
      const dragHelper = new _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_4__.CalendarDragHelper(eventsContainerElement, eventElement);

      this.validateDrag = ({
        x,
        y,
        transform
      }) => {
        const isAllowed = this.allDayEventResizes.size === 0 && this.timeEventResizes.size === 0 && dragHelper.validateDrag({
          x,
          y,
          snapDraggedEvents: this.snapDraggedEvents,
          dragAlreadyMoved: this.dragAlreadyMoved,
          transform
        });

        if (isAllowed && this.validateEventTimesChanged) {
          const newEventTimes = this.getDragMovedEventTimes(event, {
            x,
            y
          }, this.dayColumnWidth, useY);
          return this.validateEventTimesChanged({
            type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Drag,
            event: event.event,
            newStart: newEventTimes.start,
            newEnd: newEventTimes.end
          });
        }

        return isAllowed;
      };

      this.dragActive = true;
      this.dragAlreadyMoved = false;
      this.lastDraggedEvent = null;
      this.eventDragEnterByType = {
        allDay: 0,
        time: 0
      };

      if (!this.snapDraggedEvents && useY) {
        this.view.hourColumns.forEach(column => {
          const linkedEvent = column.events.find(columnEvent => columnEvent.event === event.event && columnEvent !== event); // hide any linked events while dragging

          if (linkedEvent) {
            linkedEvent.width = 0;
            linkedEvent.height = 0;
          }
        });
      }

      this.cdr.markForCheck();
    }
    /**
     * @hidden
     */


    dragMove(dayEvent, dragEvent) {
      const newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
      const originalEvent = dayEvent.event;
      const adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
      const tempEvents = this.events.map(event => {
        if (event === originalEvent) {
          return adjustedEvent;
        }

        return event;
      });
      this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
      this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */


    allDayEventDragMove() {
      this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */


    dragEnded(weekEvent, dragEndEvent, dayWidth, useY = false) {
      this.view = this.getWeekView(this.events);
      this.dragActive = false;
      this.validateDrag = null;
      const {
        start,
        end
      } = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY);

      if ((this.snapDraggedEvents || this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) && (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.isDraggedWithinPeriod)(start, end, this.view.period)) {
        this.lastDraggedEvent = weekEvent.event;
        this.eventTimesChanged.emit({
          newStart: start,
          newEnd: end,
          event: weekEvent.event,
          type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Drag,
          allDay: !useY
        });
      }
    }

    refreshHeader() {
      this.days = this.utils.getWeekViewHeader(Object.assign({
        viewDate: this.viewDate,
        weekStartsOn: this.weekStartsOn,
        excluded: this.excludeDays,
        weekendDays: this.weekendDays
      }, (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getWeekViewPeriod)(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }

    refreshBody() {
      this.view = this.getWeekView(this.events);
    }

    refreshAll() {
      this.refreshHeader();
      this.refreshBody();
      this.emitBeforeViewRender();
    }

    emitBeforeViewRender() {
      if (this.days && this.view) {
        this.beforeViewRender.emit(Object.assign({
          header: this.days
        }, this.view));
      }
    }

    getWeekView(events) {
      return this.utils.getWeekView(Object.assign({
        events,
        viewDate: this.viewDate,
        weekStartsOn: this.weekStartsOn,
        excluded: this.excludeDays,
        precision: this.precision,
        absolutePositionedEvents: true,
        hourSegments: this.hourSegments,
        hourDuration: this.hourDuration,
        dayStart: {
          hour: this.dayStartHour,
          minute: this.dayStartMinute
        },
        dayEnd: {
          hour: this.dayEndHour,
          minute: this.dayEndMinute
        },
        segmentHeight: this.hourSegmentHeight,
        weekendDays: this.weekendDays,
        minimumEventHeight: this.minimumEventHeight
      }, (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getWeekViewPeriod)(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }

    getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
      const daysDragged = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.roundToNearest)(dragEndEvent.x, dayWidth) / dayWidth * (this.rtl ? -1 : 1);
      const minutesMoved = useY ? (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getMinutesMoved)(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration) : 0;
      const start = this.dateAdapter.addMinutes((0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
      let end;

      if (weekEvent.event.end) {
        end = this.dateAdapter.addMinutes((0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
      }

      return {
        start,
        end
      };
    }

    restoreOriginalEvents(tempEvents, adjustedEvents, snapDraggedEvents = true) {
      const previousView = this.view;

      if (snapDraggedEvents) {
        this.view = this.getWeekView(tempEvents);
      }

      const adjustedEventsArray = tempEvents.filter(event => adjustedEvents.has(event));
      this.view.hourColumns.forEach((column, columnIndex) => {
        previousView.hourColumns[columnIndex].hours.forEach((hour, hourIndex) => {
          hour.segments.forEach((segment, segmentIndex) => {
            column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
          });
        });
        adjustedEventsArray.forEach(adjustedEvent => {
          const originalEvent = adjustedEvents.get(adjustedEvent);
          const existingColumnEvent = column.events.find(columnEvent => columnEvent.event === (snapDraggedEvents ? adjustedEvent : originalEvent));

          if (existingColumnEvent) {
            // restore the original event so trackBy kicks in and the dom isn't changed
            existingColumnEvent.event = originalEvent;
            existingColumnEvent['tempEvent'] = adjustedEvent;

            if (!snapDraggedEvents) {
              existingColumnEvent.height = 0;
              existingColumnEvent.width = 0;
            }
          } else {
            // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
            const event = {
              event: originalEvent,
              left: 0,
              top: 0,
              height: 0,
              width: 0,
              startsBeforeDay: false,
              endsAfterDay: false,
              tempEvent: adjustedEvent
            };
            column.events.push(event);
          }
        });
      });
      adjustedEvents.clear();
    }

    getTimeEventResizedDates(calendarEvent, resizeEvent) {
      const newEventDates = {
        start: calendarEvent.start,
        end: (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultEventEnd)(this.dateAdapter, calendarEvent, this.minimumEventHeight)
      };

      const {
        end
      } = calendarEvent,
            eventWithoutEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(calendarEvent, ["end"]);

      const smallestResizes = {
        start: this.dateAdapter.addMinutes(newEventDates.end, this.minimumEventHeight * -1),
        end: (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultEventEnd)(this.dateAdapter, eventWithoutEnd, this.minimumEventHeight)
      };
      const modifier = this.rtl ? -1 : 1;

      if (typeof resizeEvent.edges.left !== 'undefined') {
        const daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth) * modifier;
        const newStart = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

        if (newStart < smallestResizes.start) {
          newEventDates.start = newStart;
        } else {
          newEventDates.start = smallestResizes.start;
        }
      } else if (typeof resizeEvent.edges.right !== 'undefined') {
        const daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth) * modifier;
        const newEnd = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);

        if (newEnd > smallestResizes.end) {
          newEventDates.end = newEnd;
        } else {
          newEventDates.end = smallestResizes.end;
        }
      }

      if (typeof resizeEvent.edges.top !== 'undefined') {
        const minutesMoved = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getMinutesMoved)(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
        const newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

        if (newStart < smallestResizes.start) {
          newEventDates.start = newStart;
        } else {
          newEventDates.start = smallestResizes.start;
        }
      } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
        const minutesMoved = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getMinutesMoved)(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
        const newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);

        if (newEnd > smallestResizes.end) {
          newEventDates.end = newEnd;
        } else {
          newEventDates.end = smallestResizes.end;
        }
      }

      return newEventDates;
    }

    resizeStarted(eventsContainer, event, dayWidth) {
      this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
      const resizeHelper = new _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarResizeHelper(eventsContainer, dayWidth, this.rtl);

      this.validateResize = ({
        rectangle,
        edges
      }) => {
        const isWithinBoundary = resizeHelper.validateResize({
          rectangle: Object.assign({}, rectangle),
          edges
        });

        if (isWithinBoundary && this.validateEventTimesChanged) {
          let newEventDates;

          if (!dayWidth) {
            newEventDates = this.getTimeEventResizedDates(event.event, {
              rectangle,
              edges
            });
          } else {
            const modifier = this.rtl ? -1 : 1;

            if (typeof edges.left !== 'undefined') {
              const diff = Math.round(+edges.left / dayWidth) * modifier;
              newEventDates = this.getAllDayEventResizedDates(event.event, diff, !this.rtl);
            } else {
              const diff = Math.round(+edges.right / dayWidth) * modifier;
              newEventDates = this.getAllDayEventResizedDates(event.event, diff, this.rtl);
            }
          }

          return this.validateEventTimesChanged({
            type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Resize,
            event: event.event,
            newStart: newEventDates.start,
            newEnd: newEventDates.end
          });
        }

        return isWithinBoundary;
      };

      this.cdr.markForCheck();
    }
    /**
     * @hidden
     */


    getAllDayEventResizedDates(event, daysDiff, beforeStart) {
      let start = event.start;
      let end = event.end || event.start;

      if (beforeStart) {
        start = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, start, daysDiff, this.excludeDays);
      } else {
        end = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, end, daysDiff, this.excludeDays);
      }

      return {
        start,
        end
      };
    }

  }

  CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) {
    return new (t || CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_7__.CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  CalendarWeekViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CalendarWeekViewComponent,
    selectors: [["mwl-calendar-week-view"]],
    inputs: {
      viewDate: "viewDate",
      events: "events",
      excludeDays: "excludeDays",
      refresh: "refresh",
      locale: "locale",
      tooltipPlacement: "tooltipPlacement",
      tooltipTemplate: "tooltipTemplate",
      tooltipAppendToBody: "tooltipAppendToBody",
      tooltipDelay: "tooltipDelay",
      weekStartsOn: "weekStartsOn",
      headerTemplate: "headerTemplate",
      eventTemplate: "eventTemplate",
      eventTitleTemplate: "eventTitleTemplate",
      eventActionsTemplate: "eventActionsTemplate",
      precision: "precision",
      weekendDays: "weekendDays",
      snapDraggedEvents: "snapDraggedEvents",
      hourSegments: "hourSegments",
      hourDuration: "hourDuration",
      hourSegmentHeight: "hourSegmentHeight",
      minimumEventHeight: "minimumEventHeight",
      dayStartHour: "dayStartHour",
      dayStartMinute: "dayStartMinute",
      dayEndHour: "dayEndHour",
      dayEndMinute: "dayEndMinute",
      hourSegmentTemplate: "hourSegmentTemplate",
      eventSnapSize: "eventSnapSize",
      allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
      daysInWeek: "daysInWeek",
      currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
      validateEventTimesChanged: "validateEventTimesChanged"
    },
    outputs: {
      eventDroppedHeader: "eventDroppedHeader",
      dragEnterHeader: "dragEnterHeader",
      dayHeaderClicked: "dayHeaderClicked",
      eventClicked: "eventClicked",
      eventTimesChanged: "eventTimesChanged",
      beforeViewRender: "beforeViewRender",
      hourSegmentClicked: "hourSegmentClicked"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 20,
    vars: 9,
    consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "marginRight", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", "currentRoomIndex", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", "currentRoomIndex"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourDuration", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "left", "width", "top", "height", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "ngTemplateOutlet"], ["weekEventTemplate", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]],
    template: function CalendarWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-week-view-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_3_listener($event) {
          return ctx.dayHeaderClicked.emit($event);
        })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_3_listener($event) {
          return ctx.eventDropped({
            dropData: $event
          }, $event.newStart, true);
        })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_3_listener($event) {
          return ctx.dateDragEnter($event.date);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_6_Template, 12, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_8_listener() {
          return ctx.dragEnter("time");
        })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_8_listener() {
          return ctx.dragLeave("time");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CalendarWeekViewComponent_div_10_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CalendarWeekViewComponent_div_15_Template, 11, 13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n  ");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
      }
    },
    directives: [_calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_9__.CalendarWeekViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableDirective, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_13__.CalendarWeekViewEventComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizeHandleDirective, _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_14__.CalendarWeekViewHourSegmentComponent, _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_15__.CalendarWeekViewCurrentTimeMarkerComponent, _common_click_directive__WEBPACK_IMPORTED_MODULE_16__.ClickDirective],
    encapsulation: 2
  });
  return CalendarWeekViewComponent;
})();

/***/ }),

/***/ 47175:
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewComponent": function() { return /* reexport safe */ _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarWeekViewComponent; },
/* harmony export */   "getWeekViewPeriod": function() { return /* reexport safe */ _common_util__WEBPACK_IMPORTED_MODULE_1__.getWeekViewPeriod; },
/* harmony export */   "ɵCalendarWeekViewHeaderComponent": function() { return /* reexport safe */ _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewHeaderComponent; },
/* harmony export */   "ɵCalendarWeekViewEventComponent": function() { return /* reexport safe */ _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewEventComponent; },
/* harmony export */   "ɵCalendarWeekViewHourSegmentComponent": function() { return /* reexport safe */ _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekViewHourSegmentComponent; },
/* harmony export */   "ɵCalendarWeekViewCurrentTimeMarkerComponent": function() { return /* reexport safe */ _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewCurrentTimeMarkerComponent; },
/* harmony export */   "CalendarWeekModule": function() { return /* binding */ CalendarWeekModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-resizable-element */ 90093);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-week-view.component */ 1913);
/* harmony import */ var _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-week-view-header.component */ 55428);
/* harmony import */ var _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-week-view-event.component */ 61862);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/calendar-common.module */ 67400);
/* harmony import */ var _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-week-view-hour-segment.component */ 20923);
/* harmony import */ var _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-week-view-current-time-marker.component */ 6556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);











 // needed for ivy, not part of the public api





let CalendarWeekModule = /*#__PURE__*/(() => {
  class CalendarWeekModule {}

  CalendarWeekModule.ɵfac = function CalendarWeekModule_Factory(t) {
    return new (t || CalendarWeekModule)();
  };

  CalendarWeekModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: CalendarWeekModule
  });
  CalendarWeekModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_10__.CalendarCommonModule], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule]
  });
  return CalendarWeekModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CalendarWeekModule, {
    declarations: [_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarWeekViewComponent, _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewHeaderComponent, _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewEventComponent, _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekViewHourSegmentComponent, _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewCurrentTimeMarkerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_10__.CalendarCommonModule],
    exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarWeekViewComponent, _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewHeaderComponent, _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewEventComponent, _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekViewHourSegmentComponent, _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewCurrentTimeMarkerComponent]
  });
})();

/***/ }),

/***/ 2965:
/*!**************************************************!*\
  !*** ./projects/demos/app/demo-app.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoAppComponent": function() { return /* binding */ DemoAppComponent; }
/* harmony export */ });
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-calendar */ 4606);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-calendar/src/modules/common/calendar-previous-view.directive */ 31726);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-calendar/src/modules/common/calendar-today.directive */ 22167);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-calendar/src/modules/common/calendar-next-view.directive */ 60897);
/* harmony import */ var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../angular-calendar/src/modules/week/calendar-week-view.component */ 1913);








let DemoAppComponent = /*#__PURE__*/(() => {
  class DemoAppComponent {
    constructor(breakpointObserver, cd) {
      this.breakpointObserver = breakpointObserver;
      this.cd = cd;
      this.viewDate = new Date();
      this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarView.Week;
      this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarView;
      this.colors = {
        red: {
          primary: '#ad2121',
          secondary: '#FAE3E3'
        },
        blue: {
          primary: '#1e90ff',
          secondary: '#D1E8FF'
        },
        yellow: {
          primary: '#e3bc08',
          secondary: '#FDF1BA'
        }
      };
      this.events = [{
        title: 'Click me',
        color: this.colors.yellow,
        start: new Date(2022, 5, 12, 1),
        end: new Date(2022, 5, 12, 3)
      }, {
        title: 'Or click me',
        color: this.colors.blue,
        start: new Date(2022, 5, 13, 4),
        end: new Date(2022, 5, 13, 6)
      }];
      this.daysInWeek = 14;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }

    ngOnInit() {
      const CALENDAR_RESPONSIVE = {
        small: {
          breakpoint: '(max-width: 576px)',
          daysInWeek: 2
        },
        medium: {
          breakpoint: '(max-width: 768px)',
          daysInWeek: 3
        },
        large: {
          breakpoint: '(max-width: 960px)',
          daysInWeek: 5
        }
      };
      /* this.breakpointObserver
        .observe(
          Object.values(CALENDAR_RESPONSIVE).map(({ breakpoint }) => breakpoint)
        )
        .pipe(takeUntil(this.destroy$))
        .subscribe((state: BreakpointState) => {
          const foundBreakpoint = Object.values(CALENDAR_RESPONSIVE).find(
            ({ breakpoint }) => !!state.breakpoints[breakpoint]
          );
          if (foundBreakpoint) {
            this.daysInWeek = foundBreakpoint.daysInWeek;
          } else {
            this.daysInWeek = 7;
          }
          this.cd.markForCheck();
        }); */
    }

    ngOnDestroy() {
      this.destroy$.next();
    }

  }

  DemoAppComponent.ɵfac = function DemoAppComponent_Factory(t) {
    return new (t || DemoAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };

  DemoAppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DemoAppComponent,
    selectors: [["app-root"]],
    decls: 21,
    vars: 9,
    consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [3, "dayEndHour", "viewDate", "daysInWeek", "events"]],
    template: function DemoAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("viewDateChange", function DemoAppComponent_Template_div_viewDateChange_6_listener($event) {
          return ctx.viewDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n              Previous\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("viewDateChange", function DemoAppComponent_Template_div_viewDateChange_9_listener($event) {
          return ctx.viewDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n              Today\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("viewDateChange", function DemoAppComponent_Template_div_viewDateChange_12_listener($event) {
          return ctx.viewDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n              Next\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mwl-calendar-week-view", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dayEndHour", 6)("viewDate", ctx.viewDate)("daysInWeek", ctx.daysInWeek)("events", ctx.events);
      }
    },
    directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_4__.CalendarPreviousViewDirective, _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_5__.CalendarTodayDirective, _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__.CalendarNextViewDirective, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_7__.CalendarWeekViewComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLWFwcC5jc3MifQ== */"],
    changeDetection: 0
  });
  return DemoAppComponent;
})();

/***/ }),

/***/ 80495:
/*!***********************************************!*\
  !*** ./projects/demos/app/demo-app.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoAppModule": function() { return /* binding */ DemoAppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _demo_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-app.component */ 2965);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-calendar/src/modules/calendar.module */ 3746);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ 90008);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 20789);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);







let DemoAppModule = /*#__PURE__*/(() => {
  class DemoAppModule {}

  DemoAppModule.ɵfac = function DemoAppModule_Factory(t) {
    return new (t || DemoAppModule)();
  };

  DemoAppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: DemoAppModule,
    bootstrap: [_demo_app_component__WEBPACK_IMPORTED_MODULE_1__.DemoAppComponent]
  });
  DemoAppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [],
    imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule.forRoot({
      provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__.DateAdapter,
      useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__.adapterFactory
    }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule]]
  });
  return DemoAppModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoAppModule, {
    declarations: [_demo_app_component__WEBPACK_IMPORTED_MODULE_1__.DemoAppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 56321:
/*!****************************************************!*\
  !*** ./projects/demos/environments/environment.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 73747:
/*!********************************!*\
  !*** ./projects/demos/main.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_demo_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/demo-app.module */ 80495);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 56321);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_demo_app_module__WEBPACK_IMPORTED_MODULE_3__.DemoAppModule).catch(err => console.log(err));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(73747); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map