import { Component } from '@angular/core';

import { InputLabel } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
selector: 'ta-input-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],,
  standalone: true,
})
export class LabelComponent extends CamAbstractInputComponent<InputLabel> {
  constructor() {
    super();
  }
}
