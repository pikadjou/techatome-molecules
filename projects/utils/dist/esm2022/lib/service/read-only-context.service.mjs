import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ReadOnlyContextService {
    constructor() {
        this._readonly$ = new BehaviorSubject(false);
        this.isReadOnly$ = this._readonly$.asObservable();
    }
    setReadonly(value) {
        this._readonly$.next(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ReadOnlyContextService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ReadOnlyContextService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ReadOnlyContextService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1vbmx5LWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZS9yZWFkLW9ubHktY29udGV4dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdkMsTUFBTSxPQUFPLHNCQUFzQjtJQURuQztRQUVtQixlQUFVLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDekQsZ0JBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBS3ZEO0lBSEMsV0FBVyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzsrR0FOVSxzQkFBc0I7bUhBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWFkT25seUNvbnRleHRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVhZG9ubHkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHJlYWRvbmx5IGlzUmVhZE9ubHkkID0gdGhpcy5fcmVhZG9ubHkkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHNldFJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVhZG9ubHkkLm5leHQodmFsdWUpO1xuICB9XG59XG4iXX0=