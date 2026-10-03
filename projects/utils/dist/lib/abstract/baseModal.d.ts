import { ModalState } from '../helpers/modal/state';
import { TaAbstractComponent } from './abstractComponent';
import * as i0 from "@angular/core";
/** Contenu d'une modale piloté par un `ModalState<T, U>` : entrée `T` lue via `modalState().input()`, résultat `U` rendu par `confirm()`. */
export declare abstract class TaBaseModal<T = unknown, U = unknown> extends TaAbstractComponent {
    modalState: import("@angular/core").InputSignal<ModalState<T, U> | null>;
    closeEvent: import("@angular/core").OutputEmitterRef<U>;
    constructor();
    isOpen(): boolean;
    /** Ferme avec un résultat : `completed()` sur l'état, puis `closeEvent`. */
    confirm(output: U): void;
    /** Ferme sans résultat. */
    dismiss(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaBaseModal<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaBaseModal<any, any>, "ng-component", never, { "modalState": { "alias": "modalState"; "required": false; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, never, false, never>;
}
