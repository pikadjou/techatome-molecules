import { CamNotificationDataService } from '../../services/data.service';
import { NotificationFilter } from '../../services/queries';
import { OnInit } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class BulletComponent extends TaBaseComponent implements OnInit {
    private _notificationDataService;
    filters: NotificationFilter;
    get number$(): import("rxjs").Observable<number>;
    constructor(_notificationDataService: CamNotificationDataService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulletComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BulletComponent, "ta-notification-bullet", never, { "filters": { "alias": "filters"; "required": false; }; }, {}, never, never, true, never>;
}
