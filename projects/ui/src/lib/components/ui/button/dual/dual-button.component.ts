import { Component, Input } from '@angular/core';

export interface DualButtonInput {
  icon: string;
  label: string;
  callback: () => void;
}

@Component({
  selector: 'ta-dual-button',
  templateUrl: './dual-button.component.html',
  styleUrls: ['./dual-button.component.scss'],
})
export class DualButtonComponent {
  @Input()
  isFull = false;

  @Input()
  first!: DualButtonInput;

  @Input()
  second!: DualButtonInput;

  @Input()
  type: 'primary' | 'secondary' = 'primary';

  constructor() {}

  public getClass() {
    const css: { [index: string]: boolean } = {};

    css[this.type] = true;

    return css;
  }
}
