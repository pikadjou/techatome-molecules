import { EventEmitter } from "@angular/core";
import { TaSizes, TaState } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class ShareButtonComponent {
    /**
     * Button state
     */
    state: import("@angular/core").InputSignal<TaState>;
    /**
     * Button size
     */
    size: import("@angular/core").InputSignal<"small" | "medium" | "large">;
    /**
     * Title for the native share dialog
     */
    shareTitle: import("@angular/core").InputSignal<string>;
    /**
     * Text message to share
     */
    message: import("@angular/core").InputSignal<string | null>;
    /**
     * URL to share
     */
    url: import("@angular/core").InputSignal<string | null>;
    stopPropagationActivation: import("@angular/core").InputSignal<boolean>;
    /**
     * Event emitted when button is clicked
     */
    action: EventEmitter<any>;
    constructor();
    handleClick(): Promise<void>;
    private _sizeMap;
    getIconSize(): TaSizes;
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ShareButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShareButtonComponent, "ta-share-button", never, { "state": { "alias": "state"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "shareTitle": { "alias": "shareTitle"; "required": false; "isSignal": true; }; "message": { "alias": "message"; "required": false; "isSignal": true; }; "url": { "alias": "url"; "required": false; "isSignal": true; }; "stopPropagationActivation": { "alias": "stopPropagationActivation"; "required": false; "isSignal": true; }; }, { "action": "action"; }, never, ["*"], true, never>;
}
