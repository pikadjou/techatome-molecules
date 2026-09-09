import { Component } from '@angular/core';

import { TranslatePipe } from '@ta/translation';
import { BadgeComponent, ButtonComponent, TextComponent } from '@ta/ui';
import { PluralTranslatePipe } from '@ta/utils';

import { Filter, FilterType } from '../../models/types';
import { gridSearchFieldsName } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';

/** Opérateurs rendus tels quels dans le chip, sous leur forme mathématique. */
const OPERATOR_SYMBOLS: Partial<Record<FilterType, string>> = {
  '!=': '≠',
  '<': '<',
  '<=': '≤',
  '>': '>',
  '>=': '≥',
};

@Component({
  selector: 'ta-grid-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  standalone: true,
  imports: [TranslatePipe, PluralTranslatePipe, BadgeComponent, TextComponent, ButtonComponent],
})
export class TaGridTagsComponent extends TaAbstractGridComponent<unknown> {
  get group() {
    return this._grid.groupBy;
  }
  get activeFilters() {
    return this._grid.filters?.get() ?? [];
  }
  get hasActiveFilters(): boolean {
    return this.activeFilters.length > 0 || !!this.group;
  }

  /** Clé de traduction du libellé d'un critère — le champ de recherche n'est pas une colonne. */
  public labelKey(key: string): string {
    if (key === gridSearchFieldsName) {
      return 'grid.tag.search';
    }
    return this._grid.cols[key]?.inputLabel ?? key;
  }

  /**
   * Suffixe lisible du chip : « : Electronics », « ≥ 100 », « : « book » ».
   * L'opérateur n'apparaît que lorsqu'il porte du sens.
   */
  public formatValue(filter: Filter): string {
    if (typeof filter.value === 'boolean') {
      return ` ${filter.value ? '✓' : '✗'}`;
    }

    const value = Array.isArray(filter.value) ? filter.value.join(', ') : String(filter.value);

    switch (filter.type) {
      case 'like':
      case 'regex':
        return ` : « ${value} »`;
      case 'starts':
        return ` : ${value}…`;
      case 'ends':
        return ` : …${value}`;
      case '=':
      case 'in':
        return ` : ${value}`;
      default:
        return ` ${OPERATOR_SYMBOLS[filter.type] ?? filter.type} ${value}`;
    }
  }

  public remove(filter: Filter) {
    this._grid.filters?.remove(filter);
  }
  public removeGroup() {
    this._grid.clearGroupBy();
  }
  public clear() {
    this._grid.filters?.apply([]);
    this._grid.clearGroupBy();
  }
}
