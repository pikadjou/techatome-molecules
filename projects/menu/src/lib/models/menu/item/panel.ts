import { TemplateRef } from "@angular/core";

import { IMenuIconOption, MenuIcon } from "./icon";

export class MenuPanel extends MenuIcon {
  template: TemplateRef<any>;

  override get isMenuPanel() {
    return true;
  }

  constructor(options: IMenuPanelOption) {
    super(options);
    this.template = options.template;
  }
}

export interface IMenuPanelOption extends IMenuIconOption {
  template: TemplateRef<any>;
}
