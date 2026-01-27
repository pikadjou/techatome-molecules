import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { differenceInCalendarDays } from 'date-fns';

import { TaTranslationUI } from '../../../translation.service';

@Component({
  selector: 'ta-time-ago',
  templateUrl: './time-ago.component.html',
  styleUrls: ['./time-ago.component.scss'],
  standalone: true,
  imports: [TranslateModule, DatePipe],
})
export class TimeAgoComponent {
  date = input.required<string>();

  withHours = input<boolean>(false);

  get absDays() {
    return Math.abs(this.days);
  }
  get days() {
    return differenceInCalendarDays(new Date(this.date()), new Date());
  }
  public key() {
    const diffDays = this.days;

    return this._getTranslationKey(diffDays);
  }

  private _getTranslationKey(diffDays: number): string {
    if (diffDays === 0) {
      return 'ui.common.today';
    }
    if (diffDays === -1) {
      return 'ui.common.yesterday';
    }
    if (diffDays === 1) {
      return 'ui.common.tomorrow';
    }
    if (diffDays < -1 && diffDays >= -3) {
      return 'ui.common.above';
    }
    if (diffDays > 1 && diffDays <= 3) {
      return 'ui.common.ahead';
    }
    if (this.withHours()) {
      return 'ui.common.to-date-with-hours';
    }
    return 'ui.common.to-date';
  }

  constructor() {
    TaTranslationUI.getInstance();
  }
}
