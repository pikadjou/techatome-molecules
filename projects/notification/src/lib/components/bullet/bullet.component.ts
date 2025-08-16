import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';

import { CamBaseComponent } from '@camelot/utils';

import { CamNotificationDataService } from '../../services/data.service';
import { NotificationFilter } from '../../services/queries';

@Component({
  selector: 'cam-notification-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss'],
})
export class BulletComponent extends CamBaseComponent {
  @Input()
  filters: NotificationFilter = null;

  get number$() {
    return this._notificationDataService.count.get$(
      this._notificationDataService.computeKey(this.filters)
    );
  }

  constructor(private _notificationDataService: CamNotificationDataService) {
    super();
  }

  ngOnInit() {
    this.requestState.asked();
    this._notificationDataService
      .fetchNumberOfNotifications$(this.filters)
      .subscribe({
        complete: () => this.requestState.completed(),
        error: (error: HttpErrorResponse) => {
          this.requestState.onError(error.status, error.statusText);
        },
      });
  }
}
