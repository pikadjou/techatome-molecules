import { Component } from '@angular/core';

import { tap } from 'rxjs/operators';

import { CamBaseComponent } from '@ta/utils';

import { ENotificationCode } from '../../../enum';
import { CamNotificationService } from '../../../services/notification.service';

@Component({
  selector: 'ta-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.scss'],
})
export class NotificationBoxComponent extends CamBaseComponent {
  public list: { message: string; code: ENotificationCode }[] = [];

  constructor(private _notificationService: CamNotificationService) {
    super();

    this._registerSubscription(
      this._notificationService.newNotification$
        .pipe(
          tap(notification => {
            this.list.push(notification);
          }),
          tap(notification => {
            setTimeout(() => {
              this.list = this.list.filter(item => item !== notification);
            }, 3000);
          })
        )
        .subscribe()
    );
  }
}
