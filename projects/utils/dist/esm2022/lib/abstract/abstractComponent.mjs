import { Location } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TaIconType } from "@ta/icons";
import { BreakpointDetection } from "../helpers/breakpoints/detection";
import { RequestState } from "../helpers/request/state";
import { SubscriberHandler } from "../helpers/subscriber/handler";
import * as i0 from "@angular/core";
export class TaAbstractComponent {
    get isMobile() {
        return this.breakpoints.isMobile;
    }
    get isDesktop() {
        return this.breakpoints.isDesktop;
    }
    constructor() {
        this.breakpoints = inject(BreakpointDetection);
        this.requestState = new RequestState();
        this.icon = TaIconType;
        this._subscriberHandler = new SubscriberHandler();
        /* Routing */
        this._route = inject(ActivatedRoute);
        this._router = inject(Router);
        this._location = inject(Location);
    }
    ngOnDestroy() {
        this._subscriberHandler.destroy();
    }
    _registerSubscription(subscription) {
        this._subscriberHandler.registerSubscription(subscription);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaAbstractComponent, isStandalone: true, selector: "ng-component", ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, template: "" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3RDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2Fic3RyYWN0L2Fic3RyYWN0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUdsRSxNQUFNLE9BQWdCLG1CQUFtQjtJQU12QyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFTRDtRQW5CTyxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyxTQUFJLEdBQXNCLFVBQVUsQ0FBQztRQVNsQyx1QkFBa0IsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFFdkQsYUFBYTtRQUNILFdBQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEMsWUFBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFFaEIsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRVMscUJBQXFCLENBQUMsWUFBMEI7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7K0dBNUJtQixtQkFBbUI7bUdBQW5CLG1CQUFtQix3RUFEQSxFQUFFOzs0RkFDckIsbUJBQW1CO2tCQUR4QyxTQUFTO21CQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IFRhSWNvblR5cGUgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5cbmltcG9ydCB7IEJyZWFrcG9pbnREZXRlY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9icmVha3BvaW50cy9kZXRlY3Rpb25cIjtcbmltcG9ydCB7IFJlcXVlc3RTdGF0ZSB9IGZyb20gXCIuLi9oZWxwZXJzL3JlcXVlc3Qvc3RhdGVcIjtcbmltcG9ydCB7IFN1YnNjcmliZXJIYW5kbGVyIH0gZnJvbSBcIi4uL2hlbHBlcnMvc3Vic2NyaWJlci9oYW5kbGVyXCI7XG5cbkBDb21wb25lbnQoeyBzdGFuZGFsb25lOiB0cnVlLCB0ZW1wbGF0ZTogXCJcIiB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQWJzdHJhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwdWJsaWMgYnJlYWtwb2ludHMgPSBpbmplY3QoQnJlYWtwb2ludERldGVjdGlvbik7XG4gIHB1YmxpYyByZXF1ZXN0U3RhdGUgPSBuZXcgUmVxdWVzdFN0YXRlKCk7XG5cbiAgcHVibGljIGljb246IHR5cGVvZiBUYUljb25UeXBlID0gVGFJY29uVHlwZTtcblxuICBnZXQgaXNNb2JpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHMuaXNNb2JpbGU7XG4gIH1cbiAgZ2V0IGlzRGVza3RvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50cy5pc0Rlc2t0b3A7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZXJIYW5kbGVyID0gbmV3IFN1YnNjcmliZXJIYW5kbGVyKCk7XG5cbiAgLyogUm91dGluZyAqL1xuICBwcm90ZWN0ZWQgX3JvdXRlID0gaW5qZWN0KEFjdGl2YXRlZFJvdXRlKTtcbiAgcHJvdGVjdGVkIF9yb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcbiAgcHJvdGVjdGVkIF9sb2NhdGlvbiA9IGluamVjdChMb2NhdGlvbik7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJIYW5kbGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVnaXN0ZXJTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVySGFuZGxlci5yZWdpc3RlclN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICB9XG59XG4iXX0=