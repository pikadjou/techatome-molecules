import { Component, Input } from '@angular/core';

import { CamSizes, ColorType } from '@camelot/styles';

@Component({
  selector: 'cam-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss'],
})
export class BulletComponent {
  @Input()
  size: CamSizes = 'sm';

  @Input()
  type: ColorType | 'notif' = 'default';

  public getClass(): string {
    return `bullet-${this.type} ${this.size}`;
  }
}
