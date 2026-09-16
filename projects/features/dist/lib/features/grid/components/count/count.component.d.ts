import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
/**
 * Nombre de résultats de la liste.
 *
 * Le panneau de filtres l'annonce déjà à côté de son titre, mais il vit dans un
 * tiroir : posé au-dessus des résultats, le compte dit tout de suite ce que les
 * filtres ont laissé passer.
 */
export declare class TaGridCountComponent extends TaAbstractGridComponent<unknown> {
    /**
     * Clé de traduction pluralisée du décompte. La valeur par défaut compte des
     * résultats ; un appelant qui sait ce qu'il liste compte des biens, des
     * personnes ou des dossiers.
     */
    label: import("@angular/core").InputSignal<string>;
    get total(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridCountComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridCountComponent, "ta-grid-count", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
