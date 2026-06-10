import { Injectable } from '@angular/core';

import { TaGridData } from '../models/grid-data';

@Injectable({
  providedIn: 'root',
})
export class TaGridInstanceService {
  public readonly grids: { [index: string]: TaGridData<any> } = {};

  constructor() {}

  public create(key: string) {
    if (!this.has(key)) {
      this.grids[key] = new TaGridData<any>(key);
    }
  }

  public get<T = any>(key: string, create: boolean = false): TaGridData<T> {
    if (!this.has(key) && create) {
      this.create(key);
    }
    return this.grids[key] as TaGridData<T>;
  }

  public has(key: string) {
    return !!this.grids[key];
  }
}
