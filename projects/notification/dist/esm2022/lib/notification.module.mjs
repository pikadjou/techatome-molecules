import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import * as i0 from "@angular/core";
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
export class CamNotificationModule {
    static forRoot() {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamNotificationModule, imports: [CommonModule, CamDirectivePipeModule, CamIconsModule, CamUiModule, CamContainerModule, TranslatePipe, NotificationBoxComponent, NotificationInlineComponent, ContainerComponent, ItemComponent, IconComponent, ItemInfoComponent, ProjectStatusChangedComponent, NewQuotationVersionComponent, NewInvoiceComponent, InvoicePaymentStatusChangedComponent, NotificationTitleComponent, TaskAssignedComponent, ToDoAssignedComponent, TaskDueTodayComponent, ToDoDueTodayComponent, TaskNewActivityComponent, UserTaggedInConversationComponent, BulletComponent], exports: [NotificationInlineComponent, ContainerComponent, BulletComponent, NotificationBoxComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamNotificationModule, imports: [CommonModule, CamDirectivePipeModule, CamIconsModule, CamUiModule, CamContainerModule, NotificationBoxComponent, NotificationInlineComponent, ContainerComponent, ItemComponent, IconComponent, ProjectStatusChangedComponent, NewQuotationVersionComponent, NewInvoiceComponent, InvoicePaymentStatusChangedComponent, TaskAssignedComponent, ToDoAssignedComponent, TaskDueTodayComponent, ToDoDueTodayComponent, TaskNewActivityComponent, UserTaggedInConversationComponent, BulletComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CamDirectivePipeModule, CamIconsModule, CamUiModule, CamContainerModule, TranslatePipe, NotificationBoxComponent, NotificationInlineComponent, ContainerComponent, ItemComponent, IconComponent, ItemInfoComponent, ProjectStatusChangedComponent, NewQuotationVersionComponent, NewInvoiceComponent, InvoicePaymentStatusChangedComponent, NotificationTitleComponent, TaskAssignedComponent, ToDoAssignedComponent, TaskDueTodayComponent, ToDoDueTodayComponent, TaskNewActivityComponent, UserTaggedInConversationComponent, BulletComponent],
                    declarations: [],
                    exports: [NotificationInlineComponent, ContainerComponent, BulletComponent, NotificationBoxComponent],
                }]
        }], ctorParameters: () => [] });
