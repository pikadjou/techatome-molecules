import { Injectable, inject } from "@angular/core";
import { TaGraphService, } from "../graphql/public-api";
import { TaServerSevice } from "./api/server.service";
import * as i0 from "@angular/core";
export class TaBaseService {
    constructor(apiRoutes) {
        this._subscriptionList = [];
        this._serverService = inject(TaServerSevice);
        this._graphService = inject(TaGraphService);
        this.registerRoutes({ apiRoutes });
    }
    registerRoutes(routes, options) {
        if (routes.apiRoutes)
            this._serverService.registerRoutes(routes.apiRoutes);
        if (routes.graphEndpoint)
            this._graphService.registerGraphEndpoint(routes.graphEndpoint, options);
    }
    ngOnDestroy() {
        this._subscriptionList.forEach((subscription) => subscription.unsubscribe());
    }
    _registerSubscription(subscription) {
        this._subscriptionList.push(subscription);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: undefined }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3NlcnZlci9iYXNlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk5RCxPQUFPLEVBR0wsY0FBYyxHQUNmLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUt0RCxNQUFNLE9BQWdCLGFBQWE7SUFLakMsWUFBWSxTQUEwQjtRQUo1QixzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLG1CQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLGtCQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRy9DLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxjQUFjLENBQ25CLE1BQXFFLEVBQ3JFLE9BQXNCO1FBRXRCLElBQUksTUFBTSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0UsSUFBSSxNQUFNLENBQUMsYUFBYTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FDOUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUMzQixDQUFDO0lBQ0osQ0FBQztJQUVTLHFCQUFxQixDQUFDLFlBQTBCO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQzsrR0ExQm1CLGFBQWE7bUhBQWIsYUFBYSxjQUZyQixNQUFNOzs0RkFFRSxhQUFhO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHtcbiAgR3JhcGhFbmRwb2ludCxcbiAgR3JhcGhPcHRpb25zLFxuICBUYUdyYXBoU2VydmljZSxcbn0gZnJvbSBcIi4uL2dyYXBocWwvcHVibGljLWFwaVwiO1xuaW1wb3J0IHsgTWFwcGluZ0FwaVR5cGUgfSBmcm9tIFwiLi9hcGkvcmVxdWVzdE1hcFwiO1xuaW1wb3J0IHsgVGFTZXJ2ZXJTZXZpY2UgfSBmcm9tIFwiLi9hcGkvc2VydmVyLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFCYXNlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBfc3Vic2NyaXB0aW9uTGlzdDogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJvdGVjdGVkIF9zZXJ2ZXJTZXJ2aWNlID0gaW5qZWN0KFRhU2VydmVyU2V2aWNlKTtcbiAgcHJvdGVjdGVkIF9ncmFwaFNlcnZpY2UgPSBpbmplY3QoVGFHcmFwaFNlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKGFwaVJvdXRlcz86IE1hcHBpbmdBcGlUeXBlKSB7XG4gICAgdGhpcy5yZWdpc3RlclJvdXRlcyh7IGFwaVJvdXRlcyB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlclJvdXRlcyhcbiAgICByb3V0ZXM6IHsgYXBpUm91dGVzPzogTWFwcGluZ0FwaVR5cGU7IGdyYXBoRW5kcG9pbnQ/OiBHcmFwaEVuZHBvaW50IH0sXG4gICAgb3B0aW9ucz86IEdyYXBoT3B0aW9uc1xuICApIHtcbiAgICBpZiAocm91dGVzLmFwaVJvdXRlcykgdGhpcy5fc2VydmVyU2VydmljZS5yZWdpc3RlclJvdXRlcyhyb3V0ZXMuYXBpUm91dGVzKTtcbiAgICBpZiAocm91dGVzLmdyYXBoRW5kcG9pbnQpXG4gICAgICB0aGlzLl9ncmFwaFNlcnZpY2UucmVnaXN0ZXJHcmFwaEVuZHBvaW50KHJvdXRlcy5ncmFwaEVuZHBvaW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbkxpc3QuZm9yRWFjaCgoc3Vic2NyaXB0aW9uKSA9PlxuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9yZWdpc3RlclN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbkxpc3QucHVzaChzdWJzY3JpcHRpb24pO1xuICB9XG59XG4iXX0=