import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TaSizes } from '../../../../types/sizes';

@Component({
selector: 'ta-notification-badge',
  templateUrl: './notification-badge.component.html',
  styleUrls: ['./notification-badge.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class NotificationBadgeComponent {
  @Input()
  number!: number;

  @Input()
  fontSize: TaSizes = 'xs';

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
