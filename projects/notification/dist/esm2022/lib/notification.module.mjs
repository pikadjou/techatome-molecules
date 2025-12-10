import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
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
import { LAZY_SERVICE_TOKEN, TaNotificationService, } from "./services/notification.service";
import { TaNotificationSharedService } from "./services/shared.service";
import { TaTranslationNotification } from "./translation.service";
import * as i0 from "@angular/core";
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
export class TaNotificationModule {
    static forRoot() {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationModule, imports: [CommonModule,
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
            BulletComponent], exports: [NotificationInlineComponent,
            ContainerComponent,
            BulletComponent,
            NotificationBoxComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationModule, imports: [CommonModule,
            TaDirectivePipeModule,
            TaIconsModule,
            TaUiModule,
            TaContainerModule,
            NotificationBoxComponent,
            NotificationInlineComponent,
            ContainerComponent,
            ItemComponent,
            IconComponent,
            ProjectStatusChangedComponent,
            NewQuotationVersionComponent,
            NewInvoiceComponent,
            InvoicePaymentStatusChangedComponent,
            TaskAssignedComponent,
            ToDoAssignedComponent,
            TaskDueTodayComponent,
            ToDoDueTodayComponent,
            TaskNewActivityComponent,
            UserTaggedInConversationComponent,
            BulletComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }], ctorParameters: () => [] });
