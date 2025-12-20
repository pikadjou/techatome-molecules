import { ElementRef, signal } from '@angular/core';

import { BehaviorSubject, Observable, Subject, firstValueFrom } from 'rxjs';
import { ColumnDefinition, Options, TabulatorFull as Tabulator } from 'tabulator-tables';

import { BaseCol } from './cols/base-col';
import { BoolCol } from './cols/bool-col';
import { DateCol } from './cols/date-col';
import { EnumCol } from './cols/enum-col';
import { NumberCol } from './cols/number-col';
import { RelationCol } from './cols/relation-col';
import { StringCol } from './cols/string-col';
import { TaGridFilters } from './grid-filters';
import { ColMetaData, Filter, ParameterType, Preset, ViewType, ajaxRequestFuncParams, ajaxResponse } from './types';
import { groupBy } from './utils';

export interface IDataService<T> {
  getData$: (params: ajaxRequestFuncParams) => Observable<ajaxResponse<T>>;
}

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
  public table: Tabulator | null = null;
  public cols: { [index: string]: BaseCol<any> } = {};
  public filters: TaGridFilters | null = null;

  public readonly isReady$ = new BehaviorSubject(false);
  public readonly isDataReady$ = new BehaviorSubject(false);

  public tableHtml: ElementRef | null = null;
  public readonly displayType = signal<ViewType>('card');

  public groupBy: keyof T | null = null;
  public readonly totalItems = signal(0);

  constructor(public readonly scope: string) {}

  public init(params: {
    elementRef: ElementRef;
    colsMetaData: ColMetaData[];
    data?: T[];
    services?: IDataService<T>;
    initialFilter?: Filter[];
    preset?: Preset[];
  }) {
    this.table = new Tabulator(params.elementRef.nativeElement, this._getOptions(params));

    this.table.on('tableBuilt', () => {
      this.tableHtml = params.elementRef;
      this.filters = new TaGridFilters(this.scope, this.table!, params.preset);
      this.isReady$.next(true);
    });
    this.table.on('rowClick', (_e, row) => {
      this.rowClicked$.next(<T>row.getData());
    });
  }

  public destroy() {
    this.table?.destroy();
  }

  public setGroupBy(field: string) {
    this.groupBy = field as keyof T;
    this.table?.setGroupBy(field);
    this.table?.setData();
  }
  public clearGroupBy() {
    this.groupBy = null;
    this.table?.setGroupBy([]);
    this.table?.setData();
  }

  public switchView(type: ViewType) {
    this.displayType.set(type);
  }

  private _getOptions(params: {
    colsMetaData: ColMetaData[];
    data?: T[];
    services?: IDataService<T>;
    initialFilter?: Filter[];
  }): Options {
    const baseOptions: Options = {
      height: '500px',
      layout: 'fitColumns',
      initialFilter: params.initialFilter,
      columns: this._getColumns(params.colsMetaData),
    };

    const serviceOptions: Options = params.services
      ? {
          paginationMode: 'remote',
          pagination: true,
          paginationSize: 20,
          paginationInitialPage: 1,
          ajaxFiltering: true,
          filterMode: 'remote',
          ajaxSorting: true,
          sortMode: 'remote',
          ajaxURL: 'dummy',
          ajaxRequestFunc: (url: string, config: any, ajaxParams: ajaxRequestFuncParams): Promise<ajaxResponse<T>> => {
            return firstValueFrom(
              params.services!.getData$({
                ...ajaxParams,
                groupBy: this.groupBy as string,
                colsMetaData: params.colsMetaData,
              })
            );
          },
          ajaxResponse: (_: any, __: any, response: ajaxResponse<T>) => {
            this.isDataReady$.next(true);
            this.totalItems.set(response.total);
            return response;
          },
        }
      : {};

    const dataOptions: Options = params.data
      ? {
          data: params.data,
        }
      : {};
    return { ...baseOptions, ...serviceOptions, ...dataOptions };
  }

  private _getColumns(colsMetaData: ColMetaData[]): ColumnDefinition[] {
    this.cols = Object.fromEntries(
      colsMetaData.map(meta => {
        const field = this._factoryCols(meta);
        return [field.key, field];
      })
    );

    return Object.keys(this.cols)
      .filter(key => !key.startsWith('_'))
      .map(key => ({ ...this.cols[key].getColDef() }));
  }

  private _factoryCols(col: ColMetaData): BaseCol<any> {
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
