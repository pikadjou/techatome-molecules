import { Component } from '@angular/core';

import { InputSwitch } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';
import { TextBoxComponent } from '../textbox/text-box.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
selector: 'ta-input-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  standalone: true,
  imports: [TextBoxComponent, CheckboxComponent, DatePickerComponent, DropdownComponent],
})
export class SwitchComponent extends CamAbstractInputComponent<InputSwitch> {
  constructor() {
    super();
  }
}
