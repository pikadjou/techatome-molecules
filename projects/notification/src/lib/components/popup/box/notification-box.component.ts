import { ENotificationCode } from '../../../enum';
import { CamNotificationService } from '../../../services/notification.service';
import { NotificationInlineComponent } from '../inline/notification-inline.component';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ToastComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { tap } from 'rxjs/operators';

    NgFor,
    NotificationInlineComponent,
    ToastComponent
  ],
})
export class NotificationBoxComponent extends TaBaseComponent {
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
