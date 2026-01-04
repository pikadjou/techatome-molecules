import * as i0 from "@angular/core";
export declare class LogoComponent {
    /**
     * If set, logo white or black version will be taken
     */
    color: import("@angular/core").InputSignal<"white" | "black" | undefined>;
    /**
     * If set, logo oneline version will be taken
     */
    type: import("@angular/core").InputSignal<"oneline" | undefined>;
    /**
     * Set the logo width in %
     */
    widthPercentage: import("@angular/core").InputSignal<number>;
    get imageWidth(): string;
    constructor();
    getImagePath(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogoComponent, "ta-logo", never, { "color": { "alias": "color"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "widthPercentage": { "alias": "widthPercentage"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
