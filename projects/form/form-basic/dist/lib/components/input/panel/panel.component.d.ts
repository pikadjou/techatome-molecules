import { TemplateRef } from "@angular/core";
import { InputPanel } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class PanelComponent extends TaBaseComponent {
    inputsTemplate: import("@angular/core").InputSignal<TemplateRef<any>>;
    panel: import("@angular/core").InputSignal<InputPanel>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelComponent, "ta-form-panel", never, { "inputsTemplate": { "alias": "inputsTemplate"; "required": true; "isSignal": true; }; "panel": { "alias": "panel"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
