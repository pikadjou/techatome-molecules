import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { TaTranslationUI } from '../../../../../translation.service';

/** Couleur de l'arc parcouru. */
export type ProgressCircleTone = 'brand' | 'accent' | 'highlight' | 'success';

/** `default` : piste claire ; `invert` : piste translucide pour surface sombre. */
export type ProgressCircleTrack = 'default' | 'invert';

@Component({
  selector: 'ta-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  standalone: true,
  imports: [TranslateModule, DecimalPipe],
  host: {
    '[class.invert]': "this.track() === 'invert'",
  },
})
export class ProgressCircleComponent {
  /**
   * Progress in percentage
   */
  progress = input<number>(50);

  /**
   * Title located above
   */
  upTitle = input<string | undefined>(undefined);

  /**
   * Title located below
   */
  downTitle = input<string | undefined>(undefined);

  /** Diamètre en pixels ; `null` remplit le conteneur. */
  size = input<number | null>(null);

  /** Épaisseur de l'anneau, dans le repère du `viewBox` (100 unités). */
  thickness = input<number>(10);

  /** Masque le pourcentage, quand un contenu est projeté au centre. */
  hideValue = input<boolean>(false);

  linecap = input<'round' | 'butt'>('round');

  tone = input<ProgressCircleTone>('brand');

  track = input<ProgressCircleTrack>('default');

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  get canDisplayText() {
    return !this.hideValue() && !Number.isNaN(this.progress());
  }

  /** Rayon ajusté à l'épaisseur pour rester dans le `viewBox`. */
  get radius() {
    return 50 - this.thickness() / 2;
  }

  constructor() {
    TaTranslationUI.getInstance();
  }
}
