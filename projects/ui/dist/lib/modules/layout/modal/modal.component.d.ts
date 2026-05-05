import { EventEmitter } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export type ModalSize = 'fullscreen' | 'large' | 'medium' | 'small';
export declare class TaModalComponent extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    size: import("@angular/core").InputSignal<ModalSize | undefined>;
    title: import("@angular/core").InputSignal<string>;
    closeOnBackdrop: import("@angular/core").InputSignal<boolean>;
    closeEvent: EventEmitter<void>;
    constructor();
    sizeClass(): string;
    close(): void;
    onBackdropClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaModalComponent, "ta-modal", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "closeOnBackdrop": { "alias": "closeOnBackdrop"; "required": false; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, ["[modal-content]", "[modal-footer]"], true, never>;
}
