import * as i0 from "@angular/core";
/**
 * `row` : libellé à gauche, valeur à droite — pour une fiche contractuelle où
 * l'œil balaie les intitulés.
 * `stack` : libellé en capitales au-dessus de la valeur — pour une identité que
 * l'on lit valeur par valeur.
 * `fact` : icône, puis chiffre, puis libellé. La forme d'un relevé de
 * caractéristiques, où la valeur prime sur son intitulé.
 */
export type DataGridOrientation = "row" | "stack" | "fact";
/**
 * Grille de couples libellé / valeur séparés par une gouttière d'un pixel.
 * Le filet n'est pas une bordure : c'est le fond du conteneur qui affleure
 * entre des cellules opaques. Les items s'alignent sur l'orientation portée par
 * le conteneur, qu'ils lisent via `:host-context()`.
 */
export declare class DataGridComponent {
    /** Nombre de colonnes au-delà du point de rupture mobile (1 à 4). */
    columns: import("@angular/core").InputSignal<2 | 1 | 3 | 4>;
    orientation: import("@angular/core").InputSignal<DataGridOrientation>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataGridComponent, "ta-data-grid", never, { "columns": { "alias": "columns"; "required": false; "isSignal": true; }; "orientation": { "alias": "orientation"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
