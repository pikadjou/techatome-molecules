import { ENotificationLevel } from "../../../../services/dto/level";
import * as i0 from "@angular/core";
export declare class IconComponent {
    level: import("@angular/core").InputSignal<ENotificationLevel>;
    icon: import("@angular/core").InputSignal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "ta-notification-item-icon", never, { "level": { "alias": "level"; "required": true; "isSignal": true; }; "icon": { "alias": "icon"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
