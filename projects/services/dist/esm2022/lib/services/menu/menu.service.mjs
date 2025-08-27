import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
const isMinimizedKey = 'isMinimizedMenu';
export class CamSharedMenuService {
    constructor() {
        this.isMinimized$ = new BehaviorSubject(localStorage.getItem(isMinimizedKey) === '1' ? true : false);
        this.isMinimized$.subscribe((isMinimized) => localStorage.setItem(isMinimizedKey, isMinimized ? '1' : '0'));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamSharedMenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamSharedMenuService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamSharedMenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9tZW51L21lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDLE1BQU0sY0FBYyxHQUFHLGlCQUFpQixDQUFDO0FBSXpDLE1BQU0sT0FBTyxvQkFBb0I7SUFLL0I7UUFKTyxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUN2QyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQzVELENBQUM7UUFHQSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7K0dBVFUsb0JBQW9CO21IQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs7NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IGlzTWluaW1pemVkS2V5ID0gJ2lzTWluaW1pemVkTWVudSc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FtU2hhcmVkTWVudVNlcnZpY2Uge1xuICBwdWJsaWMgaXNNaW5pbWl6ZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpc01pbmltaXplZEtleSkgPT09ICcxJyA/IHRydWUgOiBmYWxzZVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNNaW5pbWl6ZWQkLnN1YnNjcmliZSgoaXNNaW5pbWl6ZWQpID0+XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpc01pbmltaXplZEtleSwgaXNNaW5pbWl6ZWQgPyAnMScgOiAnMCcpXG4gICAgKTtcbiAgfVxufVxuIl19