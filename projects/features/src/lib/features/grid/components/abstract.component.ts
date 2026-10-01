import { Component, OnInit, inject, input } from '@angular/core';

import { Observable, distinctUntilChanged, filter } from 'rxjs';

import { TaBaseComponent } from '@ta/utils';

import { TaTranslationGrid } from '../../../translation.service';
import { TaGridData } from '../models/grid-data';
import { TaGridInstanceService } from '../services/grid-instance.service';

@Component({ template: '' })
export abstract class TaAbstractGridComponent<T> extends TaBaseComponent implements OnInit {
  gridId = input.required<string>();

  public grid() {
    return this._grid;
  }
  public isGroup() {
    return this._grid.isGroup();
  }
  public data() {
    return this._grid.data();
  }
  public dataByGroup() {
    return this._grid.dataByGroup();
  }
  public displayType() {
    return this._grid.displayType;
  }
  public isReady$!: Observable<boolean>;
  public isDataReady$!: Observable<boolean>;

  protected _grid!: TaGridData<T>;
  private _dataService = inject(TaGridInstanceService);

  constructor() {
    super();
    TaTranslationGrid.getInstance();
  }

  ngOnInit() {
    this._grid = this._dataService.get<T>(this.gridId(), true);
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
