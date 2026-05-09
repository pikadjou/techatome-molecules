import { Component, EventEmitter, Output, input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { TitleComponent } from '../../../components/ui/title/title.component';
import { TaTranslationUI } from '../../../translation.service';
import { LayoutContentComponent } from '../layout-content/layout-content.component';
import { LayoutHeaderComponent } from '../layout-header/layout-header.component';

export type ModalStyle = 'full' | 'big' | 'classic' | 'small';

@Component({
  selector: 'ta-layout-modal',
  templateUrl: './layout-modal.component.html',
  styleUrls: ['./layout-modal.component.scss'],
  standalone: true,
  imports: [
    FontIconComponent,
    TranslateModule,
    LayoutHeaderComponent,
    TitleComponent,
    LayoutContentComponent,
  ],
})
export class LayoutModalComponent extends TaBaseComponent {
  style = input<ModalStyle>('classic');
  title = input<string>('');
  showClose = input<boolean>(true);

  @Output() closeEvent = new EventEmitter<void>();

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public close() {
    this.closeEvent.emit();
  }
}
