import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TaIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaDirectivePipeModule } from '@ta/utils';
import { TaUiModule } from '../../components/ui/ui.module';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { LayoutNotFoundComponent } from './layout-error/not-found/not-found.component';
import { LayoutFlexComponent } from './layout-flex/layout-flex.component';
import { LayoutFullPanelComponent } from './layout-full-panel/layout-full-panel.component';
import { LayoutHeaderDefaultComponent } from './layout-header/layout-header-default/layout-header-default.component';
import { LayoutHeaderLogoComponent } from './layout-header/layout-header-logo/layout-header-logo.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { TemplateModalContainer } from './layout-modal/layout-modal-container/layout-modal-container.component';
import { LayoutModalComponent } from './layout-modal/layout-modal.component';
import { LayoutNavComponent } from './layout-nav/layout-nav.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LayoutPanelComponent } from './layout-panel/layout-panel.component';
import { LayoutSideContentComponent } from './layout-side/layout-side-content/layout-side-content.component';
import { LayoutSideCtaComponent } from './layout-side/layout-side-cta/layout-side-cta.component';
import { LayoutSideComponent } from './layout-side/layout-side.component';
import { LayoutTitleComponent } from './layout-title/layout-title.component';
import { LayoutWithBottomNavComponent } from './with-bottom-nav/layout-with-bottom-nav.component';
import { LayoutWithPanelComponent } from './with-panel/layout-with-panel.component';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaLayoutModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { LayoutFlexComponent, LayoutContentComponent, LayoutHeaderComponent } from '@ta/library-name';
 */
