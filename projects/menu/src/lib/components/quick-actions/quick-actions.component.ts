import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';

@Component({
  selector: 'cam-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss'],
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

  constructor() {}

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
