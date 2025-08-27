import * as i0 from "@angular/core";
export declare class TimeAgoComponent {
    date: string;
    withHours: boolean;
    get absDays(): number;
    get days(): number;
    key(): string;
    private _getTranslationKey;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeAgoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeAgoComponent, "ta-time-ago", never, { "date": { "alias": "date"; "required": false; }; "withHours": { "alias": "withHours"; "required": false; }; }, {}, never, never, true, never>;
}
