import { Civility } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class CivilityComponent {
    /**
     * Define the civility to display
     */
    civility: import("@angular/core").InputSignal<Civility | null>;
    constructor();
    getIcon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CivilityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CivilityComponent, "ta-civility", never, { "civility": { "alias": "civility"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
