import { Component } from '@angular/core';

import { InputTextarea } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
selector: 'ta-input-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],,
  standalone: true,
})
export class TextareaComponent extends CamAbstractInputComponent<InputTextarea> {
  constructor() {
    super();
  }
}
