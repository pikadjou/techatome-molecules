import { TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export type RoutingType = "project" | "invoice" | "quotationVersion" | "task";
export declare class TaNotificationSharedService {
    paymentStatusTemplate: TemplateRef<any> | null;
    projectStatusTemplate: TemplateRef<any> | null;
    getProjects$: ((ids: string[]) => Observable<{
        id: string;
        name: string;
    }[]>) | null;
    routing: {
        [index in RoutingType]: (data: any) => void;
    } | null;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TaNotificationSharedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaNotificationSharedService>;
}
