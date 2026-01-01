import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { FontIconComponent } from '@ta/icons';
import { TaSizes } from '@ta/styles';
import { LabelComponent, SwiperLightComponent } from '@ta/ui';
import { TaAbstractComponent, TypedTemplateDirective } from '@ta/utils';

import { getFontIcon, hasFontIcon } from '../../helpers/icon-manager';
import { MenuAction } from '../../models/menu/item/action';
import { MenuBase } from '../../models/menu/item/base';
import { Menu, MenuIcon } from '../../models/public-api';
import { TaTranslationMenu } from '../../translation.service';

@Component({
  selector: 'ta-menu-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgTemplateOutlet,
    RouterModule,
    TranslateModule,
    FontIconComponent,
    TypedTemplateDirective,
    AsyncPipe,
    LabelComponent,
    SwiperLightComponent,
  ],
})
export class NavigationComponent extends TaAbstractComponent implements OnInit {
  menu = input.required<Menu>();

  container = input.required<'tags' | 'tab' | 'submenu'>();

  swiper = input<boolean>(false);

  options = input<{
    spaceElement?: TaSizes | null;
  }>({});

  manuallyChanged$ = input<Observable<string>>();

  readonly hasFontIcon = hasFontIcon;
  readonly getFontIcon = getFontIcon;

  public readonly typeItem!: { item: MenuBase | MenuAction | MenuIcon };
  public activeKey: string = '';

  constructor() {
    super();
    TaTranslationMenu.getInstance();
  }

  ngOnInit() {
    const defaultOpen = this.menu().elements.find(e => e.defaultOpen);

    if (!defaultOpen || !defaultOpen.callback) {
      return;
    }
    this.callback(defaultOpen);

    const manuallyChanged = this.manuallyChanged$();
    if (manuallyChanged) {
      this._registerSubscription(
        manuallyChanged.subscribe({
          next: (key: string) => {
            const found = this.menu().elements.find(element => element.key === key);
            if (found) {
              this.callback(found);
            }
          },
        })
      );
    }
  }

  public getSpaceClass() {
    if (this.options().spaceElement === null) {
      return '';
    }
    return `g-space-${this.options().spaceElement ?? 'lg'}`;
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
