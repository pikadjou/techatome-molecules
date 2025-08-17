import { Component } from '@angular/core';

import { InputWysiswyg } from '@ta/form-model';
import { EditorInputSavedData } from '@ta/wysiswyg';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
selector: 'ta-input-wysiswyg',
  templateUrl: './wysiswyg.component.html',
  styleUrls: ['./wysiswyg.component.scss'],,
  standalone: true,
})
export class WysiswygComponent extends CamAbstractInputComponent<InputWysiswyg> {
  public set(value: EditorInputSavedData) {
    this.input.value = value.blocks;
  }
  public clear() {
    this.input.value = null;
  }
}
