import { DecimalPipe } from "@angular/common";
import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { TaTranslationUI } from "../../../../../translation.service";

/** Couleur de l'arc parcouru. */
export type ProgressCircleTone = "brand" | "accent" | "highlight" | "success";

/**
 * `default` : piste claire, pour un fond clair.
 * `invert` : piste translucide, pour un anneau posé sur une surface sombre.
 */
export type ProgressCircleTrack = "default" | "invert";

@Component({
  selector: "ta-progress-circle",
  templateUrl: "./progress-circle.component.html",
  styleUrls: ["./progress-circle.component.scss"],
  standalone: true,
  imports: [TranslateModule, DecimalPipe],
  host: {
    "[class.invert]": "this.track() === 'invert'",
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

  /**
   * Diamètre en pixels. `null` laisse l'anneau remplir son conteneur.
   */
  size = input<number | null>(null);

  /**
   * Épaisseur de l'anneau, exprimée dans le repère du `viewBox` (100 unités).
   */
  thickness = input<number>(10);

  /**
   * Masque le pourcentage tracé dans l'anneau : à utiliser dès qu'un contenu
   * est projeté au centre.
   */
  hideValue = input<boolean>(false);

  linecap = input<"round" | "butt">("round");

  tone = input<ProgressCircleTone>("brand");

  track = input<ProgressCircleTrack>("default");

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  get canDisplayText() {
    return !this.hideValue() && !Number.isNaN(this.progress());
  }

  /** Le rayon suit l'épaisseur pour que l'anneau reste dans le `viewBox`. */
  get radius() {
    return 50 - this.thickness() / 2;
  }

  constructor() {
    TaTranslationUI.getInstance();
  }
}
