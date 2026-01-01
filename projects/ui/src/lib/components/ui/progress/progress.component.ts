import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { ColorType, TaSizes } from '@ta/styles';

@Component({
  selector: 'ta-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class ProgressComponent {
  size = input<TaSizes>('md');

  type = input<ColorType>('default');

  value = input<number>(0);

  public getClass(): string {
    return `progress-${this.type()} ${this.size()}`;
  }

  public getProgressStyle() {
    return { width: `${Math.max(0, Math.min(100, this.value()))}%` };
  }
}
