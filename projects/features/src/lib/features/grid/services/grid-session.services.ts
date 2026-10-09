import { Injectable } from '@angular/core';

import { HandleComplexRequest } from '@ta/server';

import { Filter } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class TaGridSessionService {
  private _filterData = new HandleComplexRequest<Filter[]>();
  private _openForms = new Set<string>();

  // `update` ignore une clé inconnue et fusionnerait deux tableaux en objet : on remplace.
  public setFilter(key: string, filter: Filter[]) {
    if (this._filterData.get(key)) {
      this._filterData.update(key, filter, false);
    } else {
      this._filterData.add(key, filter);
    }
  }
  public getFilter(key: string) {
    return this._filterData.get(key);
  }

  public clearFilter(key: string): void {
    this.setFilter(key, []);
  }

  public isFormOpen(key: string): boolean {
    return this._openForms.has(key);
  }

  public setFormOpen(key: string, open: boolean): void {
    if (open) {
      this._openForms.add(key);
    } else {
      this._openForms.delete(key);
    }
  }
}
