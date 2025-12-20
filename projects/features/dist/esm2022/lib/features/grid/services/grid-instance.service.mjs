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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1pbnN0YW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL3NlcnZpY2VzL2dyaWQtaW5zdGFuY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFLakQsTUFBTSxPQUFPLHFCQUFxQjtJQUdoQztRQUZnQixVQUFLLEdBQXVDLEVBQUUsQ0FBQztJQUVoRCxDQUFDO0lBRVQsTUFBTSxDQUFDLEdBQVc7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVcsRUFBRSxTQUFrQixLQUFLO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVc7UUFDcEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOytHQXBCVSxxQkFBcUI7bUhBQXJCLHFCQUFxQixjQUZwQixNQUFNOzs0RkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFHcmlkRGF0YSB9IGZyb20gJy4uL21vZGVscy9ncmlkLWRhdGEnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhR3JpZEluc3RhbmNlU2VydmljZTxUPiB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGdyaWRzOiB7IFtpbmRleDogc3RyaW5nXTogVGFHcmlkRGF0YTxUPiB9ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIGNyZWF0ZShrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XHJcbiAgICAgIHRoaXMuZ3JpZHNba2V5XSA9IG5ldyBUYUdyaWREYXRhPFQ+KGtleSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nLCBjcmVhdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKCF0aGlzLmhhcyhrZXkpICYmIGNyZWF0ZSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZShrZXkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZ3JpZHNba2V5XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXMoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhIXRoaXMuZ3JpZHNba2V5XTtcclxuICB9XHJcbn1cclxuIl19