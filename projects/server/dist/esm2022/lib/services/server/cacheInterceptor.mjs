import { HttpResponse, } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { differenceInMinutes } from "date-fns";
import { of, share, tap } from "rxjs";
import { Logger } from "../logger";
import * as i0 from "@angular/core";
export class CacheInterceptor {
    constructor() {
        this.cache = new Map();
    }
    intercept(req, next) {
        if (req.method !== "GET") {
            return next.handle(req);
        }
        const cacheTime = Number(req.params.get("cacheTime"));
        if (cacheTime === 0) {
            Logger.LogInfo("[SERVER] Api No Cache required", req.url);
            return next.handle(req);
        }
        const cachedResponse = this.cache.get(req.url);
        if (cachedResponse) {
            const diffInMinutes = differenceInMinutes(new Date(), cachedResponse?.timestamp);
            if (cacheTime === -1 || cacheTime > diffInMinutes) {
                Logger.LogInfo("[SERVER] Api Cached response:", req.url, cachedResponse);
                return of(cachedResponse.response.clone());
            }
            else {
                Logger.LogInfo("[SERVER] Api Cached expired", req.url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGVJbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvc2VydmVyL2NhY2hlSW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUtMLFlBQVksR0FDYixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQy9DLE9BQU8sRUFBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUduQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRVUsVUFBSyxHQUNYLElBQUksR0FBRyxFQUFFLENBQUM7S0E4Q2I7SUE3Q0MsU0FBUyxDQUNQLEdBQXFCLEVBQ3JCLElBQWlCO1FBRWpCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksU0FBUyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLElBQUksY0FBYyxFQUFFLENBQUM7WUFDbkIsTUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQ3ZDLElBQUksSUFBSSxFQUFFLEVBQ1YsY0FBYyxFQUFFLFNBQVMsQ0FDMUIsQ0FBQztZQUVGLElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxhQUFhLEVBQUUsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FDWiwrQkFBK0IsRUFDL0IsR0FBRyxDQUFDLEdBQUcsRUFDUCxjQUFjLENBQ2YsQ0FBQztnQkFDRixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDN0MsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDMUIsR0FBRyxDQUFDLENBQUMsVUFBZSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxVQUFVLFlBQVksWUFBWSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7b0JBQ3RCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtvQkFDckIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUU7aUJBQzdCLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLENBQUMsRUFDRixLQUFLLEVBQUUsQ0FDUixDQUFDO0lBQ0osQ0FBQzsrR0EvQ1UsZ0JBQWdCO21IQUFoQixnQkFBZ0I7OzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IGRpZmZlcmVuY2VJbk1pbnV0ZXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBzaGFyZSwgdGFwIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FjaGVJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIHByaXZhdGUgY2FjaGU6IE1hcDxzdHJpbmcsIHsgdGltZXN0YW1wOiBEYXRlOyByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gfT4gPVxuICAgIG5ldyBNYXAoKTtcbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cbiAgICBjb25zdCBjYWNoZVRpbWUgPSBOdW1iZXIocmVxLnBhcmFtcy5nZXQoXCJjYWNoZVRpbWVcIikpO1xuXG4gICAgaWYgKGNhY2hlVGltZSA9PT0gMCkge1xuICAgICAgTG9nZ2VyLkxvZ0luZm8oXCJbU0VSVkVSXSBBcGkgTm8gQ2FjaGUgcmVxdWlyZWRcIiwgcmVxLnVybCk7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG4gICAgY29uc3QgY2FjaGVkUmVzcG9uc2UgPSB0aGlzLmNhY2hlLmdldChyZXEudXJsKTtcblxuICAgIGlmIChjYWNoZWRSZXNwb25zZSkge1xuICAgICAgY29uc3QgZGlmZkluTWludXRlcyA9IGRpZmZlcmVuY2VJbk1pbnV0ZXMoXG4gICAgICAgIG5ldyBEYXRlKCksXG4gICAgICAgIGNhY2hlZFJlc3BvbnNlPy50aW1lc3RhbXBcbiAgICAgICk7XG5cbiAgICAgIGlmIChjYWNoZVRpbWUgPT09IC0xIHx8IGNhY2hlVGltZSA+IGRpZmZJbk1pbnV0ZXMpIHtcbiAgICAgICAgTG9nZ2VyLkxvZ0luZm8oXG4gICAgICAgICAgXCJbU0VSVkVSXSBBcGkgQ2FjaGVkIHJlc3BvbnNlOlwiLFxuICAgICAgICAgIHJlcS51cmwsXG4gICAgICAgICAgY2FjaGVkUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG9mKGNhY2hlZFJlc3BvbnNlLnJlc3BvbnNlLmNsb25lKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLkxvZ0luZm8oXCJbU0VSVkVSXSBBcGkgQ2FjaGVkIGV4cGlyZWRcIiwgcmVxLnVybCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShcbiAgICAgIHRhcCgoc3RhdGVFdmVudDogYW55KSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZUV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgdGhpcy5jYWNoZS5zZXQocmVxLnVybCwge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgcmVzcG9uc2U6IHN0YXRlRXZlbnQuY2xvbmUoKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBzaGFyZSgpXG4gICAgKTtcbiAgfVxufVxuIl19