import { TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class BooleanIconComponent {
    /**
     * Boolean value to display (can be null or undefined for unknown state)
     */
    value: boolean | null | undefined;
    /**
     * Size of the icon
     */
    size: TaSizes;
    constructor();
    getIconName(): string;
    getClass(): string;
    isNullValue(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BooleanIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BooleanIconComponent, "ta-boolean-icon", never, { "value": { "alias": "value"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}
