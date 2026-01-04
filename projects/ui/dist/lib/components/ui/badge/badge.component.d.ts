import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export type BadgeType = "danger" | "warning" | "success" | "primary" | "secondary" | "info" | "purple" | "orange";
export declare class BadgeComponent {
    /**
     * Text to display in badge
     */
    value: import("@angular/core").InputSignal<string>;
    /**
     * Style of badge
     */
    type: import("@angular/core").InputSignal<BadgeType>;
    /**
     * @deprecated
     * showClickOption
     */
    showClickOption: import("@angular/core").InputSignal<boolean>;
    icon: import("@angular/core").InputSignal<string | undefined>;
    clickAction: EventEmitter<any>;
    constructor();
    getClass(): string;
    click(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeComponent, "ta-badge", never, { "value": { "alias": "value"; "required": true; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "showClickOption": { "alias": "showClickOption"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; }, { "clickAction": "clickAction"; }, never, never, true, never>;
}
