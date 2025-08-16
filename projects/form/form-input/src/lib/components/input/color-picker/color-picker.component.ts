import { Component } from '@angular/core';

import { InputTextBox } from '@camelot/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent extends CamAbstractInputComponent<InputTextBox> {
  constructor() {
    super();
  }

  public onChangeValue(value: string) {
    this.input.formControl?.setValue(value);
  }
}
