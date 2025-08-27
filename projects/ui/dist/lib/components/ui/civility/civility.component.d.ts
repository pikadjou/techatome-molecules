import { Civility } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class CivilityComponent {
    /**
     * Define the civility to display
     */
    civility: Civility | null;
    constructor();
    getIcon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CivilityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CivilityComponent, "ta-civility", never, { "civility": { "alias": "civility"; "required": false; }; }, {}, never, never, true, never>;
}
