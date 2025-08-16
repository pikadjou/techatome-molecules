import { Component } from '@angular/core';

import { InputSwitch } from '@camelot/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent extends CamAbstractInputComponent<InputSwitch> {
  constructor() {
    super();
  }
}
