import { AsyncPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TaBaseComponent } from '@ta/utils';

import { Menu } from '../../models/menu/menu';
import { MenuItemComponent } from './item/menu-item.component';

@Component({
  selector: 'ta-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [NgClass, AsyncPipe, MenuItemComponent],
})
export class MenuComponent extends TaBaseComponent {
  @Input()
  menu!: Menu;

  @Input()
  container!: 'second' | 'overflow' | 'main' | 'panel';

  get containerCss() {
    switch (this.container) {
      case 'overflow':
        return 'overflow vertical';
      case 'second':
        return 'second ' + this.menu.direction;
      case 'main':
        return 'main-nav ' + this.menu.direction;
      default:
        return '';
    }
  }

  constructor() {
    super();
  }
}
