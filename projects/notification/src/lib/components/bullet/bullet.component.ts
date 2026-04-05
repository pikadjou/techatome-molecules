import { AsyncPipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, inject, input, OnInit } from "@angular/core";

import { BulletComponent as TaBulletComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { TaNotificationDataService } from "../../services/data.service";
import { NotificationFilter } from "../../services/queries";

@Component({
  selector: "ta-notification-bullet",
  templateUrl: "./bullet.component.html",
  styleUrls: ["./bullet.component.scss"],
  standalone: true,
  imports: [AsyncPipe, TaBulletComponent],
})
export class BulletComponent extends TaBaseComponent implements OnInit {
  filters = input<NotificationFilter>(null);

  private _notificationDataService = inject(TaNotificationDataService);

  get number$() {
    return this._notificationDataService.count.get$(
      this._notificationDataService.computeKey(this.filters())
    );
  }

  constructor() {
    super();
  }

  ngOnInit() {
    this.requestState.asked();
    this._registerSubscription(
      this._notificationDataService
        .fetchNumberOfNotifications$(this.filters())
        .subscribe({
          complete: () => this.requestState.completed(),
          error: (error: HttpErrorResponse) => {
            this.requestState.onError(error.status, error.statusText);
          },
        })
    );
  }
}
