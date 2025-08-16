import { Component } from '@angular/core';

import { InputTextarea } from '@camelot/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends CamAbstractInputComponent<InputTextarea> {
  constructor() {
    super();
  }
}
