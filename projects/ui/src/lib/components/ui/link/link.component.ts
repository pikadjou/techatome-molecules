import { NgIf, NgClass } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TaSizes, TaState } from '../../../types/sizes';

@Component({
selector: 'ta-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, FontIconComponent],
})
export class LinkComponent {
  @Input()
  state: TaState = 'completed';

  @Input()
  underline?: boolean = true;

  @Input()
  bold: boolean = false;

  @Input()
  size: TaSizes = 'md';

  @Input()
  icon: string | null = null;

  @Output()
  action = new EventEmitter();

  constructor() {}

  public handleClick() {
    if (this.state === 'completed') {
      this.action.emit();
    }
  }

  public getClass() {
    const css: { [index: string]: boolean } = {};

    css[this.state] = true;
    css[this.size] = true;

    return css;
  }
}
