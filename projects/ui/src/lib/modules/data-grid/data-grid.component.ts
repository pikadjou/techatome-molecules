import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

/** `row` : libellé | valeur ; `stack` : libellé au-dessus ; `fact` : icône, valeur, libellé. */
export type DataGridOrientation = 'row' | 'stack' | 'fact';

/** Grille libellé / valeur ; les items lisent l'orientation via `:host-context()`. */
@Component({
  selector: 'ta-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class DataGridComponent {
  /** Colonnes en desktop (1 à 4). */
  columns = input<1 | 2 | 3 | 4>(2);

  orientation = input<DataGridOrientation>('row');

  public getClass(): string {
    return `data-grid-${this.orientation()} columns-${this.columns()}`;
  }
}
