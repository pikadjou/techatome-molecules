import { CamNotificationDataService } from '../../services/data.service';
import { NotificationFilter } from '../../services/queries';
import { CamNotificationSharedService, RoutingType } from '../../services/shared.service';
import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ContainerComponent extends TaBaseComponent implements OnInit {
    private _notificationDataService;
    private _sharedService;
    filters: NotificationFilter;
    templates: {
        paymentStatus: TemplateRef<any>;
        projectStatus: TemplateRef<any>;
    } | null;
    services: {
        getProjects$: (ids: string[]) => Observable<{
            id: string;
            name: string;
        }[]>;
    } | null;
    routing: {
        [index in RoutingType]: (data: any) => void;
    } | null;
    nbChanged: EventEmitter<number>;
    get notifications$(): Observable<import("../../services/dto/notification").NotificationDto[]>;
    constructor(_notificationDataService: CamNotificationDataService, _sharedService: CamNotificationSharedService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerComponent, "ta-notification-container", never, { "filters": { "alias": "filters"; "required": false; }; "templates": { "alias": "templates"; "required": false; }; "services": { "alias": "services"; "required": false; }; "routing": { "alias": "routing"; "required": false; }; }, { "nbChanged": "nbChanged"; }, never, never, true, never>;
}
