import { DomSanitizer } from '@angular/platform-browser';
import { TaSizes } from '@ta/styles';
import { TaIconType, TaIconsService } from '../../services/icons.service';
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
    type: TaIconType | string | null;
    /**
     * Size of the icon
     */
    size: TaSizes | 'xl';
    /**
     * If set to true, icon will have a rotation animation
     */
    rotation: boolean;
    constructor(_iconService: TaIconsService, _sanitizer: DomSanitizer);
    getSvgIcon(): import("@angular/platform-browser").SafeHtml;
    getSize(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocalIconComponent, "ta-local-icon", never, { "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; "rotation": { "alias": "rotation"; "required": false; }; }, {}, never, never, true, never>;
}
