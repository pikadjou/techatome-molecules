import { Injectable, InjectionToken } from "@angular/core";
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export const LAZY_SERVICE_TOKEN = new InjectionToken("TaNotificationService");
export class TaNotificationService {
    constructor() {
        this.id = Math.random();
        this.newNotification$ = new Subject();
    }
    addNotification(message, code) {
        this.newNotification$.next({ message, code });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSS9CLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUNsRCx1QkFBdUIsQ0FDeEIsQ0FBQztBQUtGLE1BQU0sT0FBTyxxQkFBcUI7SUFRaEM7UUFQTyxPQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRW5CLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUdqQyxDQUFDO0lBRVUsQ0FBQztJQUVULGVBQWUsQ0FBQyxPQUFlLEVBQUUsSUFBdUI7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7K0dBWlUscUJBQXFCO21IQUFyQixxQkFBcUIsY0FGcEIsTUFBTTs7NEZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IEVOb3RpZmljYXRpb25Db2RlIH0gZnJvbSBcIi4uL2VudW1cIjtcblxuZXhwb3J0IGNvbnN0IExBWllfU0VSVklDRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUYU5vdGlmaWNhdGlvblNlcnZpY2U+KFxuICBcIlRhTm90aWZpY2F0aW9uU2VydmljZVwiXG4pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYU5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgaWQgPSBNYXRoLnJhbmRvbSgpO1xuXG4gIHB1YmxpYyBuZXdOb3RpZmljYXRpb24kID0gbmV3IFN1YmplY3Q8e1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBjb2RlOiBFTm90aWZpY2F0aW9uQ29kZTtcbiAgfT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFkZE5vdGlmaWNhdGlvbihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IEVOb3RpZmljYXRpb25Db2RlKSB7XG4gICAgdGhpcy5uZXdOb3RpZmljYXRpb24kLm5leHQoeyBtZXNzYWdlLCBjb2RlIH0pO1xuICB9XG59XG4iXX0=