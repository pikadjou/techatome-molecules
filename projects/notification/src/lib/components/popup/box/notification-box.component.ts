import { NgFor } from "@angular/common";
import { Component } from "@angular/core";

import { tap } from "rxjs/operators";

import { ToastComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { ENotificationCode } from "../../../enum";
import { TaNotificationService } from "../../../services/notification.service";
import { NotificationInlineComponent } from "../inline/notification-inline.component";

@Component({
  selector: "ta-notification-box",
  templateUrl: "./notification-box.component.html",
  styleUrls: ["./notification-box.component.scss"],
  standalone: true,
  imports: [NgFor, NotificationInlineComponent, ToastComponent],
})
export class NotificationBoxComponent extends TaBaseComponent {
  public list: { message: string; code: ENotificationCode }[] = [];

  constructor(private _notificationService: TaNotificationService) {
    super();

    this._registerSubscription(
      this._notificationService.newNotification$
        .pipe(
          tap((notification) => {
            this.list.push(notification);
          }),
          tap((notification) => {
            setTimeout(() => {
              this.list = this.list.filter((item) => item !== notification);
            }, 3000);
          })
        )
        .subscribe()
    );
  }
}
