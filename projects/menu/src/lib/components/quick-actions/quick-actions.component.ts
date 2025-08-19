import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LocalIconComponent } from '@ta/icons';
import { SwiperComponent } from '@ta/ui';

import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';
import { CamTranslationMenu } from '../../translation.service';

@Component({
selector: 'ta-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss'],
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, TranslateModule, LocalIconComponent, SwiperComponent],
})
export class QuickActionsComponent {
  @Input()
  tabSelection: string | null = null;

  @Input()
  menu!: Menu;

  @Input()
  public elementPerPage: number = 3.5;

  @Input()
  canDeselect: boolean = false;

  @Output()
  tabSelected = new EventEmitter<string | null>();

  typeToken!: { element: MenuIcon };

  constructor() {
    CamTranslationMenu.getInstance();
  }

  public onQuickActionSelected(menuIcon: MenuIcon) {
    if (menuIcon.disabled) {
      return;
    }

    this.tabSelected.emit(this._selectedValue(menuIcon.key));
  }

  private _selectedValue(newSelection: string): string | null {
    if (this.canDeselect && this.tabSelection === newSelection) return null;

    return newSelection;
  }
}
