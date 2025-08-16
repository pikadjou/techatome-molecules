import { CamIconType } from '@ta/icons';

import { IInputBase, InputBase } from './base';

export interface IInputTextBox<T> extends IInputBase<T> {
  type?: string;
  icon?: CamIconType;
  iconClicked?: () => void;
}

export class InputTextBox<T = string> extends InputBase<T> {
  override controlType = 'textbox';
  icon?: CamIconType | null;
  iconClicked?: () => void;

  constructor(options: IInputTextBox<string> = {}) {
    super(options);
    this.type = options.type || 'text';
    this.icon = options.icon || null;
    this.iconClicked = options.iconClicked;
  }
}
