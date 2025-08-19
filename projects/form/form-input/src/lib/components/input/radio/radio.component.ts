import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import { LocalIconComponent } from '@ta/icons';
import { Component } from '@angular/core';

import { InputRadio } from '@ta/form-model';
import { TaSizes } from '@ta/styles';
import { TranslatePipe } from '@ta/translation';

import { CamAbstractInputComponent } from '../../abstract.component';
import { FormLabelComponent } from '../../label/label.component';

@Component({
selector: 'ta-input-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, NgClass, AsyncPipe, LocalIconComponent, FormLabelComponent, TranslatePipe],
})
export class RadioComponent extends CamAbstractInputComponent<InputRadio<any>> {
  constructor() {
    super();
  }

  public iconSize(option: { name?: string }): TaSizes {
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
