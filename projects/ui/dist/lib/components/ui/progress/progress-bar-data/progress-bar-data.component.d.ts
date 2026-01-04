import * as i0 from "@angular/core";
export declare class ProgressBarDataComponent {
    current: import("@angular/core").InputSignal<number | undefined>;
    max: import("@angular/core").InputSignal<number | undefined>;
    title: import("@angular/core").InputSignal<string>;
    titleIcon: import("@angular/core").InputSignal<string | undefined>;
    /**
     * @deprecated
     */
    description: import("@angular/core").InputSignal<string | undefined>;
    rightText: import("@angular/core").InputSignal<{
        text: string;
        colorClass?: string | undefined;
    } | undefined>;
    get progressValue(): string;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarDataComponent, "ta-progress-bar-data", never, { "current": { "alias": "current"; "required": false; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": true; "isSignal": true; }; "titleIcon": { "alias": "titleIcon"; "required": false; "isSignal": true; }; "description": { "alias": "description"; "required": false; "isSignal": true; }; "rightText": { "alias": "rightText"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
