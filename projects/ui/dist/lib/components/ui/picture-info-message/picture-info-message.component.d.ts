import { TaIconType } from "@ta/icons";
import { TaSizes } from "@ta/styles";
import { MessageLevel } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class PictureInfoMessageComponent {
    icon?: TaIconType | string;
    iconSize?: TaSizes | "xl";
    text?: string;
    type?: MessageLevel;
    get displayedText(): string;
    isFontIcon(icon: TaIconType | string): boolean;
    getFontIcon(icon: TaIconType | string): string;
    isLocalIcon(icon: TaIconType | string): boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PictureInfoMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PictureInfoMessageComponent, "ta-picture-info-message", never, { "icon": { "alias": "icon"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "text": { "alias": "text"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, true, never>;
}
