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
        if (info) {
            this.features = info.features ?? [];
            this.roles = info.roles ?? [];
            this.guards = info.guards ?? [];
            this._isFill.permissions = true;
            this._canYouUpdate();
        }
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
        return !!this.roles.find((x) => x === role);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPermissionsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPermissionsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPermissionsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL3NlcnZpY2VzL3Blcm1pc3Npb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFhMUMsTUFBTSxPQUFPLG9CQUFvQjtJQVcvQixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQ7UUFkUSxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQWdCLElBQUksQ0FBQyxDQUFDO1FBQ3JELFlBQU8sR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBRTFELGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLGFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQU05QyxDQUFDO0lBRVQsR0FBRyxDQUFDLElBQXNCLEVBQUUsZUFBd0I7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxRQUFRLENBQUMsSUFBc0I7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dWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTGV2ZWwgPSAnYXV0aGVudGljYXRlZCcgfCAndW5hdXRoZW50aWNhdGVkJyB8ICdhdXRob3JpemUnIHwgJ2FkbWluaXN0cmF0b3InO1xyXG5cclxuZXhwb3J0IHR5cGUgR3VhcmRJbmZvID0ge1xyXG4gIGd1YXJkcz86IHN0cmluZ1tdO1xyXG4gIHJvbGVzPzogc3RyaW5nW107XHJcbiAgZmVhdHVyZXM/OiBzdHJpbmdbXTtcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYVBlcm1pc3Npb25zU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfdXBkYXRlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlciB8IG51bGw+KG51bGwpO1xyXG4gIHByaXZhdGUgX2lzRmlsbCA9IHsgcGVybWlzc2lvbnM6IGZhbHNlLCBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH07XHJcblxyXG4gIHB1YmxpYyBmZWF0dXJlczogc3RyaW5nW10gPSBbXTtcclxuICBwdWJsaWMgZ3VhcmRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHB1YmxpYyByb2xlczogc3RyaW5nW10gPSBbXTtcclxuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVkJCA9IHRoaXMuX3VwZGF0ZWQkLnBpcGUoZmlsdGVyKGlzTm9uTnVsbGFibGUpKTtcclxuXHJcbiAgZ2V0IHJlY2VpdmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWQkLnZhbHVlICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc2V0KGluZm86IEd1YXJkSW5mbyB8IG51bGwsIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zZXRHdWFyZChpbmZvKTtcclxuXHJcbiAgICB0aGlzLnNldFNpbGVudEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkKTtcclxuXHJcbiAgICB0aGlzLl9jYW5Zb3VVcGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRHdWFyZChpbmZvOiBHdWFyZEluZm8gfCBudWxsKSB7XHJcbiAgICBpZiAoaW5mbykge1xyXG4gICAgICB0aGlzLmZlYXR1cmVzID0gaW5mby5mZWF0dXJlcyA/PyBbXTtcclxuICAgICAgdGhpcy5yb2xlcyA9IGluZm8ucm9sZXMgPz8gW107XHJcbiAgICAgIHRoaXMuZ3VhcmRzID0gaW5mby5ndWFyZHMgPz8gW107XHJcblxyXG4gICAgICB0aGlzLl9pc0ZpbGwucGVybWlzc2lvbnMgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9jYW5Zb3VVcGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTaWxlbnRBdXRoZW50aWNhdGVkKGlzQXV0aGVudGljYXRlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB0aGlzLl9pc0ZpbGwuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jYW5Zb3VVcGRhdGUoKTtcclxuICB9XHJcbiAgcHVibGljIHNldEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGlzQXV0aGVudGljYXRlZDtcclxuXHJcbiAgICB0aGlzLl91cGRhdGVkJC5uZXh0KERhdGUubm93KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc1JvbGUkKHJvbGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWQkLnBpcGUobWFwKCgpID0+IHRoaXMuaGFzUm9sZShyb2xlKSkpO1xyXG4gIH1cclxuICBwdWJsaWMgaGFzUm9sZShyb2xlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhIXRoaXMucm9sZXMuZmluZCgoeCkgPT4geCA9PT0gcm9sZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuRGlyZWN0QWNjZXNzKGZlYXR1cmU6IHN0cmluZywgbGV2ZWw6IExldmVsKSB7XHJcbiAgICBpZiAobGV2ZWwgPT09ICdhdXRoZW50aWNhdGVkJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAobGV2ZWwgPT09ICd1bmF1dGhlbnRpY2F0ZWQnKSB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5pc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxldmVsID09PSAnYXV0aG9yaXplJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlcy5pbmNsdWRlcyhmZWF0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZlYXR1cmUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gY29uc3QgZmVhdHVyZUd1YXJkID0gdGhpcy5ndWFyZHNbZmVhdHVyZV07XHJcbiAgICAvLyBpZiAoIWZlYXR1cmVHdWFyZCkge1xyXG4gICAgLy8gICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYWNjZXNzTGV2ZWxzLmluZGV4T2YoZmVhdHVyZUd1YXJkKSA+PSBhY2Nlc3NMZXZlbHMuaW5kZXhPZihsZXZlbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuQWNjZXNzJChmZWF0dXJlOiBzdHJpbmcsIGxldmVsOiBMZXZlbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWQkLnBpcGUobWFwKCgpID0+IHRoaXMuY2FuRGlyZWN0QWNjZXNzKGZlYXR1cmUsIGxldmVsKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2FuWW91VXBkYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9pc0ZpbGwuaXNBdXRoZW50aWNhdGVkIHx8ICF0aGlzLl9pc0ZpbGwucGVybWlzc2lvbnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdXBkYXRlZCQubmV4dChEYXRlLm5vdygpKTtcclxuICB9XHJcbn1cclxuIl19