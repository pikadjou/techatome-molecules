import { ENotificationLevel } from '../../../../services/dto/level';
import { Component, Input } from '@angular/core';
import { FontIconComponent } from '@ta/icons';

@Component({
  selector: 'ta-notification-item-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [
    FontIconComponent
  ],
})
export class IconComponent {
  @Input()
  level!: ENotificationLevel;

  @Input()
  icon!: string;
}
