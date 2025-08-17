import { NotificationDto } from '../../../services/dto/notification';
import { Component, Input } from '@angular/core';
import { TimeAgoComponent } from '@ta/ui';

    TimeAgoComponent
  ],
})
export class ItemComponent {
  @Input()
  notification!: NotificationDto;
}
