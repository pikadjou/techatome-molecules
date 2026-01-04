import { EventEmitter } from "@angular/core";
import { TaSizes, TaState } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class ButtonToolComponent {
    state: import("@angular/core").InputSignal<TaState>;
    type: import("@angular/core").InputSignal<"primary">;
    size: import("@angular/core").InputSignal<TaSizes>;
    icon: import("@angular/core").InputSignal<string | null>;
    stopPropagationActivation: import("@angular/core").InputSignal<boolean>;
    readonly: import("@angular/core").InputSignal<boolean>;
    /**
     * Event emitted when button is clicked
     */
    action: EventEmitter<any>;
    constructor();
    handleClick(): void;
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToolComponent, "ta-button-tool", never, { "state": { "alias": "state"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "stopPropagationActivation": { "alias": "stopPropagationActivation"; "required": false; "isSignal": true; }; "readonly": { "alias": "readonly"; "required": false; "isSignal": true; }; }, { "action": "action"; }, never, never, true, never>;
}
