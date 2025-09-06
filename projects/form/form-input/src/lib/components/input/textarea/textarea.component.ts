import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextarea } from '@ta/form-model';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  standalone: true,
  imports: [InputLayoutComponent, ReactiveFormsModule],
})
export class TextareaComponent extends TaAbstractInputComponent<InputTextarea> {
  constructor() {
    super();
  }
}
