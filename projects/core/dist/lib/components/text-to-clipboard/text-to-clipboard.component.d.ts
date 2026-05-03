import { TaSizes } from "@ta/styles";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class TextToClipboardComponent extends TaBaseComponent {
    value: import("@angular/core").InputSignal<string>;
    iconSize: import("@angular/core").InputSignal<TaSizes>;
    protected _notificationService: import("@ta/notification").TaNotificationService;
    copyContent: () => Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextToClipboardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextToClipboardComponent, "ta-text-to-clipboard", never, { "value": { "alias": "value"; "required": true; "isSignal": true; }; "iconSize": { "alias": "iconSize"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
