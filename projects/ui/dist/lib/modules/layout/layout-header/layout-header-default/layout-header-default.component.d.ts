import { EventEmitter, TemplateRef } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class LayoutHeaderDefaultComponent extends TaBaseComponent {
    showBack: import("@angular/core").InputSignal<boolean>;
    menuTemplate: import("@angular/core").InputSignal<TemplateRef<any> | undefined>;
    title: import("@angular/core").InputSignal<string | undefined>;
    backEvent: EventEmitter<any>;
    constructor();
    showBackAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutHeaderDefaultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutHeaderDefaultComponent, "ta-layout-header-default", never, { "showBack": { "alias": "showBack"; "required": false; "isSignal": true; }; "menuTemplate": { "alias": "menuTemplate"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; }, { "backEvent": "backEvent"; }, never, never, true, never>;
}
