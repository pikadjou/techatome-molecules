import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CamSizes, CamState } from '@camelot/styles';

@Component({
  selector: 'cam-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input()
  state: CamState = 'classic';

  @Input()
  underline?: boolean = true;

  @Input()
  bold: boolean = false;

  @Input()
  size: CamSizes = 'md';

  @Input()
  icon: string | null = null;

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

    return css;
  }
}
