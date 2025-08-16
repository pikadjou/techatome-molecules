import { Observable, of } from 'rxjs';

import { CamIconType } from '@camelot/icons';

import { IInputBase, InputBase } from './base';

export interface IInputRadio<T> extends IInputBase<T> {
  options?: Observable<{ id: T; name?: string; icon?: CamIconType }[]>;
}
export class InputRadio<T> extends InputBase<T> {
  override controlType = 'radio';
  options: Observable<{ id: T; name?: string; icon?: CamIconType }[]>;

  constructor(options: IInputRadio<T> = {}) {
    super(options);
    this.options = options['options'] || of([]);
    this.type = 'radioGroup';
  }
}
