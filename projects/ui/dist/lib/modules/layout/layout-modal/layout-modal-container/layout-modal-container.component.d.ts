import { TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { TaBaseComponent } from "@ta/utils";
import { ModalStyle } from "../layout-modal.component";
import * as i0 from "@angular/core";
export interface TemplateModalContainerData {
    template: TemplateRef<any>;
    askClosing$?: Observable<null>;
    style?: ModalStyle;
}
export declare class TemplateModalContainerComponent extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    template: import("@angular/core").InputSignal<TemplateRef<any> | null>;
    style: import("@angular/core").InputSignal<ModalStyle>;
    askClosing$: import("@angular/core").InputSignal<Observable<null> | undefined>;
    closeEvent: import("@angular/core").OutputEmitterRef<void>;
    modalSize(): "small" | "medium" | "large" | "fullscreen";
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateModalContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TemplateModalContainerComponent, "ta-template-modal-container", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; "template": { "alias": "template"; "required": false; "isSignal": true; }; "style": { "alias": "style"; "required": false; "isSignal": true; }; "askClosing$": { "alias": "askClosing$"; "required": false; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, never, true, never>;
}
/** @deprecated utiliser TemplateModalContainerComponent */
export { TemplateModalContainerComponent as TemplateModalContainer };
