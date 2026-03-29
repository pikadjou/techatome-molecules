import { TaBaseComponent } from "@ta/utils";
import { NotificationItem } from "../../../services/notification.service";
import * as i0 from "@angular/core";
export declare class NotificationBoxComponent extends TaBaseComponent {
    list: NotificationItem[];
    private _notificationService;
    constructor();
    dismiss(id: string): void;
    private _remove;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationBoxComponent, "ta-notification-box", never, {}, {}, never, never, true, never>;
}
