import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamDirectivePipeModule } from '@ta/utils';
import { CamUiModule } from '../../components/ui/ui.module';
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
import { CamTranslationLayout } from './translation.service';
import { LayoutWithBottomNavComponent } from './with-bottom-nav/layout-with-bottom-nav.component';
import { LayoutWithPanelComponent } from './with-panel/layout-with-panel.component';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamLayoutModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { LayoutFlexComponent, LayoutContentComponent, LayoutHeaderComponent } from '@ta/library-name';
 */
export class CamLayoutModule {
    constructor() {
        CamTranslationLayout.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamLayoutModule, imports: [CommonModule, MatSidenavModule, CamUiModule, CamIconsModule, MatMenuModule, CamDirectivePipeModule, MatDialogModule, TranslatePipe, LayoutContentComponent, LayoutHeaderComponent, LayoutNavComponent, LayoutPanelComponent, LayoutWithBottomNavComponent, LayoutWithPanelComponent, LayoutPageComponent, LayoutTitleComponent, LayoutHeaderDefaultComponent, LayoutModalComponent, LayoutHeaderLogoComponent, LayoutFullPanelComponent, LayoutSideCtaComponent, LayoutSideComponent, LayoutSideContentComponent, TemplateModalContainer, LayoutNotFoundComponent, LayoutFlexComponent], exports: [LayoutFlexComponent,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamLayoutModule, imports: [CommonModule, MatSidenavModule, CamUiModule, CamIconsModule, MatMenuModule, CamDirectivePipeModule, MatDialogModule, LayoutWithPanelComponent, LayoutHeaderDefaultComponent, LayoutModalComponent, LayoutHeaderLogoComponent, LayoutFullPanelComponent, TemplateModalContainer, LayoutNotFoundComponent, LayoutFlexComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, MatSidenavModule, CamUiModule, CamIconsModule, MatMenuModule, CamDirectivePipeModule, MatDialogModule, TranslatePipe, LayoutContentComponent, LayoutHeaderComponent, LayoutNavComponent, LayoutPanelComponent, LayoutWithBottomNavComponent, LayoutWithPanelComponent, LayoutPageComponent, LayoutTitleComponent, LayoutHeaderDefaultComponent, LayoutModalComponent, LayoutHeaderLogoComponent, LayoutFullPanelComponent, LayoutSideCtaComponent, LayoutSideComponent, LayoutSideContentComponent, TemplateModalContainer, LayoutNotFoundComponent, LayoutFlexComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDckgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDaEgsT0FB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O3dCQUM1Qix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQiw0QkFBNEI7d0JBQzVCLG9CQUFvQjt3QkFDcEIseUJBQXlCO3dCQUN6Qix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3FCQUMzQjtpQkFFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgQ2FtSWNvbnNNb2R1bGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBDYW1EaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgQ2FtVWlNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZSc7XG5pbXBvcnQgeyBMYXlvdXRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtY29udGVudC9sYXlvdXQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0Tm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1lcnJvci9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRGbGV4Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtZmxleC9sYXlvdXQtZmxleC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0RnVsbFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtZnVsbC1wYW5lbC9sYXlvdXQtZnVsbC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0SGVhZGVyRGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci9sYXlvdXQtaGVhZGVyLWRlZmF1bHQvbGF5b3V0LWhlYWRlci1kZWZhdWx0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRIZWFkZXJMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyL2xheW91dC1oZWFkZXItbG9nby9sYXlvdXQtaGVhZGVyLWxvZ28uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyIH0gZnJvbSAnLi9sYXlvdXQtbW9kYWwvbGF5b3V0LW1vZGFsLWNvbnRhaW5lci9sYXlvdXQtbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW1vZGFsL2xheW91dC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbmF2L2xheW91dC1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1wYWdlL2xheW91dC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LXBhbmVsL2xheW91dC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0U2lkZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1zaWRlL2xheW91dC1zaWRlLWNvbnRlbnQvbGF5b3V0LXNpZGUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0U2lkZUN0YUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LXNpZGUvbGF5b3V0LXNpZGUtY3RhL2xheW91dC1zaWRlLWN0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0U2lkZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LXNpZGUvbGF5b3V0LXNpZGUuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtdGl0bGUvbGF5b3V0LXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvbkxheW91dCB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRXaXRoQm90dG9tTmF2Q29tcG9uZW50IH0gZnJvbSAnLi93aXRoLWJvdHRvbS1uYXYvbGF5b3V0LXdpdGgtYm90dG9tLW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0V2l0aFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi93aXRoLXBhbmVsL2xheW91dC13aXRoLXBhbmVsLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgQ2FtTGF5b3V0TW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKiBcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgTGF5b3V0RmxleENvbXBvbmVudCwgTGF5b3V0Q29udGVudENvbXBvbmVudCwgTGF5b3V0SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG5cbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0U2lkZW5hdk1vZHVsZSwgQ2FtVWlNb2R1bGUsIENhbUljb25zTW9kdWxlLCBNYXRNZW51TW9kdWxlLCBDYW1EaXJlY3RpdmVQaXBlTW9kdWxlLCBNYXREaWFsb2dNb2R1bGUsIFRyYW5zbGF0ZVBpcGUsIExheW91dENvbnRlbnRDb21wb25lbnQsIExheW91dEhlYWRlckNvbXBvbmVudCwgTGF5b3V0TmF2Q29tcG9uZW50LCBMYXlvdXRQYW5lbENvbXBvbmVudCwgTGF5b3V0V2l0aEJvdHRvbU5hdkNvbXBvbmVudCwgTGF5b3V0V2l0aFBhbmVsQ29tcG9uZW50LCBMYXlvdXRQYWdlQ29tcG9uZW50LCBMYXlvdXRUaXRsZUNvbXBvbmVudCwgTGF5b3V0SGVhZGVyRGVmYXVsdENvbXBvbmVudCwgTGF5b3V0TW9kYWxDb21wb25lbnQsIExheW91dEhlYWRlckxvZ29Db21wb25lbnQsIExheW91dEZ1bGxQYW5lbENvbXBvbmVudCwgTGF5b3V0U2lkZUN0YUNvbXBvbmVudCwgTGF5b3V0U2lkZUNvbXBvbmVudCwgTGF5b3V0U2lkZUNvbnRlbnRDb21wb25lbnQsIFRlbXBsYXRlTW9kYWxDb250YWluZXIsIExheW91dE5vdEZvdW5kQ29tcG9uZW50LCBMYXlvdXRGbGV4Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIExheW91dEZsZXhDb21wb25lbnQsXG4gICAgTGF5b3V0Q29udGVudENvbXBvbmVudCxcbiAgICBMYXlvdXRIZWFkZXJDb21wb25lbnQsXG4gICAgTGF5b3V0TmF2Q29tcG9uZW50LFxuICAgIExheW91dFBhbmVsQ29tcG9uZW50LFxuICAgIExheW91dFdpdGhCb3R0b21OYXZDb21wb25lbnQsXG4gICAgTGF5b3V0V2l0aFBhbmVsQ29tcG9uZW50LFxuICAgIExheW91dFBhZ2VDb21wb25lbnQsXG4gICAgTGF5b3V0VGl0bGVDb21wb25lbnQsXG4gICAgTGF5b3V0SGVhZGVyRGVmYXVsdENvbXBvbmVudCxcbiAgICBMYXlvdXRNb2RhbENvbXBvbmVudCxcbiAgICBMYXlvdXRIZWFkZXJMb2dvQ29tcG9uZW50LFxuICAgIExheW91dE5vdEZvdW5kQ29tcG9uZW50LFxuICAgIFRlbXBsYXRlTW9kYWxDb250YWluZXIsXG4gICAgTGF5b3V0RnVsbFBhbmVsQ29tcG9uZW50LFxuICAgIExheW91dFNpZGVDdGFDb21wb25lbnQsXG4gICAgTGF5b3V0U2lkZUNvbXBvbmVudCxcbiAgICBMYXlvdXRTaWRlQ29udGVudENvbXBvbmVudCxcbiAgXSxcblxufSlcbmV4cG9ydCBjbGFzcyBDYW1MYXlvdXRNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBDYW1UcmFuc2xhdGlvbkxheW91dC5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=