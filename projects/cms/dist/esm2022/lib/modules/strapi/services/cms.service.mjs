import { Injectable, LOCALE_ID, inject } from '@angular/core';
import { CamBaseStrapiService, HandleComplexRequest } from '@ta/server';
import { map } from 'rxjs';
import { GET_CMS_CONTENT } from './strapiQueries';
import * as i0 from "@angular/core";
export class CamCmsService extends CamBaseStrapiService {
    constructor() {
        super();
        this.local = inject(LOCALE_ID);
        this.cmsContents = new HandleComplexRequest();
    }
    fetchCmsContents$(type, tenantId) {
        return this.cmsContents.fetch(type, this._strapiService
            .fetchQueryList$(GET_CMS_CONTENT(type, this.local, tenantId), 'contents')
            .pipe(map(list => list[0])));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCmsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCmsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCmsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvc3RyYXBpL3NlcnZpY2VzL2Ntcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBS2xELE1BQU0sT0FBTyxhQUFjLFNBQVEsb0JBQW9CO0lBSXJEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFKRCxVQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsSUFBSSxvQkFBb0IsRUFBTyxDQUFDO0lBSXZELENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsUUFBZ0I7UUFDckQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FDM0IsSUFBSSxFQUNKLElBQUksQ0FBQyxjQUFjO2FBQ2hCLGVBQWUsQ0FBTSxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsVUFBVSxDQUFDO2FBQzdFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDO0lBQ0osQ0FBQzsrR0FmVSxhQUFhO21IQUFiLGFBQWEsY0FGWixNQUFNOzs0RkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIExPQ0FMRV9JRCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbUJhc2VTdHJhcGlTZXJ2aWNlLCBIYW5kbGVDb21wbGV4UmVxdWVzdCB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENtcyB9IGZyb20gJy4vZHRvL2Ntcyc7XG5pbXBvcnQgeyBHRVRfQ01TX0NPTlRFTlQgfSBmcm9tICcuL3N0cmFwaVF1ZXJpZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FtQ21zU2VydmljZSBleHRlbmRzIENhbUJhc2VTdHJhcGlTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgbG9jYWwgPSBpbmplY3QoTE9DQUxFX0lEKTtcbiAgcmVhZG9ubHkgY21zQ29udGVudHMgPSBuZXcgSGFuZGxlQ29tcGxleFJlcXVlc3Q8Q21zPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hDbXNDb250ZW50cyQodHlwZTogc3RyaW5nLCB0ZW5hbnRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY21zQ29udGVudHMuZmV0Y2goXG4gICAgICB0eXBlLFxuICAgICAgdGhpcy5fc3RyYXBpU2VydmljZVxuICAgICAgICAuZmV0Y2hRdWVyeUxpc3QkPENtcz4oR0VUX0NNU19DT05URU5UKHR5cGUsIHRoaXMubG9jYWwsIHRlbmFudElkKSwgJ2NvbnRlbnRzJylcbiAgICAgICAgLnBpcGUobWFwKGxpc3QgPT4gbGlzdFswXSkpXG4gICAgKTtcbiAgfVxufVxuIl19