import { Component } from '@angular/core';

import { InputRadio } from '@ta/form-model';
import { CamSizes } from '@ta/styles';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'ta-input-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent extends CamAbstractInputComponent<InputRadio<any>> {
  constructor() {
    super();
  }

  public iconSize(option: { name?: string }): CamSizes {
    return this.hasLabel(option) ? 'xs' : 'sm';
  }

  public hasLabel(option: { name?: string }): boolean {
    return !!option.name && option.name.length > 0;
  }

  onOptionClicked(optionId: any) {
    if (this.input.disabled) return;

    if (this.input.value === optionId) {
      this.input.formControl?.setValue(null);
    } else {
      this.input.formControl?.setValue(optionId);
    }
  }
}
