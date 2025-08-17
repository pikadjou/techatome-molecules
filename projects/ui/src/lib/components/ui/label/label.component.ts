import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ColorType, TaSizes } from '@ta/styles';

@Component({
  selector: 'ta-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class LabelComponent {
  @Input()
  size: TaSizes = 'md';

  @Input()
  type: ColorType = 'default';

  public getClass(): string {
    return `label-${this.type} ${this.size}`;
  }
}
