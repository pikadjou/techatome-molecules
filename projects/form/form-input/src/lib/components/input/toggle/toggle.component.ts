import { Component } from '@angular/core';

import { InputCheckBox } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
selector: 'ta-input-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],,
  standalone: true,
})
export class ToggleComponent extends CamAbstractInputComponent<InputCheckBox, boolean> {
  constructor() {
    super();
  }
}
