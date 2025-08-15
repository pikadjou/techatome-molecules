import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { InputWysiswyg } from '@ta/form-model';
import { TaBaseComponent, TranslatePipe } from '@ta/utils';
import { EditorInputComponent, WysiswgBlockData } from '@ta/wysiswyg';
import { LabelComponent } from '../public-api';
import { FormLabelComponent } from '../../label/label.component';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ta-input-wysiswyg',
  templateUrl: './wysiswyg.component.html',
  styleUrls: ['./wysiswyg.component.scss'],
  standalone: true,
  imports: [NgIf, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, TranslatePipe, FormLabelComponent, EditorInputComponent],
})
export class WysiswygComponent extends TaBaseComponent {
  @Input()
  input!: InputWysiswyg;

  @Input()
  matcher!: ErrorStateMatcher;

  public set(value: WysiswgBlockData[]) {
    this.input.value = value;
  }
  public clear() {
    this.input.value = null;
  }
}
