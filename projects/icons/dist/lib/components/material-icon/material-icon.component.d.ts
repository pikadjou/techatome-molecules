import { TaSizes } from '@ta/styles';
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
export declare class MaterialIconComponent {
    /**
     * If set to true, define an outline style to the icon
     */
    outline: boolean;
    /**
     * If set to true, define a sharp style to the icon
     */
    sharp: boolean;
    /**
     * If set to true, define a rounded style to the icon
     */
    round: boolean;
    /**
     * If set to true, define a dual tone style to the icon
     */
    dualTone: boolean;
    /**
     * If set to true, define a size for the icon
     */
    type: TaSizes | '';
    getDisplayStyle(): string;
    getTypeStyle(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MaterialIconComponent, "ta-material-icon", never, { "outline": { "alias": "outline"; "required": false; }; "sharp": { "alias": "sharp"; "required": false; }; "round": { "alias": "round"; "required": false; }; "dualTone": { "alias": "dualTone"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
