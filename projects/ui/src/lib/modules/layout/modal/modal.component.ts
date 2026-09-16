import { Component, input, output } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { OverlineComponent } from '../../../components/ui/overline/overline.component';
import { TitleComponent } from '../../../components/ui/public-api';
import { TaTranslationUI } from '../../../translation.service';

export type ModalSize = 'fullscreen' | 'large' | 'medium' | 'small';

/** `surface` : en-tête clair avec filet ; `brand` : bandeau de marque plein, pour les modales bloquantes. */
export type ModalTone = 'surface' | 'brand';

@Component({
  selector: 'ta-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [FontIconComponent, OverlineComponent, TitleComponent],
})
export class TaModalComponent extends TaBaseComponent {
  open = input.required<boolean>();
  size = input<ModalSize | undefined>(undefined);
  title = input<string>('');

  /** Surtitre en capitales, au-dessus du titre. */
  overline = input<string>('');

  tone = input<ModalTone>('surface');

  /** Masque la croix ; la modale projette alors sa propre action dans `[modal-header-action]`. */
  showClose = input<boolean>(true);

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
    classes.push(`ta-modal--tone-${this.tone()}`);
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
