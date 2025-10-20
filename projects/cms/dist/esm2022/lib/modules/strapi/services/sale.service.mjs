import { Injectable, LOCALE_ID, inject } from '@angular/core';
import { map } from 'rxjs';
import { HandleComplexRequest, TaBaseStrapiService } from '@ta/server';
import { GET_SALE_CONTENT } from './strapiQueries';
import * as i0 from "@angular/core";
export class TaSaleService extends TaBaseStrapiService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSaleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSaleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSaleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3N0cmFwaS9zZXJ2aWNlcy9zYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUtuRCxNQUFNLE9BQU8sYUFBYyxTQUFRLG1CQUFtQjtJQUtwRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBTEQsVUFBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQixpQkFBWSxHQUFHLElBQUksb0JBQW9CLEVBQVEsQ0FBQztJQUl6RCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsUUFBZ0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FDNUIsUUFBUSxFQUNSLElBQUksQ0FBQyxjQUFjO2FBQ2hCLGVBQWUsQ0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQzthQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7K0dBaEJVLGFBQWE7bUhBQWIsYUFBYSxjQUZaLE1BQU07OzRGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTE9DQUxFX0lELCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEhhbmRsZUNvbXBsZXhSZXF1ZXN0LCBUYUJhc2VTdHJhcGlTZXJ2aWNlIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbmltcG9ydCB7IFNhbGUgfSBmcm9tICcuL2R0by9zYWxlJztcbmltcG9ydCB7IEdFVF9TQUxFX0NPTlRFTlQgfSBmcm9tICcuL3N0cmFwaVF1ZXJpZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFTYWxlU2VydmljZSBleHRlbmRzIFRhQmFzZVN0cmFwaVNlcnZpY2Uge1xuICByZWFkb25seSBsb2NhbCA9IGluamVjdChMT0NBTEVfSUQpO1xuXG4gIHJlYWRvbmx5IHNhbGVDb250ZW50cyA9IG5ldyBIYW5kbGVDb21wbGV4UmVxdWVzdDxTYWxlPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hTYWxlQ29udGVudHMkKHRlbmFudElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zYWxlQ29udGVudHMuZmV0Y2goXG4gICAgICB0ZW5hbnRJZCxcbiAgICAgIHRoaXMuX3N0cmFwaVNlcnZpY2VcbiAgICAgICAgLmZldGNoUXVlcnlMaXN0JDxTYWxlPihHRVRfU0FMRV9DT05URU5UKHRlbmFudElkLCB0aGlzLmxvY2FsKSwgJ3NhbGVzJylcbiAgICAgICAgLnBpcGUobWFwKGxpc3QgPT4gbGlzdFswXSkpXG4gICAgKTtcbiAgfVxufVxuIl19