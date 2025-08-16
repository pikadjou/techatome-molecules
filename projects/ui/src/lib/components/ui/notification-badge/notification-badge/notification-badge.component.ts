import { Component, Input } from '@angular/core';

import { CamSizes } from '@camelot/styles';

@Component({
  selector: 'cam-notification-badge',
  templateUrl: './notification-badge.component.html',
  styleUrls: ['./notification-badge.component.scss'],
})
export class NotificationBadgeComponent {
  @Input()
  number!: number;

  @Input()
  fontSize: CamSizes = 'xs';

  @Input()
  style?: string | undefined;

  @Input()
  relative: boolean = false;

  public getClass() {
    const css: { [index: string]: boolean } = {};

    css[`bgc-${this.style ?? 'semantic-token-info'}`] = true;

    if (this.relative) {
      css['relative'] = true;
    }

    return css;
  }
}
