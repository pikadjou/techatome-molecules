import { Component } from '@angular/core';

import { InputCheckBox } from '@ta/form-model';

import { TaAbstractInputComponent } from '../../abstract.component';
import { FormLabelComponent } from '../../label/label.component';

@Component({
  selector: 'ta-input-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [FormLabelComponent],
})
export class CheckboxComponent extends TaAbstractInputComponent<InputCheckBox, boolean> {
  constructor() {
    super();
  }
}
