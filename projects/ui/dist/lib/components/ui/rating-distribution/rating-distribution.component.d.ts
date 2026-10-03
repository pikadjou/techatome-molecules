import * as i0 from "@angular/core";
/** Un échelon de la répartition. */
export type RatingDistributionStep = {
    note: number;
    count: number;
};
/** Répartition des notes reçues, une barre par échelon. */
export declare class RatingDistributionComponent {
    /** Notes reçues, une entrée par évaluation. */
    values: import("@angular/core").InputSignal<number[]>;
    /** Nombre d'échelons. */
    max: import("@angular/core").InputSignal<number>;
    readonly total: import("@angular/core").Signal<number>;
    /** Échelons du plus haut au plus bas. */
    readonly steps: import("@angular/core").Signal<RatingDistributionStep[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingDistributionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingDistributionComponent, "ta-rating-distribution", never, { "values": { "alias": "values"; "required": true; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
