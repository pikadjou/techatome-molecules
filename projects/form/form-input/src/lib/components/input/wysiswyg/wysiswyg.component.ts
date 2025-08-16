import { Component } from '@angular/core';

import { InputWysiswyg } from '@camelot/form-model';
import { EditorInputSavedData } from '@camelot/wysiswyg';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'cam-input-wysiswyg',
  templateUrl: './wysiswyg.component.html',
  styleUrls: ['./wysiswyg.component.scss'],
})
export class WysiswygComponent extends CamAbstractInputComponent<InputWysiswyg> {
  public set(value: EditorInputSavedData) {
    this.input.value = value.blocks;
  }
  public clear() {
    this.input.value = null;
  }
}
