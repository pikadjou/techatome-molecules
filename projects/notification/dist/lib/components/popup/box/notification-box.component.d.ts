import { TaBaseComponent } from '@ta/utils';
import { ENotificationCode } from '../../../enum';
import { TaNotificationService } from '../../../services/notification.service';
import * as i0 from "@angular/core";
export declare class NotificationBoxComponent extends TaBaseComponent {
    private _notificationService;
    list: {
        message: string;
        code: ENotificationCode;
    }[];
    constructor(_notificationService: TaNotificationService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationBoxComponent, "ta-notification-box", never, {}, {}, never, never, true, never>;
}
