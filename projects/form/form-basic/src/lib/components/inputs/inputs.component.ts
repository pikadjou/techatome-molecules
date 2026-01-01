import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { Observable } from 'rxjs';

import {
  CheckboxComponent,
  ComponentInputComponent,
  CultureComponent,
  DatePickerComponent,
  DropdownComponent,
  InputChoicesComponent,
  InputImageComponent,
  InputImagesComponent,
  InputLogoComponent,
  InputPhoneComponent,
  InputSchemaComponent,
  LabelComponent,
  RadioComponent,
  RatingComponent,
  SliderComponent,
  SwitchComponent,
  TextBoxComponent,
  TextareaComponent,
  TimePickerComponent,
  ToggleComponent,
  UploadComponent,
  WysiswygComponent,
} from '@ta/form-input';
import { InputBase } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';

import { InputAddressComponent } from '../input/address/address.component';
import { DynamicComponent } from '../input/dynamic/dynamic.component';
import { PanelComponent } from '../input/panel/panel.component';
import { InputTranslationComponent } from '../input/translation/translation.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'ta-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  standalone: true,
  imports: [
    NgTemplateOutlet,
    CheckboxComponent,
    InputChoicesComponent,
    ComponentInputComponent,
    CultureComponent,
    DatePickerComponent,
    DropdownComponent,
    LabelComponent,
    InputPhoneComponent,
    RadioComponent,
    InputSchemaComponent,
    SliderComponent,
    SwitchComponent,
    TextareaComponent,
    TextBoxComponent,
    TimePickerComponent,
    ToggleComponent,
    UploadComponent,
    InputImageComponent,
    InputImagesComponent,
    InputLogoComponent,
    WysiswygComponent,
    DynamicComponent,
    PanelComponent,
    InputTranslationComponent,
    InputAddressComponent,
    RatingComponent,
  ],
})
export class InputsComponent extends TaBaseComponent {
  inputModel = input.required<InputBase<any>>({ alias: 'input' });

  standaloneMode = input<boolean>(false, { alias: 'standalone' });

  onFocusObs = input<Observable<void>>({ alias: 'onFocus' });

  space = input<boolean>(true);

  matcher = new MyErrorStateMatcher();
}
