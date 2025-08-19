import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputCheckBox } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';
import { FormLabelComponent } from '../../label/label.component';

@Component({
selector: 'ta-input-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  standalone: true,
  imports: [FormLabelComponent, ReactiveFormsModule],
})
export class ToggleComponent extends CamAbstractInputComponent<InputCheckBox, boolean> {
  constructor() {
    super();
  }
}
