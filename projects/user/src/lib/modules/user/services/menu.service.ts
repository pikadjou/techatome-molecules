import { Injectable } from '@angular/core';

import { Menu, MenuIcon } from '@ta/menu';

@Injectable({
  providedIn: 'root',
})
export class CamUserMenuService {
  constructor() {}

  public infosMenu() {
    const menu = [
      new MenuIcon({
        key: 'language',
        label: 'user.language',
        order: 2,
        style: 'dark',
        icon: 'language',
        iconsColor: 'icon-color-icon-tertiary',
      }),
      new MenuIcon({
        key: 'infos',
        label: 'user.infos',
        order: 3,
        style: 'dark',
        icon: 'infos',
        iconsColor: 'icon-color-icon-tertiary',
      }),
      new MenuIcon({
        key: 'params',
        label: 'user.params',
        order: 4,
        style: 'dark',
        icon: 'label',
        iconsColor: 'icon-color-icon-tertiary',
      }),
    ];

    return new Menu({
      elements: menu.sort((a, b) => a.order - b.order),
      direction: 'vertical',
    });
  }
}
