import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ColMetaData, Filter, ajaxRequestFuncParams, ajaxResponse } from './types';
export interface ITableStateServices<T> {
    getData$: (params: ajaxRequestFuncParams) => Observable<ajaxResponse<T>>;
}
export interface ITableStateParams<T> {
    colsMetaData: ColMetaData<T>[];
    data?: T[];
    services?: ITableStateServices<T>;
    initialFilter?: Filter[];
    onDataUpdate?: (total: number) => void;
}
export declare class TaTableState<T> {
    readonly rows: import("@angular/core").WritableSignal<T[]>;
    readonly currentPage: import("@angular/core").WritableSignal<number>;
    readonly pageSize: import("@angular/core").WritableSignal<number>;
    readonly totalItems: import("@angular/core").WritableSignal<number>;
    readonly totalPages: import("@angular/core").Signal<number>;
    readonly sortField: import("@angular/core").WritableSignal<string | null>;
    readonly sortDir: import("@angular/core").WritableSignal<"asc" | "desc">;
    readonly filters: import("@angular/core").WritableSignal<Filter[]>;
    readonly groupByField: import("@angular/core").WritableSignal<string | null>;
    readonly isLoading: import("@angular/core").WritableSignal<boolean>;
    readonly rowClicked$: Subject<T>;
    readonly isReady$: BehaviorSubject<boolean>;
    readonly isDataReady$: BehaviorSubject<boolean>;
    private _services;
    private _allData;
    private _colsMetaData;
    private _fetchTimer;
    private _fetchId;
    private _onDataUpdate?;
    init(params: ITableStateParams<T>): void;
    getData(): T[];
    getPage(): number;
    getPageMax(): number;
    setPage(n: number): void;
    nextPage(): void;
    previousPage(): void;
    setFilter(filters: Filter[]): void;
    getFilters(_includeHeaderFilters: boolean): Filter[];
    removeFilter(field: string, type: Filter['type'], value: any): void;
    setSort(field: string | null, dir: 'asc' | 'desc'): void;
    setGroupBy(field: string | null): void;
    refresh(): void;
    destroy(): void;
    private _scheduleUpdate;
    private _applyLocalFilter;
    private _fetchData;
}
