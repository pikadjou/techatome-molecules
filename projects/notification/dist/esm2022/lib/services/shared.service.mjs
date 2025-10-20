import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TaNotificationSharedService {
    constructor() {
        this.paymentStatusTemplate = null;
        this.projectStatusTemplate = null;
        this.getProjects$ = null;
        this.routing = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationSharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationSharedService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationSharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3NoYXJlZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7O0FBU3hELE1BQU0sT0FBTywyQkFBMkI7SUFRdEM7UUFQTywwQkFBcUIsR0FBNEIsSUFBSSxDQUFDO1FBQ3RELDBCQUFxQixHQUE0QixJQUFJLENBQUM7UUFFdEQsaUJBQVksR0FBMkUsSUFBSSxDQUFDO1FBRTVGLFlBQU8sR0FBMkQsSUFBSSxDQUFDO0lBRS9ELENBQUM7K0dBUkwsMkJBQTJCO21IQUEzQiwyQkFBMkIsY0FGMUIsTUFBTTs7NEZBRVAsMkJBQTJCO2tCQUh2QyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgUm91dGluZ1R5cGUgPSAncHJvamVjdCcgfCAnaW52b2ljZScgfCAncXVvdGF0aW9uVmVyc2lvbicgfCAndGFzayc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYU5vdGlmaWNhdGlvblNoYXJlZFNlcnZpY2Uge1xuICBwdWJsaWMgcGF5bWVudFN0YXR1c1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBwcm9qZWN0U3RhdHVzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgZ2V0UHJvamVjdHMkOiAoKGlkczogc3RyaW5nW10pID0+IE9ic2VydmFibGU8eyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVtdPikgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgcm91dGluZzogeyBbaW5kZXggaW4gUm91dGluZ1R5cGVdOiAoZGF0YTogYW55KSA9PiB2b2lkIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=