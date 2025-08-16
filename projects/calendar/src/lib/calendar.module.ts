import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CalendarDateFormatter,
  CalendarModule,
  DateAdapter,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CamCardModule } from '@camelot/ui';

import { ByDayComponent } from './components/by-day/calendar-by-day.component';
import { ByMonthComponent } from './components/by-month/calendar-by-month.component';
import { CustomDateFormatter } from './date-formatter.provider';

/**
 * Base on angular calendar module: https://mattlewis92.github.io/angular-calendar/#/kitchen-sink
 */
@NgModule({
  declarations: [ByDayComponent, ByMonthComponent],
  imports: [
    CamCardModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CommonModule,
  ],
  exports: [ByDayComponent, ByMonthComponent],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class CamCalendarModule {}
