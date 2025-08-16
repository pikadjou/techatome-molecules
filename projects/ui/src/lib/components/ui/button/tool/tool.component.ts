import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CamSizes, CamState } from '@ta/styles';

@Component({
  selector: 'ta-button-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ButtonToolComponent {
  @Input()
  state: CamState = 'classic';

  @Input()
  type: 'primary' = 'primary';

  @Input()
  size: CamSizes = 'md';

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
    if (this.state === 'classic') {
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
