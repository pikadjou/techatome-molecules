import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { TaSharedMenuService } from '@ta/services';
import { LogoComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { Menu } from '../../models/menu/menu';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'ta-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [NgClass, LogoComponent, MenuComponent, MatExpansionModule, NgTemplateOutlet],
})
export class MainMenuComponent extends TaBaseComponent {
  @Input()
  menuMain!: Menu;

  @Input()
  menuUser!: Menu;

  @Input()
  userMenuTemplate?: TemplateRef<any>;

  @Input()
  direction: 'horizontal' | 'vertical' = 'vertical';

  public sharedMenu = inject(TaSharedMenuService);

  public toggleView() {
    this.sharedMenu.isMinimized$.next(!this.sharedMenu.isMinimized$.getValue());
  }
}
