import * as i0 from "@angular/core";
/** Racine d'une page : en-tête, titre, contenu, navigation basse. */
export declare class LayoutPageComponent {
    /** Étire la page sur la hauteur de la fenêtre, navigation basse en bas. */
    fullHeight: import("@angular/core").InputSignal<boolean>;
    /** Contenu pleine largeur, hors colonne du gabarit. */
    bleed: import("@angular/core").InputSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutPageComponent, "ta-layout-page", never, { "fullHeight": { "alias": "fullHeight"; "required": false; "isSignal": true; }; "bleed": { "alias": "bleed"; "required": false; "isSignal": true; }; }, {}, never, ["ta-layout-header", "ta-layout-title", "*", "ta-layout-nav"], true, never>;
}
