import { NgFor, NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';

import { createRange } from '@ta/utils';

import { Placeholder } from './config';

@Component({
selector: 'ta-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  standalone: true,
  imports: [NgFor, NgClass, NgSwitch, NgSwitchCase],
})
export class PlaceholderComponent {
  @Input()
  placeholder!: Placeholder;

  constructor() {}

  public getFakeArray(num: number): Array<number> {
    return createRange(num);
  }

  public getColClass(gridSize: number | undefined): string {
    return gridSize ? `ph-col-${gridSize}` : '';
  }

  public getAttributesClass(attributes: string[]): string {
    return attributes ? attributes.join(' ') : '';
  }
}
