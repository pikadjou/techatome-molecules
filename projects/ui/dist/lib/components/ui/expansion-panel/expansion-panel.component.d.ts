import { TemplateRef } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export interface ExpansionPanelInput {
    title: TemplateRef<any>;
    content: TemplateRef<any>;
    context?: object;
}
export declare class CamExpansionPanelComponent extends TaBaseComponent {
    templates: ExpansionPanelInput[];
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CamExpansionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CamExpansionPanelComponent, "ta-expansion-panel", never, { "templates": { "alias": "templates"; "required": false; }; }, {}, never, never, true, never>;
}
