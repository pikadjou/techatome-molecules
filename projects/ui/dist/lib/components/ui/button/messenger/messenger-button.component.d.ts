import { EventEmitter } from "@angular/core";
import { TaState } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class MessengerButtonComponent {
    /**
     * Button state
     */
    state: import("@angular/core").InputSignal<TaState>;
    /**
     * Button size
     */
    size: import("@angular/core").InputSignal<"small" | "medium" | "large">;
    /**
     * Display mode: 'full' shows logo + text, 'logo' shows only the logo
     */
    mode: import("@angular/core").InputSignal<"full" | "logo">;
    /**
     * URL to share via Messenger. If provided, clicking opens Messenger with this link.
     */
    url: import("@angular/core").InputSignal<string | null>;
    stopPropagationActivation: import("@angular/core").InputSignal<boolean>;
    /**
     * Event emitted when button is clicked
     */
    action: EventEmitter<any>;
    constructor();
    handleClick(): void;
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<MessengerButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessengerButtonComponent, "ta-messenger-button", never, { "state": { "alias": "state"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "mode": { "alias": "mode"; "required": false; "isSignal": true; }; "url": { "alias": "url"; "required": false; "isSignal": true; }; "stopPropagationActivation": { "alias": "stopPropagationActivation"; "required": false; "isSignal": true; }; }, { "action": "action"; }, never, ["*"], true, never>;
}
