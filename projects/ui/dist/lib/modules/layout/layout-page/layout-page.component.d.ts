import * as i0 from "@angular/core";
/**
 * Racine d'une page applicative : en-tête, titre, contenu, navigation basse.
 */
export declare class LayoutPageComponent {
    /**
     * Étire la page sur la hauteur de la fenêtre et pousse la navigation basse
     * en bas, même quand le contenu est court. Sans cela, une page courte laisse
     * le pied remonter au milieu de l'écran.
     */
    fullHeight: import("@angular/core").InputSignal<boolean>;
    /**
     * Laisse le contenu occuper toute la largeur au lieu d'être ramené dans la
     * colonne du gabarit. À réserver aux pages qui gèrent elles-mêmes leur
     * centrage — une page d'accueil dont les sections vont d'un bord à l'autre.
     */
    bleed: import("@angular/core").InputSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutPageComponent, "ta-layout-page", never, { "fullHeight": { "alias": "fullHeight"; "required": false; "isSignal": true; }; "bleed": { "alias": "bleed"; "required": false; "isSignal": true; }; }, {}, never, ["ta-layout-header", "ta-layout-title", "*", "ta-layout-nav"], true, never>;
}
