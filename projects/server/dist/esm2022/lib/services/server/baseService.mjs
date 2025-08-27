import { Injectable, inject } from '@angular/core';
import { CamGraphService, } from '../graphql/public-api';
import { CamServerSevice } from './api/server.service';
import * as i0 from "@angular/core";
export class CamBaseService {
    constructor(apiRoutes) {
        this._subscriptionList = [];
        this._serverService = inject(CamServerSevice);
        this._graphService = inject(CamGraphService);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamBaseService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamBaseService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamBaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3NlcnZlci9iYXNlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk5RCxPQUFPLEVBQ0wsZUFBZSxHQUdoQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFLdkQsTUFBTSxPQUFnQixjQUFjO0lBS2xDLFlBQVksU0FBMEI7UUFKNUIsc0JBQWlCLEdBQW1CLEVBQUUsQ0FBQztRQUN2QyxtQkFBYyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxrQkFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUdoRCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sY0FBYyxDQUNuQixNQUFxRSxFQUNyRSxPQUFzQjtRQUV0QixJQUFJLE1BQU0sQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNFLElBQUksTUFBTSxDQUFDLGFBQWE7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQzlDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FDM0IsQ0FBQztJQUNKLENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxZQUEwQjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7K0dBMUJtQixjQUFjO21IQUFkLGNBQWMsY0FGdEIsTUFBTTs7NEZBRUUsY0FBYztrQkFIbkMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgQ2FtR3JhcGhTZXJ2aWNlLFxuICBHcmFwaEVuZHBvaW50LFxuICBHcmFwaE9wdGlvbnMsXG59IGZyb20gJy4uL2dyYXBocWwvcHVibGljLWFwaSc7XG5pbXBvcnQgeyBNYXBwaW5nQXBpVHlwZSB9IGZyb20gJy4vYXBpL3JlcXVlc3RNYXAnO1xuaW1wb3J0IHsgQ2FtU2VydmVyU2V2aWNlIH0gZnJvbSAnLi9hcGkvc2VydmVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FtQmFzZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX3N1YnNjcmlwdGlvbkxpc3Q6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByb3RlY3RlZCBfc2VydmVyU2VydmljZSA9IGluamVjdChDYW1TZXJ2ZXJTZXZpY2UpO1xuICBwcm90ZWN0ZWQgX2dyYXBoU2VydmljZSA9IGluamVjdChDYW1HcmFwaFNlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKGFwaVJvdXRlcz86IE1hcHBpbmdBcGlUeXBlKSB7XG4gICAgdGhpcy5yZWdpc3RlclJvdXRlcyh7IGFwaVJvdXRlcyB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlclJvdXRlcyhcbiAgICByb3V0ZXM6IHsgYXBpUm91dGVzPzogTWFwcGluZ0FwaVR5cGU7IGdyYXBoRW5kcG9pbnQ/OiBHcmFwaEVuZHBvaW50IH0sXG4gICAgb3B0aW9ucz86IEdyYXBoT3B0aW9uc1xuICApIHtcbiAgICBpZiAocm91dGVzLmFwaVJvdXRlcykgdGhpcy5fc2VydmVyU2VydmljZS5yZWdpc3RlclJvdXRlcyhyb3V0ZXMuYXBpUm91dGVzKTtcbiAgICBpZiAocm91dGVzLmdyYXBoRW5kcG9pbnQpXG4gICAgICB0aGlzLl9ncmFwaFNlcnZpY2UucmVnaXN0ZXJHcmFwaEVuZHBvaW50KHJvdXRlcy5ncmFwaEVuZHBvaW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbkxpc3QuZm9yRWFjaCgoc3Vic2NyaXB0aW9uKSA9PlxuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9yZWdpc3RlclN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbkxpc3QucHVzaChzdWJzY3JpcHRpb24pO1xuICB9XG59XG4iXX0=