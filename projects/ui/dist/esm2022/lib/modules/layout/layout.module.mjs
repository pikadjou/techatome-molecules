import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { TaIconsModule } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { TaDirectivePipeModule } from "@ta/utils";
import { TaUiModule } from "../../components/ui/ui.module";
import { LayoutContentComponent } from "./layout-content/layout-content.component";
import { LayoutNotFoundComponent } from "./layout-error/not-found/not-found.component";
import { LayoutFlexComponent } from "./layout-flex/layout-flex.component";
import { LayoutFullPanelComponent } from "./layout-full-panel/layout-full-panel.component";
import { LayoutHeaderDefaultComponent } from "./layout-header/layout-header-default/layout-header-default.component";
import { LayoutHeaderLogoComponent } from "./layout-header/layout-header-logo/layout-header-logo.component";
import { LayoutHeaderComponent } from "./layout-header/layout-header.component";
import { TemplateModalContainer } from "./layout-modal/layout-modal-container/layout-modal-container.component";
import { LayoutModalComponent } from "./layout-modal/layout-modal.component";
import { LayoutNavComponent } from "./layout-nav/layout-nav.component";
import { LayoutPageComponent } from "./layout-page/layout-page.component";
import { LayoutPanelComponent } from "./layout-panel/layout-panel.component";
import { LayoutSideContentComponent } from "./layout-side/layout-side-content/layout-side-content.component";
import { LayoutSideCtaComponent } from "./layout-side/layout-side-cta/layout-side-cta.component";
import { LayoutSideComponent } from "./layout-side/layout-side.component";
import { LayoutTitleComponent } from "./layout-title/layout-title.component";
import { TaTranslationLayout } from "./translation.service";
import { LayoutWithBottomNavComponent } from "./with-bottom-nav/layout-with-bottom-nav.component";
import { LayoutWithPanelComponent } from "./with-panel/layout-with-panel.component";
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
    constructor() {
        TaTranslationLayout.getInstance();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDckgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDaEgsT0FB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QUNuQixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLDRCQUE0Qjt3QkFDNUIsd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsNEJBQTRCO3dCQUM1QixvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLDBCQUEwQjtxQkFDM0I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL21lbnVcIjtcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdlwiO1xuXG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFVaU1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZVwiO1xuaW1wb3J0IHsgTGF5b3V0Q29udGVudENvbXBvbmVudCB9IGZyb20gXCIuL2xheW91dC1jb250ZW50L2xheW91dC1jb250ZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGF5b3V0Tm90Rm91bmRDb21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXQtZXJyb3Ivbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExheW91dEZsZXhDb21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXQtZmxleC9sYXlvdXQtZmxleC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExheW91dEZ1bGxQYW5lbENvbXBvbmVudCB9IGZyb20gXCIuL2xheW91dC1mdWxsLXBhbmVsL2xheW91dC1mdWxsLXBhbmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGF5b3V0SGVhZGVyRGVmYXVsdENvbXBvbmVudCB9IGZyb20gXCIuL2xheW91dC1oZWFkZXIvbGF5b3V0LWhlYWRlci1kZWZhdWx0L2xheW91dC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExheW91dEhlYWRlckxvZ29Db21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXQtaGVhZGVyL2xheW91dC1oZWFkZXItbG9nby9sYXlvdXQtaGVhZGVyLWxvZ28uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYXlvdXRIZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXQtaGVhZGVyL2xheW91dC1oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyIH0gZnJvbSBcIi4vbGF5b3V0LW1vZGFsL2xheW91dC1tb2RhbC1jb250YWluZXIvbGF5b3V0LW1vZGFsLWNvbnRhaW5lci5jb21wb25lbnRcIjtcbmltcG9ydCB7IExheW91dE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vbGF5b3V0LW1vZGFsL2xheW91dC1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExheW91dE5hdkNvbXBvbmVudCB9IGZyb20gXCIuL2xheW91dC1uYXYvbGF5b3V0LW5hdi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExheW91dFBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXQtcGFnZS9sYXlvdXQtcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExheW91dFBhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4vbGF5b3V0LXBhbmVsL2xheW91dC1wYW5lbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExheW91dFNpZGVDb250ZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbGF5b3V0LXNpZGUvbGF5b3V0LXNpZGUtY29udGVudC9sYXlvdXQtc2lkZS1jb250ZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGF5b3V0U2lkZUN0YUNvbXBvbmVudCB9IGZyb20gXCIuL2xheW91dC1zaWRlL2xheW91dC1zaWRlLWN0YS9sYXlvdXQtc2lkZS1jdGEuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYXlvdXRTaWRlQ29tcG9uZW50IH0gZnJvbSBcIi4vbGF5b3V0LXNpZGUvbGF5b3V0LXNpZGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYXlvdXRUaXRsZUNvbXBvbmVudCB9IGZyb20gXCIuL2xheW91dC10aXRsZS9sYXlvdXQtdGl0bGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uTGF5b3V0IH0gZnJvbSBcIi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgTGF5b3V0V2l0aEJvdHRvbU5hdkNvbXBvbmVudCB9IGZyb20gXCIuL3dpdGgtYm90dG9tLW5hdi9sYXlvdXQtd2l0aC1ib3R0b20tbmF2LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGF5b3V0V2l0aFBhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4vd2l0aC1wYW5lbC9sYXlvdXQtd2l0aC1wYW5lbC5jb21wb25lbnRcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhTGF5b3V0TW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBMYXlvdXRGbGV4Q29tcG9uZW50LCBMYXlvdXRDb250ZW50Q29tcG9uZW50LCBMYXlvdXRIZWFkZXJDb21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFJY29uc01vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBMYXlvdXRDb250ZW50Q29tcG9uZW50LFxuICAgIExheW91dEhlYWRlckNvbXBvbmVudCxcbiAgICBMYXlvdXROYXZDb21wb25lbnQsXG4gICAgTGF5b3V0UGFuZWxDb21wb25lbnQsXG4gICAgTGF5b3V0V2l0aEJvdHRvbU5hdkNvbXBvbmVudCxcbiAgICBMYXlvdXRXaXRoUGFuZWxDb21wb25lbnQsXG4gICAgTGF5b3V0UGFnZUNvbXBvbmVudCxcbiAgICBMYXlvdXRUaXRsZUNvbXBvbmVudCxcbiAgICBMYXlvdXRIZWFkZXJEZWZhdWx0Q29tcG9uZW50LFxuICAgIExheW91dE1vZGFsQ29tcG9uZW50LFxuICAgIExheW91dEhlYWRlckxvZ29Db21wb25lbnQsXG4gICAgTGF5b3V0RnVsbFBhbmVsQ29tcG9uZW50LFxuICAgIExheW91dFNpZGVDdGFDb21wb25lbnQsXG4gICAgTGF5b3V0U2lkZUNvbXBvbmVudCxcbiAgICBMYXlvdXRTaWRlQ29udGVudENvbXBvbmVudCxcbiAgICBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyLFxuICAgIExheW91dE5vdEZvdW5kQ29tcG9uZW50LFxuICAgIExheW91dEZsZXhDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMYXlvdXRGbGV4Q29tcG9uZW50LFxuICAgIExheW91dENvbnRlbnRDb21wb25lbnQsXG4gICAgTGF5b3V0SGVhZGVyQ29tcG9uZW50LFxuICAgIExheW91dE5hdkNvbXBvbmVudCxcbiAgICBMYXlvdXRQYW5lbENvbXBvbmVudCxcbiAgICBMYXlvdXRXaXRoQm90dG9tTmF2Q29tcG9uZW50LFxuICAgIExheW91dFdpdGhQYW5lbENvbXBvbmVudCxcbiAgICBMYXlvdXRQYWdlQ29tcG9uZW50LFxuICAgIExheW91dFRpdGxlQ29tcG9uZW50LFxuICAgIExheW91dEhlYWRlckRlZmF1bHRDb21wb25lbnQsXG4gICAgTGF5b3V0TW9kYWxDb21wb25lbnQsXG4gICAgTGF5b3V0SGVhZGVyTG9nb0NvbXBvbmVudCxcbiAgICBMYXlvdXROb3RGb3VuZENvbXBvbmVudCxcbiAgICBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyLFxuICAgIExheW91dEZ1bGxQYW5lbENvbXBvbmVudCxcbiAgICBMYXlvdXRTaWRlQ3RhQ29tcG9uZW50LFxuICAgIExheW91dFNpZGVDb21wb25lbnQsXG4gICAgTGF5b3V0U2lkZUNvbnRlbnRDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhTGF5b3V0TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGFUcmFuc2xhdGlvbkxheW91dC5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=