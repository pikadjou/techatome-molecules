import { Injectable } from '@angular/core';

import { TaGridData } from '../models/grid-data';

@Injectable({
  providedIn: 'root',
})
export class TaGridInstanceService<T> {
  public readonly grids: { [index: string]: TaGridData<T> } = {};

  constructor() {}

  public create(key: string) {
    if (!this.has(key)) {
      this.grids[key] = new TaGridData<T>(key);
    }
  }

  public get(key: string, create: boolean = false) {
    if (!this.has(key) && create) {
      this.create(key);
    }
    return this.grids[key];
  }

  public has(key: string) {
    return !!this.grids[key];
  }
}
