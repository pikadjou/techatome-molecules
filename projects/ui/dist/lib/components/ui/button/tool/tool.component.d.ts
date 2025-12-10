import { EventEmitter } from "@angular/core";
import { TaSizes, TaState } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class ButtonToolComponent {
    state: TaState;
    type: "primary";
    size: TaSizes;
    icon: string | null;
    stopPropagationActivation: boolean;
    readonly: boolean;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToolComponent, "ta-button-tool", never, { "state": { "alias": "state"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "stopPropagationActivation": { "alias": "stopPropagationActivation"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "action": "action"; }, never, never, true, never>;
}
