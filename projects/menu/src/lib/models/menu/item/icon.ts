import { TaIconType } from '@ta/icons';

import { IMenuBaseOption, MenuBase } from './base';

export class MenuIcon extends MenuBase {
  icon: string | TaIconType;

  constructor(options: IMenuIconOption) {
    super(options);
    this.icon = options.icon || '';
  }
}

export interface IMenuIconOption extends IMenuBaseOption {
  icon?: string | TaIconType;
}
