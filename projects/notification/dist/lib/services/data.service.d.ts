import { HandleComplexRequest, TaBaseService } from "@ta/server";
import { NotificationDto } from "./dto/notification";
import { NotificationFilter } from "./queries";
import * as i0 from "@angular/core";
export declare class TaNotificationDataService extends TaBaseService {
    list: HandleComplexRequest<NotificationDto[]>;
    count: HandleComplexRequest<number>;
    private _sharedService;
    constructor();
    fetchNotifications$(filters: NotificationFilter): import("rxjs").Observable<NotificationDto[]>;
    fetchNumberOfNotifications$(filters: NotificationFilter): import("rxjs").Observable<number>;
    isRead$(id: string): import("rxjs").Observable<boolean>;
    computeKey(filters?: NotificationFilter): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaNotificationDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaNotificationDataService>;
}
