import { EventEmitter, OnInit, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { TaBaseComponent } from "@ta/utils";
import { TaNotificationDataService } from "../../services/data.service";
import { NotificationFilter } from "../../services/queries";
import { TaNotificationSharedService } from "../../services/shared.service";
import * as i0 from "@angular/core";
export declare class ContainerComponent extends TaBaseComponent implements OnInit {
    private _notificationDataService;
    private _sharedService;
    filters: import("@angular/core").InputSignal<NotificationFilter>;
    templates: import("@angular/core").InputSignal<{
        paymentStatus: TemplateRef<any>;
        projectStatus: TemplateRef<any>;
    } | null>;
    services: import("@angular/core").InputSignal<{
        getProjects$: (ids: string[]) => Observable<{
            id: string;
            name: string;
        }[]>;
    } | null>;
    routing: import("@angular/core").InputSignal<{
        project: (data: any) => void;
        invoice: (data: any) => void;
        quotationVersion: (data: any) => void;
        task: (data: any) => void;
    } | null>;
    nbChanged: EventEmitter<number>;
    get notifications$(): Observable<import("../../services/dto/notification").NotificationDto[]>;
    constructor(_notificationDataService: TaNotificationDataService, _sharedService: TaNotificationSharedService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerComponent, "ta-notification-container", never, { "filters": { "alias": "filters"; "required": false; "isSignal": true; }; "templates": { "alias": "templates"; "required": false; "isSignal": true; }; "services": { "alias": "services"; "required": false; "isSignal": true; }; "routing": { "alias": "routing"; "required": false; "isSignal": true; }; }, { "nbChanged": "nbChanged"; }, never, never, true, never>;
}
