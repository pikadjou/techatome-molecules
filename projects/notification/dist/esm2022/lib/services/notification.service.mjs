import { Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export const LAZY_SERVICE_TOKEN = new InjectionToken('TaNotificationService');
export class TaNotificationService {
    constructor() {
        this.id = Math.random();
        this.newNotification$ = new Subject();
    }
    addNotification(message, code) {
        this.newNotification$.next({ message, code });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaNotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSS9CLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUF3Qix1QkFBdUIsQ0FBQyxDQUFDO0FBS3JHLE1BQU0sT0FBTyxxQkFBcUI7SUFRaEM7UUFQTyxPQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRW5CLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUdqQyxDQUFDO0lBRVUsQ0FBQztJQUVULGVBQWUsQ0FBQyxPQUFlLEVBQUUsSUFBdUI7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7K0dBWlUscUJBQXFCO21IQUFyQixxQkFBcUIsY0FGcEIsTUFBTTs7NEZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRU5vdGlmaWNhdGlvbkNvZGUgfSBmcm9tICcuLi9lbnVtJztcblxuZXhwb3J0IGNvbnN0IExBWllfU0VSVklDRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUYU5vdGlmaWNhdGlvblNlcnZpY2U+KCdUYU5vdGlmaWNhdGlvblNlcnZpY2UnKTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhTm90aWZpY2F0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBpZCA9IE1hdGgucmFuZG9tKCk7XG5cbiAgcHVibGljIG5ld05vdGlmaWNhdGlvbiQgPSBuZXcgU3ViamVjdDx7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIGNvZGU6IEVOb3RpZmljYXRpb25Db2RlO1xuICB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgYWRkTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZywgY29kZTogRU5vdGlmaWNhdGlvbkNvZGUpIHtcbiAgICB0aGlzLm5ld05vdGlmaWNhdGlvbiQubmV4dCh7IG1lc3NhZ2UsIGNvZGUgfSk7XG4gIH1cbn1cbiJdfQ==