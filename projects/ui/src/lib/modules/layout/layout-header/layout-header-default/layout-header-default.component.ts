import { NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, input, output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { TaTranslationUI } from '../../../../translation.service';

@Component({
  selector: 'ta-layout-header-default',
  templateUrl: './layout-header-default.component.html',
  styleUrl: './layout-header-default.component.scss',
  standalone: true,
  imports: [NgTemplateOutlet, FontIconComponent, TranslateModule, MatMenuModule],
})
export class LayoutHeaderDefaultComponent extends TaBaseComponent {
  showBack = input<boolean>(true);

  menuTemplate = input<TemplateRef<any> | undefined>(undefined);

  title = input<string | undefined>(undefined);

  backEvent = output<void>();

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public showBackAction() {
    this._location.back();
    this.backEvent.emit();
  }
}
