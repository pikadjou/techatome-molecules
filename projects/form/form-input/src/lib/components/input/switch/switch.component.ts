import { Component } from '@angular/core';

import { InputSwitch } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'ta-input-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent extends CamAbstractInputComponent<InputSwitch> {
  constructor() {
    super();
  }
}
