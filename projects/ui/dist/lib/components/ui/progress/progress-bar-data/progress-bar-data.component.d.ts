import * as i0 from "@angular/core";
export declare class ProgressBarDataComponent {
    current?: number;
    max?: number;
    title: string;
    titleIcon?: string;
    /**
     * @deprecated
     */
    description?: string;
    rightText?: {
        text: string;
        colorClass?: string;
    };
    get progressValue(): string;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarDataComponent, "ta-progress-bar-data", never, { "current": { "alias": "current"; "required": false; }; "max": { "alias": "max"; "required": false; }; "title": { "alias": "title"; "required": false; }; "titleIcon": { "alias": "titleIcon"; "required": false; }; "description": { "alias": "description"; "required": false; }; "rightText": { "alias": "rightText"; "required": false; }; }, {}, never, never, true, never>;
}
