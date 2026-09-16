import { Component, input } from "@angular/core";

import { LayoutNavComponent } from "../layout-nav/layout-nav.component";

/**
 * Racine d'une page applicative : en-tête, titre, contenu, navigation basse.
 */
@Component({
  selector: "ta-layout-page",
  templateUrl: "./layout-page.component.html",
  styleUrls: ["./layout-page.component.scss"],
  standalone: true,
  imports: [LayoutNavComponent],
  host: {
    "[class.full-height]": "this.fullHeight()",
  },
})
export class LayoutPageComponent {
  /**
   * Étire la page sur la hauteur de la fenêtre et pousse la navigation basse
   * en bas, même quand le contenu est court. Sans cela, une page courte laisse
   * le pied remonter au milieu de l'écran.
   */
  fullHeight = input<boolean>(false);

  /**
   * Laisse le contenu occuper toute la largeur au lieu d'être ramené dans la
   * colonne du gabarit. À réserver aux pages qui gèrent elles-mêmes leur
   * centrage — une page d'accueil dont les sections vont d'un bord à l'autre.
   */
  bleed = input<boolean>(false);
}
