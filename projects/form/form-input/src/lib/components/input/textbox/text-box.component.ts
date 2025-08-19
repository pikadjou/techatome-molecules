import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontIconComponent } from '@ta/icons';
import { Component, Input, OnInit } from '@angular/core';

import { InputTextBox } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
selector: 'ta-input-textbox',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  standalone: true,
  imports: [NgIf, FontIconComponent, ReactiveFormsModule, TextareaComponent, InputLayoutComponent],
})
export class TextBoxComponent extends CamAbstractInputComponent<InputTextBox> implements OnInit {
  @Input()
  space = true;

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
