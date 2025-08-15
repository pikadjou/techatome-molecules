import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { TaLayoutModule, TaUiModule } from '@ta/ui';

import { BaseComponent } from '../../abstract/baseComponent';
import { MainMenuComponent } from '../../menu/main-menu/main-menu.component';

@Component({
  selector: 'app-layout-second-level',
  standalone: true,
  templateUrl: './layout-second-level.component.html',
  styleUrls: ['./layout-second-level.component.scss'],
  imports: [TaLayoutModule, MainMenuComponent, MatIconModule, AsyncPipe, TaUiModule],
})
export class LayoutSecondLevelComponent extends BaseComponent {
  get currentRouteName() {
    return `header.navigation.${this._router.url.split('/')[1]}`;
  }

  public goBack() {
    this._location.back();
  }
}
