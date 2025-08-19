import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { InputTimePicker } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
selector: 'ta-input-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  standalone: true,
  imports: [InputLayoutComponent, ReactiveFormsModule, MatInputModule, NgxMaterialTimepickerModule],
})
export class TimePickerComponent extends CamAbstractInputComponent<InputTimePicker> {
  constructor() {
    super();
  }
}
