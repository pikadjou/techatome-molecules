import * as i0 from "@angular/core";
export declare class TimeAgoComponent {
    date: import("@angular/core").InputSignal<string>;
    withHours: import("@angular/core").InputSignal<boolean>;
    get absDays(): number;
    get days(): number;
    key(): string;
    private _getTranslationKey;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeAgoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeAgoComponent, "ta-time-ago", never, { "date": { "alias": "date"; "required": true; "isSignal": true; }; "withHours": { "alias": "withHours"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
