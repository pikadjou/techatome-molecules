import { TaSizes } from '@ta/styles';
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
export declare class MaterialIconComponent {
    /**
     * If set to true, define an outline style to the icon
     */
    outline: import("@angular/core").InputSignal<boolean>;
    /**
     * If set to true, define a sharp style to the icon
     */
    sharp: import("@angular/core").InputSignal<boolean>;
    /**
     * If set to true, define a rounded style to the icon
     */
    round: import("@angular/core").InputSignal<boolean>;
    /**
     * If set to true, define a dual tone style to the icon
     */
    dualTone: import("@angular/core").InputSignal<boolean>;
    /**
     * If set to true, define a size for the icon
     */
    type: import("@angular/core").InputSignal<"" | TaSizes>;
    getDisplayStyle(): string;
    getTypeStyle(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MaterialIconComponent, "ta-material-icon", never, { "outline": { "alias": "outline"; "required": false; "isSignal": true; }; "sharp": { "alias": "sharp"; "required": false; "isSignal": true; }; "round": { "alias": "round"; "required": false; "isSignal": true; }; "dualTone": { "alias": "dualTone"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
