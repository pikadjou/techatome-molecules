import { EventEmitter } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class LayoutFullPanelComponent extends TaBaseComponent {
    width: string;
    title: string;
    closeEvent: EventEmitter<any>;
    constructor();
    askClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutFullPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutFullPanelComponent, "ta-layout-full-panel", never, { "width": { "alias": "width"; "required": false; }; "title": { "alias": "title"; "required": false; }; }, { "closeEvent": "closeEvent"; }, never, ["*"], true, never>;
}
