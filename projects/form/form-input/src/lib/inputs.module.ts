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

import { CamFilesBasicModule } from '@camelot/files-basic';
import { CamIconsModule } from '@camelot/icons';
import { CamMenuModule } from '@camelot/menu';
import { TranslatePipe } from '@camelot/translation';
import { CamCardModule, CamContainerModule, CamLayoutModule, CamListModule, CamUiModule } from '@camelot/ui';
import { CamOverlayPanelComponent } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';
import { CamWysiswygModule } from '@camelot/wysiswyg';

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
import { CamTranslationInput } from './translation.service';

@NgModule({
  declarations: [
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
  imports: [
    FormLabelComponent,
    InputLayoutComponent,
    InputErrorComponent,
    CamDirectivePipeModule,
    CamUiModule,
    CamLayoutModule,
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
    CamFilesBasicModule,
    CamIconsModule,
    CamListModule,
    CamContainerModule,
    CamMenuModule,
    MatMenuModule,
    CamWysiswygModule,
    CamCardModule,
    MatProgressBarModule,
    MatGoogleMapsAutocompleteModule.forRoot('AIzaSyA4s5KmUyZ8uvXiWA3RMmKoNoKTxIh9nO8'),
    CdkMenuModule,
    TranslatePipe,
    ComponentInputComponent,
    CamOverlayPanelComponent,
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
export class CamFormInputsModule {
  constructor() {
    CamTranslationInput.getInstance();
  }
}