export class TaLayoutModule {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaLayoutModule, imports: [CommonModule,
            MatSidenavModule,
            TaUiModule,
            TaIconsModule,
            MatMenuModule,
            TaDirectivePipeModule,
            MatDialogModule,
            TranslatePipe,
            LayoutContentComponent,
            LayoutHeaderComponent,
            LayoutNavComponent,
            LayoutPanelComponent,
            LayoutWithBottomNavComponent,
            LayoutWithPanelComponent,
            LayoutPageComponent,
            LayoutTitleComponent,
            LayoutHeaderDefaultComponent,
            LayoutModalComponent,
            LayoutHeaderLogoComponent,
            LayoutFullPanelComponent,
            LayoutSideCtaComponent,
            LayoutSideComponent,
            LayoutSideContentComponent,
            TemplateModalContainer,
            LayoutNotFoundComponent,
            LayoutFlexComponent], exports: [LayoutFlexComponent,
            LayoutContentComponent,
            LayoutHeaderComponent,
            LayoutNavComponent,
            LayoutPanelComponent,
            LayoutWithBottomNavComponent,
            LayoutWithPanelComponent,
            LayoutPageComponent,
            LayoutTitleComponent,
            LayoutHeaderDefaultComponent,
            LayoutModalComponent,
            LayoutHeaderLogoComponent,
            LayoutNotFoundComponent,
            TemplateModalContainer,
            LayoutFullPanelComponent,
            LayoutSideCtaComponent,
            LayoutSideComponent,
            LayoutSideContentComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaLayoutModule, imports: [CommonModule,
            MatSidenavModule,
            TaUiModule,
            TaIconsModule,
            MatMenuModule,
            TaDirectivePipeModule,
            MatDialogModule,
            LayoutWithPanelComponent,
            LayoutHeaderDefaultComponent,
            LayoutModalComponent,
            LayoutHeaderLogoComponent,
            LayoutFullPanelComponent,
            TemplateModalContainer,
            LayoutNotFoundComponent,
            LayoutFlexComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        MatSidenavModule,
                        TaUiModule,
                        TaIconsModule,
                        MatMenuModule,
                        TaDirectivePipeModule,
                        MatDialogModule,
                        TranslatePipe,
                        LayoutContentComponent,
                        LayoutHeaderComponent,
                        LayoutNavComponent,
                        LayoutPanelComponent,
                        LayoutWithBottomNavComponent,
                        LayoutWithPanelComponent,
                        LayoutPageComponent,
                        LayoutTitleComponent,
                        LayoutHeaderDefaultComponent,
                        LayoutModalComponent,
                        LayoutHeaderLogoComponent,
                        LayoutFullPanelComponent,
                        LayoutSideCtaComponent,
                        LayoutSideComponent,
                        LayoutSideContentComponent,
                        TemplateModalContainer,
                        LayoutNotFoundComponent,
                        LayoutFlexComponent,
                    ],
                    exports: [
                        LayoutFlexComponent,
                        LayoutContentComponent,
                        LayoutHeaderComponent,
                        LayoutNavComponent,
                        LayoutPanelComponent,
                        LayoutWithBottomNavComponent,
                        LayoutWithPanelComponent,
                        LayoutPageComponent,
                        LayoutTitleComponent,
                        LayoutHeaderDefaultComponent,
                        LayoutModalComponent,
                        LayoutHeaderLogoComponent,
                        LayoutNotFoundComponent,
                        TemplateModalContainer,
                        LayoutFullPanelComponent,
                        LayoutSideCtaComponent,
                        LayoutSideComponent,
                        LayoutSideContentComponent,
                    ],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDckgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDN0csT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBRXBGOzs7Ozs7Ozs7O0dBVUc7QUFvREgsTUFBTSxPQUFPLGNBQWM7SUFDekIsZ0JBQWUsQ0FBQzsrR0FETCxjQUFjO2dIQUFkLGNBQWMsWUFoRHZCLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsVUFBVTtZQUNWLGFBQWE7WUFDYixhQUFhO1lBQ2IscUJBQXFCO1lBQ3JCLGVBQWU7WUFDZixhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLDRCQUE0QjtZQUM1Qix3QkFBd0I7WUFDeEIsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQiw0QkFBNEI7WUFDNUIsb0JBQW9CO1lBQ3BCLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLG1CQUFtQjtZQUNuQiwwQkFBMEI7WUFDMUIsc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2QixtQkFBbUIsYUFHbkIsbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0QixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQiw0QkFBNEI7WUFDNUIsd0JBQXdCO1lBQ3hCLG1CQUFtQjtZQUNuQixvQkFBb0I7WUFDcEIsNEJBQTRCO1lBQzVCLG9CQUFvQjtZQUNwQix5QkFBeUI7WUFDekIsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLG1CQUFtQjtZQUNuQiwwQkFBMEI7Z0hBR2pCLGNBQWMsWUFoRHZCLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsVUFBVTtZQUNWLGFBQWE7WUFDYixhQUFhO1lBQ2IscUJBQXFCO1lBQ3JCLGVBQWU7WUFPZix3QkFBd0I7WUFHeEIsNEJBQTRCO1lBQzVCLG9CQUFvQjtZQUNwQix5QkFBeUI7WUFDekIsd0JBQXdCO1lBSXhCLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsbUJBQW1COzs0RkF1QlYsY0FBYztrQkFuRDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IscUJBQXFCO3dCQUNyQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQiw0QkFBNEI7d0JBQzVCLHdCQUF3Qjt3QkFDeEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLDRCQUE0Qjt3QkFDNUIsb0JBQW9CO3dCQUNwQix5QkFBeUI7d0JBQ3pCLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQiw0QkFBNEI7d0JBQzVCLHdCQUF3Qjt3QkFDeEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLDRCQUE0Qjt3QkFDNUIsb0JBQW9CO3dCQUNwQix5QkFBeUI7d0JBQ3pCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQiwwQkFBMEI7cUJBQzNCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgVGFEaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFVaU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvdWkubW9kdWxlJztcbmltcG9ydCB7IExheW91dENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1jb250ZW50L2xheW91dC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXROb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWVycm9yL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dEZsZXhDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1mbGV4L2xheW91dC1mbGV4LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRGdWxsUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1mdWxsLXBhbmVsL2xheW91dC1mdWxsLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRIZWFkZXJEZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyL2xheW91dC1oZWFkZXItZGVmYXVsdC9sYXlvdXQtaGVhZGVyLWRlZmF1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dEhlYWRlckxvZ29Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC1oZWFkZXIvbGF5b3V0LWhlYWRlci1sb2dvL2xheW91dC1oZWFkZXItbG9nby5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyL2xheW91dC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRlbXBsYXRlTW9kYWxDb250YWluZXIgfSBmcm9tICcuL2xheW91dC1tb2RhbC9sYXlvdXQtbW9kYWwtY29udGFpbmVyL2xheW91dC1tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbW9kYWwvbGF5b3V0LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXROYXZDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1uYXYvbGF5b3V0LW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LXBhZ2UvbGF5b3V0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtcGFuZWwvbGF5b3V0LXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRTaWRlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LXNpZGUvbGF5b3V0LXNpZGUtY29udGVudC9sYXlvdXQtc2lkZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRTaWRlQ3RhQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtc2lkZS9sYXlvdXQtc2lkZS1jdGEvbGF5b3V0LXNpZGUtY3RhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRTaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtc2lkZS9sYXlvdXQtc2lkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0VGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC10aXRsZS9sYXlvdXQtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dFdpdGhCb3R0b21OYXZDb21wb25lbnQgfSBmcm9tICcuL3dpdGgtYm90dG9tLW5hdi9sYXlvdXQtd2l0aC1ib3R0b20tbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRXaXRoUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3dpdGgtcGFuZWwvbGF5b3V0LXdpdGgtcGFuZWwuY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhTGF5b3V0TW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBMYXlvdXRGbGV4Q29tcG9uZW50LCBMYXlvdXRDb250ZW50Q29tcG9uZW50LCBMYXlvdXRIZWFkZXJDb21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFJY29uc01vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBMYXlvdXRDb250ZW50Q29tcG9uZW50LFxuICAgIExheW91dEhlYWRlckNvbXBvbmVudCxcbiAgICBMYXlvdXROYXZDb21wb25lbnQsXG4gICAgTGF5b3V0UGFuZWxDb21wb25lbnQsXG4gICAgTGF5b3V0V2l0aEJvdHRvbU5hdkNvbXBvbmVudCxcbiAgICBMYXlvdXRXaXRoUGFuZWxDb21wb25lbnQsXG4gICAgTGF5b3V0UGFnZUNvbXBvbmVudCxcbiAgICBMYXlvdXRUaXRsZUNvbXBvbmVudCxcbiAgICBMYXlvdXRIZWFkZXJEZWZhdWx0Q29tcG9uZW50LFxuICAgIExheW91dE1vZGFsQ29tcG9uZW50LFxuICAgIExheW91dEhlYWRlckxvZ29Db21wb25lbnQsXG4gICAgTGF5b3V0RnVsbFBhbmVsQ29tcG9uZW50LFxuICAgIExheW91dFNpZGVDdGFDb21wb25lbnQsXG4gICAgTGF5b3V0U2lkZUNvbXBvbmVudCxcbiAgICBMYXlvdXRTaWRlQ29udGVudENvbXBvbmVudCxcbiAgICBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyLFxuICAgIExheW91dE5vdEZvdW5kQ29tcG9uZW50LFxuICAgIExheW91dEZsZXhDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMYXlvdXRGbGV4Q29tcG9uZW50LFxuICAgIExheW91dENvbnRlbnRDb21wb25lbnQsXG4gICAgTGF5b3V0SGVhZGVyQ29tcG9uZW50LFxuICAgIExheW91dE5hdkNvbXBvbmVudCxcbiAgICBMYXlvdXRQYW5lbENvbXBvbmVudCxcbiAgICBMYXlvdXRXaXRoQm90dG9tTmF2Q29tcG9uZW50LFxuICAgIExheW91dFdpdGhQYW5lbENvbXBvbmVudCxcbiAgICBMYXlvdXRQYWdlQ29tcG9uZW50LFxuICAgIExheW91dFRpdGxlQ29tcG9uZW50LFxuICAgIExheW91dEhlYWRlckRlZmF1bHRDb21wb25lbnQsXG4gICAgTGF5b3V0TW9kYWxDb21wb25lbnQsXG4gICAgTGF5b3V0SGVhZGVyTG9nb0NvbXBvbmVudCxcbiAgICBMYXlvdXROb3RGb3VuZENvbXBvbmVudCxcbiAgICBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyLFxuICAgIExheW91dEZ1bGxQYW5lbENvbXBvbmVudCxcbiAgICBMYXlvdXRTaWRlQ3RhQ29tcG9uZW50LFxuICAgIExheW91dFNpZGVDb21wb25lbnQsXG4gICAgTGF5b3V0U2lkZUNvbnRlbnRDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhTGF5b3V0TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19