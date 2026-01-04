import * as i0 from "@angular/core";
export interface DualButtonInput {
    icon: string;
    label: string;
    callback: () => void;
}
export declare class DualButtonComponent {
    isFull: import("@angular/core").InputSignal<boolean>;
    first: import("@angular/core").InputSignal<DualButtonInput>;
    second: import("@angular/core").InputSignal<DualButtonInput>;
    type: import("@angular/core").InputSignal<"primary" | "secondary">;
    constructor();
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<DualButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DualButtonComponent, "ta-dual-button", never, { "isFull": { "alias": "isFull"; "required": false; "isSignal": true; }; "first": { "alias": "first"; "required": true; "isSignal": true; }; "second": { "alias": "second"; "required": true; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
