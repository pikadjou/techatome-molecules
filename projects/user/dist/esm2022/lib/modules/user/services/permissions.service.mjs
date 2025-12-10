import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, map } from "rxjs";
import { isNonNullable } from "@ta/utils";
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
        if (level === "authenticated") {
            return this.isAuthenticated;
        }
        if (level === "unauthenticated") {
            return !this.isAuthenticated;
        }
        if (level === "authorize") {
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
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPermissionsService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPermissionsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL3NlcnZpY2VzL3Blcm1pc3Npb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFpQjFDLE1BQU0sT0FBTyxvQkFBb0I7SUFXL0IsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVEO1FBZFEsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFnQixJQUFJLENBQUMsQ0FBQztRQUNyRCxZQUFPLEdBQUcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUUxRCxhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxhQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFNOUMsQ0FBQztJQUVULEdBQUcsQ0FBQyxJQUFzQixFQUFFLGVBQXdCO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sUUFBUSxDQUFDLElBQXNC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bmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmV4cG9ydCB0eXBlIExldmVsID1cbiAgfCBcImF1dGhlbnRpY2F0ZWRcIlxuICB8IFwidW5hdXRoZW50aWNhdGVkXCJcbiAgfCBcImF1dGhvcml6ZVwiXG4gIHwgXCJhZG1pbmlzdHJhdG9yXCI7XG5cbmV4cG9ydCB0eXBlIEd1YXJkSW5mbyA9IHtcbiAgZ3VhcmRzPzogc3RyaW5nW107XG4gIHJvbGVzPzogc3RyaW5nW107XG4gIGZlYXR1cmVzPzogc3RyaW5nW107XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYVBlcm1pc3Npb25zU2VydmljZSB7XG4gIHByaXZhdGUgX3VwZGF0ZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgcHJpdmF0ZSBfaXNGaWxsID0geyBwZXJtaXNzaW9uczogZmFsc2UsIGlzQXV0aGVudGljYXRlZDogZmFsc2UgfTtcblxuICBwdWJsaWMgZmVhdHVyZXM6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyBndWFyZHM6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyByb2xlczogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyB1cGRhdGVkJCA9IHRoaXMuX3VwZGF0ZWQkLnBpcGUoZmlsdGVyKGlzTm9uTnVsbGFibGUpKTtcblxuICBnZXQgcmVjZWl2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWQkLnZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBzZXQoaW5mbzogR3VhcmRJbmZvIHwgbnVsbCwgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXRHdWFyZChpbmZvKTtcblxuICAgIHRoaXMuc2V0U2lsZW50QXV0aGVudGljYXRlZChpc0F1dGhlbnRpY2F0ZWQpO1xuXG4gICAgdGhpcy5fY2FuWW91VXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0R3VhcmQoaW5mbzogR3VhcmRJbmZvIHwgbnVsbCkge1xuICAgIGlmIChpbmZvKSB7XG4gICAgICB0aGlzLmZlYXR1cmVzID0gaW5mby5mZWF0dXJlcyA/PyBbXTtcbiAgICAgIHRoaXMucm9sZXMgPSBpbmZvLnJvbGVzID8/IFtdO1xuICAgICAgdGhpcy5ndWFyZHMgPSBpbmZvLmd1YXJkcyA/PyBbXTtcblxuICAgICAgdGhpcy5faXNGaWxsLnBlcm1pc3Npb25zID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2NhbllvdVVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRTaWxlbnRBdXRoZW50aWNhdGVkKGlzQXV0aGVudGljYXRlZDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xuICAgIHRoaXMuX2lzRmlsbC5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5fY2FuWW91VXBkYXRlKCk7XG4gIH1cbiAgcHVibGljIHNldEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XG5cbiAgICB0aGlzLl91cGRhdGVkJC5uZXh0KERhdGUubm93KCkpO1xuICB9XG5cbiAgcHVibGljIGhhc1JvbGUkKHJvbGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVkJC5waXBlKG1hcCgoKSA9PiB0aGlzLmhhc1JvbGUocm9sZSkpKTtcbiAgfVxuICBwdWJsaWMgaGFzUm9sZShyb2xlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gISF0aGlzLnJvbGVzLmZpbmQoKHgpID0+IHggPT09IHJvbGUpO1xuICB9XG5cbiAgcHVibGljIGNhbkRpcmVjdEFjY2VzcyhmZWF0dXJlOiBzdHJpbmcsIGxldmVsOiBMZXZlbCkge1xuICAgIGlmIChsZXZlbCA9PT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzQXV0aGVudGljYXRlZDtcbiAgICB9XG4gICAgaWYgKGxldmVsID09PSBcInVuYXV0aGVudGljYXRlZFwiKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNBdXRoZW50aWNhdGVkO1xuICAgIH1cblxuICAgIGlmIChsZXZlbCA9PT0gXCJhdXRob3JpemVcIikge1xuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMuaW5jbHVkZXMoZmVhdHVyZSk7XG4gICAgfVxuXG4gICAgaWYgKCFmZWF0dXJlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gY29uc3QgZmVhdHVyZUd1YXJkID0gdGhpcy5ndWFyZHNbZmVhdHVyZV07XG4gICAgLy8gaWYgKCFmZWF0dXJlR3VhcmQpIHtcbiAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgIC8vIH1cblxuICAgIC8vIHJldHVybiBhY2Nlc3NMZXZlbHMuaW5kZXhPZihmZWF0dXJlR3VhcmQpID49IGFjY2Vzc0xldmVscy5pbmRleE9mKGxldmVsKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5BY2Nlc3MkKGZlYXR1cmU6IHN0cmluZywgbGV2ZWw6IExldmVsKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWQkLnBpcGUobWFwKCgpID0+IHRoaXMuY2FuRGlyZWN0QWNjZXNzKGZlYXR1cmUsIGxldmVsKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FuWW91VXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5faXNGaWxsLmlzQXV0aGVudGljYXRlZCB8fCAhdGhpcy5faXNGaWxsLnBlcm1pc3Npb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZWQkLm5leHQoRGF0ZS5ub3coKSk7XG4gIH1cbn1cbiJdfQ==