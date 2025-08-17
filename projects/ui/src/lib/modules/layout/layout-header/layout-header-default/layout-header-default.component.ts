import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

@Component({
  selector: 'ta-layout-header-default',
  templateUrl: './layout-header-default.component.html',
  styleUrls: ['./layout-header-default.component.scss'],
  standalone: true,
  imports: [NgIf, FontIconComponent, TranslateModule, MatMenuModule],
})
export class LayoutHeaderDefaultComponent extends TaBaseComponent {
  @Input()
  showBack: boolean = true;

  @Input()
  menuTemplate?: TemplateRef<any>;

  @Input()
  title?: string;

  @Output()
  backEvent = new EventEmitter();

  public showBackAction() {
    this._location.back();
    this.backEvent.emit();
  }
}
