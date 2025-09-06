import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaContainerModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';
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
import { TaNotificationDataService } from './services/data.service';
import { LAZY_SERVICE_TOKEN, TaNotificationService } from './services/notification.service';
import { TaNotificationSharedService } from './services/shared.service';
import { TaTranslationNotification } from './translation.service';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationModule, imports: [CommonModule,
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
            BulletComponent], exports: [NotificationInlineComponent, ContainerComponent, BulletComponent, NotificationBoxComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationModule, imports: [CommonModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationModule, decorators: [{
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
                    exports: [NotificationInlineComponent, ContainerComponent, BulletComponent, NotificationBoxComponent],
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationProvider, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationProvider }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationProvider }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationProvider, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [],
                    exports: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMEdBQTBHLENBQUM7QUFDaEssT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDekcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDdEksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDekksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDL0csT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDakgsT0FB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Q2hCLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQztpQkFDdEc7O0FBc0JELE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFO2dCQUNuRSx5QkFBeUI7Z0JBQ3pCLDJCQUEyQjthQUM1QjtTQUNGLENBQUM7SUFDSixDQUFDOytHQVZVLHNCQUFzQjtnSEFBdEIsc0JBQXNCO2dIQUF0QixzQkFBc0I7OzRGQUF0QixzQkFBc0I7a0JBTGxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhSWNvbnNNb2R1bGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUYUNvbnRhaW5lck1vZHVsZSwgVGFVaU1vZHVsZSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBUYURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBCdWxsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnVsbGV0L2J1bGxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1JbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vaW5mby9pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW52b2ljZVBheW1lbnRTdGF0dXNDaGFuZ2VkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvaW52b2ljZS1wYXltZW50LXN0YXR1cy1jaGFuZ2VkL2ludm9pY2UtcGF5bWVudC1zdGF0dXMtY2hhbmdlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmV3SW52b2ljZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL25ldy1pbnZvaWNlL25ldy1pbnZvaWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZXdRdW90YXRpb25WZXJzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvbmV3LXF1b3RhdGlvbi12ZXJzaW9uL25ldy1xdW90YXRpb24tdmVyc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdFN0YXR1c0NoYW5nZWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90ZW1wbGF0ZS9wcm9qZWN0LXN0YXR1cy1jaGFuZ2VkL3Byb2plY3Qtc3RhdHVzLWNoYW5nZWQuY29tcG9uZW50JztcbmltcG9ydCB7IFRhc2tBc3NpZ25lZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL3Rhc2stYXNzaWduZWQvdGFzay1hc3NpZ25lZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFza0R1ZVRvZGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvdGFzay1kdWUtdG9kYXkvdGFzay1kdWUtdG9kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IFRhc2tOZXdBY3Rpdml0eUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9pdGVtL3RlbXBsYXRlL3Rhc2stbmV3LWFjdGl2aXR5L3Rhc2stbmV3LWFjdGl2aXR5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb0RvQXNzaWduZWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90ZW1wbGF0ZS90by1kby1hc3NpZ25lZC90by1kby1hc3NpZ25lZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9Eb0R1ZVRvZGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvdG8tZG8tZHVlLXRvZGF5L3RvLWRvLWR1ZS10b2RheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlclRhZ2dlZEluQ29udmVyc2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vdGVtcGxhdGUvdXNlci10YWdnZWQtaW4tY29udmVyc2F0aW9uL3VzZXItdGFnZ2VkLWluLWNvbnZlcnNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90aXRsZS90aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BvcHVwL2JveC9ub3RpZmljYXRpb24tYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JbmxpbmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcG9wdXAvaW5saW5lL25vdGlmaWNhdGlvbi1pbmxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBMQVpZX1NFUlZJQ0VfVE9LRU4sIFRhTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFOb3RpZmljYXRpb25TaGFyZWRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zaGFyZWQuc2VydmljZSc7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uTm90aWZpY2F0aW9uIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhTm90aWZpY2F0aW9uTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBOb3RpZmljYXRpb25JbmxpbmVDb21wb25lbnQsIENvbnRhaW5lckNvbXBvbmVudCwgQnVsbGV0Q29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhSWNvbnNNb2R1bGUsXG4gICAgVGFVaU1vZHVsZSxcbiAgICBUYUNvbnRhaW5lck1vZHVsZSxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIE5vdGlmaWNhdGlvbkJveENvbXBvbmVudCxcbiAgICBOb3RpZmljYXRpb25JbmxpbmVDb21wb25lbnQsXG4gICAgQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEl0ZW1Db21wb25lbnQsXG4gICAgSWNvbkNvbXBvbmVudCxcbiAgICBJdGVtSW5mb0NvbXBvbmVudCxcbiAgICBQcm9qZWN0U3RhdHVzQ2hhbmdlZENvbXBvbmVudCxcbiAgICBOZXdRdW90YXRpb25WZXJzaW9uQ29tcG9uZW50LFxuICAgIE5ld0ludm9pY2VDb21wb25lbnQsXG4gICAgSW52b2ljZVBheW1lbnRTdGF0dXNDaGFuZ2VkQ29tcG9uZW50LFxuICAgIE5vdGlmaWNhdGlvblRpdGxlQ29tcG9uZW50LFxuICAgIFRhc2tBc3NpZ25lZENvbXBvbmVudCxcbiAgICBUb0RvQXNzaWduZWRDb21wb25lbnQsXG4gICAgVGFza0R1ZVRvZGF5Q29tcG9uZW50LFxuICAgIFRvRG9EdWVUb2RheUNvbXBvbmVudCxcbiAgICBUYXNrTmV3QWN0aXZpdHlDb21wb25lbnQsXG4gICAgVXNlclRhZ2dlZEluQ29udmVyc2F0aW9uQ29tcG9uZW50LFxuICAgIEJ1bGxldENvbXBvbmVudCxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW05vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCwgQ29udGFpbmVyQ29tcG9uZW50LCBCdWxsZXRDb21wb25lbnQsIE5vdGlmaWNhdGlvbkJveENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhTm90aWZpY2F0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUYU5vdGlmaWNhdGlvbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGFOb3RpZmljYXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBMQVpZX1NFUlZJQ0VfVE9LRU4sIHVzZUV4aXN0aW5nOiBUYU5vdGlmaWNhdGlvblNlcnZpY2UgfSxcbiAgICAgICAgVGFOb3RpZmljYXRpb25EYXRhU2VydmljZSxcbiAgICAgICAgVGFOb3RpZmljYXRpb25TaGFyZWRTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25Ob3RpZmljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW10sXG59KVxuZXhwb3J0IGNsYXNzIFRhTm90aWZpY2F0aW9uUHJvdmlkZXIge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRhTm90aWZpY2F0aW9uUHJvdmlkZXI+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRhTm90aWZpY2F0aW9uUHJvdmlkZXIsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBMQVpZX1NFUlZJQ0VfVE9LRU4sIHVzZUV4aXN0aW5nOiBUYU5vdGlmaWNhdGlvblNlcnZpY2UgfSxcbiAgICAgICAgVGFOb3RpZmljYXRpb25EYXRhU2VydmljZSxcbiAgICAgICAgVGFOb3RpZmljYXRpb25TaGFyZWRTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=