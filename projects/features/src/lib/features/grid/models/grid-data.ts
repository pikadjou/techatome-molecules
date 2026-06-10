import { signal } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

import { BaseCol } from './cols/base-col';
import { BoolCol } from './cols/bool-col';
import { DateCol } from './cols/date-col';
import { EnumCol } from './cols/enum-col';
import { NumberCol } from './cols/number-col';
import { RelationCol } from './cols/relation-col';
import { StringCol } from './cols/string-col';
import { TaGridFilters } from './grid-filters';
import { ITableStateServices as IDataService, TaTableState } from './table-state';
import { ColMetaData, Filter, ParameterType, Preset, ViewType } from './types';
import { groupBy } from './utils';

export { ITableStateServices as IDataService } from './table-state';

export class TaGridData<T> {
  get data(): T[] {
    return this.table?.getData() ?? [];
  }
  get dataByGroup() {
    return groupBy(this.groupBy, this.data);
  }
  get isGroup() {
    return this.groupBy !== null;
  }

  public readonly rowClicked$ = new Subject<T>();
  public table: TaTableState<T> | null = null;
  public cols: { [index: string]: BaseCol<any> } = {};
  public filters: TaGridFilters | null = null;

  public readonly isReady$ = new BehaviorSubject(false);
  public readonly isDataReady$ = new BehaviorSubject(false);

  private _tableSubs: Array<{ unsubscribe(): void }> = [];

  public readonly displayType = signal<ViewType>('card');

  public groupBy: keyof T | null = null;
  public readonly totalItems = signal(0);

  constructor(public readonly scope: string) {}

  public init(params: {
    colsMetaData: ColMetaData<T>[];
    data?: T[];
    services?: IDataService<T>;
    initialFilter?: Filter[];
    preset?: Preset[];
  }) {
    if (this.table) {
      this._tableSubs.forEach(s => s.unsubscribe());
      this._tableSubs = [];
      this.table.destroy();
    }

    this._buildCols(params.colsMetaData);

    this.table = new TaTableState<T>();
    this.table.init({
      colsMetaData: params.colsMetaData,
      data: params.data,
      services: params.services,
      initialFilter: params.initialFilter,
      onDataUpdate: total => this.totalItems.set(total),
    });

    this.filters = new TaGridFilters(this.scope, this.table, params.preset);

    this._tableSubs.push(
      this.table.isReady$.subscribe(ready => { if (ready) this.isReady$.next(true); }),
      this.table.isDataReady$.subscribe(ready => { if (ready) this.isDataReady$.next(true); }),
      this.table.rowClicked$.subscribe(row => this.rowClicked$.next(row)),
    );
  }

  public destroy() {
    this._tableSubs.forEach(s => s.unsubscribe());
    this._tableSubs = [];
    this.filters?.destroy();
    this.table?.destroy();
    this.rowClicked$.complete();
    this.isReady$.complete();
    this.isDataReady$.complete();
  }

  public setGroupBy(field: string) {
    this.groupBy = field as keyof T;
    this.table?.setGroupBy(field);
  }
  public clearGroupBy() {
    this.groupBy = null;
    this.table?.setGroupBy(null);
  }

  public switchView(type: ViewType) {
    this.displayType.set(type);
  }

  private _buildCols(colsMetaData: ColMetaData<T>[]): void {
    this.cols = Object.fromEntries(
      colsMetaData.map(meta => {
        const field = this._factoryCols(meta);
        return [field.key, field];
      })
    );
  }

  private _factoryCols(col: ColMetaData<any>): BaseCol<any> {
    switch (col.type) {
      case ParameterType.String:
        return new StringCol({ scope: this.scope, col: col }, this);
      case ParameterType.Enum:
        return new EnumCol({ scope: this.scope, col: col }, this);
      case ParameterType.Number:
        return new NumberCol({ scope: this.scope, col: col }, this);
      case ParameterType.DateTime:
        return new DateCol({ scope: this.scope, col: col }, this);
      case ParameterType.Boolean:
        return new BoolCol({ scope: this.scope, col: col }, this);
      case ParameterType.Relation:
        return new RelationCol({ scope: this.scope, col: col }, this);
      default:
        return new BaseCol({ scope: this.scope, col: col }, this);
    }
  }
}
