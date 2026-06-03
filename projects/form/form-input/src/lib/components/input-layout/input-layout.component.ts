import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { InputBase } from '@ta/form-model';

import { FormLabelComponent } from '../label/label.component';
import { InputErrorComponent } from './input-error/input-error.component';

@Component({
  selector: 'ta-input-layout',
  templateUrl: './input-layout.component.html',
  styleUrls: ['./input-layout.component.scss'],
  standalone: true,
  imports: [FormLabelComponent, InputErrorComponent, NgClass],
})
export class InputLayoutComponent {
  inputModel = input.required<InputBase<any>>({ alias: 'input' });
}
