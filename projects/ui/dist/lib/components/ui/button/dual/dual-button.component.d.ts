import * as i0 from "@angular/core";
export interface DualButtonInput {
    icon: string;
    label: string;
    callback: () => void;
}
export declare class DualButtonComponent {
    isFull: boolean;
    first: DualButtonInput;
    second: DualButtonInput;
    type: "primary" | "secondary";
    constructor();
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<DualButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DualButtonComponent, "ta-dual-button", never, { "isFull": { "alias": "isFull"; "required": false; }; "first": { "alias": "first"; "required": false; }; "second": { "alias": "second"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, true, never>;
}
