import { TaSizes } from '@ta/styles';
import * as i0 from "@angular/core";
export declare class NotificationBadgeComponent {
    number: number;
    fontSize: TaSizes;
    style?: string | undefined;
    relative: boolean;
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationBadgeComponent, "ta-notification-badge", never, { "number": { "alias": "number"; "required": false; }; "fontSize": { "alias": "fontSize"; "required": false; }; "style": { "alias": "style"; "required": false; }; "relative": { "alias": "relative"; "required": false; }; }, {}, never, never, true, never>;
}
