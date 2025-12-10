import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TaIconsModule } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { TaDirectivePipeModule } from "@ta/utils";
import { TaUiModule } from "../../components/ui/ui.module";
import { TaLayoutModule } from "../layout/layout.module";
import { EmptyComponent } from "./empty/empty.component";
import { ErrorComponent } from "./error/error.component";
import { LoaderComponent } from "./loader/loader.component";
import { PlaceholderComponent } from "./placeholder/placeholder.component";
import { SwiperLightComponent } from "./swiper-light/swiper-light.component";
import { ContainerValidationComponent } from "./validation/cta/container-validation.component";
import { ValidationModal } from "./validation/modal/modal-validation.component";
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaContainerModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ContainerValidationComponent, EmptyComponent, ErrorComponent } from '@ta/library-name';
 */
export class TaContainerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaContainerModule, imports: [CommonModule,
            MatIconModule,
            MatProgressSpinnerModule,
            TaDirectivePipeModule,
            TaUiModule,
            TaIconsModule,
            TranslatePipe,
            TaLayoutModule,
            ContainerValidationComponent,
            ValidationModal,
            EmptyComponent,
            ErrorComponent,
            LoaderComponent,
            PlaceholderComponent,
            SwiperLightComponent], exports: [ContainerValidationComponent,
            EmptyComponent,
            ErrorComponent,
            LoaderComponent,
            SwiperLightComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaContainerModule, imports: [CommonModule,
            MatIconModule,
            MatProgressSpinnerModule,
            TaDirectivePipeModule,
            TaUiModule,
            TaIconsModule,
            TaLayoutModule,
            ValidationModal,
            EmptyComponent,
            ErrorComponent,
            LoaderComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatIconModule,
                        MatProgressSpinnerModule,
                        TaDirectivePipeModule,
                        TaUiModule,
                        TaIconsModule,
                        TranslatePipe,
                        TaLayoutModule,
                        ContainerValidationComponent,
                        ValidationModal,
                        EmptyComponent,
                        ErrorComponent,
                        LoaderComponent,
                        PlaceholderComponent,
                        SwiperLightComponent,
                    ],
                    declarations: [],
                    exports: [
                        ContainerValidationComponent,
                        EmptyComponent,
                        ErrorComponent,
                        LoaderComponent,
                        SwiperLightComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9jb250YWluZXIvY29udGFpbmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQUVoRjs7Ozs7Ozs7OztHQVVHO0FBNEJILE1BQU0sT0FBTyxpQkFBaUI7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLFlBekIxQixZQUFZO1lBQ1osYUFBYTtZQUNiLHdCQUF3QjtZQUN4QixxQkFBcUI7WUFDckIsVUFBVTtZQUNWLGFBQWE7WUFDYixhQUFhO1lBQ2IsY0FBYztZQUNkLDRCQUE0QjtZQUM1QixlQUFlO1lBQ2YsY0FBYztZQUNkLGNBQWM7WUFDZCxlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLG9CQUFvQixhQUlwQiw0QkFBNEI7WUFDNUIsY0FBYztZQUNkLGNBQWM7WUFDZCxlQUFlO1lBQ2Ysb0JBQW9CO2dIQUdYLGlCQUFpQixZQXpCMUIsWUFBWTtZQUNaLGFBQWE7WUFDYix3QkFBd0I7WUFDeEIscUJBQXFCO1lBQ3JCLFVBQVU7WUFDVixhQUFhO1lBRWIsY0FBYztZQUVkLGVBQWU7WUFDZixjQUFjO1lBQ2QsY0FBYztZQUNkLGVBQWU7OzRGQWFOLGlCQUFpQjtrQkEzQjdCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsVUFBVTt3QkFDVixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCw0QkFBNEI7d0JBQzVCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixvQkFBb0I7cUJBQ3JCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsNEJBQTRCO3dCQUM1QixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixvQkFBb0I7cUJBQ3JCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lclwiO1xuXG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFVaU1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZVwiO1xuaW1wb3J0IHsgVGFMYXlvdXRNb2R1bGUgfSBmcm9tIFwiLi4vbGF5b3V0L2xheW91dC5tb2R1bGVcIjtcbmltcG9ydCB7IEVtcHR5Q29tcG9uZW50IH0gZnJvbSBcIi4vZW1wdHkvZW1wdHkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gXCIuL2Vycm9yL2Vycm9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9hZGVyL2xvYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBsYWNlaG9sZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTd2lwZXJMaWdodENvbXBvbmVudCB9IGZyb20gXCIuL3N3aXBlci1saWdodC9zd2lwZXItbGlnaHQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb250YWluZXJWYWxpZGF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vdmFsaWRhdGlvbi9jdGEvY29udGFpbmVyLXZhbGlkYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uTW9kYWwgfSBmcm9tIFwiLi92YWxpZGF0aW9uL21vZGFsL21vZGFsLXZhbGlkYXRpb24uY29tcG9uZW50XCI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYUNvbnRhaW5lck1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgQ29udGFpbmVyVmFsaWRhdGlvbkNvbXBvbmVudCwgRW1wdHlDb21wb25lbnQsIEVycm9yQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFJY29uc01vZHVsZSxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIFRhTGF5b3V0TW9kdWxlLFxuICAgIENvbnRhaW5lclZhbGlkYXRpb25Db21wb25lbnQsXG4gICAgVmFsaWRhdGlvbk1vZGFsLFxuICAgIEVtcHR5Q29tcG9uZW50LFxuICAgIEVycm9yQ29tcG9uZW50LFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBQbGFjZWhvbGRlckNvbXBvbmVudCxcbiAgICBTd2lwZXJMaWdodENvbXBvbmVudCxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW1xuICAgIENvbnRhaW5lclZhbGlkYXRpb25Db21wb25lbnQsXG4gICAgRW1wdHlDb21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnQsXG4gICAgTG9hZGVyQ29tcG9uZW50LFxuICAgIFN3aXBlckxpZ2h0Q29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYUNvbnRhaW5lck1vZHVsZSB7fVxuIl19