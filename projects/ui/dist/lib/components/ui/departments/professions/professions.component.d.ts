import { TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class DepartmentProfessionsComponent {
    /**
     * List of professions to display
     */
    professions: import("@angular/core").InputSignal<string[]>;
    /**
     * font-size
     */
    fontSize: import("@angular/core").InputSignal<TaSizes>;
    maxVisible: import("@angular/core").InputSignal<number | undefined>;
    get visibleProfessions(): string[];
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<DepartmentProfessionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DepartmentProfessionsComponent, "ta-department-professions", never, { "professions": { "alias": "professions"; "required": true; "isSignal": true; }; "fontSize": { "alias": "fontSize"; "required": false; "isSignal": true; }; "maxVisible": { "alias": "maxVisible"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
