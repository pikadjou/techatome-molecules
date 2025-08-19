import { FontIconComponent } from '@ta/icons';
import { StopPropagationDirective } from '@ta/utils';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { InputLayoutComponent } from '../../input-layout/input-layout.component';

import { InputNumber, InputTextBox } from '@ta/form-model';
import { TaSizes } from '@ta/styles';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
selector: 'ta-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  standalone: true,
  imports: [FontIconComponent, StopPropagationDirective, ReactiveFormsModule, TranslateModule, InputLayoutComponent],
})
export class SearchFieldComponent
  extends CamAbstractInputComponent<InputTextBox | InputNumber>
  implements OnInit, OnDestroy
{
  @Input()
  isOpen: boolean = false;

  @Input()
  placeholder: string = '';

  @Input()
  space = true;

  @Input()
  type: TaSizes = 'sm';

  @Output()
  valueCompleted = new EventEmitter();

  public isDeployed: boolean = false;
  public focusTextBox: boolean = false;

  constructor() {
    super();
  }
  override ngOnInit() {
    super.ngOnInit();
    this.isDeployed = this.isOpen;
    if (this.input.value) {
      this.isDeployed = true;
    }
    this.input.createFormControl();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.input.destroy();
  }

  public iconClicked() {
    if (!this.isDeployed) {
      this.isDeployed = true;
      return;
    }
    if (this.input.value) {
      this.valueCompleted.emit(this.input.value);
      return;
    }
    if (!this.isOpen) {
      this.isDeployed = false;
    }
  }

  public focus() {
    this.focusTextBox = true;
  }

  public focusOut() {
    this.focusTextBox = false;
    if (!this.isOpen) {
      this.isDeployed = !!this.input.value;
    }
  }

  @HostListener('window:keyup', ['$event'])
  public keyPress = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      this.iconClicked();
    }
  };
}
