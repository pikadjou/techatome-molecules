import { CamNotificationDataService } from '../../services/data.service';
import { NotificationFilter } from '../../services/queries';
import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { BulletComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

    AsyncPipe,
    BulletComponent
  ],
})
export class BulletComponent extends TaBaseComponent {
  @Input()
  filters: NotificationFilter = null;

  get number$() {
    return this._notificationDataService.count.get$(this._notificationDataService.computeKey(this.filters));
  }

  constructor(private _notificationDataService: CamNotificationDataService) {
    super();
  }

  ngOnInit() {
    this.requestState.asked();
    this._notificationDataService.fetchNumberOfNotifications$(this.filters).subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}
