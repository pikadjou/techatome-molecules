import { Component, Input } from '@angular/core';

import { CamBaseComponent } from '@camelot/utils';

import { Menu } from '../../models/menu/menu';

@Component({
  selector: 'cam-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends CamBaseComponent {
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
