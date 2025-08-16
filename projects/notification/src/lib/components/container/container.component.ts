import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

import { CamBaseComponent } from '@ta/utils';
import { Observable, tap } from 'rxjs';

import { CamNotificationDataService } from '../../services/data.service';
import { NotificationFilter } from '../../services/queries';
import { CamNotificationSharedService, RoutingType } from '../../services/shared.service';

@Component({
  selector: 'ta-notification-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent extends CamBaseComponent implements OnInit {
  @Input()
  filters: NotificationFilter = null;

  @Input()
  templates: {
    paymentStatus: TemplateRef<any>;
    projectStatus: TemplateRef<any>;
  } | null = null;

  @Input()
  services: {
    getProjects$: (ids: string[]) => Observable<{ id: string; name: string }[]>;
  } | null = null;

  @Input()
  routing: { [index in RoutingType]: (data: any) => void } | null = null;

  @Output()
  nbChanged: EventEmitter<number> = new EventEmitter();

  get notifications$() {
    return this._notificationDataService.list
      .get$(this._notificationDataService.computeKey(this.filters))
      .pipe(tap(list => this.nbChanged.emit(list.length)));
  }
  constructor(
    private _notificationDataService: CamNotificationDataService,
    private _sharedService: CamNotificationSharedService
  ) {
    super();
  }

  ngOnInit() {
    this.requestState.asked();
    this._registerSubscription(
      this._notificationDataService.fetchNotifications$(this.filters).subscribe({
        complete: () => this.requestState.completed(),
        error: (error: HttpErrorResponse) => {
          this.requestState.onError(error.status, error.statusText);
        },
      })
    );

    if (this.templates) {
      this._sharedService.paymentStatusTemplate = this.templates?.paymentStatus;
      this._sharedService.projectStatusTemplate = this.templates?.projectStatus;
    }
    if (this.services) {
      this._sharedService.getProjects$ = this.services.getProjects$;
    }
    if (this.routing) {
      this._sharedService.routing = this.routing;
    }
  }
}
