import { Subject } from 'rxjs';
import { TaTableState } from './table-state';
import { ActiveFilter, Filter, Preset } from './types';
export declare class TaGridFilters {
    readonly scope: string;
    readonly table: TaTableState<any>;
    readonly preset: Preset[];
    /** Les critères ont changé hors des formulaires (effacement, tag retiré) : ceux-ci se reconstruisent. */
    readonly reset$: Subject<void>;
    private _debounceTimer;
    private _pending;
    constructor(scope: string, table: TaTableState<any>, preset?: Preset[]);
    get(): ActiveFilter[];
    apply(filters: Filter[]): void;
    /** Remplace les critères des seuls champs donnés : deux formulaires d'un même grid ne s'écrasent pas. */
    applyFields(fields: string[], filters: Filter[]): void;
    /** Immédiat, pour que les formulaires se reconstruisent sur les critères restants. */
    clear(fields?: string[]): void;
    remove(filter: Filter): void;
    destroy(): void;
}
