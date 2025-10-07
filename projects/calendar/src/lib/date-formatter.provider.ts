import { formatDate } from '@angular/common';
import { Injectable, inject } from '@angular/core';

import { CamTranslationService } from '@ta/translation';
import { CalendarDateFormatter, DateAdapter, DateFormatterParams } from 'angular-calendar';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {
  readonly translateService = inject(CamTranslationService);

  constructor(dateAdapter: DateAdapter) {
    super(dateAdapter);
  }

  public override dayViewTitle({ date }: DateFormatterParams): string {
    return formatDate(date, 'EEE d MMM y', this.translateService.getLanguage());
  }
  public override dayViewHour({ date }: DateFormatterParams): string {
    return formatDate(date, 'shortTime', this.translateService.getLanguage());
  }

  public override weekViewHour({ date }: DateFormatterParams): string {
    return this.dayViewHour({
      date,
    });
  }

  public override monthViewColumnHeader({ date }: DateFormatterParams): string {
    return formatDate(date, 'ccccc', this.translateService.getLanguage());
  }
}
