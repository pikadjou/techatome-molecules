import { Component } from '@angular/core';

import { InputCheckBox } from '@camelot/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent extends CamAbstractInputComponent<InputCheckBox, boolean> {
  constructor() {
    super();
  }
}
