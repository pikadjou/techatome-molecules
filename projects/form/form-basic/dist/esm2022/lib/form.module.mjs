import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { CamFormInputsModule } from '@ta/form-input';
import { CamIconsModule } from '@ta/icons';
import { CamMenuModule } from '@ta/menu';
import { CamNotificationModule } from '@ta/notification';
import { TranslatePipe } from '@ta/translation';
import { CamContainerModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';
import { EditFieldComponent } from './components/edit-field/edit-field.component';
import { FormComponent } from './components/form.component';
import { DynamicComponent } from './components/input/dynamic/dynamic.component';
import { PanelComponent } from './components/input/panel/panel.component';
import { InputTranslationComponent } from './components/input/translation/translation.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { CamTranslationForm } from './translation.service';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamFormModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FormComponent, MatNativeDateModule, EditFieldComponent } from '@ta/library-name';
 */
export class CamFormModule {
    constructor() {
        CamTranslationForm.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamFormModule, imports: [CamContainerModule, CamDirectivePipeModule, CamNotificationModule, CamFormInputsModule, CamUiModule, CommonModule, FormsModule, ReactiveFormsModule, CamIconsModule, CamMenuModule, MatMenuModule, TranslatePipe, FormComponent, InputsComponent, PanelComponent, DynamicComponent, EditFieldComponent, InputTranslationComponent], exports: [FormComponent, MatNativeDateModule, EditFieldComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFormModule, providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }], imports: [CamContainerModule, CamDirectivePipeModule, CamNotificationModule, CamFormInputsModule, CamUiModule, CommonModule, FormsModule, ReactiveFormsModule, CamIconsModule, CamMenuModule, MatMenuModule, FormComponent, InputsComponent, DynamicComponent, EditFieldComponent, InputTranslationComponent, MatNativeDateModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFormModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CamContainerModule, CamDirectivePipeModule, CamNotificationModule, CamFormInputsModule, CamUiModule, CommonModule, FormsModule, ReactiveFormsModule, CamIconsModule, CamMenuModule, MatMenuModule, TranslatePipe, FormComponent, InputsComponent, PanelComponent, DynamicComponent, EditFieldComponent, InputTranslationComponent],
                    providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
                    declarations: [],
                    exports: [FormComponent, MatNativeDateModule, EditFieldComponent],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Zvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFM0Q7Ozs7Ozs7Ozs7R0FVRztBQVNILE1BQU0sT0FBTyxhQUFhO0lBQ3hCO1FBQ0Usa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzsrR0FIVSxhQUFhO2dIQUFiLGFBQWEsWUFOZCxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLGFBR2pVLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0I7Z0hBR3JELGFBQWEsYUFMYixDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxDQUFDLFlBRHpFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFpQixhQUFhLEVBQUUsZUFBZSxFQUFrQixnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFHbFQsbUJBQW1COzs0RkFHakMsYUFBYTtrQkFSekIsUUFBUTttQkFBQztvQkFFUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLENBQUM7b0JBQzVVLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxDQUFDO29CQUNuRixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDO2lCQUVsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuXG5pbXBvcnQgeyBDYW1Gb3JtSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHRhL2Zvcm0taW5wdXQnO1xuaW1wb3J0IHsgQ2FtSWNvbnNNb2R1bGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgQ2FtTWVudU1vZHVsZSB9IGZyb20gJ0B0YS9tZW51JztcbmltcG9ydCB7IENhbU5vdGlmaWNhdGlvbk1vZHVsZSB9IGZyb20gJ0B0YS9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBDYW1Db250YWluZXJNb2R1bGUsIENhbVVpTW9kdWxlIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IENhbURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBFZGl0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZWRpdC1maWVsZC9lZGl0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvZHluYW1pYy9keW5hbWljLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9wYW5lbC9wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRUcmFuc2xhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC90cmFuc2xhdGlvbi90cmFuc2xhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0cy9pbnB1dHMuY29tcG9uZW50JztcbmltcG9ydCB7IENhbVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgQ2FtRm9ybU1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICogXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IEZvcm1Db21wb25lbnQsIE1hdE5hdGl2ZURhdGVNb2R1bGUsIEVkaXRGaWVsZENvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuXG4gIGltcG9ydHM6IFtDYW1Db250YWluZXJNb2R1bGUsIENhbURpcmVjdGl2ZVBpcGVNb2R1bGUsIENhbU5vdGlmaWNhdGlvbk1vZHVsZSwgQ2FtRm9ybUlucHV0c01vZHVsZSwgQ2FtVWlNb2R1bGUsIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIENhbUljb25zTW9kdWxlLCBDYW1NZW51TW9kdWxlLCBNYXRNZW51TW9kdWxlLCBUcmFuc2xhdGVQaXBlLCBGb3JtQ29tcG9uZW50LCBJbnB1dHNDb21wb25lbnQsIFBhbmVsQ29tcG9uZW50LCBEeW5hbWljQ29tcG9uZW50LCBFZGl0RmllbGRDb21wb25lbnQsIElucHV0VHJhbnNsYXRpb25Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEVycm9yU3RhdGVNYXRjaGVyLCB1c2VDbGFzczogU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlciB9XSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW0Zvcm1Db21wb25lbnQsIE1hdE5hdGl2ZURhdGVNb2R1bGUsIEVkaXRGaWVsZENvbXBvbmVudF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ2FtRm9ybU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIENhbVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=