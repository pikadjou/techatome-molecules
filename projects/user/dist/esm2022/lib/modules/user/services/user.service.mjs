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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUserService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUIsT0FBTyxFQUFpQixtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFlLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFckMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFnQiwrQkFBK0IsQ0FBQyxDQUFDO0FBRWxHLE1BQU0sYUFBYSxHQUFrQjtJQUNuQyxVQUFVLEVBQUUsYUFBYTtJQUN6QixRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFLRixNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7SUFHOUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUhILGdCQUFXLEdBQUcsSUFBSSxtQkFBbUIsRUFBZSxDQUFDO1FBSTFELEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0saUJBQWlCLENBQUMsUUFBZ0IsRUFBRTtRQUN6QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUMzQixJQUFJLENBQUMsYUFBYTthQUNmLFVBQVUsQ0FDVCxRQUFRLENBQUM7WUFDUCxLQUFLLEVBQUU7Z0JBQ0gsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDMUIsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDakMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDaEMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFDN0IsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDL0IsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztnQkFDbkMsS0FBSzthQUNSO1NBQ0YsQ0FBQyxFQUNGLFVBQVUsRUFDVixhQUFhLENBQUMsVUFBVSxDQUN6QjthQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FDL0IsQ0FBQztJQUNKLENBQUM7K0dBNUJVLGFBQWE7bUhBQWIsYUFBYSxjQUZaLE1BQU07OzRGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdyYXBoRW5kcG9pbnQsIEhhbmRsZVNpbXBsZVJlcXVlc3QgfSBmcm9tICdAdGEvc2VydmVyJztcbmltcG9ydCB7IFRhQmFzZVNlcnZpY2UgfSBmcm9tICdAdGEvc2VydmVyJztcbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSwgdXNlclByb2ZpbGVQcm9wcyB9IGZyb20gJy4vZHRvL3VzZXItcHJvZmlsZSc7XG5pbXBvcnQgeyB1c2VySW5mbyB9IGZyb20gJy4vcXVlcmllcyc7XG5cbmV4cG9ydCBjb25zdCBUQV9VU0VSX1NFUlZJQ0UgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGFVc2VyU2VydmljZT4oJ1RhVXNlclNlcnZpY2VfaW5qZWN0aW9uLXRva2VuJyk7XG5cbmNvbnN0IGdyYXBoRW5kcG9pbnQ6IEdyYXBoRW5kcG9pbnQgPSB7XG4gIGNsaWVudE5hbWU6ICd1c2VyU2VydmljZScsXG4gIGVuZHBvaW50OiAnJyxcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYVVzZXJTZXJ2aWNlIGV4dGVuZHMgVGFCYXNlU2VydmljZSB7XG4gIHB1YmxpYyB1c2VyUHJvZmlsZSA9IG5ldyBIYW5kbGVTaW1wbGVSZXF1ZXN0PFVzZXJQcm9maWxlPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgc3VwZXIucmVnaXN0ZXJSb3V0ZXMoeyBncmFwaEVuZHBvaW50OiBncmFwaEVuZHBvaW50IH0pO1xuICB9XG5cbiAgcHVibGljIGZldGNoVXNlclByb2ZpbGUkKHByb3BzOiBzdHJpbmcgPSAnJykge1xuICAgIHJldHVybiB0aGlzLnVzZXJQcm9maWxlLmZldGNoKFxuICAgICAgdGhpcy5fZ3JhcGhTZXJ2aWNlXG4gICAgICAgIC5mZXRjaFF1ZXJ5PFVzZXJQcm9maWxlPihcbiAgICAgICAgICB1c2VySW5mbyh7XG4gICAgICAgICAgICBwcm9wczogYFxuICAgICAgICAgICAgICAke3VzZXJQcm9maWxlUHJvcHMuZ2V0KCdpZCcpfVxuICAgICAgICAgICAgICAke3VzZXJQcm9maWxlUHJvcHMuZ2V0KCdmaXJzdG5hbWUnKX1cbiAgICAgICAgICAgICAgJHt1c2VyUHJvZmlsZVByb3BzLmdldCgnbGFzdG5hbWUnKX1cbiAgICAgICAgICAgICAgJHt1c2VyUHJvZmlsZVByb3BzLmdldCgnZW1haWwnKX1cbiAgICAgICAgICAgICAgJHt1c2VyUHJvZmlsZVByb3BzLmdldCgncGljdHVyZScpfVxuICAgICAgICAgICAgICAke3VzZXJQcm9maWxlUHJvcHMuZ2V0KCdkYXRlT2ZCaXJ0aCcpfVxuICAgICAgICAgICAgICAke3Byb3BzfVxuICAgICAgICAgICAgYCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAndXNlckluZm8nLFxuICAgICAgICAgIGdyYXBoRW5kcG9pbnQuY2xpZW50TmFtZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcihpc05vbk51bGxhYmxlKSlcbiAgICApO1xuICB9XG59XG4iXX0=