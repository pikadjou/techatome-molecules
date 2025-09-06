import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent, LocalIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { getFontIcon, getIcon, hasFontIcon, hasIconImage } from '../../helpers/icon-manager';
import { MenuAction } from '../../models/menu/item/action';
import { MenuBase } from '../../models/menu/item/base';
import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';
import { TaTranslationMenu } from '../../translation.service';

@Component({
  selector: 'ta-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterModule, TranslateModule, FontIconComponent, LocalIconComponent],
})
export class ContextMenuComponent extends TaBaseComponent {
  @Input()
  menu!: Menu;

  constructor() {
    super();
    TaTranslationMenu.getInstance();
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
