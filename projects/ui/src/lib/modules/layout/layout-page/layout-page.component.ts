import { Component, input } from '@angular/core';

import { LayoutNavComponent } from '../layout-nav/layout-nav.component';

/** Racine d'une page : en-tête, titre, contenu, navigation basse. */
@Component({
  selector: 'ta-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss'],
  standalone: true,
  imports: [LayoutNavComponent],
  host: {
    '[class.full-height]': 'this.fullHeight()',
  },
})
export class LayoutPageComponent {
  /** Étire la page sur la hauteur de la fenêtre, navigation basse en bas. */
  fullHeight = input<boolean>(false);

  /** Contenu pleine largeur, hors colonne du gabarit. */
  bleed = input<boolean>(false);
}
