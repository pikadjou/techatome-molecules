import { Component, Input, OnInit } from '@angular/core';

import { InputTextBox } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'ta-input-textbox',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
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
