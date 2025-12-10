import { Injectable } from "@angular/core";
import { Geolocation } from "@capacitor/geolocation";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export class TaDevicePositionService {
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
        Geolocation.checkPermissions().then((permissionStatus) => this._canAccessPosition$.next(permissionStatus.location !== "denied"));
    }
    fetchCurrentPosition() {
        Geolocation.getCurrentPosition().then((position) => {
            this._currentPosition$.next(position);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDevicePositionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDevicePositionService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDevicePositionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXBvc2l0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2RldmljZS1wb3NpdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyx1QkFBdUI7SUFJbEMsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7UUFYUSxzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBa0IsSUFBSSxDQUFDLENBQUM7UUFDL0Qsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFVbkQsQ0FBQztJQUVULHNCQUFzQjtRQUMzQixXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3ZELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUN0RSxDQUFDO0lBQ0osQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0F4QlUsdUJBQXVCO21IQUF2Qix1QkFBdUIsY0FGdEIsTUFBTTs7NEZBRVAsdUJBQXVCO2tCQUhuQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBHZW9sb2NhdGlvbiwgUG9zaXRpb24gfSBmcm9tIFwiQGNhcGFjaXRvci9nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgVGFEZXZpY2VQb3NpdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9jdXJyZW50UG9zaXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQb3NpdGlvbiB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIF9jYW5BY2Nlc3NQb3NpdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBnZXQgY3VycmVudFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24kLmdldFZhbHVlKCk7XG4gIH1cblxuICBnZXQgY2FuQWNjZXNzUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbkFjY2Vzc1Bvc2l0aW9uJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBmZXRjaENhbkFjY2Vzc1Bvc2l0aW9uKCkge1xuICAgIEdlb2xvY2F0aW9uLmNoZWNrUGVybWlzc2lvbnMoKS50aGVuKChwZXJtaXNzaW9uU3RhdHVzKSA9PlxuICAgICAgdGhpcy5fY2FuQWNjZXNzUG9zaXRpb24kLm5leHQocGVybWlzc2lvblN0YXR1cy5sb2NhdGlvbiAhPT0gXCJkZW5pZWRcIilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGZldGNoQ3VycmVudFBvc2l0aW9uKCkge1xuICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHBvc2l0aW9uKSA9PiB7XG4gICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24kLm5leHQocG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=