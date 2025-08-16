import { Component } from '@angular/core';

import { InputCulture } from '@camelot/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss'],
})
export class CultureComponent extends CamAbstractInputComponent<InputCulture> {
  constructor() {
    super();
  }
}
