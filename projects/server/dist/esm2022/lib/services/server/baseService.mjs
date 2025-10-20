import { Injectable, inject } from '@angular/core';
import { TaGraphService } from '../graphql/public-api';
import { TaServerSevice } from './api/server.service';
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
        this._subscriptionList.forEach(subscription => subscription.unsubscribe());
    }
    _registerSubscription(subscription) {
        this._subscriptionList.push(subscription);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3NlcnZlci9iYXNlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk5RCxPQUFPLEVBQStCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFLdEQsTUFBTSxPQUFnQixhQUFhO0lBS2pDLFlBQVksU0FBMEI7UUFKNUIsc0JBQWlCLEdBQW1CLEVBQUUsQ0FBQztRQUN2QyxtQkFBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUcvQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sY0FBYyxDQUFDLE1BQXFFLEVBQUUsT0FBc0I7UUFDakgsSUFBSSxNQUFNLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRSxJQUFJLE1BQU0sQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxZQUEwQjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7K0dBcEJtQixhQUFhO21IQUFiLGFBQWEsY0FGckIsTUFBTTs7NEZBRUUsYUFBYTtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR3JhcGhFbmRwb2ludCwgR3JhcGhPcHRpb25zLCBUYUdyYXBoU2VydmljZSB9IGZyb20gJy4uL2dyYXBocWwvcHVibGljLWFwaSc7XG5pbXBvcnQgeyBNYXBwaW5nQXBpVHlwZSB9IGZyb20gJy4vYXBpL3JlcXVlc3RNYXAnO1xuaW1wb3J0IHsgVGFTZXJ2ZXJTZXZpY2UgfSBmcm9tICcuL2FwaS9zZXJ2ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYUJhc2VTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIF9zdWJzY3JpcHRpb25MaXN0OiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcm90ZWN0ZWQgX3NlcnZlclNlcnZpY2UgPSBpbmplY3QoVGFTZXJ2ZXJTZXZpY2UpO1xuICBwcm90ZWN0ZWQgX2dyYXBoU2VydmljZSA9IGluamVjdChUYUdyYXBoU2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoYXBpUm91dGVzPzogTWFwcGluZ0FwaVR5cGUpIHtcbiAgICB0aGlzLnJlZ2lzdGVyUm91dGVzKHsgYXBpUm91dGVzIH0pO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyUm91dGVzKHJvdXRlczogeyBhcGlSb3V0ZXM/OiBNYXBwaW5nQXBpVHlwZTsgZ3JhcGhFbmRwb2ludD86IEdyYXBoRW5kcG9pbnQgfSwgb3B0aW9ucz86IEdyYXBoT3B0aW9ucykge1xuICAgIGlmIChyb3V0ZXMuYXBpUm91dGVzKSB0aGlzLl9zZXJ2ZXJTZXJ2aWNlLnJlZ2lzdGVyUm91dGVzKHJvdXRlcy5hcGlSb3V0ZXMpO1xuICAgIGlmIChyb3V0ZXMuZ3JhcGhFbmRwb2ludCkgdGhpcy5fZ3JhcGhTZXJ2aWNlLnJlZ2lzdGVyR3JhcGhFbmRwb2ludChyb3V0ZXMuZ3JhcGhFbmRwb2ludCwgb3B0aW9ucyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25MaXN0LmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVnaXN0ZXJTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25MaXN0LnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgfVxufVxuIl19