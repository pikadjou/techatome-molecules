import { Injectable } from '@angular/core';
import { Request } from '@ta/server';
import { CamBaseService } from '@ta/server';
import { BehaviorSubject, filter, tap } from 'rxjs';
import * as i0 from "@angular/core";
const apiRoutes = {
    GetUserProfile: {
        type: 'GET',
        url: '{ApiUrl}/UserProfile',
    },
};
export class CamUserService extends CamBaseService {
    constructor() {
        super(apiRoutes);
        this.userProfile$ = new BehaviorSubject(null);
    }
    fetchUserProfile() {
        return this._serverService.request(new Request({ type: 'GetUserProfile', cacheTime: -1 })).pipe(filter(data => !!data), tap(data => {
            this.userProfile$.next(data);
        })
        // GOOGLE TAG MANAGER NOT USED YET
        // tap(data => {
        //   this._gtmService.pushTag({
        //     event: 'userProfile',
        //     userProfile: {
        //       id: data.id,
        //       lastName: data.lastName,
        //       firstName: data.firstName,
        //     },
        //   });
        // })
        );
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFrQixNQUFNLFlBQVksQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSXBELE1BQU0sU0FBUyxHQUFtQjtJQUNoQyxjQUFjLEVBQUU7UUFDZCxJQUFJLEVBQUUsS0FBSztRQUNYLEdBQUcsRUFBRSxzQkFBc0I7S0FDNUI7Q0FDRixDQUFDO0FBS0YsTUFBTSxPQUFPLGNBQWUsU0FBUSxjQUFjO0lBR2hEO1FBQ0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBSFosaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBcUIsSUFBSSxDQUFDLENBQUM7SUFJcEUsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFjLElBQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDO1FBQ0Ysa0NBQWtDO1FBQ2xDLGdCQUFnQjtRQUNoQiwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsaUNBQWlDO1FBQ2pDLG1DQUFtQztRQUNuQyxTQUFTO1FBQ1QsUUFBUTtRQUNSLEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQzsrR0F6QlUsY0FBYzttSEFBZCxjQUFjLGNBRmIsTUFBTTs7NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdAdGEvc2VydmVyJztcbmltcG9ydCB7IENhbUJhc2VTZXJ2aWNlLCBNYXBwaW5nQXBpVHlwZSB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gJy4vZHRvL3VzZXItcHJvZmlsZSc7XG5cbmNvbnN0IGFwaVJvdXRlczogTWFwcGluZ0FwaVR5cGUgPSB7XG4gIEdldFVzZXJQcm9maWxlOiB7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiAne0FwaVVybH0vVXNlclByb2ZpbGUnLFxuICB9LFxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhbVVzZXJTZXJ2aWNlIGV4dGVuZHMgQ2FtQmFzZVNlcnZpY2Uge1xuICBwdWJsaWMgdXNlclByb2ZpbGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyUHJvZmlsZSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGFwaVJvdXRlcyk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hVc2VyUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyU2VydmljZS5yZXF1ZXN0PFVzZXJQcm9maWxlPihuZXcgUmVxdWVzdCh7IHR5cGU6ICdHZXRVc2VyUHJvZmlsZScsIGNhY2hlVGltZTogLTEgfSkpLnBpcGUoXG4gICAgICBmaWx0ZXIoZGF0YSA9PiAhIWRhdGEpLFxuICAgICAgdGFwKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnVzZXJQcm9maWxlJC5uZXh0KGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC8vIEdPT0dMRSBUQUcgTUFOQUdFUiBOT1QgVVNFRCBZRVRcbiAgICAgIC8vIHRhcChkYXRhID0+IHtcbiAgICAgIC8vICAgdGhpcy5fZ3RtU2VydmljZS5wdXNoVGFnKHtcbiAgICAgIC8vICAgICBldmVudDogJ3VzZXJQcm9maWxlJyxcbiAgICAgIC8vICAgICB1c2VyUHJvZmlsZToge1xuICAgICAgLy8gICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAvLyAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcbiAgICAgIC8vICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==