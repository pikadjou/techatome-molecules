import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { TitleComponent } from '../../../components/ui/title/title.component';
import { LayoutHeaderComponent } from '../layout-header/layout-header.component';
import { LayoutTitleComponent } from '../layout-title/layout-title.component';

@Component({
  selector: 'ta-layout-full-panel',
  templateUrl: './layout-full-panel.component.html',
  styleUrls: ['./layout-full-panel.component.scss'],
  standalone: true,
  imports: [FontIconComponent, TranslateModule, LayoutTitleComponent, LayoutHeaderComponent, TitleComponent],
})
export class LayoutFullPanelComponent extends TaBaseComponent {
  @Input()
  width = '400px';

  @Input()
  title: string = '';

  @Output()
  closeEvent = new EventEmitter();

  constructor() {
    super();
  }

  public askClose() {
    this.closeEvent.emit();
  }
}
