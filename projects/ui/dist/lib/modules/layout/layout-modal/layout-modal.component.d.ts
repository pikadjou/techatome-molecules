import { EventEmitter } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export type ModalStyle = 'full' | 'big' | 'classic' | 'small';
export declare class LayoutModalComponent extends TaBaseComponent {
    style: import("@angular/core").InputSignal<ModalStyle>;
    title: import("@angular/core").InputSignal<string>;
    showClose: import("@angular/core").InputSignal<boolean>;
    closeEvent: EventEmitter<void>;
    constructor();
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutModalComponent, "ta-layout-modal", never, { "style": { "alias": "style"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "showClose": { "alias": "showClose"; "required": false; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, ["*"], true, never>;
}
