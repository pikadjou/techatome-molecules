import { BehaviorSubject, Subject } from 'rxjs';
import { BaseCol } from './cols/base-col';
import { TaGridFilters } from './grid-filters';
import { ITableStateServices as IDataService, TaTableState } from './table-state';
import { ColMetaData, Filter, Preset, ViewType } from './types';
export { ITableStateServices as IDataService } from './table-state';
export declare class TaGridData<T> {
    readonly scope: string;
    get data(): T[];
    get dataByGroup(): {
        key: string;
        data: T[];
    }[];
    get isGroup(): boolean;
    readonly rowClicked$: Subject<T>;
    table: TaTableState<T> | null;
    cols: {
        [index: string]: BaseCol<any>;
    };
    filters: TaGridFilters | null;
    readonly isReady$: BehaviorSubject<boolean>;
    readonly isDataReady$: BehaviorSubject<boolean>;
    private _tableSubs;
    readonly displayType: import("@angular/core").WritableSignal<ViewType>;
    groupBy: keyof T | null;
    readonly totalItems: import("@angular/core").WritableSignal<number>;
    constructor(scope: string);
    init(params: {
        colsMetaData: ColMetaData<T>[];
        data?: T[];
        services?: IDataService<T>;
        initialFilter?: Filter[];
        preset?: Preset[];
    }): void;
    destroy(): void;
    setGroupBy(field: string): void;
    clearGroupBy(): void;
    switchView(type: ViewType): void;
    private _buildCols;
    private _factoryCols;
}
