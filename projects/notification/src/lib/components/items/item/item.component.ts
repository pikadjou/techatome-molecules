import { Component, Input } from '@angular/core';

import { NotificationDto } from '../../../services/dto/notification';

@Component({
  selector: 'ta-notification-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  notification!: NotificationDto;
}
