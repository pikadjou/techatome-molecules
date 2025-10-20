import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TaIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaDirectivePipeModule } from '@ta/utils';
import { TaUiModule } from '../../components/ui/ui.module';
import { TaLayoutModule } from '../layout/layout.module';
import { EmptyComponent } from './empty/empty.component';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SwiperLightComponent } from './swiper-light/swiper-light.component';
import { TaTranslationContainer } from './translation.service';
import { ContainerValidationComponent } from './validation/cta/container-validation.component';
import { ValidationModal } from './validation/modal/modal-validation.component';
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
    constructor() {
        TaTranslationContainer.getInstance();
    }
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
            SwiperLightComponent], exports: [ContainerValidationComponent, EmptyComponent, ErrorComponent, LoaderComponent, SwiperLightComponent] }); }
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
                    exports: [ContainerValidationComponent, EmptyComponent, ErrorComponent, LoaderComponent, SwiperLightComponent],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9jb250YWluZXIvY29udGFpbmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQUVoRjs7Ozs7Ozs7OztHQVVHO0FBc0JILE1BQU0sT0FBTyxpQkFBaUI7SUFDNUI7UUFDRSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDOytHQUhVLGlCQUFpQjtnSEFBakIsaUJBQWlCLFlBbkIxQixZQUFZO1lBQ1osYUFBYTtZQUNiLHdCQUF3QjtZQUN4QixxQkFBcUI7WUFDckIsVUFBVTtZQUNWLGFBQWE7WUFDYixhQUFhO1lBQ2IsY0FBYztZQUNkLDRCQUE0QjtZQUM1QixlQUFlO1lBQ2YsY0FBYztZQUNkLGNBQWM7WUFDZCxlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLG9CQUFvQixhQUdaLDRCQUE0QixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLG9CQUFvQjtnSEFFbEcsaUJBQWlCLFlBbkIxQixZQUFZO1lBQ1osYUFBYTtZQUNiLHdCQUF3QjtZQUN4QixxQkFBcUI7WUFDckIsVUFBVTtZQUNWLGFBQWE7WUFFYixjQUFjO1lBRWQsZUFBZTtZQUNmLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZUFBZTs7NEZBT04saUJBQWlCO2tCQXJCN0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQixVQUFVO3dCQUNWLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixjQUFjO3dCQUNkLDRCQUE0Qjt3QkFDNUIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLG9CQUFvQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixDQUFDO2lCQUMvRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XHJcblxyXG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gJ0B0YS91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBUYVVpTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS91aS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUYUxheW91dE1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQubW9kdWxlJztcclxuaW1wb3J0IHsgRW1wdHlDb21wb25lbnQgfSBmcm9tICcuL2VtcHR5L2VtcHR5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2xvYWRlci9sb2FkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGxhY2Vob2xkZXJDb21wb25lbnQgfSBmcm9tICcuL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN3aXBlckxpZ2h0Q29tcG9uZW50IH0gZnJvbSAnLi9zd2lwZXItbGlnaHQvc3dpcGVyLWxpZ2h0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25Db250YWluZXIgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb250YWluZXJWYWxpZGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi92YWxpZGF0aW9uL2N0YS9jb250YWluZXItdmFsaWRhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTW9kYWwgfSBmcm9tICcuL3ZhbGlkYXRpb24vbW9kYWwvbW9kYWwtdmFsaWRhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cclxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XHJcbiAqIC8vIGltcG9ydCB7IFRhQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XHJcbiAqXHJcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxyXG4gKiBpbXBvcnQgeyBDb250YWluZXJWYWxpZGF0aW9uQ29tcG9uZW50LCBFbXB0eUNvbXBvbmVudCwgRXJyb3JDb21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcclxuICAgIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSxcclxuICAgIFRhVWlNb2R1bGUsXHJcbiAgICBUYUljb25zTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlUGlwZSxcclxuICAgIFRhTGF5b3V0TW9kdWxlLFxyXG4gICAgQ29udGFpbmVyVmFsaWRhdGlvbkNvbXBvbmVudCxcclxuICAgIFZhbGlkYXRpb25Nb2RhbCxcclxuICAgIEVtcHR5Q29tcG9uZW50LFxyXG4gICAgRXJyb3JDb21wb25lbnQsXHJcbiAgICBMb2FkZXJDb21wb25lbnQsXHJcbiAgICBQbGFjZWhvbGRlckNvbXBvbmVudCxcclxuICAgIFN3aXBlckxpZ2h0Q29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBleHBvcnRzOiBbQ29udGFpbmVyVmFsaWRhdGlvbkNvbXBvbmVudCwgRW1wdHlDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQsIFN3aXBlckxpZ2h0Q29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhQ29udGFpbmVyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFRhVHJhbnNsYXRpb25Db250YWluZXIuZ2V0SW5zdGFuY2UoKTtcclxuICB9XHJcbn1cclxuIl19