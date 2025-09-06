import { Observable, of } from 'rxjs';

import { TaIconType } from '@ta/icons';

import { IInputBase, InputBase } from './base';

export interface IInputRadio<T> extends IInputBase<T> {
  options?: Observable<{ id: T; name?: string; icon?: TaIconType }[]>;
}
export class InputRadio<T> extends InputBase<T> {
  override controlType = 'radio';
  options: Observable<{ id: T; name?: string; icon?: TaIconType }[]>;

  constructor(options: IInputRadio<T> = {}) {
    super(options);
    this.options = options['options'] || of([]);
    this.type = 'radioGroup';
  }
}
