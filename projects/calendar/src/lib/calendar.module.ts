import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamCardModule } from '@ta/ui';
import { CalendarDateFormatter, CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { ByDayComponent } from './components/by-day/calendar-by-day.component';
import { ByMonthComponent } from './components/by-month/calendar-by-month.component';
import { CustomDateFormatter } from './date-formatter.provider';

/**
 * Base on angular calendar module: https://mattlewis92.github.io/angular-calendar/#/kitchen-sink
 */
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 * 
 * @example
 * // Instead of importing the module:
 * // import { CamCalendarModule } from '@ta/library-name';
 * 
 * // Import the standalone components directly:
 * import { ByDayComponent, ByMonthComponent } from '@ta/library-name';
 */
@NgModule({

  declarations: [],
  imports: [ByDayComponent, ByMonthComponent],
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
