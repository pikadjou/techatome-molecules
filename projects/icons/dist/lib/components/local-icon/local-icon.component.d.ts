import { DomSanitizer } from "@angular/platform-browser";
import { TaSizes } from "@ta/styles";
import { TaIconType, TaIconsService } from "../../services/icons.service";
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
export declare class LocalIconComponent {
    private _iconService;
    private _sanitizer;
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
    constructor(_iconService: TaIconsService, _sanitizer: DomSanitizer);
    getSvgIcon(): import("@angular/platform-browser").SafeHtml;
    getSize(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocalIconComponent, "ta-local-icon", never, { "type": { "alias": "type"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "rotation": { "alias": "rotation"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
