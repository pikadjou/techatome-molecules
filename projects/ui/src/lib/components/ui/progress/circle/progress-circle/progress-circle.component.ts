import { DecimalPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { TaTranslationUI } from '../../../translation.service';

@Component({
  selector: 'ta-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  standalone: true,
  imports: [NgIf, TranslateModule, DecimalPipe],
})
export class ProgressCircleComponent {
  /**
   * Progress in percentage
   */
  @Input() progress: number = 50;

  /**
   * Title located above
   */
  @Input() upTitle?: string;

  /**
   * Title located below
   */
  @Input() downTitle?: string;

  get circumference() {
    return 2 * Math.PI * 45;
  }

  get canDisplayText() {
    return !Number.isNaN(this.progress);
  }

  constructor() {
    TaTranslationUI.getInstance();
  }
}
