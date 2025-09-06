import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { FontIconComponent } from '@ta/icons';
import { NotificationBadgeComponent, NotificationBadgeContainerComponent, SwiperLightComponent } from '@ta/ui';
import { TaAbstractComponent } from '@ta/utils';

import { getFontIcon, hasFontIcon } from '../../helpers/icon-manager';
import { MenuAction } from '../../models/menu/item/action';
import { MenuBase } from '../../models/menu/item/base';
import { Menu, MenuIcon } from '../../models/public-api';
import { TaTranslationMenu } from '../../translation.service';

// Type défini localement pour éviter la dépendance vers @ta/styles
type TaSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'big';

@Component({
  selector: 'ta-menu-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    NgTemplateOutlet,
    RouterModule,
    TranslateModule,
    FontIconComponent,
    NotificationBadgeComponent,
    NotificationBadgeContainerComponent,
    SwiperLightComponent,
  ],
})
export class NavigationComponent extends TaAbstractComponent implements OnInit {
  @Input()
  menu!: Menu;

  @Input()
  container!: 'tags' | 'tab';

  @Input()
  swiper = false;

  @Input()
  options: {
    spaceElement?: TaSizes | null;
  } = {};

  @Input()
  manuallyChanged$?: Observable<string>;

  readonly hasFontIcon = hasFontIcon;
  readonly getFontIcon = getFontIcon;

  public readonly typeItem!: { item: MenuBase | MenuAction | MenuIcon };
  public activeKey: string = '';

  constructor() {
    super();
    TaTranslationMenu.getInstance();
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
