import * as i0 from "@angular/core";
export declare class ProgressCircleComponent {
    /**
     * Progress in percentage
     */
    progress: number;
    /**
     * Title located above
     */
    upTitle?: string;
    /**
     * Title located below
     */
    downTitle?: string;
    get circumference(): number;
    get canDisplayText(): boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressCircleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressCircleComponent, "ta-progress-circle", never, { "progress": { "alias": "progress"; "required": false; }; "upTitle": { "alias": "upTitle"; "required": false; }; "downTitle": { "alias": "downTitle"; "required": false; }; }, {}, never, never, true, never>;
}
