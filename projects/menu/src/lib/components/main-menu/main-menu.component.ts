import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, inject, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { FontIconComponent } from '@ta/icons';
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
  imports: [NgClass, LogoComponent, MenuComponent, MatExpansionModule, NgTemplateOutlet, FontIconComponent],
})
export class MainMenuComponent extends TaBaseComponent {
  menuMain = input.required<Menu>();

  menuUser = input<Menu>();

  userMenuTemplate = input<TemplateRef<any>>();

  direction = input<'horizontal' | 'vertical'>('vertical');

  public sharedMenu = inject(TaSharedMenuService);

  public isPanelOpen = false;

  public navigateToHome() {
    this._router.navigate(['/']);
  }
  public toggleView() {
    this.sharedMenu.isMinimized$.next(!this.sharedMenu.isMinimized$.getValue());
  }

  public toggleMobilePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }

  public closeMobilePanel() {
    this.isPanelOpen = false;
  }
}
