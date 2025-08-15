import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { InputCheckBox } from '@ta/form-model';
import { TaBaseComponent, TranslatePipe } from '@ta/utils';

@Component({
  selector: 'ta-input-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule, MatButtonToggleModule, MatInputModule, FormsModule, ReactiveFormsModule, TranslatePipe, MatSlideToggleModule],

})
export class ToggleComponent extends TaBaseComponent {
  @Input()
  input!: InputCheckBox;

  constructor() {
    super();
  }
}
