import { Component, Input } from '@angular/core';

import { CamBaseComponent } from '@camelot/utils';

import {
  getFontIcon,
  getIcon,
  hasFontIcon,
  hasIconImage,
} from '../../helpers/icon-manager';
import { MenuAction } from '../../models/menu/item/action';
import { MenuBase } from '../../models/menu/item/base';
import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';

@Component({
  selector: 'cam-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent extends CamBaseComponent {
  @Input()
  menu!: Menu;

  constructor() {
    super();
  }

  public hasFontIcon(item: MenuIcon | MenuAction | MenuBase): boolean {
    return hasFontIcon(item);
  }

  public hasIconImage(item: MenuIcon | MenuAction | MenuBase): boolean {
    return hasIconImage(item);
  }

  public getIcon(item: MenuIcon | MenuAction | MenuBase) {
    return getIcon(item);
  }

  public getFontIcon(item: Menu | MenuIcon | MenuBase) {
    return getFontIcon(item);
  }

  public getLink(item: MenuIcon | MenuAction | MenuBase) {
    if (item.link && item.link !== '') return item.link;

    return '';
  }

  public getRoute(item: MenuIcon | MenuAction | MenuBase) {
    return item.disabled ? [] : [this.getLink(item)];
  }
}
