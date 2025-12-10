import { CdkMenuModule, PARENT_OR_NEW_MENU_STACK_PROVIDER, } from "@angular/cdk/menu";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher, } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatGoogleMapsAutocompleteModule } from "@angular-material-extensions/google-maps-autocomplete";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { TaFilesBasicModule } from "@ta/files-basic";
import { TaIconsModule } from "@ta/icons";
import { TaMenuModule } from "@ta/menu";
import { TranslatePipe } from "@ta/translation";
import { TaCardModule, TaContainerModule, TaLayoutModule, TaListModule, TaUiModule, } from "@ta/ui";
import { TaOverlayPanelComponent } from "@ta/ui";
import { TaDirectivePipeModule } from "@ta/utils";
import { TaWysiswygModule } from "@ta/wysiswyg";
import { InputContainerComponent } from "./components/input-layout/input-container/input-container.component";
import { InputErrorComponent } from "./components/input-layout/input-error/input-error.component";
import { InputLayoutComponent } from "./components/input-layout/input-layout.component";
import { CheckboxComponent } from "./components/input/checkbox/checkbox.component";
import { InputChoicesComponent } from "./components/input/choices/choices.component";
import { ColorPickerComponent } from "./components/input/color-picker/color-picker.component";
import { ComponentInputComponent } from "./components/input/component/component.component";
import { CultureComponent } from "./components/input/culture/culture.component";
import { DatePickerComponent } from "./components/input/date-picker/date-picker.component";
import { DropdownComponent } from "./components/input/dropdown/dropdown.component";
import { InputImageComponent } from "./components/input/image/input-image.component";
import { InputImagesComponent } from "./components/input/images/input-images.component";
import { LabelComponent } from "./components/input/label/label.component";
import { InputPhoneComponent } from "./components/input/phone/input-phone.component";
import { RadioComponent } from "./components/input/radio/radio.component";
import { InputSchemaComponent } from "./components/input/schema/input-schema.component";
import { InputSchemaModal } from "./components/input/schema/modal/input-schema-modal.component";
import { SearchFieldComponent } from "./components/input/search-field/search-field.component";
import { SliderComponent } from "./components/input/slider/slider.component";
import { SwitchComponent } from "./components/input/switch/switch.component";
import { TextareaComponent } from "./components/input/textarea/textarea.component";
import { TextBoxComponent } from "./components/input/textbox/text-box.component";
import { TimePickerComponent } from "./components/input/time-picker/time-picker.component";
import { ToggleComponent } from "./components/input/toggle/toggle.component";
import { UploadComponent } from "./components/input/upload/upload.component";
import { WysiswygComponent } from "./components/input/wysiswyg/wysiswyg.component";
import { FormLabelComponent } from "./components/label/label.component";
import { TaTranslationInput } from "./translation.service";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFormInputsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaFormInputsModule, imports: [FormLabelComponent,
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
            ComponentInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFormInputsModule, providers: [
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
            MatGoogleMapsAutocompleteModule.forRoot(""),
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
            CultureComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFormInputsModule, decorators: [{
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
                        MatGoogleMapsAutocompleteModule.forRoot(""),
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
                        ComponentInputComponent,
                    ],
                    providers: [
                        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
                        PARENT_OR_NEW_MENU_STACK_PROVIDER,
                    ],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvaW5wdXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLGlDQUFpQyxHQUNsQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQiw0QkFBNEIsR0FDN0IsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUs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QUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLHVCQUF1QjtxQkFDeEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRTt3QkFDdEUsaUNBQWlDO3FCQUNsQztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENka01lbnVNb2R1bGUsXG4gIFBBUkVOVF9PUl9ORVdfTUVOVV9TVEFDS19QUk9WSURFUixcbn0gZnJvbSBcIkBhbmd1bGFyL2Nkay9tZW51XCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3hcIjtcbmltcG9ydCB7XG4gIEVycm9yU3RhdGVNYXRjaGVyLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBTaG93T25EaXJ0eUVycm9yU3RhdGVNYXRjaGVyLFxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudVwiO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyXCI7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lclwiO1xuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW9cIjtcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3RcIjtcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZVwiO1xuaW1wb3J0IHsgTWF0U2xpZGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NsaWRlclwiO1xuXG5pbXBvcnQgeyBNYXRHb29nbGVNYXBzQXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvZ29vZ2xlLW1hcHMtYXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tIFwibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXJcIjtcblxuaW1wb3J0IHsgVGFGaWxlc0Jhc2ljTW9kdWxlIH0gZnJvbSBcIkB0YS9maWxlcy1iYXNpY1wiO1xuaW1wb3J0IHsgVGFJY29uc01vZHVsZSB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhTWVudU1vZHVsZSB9IGZyb20gXCJAdGEvbWVudVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7XG4gIFRhQ2FyZE1vZHVsZSxcbiAgVGFDb250YWluZXJNb2R1bGUsXG4gIFRhTGF5b3V0TW9kdWxlLFxuICBUYUxpc3RNb2R1bGUsXG4gIFRhVWlNb2R1bGUsXG59IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhT3ZlcmxheVBhbmVsQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgVGFEaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuaW1wb3J0IHsgVGFXeXNpc3d5Z01vZHVsZSB9IGZyb20gXCJAdGEvd3lzaXN3eWdcIjtcblxuaW1wb3J0IHsgSW5wdXRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0LWxheW91dC9pbnB1dC1jb250YWluZXIvaW5wdXQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRFcnJvckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQtbGF5b3V0L2lucHV0LWVycm9yL2lucHV0LWVycm9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnB1dENob2ljZXNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0L2Nob2ljZXMvY2hvaWNlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbG9yUGlja2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50SW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0L2NvbXBvbmVudC9jb21wb25lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdWx0dXJlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9jdWx0dXJlL2N1bHR1cmUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnRcIjtcbmltcG9ydCB7IElucHV0SW1hZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0L2ltYWdlL2lucHV0LWltYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRJbWFnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0L2ltYWdlcy9pbnB1dC1pbWFnZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQvbGFiZWwvbGFiZWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnB1dFBob25lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9yYWRpby9yYWRpby5jb21wb25lbnRcIjtcbmltcG9ydCB7IElucHV0U2NoZW1hQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9zY2hlbWEvaW5wdXQtc2NoZW1hLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRTY2hlbWFNb2RhbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQvc2NoZW1hL21vZGFsL2lucHV0LXNjaGVtYS1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlYXJjaEZpZWxkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3dpdGNoQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0L3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGV4dEJveENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQvdGV4dGJveC90ZXh0LWJveC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0L3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9nZ2xlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXBsb2FkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC91cGxvYWQvdXBsb2FkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgV3lzaXN3eWdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0L3d5c2lzd3lnL3d5c2lzd3lnLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRm9ybUxhYmVsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sYWJlbC9sYWJlbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25JbnB1dCB9IGZyb20gXCIuL3RyYW5zbGF0aW9uLnNlcnZpY2VcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhRm9ybUlucHV0c01vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQsIENvbG9yUGlja2VyQ29tcG9uZW50LCBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBGb3JtTGFiZWxDb21wb25lbnQsXG4gICAgSW5wdXRMYXlvdXRDb21wb25lbnQsXG4gICAgSW5wdXRFcnJvckNvbXBvbmVudCxcbiAgICBUYURpcmVjdGl2ZVBpcGVNb2R1bGUsXG4gICAgVGFVaU1vZHVsZSxcbiAgICBUYUxheW91dE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUsXG4gICAgVGFGaWxlc0Jhc2ljTW9kdWxlLFxuICAgIFRhSWNvbnNNb2R1bGUsXG4gICAgVGFMaXN0TW9kdWxlLFxuICAgIFRhQ29udGFpbmVyTW9kdWxlLFxuICAgIFRhTWVudU1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIFRhV3lzaXN3eWdNb2R1bGUsXG4gICAgVGFDYXJkTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdEdvb2dsZU1hcHNBdXRvY29tcGxldGVNb2R1bGUuZm9yUm9vdChcIlwiKSxcbiAgICBDZGtNZW51TW9kdWxlLFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgQ29tcG9uZW50SW5wdXRDb21wb25lbnQsXG4gICAgVGFPdmVybGF5UGFuZWxDb21wb25lbnQsXG4gICAgQ2hlY2tib3hDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBEcm9wZG93bkNvbXBvbmVudCxcbiAgICBMYWJlbENvbXBvbmVudCxcbiAgICBSYWRpb0NvbXBvbmVudCxcbiAgICBTZWFyY2hGaWVsZENvbXBvbmVudCxcbiAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgU3dpdGNoQ29tcG9uZW50LFxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxuICAgIFRleHRCb3hDb21wb25lbnQsXG4gICAgVGltZVBpY2tlckNvbXBvbmVudCxcbiAgICBUb2dnbGVDb21wb25lbnQsXG4gICAgSW5wdXRJbWFnZXNDb21wb25lbnQsXG4gICAgSW5wdXRTY2hlbWFDb21wb25lbnQsXG4gICAgSW5wdXRTY2hlbWFNb2RhbCxcbiAgICBJbnB1dEltYWdlQ29tcG9uZW50LFxuICAgIElucHV0Q2hvaWNlc0NvbXBvbmVudCxcbiAgICBXeXNpc3d5Z0NvbXBvbmVudCxcbiAgICBVcGxvYWRDb21wb25lbnQsXG4gICAgSW5wdXRQaG9uZUNvbXBvbmVudCxcbiAgICBDdWx0dXJlQ29tcG9uZW50LFxuICAgIElucHV0Q29udGFpbmVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2hlY2tib3hDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBEcm9wZG93bkNvbXBvbmVudCxcbiAgICBMYWJlbENvbXBvbmVudCxcbiAgICBSYWRpb0NvbXBvbmVudCxcbiAgICBTZWFyY2hGaWVsZENvbXBvbmVudCxcbiAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgU3dpdGNoQ29tcG9uZW50LFxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxuICAgIFRleHRCb3hDb21wb25lbnQsXG4gICAgVGltZVBpY2tlckNvbXBvbmVudCxcbiAgICBUb2dnbGVDb21wb25lbnQsXG4gICAgSW5wdXRJbWFnZXNDb21wb25lbnQsXG4gICAgSW5wdXRTY2hlbWFDb21wb25lbnQsXG4gICAgSW5wdXRJbWFnZUNvbXBvbmVudCxcbiAgICBJbnB1dENob2ljZXNDb21wb25lbnQsXG4gICAgV3lzaXN3eWdDb21wb25lbnQsXG4gICAgVXBsb2FkQ29tcG9uZW50LFxuICAgIEN1bHR1cmVDb21wb25lbnQsXG4gICAgSW5wdXRQaG9uZUNvbXBvbmVudCxcbiAgICBDb21wb25lbnRJbnB1dENvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBFcnJvclN0YXRlTWF0Y2hlciwgdXNlQ2xhc3M6IFNob3dPbkRpcnR5RXJyb3JTdGF0ZU1hdGNoZXIgfSxcbiAgICBQQVJFTlRfT1JfTkVXX01FTlVfU1RBQ0tfUFJPVklERVIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhRm9ybUlucHV0c01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25JbnB1dC5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=