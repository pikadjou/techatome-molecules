import { Component } from '@angular/core';

import { InputSlider } from '@camelot/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent extends CamAbstractInputComponent<InputSlider> {
  constructor() {
    super();
  }
}
