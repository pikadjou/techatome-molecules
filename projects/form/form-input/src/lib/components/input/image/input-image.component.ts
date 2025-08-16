import { Component } from '@angular/core';

import { InputImages } from '@camelot/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
})
export class InputImageComponent extends CamAbstractInputComponent<InputImages> {
  get selection(): string[] {
    return this.input.value;
  }

  get userInfo() {
    return this.selection.map((selection) => ({
      profilePictureUrl: selection,
      naming: null,
    }))[0];
  }
}
