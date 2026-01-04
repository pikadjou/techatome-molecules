import { EventEmitter } from "@angular/core";
import { TaState } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    /**
     * Is button type
     */
    state: import("@angular/core").InputSignal<TaState>;
    /**
     * Indicate the button type
     */
    type: import("@angular/core").InputSignal<"danger" | "primary" | "secondary" | "tertiary">;
    size: import("@angular/core").InputSignal<"small" | "medium" | "large">;
    icon: import("@angular/core").InputSignal<string | null>;
    /**
     * Class - Add custom classes separates by space
     * Outline - Draw a border around the button when true
     * Rounded - Make button rounded when true
     * Circular - Make button circular when true
     */
    options: import("@angular/core").InputSignal<{
        class?: string | undefined;
        circular?: boolean | "big" | "small" | undefined;
        border?: boolean | undefined;
    } | null>;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "ta-button", never, { "state": { "alias": "state"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "stopPropagationActivation": { "alias": "stopPropagationActivation"; "required": false; "isSignal": true; }; }, { "action": "action"; }, never, ["*"], true, never>;
}
