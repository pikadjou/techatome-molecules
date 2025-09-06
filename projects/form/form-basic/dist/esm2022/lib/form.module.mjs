import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { TaFormInputsModule } from '@ta/form-input';
import { TaIconsModule } from '@ta/icons';
import { TaMenuModule } from '@ta/menu';
import { TaNotificationModule } from '@ta/notification';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaFormModule, imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaNotificationModule,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormModule, providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }], imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaNotificationModule,
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
            DynamicComponent,
            EditFieldComponent,
            InputTranslationComponent, MatNativeDateModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        TaContainerModule,
                        TaDirectivePipeModule,
                        TaNotificationModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Zvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQ7Ozs7Ozs7Ozs7R0FVRztBQTBCSCxNQUFNLE9BQU8sWUFBWTtJQUN2QjtRQUNFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7K0dBSFUsWUFBWTtnSEFBWixZQUFZLFlBdkJyQixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsVUFBVTtZQUNWLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLHlCQUF5QixhQUlqQixhQUFhLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCO2dIQUVyRCxZQUFZLGFBSlosQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQyxZQW5CakYsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLFVBQVU7WUFDVixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFFYixhQUFhO1lBQ2IsZUFBZTtZQUVmLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIseUJBQXlCLEVBSUYsbUJBQW1COzs0RkFFakMsWUFBWTtrQkF6QnhCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsVUFBVTt3QkFDVixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQix5QkFBeUI7cUJBQzFCO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxDQUFDO29CQUNuRixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDO2lCQUNsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuXG5pbXBvcnQgeyBUYUZvcm1JbnB1dHNNb2R1bGUgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRhTWVudU1vZHVsZSB9IGZyb20gJ0B0YS9tZW51JztcbmltcG9ydCB7IFRhTm90aWZpY2F0aW9uTW9kdWxlIH0gZnJvbSAnQHRhL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFRhQ29udGFpbmVyTW9kdWxlLCBUYVVpTW9kdWxlIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IEVkaXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0LWZpZWxkL2VkaXQtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9keW5hbWljL2R5bmFtaWMuY29tcG9uZW50JztcbmltcG9ydCB7IFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3BhbmVsL3BhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dFRyYW5zbGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFUcmFuc2xhdGlvbkZvcm0gfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgVGFGb3JtTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBGb3JtQ29tcG9uZW50LCBNYXROYXRpdmVEYXRlTW9kdWxlLCBFZGl0RmllbGRDb21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFRhQ29udGFpbmVyTW9kdWxlLFxuICAgIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSxcbiAgICBUYU5vdGlmaWNhdGlvbk1vZHVsZSxcbiAgICBUYUZvcm1JbnB1dHNNb2R1bGUsXG4gICAgVGFVaU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUYUljb25zTW9kdWxlLFxuICAgIFRhTWVudU1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBJbnB1dHNDb21wb25lbnQsXG4gICAgUGFuZWxDb21wb25lbnQsXG4gICAgRHluYW1pY0NvbXBvbmVudCxcbiAgICBFZGl0RmllbGRDb21wb25lbnQsXG4gICAgSW5wdXRUcmFuc2xhdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBFcnJvclN0YXRlTWF0Y2hlciwgdXNlQ2xhc3M6IFNob3dPbkRpcnR5RXJyb3JTdGF0ZU1hdGNoZXIgfV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtGb3JtQ29tcG9uZW50LCBNYXROYXRpdmVEYXRlTW9kdWxlLCBFZGl0RmllbGRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBUYUZvcm1Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=