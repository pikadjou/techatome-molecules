import * as i0 from "@angular/core";
export declare class TrigramComponent {
    /**
     * Text to display in trigram
     */
    value: import("@angular/core").InputSignal<string | null>;
    /**
     * Size of trigram
     */
    size: import("@angular/core").InputSignal<number>;
    constructor();
    getFontSize(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrigramComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrigramComponent, "ta-trigram", never, { "value": { "alias": "value"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
