import { InputBase } from '@ta/form-model';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridFormComponent extends TaAbstractGridComponent<unknown> {
    showTitle: import("@angular/core").InputSignal<boolean>;
    showReset: import("@angular/core").InputSignal<boolean>;
    /** Clé de traduction du titre du panneau. */
    title: import("@angular/core").InputSignal<string>;
    /** Affiche le nombre de résultats à côté du titre. */
    showResultCount: import("@angular/core").InputSignal<boolean>;
    /**
     * Affiche le regroupement dans le panneau. Désactivé par défaut : le
     * regroupement organise l'affichage, il est porté par `ta-grid-control`.
     */
    showGroup: import("@angular/core").InputSignal<boolean>;
    filtersForm: import("@angular/core").WritableSignal<InputBase<any>[]>;
    groupForm: import("@angular/core").WritableSignal<InputBase<any>[]>;
    private _formService;
    ngOnInit(): void;
    applyFilters(data: any): void;
    applyGroup(data: any): void;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridFormComponent, "ta-grid-form", never, { "showTitle": { "alias": "showTitle"; "required": false; "isSignal": true; }; "showReset": { "alias": "showReset"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "showResultCount": { "alias": "showResultCount"; "required": false; "isSignal": true; }; "showGroup": { "alias": "showGroup"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
