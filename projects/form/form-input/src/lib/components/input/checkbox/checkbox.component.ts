import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputCheckBox } from '@ta/form-model';
import { TaBaseComponent, TranslatePipe } from '@ta/utils';

@Component({
  selector: 'ta-input-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, TranslatePipe, MatCheckbox],
})
export class CheckboxComponent extends TaBaseComponent {
  @Input()
  input!: InputCheckBox;

  constructor() {
    super();
  }
}
