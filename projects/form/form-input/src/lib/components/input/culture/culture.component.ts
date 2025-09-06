import { Component } from '@angular/core';

import { InputCulture } from '@ta/form-model';

import { TaAbstractInputComponent } from '../../abstract.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'ta-input-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss'],
  standalone: true,
  imports: [DropdownComponent],
})
export class CultureComponent extends TaAbstractInputComponent<InputCulture> {
  constructor() {
    super();
  }
}
