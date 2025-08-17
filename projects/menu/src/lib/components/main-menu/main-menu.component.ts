import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { CamSharedMenuService } from '@ta/services';
import { LogoComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { Menu } from '../../models/menu/menu';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'ta-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, AsyncPipe, FontIconComponent, LogoComponent, MenuComponent],
})
export class MainMenuComponent extends TaBaseComponent {
  @Input()
  menuMain!: Menu;

  @Input()
  menuUser!: Menu;

  public sharedMenu = inject(CamSharedMenuService);

  public toggleView() {
    this.sharedMenu.isMinimized$.next(!this.sharedMenu.isMinimized$.getValue());
  }
}
