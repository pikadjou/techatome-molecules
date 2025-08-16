import { Component, Input } from '@angular/core';

import { CamSizes, ColorType } from '@camelot/styles';

@Component({
  selector: 'cam-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @Input()
  size: CamSizes = 'md';

  @Input()
  type: ColorType = 'default';

  public getClass(): string {
    return `label-${this.type} ${this.size}`;
  }
}
