import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ta/utils";
import * as i3 from "@ta/icons";
import * as i4 from "@ta/ui";
import * as i5 from "@ta/translation";
import * as i6 from "./components/popup/box/notification-box.component";
import * as i7 from "./components/popup/inline/notification-inline.component";
import * as i8 from "./components/container/container.component";
import * as i9 from "./components/items/item/item.component";
import * as i10 from "./components/items/item/icon/icon.component";
import * as i11 from "./components/items/item/info/info.component";
import * as i12 from "./components/items/item/template/project-status-changed/project-status-changed.component";
import * as i13 from "./components/items/item/template/new-quotation-version/new-quotation-version.component";
import * as i14 from "./components/items/item/template/new-invoice/new-invoice.component";
import * as i15 from "./components/items/item/template/invoice-payment-status-changed/invoice-payment-status-changed.component";
import * as i16 from "./components/items/item/title/title.component";
import * as i17 from "./components/items/item/template/task-assigned/task-assigned.component";
import * as i18 from "./components/items/item/template/to-do-assigned/to-do-assigned.component";
import * as i19 from "./components/items/item/template/task-due-today/task-due-today.component";
import * as i20 from "./components/items/item/template/to-do-due-today/to-do-due-today.component";
import * as i21 from "./components/items/item/template/task-new-activity/task-new-activity.component";
import * as i22 from "./components/items/item/template/user-tagged-in-conversation/user-tagged-in-conversation.component";
import * as i23 from "./components/bullet/bullet.component";
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
export declare class CamNotificationModule {
    static forRoot(): ModuleWithProviders<CamNotificationModule>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CamNotificationModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CamNotificationModule, never, [typeof i1.CommonModule, typeof i2.CamDirectivePipeModule, typeof i3.CamIconsModule, typeof i4.CamUiModule, typeof i4.CamContainerModule, typeof i5.TranslatePipe, typeof i6.NotificationBoxComponent, typeof i7.NotificationInlineComponent, typeof i8.ContainerComponent, typeof i9.ItemComponent, typeof i10.IconComponent, typeof i11.ItemInfoComponent, typeof i12.ProjectStatusChangedComponent, typeof i13.NewQuotationVersionComponent, typeof i14.NewInvoiceComponent, typeof i15.InvoicePaymentStatusChangedComponent, typeof i16.NotificationTitleComponent, typeof i17.TaskAssignedComponent, typeof i18.ToDoAssignedComponent, typeof i19.TaskDueTodayComponent, typeof i20.ToDoDueTodayComponent, typeof i21.TaskNewActivityComponent, typeof i22.UserTaggedInConversationComponent, typeof i23.BulletComponent], [typeof i7.NotificationInlineComponent, typeof i8.ContainerComponent, typeof i23.BulletComponent, typeof i6.NotificationBoxComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CamNotificationModule>;
}
export declare class CamNotificationProvider {
    static forRoot(): ModuleWithProviders<CamNotificationProvider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamNotificationProvider, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CamNotificationProvider, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CamNotificationProvider>;
}
