import { InputBase } from '@ta/form-model';
import { TaGridData } from '../models/grid-data';
import { Filter } from '../models/types';
import * as i0 from "@angular/core";
export declare class TaGridFormService<T> {
    constructor();
    getFiltersForm(model: TaGridData<T>): InputBase<any>[];
    formatFiltersForm(model: TaGridData<T>, data: any): Filter[];
    getGroupForm(model: TaGridData<T>): InputBase<any>[];
    formatGroupForm(data: any): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridFormService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaGridFormService<any>>;
}
