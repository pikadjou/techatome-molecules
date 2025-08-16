import { signal } from '@angular/core';

import { tap } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { IInputBase, InputBase } from './base';
import { IInputDropdown } from './dropdown';

export interface IFormSwitch extends IInputBase<unknown> {
  match: Observable<
    | { type: 'textbox' | 'checkbox' | 'number' | 'datePicker'; prop: unknown }
    | { type: 'dropdown'; prop: IInputDropdown<string> }
  >;
}

export class InputSwitch extends InputBase<unknown> {
  matchtype = signal<string>('');

  constructor(options: IFormSwitch) {
    super(options);
    this.controlType = 'switch';

    this._subscriberHandler.registerSubscription(
      options.match
        .pipe(
          tap(match => Object.assign(this, match.prop)),
          tap(match => this.matchtype.set(match.type))
        )
        .subscribe()
    );
  }
}
