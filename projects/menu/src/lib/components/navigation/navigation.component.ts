import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CamSizes } from '@camelot/styles';
import { CamAbstractComponent } from '@camelot/utils';

import { getFontIcon, hasFontIcon } from '../../helpers/icon-manager';
import { MenuAction } from '../../models/menu/item/action';
import { MenuBase } from '../../models/menu/item/base';
import { Menu, MenuIcon } from '../../models/public-api';

@Component({
  selector: 'cam-menu-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent extends CamAbstractComponent implements OnInit {
  @Input()
  menu!: Menu;

  @Input()
  container!: 'tags' | 'tab';

  @Input()
  swiper = false;

  @Input()
  options: {
    spaceElement?: CamSizes | null;
  } = {};

  @Input()
  manuallyChanged$?: Observable<string>;

  readonly hasFontIcon = hasFontIcon;
  readonly getFontIcon = getFontIcon;

  public readonly typeItem!: { item: MenuBase | MenuAction | MenuIcon };
  public activeKey: string = '';

  constructor() {
    super();
  }

  ngOnInit() {
    const defaultOpen = this.menu.elements.find(e => e.defaultOpen);

    if (!defaultOpen || !defaultOpen.callback) {
      return;
    }
    this.callback(defaultOpen);

    if (this.manuallyChanged$) {
      this._registerSubscription(
        this.manuallyChanged$.subscribe({
          next: (key: string) => {
            const found = this.menu.elements.find(element => element.key === key);
            if (found) {
              this.callback(found);
            }
          },
        })
      );
    }
  }

  public getSpaceClass() {
    if (this.options.spaceElement === null) {
      return '';
    }
    return `g-space-${this.options.spaceElement ?? 'lg'}`;
  }
  public getLink(item: MenuIcon | MenuAction | MenuBase) {
    if (item.link && item.link !== '') {
      return item.link;
    }

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
