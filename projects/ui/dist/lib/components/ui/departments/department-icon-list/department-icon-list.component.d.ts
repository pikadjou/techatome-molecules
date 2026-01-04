import { Department } from "../interface";
import * as i0 from "@angular/core";
export declare class DepartmentIconListComponent {
    /**
     * List of departments object to display
     */
    departments: import("@angular/core").InputSignal<Department[]>;
    withName: import("@angular/core").InputSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DepartmentIconListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DepartmentIconListComponent, "ta-department-icon-list", never, { "departments": { "alias": "departments"; "required": true; "isSignal": true; }; "withName": { "alias": "withName"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
