import { Component, input, output } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { TextComponent } from '../../../components/ui/public-api';
import { TaTranslationUI } from '../../../translation.service';

export type ModalSize = 'fullscreen' | 'large' | 'medium' | 'small';

@Component({
  selector: 'ta-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [FontIconComponent, TextComponent],
})
export class TaModalComponent extends TaBaseComponent {
  open = input.required<boolean>();
  size = input<ModalSize | undefined>(undefined);
  title = input<string>('');
  closeOnBackdrop = input<boolean>(true);
  contentFit = input<boolean>(false);

  closeEvent = output<void>();

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public containerClass(): string {
    const classes: string[] = [];
    const s = this.size();
    if (s) classes.push(`ta-modal--${s}`);
    if (this.contentFit()) classes.push('ta-modal--fit');
    return classes.join(' ');
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
