import { TaIconType } from "@ta/icons";
import { TaSizes } from "@ta/styles";
import { MessageLevel } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class PictureInfoMessageComponent {
    icon: import("@angular/core").InputSignal<string | TaIconType | undefined>;
    iconSize: import("@angular/core").InputSignal<TaSizes | undefined>;
    text: import("@angular/core").InputSignal<string | undefined>;
    type: import("@angular/core").InputSignal<MessageLevel | undefined>;
    get displayedText(): string;
    isFontIcon(icon: TaIconType | string): boolean;
    getFontIcon(icon: TaIconType | string): string;
    isLocalIcon(icon: TaIconType | string): boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PictureInfoMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PictureInfoMessageComponent, "ta-picture-info-message", never, { "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "iconSize": { "alias": "iconSize"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
