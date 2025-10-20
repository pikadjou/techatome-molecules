import { HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { differenceInMinutes } from 'date-fns';
import { of, share, tap } from 'rxjs';
import { Logger } from '../logger';
import * as i0 from "@angular/core";
export class CacheInterceptor {
    constructor() {
        this.cache = new Map();
    }
    intercept(req, next) {
        if (req.method !== 'GET') {
            return next.handle(req);
        }
        const cacheTime = Number(req.params.get('cacheTime'));
        if (cacheTime === 0) {
            Logger.LogInfo('[SERVER] Api No Cache required', req.url);
            return next.handle(req);
        }
        const cachedResponse = this.cache.get(req.url);
        if (cachedResponse) {
            const diffInMinutes = differenceInMinutes(new Date(), cachedResponse?.timestamp);
            if (cacheTime === -1 || cacheTime > diffInMinutes) {
                Logger.LogInfo('[SERVER] Api Cached response:', req.url, cachedResponse);
                return of(cachedResponse.response.clone());
            }
            else {
                Logger.LogInfo('[SERVER] Api Cached expired', req.url);
            }
        }
        return next.handle(req).pipe(tap((stateEvent) => {
            if (stateEvent instanceof HttpResponse) {
                this.cache.set(req.url, {
                    timestamp: new Date(),
                    response: stateEvent.clone(),
                });
            }
        }), share());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CacheInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CacheInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CacheInterceptor, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGVJbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvc2VydmVyL2NhY2hlSW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUtMLFlBQVksR0FDYixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQy9DLE9BQU8sRUFBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUduQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRVUsVUFBSyxHQUNYLElBQUksR0FBRyxFQUFFLENBQUM7S0E4Q2I7SUE3Q0MsU0FBUyxDQUNQLEdBQXFCLEVBQ3JCLElBQWlCO1FBRWpCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksU0FBUyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLElBQUksY0FBYyxFQUFFLENBQUM7WUFDbkIsTUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQ3ZDLElBQUksSUFBSSxFQUFFLEVBQ1YsY0FBYyxFQUFFLFNBQVMsQ0FDMUIsQ0FBQztZQUVGLElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxhQUFhLEVBQUUsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FDWiwrQkFBK0IsRUFDL0IsR0FBRyxDQUFDLEdBQUcsRUFDUCxjQUFjLENBQ2YsQ0FBQztnQkFDRixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDN0MsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDMUIsR0FBRyxDQUFDLENBQUMsVUFBZSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxVQUFVLFlBQVksWUFBWSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7b0JBQ3RCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtvQkFDckIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUU7aUJBQzdCLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLENBQUMsRUFDRixLQUFLLEVBQUUsQ0FDUixDQUFDO0lBQ0osQ0FBQzsrR0EvQ1UsZ0JBQWdCO21IQUFoQixnQkFBZ0I7OzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZGlmZmVyZW5jZUluTWludXRlcyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBzaGFyZSwgdGFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWNoZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBjYWNoZTogTWFwPHN0cmluZywgeyB0aW1lc3RhbXA6IERhdGU7IHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PiB9PiA9XG4gICAgbmV3IE1hcCgpO1xuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cbiAgICBjb25zdCBjYWNoZVRpbWUgPSBOdW1iZXIocmVxLnBhcmFtcy5nZXQoJ2NhY2hlVGltZScpKTtcblxuICAgIGlmIChjYWNoZVRpbWUgPT09IDApIHtcbiAgICAgIExvZ2dlci5Mb2dJbmZvKCdbU0VSVkVSXSBBcGkgTm8gQ2FjaGUgcmVxdWlyZWQnLCByZXEudXJsKTtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cbiAgICBjb25zdCBjYWNoZWRSZXNwb25zZSA9IHRoaXMuY2FjaGUuZ2V0KHJlcS51cmwpO1xuXG4gICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBkaWZmSW5NaW51dGVzID0gZGlmZmVyZW5jZUluTWludXRlcyhcbiAgICAgICAgbmV3IERhdGUoKSxcbiAgICAgICAgY2FjaGVkUmVzcG9uc2U/LnRpbWVzdGFtcFxuICAgICAgKTtcblxuICAgICAgaWYgKGNhY2hlVGltZSA9PT0gLTEgfHwgY2FjaGVUaW1lID4gZGlmZkluTWludXRlcykge1xuICAgICAgICBMb2dnZXIuTG9nSW5mbyhcbiAgICAgICAgICAnW1NFUlZFUl0gQXBpIENhY2hlZCByZXNwb25zZTonLFxuICAgICAgICAgIHJlcS51cmwsXG4gICAgICAgICAgY2FjaGVkUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG9mKGNhY2hlZFJlc3BvbnNlLnJlc3BvbnNlLmNsb25lKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLkxvZ0luZm8oJ1tTRVJWRVJdIEFwaSBDYWNoZWQgZXhwaXJlZCcsIHJlcS51cmwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUoXG4gICAgICB0YXAoKHN0YXRlRXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGVFdmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KHJlcS51cmwsIHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIHJlc3BvbnNlOiBzdGF0ZUV2ZW50LmNsb25lKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgc2hhcmUoKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==