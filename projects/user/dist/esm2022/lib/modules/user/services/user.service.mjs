import { Injectable, InjectionToken } from '@angular/core';
import { filter } from 'rxjs';
import { HandleSimpleRequest } from '@ta/server';
import { TaBaseService } from '@ta/server';
import { isNonNullable } from '@ta/utils';
import { userProfileProps } from './dto/user-profile';
import { userInfo } from './queries';
import * as i0 from "@angular/core";
export const TA_USER_SERVICE = new InjectionToken('TaUserService_injection-token');
const graphEndpoint = {
    clientName: 'userService',
    endpoint: '',
};
export class TaUserService extends TaBaseService {
    constructor() {
        super();
        this.userProfile = new HandleSimpleRequest();
        this.userDetail = new HandleSimpleRequest();
        super.registerRoutes({ graphEndpoint: graphEndpoint });
    }
    fetchUserProfile$(props = '') {
        return this.userProfile.fetch(this._graphService
            .fetchQuery(userInfo({
            props: `
              ${userProfileProps.get('id')}
              ${userProfileProps.get('firstname')}
              ${userProfileProps.get('lastname')}
              ${userProfileProps.get('email')}
              ${userProfileProps.get('picture')}
              ${props}
            `,
        }), 'userInfo', graphEndpoint.clientName)
            .pipe(filter(isNonNullable)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUserService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUIsT0FBTyxFQUFpQixtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFlLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFckMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFnQiwrQkFBK0IsQ0FBQyxDQUFDO0FBRWxHLE1BQU0sYUFBYSxHQUFrQjtJQUNuQyxVQUFVLEVBQUUsYUFBYTtJQUN6QixRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFLRixNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7SUFJOUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUpILGdCQUFXLEdBQUcsSUFBSSxtQkFBbUIsRUFBZSxDQUFDO1FBQ3JELGVBQVUsR0FBRyxJQUFJLG1CQUFtQixFQUFlLENBQUM7UUFJekQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxRQUFnQixFQUFFO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQzNCLElBQUksQ0FBQyxhQUFhO2FBQ2YsVUFBVSxDQUNULFFBQVEsQ0FBQztZQUNQLEtBQUssRUFBRTtnQkFDSCxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUMxQixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2dCQUNqQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUNoQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUM3QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2dCQUMvQixLQUFLO2FBQ1I7U0FDRixDQUFDLEVBQ0YsVUFBVSxFQUNWLGFBQWEsQ0FBQyxVQUFVLENBQ3pCO2FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUMvQixDQUFDO0lBQ0osQ0FBQzsrR0E1QlUsYUFBYTttSEFBYixhQUFhLGNBRlosTUFBTTs7NEZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR3JhcGhFbmRwb2ludCwgSGFuZGxlU2ltcGxlUmVxdWVzdCB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgVGFCYXNlU2VydmljZSB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgaXNOb25OdWxsYWJsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFVzZXJQcm9maWxlLCB1c2VyUHJvZmlsZVByb3BzIH0gZnJvbSAnLi9kdG8vdXNlci1wcm9maWxlJztcbmltcG9ydCB7IHVzZXJJbmZvIH0gZnJvbSAnLi9xdWVyaWVzJztcblxuZXhwb3J0IGNvbnN0IFRBX1VTRVJfU0VSVklDRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUYVVzZXJTZXJ2aWNlPignVGFVc2VyU2VydmljZV9pbmplY3Rpb24tdG9rZW4nKTtcblxuY29uc3QgZ3JhcGhFbmRwb2ludDogR3JhcGhFbmRwb2ludCA9IHtcbiAgY2xpZW50TmFtZTogJ3VzZXJTZXJ2aWNlJyxcbiAgZW5kcG9pbnQ6ICcnLFxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhVXNlclNlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcbiAgcHVibGljIHVzZXJQcm9maWxlID0gbmV3IEhhbmRsZVNpbXBsZVJlcXVlc3Q8VXNlclByb2ZpbGU+KCk7XG4gIHB1YmxpYyB1c2VyRGV0YWlsID0gbmV3IEhhbmRsZVNpbXBsZVJlcXVlc3Q8VXNlclByb2ZpbGU+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBzdXBlci5yZWdpc3RlclJvdXRlcyh7IGdyYXBoRW5kcG9pbnQ6IGdyYXBoRW5kcG9pbnQgfSk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hVc2VyUHJvZmlsZSQocHJvcHM6IHN0cmluZyA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclByb2ZpbGUuZmV0Y2goXG4gICAgICB0aGlzLl9ncmFwaFNlcnZpY2VcbiAgICAgICAgLmZldGNoUXVlcnk8VXNlclByb2ZpbGU+KFxuICAgICAgICAgIHVzZXJJbmZvKHtcbiAgICAgICAgICAgIHByb3BzOiBgXG4gICAgICAgICAgICAgICR7dXNlclByb2ZpbGVQcm9wcy5nZXQoJ2lkJyl9XG4gICAgICAgICAgICAgICR7dXNlclByb2ZpbGVQcm9wcy5nZXQoJ2ZpcnN0bmFtZScpfVxuICAgICAgICAgICAgICAke3VzZXJQcm9maWxlUHJvcHMuZ2V0KCdsYXN0bmFtZScpfVxuICAgICAgICAgICAgICAke3VzZXJQcm9maWxlUHJvcHMuZ2V0KCdlbWFpbCcpfVxuICAgICAgICAgICAgICAke3VzZXJQcm9maWxlUHJvcHMuZ2V0KCdwaWN0dXJlJyl9XG4gICAgICAgICAgICAgICR7cHJvcHN9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgICd1c2VySW5mbycsXG4gICAgICAgICAgZ3JhcGhFbmRwb2ludC5jbGllbnROYW1lXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKGlzTm9uTnVsbGFibGUpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==