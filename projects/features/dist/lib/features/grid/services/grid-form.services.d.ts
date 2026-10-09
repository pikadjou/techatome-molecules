import { InputBase } from '@ta/form-model';
import { TaGridData } from '../models/grid-data';
import { Filter } from '../models/types';
import * as i0 from "@angular/core";
export declare class TaGridFormService<T> {
    constructor();
    getFiltersForm(model: TaGridData<T>): InputBase<any>[];
    getHighlightedFiltersForm(model: TaGridData<T>): InputBase<any>[];
    /** Colonnes du panneau de filtres. */
    filterKeys(model: TaGridData<T>): string[];
    /** Colonnes de la barre mise en avant. */
    highlightedKeys(model: TaGridData<T>): string[];
    formatFiltersForm(model: TaGridData<T>, data: any): Filter[];
    getGroupForm(model: TaGridData<T>): InputBase<any>[];
    formatGroupForm(data: any): string | null;
    /** Chaque champ dans son propre panneau, à la largeur que la colonne demande. */
    private _filterInputs;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridFormService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaGridFormService<any>>;
}
