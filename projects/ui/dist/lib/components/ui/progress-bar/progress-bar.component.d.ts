import * as i0 from "@angular/core";
/** Couleur de la portion parcourue. */
export type ProgressBarTone = 'brand' | 'accent' | 'highlight' | 'success' | 'warning' | 'alert';
export declare class ProgressBarComponent {
    current: import("@angular/core").InputSignal<number>;
    max: import("@angular/core").InputSignal<number>;
    /** `sm` : filet de 2 px ; `md` : jauge de 7 px arrondie. */
    size: import("@angular/core").InputSignal<"sm" | "md" | "lg">;
    tone: import("@angular/core").InputSignal<ProgressBarTone>;
    getClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarComponent, "ta-progress-bar", never, { "current": { "alias": "current"; "required": true; "isSignal": true; }; "max": { "alias": "max"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "tone": { "alias": "tone"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
