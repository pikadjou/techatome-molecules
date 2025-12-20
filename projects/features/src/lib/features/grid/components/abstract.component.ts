import { Component, OnInit, inject, input } from '@angular/core';

import { Observable, distinctUntilChanged, filter } from 'rxjs';

import { TaBaseComponent } from '@ta/utils';

import { TaGridData } from '../models/grid-data';
import { TaGridInstanceService } from '../services/grid-instance.service';

@Component({ template: '' })
export abstract class TaAbstractGridComponent<T> extends TaBaseComponent implements OnInit {
  gridId = input.required<string>();

  get grid() {
    return this._grid;
  }
  get isGroup() {
    return this._grid.isGroup;
  }
  get data() {
    return this._grid.data;
  }
  get dataByGroup() {
    return this._grid.dataByGroup;
  }
  get displayType() {
    return this._grid.displayType;
  }
  public isReady$!: Observable<boolean>;
  public isDataReady$!: Observable<boolean>;

  protected _grid!: TaGridData<T>;
  private _dataService = inject(TaGridInstanceService);

  constructor() {
    super();
  }

  ngOnInit() {
    this._grid = this._dataService.get(this.gridId(), true);
    this.isReady$ = this._grid.isReady$.pipe(
      distinctUntilChanged(),
      filter(isReady => isReady)
    );
    this.isDataReady$ = this._grid.isDataReady$.pipe(
      distinctUntilChanged(),
      filter(isReady => isReady)
    );
  }
}
