import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ToggleCardComponent {
    title: string;
    description?: string;
    icon?: string;
    isActive: boolean;
    disabled: boolean;
    toggle: EventEmitter<boolean>;
    onToggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleCardComponent, "ta-toggle-card", never, { "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "isActive": { "alias": "isActive"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "toggle": "toggle"; }, never, never, true, never>;
}
