import { Injectable } from '@angular/core';
import { TaGridData } from '../models/grid-data';
import * as i0 from "@angular/core";
export class TaGridInstanceService {
    constructor() {
        this.grids = {};
    }
    create(key) {
        if (!this.has(key)) {
            this.grids[key] = new TaGridData(key);
        }
    }
    get(key, create = false) {
        if (!this.has(key) && create) {
            this.create(key);
        }
        return this.grids[key];
    }
    has(key) {
        return !!this.grids[key];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridInstanceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridInstanceService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridInstanceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1pbnN0YW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL3NlcnZpY2VzL2dyaWQtaW5zdGFuY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFLakQsTUFBTSxPQUFPLHFCQUFxQjtJQUdoQztRQUZnQixVQUFLLEdBQXlDLEVBQUUsQ0FBQztJQUVsRCxDQUFDO0lBRVQsTUFBTSxDQUFDLEdBQVc7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBRU0sR0FBRyxDQUFVLEdBQVcsRUFBRSxTQUFrQixLQUFLO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQWtCLENBQUM7SUFDMUMsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzsrR0FwQlUscUJBQXFCO21IQUFyQixxQkFBcUIsY0FGcEIsTUFBTTs7NEZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFHcmlkRGF0YSB9IGZyb20gJy4uL21vZGVscy9ncmlkLWRhdGEnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFHcmlkSW5zdGFuY2VTZXJ2aWNlIHtcbiAgcHVibGljIHJlYWRvbmx5IGdyaWRzOiB7IFtpbmRleDogc3RyaW5nXTogVGFHcmlkRGF0YTxhbnk+IH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGNyZWF0ZShrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5ncmlkc1trZXldID0gbmV3IFRhR3JpZERhdGE8YW55PihrZXkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQ8VCA9IGFueT4oa2V5OiBzdHJpbmcsIGNyZWF0ZTogYm9vbGVhbiA9IGZhbHNlKTogVGFHcmlkRGF0YTxUPiB7XG4gICAgaWYgKCF0aGlzLmhhcyhrZXkpICYmIGNyZWF0ZSkge1xuICAgICAgdGhpcy5jcmVhdGUoa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ3JpZHNba2V5XSBhcyBUYUdyaWREYXRhPFQ+O1xuICB9XG5cbiAgcHVibGljIGhhcyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiAhIXRoaXMuZ3JpZHNba2V5XTtcbiAgfVxufVxuIl19