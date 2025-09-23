import { CdkMenuModule, PARENT_OR_NEW_MENU_STACK_PROVIDER } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TaFilesBasicModule } from '@ta/files-basic';
import { TaIconsModule } from '@ta/icons';
import { TaMenuModule } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { TaCardModule, TaContainerModule, TaLayoutModule, TaListModule, TaUiModule } from '@ta/ui';
import { TaOverlayPanelComponent } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';
import { TaWysiswygModule } from '@ta/wysiswyg';
import { InputContainerComponent } from './components/input-layout/input-container/input-container.component';
import { InputErrorComponent } from './components/input-layout/input-error/input-error.component';
import { InputLayoutComponent } from './components/input-layout/input-layout.component';
import { InputAddressComponent } from './components/input/address/address.component';
import { CheckboxComponent } from './components/input/checkbox/checkbox.component';
import { InputChoicesComponent } from './components/input/choices/choices.component';
import { ColorPickerComponent } from './components/input/color-picker/color-picker.component';
import { ComponentInputComponent } from './components/input/component/component.component';
import { CultureComponent } from './components/input/culture/culture.component';
import { DatePickerComponent } from './components/input/date-picker/date-picker.component';
import { DropdownComponent } from './components/input/dropdown/dropdown.component';
import { InputImageComponent } from './components/input/image/input-image.component';
import { InputImagesComponent } from './components/input/images/input-images.component';
import { LabelComponent } from './components/input/label/label.component';
import { InputPhoneComponent } from './components/input/phone/input-phone.component';
import { RadioComponent } from './components/input/radio/radio.component';
import { InputSchemaComponent } from './components/input/schema/input-schema.component';
import { InputSchemaModal } from './components/input/schema/modal/input-schema-modal.component';
import { SearchFieldComponent } from './components/input/search-field/search-field.component';
import { SliderComponent } from './components/input/slider/slider.component';
import { SwitchComponent } from './components/input/switch/switch.component';
import { TextareaComponent } from './components/input/textarea/textarea.component';
import { TextBoxComponent } from './components/input/textbox/text-box.component';
import { TimePickerComponent } from './components/input/time-picker/time-picker.component';
import { ToggleComponent } from './components/input/toggle/toggle.component';
import { UploadComponent } from './components/input/upload/upload.component';
import { WysiswygComponent } from './components/input/wysiswyg/wysiswyg.component';
import { FormLabelComponent } from './components/label/label.component';
import { TaTranslationInput } from './translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular-material-extensions/google-maps-autocomplete";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaFormInputsModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { CheckboxComponent, ColorPickerComponent, DatePickerComponent } from '@ta/library-name';
 */
