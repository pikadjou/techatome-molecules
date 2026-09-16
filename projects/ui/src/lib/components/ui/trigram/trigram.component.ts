import { NgClass, NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

/** `brand` : marque pleine ; `highlight` : secondaire de marque ; `surface` : neutre ; `invert` : translucide sur fond sombre. */
export type TrigramTone = 'brand' | 'highlight' | 'surface' | 'invert';

@Component({
  selector: 'ta-trigram',
  templateUrl: './trigram.component.html',
  styleUrls: ['./trigram.component.scss'],
  standalone: true,
  imports: [NgClass, NgStyle],
})
export class TrigramComponent {
  /**
   * Text to display in trigram
   */
  value = input.required<string | null>();

  /**
   * Size of trigram
   */
  size = input<number>(35);

  /** `squircle` : carré arrondi. */
  shape = input<'circle' | 'squircle'>('circle');

  tone = input<TrigramTone>('brand');

  constructor() {}

  public getClasses(): string[] {
    return [this.tone(), this.shape()];
  }

  public getFontSize() {
    return Math.round(this.size() / 3);
  }
}
