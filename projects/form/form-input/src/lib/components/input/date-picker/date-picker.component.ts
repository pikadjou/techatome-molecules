import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { isEqual } from 'date-fns';

import { InputDatePicker } from '@ta/form-model';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, InputLayoutComponent],
})
export class DatePickerComponent extends TaAbstractInputComponent<InputDatePicker> {
  @ViewChild('picker') picker!: MatDatepicker<any>;

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor() {
    super();

    this._registerSubscription(
      this.range.valueChanges.subscribe({
        next: (value) => {
          if (value.start && value.end && isEqual(value.start, value.end)) {
            this.input.value = value.start;
            return;
          }
          this.input.value = <any>{
            start: value.start,
            end: value.end,
          };
        },
      }),
    );
  }

  public onDateSelect(event: MatDatepickerInputEvent<Date>) {
    if (!event.value) {
      return;
    }
    this.input.value = event.value;
  }
}
