import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { InputImages } from '@ta/form-model';
import { UserLogoComponent } from '@ta/ui';

import { TaAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'ta-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
  standalone: true,
  imports: [NgIf, UserLogoComponent],
})
export class InputImageComponent extends TaAbstractInputComponent<InputImages> {
  get selection(): string[] {
    return this.input.value;
  }

  get userInfo() {
    return this.selection.map(selection => ({
      picture: selection,
      firstname: '',
      lastname: '',
    }))[0];
  }
}
