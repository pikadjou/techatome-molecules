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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaAbstractComponent, selector: "ng-component", ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3RDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2Fic3RyYWN0L2Fic3RyYWN0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUdsRSxNQUFNLE9BQWdCLG1CQUFtQjtJQU12QyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFTRDtRQW5CTyxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyxTQUFJLEdBQXNCLFVBQVUsQ0FBQztRQVNsQyx1QkFBa0IsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFFdkQsYUFBYTtRQUNILFdBQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEMsWUFBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFFaEIsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRVMscUJBQXFCLENBQUMsWUFBMEI7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7K0dBNUJtQixtQkFBbUI7bUdBQW5CLG1CQUFtQixvREFEbEIsRUFBRTs7NEZBQ0gsbUJBQW1CO2tCQUR4QyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBUYUljb25UeXBlIH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuXG5pbXBvcnQgeyBCcmVha3BvaW50RGV0ZWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYnJlYWtwb2ludHMvZGV0ZWN0aW9uXCI7XG5pbXBvcnQgeyBSZXF1ZXN0U3RhdGUgfSBmcm9tIFwiLi4vaGVscGVycy9yZXF1ZXN0L3N0YXRlXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVySGFuZGxlciB9IGZyb20gXCIuLi9oZWxwZXJzL3N1YnNjcmliZXIvaGFuZGxlclwiO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6IFwiXCIgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYUFic3RyYWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIGJyZWFrcG9pbnRzID0gaW5qZWN0KEJyZWFrcG9pbnREZXRlY3Rpb24pO1xuICBwdWJsaWMgcmVxdWVzdFN0YXRlID0gbmV3IFJlcXVlc3RTdGF0ZSgpO1xuXG4gIHB1YmxpYyBpY29uOiB0eXBlb2YgVGFJY29uVHlwZSA9IFRhSWNvblR5cGU7XG5cbiAgZ2V0IGlzTW9iaWxlKCkge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRzLmlzTW9iaWxlO1xuICB9XG4gIGdldCBpc0Rlc2t0b3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHMuaXNEZXNrdG9wO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmVySGFuZGxlciA9IG5ldyBTdWJzY3JpYmVySGFuZGxlcigpO1xuXG4gIC8qIFJvdXRpbmcgKi9cbiAgcHJvdGVjdGVkIF9yb3V0ZSA9IGluamVjdChBY3RpdmF0ZWRSb3V0ZSk7XG4gIHByb3RlY3RlZCBfcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG4gIHByb3RlY3RlZCBfbG9jYXRpb24gPSBpbmplY3QoTG9jYXRpb24pO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVySGFuZGxlci5kZXN0cm95KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlckhhbmRsZXIucmVnaXN0ZXJTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgfVxufVxuIl19