import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { InputTimePicker } from '@ta/form-model';
import { TranslatePipe } from '@ta/translation';
import { CamDirectivePipeModule } from '@ta/utils';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { TimePickerComponent } from './time-picker.component';

type StoryType = TimePickerComponent;

export default {
  title: 'FORM/TimePicker',
  component: TimePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NgxMaterialTimepickerModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule,
        MatInputModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        CamDirectivePipeModule,
        ReactiveFormsModule,
        TranslatePipe,
      ],
    }),
  ],
  tags: ['autodocs'],
  render: args => {
    const props = args;

    return {
      props,
      template: `
        <ta-input-time-picker [input]="input"></ta-input-time-picker>
      `,
    };
  },
  args: {
    input: new InputTimePicker({
      key: 'key',
      label: 'label',
    }),
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
