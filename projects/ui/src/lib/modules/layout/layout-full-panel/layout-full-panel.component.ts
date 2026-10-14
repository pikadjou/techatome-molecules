import { Component, input, output } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { TitleComponent } from '../../../components/ui/title/title.component';
import { TaTranslationUI } from '../../../translation.service';

@Component({
  selector: 'ta-layout-full-panel',
  templateUrl: './layout-full-panel.component.html',
  styleUrl: './layout-full-panel.component.scss',
  standalone: true,
  imports: [FontIconComponent, TranslateModule, TitleComponent],
})
export class LayoutFullPanelComponent extends TaBaseComponent {
  width = input<string>('400px');
  title = input<string>('');

  closeEvent = output<void>();

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public askClose() {
    this.closeEvent.emit();
  }
}
