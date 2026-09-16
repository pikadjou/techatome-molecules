import { ColorType, TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
/**
 * Étiquette : un mot posé sur un fond teinté — un état, une catégorie, un
 * attribut. Le contenu est projeté, la couleur vient de `type`.
 */
export declare class LabelComponent {
    size: import("@angular/core").InputSignal<TaSizes>;
    type: import("@angular/core").InputSignal<ColorType>;
    /** Pictogramme posé devant le texte. */
    icon: import("@angular/core").InputSignal<string | undefined>;
    /**
     * `theme` suit le rayon fixé par le thème pour les étiquettes ; `pill` force
     * la capsule, pour une étiquette qui longe un avatar ou une photo, où un
     * angle laisserait un vide.
     */
    shape: import("@angular/core").InputSignal<"pill" | "theme">;
    getClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelComponent, "ta-label", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "shape": { "alias": "shape"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
