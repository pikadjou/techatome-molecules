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
            PanelComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Zvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQ7Ozs7Ozs7Ozs7R0FVRztBQTBCSCxNQUFNLE9BQU8sWUFBWTtJQUN2QjtRQUNFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7K0dBSFUsWUFBWTtnSEFBWixZQUFZLFlBdkJyQixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsVUFBVTtZQUNWLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLHlCQUF5QixhQUlqQixhQUFhLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCO2dIQUVyRCxZQUFZLGFBSlosQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQyxZQW5CakYsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLFVBQVU7WUFDVixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFFYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLHlCQUF5QixFQUlGLG1CQUFtQjs7NEZBRWpDLFlBQVk7a0JBekJ4QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIseUJBQXlCO3FCQUMxQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQztvQkFDbkYsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQztpQkFDbEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIsIE1hdE5hdGl2ZURhdGVNb2R1bGUsIFNob3dPbkRpcnR5RXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcblxuaW1wb3J0IHsgVGFGb3JtSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHRhL2Zvcm0taW5wdXQnO1xuaW1wb3J0IHsgVGFJY29uc01vZHVsZSB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYU1lbnVNb2R1bGUgfSBmcm9tICdAdGEvbWVudSc7XG5pbXBvcnQgeyBUYU5vdGlmaWNhdGlvbk1vZHVsZSB9IGZyb20gJ0B0YS9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUYUNvbnRhaW5lck1vZHVsZSwgVGFVaU1vZHVsZSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBUYURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBFZGl0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZWRpdC1maWVsZC9lZGl0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvZHluYW1pYy9keW5hbWljLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9wYW5lbC9wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRUcmFuc2xhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC90cmFuc2xhdGlvbi90cmFuc2xhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0cy9pbnB1dHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25Gb3JtIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhRm9ybU1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgRm9ybUNvbXBvbmVudCwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgRWRpdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBUYUNvbnRhaW5lck1vZHVsZSxcbiAgICBUYURpcmVjdGl2ZVBpcGVNb2R1bGUsXG4gICAgVGFOb3RpZmljYXRpb25Nb2R1bGUsXG4gICAgVGFGb3JtSW5wdXRzTW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVGFJY29uc01vZHVsZSxcbiAgICBUYU1lbnVNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIEZvcm1Db21wb25lbnQsXG4gICAgSW5wdXRzQ29tcG9uZW50LFxuICAgIFBhbmVsQ29tcG9uZW50LFxuICAgIER5bmFtaWNDb21wb25lbnQsXG4gICAgRWRpdEZpZWxkQ29tcG9uZW50LFxuICAgIElucHV0VHJhbnNsYXRpb25Db21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogRXJyb3JTdGF0ZU1hdGNoZXIsIHVzZUNsYXNzOiBTaG93T25EaXJ0eUVycm9yU3RhdGVNYXRjaGVyIH1dLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbRm9ybUNvbXBvbmVudCwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgRWRpdEZpZWxkQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVGFGb3JtTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGFUcmFuc2xhdGlvbkZvcm0uZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIl19