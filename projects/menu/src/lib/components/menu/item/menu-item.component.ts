import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

import { TemplateModalContainer, TemplateModalContainerData } from '@ta/ui';
import { CamBaseComponent } from '@ta/utils';

import { getFontIcon, getIcon, hasFontIcon, hasIconImage } from '../../../helpers/icon-manager';
import { MenuAction } from '../../../models/menu/item/action';
import { MenuBase } from '../../../models/menu/item/base';
import { MenuIcon } from '../../../models/menu/item/icon';
import { MenuPanel } from '../../../models/menu/item/panel';

@Component({
  selector: 'ta-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent extends CamBaseComponent implements OnInit {
  @Input()
  item!: MenuIcon | MenuAction | MenuBase | MenuPanel;

  @Input()
  styleType: String = 'bloc';

  @ViewChild(MatMenuTrigger) triggerMenu!: MatMenuTrigger;

  public readonly typeToken!: MenuIcon | MenuAction | MenuBase | MenuPanel;
  public isOpen: boolean = false;

  constructor(public modal: MatDialog) {
    super();
  }

  ngOnInit() {
    this.isOpen = this.item.defaultOpen;
  }

  public getStyleType() {
    return this.styleType + ' ' + this.item.style;
  }

  public hasFontIcon(): boolean {
    return hasFontIcon(this.item);
  }

  public hasIconImage(): boolean {
    return hasIconImage(this.item);
  }

  public getIcon() {
    return getIcon(this.item);
  }

  public getFontIcon() {
    return getFontIcon(this.item);
  }

  public hasChild(): boolean {
    return this.item.children.length > 0;
  }
  public toggle() {
    this.isOpen = !this.isOpen;
  }

  public getTemplate() {
    if (this.item.isMenuPanel) {
      return (<MenuPanel>this.item).template;
    }
    return null;
  }

  public trackByFn(index: any, item: MenuBase) {
    return this.item + '-' + item.key;
  }

  public executeCallback() {
    const myTemplate = this.getTemplate();
    if (myTemplate) {
      if (this.breakpoints.isLessThanXS) {
        this.modal.open<TemplateModalContainer, TemplateModalContainerData>(TemplateModalContainer, {
          data: {
            template: myTemplate,
          },
        });
      } else {
        this.triggerMenu.openMenu();
      }
    } else {
      this.item.callback?.();
    }
  }

  public getLink() {
    if (this.item.link && this.item.link !== '') return this.item.link;

    return '';
  }
}
