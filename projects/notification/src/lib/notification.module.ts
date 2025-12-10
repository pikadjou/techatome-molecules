import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";

import { TaIconsModule } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { TaContainerModule, TaUiModule } from "@ta/ui";
import { TaDirectivePipeModule } from "@ta/utils";

import { BulletComponent } from "./components/bullet/bullet.component";
import { ContainerComponent } from "./components/container/container.component";
import { IconComponent } from "./components/items/item/icon/icon.component";
import { ItemInfoComponent } from "./components/items/item/info/info.component";
import { ItemComponent } from "./components/items/item/item.component";
import { InvoicePaymentStatusChangedComponent } from "./components/items/item/template/invoice-payment-status-changed/invoice-payment-status-changed.component";
import { NewInvoiceComponent } from "./components/items/item/template/new-invoice/new-invoice.component";
import { NewQuotationVersionComponent } from "./components/items/item/template/new-quotation-version/new-quotation-version.component";
import { ProjectStatusChangedComponent } from "./components/items/item/template/project-status-changed/project-status-changed.component";
import { TaskAssignedComponent } from "./components/items/item/template/task-assigned/task-assigned.component";
import { TaskDueTodayComponent } from "./components/items/item/template/task-due-today/task-due-today.component";
import { TaskNewActivityComponent } from "./components/items/item/template/task-new-activity/task-new-activity.component";
import { ToDoAssignedComponent } from "./components/items/item/template/to-do-assigned/to-do-assigned.component";
import { ToDoDueTodayComponent } from "./components/items/item/template/to-do-due-today/to-do-due-today.component";
import { UserTaggedInConversationComponent } from "./components/items/item/template/user-tagged-in-conversation/user-tagged-in-conversation.component";
import { NotificationTitleComponent } from "./components/items/item/title/title.component";
import { NotificationBoxComponent } from "./components/popup/box/notification-box.component";
import { NotificationInlineComponent } from "./components/popup/inline/notification-inline.component";
import { TaNotificationDataService } from "./services/data.service";
import {
  LAZY_SERVICE_TOKEN,
  TaNotificationService,
} from "./services/notification.service";
import { TaNotificationSharedService } from "./services/shared.service";
import { TaTranslationNotification } from "./translation.service";

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaNotificationModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { NotificationInlineComponent, ContainerComponent, BulletComponent } from '@ta/library-name';
 */
@NgModule({
  imports: [
    CommonModule,
    TaDirectivePipeModule,
    TaIconsModule,
    TaUiModule,
    TaContainerModule,
    TranslatePipe,
    NotificationBoxComponent,
    NotificationInlineComponent,
    ContainerComponent,
    ItemComponent,
    IconComponent,
    ItemInfoComponent,
    ProjectStatusChangedComponent,
    NewQuotationVersionComponent,
    NewInvoiceComponent,
    InvoicePaymentStatusChangedComponent,
    NotificationTitleComponent,
    TaskAssignedComponent,
    ToDoAssignedComponent,
    TaskDueTodayComponent,
    ToDoDueTodayComponent,
    TaskNewActivityComponent,
    UserTaggedInConversationComponent,
    BulletComponent,
  ],
  declarations: [],
  exports: [
    NotificationInlineComponent,
    ContainerComponent,
    BulletComponent,
    NotificationBoxComponent,
  ],
})
export class TaNotificationModule {
  static forRoot(): ModuleWithProviders<TaNotificationModule> {
    return {
      ngModule: TaNotificationModule,
      providers: [
        { provide: LAZY_SERVICE_TOKEN, useExisting: TaNotificationService },
        TaNotificationDataService,
        TaNotificationSharedService,
      ],
    };
  }
  constructor() {
    TaTranslationNotification.getInstance();
  }
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
})
export class TaNotificationProvider {
  static forRoot(): ModuleWithProviders<TaNotificationProvider> {
    return {
      ngModule: TaNotificationProvider,
      providers: [
        { provide: LAZY_SERVICE_TOKEN, useExisting: TaNotificationService },
        TaNotificationDataService,
        TaNotificationSharedService,
      ],
    };
  }
}
