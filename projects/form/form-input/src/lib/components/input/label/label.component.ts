import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputLabel } from '@ta/form-model';
import { TranslatePipe } from '@ta/utils';
import { FormLabelComponent } from '../../label/label.component';

@Component({
  selector: 'ta-input-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, TranslatePipe, FormLabelComponent],
})
export class LabelComponent {
  @Input()
  input!: InputLabel;

  constructor() {}
}
