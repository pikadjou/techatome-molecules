import * as i0 from "@angular/core";
/** Couleur de l'arc parcouru. */
export type ProgressCircleTone = 'brand' | 'accent' | 'highlight' | 'success';
/** `default` : piste claire ; `invert` : piste translucide pour surface sombre. */
export type ProgressCircleTrack = 'default' | 'invert';
export declare class ProgressCircleComponent {
    /**
     * Progress in percentage
     */
    progress: import("@angular/core").InputSignal<number>;
    /**
     * Title located above
     */
    upTitle: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Title located below
     */
    downTitle: import("@angular/core").InputSignal<string | undefined>;
    /** Diamètre en pixels ; `null` remplit le conteneur. */
    size: import("@angular/core").InputSignal<number | null>;
    /** Épaisseur de l'anneau, dans le repère du `viewBox` (100 unités). */
    thickness: import("@angular/core").InputSignal<number>;
    /** Masque le pourcentage, quand un contenu est projeté au centre. */
    hideValue: import("@angular/core").InputSignal<boolean>;
    linecap: import("@angular/core").InputSignal<"round" | "butt">;
    tone: import("@angular/core").InputSignal<ProgressCircleTone>;
    track: import("@angular/core").InputSignal<ProgressCircleTrack>;
    get circumference(): number;
    get canDisplayText(): boolean;
    /** Rayon ajusté à l'épaisseur pour rester dans le `viewBox`. */
    get radius(): number;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressCircleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressCircleComponent, "ta-progress-circle", never, { "progress": { "alias": "progress"; "required": false; "isSignal": true; }; "upTitle": { "alias": "upTitle"; "required": false; "isSignal": true; }; "downTitle": { "alias": "downTitle"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "thickness": { "alias": "thickness"; "required": false; "isSignal": true; }; "hideValue": { "alias": "hideValue"; "required": false; "isSignal": true; }; "linecap": { "alias": "linecap"; "required": false; "isSignal": true; }; "tone": { "alias": "tone"; "required": false; "isSignal": true; }; "track": { "alias": "track"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
