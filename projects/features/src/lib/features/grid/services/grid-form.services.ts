import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { InputBase, InputDropdown, InputPanel } from '@ta/form-model';
import { isNonNullable } from '@ta/utils';

import { TaGridData } from '../models/grid-data';
import { Filter } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class TaGridFormService<T> {
  constructor() {}

  public getFiltersForm(model: TaGridData<T>): InputBase<any>[] {
    const children = this._filterInputs(model, this.filterKeys(model));
    if (children.length === 0) {
      return [];
    }

    return [
      new InputPanel({
        key: 'main-panel',
        class: 'p-space-sm',
        contentClass: 'grid g-space-md',
        children,
      }),
    ];
  }

  public getHighlightedFiltersForm(model: TaGridData<T>): InputBase<any>[] {
    const children = this._filterInputs(model, this.highlightedKeys(model));
    if (children.length === 0) {
      return [];
    }

    return [
      new InputPanel({
        key: 'highlight-panel',
        contentClass: 'grid g-space-md',
        children,
      }),
    ];
  }

  /** Colonnes du panneau de filtres. */
  public filterKeys(model: TaGridData<T>): string[] {
    return Object.keys(model.cols).filter(key => model.cols[key].data.col.showOnSearch);
  }

  /** Colonnes de la barre mise en avant. */
  public highlightedKeys(model: TaGridData<T>): string[] {
    return Object.keys(model.cols).filter(key => model.cols[key].data.col.highlighted);
  }

  public formatFiltersForm(model: TaGridData<T>, data: any): Filter[] {
    return Object.keys(model.cols)
      .filter(key => key in data)
      .flatMap(key => model.cols[key].formatInputForm(data) ?? []);
  }

  public getGroupForm(model: TaGridData<T>): InputBase<any>[] {
    return [
      new InputPanel({
        key: 'main-panel',
        class: 'p-space-sm',
        children: [
          new InputDropdown({
            key: 'group',
            label: 'grid.core.groupBy',
            options$: of(
              Object.values(model.cols)
                .filter(col => col.data.col.showOnSearch && !col.data.col.notDisplayable)
                .map(group => ({
                  id: group.key(),
                  name: group.inputLabel(),
                }))
            ),
            value: model.groupBy(),
          }),
        ],
      }),
    ];
  }

  public formatGroupForm(data: any): string | null {
    return data['group'] || null;
  }

  /** Chaque champ dans son propre panneau, à la largeur que la colonne demande. */
  private _filterInputs(model: TaGridData<T>, keys: string[]): InputBase<any>[] {
    return keys
      .map(key => {
        const input = model.cols[key].getInputForm();
        return input
          ? new InputPanel({
              key: `panel-${input.key}`,
              class: model.cols[key].data.col.filter?.class ?? 'full',
              children: [input],
            })
          : null;
      })
      .filter(isNonNullable);
  }
}
