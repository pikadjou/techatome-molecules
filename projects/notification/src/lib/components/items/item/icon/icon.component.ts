import { Component, Input } from '@angular/core';

import { ENotificationLevel } from '../../../../services/dto/level';

@Component({
  selector: 'ta-notification-item-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input()
  level!: ENotificationLevel;

  @Input()
  icon!: string;
}
