import { OnInit } from "@angular/core";
import { Duration } from "date-fns";
import * as i0 from "@angular/core";
export declare class DurationComponent implements OnInit {
    startDate: import("@angular/core").InputSignal<string | number>;
    endDate: import("@angular/core").InputSignal<string | number>;
    interval: Duration | null;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DurationComponent, "ta-duration", never, { "startDate": { "alias": "startDate"; "required": false; "isSignal": true; }; "endDate": { "alias": "endDate"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
