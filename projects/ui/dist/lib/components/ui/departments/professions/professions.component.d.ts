import { TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class DepartmentProfessionsComponent {
    /**
     * List of professions to display
     */
    professions: string[];
    /**
     * font-size
     */
    fontSize: TaSizes;
    maxVisible?: number;
    get visibleProfessions(): string[];
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<DepartmentProfessionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DepartmentProfessionsComponent, "ta-department-professions", never, { "professions": { "alias": "professions"; "required": false; }; "fontSize": { "alias": "fontSize"; "required": false; }; "maxVisible": { "alias": "maxVisible"; "required": false; }; }, {}, never, never, true, never>;
}
