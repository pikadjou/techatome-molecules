import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamIconType } from '@ta/icons';
import { BreakpointDetection } from '../helpers/breakpoints/detection';
import { RequestState } from '../helpers/request/state';
import { SubscriberHandler } from '../helpers/subscriber/handler';
import * as i0 from "@angular/core";
export class CamAbstractComponent {
    get isMobile() {
        return this.breakpoints.isMobile;
    }
    get isDesktop() {
        return this.breakpoints.isDesktop;
    }
    constructor() {
        this.breakpoints = new BreakpointDetection();
        this.requestState = new RequestState();
        this.icon = CamIconType;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAbstractComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamAbstractComponent, selector: "ng-component", ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAbstractComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3RDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2Fic3RyYWN0L2Fic3RyYWN0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUdsRSxNQUFNLE9BQWdCLG9CQUFvQjtJQU14QyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFTRDtRQW5CTyxnQkFBVyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUN4QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsU0FBSSxHQUF1QixXQUFXLENBQUM7UUFTcEMsdUJBQWtCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBRXZELGFBQWE7UUFDSCxXQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hDLFlBQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsY0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV4QixDQUFDO0lBRWhCLFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVTLHFCQUFxQixDQUFDLFlBQTBCO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDOytHQTVCbUIsb0JBQW9CO21HQUFwQixvQkFBb0Isb0RBRG5CLEVBQUU7OzRGQUNILG9CQUFvQjtrQkFEekMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2FtSWNvblR5cGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJyZWFrcG9pbnREZXRlY3Rpb24gfSBmcm9tICcuLi9oZWxwZXJzL2JyZWFrcG9pbnRzL2RldGVjdGlvbic7XG5pbXBvcnQgeyBSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi9oZWxwZXJzL3JlcXVlc3Qvc3RhdGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlckhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXJzL3N1YnNjcmliZXIvaGFuZGxlcic7XG5cbkBDb21wb25lbnQoeyB0ZW1wbGF0ZTogJycgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYW1BYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBicmVha3BvaW50cyA9IG5ldyBCcmVha3BvaW50RGV0ZWN0aW9uKCk7XG4gIHB1YmxpYyByZXF1ZXN0U3RhdGUgPSBuZXcgUmVxdWVzdFN0YXRlKCk7XG5cbiAgcHVibGljIGljb246IHR5cGVvZiBDYW1JY29uVHlwZSA9IENhbUljb25UeXBlO1xuXG4gIGdldCBpc01vYmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50cy5pc01vYmlsZTtcbiAgfVxuICBnZXQgaXNEZXNrdG9wKCkge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRzLmlzRGVza3RvcDtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlckhhbmRsZXIgPSBuZXcgU3Vic2NyaWJlckhhbmRsZXIoKTtcblxuICAvKiBSb3V0aW5nICovXG4gIHByb3RlY3RlZCBfcm91dGUgPSBpbmplY3QoQWN0aXZhdGVkUm91dGUpO1xuICBwcm90ZWN0ZWQgX3JvdXRlciA9IGluamVjdChSb3V0ZXIpO1xuICBwcm90ZWN0ZWQgX2xvY2F0aW9uID0gaW5qZWN0KExvY2F0aW9uKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlckhhbmRsZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9yZWdpc3RlclN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJIYW5kbGVyLnJlZ2lzdGVyU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gIH1cbn1cbiJdfQ==