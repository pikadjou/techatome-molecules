import { TaSizes } from '@ta/styles';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class EmptyComponent extends TaBaseComponent {
    isEmpty: import("@angular/core").InputSignal<boolean>;
    isLight: import("@angular/core").InputSignal<boolean>;
    showMessage: import("@angular/core").InputSignal<boolean>;
    text: import("@angular/core").InputSignal<string>;
    subtitle: import("@angular/core").InputSignal<string>;
    emptyIcon: import("@angular/core").InputSignal<string>;
    iconSize: import("@angular/core").InputSignal<TaSizes>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmptyComponent, "ta-empty", never, { "isEmpty": { "alias": "isEmpty"; "required": false; "isSignal": true; }; "isLight": { "alias": "isLight"; "required": false; "isSignal": true; }; "showMessage": { "alias": "showMessage"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; "subtitle": { "alias": "subtitle"; "required": false; "isSignal": true; }; "emptyIcon": { "alias": "emptyIcon"; "required": false; "isSignal": true; }; "iconSize": { "alias": "iconSize"; "required": false; "isSignal": true; }; }, {}, never, ["[emptyAction]", "*"], true, never>;
}
