import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputSlider } from '@ta/form-model';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [InputLayoutComponent, ReactiveFormsModule],
})
export class SliderComponent extends TaAbstractInputComponent<InputSlider> {
  constructor() {
    super();
  }
}
