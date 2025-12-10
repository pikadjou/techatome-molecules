import { EventEmitter, TemplateRef } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class LayoutHeaderDefaultComponent extends TaBaseComponent {
    showBack: boolean;
    menuTemplate?: TemplateRef<any>;
    title?: string;
    backEvent: EventEmitter<any>;
    constructor();
    showBackAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutHeaderDefaultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutHeaderDefaultComponent, "ta-layout-header-default", never, { "showBack": { "alias": "showBack"; "required": false; }; "menuTemplate": { "alias": "menuTemplate"; "required": false; }; "title": { "alias": "title"; "required": false; }; }, { "backEvent": "backEvent"; }, never, never, true, never>;
}
