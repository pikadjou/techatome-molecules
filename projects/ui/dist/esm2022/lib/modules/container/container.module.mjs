import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamDirectivePipeModule } from '@ta/utils';
import { CamUiModule } from '../../components/ui/ui.module';
import { CamLayoutModule } from '../layout/layout.module';
import { EmptyComponent } from './empty/empty.component';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SwiperLightComponent } from './swiper-light/swiper-light.component';
import { CamTranslationContainer } from './translation.service';
import { ContainerValidationComponent } from './validation/cta/container-validation.component';
import { ValidationModal } from './validation/modal/modal-validation.component';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamContainerModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ContainerValidationComponent, EmptyComponent, ErrorComponent } from '@ta/library-name';
 */
export class CamContainerModule {
    constructor() {
        CamTranslationContainer.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamContainerModule, imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, CamDirectivePipeModule, CamUiModule, CamIconsModule, TranslatePipe, CamLayoutModule, ContainerValidationComponent, ValidationModal, EmptyComponent, ErrorComponent, LoaderComponent, PlaceholderComponent, SwiperLightComponent], exports: [ContainerValidationComponent, EmptyComponent, ErrorComponent, LoaderComponent, SwiperLightComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamContainerModule, imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, CamDirectivePipeModule, CamUiModule, CamIconsModule, CamLayoutModule, ValidationModal, EmptyComponent, ErrorComponent, LoaderComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, CamDirectivePipeModule, CamUiModule, CamIconsModule, TranslatePipe, CamLayoutModule, ContainerValidationComponent, ValidationModal, EmptyComponent, ErrorComponent, LoaderComponent, PlaceholderComponent, SwiperLightComponent],
                    declarations: [],
                    exports: [ContainerValidationComponent, EmptyComponent, ErrorComponent, LoaderComponent, SwiperLightComponent],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9jb250YWluZXIvY29udGFpbmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQUVoRjs7Ozs7Ozs7OztHQVVHO0FBUUgsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QjtRQUNFLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7K0dBSFUsa0JBQWtCO2dIQUFsQixrQkFBa0IsWUFMbkIsWUFBWSxFQUFFLGFBQWEsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsNEJBQTRCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixhQUV0Uiw0QkFBNEIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxvQkFBb0I7Z0hBR2xHLGtCQUFrQixZQUxuQixZQUFZLEVBQUUsYUFBYSxFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQWlCLGVBQWUsRUFBZ0MsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZTs7NEZBS3pPLGtCQUFrQjtrQkFQOUIsUUFBUTttQkFBQztvQkFFUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSw0QkFBNEIsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7b0JBQ2pTLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQztpQkFFL0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuXG5pbXBvcnQgeyBDYW1JY29uc01vZHVsZSB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IENhbURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBDYW1VaU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvdWkubW9kdWxlJztcbmltcG9ydCB7IENhbUxheW91dE1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IEVtcHR5Q29tcG9uZW50IH0gZnJvbSAnLi9lbXB0eS9lbXB0eS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2xvYWRlci9sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBsYWNlaG9sZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcGVyTGlnaHRDb21wb25lbnQgfSBmcm9tICcuL3N3aXBlci1saWdodC9zd2lwZXItbGlnaHQuY29tcG9uZW50JztcbmltcG9ydCB7IENhbVRyYW5zbGF0aW9uQ29udGFpbmVyIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRhaW5lclZhbGlkYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRpb24vY3RhL2NvbnRhaW5lci12YWxpZGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uTW9kYWwgfSBmcm9tICcuL3ZhbGlkYXRpb24vbW9kYWwvbW9kYWwtdmFsaWRhdGlvbi5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IENhbUNvbnRhaW5lck1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICogXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IENvbnRhaW5lclZhbGlkYXRpb25Db21wb25lbnQsIEVtcHR5Q29tcG9uZW50LCBFcnJvckNvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSwgQ2FtRGlyZWN0aXZlUGlwZU1vZHVsZSwgQ2FtVWlNb2R1bGUsIENhbUljb25zTW9kdWxlLCBUcmFuc2xhdGVQaXBlLCBDYW1MYXlvdXRNb2R1bGUsIENvbnRhaW5lclZhbGlkYXRpb25Db21wb25lbnQsIFZhbGlkYXRpb25Nb2RhbCwgRW1wdHlDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQsIFBsYWNlaG9sZGVyQ29tcG9uZW50LCBTd2lwZXJMaWdodENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtDb250YWluZXJWYWxpZGF0aW9uQ29tcG9uZW50LCBFbXB0eUNvbXBvbmVudCwgRXJyb3JDb21wb25lbnQsIExvYWRlckNvbXBvbmVudCwgU3dpcGVyTGlnaHRDb21wb25lbnRdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENhbUNvbnRhaW5lck1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIENhbVRyYW5zbGF0aW9uQ29udGFpbmVyLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiJdfQ==