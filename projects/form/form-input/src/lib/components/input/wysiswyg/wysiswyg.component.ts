import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputWysiswyg } from '@ta/form-model';
import { TaTranslationService } from '@ta/translation';
import { EditorInputComponent, EditorInputSavedData } from '@ta/wysiswyg';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-wysiswyg',
  templateUrl: './wysiswyg.component.html',
  styleUrls: ['./wysiswyg.component.scss'],
  standalone: true,
  imports: [EditorInputComponent, InputLayoutComponent, ReactiveFormsModule],
})
export class WysiswygComponent extends TaAbstractInputComponent<InputWysiswyg> {
  private _translationService = inject(TaTranslationService);

  get translatedPlaceholder(): string | undefined {
    const key = this.input.placeholder;
    return key ? this._translationService.instant(key) : undefined;
  }
  public set(value: EditorInputSavedData) {
    this.input.value = value.blocks;
  }
  public clear() {
    this.input.value = null;
  }
}
