import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent, LocalIconComponent } from '@ta/icons';
import { SwiperLightComponent } from '@ta/ui';

import { getFontIcon, getIcon, hasFontIcon, hasIconImage } from '../../helpers/icon-manager';
import { MenuAction } from '../../models/menu/item/action';
import { MenuBase } from '../../models/menu/item/base';
import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';
import { TaTranslationMenu } from '../../translation.service';

/*
 ** @deprecated
 */
@Component({
  selector: 'ta-toggle-navigation',
  templateUrl: './toggle-navigation.component.html',
  styleUrls: ['./toggle-navigation.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgTemplateOutlet,
    RouterModule,
    TranslateModule,
    FontIconComponent,
    LocalIconComponent,
    SwiperLightComponent,
  ],
})
export class ToggleNavigationComponent implements OnInit {
  @Input()
  menu!: Menu;

  @Input()
  container!: 'tab' | 'switch';

  public activeKey: string = '';
  public readonly typeItem!: { item: MenuBase | MenuAction | MenuIcon };
  public notifEnabled: boolean = false;

  constructor() {
    TaTranslationMenu.getInstance();
  }

  get containerCss() {
    return this.container ?? '';
  }

  ngOnInit() {
    if (this.menu.elements.find(element => element.options?.notificationBadge?.label)) {
      this.notifEnabled = true;
    }

    const activeItem = this.menu.elements.find(item => item.defaultOpen);
    if (activeItem) {
      this.callback(activeItem);
    }
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

  public getFontIcon(item: MenuIcon | MenuAction | MenuBase) {
    return getFontIcon(item);
  }

  public getLink(item: MenuIcon | MenuAction | MenuBase) {
    if (item.link && item.link !== '') return item.link;

    return ''; // TODO this._navigationService.currentPageUrl;
  }

  public callback(item: MenuBase) {
    if (item.disabled) {
      return;
    }
    this.activeKey = item.key;
    if (item.callback) {
      item.callback();
    }
  }

  public isActive(item: MenuBase) {
    return item.key === this.activeKey;
  }
}
