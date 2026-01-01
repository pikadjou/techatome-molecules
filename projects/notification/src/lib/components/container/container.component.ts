import { AsyncPipe, NgFor } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import {
  Component,
  EventEmitter,
  input,
  OnInit,
  Output,
  TemplateRef,
} from "@angular/core";

import { Observable, tap } from "rxjs";

import { EmptyComponent, ErrorComponent, LoaderComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { TaNotificationDataService } from "../../services/data.service";
import { NotificationFilter } from "../../services/queries";
import {
  RoutingType,
  TaNotificationSharedService,
} from "../../services/shared.service";
import { InvoicePaymentStatusChangedComponent } from "../items/item/template/invoice-payment-status-changed/invoice-payment-status-changed.component";
import { NewInvoiceComponent } from "../items/item/template/new-invoice/new-invoice.component";
import { NewQuotationVersionComponent } from "../items/item/template/new-quotation-version/new-quotation-version.component";
import { ProjectStatusChangedComponent } from "../items/item/template/project-status-changed/project-status-changed.component";
import { TaskAssignedComponent } from "../items/item/template/task-assigned/task-assigned.component";
import { TaskDueTodayComponent } from "../items/item/template/task-due-today/task-due-today.component";
import { TaskNewActivityComponent } from "../items/item/template/task-new-activity/task-new-activity.component";
import { ToDoAssignedComponent } from "../items/item/template/to-do-assigned/to-do-assigned.component";
import { ToDoDueTodayComponent } from "../items/item/template/to-do-due-today/to-do-due-today.component";
import { UserTaggedInConversationComponent } from "../items/item/template/user-tagged-in-conversation/user-tagged-in-conversation.component";

@Component({
  selector: "ta-notification-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"],
  standalone: true,
  imports: [
    AsyncPipe,
    EmptyComponent,
    ErrorComponent,
    InvoicePaymentStatusChangedComponent,
    LoaderComponent,
    NewInvoiceComponent,
    NewQuotationVersionComponent,
    NgFor,
    ProjectStatusChangedComponent,
    TaskAssignedComponent,
    TaskDueTodayComponent,
    TaskNewActivityComponent,
    ToDoAssignedComponent,
    ToDoDueTodayComponent,
    UserTaggedInConversationComponent,
  ],
})
export class ContainerComponent extends TaBaseComponent implements OnInit {
  filters = input<NotificationFilter>(null);

  templates = input<{
    paymentStatus: TemplateRef<any>;
    projectStatus: TemplateRef<any>;
  } | null>(null);

  services = input<{
    getProjects$: (ids: string[]) => Observable<{ id: string; name: string }[]>;
  } | null>(null);

  routing = input<{ [index in RoutingType]: (data: any) => void } | null>(null);

  @Output()
  nbChanged: EventEmitter<number> = new EventEmitter();

  get notifications$() {
    return this._notificationDataService.list
      .get$(this._notificationDataService.computeKey(this.filters()))
      .pipe(tap((list) => this.nbChanged.emit(list.length)));
  }
  constructor(
    private _notificationDataService: TaNotificationDataService,
    private _sharedService: TaNotificationSharedService
  ) {
    super();
  }

  ngOnInit() {
    this.requestState.asked();
    this._registerSubscription(
      this._notificationDataService
        .fetchNotifications$(this.filters())
        .subscribe({
          complete: () => this.requestState.completed(),
          error: (error: HttpErrorResponse) => {
            this.requestState.onError(error.status, error.statusText);
          },
        })
    );

    const templatesVal = this.templates();
    if (templatesVal) {
      this._sharedService.paymentStatusTemplate = templatesVal.paymentStatus;
      this._sharedService.projectStatusTemplate = templatesVal.projectStatus;
    }
    const servicesVal = this.services();
    if (servicesVal) {
      this._sharedService.getProjects$ = servicesVal.getProjects$;
    }
    const routingVal = this.routing();
    if (routingVal) {
      this._sharedService.routing = routingVal;
    }
  }
}
