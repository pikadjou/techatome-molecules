import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

/** Teinte du surtitre ; `invert` et `highlight` pour les fonds sombres. */
export type OverlineTone = 'muted' | 'accent' | 'brand' | 'invert' | 'highlight';

@Component({
  selector: 'ta-overline',
  templateUrl: './overline.component.html',
  styleUrls: ['./overline.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class OverlineComponent {
  tone = input<OverlineTone>('muted');

  /** `sm` dans une carte, `md` en tête de section. */
  size = input<'sm' | 'md'>('md');

  public getClasses(): string[] {
    return [this.tone(), this.size()];
  }
}
