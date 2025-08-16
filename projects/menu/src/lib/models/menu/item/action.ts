import { IMenuBaseOption, MenuBase } from './base';

export class MenuAction extends MenuBase {
  action: Function;

  constructor(options: IMenuIconOption) {
    super(options);
    this.action = options.action || null;
  }
}

export interface IMenuIconOption extends IMenuBaseOption {
  action: Function;
}
