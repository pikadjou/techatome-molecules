import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TaBaseComponent } from '@ta/utils';

import { Menu } from '../../models/menu/menu';
import { MenuItemComponent } from './item/menu-item.component';

@Component({
  selector: 'ta-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, NgClass, AsyncPipe, MenuItemComponent],
})
export class MenuComponent extends TaBaseComponent {
  @Input()
  menu!: Menu;

  @Input()
  container!: 'second' | 'overflow' | 'main' | 'panel';

  get containerCss() {
    switch (this.container) {
      case 'overflow':
        return 'overflow';
      case 'second':
        return 'second';
      case 'main':
        return 'main-nav responsive';
      default:
        return '';
    }
  }

  constructor() {
    super();
  }
}
