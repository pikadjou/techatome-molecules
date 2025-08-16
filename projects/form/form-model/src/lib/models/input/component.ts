import { TemplateRef } from '@angular/core';

import { CamIconType } from '@ta/icons';
import { Logger } from '@ta/server';
import { Subject } from 'rxjs';

import { IInputBase, InputBase } from './base';

export type TypeComponentInputToken = {
  selectedValue$: Subject<string>;
};
export interface IInputComponent<T> extends IInputBase<T> {
  icon?: CamIconType;
  template?: TemplateRef<TypeComponentInputToken>;
}

export class InputComponent extends InputBase<string> {
  override controlType = 'component';
  icon?: CamIconType | null;
  template?: TemplateRef<TypeComponentInputToken>;

  readonly selectedValue$ = new Subject<string>();

  constructor(options: IInputComponent<string> = {}) {
    super(options);
    this.icon = options.icon || null;
    this.template = options.template;

    if (!this.template) {
      Logger.LogError('No template for InputComponent');
    }

    this._subscriberHandler.registerSubscription(
      this.selectedValue$.subscribe({
        next: value => (this.value = value),
      })
    );
  }
}
