import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export type ModalSize = 'fullscreen' | 'large' | 'medium' | 'small';
/** `surface` : en-tête clair avec filet ; `brand` : bandeau de marque plein, pour les modales bloquantes. */
export type ModalTone = 'surface' | 'brand';
export declare class TaModalComponent extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    size: import("@angular/core").InputSignal<ModalSize | undefined>;
    title: import("@angular/core").InputSignal<string>;
    /** Surtitre en capitales, au-dessus du titre. */
    overline: import("@angular/core").InputSignal<string>;
    tone: import("@angular/core").InputSignal<ModalTone>;
    /** Masque la croix ; la modale projette alors sa propre action dans `[modal-header-action]`. */
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
