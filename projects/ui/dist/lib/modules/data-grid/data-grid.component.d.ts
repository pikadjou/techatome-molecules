import * as i0 from "@angular/core";
/** `row` : libellé | valeur ; `stack` : libellé au-dessus ; `fact` : icône, valeur, libellé. */
export type DataGridOrientation = 'row' | 'stack' | 'fact';
/** Grille libellé / valeur ; les items lisent l'orientation via `:host-context()`. */
export declare class DataGridComponent {
    /** Colonnes en desktop (1 à 4). */
    columns: import("@angular/core").InputSignal<2 | 1 | 3 | 4>;
    orientation: import("@angular/core").InputSignal<DataGridOrientation>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataGridComponent, "ta-data-grid", never, { "columns": { "alias": "columns"; "required": false; "isSignal": true; }; "orientation": { "alias": "orientation"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
