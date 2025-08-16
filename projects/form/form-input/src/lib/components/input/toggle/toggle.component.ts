import { Component } from '@angular/core';

import { InputCheckBox } from '@camelot/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent extends CamAbstractInputComponent<InputCheckBox, boolean> {
  constructor() {
    super();
  }
}
