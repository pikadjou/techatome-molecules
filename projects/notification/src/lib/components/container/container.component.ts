import { CamNotificationDataService } from '../../services/data.service';
import { NotificationFilter } from '../../services/queries';
import { CamNotificationSharedService, RoutingType } from '../../services/shared.service';
import { InvoicePaymentStatusChangedComponent } from '../items/item/template/invoice-payment-status-changed/invoice-payment-status-changed.component';
import { NewInvoiceComponent } from '../items/item/template/new-invoice/new-invoice.component';
import { NewQuotationVersionComponent } from '../items/item/template/new-quotation-version/new-quotation-version.component';
import { ProjectStatusChangedComponent } from '../items/item/template/project-status-changed/project-status-changed.component';
import { TaskAssignedComponent } from '../items/item/template/task-assigned/task-assigned.component';
import { TaskDueTodayComponent } from '../items/item/template/task-due-today/task-due-today.component';
import { TaskNewActivityComponent } from '../items/item/template/task-new-activity/task-new-activity.component';
import { ToDoAssignedComponent } from '../items/item/template/to-do-assigned/to-do-assigned.component';
import { ToDoDueTodayComponent } from '../items/item/template/to-do-due-today/to-do-due-today.component';
import { UserTaggedInConversationComponent } from '../items/item/template/user-tagged-in-conversation/user-tagged-in-conversation.component';
import { AsyncPipe, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { EmptyComponent, ErrorComponent, LoaderComponent } from '@ta/ui';
import { TaBaseComponent, NgLetDirective } from '@ta/utils';
import { Observable, tap } from 'rxjs';

    AsyncPipe,
    EmptyComponent,
    ErrorComponent,
    InvoicePaymentStatusChangedComponent,
    LoaderComponent,
    NewInvoiceComponent,
    NewQuotationVersionComponent,
    NgFor,
    NgLetDirective,
    NgSwitch,
    NgSwitchCase,
    ProjectStatusChangedComponent,
    TaskAssignedComponent,
    TaskDueTodayComponent,
    TaskNewActivityComponent,
    ToDoAssignedComponent,
    ToDoDueTodayComponent,
    UserTaggedInConversationComponent
  ],
})
export class ContainerComponent extends TaBaseComponent implements OnInit {
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
