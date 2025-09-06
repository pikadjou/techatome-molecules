import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaIconType } from '@ta/icons';
import { BreakpointDetection } from '../helpers/breakpoints/detection';
import { RequestState } from '../helpers/request/state';
import { SubscriberHandler } from '../helpers/subscriber/handler';
import * as i0 from "@angular/core";
export class TaAbstractComponent {
    get isMobile() {
        return this.breakpoints.isMobile;
    }
    get isDesktop() {
        return this.breakpoints.isDesktop;
    }
    constructor() {
        this.breakpoints = new BreakpointDetection();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAbstractComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TaAbstractComponent, selector: "ng-component", ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAbstractComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3RDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2Fic3RyYWN0L2Fic3RyYWN0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUdsRSxNQUFNLE9BQWdCLG1CQUFtQjtJQU12QyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFTRDtRQW5CTyxnQkFBVyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUN4QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsU0FBSSxHQUFzQixVQUFVLENBQUM7UUFTbEMsdUJBQWtCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBRXZELGFBQWE7UUFDSCxXQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hDLFlBQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsY0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV4QixDQUFDO0lBRWhCLFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVTLHFCQUFxQixDQUFDLFlBQTBCO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDOytHQTVCbUIsbUJBQW1CO21HQUFuQixtQkFBbUIsb0RBRGxCLEVBQUU7OzRGQUNILG1CQUFtQjtrQkFEeEMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRhSWNvblR5cGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuXG5pbXBvcnQgeyBCcmVha3BvaW50RGV0ZWN0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9icmVha3BvaW50cy9kZXRlY3Rpb24nO1xuaW1wb3J0IHsgUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vaGVscGVycy9yZXF1ZXN0L3N0YXRlJztcbmltcG9ydCB7IFN1YnNjcmliZXJIYW5kbGVyIH0gZnJvbSAnLi4vaGVscGVycy9zdWJzY3JpYmVyL2hhbmRsZXInO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6ICcnIH0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBicmVha3BvaW50cyA9IG5ldyBCcmVha3BvaW50RGV0ZWN0aW9uKCk7XG4gIHB1YmxpYyByZXF1ZXN0U3RhdGUgPSBuZXcgUmVxdWVzdFN0YXRlKCk7XG5cbiAgcHVibGljIGljb246IHR5cGVvZiBUYUljb25UeXBlID0gVGFJY29uVHlwZTtcblxuICBnZXQgaXNNb2JpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHMuaXNNb2JpbGU7XG4gIH1cbiAgZ2V0IGlzRGVza3RvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50cy5pc0Rlc2t0b3A7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZXJIYW5kbGVyID0gbmV3IFN1YnNjcmliZXJIYW5kbGVyKCk7XG5cbiAgLyogUm91dGluZyAqL1xuICBwcm90ZWN0ZWQgX3JvdXRlID0gaW5qZWN0KEFjdGl2YXRlZFJvdXRlKTtcbiAgcHJvdGVjdGVkIF9yb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcbiAgcHJvdGVjdGVkIF9sb2NhdGlvbiA9IGluamVjdChMb2NhdGlvbik7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJIYW5kbGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVnaXN0ZXJTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVySGFuZGxlci5yZWdpc3RlclN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICB9XG59XG4iXX0=