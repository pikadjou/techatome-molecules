import { Component, computed, input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';

import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

/** Un échelon de la répartition. */
export type RatingDistributionStep = {
  note: number;
  count: number;
};

/** Répartition des notes reçues, une barre par échelon. */
@Component({
  selector: 'ta-rating-distribution',
  templateUrl: './rating-distribution.component.html',
  styleUrls: ['./rating-distribution.component.scss'],
  standalone: true,
  imports: [FontIconComponent, ProgressBarComponent],
})
export class RatingDistributionComponent {
  /** Notes reçues, une entrée par évaluation. */
  values = input.required<number[]>();

  /** Nombre d'échelons. */
  max = input<number>(5);

  readonly total = computed(() => this.values().length);

  /** Échelons du plus haut au plus bas. */
  readonly steps = computed<RatingDistributionStep[]>(() => {
    const counts = new Map<number, number>();
    for (const value of this.values()) {
      const note = Math.round(value);
      if (note < 1 || note > this.max()) continue;
      counts.set(note, (counts.get(note) ?? 0) + 1);
    }

    return Array.from({ length: this.max() }, (_, index) => {
      const note = this.max() - index;
      return { count: counts.get(note) ?? 0, note };
    });
  });
}