export class TaFormInputsModule {
    constructor() {
        TaTranslationInput.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormInputsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaFormInputsModule, imports: [FormLabelComponent,
            InputLayoutComponent,
            InputErrorComponent,
            TaDirectivePipeModule,
            TaUiModule,
            TaLayoutModule,
            CommonModule,
            FormsModule,
            MatAutocompleteModule,
            MatCheckboxModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatInputModule,
            MatNativeDateModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSelectModule,
            MatSliderModule,
            MatSlideToggleModule,
            ReactiveFormsModule,
            NgxMaterialTimepickerModule,
            TaFilesBasicModule,
            TaIconsModule,
            TaListModule,
            TaContainerModule,
            TaMenuModule,
            MatMenuModule,
            TaWysiswygModule,
            TaCardModule,
            MatProgressBarModule, i1.MatGoogleMapsAutocompleteModule, CdkMenuModule,
            TranslatePipe,
            ComponentInputComponent,
            TaOverlayPanelComponent,
            CheckboxComponent,
            ColorPickerComponent,
            DatePickerComponent,
            DropdownComponent,
            LabelComponent,
            RadioComponent,
            SearchFieldComponent,
            SliderComponent,
            SwitchComponent,
            TextareaComponent,
            TextBoxComponent,
            TimePickerComponent,
            ToggleComponent,
            InputImagesComponent,
            InputSchemaComponent,
            InputSchemaModal,
            InputImageComponent,
            InputChoicesComponent,
            WysiswygComponent,
            UploadComponent,
            InputPhoneComponent,
            InputAddressComponent,
            CultureComponent,
            InputContainerComponent], exports: [CheckboxComponent,
            ColorPickerComponent,
            DatePickerComponent,
            DropdownComponent,
            LabelComponent,
            RadioComponent,
            SearchFieldComponent,
            SliderComponent,
            SwitchComponent,
            TextareaComponent,
            TextBoxComponent,
            TimePickerComponent,
            ToggleComponent,
            InputImagesComponent,
            InputSchemaComponent,
            InputImageComponent,
            InputChoicesComponent,
            WysiswygComponent,
            UploadComponent,
            CultureComponent,
            InputPhoneComponent,
            InputAddressComponent,
            ComponentInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormInputsModule, providers: [
            { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
            PARENT_OR_NEW_MENU_STACK_PROVIDER,
        ], imports: [TaDirectivePipeModule,
            TaUiModule,
            TaLayoutModule,
            CommonModule,
            FormsModule,
            MatAutocompleteModule,
            MatCheckboxModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatInputModule,
            MatNativeDateModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSelectModule,
            MatSliderModule,
            MatSlideToggleModule,
            ReactiveFormsModule,
            NgxMaterialTimepickerModule,
            TaFilesBasicModule,
            TaIconsModule,
            TaListModule,
            TaContainerModule,
            TaMenuModule,
            MatMenuModule,
            TaWysiswygModule,
            TaCardModule,
            MatProgressBarModule,
            MatGoogleMapsAutocompleteModule.forRoot('AIzaSyA4s5KmUyZ8uvXiWA3RMmKoNoKTxIh9nO8'),
            CdkMenuModule,
            ComponentInputComponent,
            TaOverlayPanelComponent,
            DatePickerComponent,
            DropdownComponent,
            RadioComponent,
            SearchFieldComponent,
            SliderComponent,
            SwitchComponent,
            TextareaComponent,
            TextBoxComponent,
            TimePickerComponent,
            ToggleComponent,
            InputImagesComponent,
            InputSchemaComponent,
            InputSchemaModal,
            InputImageComponent,
            InputChoicesComponent,
            WysiswygComponent,
            UploadComponent,
            InputPhoneComponent,
            InputAddressComponent,
            CultureComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormInputsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        FormLabelComponent,
                        InputLayoutComponent,
                        InputErrorComponent,
                        TaDirectivePipeModule,
                        TaUiModule,
                        TaLayoutModule,
                        CommonModule,
                        FormsModule,
                        MatAutocompleteModule,
                        MatCheckboxModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        ReactiveFormsModule,
                        NgxMaterialTimepickerModule,
                        TaFilesBasicModule,
                        TaIconsModule,
                        TaListModule,
                        TaContainerModule,
                        TaMenuModule,
                        MatMenuModule,
                        TaWysiswygModule,
                        TaCardModule,
                        MatProgressBarModule,
                        MatGoogleMapsAutocompleteModule.forRoot('AIzaSyA4s5KmUyZ8uvXiWA3RMmKoNoKTxIh9nO8'),
                        CdkMenuModule,
                        TranslatePipe,
                        ComponentInputComponent,
                        TaOverlayPanelComponent,
                        CheckboxComponent,
                        ColorPickerComponent,
                        DatePickerComponent,
                        DropdownComponent,
                        LabelComponent,
                        RadioComponent,
                        SearchFieldComponent,
                        SliderComponent,
                        SwitchComponent,
                        TextareaComponent,
                        TextBoxComponent,
                        TimePickerComponent,
                        ToggleComponent,
                        InputImagesComponent,
                        InputSchemaComponent,
                        InputSchemaModal,
                        InputImageComponent,
                        InputChoicesComponent,
                        WysiswygComponent,
                        UploadComponent,
                        InputPhoneComponent,
                        InputAddressComponent,
                        CultureComponent,
                        InputContainerComponent,
                    ],
                    exports: [
                        CheckboxComponent,
                        ColorPickerComponent,
                        DatePickerComponent,
                        DropdownComponent,
                        LabelComponent,
                        RadioComponent,
                        SearchFieldComponent,
                        SliderComponent,
                        SwitchComponent,
                        TextareaComponent,
                        TextBoxComponent,
                        TimePickerComponent,
                        ToggleComponent,
                        InputImagesComponent,
                        InputSchemaComponent,
                        InputImageComponent,
                        InputChoicesComponent,
                        WysiswygComponent,
                        UploadComponent,
                        CultureComponent,
                        InputPhoneComponent,
                        InputAddressComponent,
                        ComponentInputComponent,
                    ],
                    providers: [
                        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
                        PARENT_OR_NEW_MENU_STACK_PROVIDER,
                    ],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvaW5wdXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFF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d0JBQ2pCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRTt3QkFDdEUsaUNBQWlDO3FCQUNsQztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka01lbnVNb2R1bGUsIFBBUkVOVF9PUl9ORVdfTUVOVV9TVEFDS19QUk9WSURFUiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9tZW51JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHsgTWF0U2xpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcblxuaW1wb3J0IHsgTWF0R29vZ2xlTWFwc0F1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvZ29vZ2xlLW1hcHMtYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1tYXRlcmlhbC10aW1lcGlja2VyJztcblxuaW1wb3J0IHsgVGFGaWxlc0Jhc2ljTW9kdWxlIH0gZnJvbSAnQHRhL2ZpbGVzLWJhc2ljJztcbmltcG9ydCB7IFRhSWNvbnNNb2R1bGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVGFNZW51TW9kdWxlIH0gZnJvbSAnQHRhL21lbnUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUYUNhcmRNb2R1bGUsIFRhQ29udGFpbmVyTW9kdWxlLCBUYUxheW91dE1vZHVsZSwgVGFMaXN0TW9kdWxlLCBUYVVpTW9kdWxlIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhT3ZlcmxheVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5pbXBvcnQgeyBUYVd5c2lzd3lnTW9kdWxlIH0gZnJvbSAnQHRhL3d5c2lzd3lnJztcblxuaW1wb3J0IHsgSW5wdXRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQtbGF5b3V0L2lucHV0LWNvbnRhaW5lci9pbnB1dC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0RXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQtbGF5b3V0L2lucHV0LWVycm9yL2lucHV0LWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dExheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEFkZHJlc3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRDaG9pY2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2Nob2ljZXMvY2hvaWNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvY29tcG9uZW50L2NvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VsdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9jdWx0dXJlL2N1bHR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ltYWdlL2lucHV0LWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEltYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbWFnZXMvaW5wdXQtaW1hZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRQaG9uZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvcmFkaW8vcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0U2NoZW1hQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3NjaGVtYS9pbnB1dC1zY2hlbWEuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0U2NoZW1hTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvc2NoZW1hL21vZGFsL2lucHV0LXNjaGVtYS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvc2VhcmNoLWZpZWxkL3NlYXJjaC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC90ZXh0Ym94L3RleHQtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2dnbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3VwbG9hZC91cGxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFd5c2lzd3lnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3d5c2lzd3lnL3d5c2lzd3lnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25JbnB1dCB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYUZvcm1JbnB1dHNNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50LCBDb2xvclBpY2tlckNvbXBvbmVudCwgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybUxhYmVsQ29tcG9uZW50LFxuICAgIElucHV0TGF5b3V0Q29tcG9uZW50LFxuICAgIElucHV0RXJyb3JDb21wb25lbnQsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFMYXlvdXRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlLFxuICAgIFRhRmlsZXNCYXNpY01vZHVsZSxcbiAgICBUYUljb25zTW9kdWxlLFxuICAgIFRhTGlzdE1vZHVsZSxcbiAgICBUYUNvbnRhaW5lck1vZHVsZSxcbiAgICBUYU1lbnVNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBUYVd5c2lzd3lnTW9kdWxlLFxuICAgIFRhQ2FyZE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRHb29nbGVNYXBzQXV0b2NvbXBsZXRlTW9kdWxlLmZvclJvb3QoJ0FJemFTeUE0czVLbVV5Wjh1dlhpV0EzUk1tS29Ob0tUeEloOW5POCcpLFxuICAgIENka01lbnVNb2R1bGUsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBDb21wb25lbnRJbnB1dENvbXBvbmVudCxcbiAgICBUYU92ZXJsYXlQYW5lbENvbXBvbmVudCxcbiAgICBDaGVja2JveENvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckNvbXBvbmVudCxcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIERyb3Bkb3duQ29tcG9uZW50LFxuICAgIExhYmVsQ29tcG9uZW50LFxuICAgIFJhZGlvQ29tcG9uZW50LFxuICAgIFNlYXJjaEZpZWxkQ29tcG9uZW50LFxuICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICBTd2l0Y2hDb21wb25lbnQsXG4gICAgVGV4dGFyZWFDb21wb25lbnQsXG4gICAgVGV4dEJveENvbXBvbmVudCxcbiAgICBUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgIFRvZ2dsZUNvbXBvbmVudCxcbiAgICBJbnB1dEltYWdlc0NvbXBvbmVudCxcbiAgICBJbnB1dFNjaGVtYUNvbXBvbmVudCxcbiAgICBJbnB1dFNjaGVtYU1vZGFsLFxuICAgIElucHV0SW1hZ2VDb21wb25lbnQsXG4gICAgSW5wdXRDaG9pY2VzQ29tcG9uZW50LFxuICAgIFd5c2lzd3lnQ29tcG9uZW50LFxuICAgIFVwbG9hZENvbXBvbmVudCxcbiAgICBJbnB1dFBob25lQ29tcG9uZW50LFxuICAgIElucHV0QWRkcmVzc0NvbXBvbmVudCxcbiAgICBDdWx0dXJlQ29tcG9uZW50LFxuICAgIElucHV0Q29udGFpbmVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2hlY2tib3hDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBEcm9wZG93bkNvbXBvbmVudCxcbiAgICBMYWJlbENvbXBvbmVudCxcbiAgICBSYWRpb0NvbXBvbmVudCxcbiAgICBTZWFyY2hGaWVsZENvbXBvbmVudCxcbiAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgU3dpdGNoQ29tcG9uZW50LFxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxuICAgIFRleHRCb3hDb21wb25lbnQsXG4gICAgVGltZVBpY2tlckNvbXBvbmVudCxcbiAgICBUb2dnbGVDb21wb25lbnQsXG4gICAgSW5wdXRJbWFnZXNDb21wb25lbnQsXG4gICAgSW5wdXRTY2hlbWFDb21wb25lbnQsXG4gICAgSW5wdXRJbWFnZUNvbXBvbmVudCxcbiAgICBJbnB1dENob2ljZXNDb21wb25lbnQsXG4gICAgV3lzaXN3eWdDb21wb25lbnQsXG4gICAgVXBsb2FkQ29tcG9uZW50LFxuICAgIEN1bHR1cmVDb21wb25lbnQsXG4gICAgSW5wdXRQaG9uZUNvbXBvbmVudCxcbiAgICBJbnB1dEFkZHJlc3NDb21wb25lbnQsXG4gICAgQ29tcG9uZW50SW5wdXRDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogRXJyb3JTdGF0ZU1hdGNoZXIsIHVzZUNsYXNzOiBTaG93T25EaXJ0eUVycm9yU3RhdGVNYXRjaGVyIH0sXG4gICAgUEFSRU5UX09SX05FV19NRU5VX1NUQUNLX1BST1ZJREVSLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYUZvcm1JbnB1dHNNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uSW5wdXQuZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIl19