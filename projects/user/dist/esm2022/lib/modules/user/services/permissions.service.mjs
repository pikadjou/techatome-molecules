import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { isNonNullable } from '@ta/utils';
import * as i0 from "@angular/core";
export class TaPermissionsService {
    get received() {
        return this._updated$.value !== null;
    }
    constructor() {
        this._updated$ = new BehaviorSubject(null);
        this._isFill = { permissions: false, isAuthenticated: false };
        this.features = [];
        this.guards = [];
        this.roles = [];
        this.isAuthenticated = false;
        this.updated$ = this._updated$.pipe(filter(isNonNullable));
    }
    set(info, isAuthenticated) {
        this.setGuard(info);
        this.setSilentAuthenticated(isAuthenticated);
        this._canYouUpdate();
    }
    setGuard(info) {
        this.features = info?.features ?? [];
        this.roles = info?.roles ?? [];
        this.guards = info?.guards ?? [];
        this._isFill.permissions = true;
        this._canYouUpdate();
    }
    setSilentAuthenticated(isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this._isFill.isAuthenticated = true;
        this._canYouUpdate();
    }
    setAuthenticated(isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this._updated$.next(Date.now());
    }
    hasRole$(role) {
        return this._updated$.pipe(map(() => this.hasRole(role)));
    }
    hasRole(role) {
        return this.roles.some(x => x === role);
    }
    canDirectAccess(feature, level) {
        if (level === 'authenticated') {
            return this.isAuthenticated;
        }
        if (level === 'unauthenticated') {
            return !this.isAuthenticated;
        }
        if (level === 'authorize') {
            return this.features.includes(feature);
        }
        if (!feature) {
            return true;
        }
        return false;
        // const featureGuard = this.guards[feature];
        // if (!featureGuard) {
        //   return true;
        // }
        // return accessLevels.indexOf(featureGuard) >= accessLevels.indexOf(level);
    }
    canAccess$(feature, level) {
        return this._updated$.pipe(map(() => this.canDirectAccess(feature, level)));
    }
    _canYouUpdate() {
        if (!this._isFill.isAuthenticated || !this._isFill.permissions) {
            return;
        }
        this._updated$.next(Date.now());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaPermissionsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaPermissionsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaPermissionsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL3NlcnZpY2VzL3Blcm1pc3Npb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFhMUMsTUFBTSxPQUFPLG9CQUFvQjtJQVcvQixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQ7UUFkUSxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQWdCLElBQUksQ0FBQyxDQUFDO1FBQ3JELFlBQU8sR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBRTFELGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLGFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQU05QyxDQUFDO0lBRVQsR0FBRyxDQUFDLElBQXNCLEVBQUUsZUFBd0I7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxRQUFRLENBQUMsSUFBc0I7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRWhDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sc0JBQXNCLENBQUMsZUFBd0I7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ00sZ0JBQWdCLENBQUMsZUFBd0I7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFFdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLFFBQVEsQ0FBQyxJQUFZO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDTSxPQUFPLENBQUMsSUFBWTtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxlQUFlLENBQUMsT0FBZSxFQUFFLEtBQVk7UUFDbEQsSUFBSSxLQUFLLEtBQUssZUFBZSxFQUFFLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLEtBQUssS0FBSyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLEtBQUssS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDYixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztRQUNiLDZDQUE2QztRQUM3Qyx1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLElBQUk7UUFFSiw0RUFBNEU7SUFDOUUsQ0FBQztJQUVNLFVBQVUsQ0FBQyxPQUFlLEVBQUUsS0FBWTtRQUM3QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvRCxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7K0dBekZVLG9CQUFvQjttSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07OzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSAnQHRhL3V0aWxzJztcclxuXHJcbmV4cG9ydCB0eXBlIExldmVsID0gJ2F1dGhlbnRpY2F0ZWQnIHwgJ3VuYXV0aGVudGljYXRlZCcgfCAnYXV0aG9yaXplJyB8ICdhZG1pbmlzdHJhdG9yJztcclxuXHJcbmV4cG9ydCB0eXBlIEd1YXJkSW5mbyA9IHtcclxuICBndWFyZHM/OiBzdHJpbmdbXTtcclxuICByb2xlcz86IHN0cmluZ1tdO1xyXG4gIGZlYXR1cmVzPzogc3RyaW5nW107XHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFQZXJtaXNzaW9uc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3VwZGF0ZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXIgfCBudWxsPihudWxsKTtcclxuICBwcml2YXRlIF9pc0ZpbGwgPSB7IHBlcm1pc3Npb25zOiBmYWxzZSwgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSB9O1xyXG5cclxuICBwdWJsaWMgZmVhdHVyZXM6IHN0cmluZ1tdID0gW107XHJcbiAgcHVibGljIGd1YXJkczogc3RyaW5nW10gPSBbXTtcclxuICBwdWJsaWMgcm9sZXM6IHN0cmluZ1tdID0gW107XHJcbiAgcHVibGljIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlZCQgPSB0aGlzLl91cGRhdGVkJC5waXBlKGZpbHRlcihpc05vbk51bGxhYmxlKSk7XHJcblxyXG4gIGdldCByZWNlaXZlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGVkJC52YWx1ZSAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHNldChpbmZvOiBHdWFyZEluZm8gfCBudWxsLCBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2V0R3VhcmQoaW5mbyk7XHJcblxyXG4gICAgdGhpcy5zZXRTaWxlbnRBdXRoZW50aWNhdGVkKGlzQXV0aGVudGljYXRlZCk7XHJcblxyXG4gICAgdGhpcy5fY2FuWW91VXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0R3VhcmQoaW5mbzogR3VhcmRJbmZvIHwgbnVsbCkge1xyXG4gICAgdGhpcy5mZWF0dXJlcyA9IGluZm8/LmZlYXR1cmVzID8/IFtdO1xyXG4gICAgdGhpcy5yb2xlcyA9IGluZm8/LnJvbGVzID8/IFtdO1xyXG5cclxuICAgIHRoaXMuZ3VhcmRzID0gaW5mbz8uZ3VhcmRzID8/IFtdO1xyXG5cclxuICAgIHRoaXMuX2lzRmlsbC5wZXJtaXNzaW9ucyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5fY2FuWW91VXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2lsZW50QXV0aGVudGljYXRlZChpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgdGhpcy5faXNGaWxsLmlzQXV0aGVudGljYXRlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5fY2FuWW91VXBkYXRlKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRBdXRoZW50aWNhdGVkKGlzQXV0aGVudGljYXRlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlZCQubmV4dChEYXRlLm5vdygpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNSb2xlJChyb2xlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGVkJC5waXBlKG1hcCgoKSA9PiB0aGlzLmhhc1JvbGUocm9sZSkpKTtcclxuICB9XHJcbiAgcHVibGljIGhhc1JvbGUocm9sZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb2xlcy5zb21lKHggPT4geCA9PT0gcm9sZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuRGlyZWN0QWNjZXNzKGZlYXR1cmU6IHN0cmluZywgbGV2ZWw6IExldmVsKSB7XHJcbiAgICBpZiAobGV2ZWwgPT09ICdhdXRoZW50aWNhdGVkJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAobGV2ZWwgPT09ICd1bmF1dGhlbnRpY2F0ZWQnKSB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5pc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxldmVsID09PSAnYXV0aG9yaXplJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlcy5pbmNsdWRlcyhmZWF0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZlYXR1cmUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gY29uc3QgZmVhdHVyZUd1YXJkID0gdGhpcy5ndWFyZHNbZmVhdHVyZV07XHJcbiAgICAvLyBpZiAoIWZlYXR1cmVHdWFyZCkge1xyXG4gICAgLy8gICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYWNjZXNzTGV2ZWxzLmluZGV4T2YoZmVhdHVyZUd1YXJkKSA+PSBhY2Nlc3NMZXZlbHMuaW5kZXhPZihsZXZlbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuQWNjZXNzJChmZWF0dXJlOiBzdHJpbmcsIGxldmVsOiBMZXZlbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWQkLnBpcGUobWFwKCgpID0+IHRoaXMuY2FuRGlyZWN0QWNjZXNzKGZlYXR1cmUsIGxldmVsKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2FuWW91VXBkYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9pc0ZpbGwuaXNBdXRoZW50aWNhdGVkIHx8ICF0aGlzLl9pc0ZpbGwucGVybWlzc2lvbnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdXBkYXRlZCQubmV4dChEYXRlLm5vdygpKTtcclxuICB9XHJcbn1cclxuIl19