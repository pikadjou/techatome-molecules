import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { BehaviorSubject } from 'rxjs';
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
        Geolocation.checkPermissions().then(permissionStatus => this._canAccessPosition$.next(permissionStatus.location !== 'denied'));
    }
    fetchCurrentPosition() {
        Geolocation.getCurrentPosition().then(position => {
            this._currentPosition$.next(position);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDevicePositionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDevicePositionService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDevicePositionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXBvc2l0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2RldmljZS1wb3NpdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyx1QkFBdUI7SUFJbEMsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7UUFYUSxzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBa0IsSUFBSSxDQUFDLENBQUM7UUFDL0Qsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFVbkQsQ0FBQztJQUVULHNCQUFzQjtRQUMzQixXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUNyRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUM7SUFFTSxvQkFBb0I7UUFDekIsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQXhCVSx1QkFBdUI7bUhBQXZCLHVCQUF1QixjQUZ0QixNQUFNOzs0RkFFUCx1QkFBdUI7a0JBSG5DLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHZW9sb2NhdGlvbiwgUG9zaXRpb24gfSBmcm9tICdAY2FwYWNpdG9yL2dlb2xvY2F0aW9uJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFEZXZpY2VQb3NpdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9jdXJyZW50UG9zaXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQb3NpdGlvbiB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIF9jYW5BY2Nlc3NQb3NpdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBnZXQgY3VycmVudFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24kLmdldFZhbHVlKCk7XG4gIH1cblxuICBnZXQgY2FuQWNjZXNzUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbkFjY2Vzc1Bvc2l0aW9uJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBmZXRjaENhbkFjY2Vzc1Bvc2l0aW9uKCkge1xuICAgIEdlb2xvY2F0aW9uLmNoZWNrUGVybWlzc2lvbnMoKS50aGVuKHBlcm1pc3Npb25TdGF0dXMgPT5cbiAgICAgIHRoaXMuX2NhbkFjY2Vzc1Bvc2l0aW9uJC5uZXh0KHBlcm1pc3Npb25TdGF0dXMubG9jYXRpb24gIT09ICdkZW5pZWQnKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hDdXJyZW50UG9zaXRpb24oKSB7XG4gICAgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKCkudGhlbihwb3NpdGlvbiA9PiB7XG4gICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24kLm5leHQocG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=