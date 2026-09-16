import * as i0 from "@angular/core";
/** Une marche de l'échelle, du haut vers le bas. */
export type RatingDistributionStep = {
    note: number;
    count: number;
};
/**
 * Répartition des notes reçues, une barre par échelon.
 *
 * Une moyenne cache sa dispersion : quatre étoiles peuvent recouvrir un accord
 * unanime comme un partage entre enthousiastes et déçus. L'échelle montre
 * laquelle des deux on lit.
 */
export declare class RatingDistributionComponent {
    /** Les notes reçues, une entrée par évaluation. */
    values: import("@angular/core").InputSignal<number[]>;
    /** Hauteur de l'échelle. Cinq échelons par défaut, comme les étoiles. */
    max: import("@angular/core").InputSignal<number>;
    readonly total: import("@angular/core").Signal<number>;
    /**
     * Les échelons du plus haut au plus bas : c'est l'ordre dans lequel on lit
     * une note, et celui de toutes les échelles d'avis.
     */
    readonly steps: import("@angular/core").Signal<RatingDistributionStep[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingDistributionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingDistributionComponent, "ta-rating-distribution", never, { "values": { "alias": "values"; "required": true; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