export class TaNotificationProvider {
    static forRoot() {
        return {
            ngModule: TaNotificationProvider,
            providers: [
                { provide: LAZY_SERVICE_TOKEN, useExisting: TaNotificationService },
                TaNotificationDataService,
                TaNotificationSharedService,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationProvider, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationProvider }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationProvider }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationProvider, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [],
                    exports: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMEdBQTBHLENBQUM7QUFDaEssT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDekcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDdEksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDekksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDL0csT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDakgsT0FB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b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCwyQkFBMkI7d0JBQzNCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZix3QkFBd0I7cUJBQ3pCO2lCQUNGOztBQXNCRCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRTtnQkFDbkUseUJBQXlCO2dCQUN6QiwyQkFBMkI7YUFDNUI7U0FDRixDQUFDO0lBQ0osQ0FBQzsrR0FWVSxzQkFBc0I7Z0hBQXRCLHNCQUFzQjtnSEFBdEIsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQUxsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVGFJY29uc01vZHVsZSB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwiQHRhL3RyYW5zbGF0aW9uXCI7XG5pbXBvcnQgeyBUYUNvbnRhaW5lck1vZHVsZSwgVGFVaU1vZHVsZSB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgQnVsbGV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS9pY29uL2ljb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtSW5mb0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS9pbmZvL2luZm8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pdGVtcy9pdGVtL2l0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnZvaWNlUGF5bWVudFN0YXR1c0NoYW5nZWRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvaW52b2ljZS1wYXltZW50LXN0YXR1cy1jaGFuZ2VkL2ludm9pY2UtcGF5bWVudC1zdGF0dXMtY2hhbmdlZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5ld0ludm9pY2VDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvbmV3LWludm9pY2UvbmV3LWludm9pY2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZXdRdW90YXRpb25WZXJzaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL25ldy1xdW90YXRpb24tdmVyc2lvbi9uZXctcXVvdGF0aW9uLXZlcnNpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9qZWN0U3RhdHVzQ2hhbmdlZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90ZW1wbGF0ZS9wcm9qZWN0LXN0YXR1cy1jaGFuZ2VkL3Byb2plY3Qtc3RhdHVzLWNoYW5nZWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYXNrQXNzaWduZWRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvdGFzay1hc3NpZ25lZC90YXNrLWFzc2lnbmVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFza0R1ZVRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL3Rhc2stZHVlLXRvZGF5L3Rhc2stZHVlLXRvZGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFza05ld0FjdGl2aXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL3Rhc2stbmV3LWFjdGl2aXR5L3Rhc2stbmV3LWFjdGl2aXR5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9Eb0Fzc2lnbmVkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL3RvLWRvLWFzc2lnbmVkL3RvLWRvLWFzc2lnbmVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9Eb0R1ZVRvZGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL3RvLWRvLWR1ZS10b2RheS90by1kby1kdWUtdG9kYXkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVc2VyVGFnZ2VkSW5Db252ZXJzYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvdXNlci10YWdnZWQtaW4tY29udmVyc2F0aW9uL3VzZXItdGFnZ2VkLWluLWNvbnZlcnNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvblRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RpdGxlL3RpdGxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQm94Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wb3B1cC9ib3gvbm90aWZpY2F0aW9uLWJveC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcG9wdXAvaW5saW5lL25vdGlmaWNhdGlvbi1pbmxpbmUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBMQVpZX1NFUlZJQ0VfVE9LRU4sXG4gIFRhTm90aWZpY2F0aW9uU2VydmljZSxcbn0gZnJvbSBcIi4vc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRhTm90aWZpY2F0aW9uU2hhcmVkU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NoYXJlZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgVGFOb3RpZmljYXRpb25Nb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IE5vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCwgQ29udGFpbmVyQ29tcG9uZW50LCBCdWxsZXRDb21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUYURpcmVjdGl2ZVBpcGVNb2R1bGUsXG4gICAgVGFJY29uc01vZHVsZSxcbiAgICBUYVVpTW9kdWxlLFxuICAgIFRhQ29udGFpbmVyTW9kdWxlLFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgTm90aWZpY2F0aW9uQm94Q29tcG9uZW50LFxuICAgIE5vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCxcbiAgICBDb250YWluZXJDb21wb25lbnQsXG4gICAgSXRlbUNvbXBvbmVudCxcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIEl0ZW1JbmZvQ29tcG9uZW50LFxuICAgIFByb2plY3RTdGF0dXNDaGFuZ2VkQ29tcG9uZW50LFxuICAgIE5ld1F1b3RhdGlvblZlcnNpb25Db21wb25lbnQsXG4gICAgTmV3SW52b2ljZUNvbXBvbmVudCxcbiAgICBJbnZvaWNlUGF5bWVudFN0YXR1c0NoYW5nZWRDb21wb25lbnQsXG4gICAgTm90aWZpY2F0aW9uVGl0bGVDb21wb25lbnQsXG4gICAgVGFza0Fzc2lnbmVkQ29tcG9uZW50LFxuICAgIFRvRG9Bc3NpZ25lZENvbXBvbmVudCxcbiAgICBUYXNrRHVlVG9kYXlDb21wb25lbnQsXG4gICAgVG9Eb0R1ZVRvZGF5Q29tcG9uZW50LFxuICAgIFRhc2tOZXdBY3Rpdml0eUNvbXBvbmVudCxcbiAgICBVc2VyVGFnZ2VkSW5Db252ZXJzYXRpb25Db21wb25lbnQsXG4gICAgQnVsbGV0Q29tcG9uZW50LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXG4gICAgTm90aWZpY2F0aW9uSW5saW5lQ29tcG9uZW50LFxuICAgIENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCdWxsZXRDb21wb25lbnQsXG4gICAgTm90aWZpY2F0aW9uQm94Q29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYU5vdGlmaWNhdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGFOb3RpZmljYXRpb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRhTm90aWZpY2F0aW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTEFaWV9TRVJWSUNFX1RPS0VOLCB1c2VFeGlzdGluZzogVGFOb3RpZmljYXRpb25TZXJ2aWNlIH0sXG4gICAgICAgIFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UsXG4gICAgICAgIFRhTm90aWZpY2F0aW9uU2hhcmVkU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uTm90aWZpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBUYU5vdGlmaWNhdGlvblByb3ZpZGVyIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUYU5vdGlmaWNhdGlvblByb3ZpZGVyPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUYU5vdGlmaWNhdGlvblByb3ZpZGVyLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTEFaWV9TRVJWSUNFX1RPS0VOLCB1c2VFeGlzdGluZzogVGFOb3RpZmljYXRpb25TZXJ2aWNlIH0sXG4gICAgICAgIFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UsXG4gICAgICAgIFRhTm90aWZpY2F0aW9uU2hhcmVkU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19