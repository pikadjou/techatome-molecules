import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export type ModalSize = "fullscreen" | "large" | "medium" | "small";
/**
 * `surface` : en-tête clair, séparé du contenu par un filet.
 * `brand` : bandeau de marque plein. À réserver aux modales qui interrompent le
 * parcours — l'en-tête coloré dit qu'on ne passe pas à côté.
 */
export type ModalTone = "surface" | "brand";
export declare class TaModalComponent extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    size: import("@angular/core").InputSignal<ModalSize | undefined>;
    title: import("@angular/core").InputSignal<string>;
    /** Surtitre en capitales, au-dessus du titre. */
    overline: import("@angular/core").InputSignal<string>;
    tone: import("@angular/core").InputSignal<ModalTone>;
    /**
     * Masque la croix. Une modale bloquante projette alors sa propre action dans
     * `[modal-header-action]` — se déconnecter, par exemple — plutôt que d'offrir
     * une sortie qui ne mène nulle part.
     */
    showClose: import("@angular/core").InputSignal<boolean>;
    closeOnBackdrop: import("@angular/core").InputSignal<boolean>;
    contentFit: import("@angular/core").InputSignal<boolean>;
    closeEvent: import("@angular/core").OutputEmitterRef<void>;
    constructor();
    containerClass(): string;
    close(): void;
    onBackdropClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaModalComponent, "ta-modal", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "overline": { "alias": "overline"; "required": false; "isSignal": true; }; "tone": { "alias": "tone"; "required": false; "isSignal": true; }; "showClose": { "alias": "showClose"; "required": false; "isSignal": true; }; "closeOnBackdrop": { "alias": "closeOnBackdrop"; "required": false; "isSignal": true; }; "contentFit": { "alias": "contentFit"; "required": false; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, ["[modal-header-action]", "[modal-content]", "[modal-footer]"], true, never>;
}
