import { Injectable, LOCALE_ID, inject } from "@angular/core";
import { map } from "rxjs";
import { HandleComplexRequest, TaBaseStrapiService } from "@ta/server";
import { GET_SALE_CONTENT } from "./strapiQueries";
import * as i0 from "@angular/core";
export class TaSaleService extends TaBaseStrapiService {
    constructor() {
        super();
        this.local = inject(LOCALE_ID);
        this.saleContents = new HandleComplexRequest();
    }
    fetchSaleContents$(tenantId) {
        return this.saleContents.fetch(tenantId, this._strapiService
            .fetchQueryList$(GET_SALE_CONTENT(tenantId, this.local), "sales")
            .pipe(map((list) => list[0])));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSaleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSaleService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSaleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3N0cmFwaS9zZXJ2aWNlcy9zYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUtuRCxNQUFNLE9BQU8sYUFBYyxTQUFRLG1CQUFtQjtJQUtwRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBTEQsVUFBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQixpQkFBWSxHQUFHLElBQUksb0JBQW9CLEVBQVEsQ0FBQztJQUl6RCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsUUFBZ0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FDNUIsUUFBUSxFQUNSLElBQUksQ0FBQyxjQUFjO2FBQ2hCLGVBQWUsQ0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQzthQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNoQyxDQUFDO0lBQ0osQ0FBQzsrR0FoQlUsYUFBYTttSEFBYixhQUFhLGNBRlosTUFBTTs7NEZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBMT0NBTEVfSUQsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IEhhbmRsZUNvbXBsZXhSZXF1ZXN0LCBUYUJhc2VTdHJhcGlTZXJ2aWNlIH0gZnJvbSBcIkB0YS9zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgU2FsZSB9IGZyb20gXCIuL2R0by9zYWxlXCI7XG5pbXBvcnQgeyBHRVRfU0FMRV9DT05URU5UIH0gZnJvbSBcIi4vc3RyYXBpUXVlcmllc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYVNhbGVTZXJ2aWNlIGV4dGVuZHMgVGFCYXNlU3RyYXBpU2VydmljZSB7XG4gIHJlYWRvbmx5IGxvY2FsID0gaW5qZWN0KExPQ0FMRV9JRCk7XG5cbiAgcmVhZG9ubHkgc2FsZUNvbnRlbnRzID0gbmV3IEhhbmRsZUNvbXBsZXhSZXF1ZXN0PFNhbGU+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFNhbGVDb250ZW50cyQodGVuYW50SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNhbGVDb250ZW50cy5mZXRjaChcbiAgICAgIHRlbmFudElkLFxuICAgICAgdGhpcy5fc3RyYXBpU2VydmljZVxuICAgICAgICAuZmV0Y2hRdWVyeUxpc3QkPFNhbGU+KEdFVF9TQUxFX0NPTlRFTlQodGVuYW50SWQsIHRoaXMubG9jYWwpLCBcInNhbGVzXCIpXG4gICAgICAgIC5waXBlKG1hcCgobGlzdCkgPT4gbGlzdFswXSkpXG4gICAgKTtcbiAgfVxufVxuIl19