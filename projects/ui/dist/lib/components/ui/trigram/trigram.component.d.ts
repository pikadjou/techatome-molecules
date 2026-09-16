import * as i0 from "@angular/core";
/**
 * `brand` : pastille de marque, texte clair.
 * `highlight` : couleur secondaire de marque — c'est la seule qui tienne posée
 * sur une surface de marque pleine.
 * `surface` : pastille neutre, pour une liste posée sur une carte claire.
 * `invert` : pastille translucide, pour un fond sombre — la marque pleine y
 * ferait une tache, un simple voile suffit à détacher les initiales.
 */
export type TrigramTone = "brand" | "highlight" | "surface" | "invert";
export declare class TrigramComponent {
    /**
     * Text to display in trigram
     */
    value: import("@angular/core").InputSignal<string | null>;
    /**
     * Size of trigram
     */
    size: import("@angular/core").InputSignal<number>;
    /** `squircle` : carré arrondi, pour un avatar aligné sur des cartes. */
    shape: import("@angular/core").InputSignal<"circle" | "squircle">;
    tone: import("@angular/core").InputSignal<TrigramTone>;
    constructor();
    getClasses(): string[];
    getFontSize(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrigramComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrigramComponent, "ta-trigram", never, { "value": { "alias": "value"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "shape": { "alias": "shape"; "required": false; "isSignal": true; }; "tone": { "alias": "tone"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
