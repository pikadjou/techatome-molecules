import { Component } from '@angular/core';

import { InputSlider } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'ta-input-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent extends CamAbstractInputComponent<InputSlider> {
  constructor() {
    super();
  }
}
