import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ListElementComponent {
    withSeparator: import("@angular/core").InputSignal<boolean>;
    flexColumn: import("@angular/core").InputSignal<boolean>;
    action: EventEmitter<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListElementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListElementComponent, "ta-list-element", never, { "withSeparator": { "alias": "withSeparator"; "required": false; "isSignal": true; }; "flexColumn": { "alias": "flexColumn"; "required": false; "isSignal": true; }; }, { "action": "action"; }, never, ["ta-list-title", "ta-list-sub-title", "ta-list-tag", "ta-list-extra-information"], true, never>;
}
