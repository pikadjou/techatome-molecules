import { Department } from "./interface";
import * as i0 from "@angular/core";
export declare class DepartmentsComponent {
    /**
     * List of departments object to display
     */
    departments: import("@angular/core").InputSignal<Department[]>;
    /**
     * List of professions to display
     */
    professions: import("@angular/core").InputSignal<string[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DepartmentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DepartmentsComponent, "ta-departments", never, { "departments": { "alias": "departments"; "required": true; "isSignal": true; }; "professions": { "alias": "professions"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
