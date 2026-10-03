import { Injectable } from '@angular/core';
import { HandleComplexRequest } from '@ta/server';
import * as i0 from "@angular/core";
export class TaGridSessionService {
    constructor() {
        this._filterData = new HandleComplexRequest();
    }
    setFilter(key, filter) {
        this._filterData.update(key, filter, false);
    }
    getFilter(key) {
        return this._filterData.get(key);
    }
    clearFilter(key) {
        this._filterData.update(key, []);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSessionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSessionService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSessionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zZXNzaW9uLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL3NlcnZpY2VzL2dyaWQtc2Vzc2lvbi5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFPbEQsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQUlVLGdCQUFXLEdBQUcsSUFBSSxvQkFBb0IsRUFBWSxDQUFDO0tBWTVEO0lBVlEsU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFnQjtRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTSxTQUFTLENBQUMsR0FBVztRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxXQUFXLENBQUMsR0FBVztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQzsrR0FaVSxvQkFBb0I7bUhBQXBCLG9CQUFvQixjQUZuQixNQUFNOzs0RkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIYW5kbGVDb21wbGV4UmVxdWVzdCB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvdHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFHcmlkU2Vzc2lvblNlcnZpY2Uge1xuICBwcml2YXRlIF9maWx0ZXJEYXRhID0gbmV3IEhhbmRsZUNvbXBsZXhSZXF1ZXN0PEZpbHRlcltdPigpO1xuXG4gIHB1YmxpYyBzZXRGaWx0ZXIoa2V5OiBzdHJpbmcsIGZpbHRlcjogRmlsdGVyW10pIHtcbiAgICB0aGlzLl9maWx0ZXJEYXRhLnVwZGF0ZShrZXksIGZpbHRlciwgZmFsc2UpO1xuICB9XG4gIHB1YmxpYyBnZXRGaWx0ZXIoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyRGF0YS5nZXQoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2ZpbHRlckRhdGEudXBkYXRlKGtleSwgW10pO1xuICB9XG59XG4iXX0=