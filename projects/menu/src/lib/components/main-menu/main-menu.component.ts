import { Component, Input, inject } from '@angular/core';

import { CamSharedMenuService } from '@camelot/services';
import { CamBaseComponent } from '@camelot/utils';

import { Menu } from '../../models/menu/menu';

@Component({
  selector: 'cam-main-menu',
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
