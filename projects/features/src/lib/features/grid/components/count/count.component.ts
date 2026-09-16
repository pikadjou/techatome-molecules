import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { TranslatePipe } from '@ta/translation';
import { PluralTranslatePipe } from '@ta/utils';

import { TaAbstractGridComponent } from '../abstract.component';

/** Nombre de résultats de la liste, affiché au-dessus des résultats. */
@Component({
  selector: 'ta-grid-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  standalone: true,
  imports: [AsyncPipe, PluralTranslatePipe, TranslatePipe],
})
export class TaGridCountComponent extends TaAbstractGridComponent<unknown> {
  /** Clé de traduction pluralisée du décompte (résultats par défaut). */
  label = input<string>('grid.tag.results');

  get total(): number {
    return this.grid?.totalItems() ?? 0;
  }
}
