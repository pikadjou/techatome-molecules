import { TaBaseModal } from '@ta/utils';
import { ModalParameter } from '../common-modal';
import * as i0 from "@angular/core";
/** Confirmation Oui/Non : `confirm(true)` sur Oui, `dismiss()` sur Non ou fermeture. */
export declare class ValidationModal extends TaBaseModal<ModalParameter | undefined, boolean> {
    get title(): string;
    get subtitle(): string;
    constructor();
    onNoClick(): void;
    onYesClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValidationModal, "ta-validation-modal", never, {}, {}, never, never, true, never>;
}
