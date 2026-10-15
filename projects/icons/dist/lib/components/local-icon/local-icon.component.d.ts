import { TaSizes } from "@ta/styles";
import { TaIconType } from "../../services/icons.service";
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
export declare class LocalIconComponent {
    /**
     * Icon to display
     */
    type: import("@angular/core").InputSignal<string | TaIconType | null>;
    /**
     * Size of the icon
     */
    size: import("@angular/core").InputSignal<TaSizes>;
    /**
     * If set to true, icon will have a rotation animation
     */
    rotation: import("@angular/core").InputSignal<boolean>;
    private readonly _iconService;
    private readonly _sanitizer;
    getSvgIcon(): import("@angular/platform-browser").SafeHtml;
    getSize(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocalIconComponent, "ta-local-icon", never, { "type": { "alias": "type"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "rotation": { "alias": "rotation"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
