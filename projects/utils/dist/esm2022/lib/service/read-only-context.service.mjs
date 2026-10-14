import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export class TaReadOnlyContextService {
    constructor() {
        this._readonly$ = new BehaviorSubject(false);
        this.isReadOnly$ = this._readonly$.asObservable();
    }
    setReadonly(value) {
        this._readonly$.next(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaReadOnlyContextService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaReadOnlyContextService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaReadOnlyContextService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
/** @deprecated utiliser TaReadOnlyContextService */
export { TaReadOnlyContextService as ReadOnlyContextService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1vbmx5LWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZS9yZWFkLW9ubHktY29udGV4dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdkMsTUFBTSxPQUFPLHdCQUF3QjtJQURyQztRQUVtQixlQUFVLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDekQsZ0JBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBS3ZEO0lBSEMsV0FBVyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzsrR0FOVSx3QkFBd0I7bUhBQXhCLHdCQUF3QixjQURYLE1BQU07OzRGQUNuQix3QkFBd0I7a0JBRHBDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztBQVVsQyxvREFBb0Q7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixJQUFJLHNCQUFzQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUYVJlYWRPbmx5Q29udGV4dFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZWFkb25seSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcmVhZG9ubHkgaXNSZWFkT25seSQgPSB0aGlzLl9yZWFkb25seSQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgc2V0UmVhZG9ubHkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZWFkb25seSQubmV4dCh2YWx1ZSk7XG4gIH1cbn1cblxuLyoqIEBkZXByZWNhdGVkIHV0aWxpc2VyIFRhUmVhZE9ubHlDb250ZXh0U2VydmljZSAqL1xuZXhwb3J0IHsgVGFSZWFkT25seUNvbnRleHRTZXJ2aWNlIGFzIFJlYWRPbmx5Q29udGV4dFNlcnZpY2UgfTtcbiJdfQ==