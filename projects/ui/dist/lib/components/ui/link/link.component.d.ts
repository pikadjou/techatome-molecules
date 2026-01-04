import { EventEmitter } from "@angular/core";
import { TaSizes, TaState } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class LinkComponent {
    state: import("@angular/core").InputSignal<TaState>;
    underline: import("@angular/core").InputSignal<boolean>;
    bold: import("@angular/core").InputSignal<boolean>;
    size: import("@angular/core").InputSignal<TaSizes>;
    icon: import("@angular/core").InputSignal<string | null>;
    action: EventEmitter<any>;
    constructor();
    handleClick(): void;
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkComponent, "ta-link", never, { "state": { "alias": "state"; "required": false; "isSignal": true; }; "underline": { "alias": "underline"; "required": false; "isSignal": true; }; "bold": { "alias": "bold"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; }, { "action": "action"; }, never, ["*"], true, never>;
}
