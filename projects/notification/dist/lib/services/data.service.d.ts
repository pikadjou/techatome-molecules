import { HandleComplexRequest, TaBaseService } from "@ta/server";
import { NotificationDto } from "./dto/notification";
import { NotificationFilter } from "./queries";
import { TaNotificationSharedService } from "./shared.service";
import * as i0 from "@angular/core";
export declare class TaNotificationDataService extends TaBaseService {
    private _sharedService;
    list: HandleComplexRequest<NotificationDto[]>;
    count: HandleComplexRequest<number>;
    constructor(_sharedService: TaNotificationSharedService);
    fetchNotifications$(filters: NotificationFilter): import("rxjs").Observable<NotificationDto[]>;
    fetchNumberOfNotifications$(filters: NotificationFilter): import("rxjs").Observable<number>;
    isRead$(id: string): import("rxjs").Observable<boolean>;
    computeKey(filters?: NotificationFilter): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaNotificationDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaNotificationDataService>;
}
