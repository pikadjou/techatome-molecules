import * as i0 from "@angular/core";
export declare class ProgressCircleComponent {
    /**
     * Progress in percentage
     */
    progress: import("@angular/core").InputSignal<number>;
    /**
     * Title located above
     */
    upTitle: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Title located below
     */
    downTitle: import("@angular/core").InputSignal<string | undefined>;
    get circumference(): number;
    get canDisplayText(): boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressCircleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressCircleComponent, "ta-progress-circle", never, { "progress": { "alias": "progress"; "required": false; "isSignal": true; }; "upTitle": { "alias": "upTitle"; "required": false; "isSignal": true; }; "downTitle": { "alias": "downTitle"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
