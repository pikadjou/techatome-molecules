import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ToggleCardComponent {
    title: import("@angular/core").InputSignal<string>;
    description: import("@angular/core").InputSignal<string | undefined>;
    icon: import("@angular/core").InputSignal<string | undefined>;
    isActive: import("@angular/core").InputSignal<boolean>;
    disabled: import("@angular/core").InputSignal<boolean>;
    toggle: EventEmitter<boolean>;
    onToggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleCardComponent, "ta-toggle-card", never, { "title": { "alias": "title"; "required": false; "isSignal": true; }; "description": { "alias": "description"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "isActive": { "alias": "isActive"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "toggle": "toggle"; }, never, never, true, never>;
}
