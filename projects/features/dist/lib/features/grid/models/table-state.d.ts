import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ColMetaData, Filter, PaginationMode, ajaxRequestFuncParams, ajaxResponse } from './types';
export interface ITableStateServices<T> {
    getData$: (params: ajaxRequestFuncParams) => Observable<ajaxResponse<T>>;
}
export interface ITableStateParams<T> {
    colsMetaData: ColMetaData<T>[];
    data?: T[];
    services?: ITableStateServices<T>;
    initialFilter?: Filter[];
    onDataUpdate?: (total: number) => void;
    /** Par défaut `page` ; `cursor` pour une source qui ne sait pas compter (connexion Relay). */
    pagination?: PaginationMode;
    pageSize?: number;
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
    readonly errorMessage: import("@angular/core").WritableSignal<string>;
    /** Mode `cursor` : la suite existe-t-elle, et d'où la reprendre. */
    readonly hasNextPage: import("@angular/core").WritableSignal<boolean>;
    readonly endCursor: import("@angular/core").WritableSignal<string | null>;
    readonly selectedIds: import("@angular/core").WritableSignal<Set<number>>;
    readonly selectionChanged$: Subject<number[]>;
    readonly rowClicked$: Subject<T>;
    readonly isReady$: BehaviorSubject<boolean>;
    readonly isDataReady$: BehaviorSubject<boolean>;
    private _services;
    private _pagination;
    /** Mode `cursor` : la prochaine réponse s'ajoute au lieu de remplacer. */
    private _appendNext;
    private _allData;
    private _colsMetaData;
    private _fetchTimer;
    private _fetchId;
    private _onDataUpdate?;
    init(params: ITableStateParams<T>): void;
    getData(): T[];
    getPage(): number;
    getPageMax(): number;
    isCursorMode(): boolean;
    /** Mode `cursor` : demande la suite, qui s'ajoute à ce qui est déjà lu. */
    loadMore(): void;
    setPage(n: number): void;
    nextPage(): void;
    previousPage(): void;
    setFilter(filters: Filter[]): void;
    getFilters(_includeHeaderFilters: boolean): Filter[];
    removeFilter(field: string, type: Filter['type'], value: any): void;
    setSort(field: string | null, dir: 'asc' | 'desc'): void;
    setGroupBy(field: string | null): void;
    refresh(): void;
    /** Repartir du début : la prochaine réponse remplace ce qui est affiché. */
    private _resetCursor;
    toggleRow(id: number): void;
    toggleAll(): void;
    clearSelection(): void;
    isAllPageSelected(): boolean;
    destroy(): void;
    private _scheduleUpdate;
    private _applyLocalFilter;
    private _fetchData;
}
