import { EventEmitter } from "@angular/core";
import { TaSizes, TaState } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class CopyLinkButtonComponent {
    /**
     * Button state
     */
    state: import("@angular/core").InputSignal<TaState>;
    /**
     * Button size
     */
    size: import("@angular/core").InputSignal<"small" | "medium" | "large">;
    /**
     * Text to copy to clipboard
     */
    value: import("@angular/core").InputSignal<string | null>;
    stopPropagationActivation: import("@angular/core").InputSignal<boolean>;
    /**
     * Event emitted when button is clicked (after copy)
     */
    action: EventEmitter<any>;
    constructor();
    handleClick(): Promise<void>;
    private _sizeMap;
    getIconSize(): TaSizes;
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<CopyLinkButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CopyLinkButtonComponent, "ta-copy-link-button", never, { "state": { "alias": "state"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": false; "isSignal": true; }; "stopPropagationActivation": { "alias": "stopPropagationActivation"; "required": false; "isSignal": true; }; }, { "action": "action"; }, never, ["*"], true, never>;
}
