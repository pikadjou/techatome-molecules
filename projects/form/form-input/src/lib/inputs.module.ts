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
@NgModule({
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
})
export class TaFormInputsModule {
  constructor() {
    TaTranslationInput.getInstance();
  }
}