export class CamNotificationProvider {
    static forRoot() {
        return {
            ngModule: CamNotificationProvider,
            providers: [
                { provide: LAZY_SERVICE_TOKEN, useExisting: CamNotificationService },
                CamNotificationDataService,
                CamNotificationSharedService,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamNotificationProvider, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamNotificationProvider }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamNotificationProvider }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamNotificationProvider, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [],
                    exports: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMEdBQTBHLENBQUM7QUFDaEssT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDekcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDdEksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDekksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDL0csT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDakgsT0FB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Rzs7QUFzQkQsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUU7Z0JBQ3BFLDBCQUEwQjtnQkFDMUIsNEJBQTRCO2FBQzdCO1NBQ0YsQ0FBQztJQUNKLENBQUM7K0dBVlUsdUJBQXVCO2dIQUF2Qix1QkFBdUI7Z0hBQXZCLHVCQUF1Qjs7NEZBQXZCLHVCQUF1QjtrQkFMbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FtSWNvbnNNb2R1bGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBDYW1Db250YWluZXJNb2R1bGUsIENhbVVpTW9kdWxlIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IENhbURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBCdWxsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnVsbGV0L2J1bGxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1JbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vaW5mby9pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW52b2ljZVBheW1lbnRTdGF0dXNDaGFuZ2VkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvaW52b2ljZS1wYXltZW50LXN0YXR1cy1jaGFuZ2VkL2ludm9pY2UtcGF5bWVudC1zdGF0dXMtY2hhbmdlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmV3SW52b2ljZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL25ldy1pbnZvaWNlL25ldy1pbnZvaWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZXdRdW90YXRpb25WZXJzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvbmV3LXF1b3RhdGlvbi12ZXJzaW9uL25ldy1xdW90YXRpb24tdmVyc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdFN0YXR1c0NoYW5nZWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90ZW1wbGF0ZS9wcm9qZWN0LXN0YXR1cy1jaGFuZ2VkL3Byb2plY3Qtc3RhdHVzLWNoYW5nZWQuY29tcG9uZW50JztcbmltcG9ydCB7IFRhc2tBc3NpZ25lZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL3Rhc2stYXNzaWduZWQvdGFzay1hc3NpZ25lZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFza0R1ZVRvZGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvdGFzay1kdWUtdG9kYXkvdGFzay1kdWUtdG9kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IFRhc2tOZXdBY3Rpdml0eUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL3Rhc2stbmV3LWFjdGl2aXR5L3Rhc2stbmV3LWFjdGl2aXR5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb0RvQXNzaWduZWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90ZW1wbGF0ZS90by1kby1hc3NpZ25lZC90by1kby1hc3NpZ25lZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9Eb0R1ZVRvZGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvdG8tZG8tZHVlLXRvZGF5L3RvLWRvLWR1ZS10b2RheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlclRhZ2dlZEluQ29udmVyc2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvdXNlci10YWdnZWQtaW4tY29udmVyc2F0aW9uL3VzZXItdGFnZ2VkLWluLWNvbnZlcnNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90aXRsZS90aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BvcHVwL2JveC9ub3RpZmljYXRpb24tYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JbmxpbmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcG9wdXAvaW5saW5lL25vdGlmaWNhdGlvbi1pbmxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IENhbU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FtTm90aWZpY2F0aW9uU2VydmljZSwgTEFaWV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDYW1Ob3RpZmljYXRpb25TaGFyZWRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zaGFyZWQuc2VydmljZSc7XG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvbk5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgQ2FtTm90aWZpY2F0aW9uTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKiBcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgTm90aWZpY2F0aW9uSW5saW5lQ29tcG9uZW50LCBDb250YWluZXJDb21wb25lbnQsIEJ1bGxldENvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENhbURpcmVjdGl2ZVBpcGVNb2R1bGUsIENhbUljb25zTW9kdWxlLCBDYW1VaU1vZHVsZSwgQ2FtQ29udGFpbmVyTW9kdWxlLCBUcmFuc2xhdGVQaXBlLCBOb3RpZmljYXRpb25Cb3hDb21wb25lbnQsIE5vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCwgQ29udGFpbmVyQ29tcG9uZW50LCBJdGVtQ29tcG9uZW50LCBJY29uQ29tcG9uZW50LCBJdGVtSW5mb0NvbXBvbmVudCwgUHJvamVjdFN0YXR1c0NoYW5nZWRDb21wb25lbnQsIE5ld1F1b3RhdGlvblZlcnNpb25Db21wb25lbnQsIE5ld0ludm9pY2VDb21wb25lbnQsIEludm9pY2VQYXltZW50U3RhdHVzQ2hhbmdlZENvbXBvbmVudCwgTm90aWZpY2F0aW9uVGl0bGVDb21wb25lbnQsIFRhc2tBc3NpZ25lZENvbXBvbmVudCwgVG9Eb0Fzc2lnbmVkQ29tcG9uZW50LCBUYXNrRHVlVG9kYXlDb21wb25lbnQsIFRvRG9EdWVUb2RheUNvbXBvbmVudCwgVGFza05ld0FjdGl2aXR5Q29tcG9uZW50LCBVc2VyVGFnZ2VkSW5Db252ZXJzYXRpb25Db21wb25lbnQsIEJ1bGxldENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtOb3RpZmljYXRpb25JbmxpbmVDb21wb25lbnQsIENvbnRhaW5lckNvbXBvbmVudCwgQnVsbGV0Q29tcG9uZW50LCBOb3RpZmljYXRpb25Cb3hDb21wb25lbnRdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENhbU5vdGlmaWNhdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FtTm90aWZpY2F0aW9uTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYW1Ob3RpZmljYXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBMQVpZX1NFUlZJQ0VfVE9LRU4sIHVzZUV4aXN0aW5nOiBDYW1Ob3RpZmljYXRpb25TZXJ2aWNlIH0sXG4gICAgICAgIENhbU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlLFxuICAgICAgICBDYW1Ob3RpZmljYXRpb25TaGFyZWRTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIENhbVRyYW5zbGF0aW9uTm90aWZpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1Ob3RpZmljYXRpb25Qcm92aWRlciB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FtTm90aWZpY2F0aW9uUHJvdmlkZXI+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhbU5vdGlmaWNhdGlvblByb3ZpZGVyLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTEFaWV9TRVJWSUNFX1RPS0VOLCB1c2VFeGlzdGluZzogQ2FtTm90aWZpY2F0aW9uU2VydmljZSB9LFxuICAgICAgICBDYW1Ob3RpZmljYXRpb25EYXRhU2VydmljZSxcbiAgICAgICAgQ2FtTm90aWZpY2F0aW9uU2hhcmVkU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19