import { Component, EventEmitter, Output, input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { TitleComponent } from '../../../components/ui/title/title.component';
import { TaTranslationUI } from '../../../translation.service';

export type ModalSize = 'fullscreen' | 'large' | 'medium' | 'small';

@Component({
  selector: 'ta-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [FontIconComponent, TitleComponent],
})
export class TaModalComponent extends TaBaseComponent {
  open = input.required<boolean>();
  size = input<ModalSize | undefined>(undefined);
  title = input<string>('');
  closeOnBackdrop = input<boolean>(true);

  @Output()
  closeEvent = new EventEmitter<void>();

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public sizeClass(): string {
    const s = this.size();
    return s ? `ta-modal--${s}` : '';
  }

  public close(): void {
    this.closeEvent.emit();
  }

  public onBackdropClick(): void {
    if (this.closeOnBackdrop()) {
      this.close();
    }
  }
}
