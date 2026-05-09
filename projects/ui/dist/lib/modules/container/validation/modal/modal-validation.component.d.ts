import { EventEmitter } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { ModalParameter } from "../common-modal";
import * as i0 from "@angular/core";
export declare class ValidationModal extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    params: import("@angular/core").InputSignal<ModalParameter | undefined>;
    validated: EventEmitter<void>;
    closeEvent: EventEmitter<void>;
    get title(): string;
    get subtitle(): string;
    constructor();
    onNoClick(): void;
    onYesClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValidationModal, "ta-validation-modal", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; "params": { "alias": "params"; "required": false; "isSignal": true; }; }, { "validated": "validated"; "closeEvent": "closeEvent"; }, never, never, true, never>;
}
