import { Component, inject } from "@angular/core";

import { tap } from "rxjs/operators";

import { TaBaseComponent } from "@ta/utils";

import {
  NotificationItem,
  TaNotificationService,
} from "../../../services/notification.service";
import { NotificationInlineComponent } from "../inline/notification-inline.component";

const AUTO_DISMISS_DELAY = 3000;

@Component({
  selector: "ta-notification-box",
  templateUrl: "./notification-box.component.html",
  styleUrls: ["./notification-box.component.scss"],
  standalone: true,
  imports: [NotificationInlineComponent],
})
export class NotificationBoxComponent extends TaBaseComponent {
  public list: NotificationItem[] = [];

  private _notificationService = inject(TaNotificationService);

  constructor() {
    super();

    this._registerSubscription(
      this._notificationService.newNotification$
        .pipe(
          tap((notification) => {
            this.list.push(notification);

            if (!notification.persistent) {
              setTimeout(() => {
                this._remove(notification.id);
              }, AUTO_DISMISS_DELAY);
            }
          })
        )
        .subscribe()
    );

    this._registerSubscription(
      this._notificationService.removeNotification$
        .pipe(tap((id) => this._remove(id)))
        .subscribe()
    );
  }

  public dismiss(id: string) {
    this._remove(id);
  }

  private _remove(id: string) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
