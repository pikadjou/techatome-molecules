import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';

import { InputRadio } from '@ta/form-model';
import { TaSizes } from '@ta/styles';
import { TaBaseComponent, TranslatePipe } from '@ta/utils';
import { FormLabelComponent } from '../../label/label.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'ta-input-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf, MatFormFieldModule, MatRadioModule, FormsModule, ReactiveFormsModule, TranslatePipe, FormLabelComponent],
})
export class RadioComponent extends TaBaseComponent {
  @Input() input!: InputRadio<any>;

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
