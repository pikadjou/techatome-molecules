import { Component, Input } from '@angular/core';

@Component({
  selector: 'ta-progress-bar-data',
  templateUrl: './progress-bar-data.component.html',
  styleUrls: ['./progress-bar-data.component.scss'],
})
export class ProgressBarDataComponent {
  @Input()
  current?: number;

  @Input()
  max?: number;

  @Input()
  title!: string;

  @Input()
  titleIcon?: string;

  /**
   * @deprecated
   */
  @Input()
  description?: string;

  @Input()
  rightText?: { text: string; colorClass?: string };

  get progressValue() {
    if ((this.current || this.current === 0) && (this.max || this.max === 0)) return `${this.current}/${this.max}`;

    return (this.current ?? this.max)?.toString() ?? '';
  }
}
