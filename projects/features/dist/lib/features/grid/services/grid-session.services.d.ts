import { Filter } from '../models/types';
import * as i0 from "@angular/core";
export declare class TaGridSessionService {
    private _filterData;
    private _openForms;
    setFilter(key: string, filter: Filter[]): void;
    getFilter(key: string): Filter[] | null;
    clearFilter(key: string): void;
    isFormOpen(key: string): boolean;
    setFormOpen(key: string, open: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridSessionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaGridSessionService>;
}
