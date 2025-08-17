import { NgIf, NgClass } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TaSizes, TaState } from '../../../../types/sizes';

@Component({
selector: 'ta-button-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, FontIconComponent],
})
export class ButtonToolComponent {
  @Input()
  state: TaState = 'completed';

  @Input()
  type: 'primary' = 'primary';

  @Input()
  size: TaSizes = 'md';

  @Input()
  icon: string | null = null;

  @Input()
  stopPropagationActivation = true;

  @Input()
  readonly: boolean = false;

  /**
   * Event emitted when button is clicked
   */
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
    css[this.type] = true;

    return css;
  }
}
