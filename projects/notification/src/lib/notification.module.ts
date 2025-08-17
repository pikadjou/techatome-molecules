import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamContainerModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { BulletComponent } from './components/bullet/bullet.component';
import { ContainerComponent } from './components/container/container.component';
import { IconComponent } from './components/items/item/icon/icon.component';
import { ItemInfoComponent } from './components/items/item/info/info.component';
import { ItemComponent } from './components/items/item/item.component';
import { InvoicePaymentStatusChangedComponent } from './components/items/item/template/invoice-payment-status-changed/invoice-payment-status-changed.component';
import { NewInvoiceComponent } from './components/items/item/template/new-invoice/new-invoice.component';
import { NewQuotationVersionComponent } from './components/items/item/template/new-quotation-version/new-quotation-version.component';
import { ProjectStatusChangedComponent } from './components/items/item/template/project-status-changed/project-status-changed.component';
import { TaskAssignedComponent } from './components/items/item/template/task-assigned/task-assigned.component';
import { TaskDueTodayComponent } from './components/items/item/template/task-due-today/task-due-today.component';
import { TaskNewActivityComponent } from './components/items/item/template/task-new-activity/task-new-activity.component';
import { ToDoAssignedComponent } from './components/items/item/template/to-do-assigned/to-do-assigned.component';
import { ToDoDueTodayComponent } from './components/items/item/template/to-do-due-today/to-do-due-today.component';
import { UserTaggedInConversationComponent } from './components/items/item/template/user-tagged-in-conversation/user-tagged-in-conversation.component';
import { NotificationTitleComponent } from './components/items/item/title/title.component';
import { NotificationBoxComponent } from './components/popup/box/notification-box.component';
import { NotificationInlineComponent } from './components/popup/inline/notification-inline.component';
import { CamNotificationDataService } from './services/data.service';
import { CamNotificationService, LAZY_SERVICE_TOKEN } from './services/notification.service';
import { CamNotificationSharedService } from './services/shared.service';
import { CamTranslationNotification } from './translation.service';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 * 
 * @example
 * // Instead of importing the module:
 * // import { CamNotificationModule } from '@ta/library-name';
 * 
 * // Import the standalone components directly:
 * import { NotificationInlineComponent, ContainerComponent, BulletComponent } from '@ta/library-name';
 */
@NgModule({

  imports: [CommonModule, CamDirectivePipeModule, CamIconsModule, CamUiModule, CamContainerModule, TranslatePipe, NotificationBoxComponent, NotificationInlineComponent, ContainerComponent, ItemComponent, IconComponent, ItemInfoComponent, ProjectStatusChangedComponent, NewQuotationVersionComponent, NewInvoiceComponent, InvoicePaymentStatusChangedComponent, NotificationTitleComponent, TaskAssignedComponent, ToDoAssignedComponent, TaskDueTodayComponent, ToDoDueTodayComponent, TaskNewActivityComponent, UserTaggedInConversationComponent, BulletComponent],
  declarations: [],
  exports: [NotificationInlineComponent, ContainerComponent, BulletComponent, NotificationBoxComponent],

})
export class CamNotificationModule {
  static forRoot(): ModuleWithProviders<CamNotificationModule> {
    return {
      ngModule: CamNotificationModule,
      providers: [
        { provide: LAZY_SERVICE_TOKEN, useExisting: CamNotificationService },
        CamNotificationDataService,
        CamNotificationSharedService,
      ],
    };
  }
  constructor() {
    CamTranslationNotification.getInstance();
  }
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
})
export class CamNotificationProvider {
  static forRoot(): ModuleWithProviders<CamNotificationProvider> {
    return {
      ngModule: CamNotificationProvider,
      providers: [
        { provide: LAZY_SERVICE_TOKEN, useExisting: CamNotificationService },
        CamNotificationDataService,
        CamNotificationSharedService,
      ],
    };
  }
}
