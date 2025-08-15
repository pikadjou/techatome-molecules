import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputNumber, InputTextBox } from '@ta/form-model';
import { TranslatePipe } from '@ta/utils';
import { FormLabelComponent } from '../../label/label.component';
import { MatIconModule } from '@angular/material/icon';
import { TextareaComponent } from "../textarea/textarea.component";
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'ta-input-textbox',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, TranslatePipe, FormLabelComponent, TextareaComponent],
})
export class TextBoxComponent implements OnInit {
  @Input()
  input!: InputTextBox | InputNumber;

  @Input()
  matcher!: ErrorStateMatcher;

  @Output()
  valueChanged = new EventEmitter();

  @Input()
  space = true;

  public validators = Validators;
  public hide = false;

  get isPassword() {
    return this.input.type === 'password';
  }

  constructor() {}

  ngOnInit() {
    if (this.matcher === null) {
      this.matcher = new ErrorStateMatcher();
    }
    if (this.isPassword) {
      this.hide = true;
    }
  }

  public onChange(value: any) {
    this.valueChanged.emit(value);
  }

  public iconClicked() {
    if (this.input.iconClicked) this.input.iconClicked();
  }
}
