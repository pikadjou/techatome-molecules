import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import {
  InputAddressComponent,
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
  WysiswygComponent
} from '@ta/form-input';
import { InputBase } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import { Observable } from 'rxjs';
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
    InputAddressComponent,
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
    WysiswygComponent,
    DynamicComponent,
    PanelComponent,
    InputTranslationComponent
  ],
})
export class InputsComponent extends TaBaseComponent {
  @Input()
  input!: InputBase<any>;

  @Input()
  standalone = false;

  @Input()
  onFocus!: Observable<void>;

  @Input()
  space = true;

  matcher = new MyErrorStateMatcher();
}
