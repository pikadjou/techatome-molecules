import { Injectable, LOCALE_ID, inject } from '@angular/core';
import { map } from 'rxjs';
import { HandleComplexRequest, TaBaseStrapiService } from '@ta/server';
import { GET_CMS_CONTENT } from './strapiQueries';
import * as i0 from "@angular/core";
export class TaCmsService extends TaBaseStrapiService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaCmsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaCmsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaCmsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvc3RyYXBpL3NlcnZpY2VzL2Ntcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUd2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBS2xELE1BQU0sT0FBTyxZQUFhLFNBQVEsbUJBQW1CO0lBSW5EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFKRCxVQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsSUFBSSxvQkFBb0IsRUFBTyxDQUFDO0lBSXZELENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsUUFBZ0I7UUFDckQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FDM0IsSUFBSSxFQUNKLElBQUksQ0FBQyxjQUFjO2FBQ2hCLGVBQWUsQ0FBTSxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsVUFBVSxDQUFDO2FBQzdFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDO0lBQ0osQ0FBQzsrR0FmVSxZQUFZO21IQUFaLFlBQVksY0FGWCxNQUFNOzs0RkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIExPQ0FMRV9JRCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBIYW5kbGVDb21wbGV4UmVxdWVzdCwgVGFCYXNlU3RyYXBpU2VydmljZSB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBDbXMgfSBmcm9tICcuL2R0by9jbXMnO1xuaW1wb3J0IHsgR0VUX0NNU19DT05URU5UIH0gZnJvbSAnLi9zdHJhcGlRdWVyaWVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhQ21zU2VydmljZSBleHRlbmRzIFRhQmFzZVN0cmFwaVNlcnZpY2Uge1xuICByZWFkb25seSBsb2NhbCA9IGluamVjdChMT0NBTEVfSUQpO1xuICByZWFkb25seSBjbXNDb250ZW50cyA9IG5ldyBIYW5kbGVDb21wbGV4UmVxdWVzdDxDbXM+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaENtc0NvbnRlbnRzJCh0eXBlOiBzdHJpbmcsIHRlbmFudElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jbXNDb250ZW50cy5mZXRjaChcbiAgICAgIHR5cGUsXG4gICAgICB0aGlzLl9zdHJhcGlTZXJ2aWNlXG4gICAgICAgIC5mZXRjaFF1ZXJ5TGlzdCQ8Q21zPihHRVRfQ01TX0NPTlRFTlQodHlwZSwgdGhpcy5sb2NhbCwgdGVuYW50SWQpLCAnY29udGVudHMnKVxuICAgICAgICAucGlwZShtYXAobGlzdCA9PiBsaXN0WzBdKSlcbiAgICApO1xuICB9XG59XG4iXX0=