import { Component, input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextBox } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';
import { TextareaComponent } from '../textarea/textarea.component';

@Component({
  selector: 'ta-input-textbox',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  standalone: true,
  imports: [FontIconComponent, ReactiveFormsModule, TextareaComponent, InputLayoutComponent],
})
export class TextBoxComponent extends TaAbstractInputComponent<InputTextBox, string> implements OnInit {
  space = input<boolean>(true);

  public hide = false;

  get isPassword() {
    return this.input.type === 'password';
  }

  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    if (this.isPassword) {
      this.hide = true;
    }
  }

  public iconClicked() {
    if (this.input.iconClicked) this.input.iconClicked();
  }
}
