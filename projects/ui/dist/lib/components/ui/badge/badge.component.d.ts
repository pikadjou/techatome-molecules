import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export type BadgeType = "danger" | "warning" | "success" | "primary" | "secondary" | "info" | "purple" | "orange";
export declare class BadgeComponent {
    /**
     * Text to display in badge
     */
    value: string;
    /**
     * Style of badge
     */
    type: BadgeType;
    /**
     * @deprecated
     * showClickOption
     */
    showClickOption: boolean;
    icon?: string;
    clickAction: EventEmitter<any>;
    constructor();
    getClass(): string;
    click(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeComponent, "ta-badge", never, { "value": { "alias": "value"; "required": false; }; "type": { "alias": "type"; "required": false; }; "showClickOption": { "alias": "showClickOption"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; }, { "clickAction": "clickAction"; }, never, never, true, never>;
}
