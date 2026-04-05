import { OnInit } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { NotificationFilter } from "../../services/queries";
import * as i0 from "@angular/core";
export declare class BulletComponent extends TaBaseComponent implements OnInit {
    filters: import("@angular/core").InputSignal<NotificationFilter>;
    private _notificationDataService;
    get number$(): import("rxjs").Observable<number>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulletComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BulletComponent, "ta-notification-bullet", never, { "filters": { "alias": "filters"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
