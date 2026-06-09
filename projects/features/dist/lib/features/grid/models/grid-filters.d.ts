import { TaTableState } from './table-state';
import { ActiveFilter, Filter, Preset } from './types';
export declare class TaGridFilters {
    readonly scope: string;
    readonly table: TaTableState<any>;
    readonly preset: Preset[];
    private _debounceTimer;
    constructor(scope: string, table: TaTableState<any>, preset?: Preset[]);
    get(): ActiveFilter[];
    apply(filters: Filter[]): void;
    remove(filter: Filter): void;
    destroy(): void;
}
