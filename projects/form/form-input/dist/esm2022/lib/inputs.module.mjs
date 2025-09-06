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
import { InputImageModal } from './components/input/images/modal/input-images-modal.component';
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
            InputImageModal,
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
            InputImageModal,
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
                        InputImageModal,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvaW5wdXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFF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bkIscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsdUJBQXVCO3FCQUN4QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFO3dCQUN0RSxpQ0FBaUM7cUJBQ2xDO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrTWVudU1vZHVsZSwgUEFSRU5UX09SX05FV19NRU5VX1NUQUNLX1BST1ZJREVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL21lbnUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyLCBNYXROYXRpdmVEYXRlTW9kdWxlLCBTaG93T25EaXJ0eUVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQgeyBNYXRTbGlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuXG5pbXBvcnQgeyBNYXRHb29nbGVNYXBzQXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9nb29nbGUtbWFwcy1hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInO1xuXG5pbXBvcnQgeyBUYUZpbGVzQmFzaWNNb2R1bGUgfSBmcm9tICdAdGEvZmlsZXMtYmFzaWMnO1xuaW1wb3J0IHsgVGFJY29uc01vZHVsZSB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYU1lbnVNb2R1bGUgfSBmcm9tICdAdGEvbWVudSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFRhQ2FyZE1vZHVsZSwgVGFDb250YWluZXJNb2R1bGUsIFRhTGF5b3V0TW9kdWxlLCBUYUxpc3RNb2R1bGUsIFRhVWlNb2R1bGUgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgVGFPdmVybGF5UGFuZWxDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgVGFEaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcbmltcG9ydCB7IFRhV3lzaXN3eWdNb2R1bGUgfSBmcm9tICdAdGEvd3lzaXN3eWcnO1xuXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC1sYXlvdXQvaW5wdXQtY29udGFpbmVyL2lucHV0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC1sYXlvdXQvaW5wdXQtZXJyb3IvaW5wdXQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0QWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dENob2ljZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvY2hvaWNlcy9jaG9pY2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9jb21wb25lbnQvY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdWx0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2N1bHR1cmUvY3VsdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0SW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvaW1hZ2UvaW5wdXQtaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0SW1hZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2ltYWdlcy9pbnB1dC1pbWFnZXMuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0SW1hZ2VNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbWFnZXMvbW9kYWwvaW5wdXQtaW1hZ2VzLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRQaG9uZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvcmFkaW8vcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0U2NoZW1hQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3NjaGVtYS9pbnB1dC1zY2hlbWEuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0U2NoZW1hTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvc2NoZW1hL21vZGFsL2lucHV0LXNjaGVtYS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvc2VhcmNoLWZpZWxkL3NlYXJjaC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC90ZXh0Ym94L3RleHQtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2dnbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3VwbG9hZC91cGxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFd5c2lzd3lnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L3d5c2lzd3lnL3d5c2lzd3lnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25JbnB1dCB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYUZvcm1JbnB1dHNNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50LCBDb2xvclBpY2tlckNvbXBvbmVudCwgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybUxhYmVsQ29tcG9uZW50LFxuICAgIElucHV0TGF5b3V0Q29tcG9uZW50LFxuICAgIElucHV0RXJyb3JDb21wb25lbnQsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFMYXlvdXRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlLFxuICAgIFRhRmlsZXNCYXNpY01vZHVsZSxcbiAgICBUYUljb25zTW9kdWxlLFxuICAgIFRhTGlzdE1vZHVsZSxcbiAgICBUYUNvbnRhaW5lck1vZHVsZSxcbiAgICBUYU1lbnVNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBUYVd5c2lzd3lnTW9kdWxlLFxuICAgIFRhQ2FyZE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRHb29nbGVNYXBzQXV0b2NvbXBsZXRlTW9kdWxlLmZvclJvb3QoJ0FJemFTeUE0czVLbVV5Wjh1dlhpV0EzUk1tS29Ob0tUeEloOW5POCcpLFxuICAgIENka01lbnVNb2R1bGUsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBDb21wb25lbnRJbnB1dENvbXBvbmVudCxcbiAgICBUYU92ZXJsYXlQYW5lbENvbXBvbmVudCxcbiAgICBDaGVja2JveENvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckNvbXBvbmVudCxcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIERyb3Bkb3duQ29tcG9uZW50LFxuICAgIExhYmVsQ29tcG9uZW50LFxuICAgIFJhZGlvQ29tcG9uZW50LFxuICAgIFNlYXJjaEZpZWxkQ29tcG9uZW50LFxuICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICBTd2l0Y2hDb21wb25lbnQsXG4gICAgVGV4dGFyZWFDb21wb25lbnQsXG4gICAgVGV4dEJveENvbXBvbmVudCxcbiAgICBUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgIFRvZ2dsZUNvbXBvbmVudCxcbiAgICBJbnB1dEltYWdlc0NvbXBvbmVudCxcbiAgICBJbnB1dEltYWdlTW9kYWwsXG4gICAgSW5wdXRTY2hlbWFDb21wb25lbnQsXG4gICAgSW5wdXRTY2hlbWFNb2RhbCxcbiAgICBJbnB1dEltYWdlQ29tcG9uZW50LFxuICAgIElucHV0Q2hvaWNlc0NvbXBvbmVudCxcbiAgICBXeXNpc3d5Z0NvbXBvbmVudCxcbiAgICBVcGxvYWRDb21wb25lbnQsXG4gICAgSW5wdXRQaG9uZUNvbXBvbmVudCxcbiAgICBJbnB1dEFkZHJlc3NDb21wb25lbnQsXG4gICAgQ3VsdHVyZUNvbXBvbmVudCxcbiAgICBJbnB1dENvbnRhaW5lckNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENoZWNrYm94Q29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIERhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgRHJvcGRvd25Db21wb25lbnQsXG4gICAgTGFiZWxDb21wb25lbnQsXG4gICAgUmFkaW9Db21wb25lbnQsXG4gICAgU2VhcmNoRmllbGRDb21wb25lbnQsXG4gICAgU2xpZGVyQ29tcG9uZW50LFxuICAgIFN3aXRjaENvbXBvbmVudCxcbiAgICBUZXh0YXJlYUNvbXBvbmVudCxcbiAgICBUZXh0Qm94Q29tcG9uZW50LFxuICAgIFRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgVG9nZ2xlQ29tcG9uZW50LFxuICAgIElucHV0SW1hZ2VzQ29tcG9uZW50LFxuICAgIElucHV0U2NoZW1hQ29tcG9uZW50LFxuICAgIElucHV0SW1hZ2VDb21wb25lbnQsXG4gICAgSW5wdXRDaG9pY2VzQ29tcG9uZW50LFxuICAgIFd5c2lzd3lnQ29tcG9uZW50LFxuICAgIFVwbG9hZENvbXBvbmVudCxcbiAgICBDdWx0dXJlQ29tcG9uZW50LFxuICAgIElucHV0UGhvbmVDb21wb25lbnQsXG4gICAgSW5wdXRBZGRyZXNzQ29tcG9uZW50LFxuICAgIENvbXBvbmVudElucHV0Q29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEVycm9yU3RhdGVNYXRjaGVyLCB1c2VDbGFzczogU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlciB9LFxuICAgIFBBUkVOVF9PUl9ORVdfTUVOVV9TVEFDS19QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFGb3JtSW5wdXRzTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGFUcmFuc2xhdGlvbklucHV0LmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiJdfQ==