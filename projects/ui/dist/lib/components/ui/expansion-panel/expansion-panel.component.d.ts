import { TemplateRef } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export interface ExpansionPanelInput {
    title: TemplateRef<any>;
    content: TemplateRef<any>;
    context?: object;
}
export declare class TaExpansionPanelComponent extends TaBaseComponent {
    templates: import("@angular/core").InputSignal<ExpansionPanelInput[]>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TaExpansionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaExpansionPanelComponent, "ta-expansion-panel", never, { "templates": { "alias": "templates"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
