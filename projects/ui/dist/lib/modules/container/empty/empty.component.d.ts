import { TaIconType } from "@ta/icons";
import { TaSizes } from "@ta/styles";
import { MessageLevel } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class EmptyComponent {
    isEmpty: import("@angular/core").InputSignal<boolean>;
    isLight: import("@angular/core").InputSignal<boolean>;
    showMessage: import("@angular/core").InputSignal<boolean>;
    text: import("@angular/core").InputSignal<string>;
    type: import("@angular/core").InputSignal<MessageLevel>;
    icon: import("@angular/core").InputSignal<string | TaIconType>;
    iconSize: import("@angular/core").InputSignal<TaSizes>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmptyComponent, "ta-empty", never, { "isEmpty": { "alias": "isEmpty"; "required": false; "isSignal": true; }; "isLight": { "alias": "isLight"; "required": false; "isSignal": true; }; "showMessage": { "alias": "showMessage"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "iconSize": { "alias": "iconSize"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
