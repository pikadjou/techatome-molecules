import { Injectable, LOCALE_ID, inject } from '@angular/core';
import { CamBaseStrapiService, HandleComplexRequest } from '@ta/server';
import { map } from 'rxjs';
import { GET_SALE_CONTENT } from './strapiQueries';
import * as i0 from "@angular/core";
export class CamSaleService extends CamBaseStrapiService {
    constructor() {
        super();
        this.local = inject(LOCALE_ID);
        this.saleContents = new HandleComplexRequest();
    }
    fetchSaleContents$(tenantId) {
        return this.saleContents.fetch(tenantId, this._strapiService
            .fetchQueryList$(GET_SALE_CONTENT(tenantId, this.local), 'sales')
            .pipe(map(list => list[0])));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamSaleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamSaleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamSaleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3N0cmFwaS9zZXJ2aWNlcy9zYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUtuRCxNQUFNLE9BQU8sY0FBZSxTQUFRLG9CQUFvQjtJQUt0RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBTEQsVUFBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQixpQkFBWSxHQUFHLElBQUksb0JBQW9CLEVBQVEsQ0FBQztJQUl6RCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsUUFBZ0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FDNUIsUUFBUSxFQUNSLElBQUksQ0FBQyxjQUFjO2FBQ2hCLGVBQWUsQ0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQzthQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7K0dBaEJVLGNBQWM7bUhBQWQsY0FBYyxjQUZiLE1BQU07OzRGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTE9DQUxFX0lELCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FtQmFzZVN0cmFwaVNlcnZpY2UsIEhhbmRsZUNvbXBsZXhSZXF1ZXN0IH0gZnJvbSAnQHRhL3NlcnZlcic7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2FsZSB9IGZyb20gJy4vZHRvL3NhbGUnO1xuaW1wb3J0IHsgR0VUX1NBTEVfQ09OVEVOVCB9IGZyb20gJy4vc3RyYXBpUXVlcmllcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1TYWxlU2VydmljZSBleHRlbmRzIENhbUJhc2VTdHJhcGlTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgbG9jYWwgPSBpbmplY3QoTE9DQUxFX0lEKTtcblxuICByZWFkb25seSBzYWxlQ29udGVudHMgPSBuZXcgSGFuZGxlQ29tcGxleFJlcXVlc3Q8U2FsZT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGZldGNoU2FsZUNvbnRlbnRzJCh0ZW5hbnRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FsZUNvbnRlbnRzLmZldGNoKFxuICAgICAgdGVuYW50SWQsXG4gICAgICB0aGlzLl9zdHJhcGlTZXJ2aWNlXG4gICAgICAgIC5mZXRjaFF1ZXJ5TGlzdCQ8U2FsZT4oR0VUX1NBTEVfQ09OVEVOVCh0ZW5hbnRJZCwgdGhpcy5sb2NhbCksICdzYWxlcycpXG4gICAgICAgIC5waXBlKG1hcChsaXN0ID0+IGxpc3RbMF0pKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==