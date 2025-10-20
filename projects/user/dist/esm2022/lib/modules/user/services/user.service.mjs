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
              ${userProfileProps.get('dateOfBirth')}
              ${props}
            `,
        }), 'userInfo', graphEndpoint.clientName)
            .pipe(filter(isNonNullable)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUserService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUIsT0FBTyxFQUFpQixtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFlLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFckMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFnQiwrQkFBK0IsQ0FBQyxDQUFDO0FBRWxHLE1BQU0sYUFBYSxHQUFrQjtJQUNuQyxVQUFVLEVBQUUsYUFBYTtJQUN6QixRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFLRixNQUFNLE9BQU8sYUFBK0IsU0FBUSxhQUFhO0lBRy9EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFISCxnQkFBVyxHQUFHLElBQUksbUJBQW1CLEVBQUssQ0FBQztRQUloRCxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLGlCQUFpQixDQUFDLFFBQWdCLEVBQUU7UUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FDM0IsSUFBSSxDQUFDLGFBQWE7YUFDZixVQUFVLENBQ1QsUUFBUSxDQUFDO1lBQ1AsS0FBSyxFQUFFO2dCQUNILGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQ2pDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ2hDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQy9CLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0JBQ25DLEtBQUs7YUFDUjtTQUNGLENBQUMsRUFDRixVQUFVLEVBQ1YsYUFBYSxDQUFDLFVBQVUsQ0FDekI7YUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQy9CLENBQUM7SUFDSixDQUFDOytHQTVCVSxhQUFhO21IQUFiLGFBQWEsY0FGWixNQUFNOzs0RkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBHcmFwaEVuZHBvaW50LCBIYW5kbGVTaW1wbGVSZXF1ZXN0IH0gZnJvbSAnQHRhL3NlcnZlcic7XG5pbXBvcnQgeyBUYUJhc2VTZXJ2aWNlIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVXNlclByb2ZpbGUsIHVzZXJQcm9maWxlUHJvcHMgfSBmcm9tICcuL2R0by91c2VyLXByb2ZpbGUnO1xuaW1wb3J0IHsgdXNlckluZm8gfSBmcm9tICcuL3F1ZXJpZXMnO1xuXG5leHBvcnQgY29uc3QgVEFfVVNFUl9TRVJWSUNFID0gbmV3IEluamVjdGlvblRva2VuPFRhVXNlclNlcnZpY2U+KCdUYVVzZXJTZXJ2aWNlX2luamVjdGlvbi10b2tlbicpO1xuXG5jb25zdCBncmFwaEVuZHBvaW50OiBHcmFwaEVuZHBvaW50ID0ge1xuICBjbGllbnROYW1lOiAndXNlclNlcnZpY2UnLFxuICBlbmRwb2ludDogJycsXG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFVc2VyU2VydmljZTxUID0gVXNlclByb2ZpbGU+IGV4dGVuZHMgVGFCYXNlU2VydmljZSB7XG4gIHB1YmxpYyB1c2VyUHJvZmlsZSA9IG5ldyBIYW5kbGVTaW1wbGVSZXF1ZXN0PFQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBzdXBlci5yZWdpc3RlclJvdXRlcyh7IGdyYXBoRW5kcG9pbnQ6IGdyYXBoRW5kcG9pbnQgfSk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hVc2VyUHJvZmlsZSQocHJvcHM6IHN0cmluZyA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclByb2ZpbGUuZmV0Y2goXG4gICAgICB0aGlzLl9ncmFwaFNlcnZpY2VcbiAgICAgICAgLmZldGNoUXVlcnk8VD4oXG4gICAgICAgICAgdXNlckluZm8oe1xuICAgICAgICAgICAgcHJvcHM6IGBcbiAgICAgICAgICAgICAgJHt1c2VyUHJvZmlsZVByb3BzLmdldCgnaWQnKX1cbiAgICAgICAgICAgICAgJHt1c2VyUHJvZmlsZVByb3BzLmdldCgnZmlyc3RuYW1lJyl9XG4gICAgICAgICAgICAgICR7dXNlclByb2ZpbGVQcm9wcy5nZXQoJ2xhc3RuYW1lJyl9XG4gICAgICAgICAgICAgICR7dXNlclByb2ZpbGVQcm9wcy5nZXQoJ2VtYWlsJyl9XG4gICAgICAgICAgICAgICR7dXNlclByb2ZpbGVQcm9wcy5nZXQoJ3BpY3R1cmUnKX1cbiAgICAgICAgICAgICAgJHt1c2VyUHJvZmlsZVByb3BzLmdldCgnZGF0ZU9mQmlydGgnKX1cbiAgICAgICAgICAgICAgJHtwcm9wc31cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgJ3VzZXJJbmZvJyxcbiAgICAgICAgICBncmFwaEVuZHBvaW50LmNsaWVudE5hbWVcbiAgICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIoaXNOb25OdWxsYWJsZSkpXG4gICAgKTtcbiAgfVxufVxuIl19