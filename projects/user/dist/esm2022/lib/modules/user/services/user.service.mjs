import { Injectable, InjectionToken } from "@angular/core";
import { filter } from "rxjs";
import { HandleSimpleRequest } from "@ta/server";
import { TaBaseService } from "@ta/server";
import { isNonNullable } from "@ta/utils";
import { userProfileProps } from "./dto/user-profile";
import { userInfo } from "./queries";
import * as i0 from "@angular/core";
export const TA_USER_SERVICE = new InjectionToken("TaUserService_injection-token");
const graphEndpoint = {
    clientName: "userService",
    endpoint: "",
};
export class TaUserService extends TaBaseService {
    constructor() {
        super();
        this.userProfile = new HandleSimpleRequest();
        super.registerRoutes({ graphEndpoint: graphEndpoint });
    }
    fetchUserProfile$(props = "") {
        return this.userProfile.fetch(this._graphService
            .fetchQuery(userInfo({
            props: `
              ${userProfileProps.get("id")}
              ${userProfileProps.get("firstname")}
              ${userProfileProps.get("lastname")}
              ${userProfileProps.get("email")}
              ${userProfileProps.get("picture")}
              ${userProfileProps.get("dateOfBirth")}
              ${props}
            `,
        }), "userInfo", graphEndpoint.clientName)
            .pipe(filter(isNonNullable)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUserService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUIsT0FBTyxFQUFpQixtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFlLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFckMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksY0FBYyxDQUMvQywrQkFBK0IsQ0FDaEMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNuQyxVQUFVLEVBQUUsYUFBYTtJQUN6QixRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFLRixNQUFNLE9BQU8sYUFBK0IsU0FBUSxhQUFhO0lBRy9EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFISCxnQkFBVyxHQUFHLElBQUksbUJBQW1CLEVBQUssQ0FBQztRQUloRCxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLGlCQUFpQixDQUFDLFFBQWdCLEVBQUU7UUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FDM0IsSUFBSSxDQUFDLGFBQWE7YUFDZixVQUFVLENBQ1QsUUFBUSxDQUFDO1lBQ1AsS0FBSyxFQUFFO2dCQUNILGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQ2pDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ2hDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQy9CLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0JBQ25DLEtBQUs7YUFDUjtTQUNGLENBQUMsRUFDRixVQUFVLEVBQ1YsYUFBYSxDQUFDLFVBQVUsQ0FDekI7YUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQy9CLENBQUM7SUFDSixDQUFDOytHQTVCVSxhQUFhO21IQUFiLGFBQWEsY0FGWixNQUFNOzs0RkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgR3JhcGhFbmRwb2ludCwgSGFuZGxlU2ltcGxlUmVxdWVzdCB9IGZyb20gXCJAdGEvc2VydmVyXCI7XG5pbXBvcnQgeyBUYUJhc2VTZXJ2aWNlIH0gZnJvbSBcIkB0YS9zZXJ2ZXJcIjtcbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IFVzZXJQcm9maWxlLCB1c2VyUHJvZmlsZVByb3BzIH0gZnJvbSBcIi4vZHRvL3VzZXItcHJvZmlsZVwiO1xuaW1wb3J0IHsgdXNlckluZm8gfSBmcm9tIFwiLi9xdWVyaWVzXCI7XG5cbmV4cG9ydCBjb25zdCBUQV9VU0VSX1NFUlZJQ0UgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGFVc2VyU2VydmljZT4oXG4gIFwiVGFVc2VyU2VydmljZV9pbmplY3Rpb24tdG9rZW5cIlxuKTtcblxuY29uc3QgZ3JhcGhFbmRwb2ludDogR3JhcGhFbmRwb2ludCA9IHtcbiAgY2xpZW50TmFtZTogXCJ1c2VyU2VydmljZVwiLFxuICBlbmRwb2ludDogXCJcIixcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFRhVXNlclNlcnZpY2U8VCA9IFVzZXJQcm9maWxlPiBleHRlbmRzIFRhQmFzZVNlcnZpY2Uge1xuICBwdWJsaWMgdXNlclByb2ZpbGUgPSBuZXcgSGFuZGxlU2ltcGxlUmVxdWVzdDxUPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgc3VwZXIucmVnaXN0ZXJSb3V0ZXMoeyBncmFwaEVuZHBvaW50OiBncmFwaEVuZHBvaW50IH0pO1xuICB9XG5cbiAgcHVibGljIGZldGNoVXNlclByb2ZpbGUkKHByb3BzOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclByb2ZpbGUuZmV0Y2goXG4gICAgICB0aGlzLl9ncmFwaFNlcnZpY2VcbiAgICAgICAgLmZldGNoUXVlcnk8VD4oXG4gICAgICAgICAgdXNlckluZm8oe1xuICAgICAgICAgICAgcHJvcHM6IGBcbiAgICAgICAgICAgICAgJHt1c2VyUHJvZmlsZVByb3BzLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAke3VzZXJQcm9maWxlUHJvcHMuZ2V0KFwiZmlyc3RuYW1lXCIpfVxuICAgICAgICAgICAgICAke3VzZXJQcm9maWxlUHJvcHMuZ2V0KFwibGFzdG5hbWVcIil9XG4gICAgICAgICAgICAgICR7dXNlclByb2ZpbGVQcm9wcy5nZXQoXCJlbWFpbFwiKX1cbiAgICAgICAgICAgICAgJHt1c2VyUHJvZmlsZVByb3BzLmdldChcInBpY3R1cmVcIil9XG4gICAgICAgICAgICAgICR7dXNlclByb2ZpbGVQcm9wcy5nZXQoXCJkYXRlT2ZCaXJ0aFwiKX1cbiAgICAgICAgICAgICAgJHtwcm9wc31cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgXCJ1c2VySW5mb1wiLFxuICAgICAgICAgIGdyYXBoRW5kcG9pbnQuY2xpZW50TmFtZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcihpc05vbk51bGxhYmxlKSlcbiAgICApO1xuICB9XG59XG4iXX0=