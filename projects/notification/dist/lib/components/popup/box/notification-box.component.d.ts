import { ENotificationCode } from '../../../enum';
import { CamNotificationService } from '../../../services/notification.service';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class NotificationBoxComponent extends TaBaseComponent {
    private _notificationService;
    list: {
        message: string;
        code: ENotificationCode;
    }[];
    constructor(_notificationService: CamNotificationService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationBoxComponent, "ta-notification-box", never, {}, {}, never, never, true, never>;
}
