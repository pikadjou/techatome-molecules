import * as i0 from "@angular/core";
/** `brand` : marque pleine ; `highlight` : secondaire de marque ; `surface` : neutre ; `invert` : translucide sur fond sombre. */
export type TrigramTone = 'brand' | 'highlight' | 'surface' | 'invert';
export declare class TrigramComponent {
    /**
     * Text to display in trigram
     */
    value: import("@angular/core").InputSignal<string | null>;
    /**
     * Size of trigram
     */
    size: import("@angular/core").InputSignal<number>;
    /** `squircle` : carré arrondi. */
    shape: import("@angular/core").InputSignal<"circle" | "squircle">;
    tone: import("@angular/core").InputSignal<TrigramTone>;
    constructor();
    getClasses(): string[];
    getFontSize(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrigramComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrigramComponent, "ta-trigram", never, { "value": { "alias": "value"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "shape": { "alias": "shape"; "required": false; "isSignal": true; }; "tone": { "alias": "tone"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
