import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
/** Nombre de résultats de la liste, affiché au-dessus des résultats. */
export declare class TaGridCountComponent extends TaAbstractGridComponent<unknown> {
    /** Clé de traduction pluralisée du décompte (résultats par défaut). */
    label: import("@angular/core").InputSignal<string>;
    get total(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridCountComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridCountComponent, "ta-grid-count", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
