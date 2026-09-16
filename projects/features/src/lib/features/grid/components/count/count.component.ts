import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { TranslatePipe } from '@ta/translation';
import { PluralTranslatePipe } from '@ta/utils';

import { TaAbstractGridComponent } from '../abstract.component';

/**
 * Nombre de résultats de la liste.
 *
 * Le panneau de filtres l'annonce déjà à côté de son titre, mais il vit dans un
 * tiroir : posé au-dessus des résultats, le compte dit tout de suite ce que les
 * filtres ont laissé passer.
 */
@Component({
  selector: 'ta-grid-count',
  standalone: true,
  imports: [AsyncPipe, PluralTranslatePipe, TranslatePipe],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
})
export class TaGridCountComponent extends TaAbstractGridComponent<unknown> {
  /**
   * Clé de traduction pluralisée du décompte. La valeur par défaut compte des
   * résultats ; un appelant qui sait ce qu'il liste compte des biens, des
   * personnes ou des dossiers.
   */
  label = input<string>('grid.tag.results');

  get total(): number {
    return this.grid?.totalItems() ?? 0;
  }
}
