import { Component } from '@angular/core';

import { InputCulture } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
selector: 'ta-input-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss'],,
  standalone: true,
})
export class CultureComponent extends CamAbstractInputComponent<InputCulture> {
  constructor() {
    super();
  }
}
