import { Component } from '@angular/core';

import { InputLabel } from '@camelot/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent extends CamAbstractInputComponent<InputLabel> {
  constructor() {
    super();
  }
}
