import * as i0 from "@angular/core";
/** Teinte du surtitre ; `invert` et `highlight` pour les fonds sombres. */
export type OverlineTone = 'muted' | 'accent' | 'brand' | 'invert' | 'highlight';
export declare class OverlineComponent {
    tone: import("@angular/core").InputSignal<OverlineTone>;
    /** `sm` dans une carte, `md` en tête de section. */
    size: import("@angular/core").InputSignal<"sm" | "md">;
    getClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OverlineComponent, "ta-overline", never, { "tone": { "alias": "tone"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
