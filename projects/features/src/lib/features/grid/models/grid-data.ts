import { signal } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

import { BaseCol } from './cols/base-col';
import { BoolCol } from './cols/bool-col';
import { ChoicesCol } from './cols/choices-col';
import { DateCol } from './cols/date-col';
import { EnumCol } from './cols/enum-col';
import { LocalityCol } from './cols/locality-col';
import { NumberCol } from './cols/number-col';
import { RangeCol } from './cols/range-col';
import { RelationCol } from './cols/relation-col';
import { StringCol } from './cols/string-col';
import { TaGridFilters } from './grid-filters';
import { ITableStateServices as IDataService, TaTableState } from './table-state';
import { ColMetaData, Filter, PaginationMode, ParameterType, Preset, ViewType } from './types';
import { groupBy } from './utils';

export { ITableStateServices as IDataService } from './table-state';

export class TaGridData<T> {
  public data(): T[] {
    return this.table?.getData() ?? [];
  }
  public dataByGroup() {
    return groupBy(this._groupBy(), this.data());
  }
  public isGroup() {
    return this._groupBy() !== null;
  }
  /**
   * Champ de regroupement courant. Adossé à un signal : lu depuis un template,
   * il notifie les composants même sous un parent en OnPush.
   */
  public groupBy(): keyof T | null {
    return this._groupBy();
  }

  public readonly rowClicked$ = new Subject<T>();
  public table: TaTableState<T> | null = null;
  public cols: { [index: string]: BaseCol<any> } = {};
  public filters: TaGridFilters | null = null;

  public readonly isReady$ = new BehaviorSubject(false);
  public readonly isDataReady$ = new BehaviorSubject(false);

  private _tableSubs: Array<{ unsubscribe(): void }> = [];

  public readonly displayType = signal<ViewType>('card');

  private readonly _groupBy = signal<keyof T | null>(null);
  public readonly totalItems = signal(0);

  constructor(public readonly scope: string) {}

  public init(params: {
    colsMetaData: ColMetaData<T>[];
    data?: T[];
    services?: IDataService<T>;
    initialFilter?: Filter[];
    preset?: Preset[];
    pagination?: PaginationMode;
    pageSize?: number;
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
      pagination: params.pagination,
      pageSize: params.pageSize,
      onDataUpdate: total => this.totalItems.set(total),
    });

    this.filters = new TaGridFilters(this.scope, this.table, params.preset);

    this._tableSubs.push(
      this.table.isReady$.subscribe(ready => {
        if (ready) this.isReady$.next(true);
      }),
      this.table.isDataReady$.subscribe(ready => {
        if (ready) this.isDataReady$.next(true);
      }),
      this.table.rowClicked$.subscribe(row => this.rowClicked$.next(row))
    );
  }

  /**
   * L'instance survit au composant : `TaGridInstanceService` la garde par `gridId` et la rend à la
   * grille recréée sous le même id. On la remet donc à zéro sans fermer ses sujets — fermés, la
   * grille recréée n'était jamais « prête » et restait vide. Le regroupement et le total repartent
   * aussi de zéro : la table recréée n'en sait rien, la grille regrouperait sans que le serveur le fasse.
   */
  public destroy() {
    this._tableSubs.forEach(s => s.unsubscribe());
    this._tableSubs = [];
    this.filters?.destroy();
    this.filters = null;
    this.table?.destroy();
    this.table = null;
    this._groupBy.set(null);
    this.totalItems.set(0);
    this.isReady$.next(false);
    this.isDataReady$.next(false);
  }

  public setGroupBy(field: string) {
    this._groupBy.set(field as keyof T);
    this.table?.setGroupBy(field);
  }
  public clearGroupBy() {
    this._groupBy.set(null);
    this.table?.setGroupBy(null);
  }

  public switchView(type: ViewType) {
    this.displayType.set(type);
  }

  private _buildCols(colsMetaData: ColMetaData<T>[]): void {
    this.cols = Object.fromEntries(
      colsMetaData.map(meta => {
        const field = this._factoryCols(meta);
        return [field.key(), field];
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
      case ParameterType.Range:
        return new RangeCol({ scope: this.scope, col: col }, this);
      case ParameterType.Locality:
        return new LocalityCol({ scope: this.scope, col: col }, this);
      case ParameterType.Choices:
        return new ChoicesCol({ scope: this.scope, col: col }, this);
      default:
        return new BaseCol({ scope: this.scope, col: col }, this);
    }
  }
}
