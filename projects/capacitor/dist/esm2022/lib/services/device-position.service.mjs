import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class CamDevicePositionService {
    get currentPosition() {
        return this._currentPosition$.getValue();
    }
    get canAccessPosition() {
        return this._canAccessPosition$.getValue();
    }
    constructor() {
        this._currentPosition$ = new BehaviorSubject(null);
        this._canAccessPosition$ = new BehaviorSubject(false);
    }
    fetchCanAccessPosition() {
        Geolocation.checkPermissions().then((permissionStatus) => this._canAccessPosition$.next(permissionStatus.location !== 'denied'));
    }
    fetchCurrentPosition() {
        Geolocation.getCurrentPosition().then((position) => {
            this._currentPosition$.next(position);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDevicePositionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDevicePositionService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDevicePositionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXBvc2l0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2RldmljZS1wb3NpdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyx3QkFBd0I7SUFJbkMsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7UUFYUSxzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBa0IsSUFBSSxDQUFDLENBQUM7UUFDL0Qsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFVbkQsQ0FBQztJQUVULHNCQUFzQjtRQUMzQixXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3ZELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUN0RSxDQUFDO0lBQ0osQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0F4QlUsd0JBQXdCO21IQUF4Qix3QkFBd0IsY0FGdkIsTUFBTTs7NEZBRVAsd0JBQXdCO2tCQUhwQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2VvbG9jYXRpb24sIFBvc2l0aW9uIH0gZnJvbSAnQGNhcGFjaXRvci9nZW9sb2NhdGlvbic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhbURldmljZVBvc2l0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgX2N1cnJlbnRQb3NpdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBvc2l0aW9uIHwgbnVsbD4obnVsbCk7XG4gIHByaXZhdGUgX2NhbkFjY2Vzc1Bvc2l0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGdldCBjdXJyZW50UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbiQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGdldCBjYW5BY2Nlc3NQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuQWNjZXNzUG9zaXRpb24kLmdldFZhbHVlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGZldGNoQ2FuQWNjZXNzUG9zaXRpb24oKSB7XG4gICAgR2VvbG9jYXRpb24uY2hlY2tQZXJtaXNzaW9ucygpLnRoZW4oKHBlcm1pc3Npb25TdGF0dXMpID0+XG4gICAgICB0aGlzLl9jYW5BY2Nlc3NQb3NpdGlvbiQubmV4dChwZXJtaXNzaW9uU3RhdHVzLmxvY2F0aW9uICE9PSAnZGVuaWVkJylcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGZldGNoQ3VycmVudFBvc2l0aW9uKCkge1xuICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHBvc2l0aW9uKSA9PiB7XG4gICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24kLm5leHQocG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=