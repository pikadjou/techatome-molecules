import { TemplateRef } from "@angular/core";
import { InputPanel } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class PanelComponent extends TaBaseComponent {
    inputsTemplate: TemplateRef<any>;
    panel: InputPanel;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelComponent, "ta-form-panel", never, { "inputsTemplate": { "alias": "inputsTemplate"; "required": false; }; "panel": { "alias": "panel"; "required": false; }; }, {}, never, never, true, never>;
}
