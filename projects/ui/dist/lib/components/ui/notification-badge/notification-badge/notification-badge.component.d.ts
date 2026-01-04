import { TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class NotificationBadgeComponent {
    number: import("@angular/core").InputSignal<number>;
    fontSize: import("@angular/core").InputSignal<TaSizes>;
    style: import("@angular/core").InputSignal<string | undefined>;
    relative: import("@angular/core").InputSignal<boolean>;
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationBadgeComponent, "ta-notification-badge", never, { "number": { "alias": "number"; "required": true; "isSignal": true; }; "fontSize": { "alias": "fontSize"; "required": false; "isSignal": true; }; "style": { "alias": "style"; "required": false; "isSignal": true; }; "relative": { "alias": "relative"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
