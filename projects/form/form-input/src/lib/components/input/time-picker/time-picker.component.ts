import { Component } from '@angular/core';

import { InputTimePicker } from '@camelot/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent extends CamAbstractInputComponent<InputTimePicker> {
  constructor() {
    super();
  }
}
