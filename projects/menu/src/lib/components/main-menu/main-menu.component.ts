import { Component, Input, inject } from '@angular/core';

import { CamSharedMenuService } from '@ta/services';
import { CamBaseComponent } from '@ta/utils';

import { Menu } from '../../models/menu/menu';

@Component({
  selector: 'ta-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent extends CamBaseComponent {
  @Input()
  menuMain!: Menu;

  @Input()
  menuUser!: Menu;

  public sharedMenu = inject(CamSharedMenuService);

  public toggleView() {
    this.sharedMenu.isMinimized$.next(!this.sharedMenu.isMinimized$.getValue());
  }
}
