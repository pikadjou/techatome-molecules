import { NotificationDto } from '../../../services/dto/notification';
import { Component, Input } from '@angular/core';
import { TimeAgoComponent } from '@ta/ui';

@Component({
  selector: 'ta-notification-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [
    TimeAgoComponent
  ],
})
export class ItemComponent {
  @Input()
  notification!: NotificationDto;
}
