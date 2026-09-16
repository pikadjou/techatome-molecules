import { Component, computed, input } from "@angular/core";

import { FontIconComponent } from "@ta/icons";

import { ProgressBarComponent } from "../progress-bar/progress-bar.component";

/** Une marche de l'échelle, du haut vers le bas. */
export type RatingDistributionStep = {
  note: number;
  count: number;
};

/**
 * Répartition des notes reçues, une barre par échelon.
 *
 * Une moyenne cache sa dispersion : quatre étoiles peuvent recouvrir un accord
 * unanime comme un partage entre enthousiastes et déçus. L'échelle montre
 * laquelle des deux on lit.
 */
@Component({
  selector: "ta-rating-distribution",
  templateUrl: "./rating-distribution.component.html",
  styleUrls: ["./rating-distribution.component.scss"],
  standalone: true,
  imports: [FontIconComponent, ProgressBarComponent],
})
export class RatingDistributionComponent {
  /** Les notes reçues, une entrée par évaluation. */
  values = input.required<number[]>();

  /** Hauteur de l'échelle. Cinq échelons par défaut, comme les étoiles. */
  max = input<number>(5);

  readonly total = computed(() => this.values().length);

  /**
   * Les échelons du plus haut au plus bas : c'est l'ordre dans lequel on lit
   * une note, et celui de toutes les échelles d'avis.
   */
  readonly steps = computed<RatingDistributionStep[]>(() => {
    const counts = new Map<number, number>();
    for (const value of this.values()) {
      const note = Math.round(value);
      if (note < 1 || note > this.max()) continue;
      counts.set(note, (counts.get(note) ?? 0) + 1);
    }

    return Array.from({ length: this.max() }, (_, index) => {
      const note = this.max() - index;
      return { note, count: counts.get(note) ?? 0 };
    });
  });
}
