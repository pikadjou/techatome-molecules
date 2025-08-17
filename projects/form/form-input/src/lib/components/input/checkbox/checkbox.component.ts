import { Component } from '@angular/core';

import { InputCheckBox } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
selector: 'ta-input-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],,
  standalone: true,
})
export class CheckboxComponent extends CamAbstractInputComponent<InputCheckBox, boolean> {
  constructor() {
    super();
  }
}
