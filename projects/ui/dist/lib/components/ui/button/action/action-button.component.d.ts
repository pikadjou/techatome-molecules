import { ActionButtonData } from './action-button-data';
import * as i0 from "@angular/core";
export declare class ActionButtonComponent {
    /**
     * List of action available
     */
    actions: ActionButtonData[];
    isFontIcon(action: ActionButtonData): boolean;
    getFontIcon(action: ActionButtonData): string;
    isLocalIcon(action: ActionButtonData): boolean;
    isOpen: boolean;
    openBullet(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionButtonComponent, "ta-action-button", never, { "actions": { "alias": "actions"; "required": false; }; }, {}, never, never, true, never>;
}
