import * as i0 from "@angular/core";
/** Une cellule de `ta-data-grid` : un libellé, une valeur projetée. */
export declare class DataGridItemComponent {
    /** Icône facultative, affichée avant le libellé. */
    icon: import("@angular/core").InputSignal<string | undefined>;
    label: import("@angular/core").InputSignal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataGridItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataGridItemComponent, "ta-data-grid-item", never, { "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
