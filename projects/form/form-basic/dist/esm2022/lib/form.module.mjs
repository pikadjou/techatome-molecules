import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { TaFormInputsModule } from '@ta/form-input';
import { TaIconsModule } from '@ta/icons';
import { TaMenuModule } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { TaContainerModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';
import { EditFieldComponent } from './components/edit-field/edit-field.component';
import { FormComponent } from './components/form.component';
import { DynamicComponent } from './components/input/dynamic/dynamic.component';
import { PanelComponent } from './components/input/panel/panel.component';
import { InputTranslationComponent } from './components/input/translation/translation.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { TaTranslationForm } from './translation.service';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaFormModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FormComponent, MatNativeDateModule, EditFieldComponent } from '@ta/library-name';
 */
export class TaFormModule {
    constructor() {
        TaTranslationForm.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaFormModule, imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaFormInputsModule,
            TaUiModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TaIconsModule,
            TaMenuModule,
            MatMenuModule,
            TranslatePipe,
            FormComponent,
            InputsComponent,
            PanelComponent,
            DynamicComponent,
            EditFieldComponent,
            InputTranslationComponent], exports: [FormComponent, MatNativeDateModule, EditFieldComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFormModule, providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }], imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaFormInputsModule,
            TaUiModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TaIconsModule,
            TaMenuModule,
            MatMenuModule,
            FormComponent,
            InputsComponent,
            PanelComponent,
            DynamicComponent,
            EditFieldComponent,
            InputTranslationComponent, MatNativeDateModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFormModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        TaContainerModule,
                        TaDirectivePipeModule,
                        TaFormInputsModule,
                        TaUiModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TaIconsModule,
                        TaMenuModule,
                        MatMenuModule,
                        TranslatePipe,
                        FormComponent,
                        InputsComponent,
                        PanelComponent,
                        DynamicComponent,
                        EditFieldComponent,
                        InputTranslationComponent,
                    ],
                    providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
                    declarations: [],
                    exports: [FormComponent, MatNativeDateModule, EditFieldComponent],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Zvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQ7Ozs7Ozs7Ozs7R0FVRztBQXlCSCxNQUFNLE9BQU8sWUFBWTtJQUN2QjtRQUNFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7K0dBSFUsWUFBWTtnSEFBWixZQUFZLFlBdEJyQixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixVQUFVO1lBQ1YsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtZQUNiLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIseUJBQXlCLGFBSWpCLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0I7Z0hBRXJELFlBQVksYUFKWixDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxDQUFDLFlBbEJqRixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixVQUFVO1lBQ1YsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhO1lBRWIsYUFBYTtZQUNiLGVBQWU7WUFDZixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQix5QkFBeUIsRUFJRixtQkFBbUI7OzRGQUVqQyxZQUFZO2tCQXhCeEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsVUFBVTt3QkFDVixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQix5QkFBeUI7cUJBQzFCO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxDQUFDO29CQUNuRixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDO2lCQUNsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuXG5pbXBvcnQgeyBUYUZvcm1JbnB1dHNNb2R1bGUgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRhTWVudU1vZHVsZSB9IGZyb20gJ0B0YS9tZW51JztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgVGFDb250YWluZXJNb2R1bGUsIFRhVWlNb2R1bGUgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgVGFEaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgRWRpdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXQtZmllbGQvZWRpdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2R5bmFtaWMvZHluYW1pYy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvcGFuZWwvcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0VHJhbnNsYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvdHJhbnNsYXRpb24vdHJhbnNsYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dHMvaW5wdXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYUZvcm1Nb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IEZvcm1Db21wb25lbnQsIE1hdE5hdGl2ZURhdGVNb2R1bGUsIEVkaXRGaWVsZENvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgVGFDb250YWluZXJNb2R1bGUsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhRm9ybUlucHV0c01vZHVsZSxcbiAgICBUYVVpTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRhSWNvbnNNb2R1bGUsXG4gICAgVGFNZW51TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBGb3JtQ29tcG9uZW50LFxuICAgIElucHV0c0NvbXBvbmVudCxcbiAgICBQYW5lbENvbXBvbmVudCxcbiAgICBEeW5hbWljQ29tcG9uZW50LFxuICAgIEVkaXRGaWVsZENvbXBvbmVudCxcbiAgICBJbnB1dFRyYW5zbGF0aW9uQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEVycm9yU3RhdGVNYXRjaGVyLCB1c2VDbGFzczogU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlciB9XSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW0Zvcm1Db21wb25lbnQsIE1hdE5hdGl2ZURhdGVNb2R1bGUsIEVkaXRGaWVsZENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhRm9ybU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25Gb3JtLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiJdfQ==