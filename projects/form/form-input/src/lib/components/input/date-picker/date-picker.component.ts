import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

import { InputDatePicker } from '@ta/form-model';
import { isEqual } from 'date-fns';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'ta-input-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent extends CamAbstractInputComponent<InputDatePicker> {
  @ViewChild('picker') picker!: MatDatepicker<any>;

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor() {
    super();

    this._registerSubscription(
      this.range.valueChanges.subscribe({
        next: value => {
          if (value.start && value.end && isEqual(value.start, value.end)) {
            this.input.value = value.start;
            return;
          }
          this.input.value = <any>{
            start: value.start,
            end: value.end,
          };
        },
      })
    );
  }

  public onDateSelect(event: MatDatepickerInputEvent<Date>) {
    if (!event.value) {
      return;
    }
    this.input.value = event.value;
  }
}
