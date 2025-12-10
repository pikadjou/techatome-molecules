import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher, } from "@angular/material/core";
import { MatMenuModule } from "@angular/material/menu";
import { TaFormInputsModule } from "@ta/form-input";
import { TaIconsModule } from "@ta/icons";
import { TaMenuModule } from "@ta/menu";
import { TaNotificationModule } from "@ta/notification";
import { TranslatePipe } from "@ta/translation";
import { TaContainerModule, TaUiModule } from "@ta/ui";
import { TaDirectivePipeModule } from "@ta/utils";
import { EditFieldComponent } from "./components/edit-field/edit-field.component";
import { FormComponent } from "./components/form.component";
import { DynamicComponent } from "./components/input/dynamic/dynamic.component";
import { PanelComponent } from "./components/input/panel/panel.component";
import { InputTranslationComponent } from "./components/input/translation/translation.component";
import { InputsComponent } from "./components/inputs/inputs.component";
import { TaTranslationForm } from "./translation.service";
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFormModule, providers: [
            { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
        ], imports: [TaContainerModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFormModule, decorators: [{
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
                    providers: [
                        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
                    ],
                    declarations: [],
                    exports: [FormComponent, MatNativeDateModule, EditFieldComponent],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Zvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQiw0QkFBNEIsR0FDN0IsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQ7Ozs7Ozs7Ozs7R0FVRztBQTRCSCxNQUFNLE9BQU8sWUFBWTtJQUN2QjtRQUNFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7K0dBSFUsWUFBWTtnSEFBWixZQUFZLFlBekJyQixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsVUFBVTtZQUNWLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLHlCQUF5QixhQU1qQixhQUFhLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCO2dIQUVyRCxZQUFZLGFBTlo7WUFDVCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUU7U0FDdkUsWUFyQkMsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLFVBQVU7WUFDVixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFFYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLHlCQUF5QixFQU1GLG1CQUFtQjs7NEZBRWpDLFlBQVk7a0JBM0J4QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIseUJBQXlCO3FCQUMxQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFO3FCQUN2RTtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDO2lCQUNsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1xuICBFcnJvclN0YXRlTWF0Y2hlcixcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlcixcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudVwiO1xuXG5pbXBvcnQgeyBUYUZvcm1JbnB1dHNNb2R1bGUgfSBmcm9tIFwiQHRhL2Zvcm0taW5wdXRcIjtcbmltcG9ydCB7IFRhSWNvbnNNb2R1bGUgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUYU1lbnVNb2R1bGUgfSBmcm9tIFwiQHRhL21lbnVcIjtcbmltcG9ydCB7IFRhTm90aWZpY2F0aW9uTW9kdWxlIH0gZnJvbSBcIkB0YS9ub3RpZmljYXRpb25cIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwiQHRhL3RyYW5zbGF0aW9uXCI7XG5pbXBvcnQgeyBUYUNvbnRhaW5lck1vZHVsZSwgVGFVaU1vZHVsZSB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgRWRpdEZpZWxkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0LWZpZWxkL2VkaXQtZmllbGQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQvZHluYW1pYy9keW5hbWljLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFuZWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0L3BhbmVsL3BhbmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRUcmFuc2xhdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQvdHJhbnNsYXRpb24vdHJhbnNsYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnB1dHNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0cy9pbnB1dHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gXCIuL3RyYW5zbGF0aW9uLnNlcnZpY2VcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhRm9ybU1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgRm9ybUNvbXBvbmVudCwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgRWRpdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBUYUNvbnRhaW5lck1vZHVsZSxcbiAgICBUYURpcmVjdGl2ZVBpcGVNb2R1bGUsXG4gICAgVGFOb3RpZmljYXRpb25Nb2R1bGUsXG4gICAgVGFGb3JtSW5wdXRzTW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVGFJY29uc01vZHVsZSxcbiAgICBUYU1lbnVNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIEZvcm1Db21wb25lbnQsXG4gICAgSW5wdXRzQ29tcG9uZW50LFxuICAgIFBhbmVsQ29tcG9uZW50LFxuICAgIER5bmFtaWNDb21wb25lbnQsXG4gICAgRWRpdEZpZWxkQ29tcG9uZW50LFxuICAgIElucHV0VHJhbnNsYXRpb25Db21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogRXJyb3JTdGF0ZU1hdGNoZXIsIHVzZUNsYXNzOiBTaG93T25EaXJ0eUVycm9yU3RhdGVNYXRjaGVyIH0sXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtGb3JtQ29tcG9uZW50LCBNYXROYXRpdmVEYXRlTW9kdWxlLCBFZGl0RmllbGRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBUYUZvcm1Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=