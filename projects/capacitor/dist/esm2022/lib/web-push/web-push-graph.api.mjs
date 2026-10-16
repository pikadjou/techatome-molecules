import { Injectable, inject } from '@angular/core';
import { filter, map } from 'rxjs';
import { TaBaseService } from '@ta/server';
import { isNonNullable } from '@ta/utils';
import { WEB_PUSH_CLIENT_NAME } from './web-push-api';
import { registerPushSubscription, unregisterPushSubscription, webPushPublicKey } from './web-push.queries';
import * as i0 from "@angular/core";
/** Implémentation GraphQL du contrat Web Push (`webPushPublicKey`, `registerPushSubscription`, `unregisterPushSubscription`). */
export class TaWebPushGraphApi extends TaBaseService {
    constructor() {
        super();
        this._clientName = inject(WEB_PUSH_CLIENT_NAME, { optional: true }) ?? 'webPushService';
        super.registerRoutes({ graphEndpoint: { clientName: this._clientName, endpoint: '' } });
    }
    fetchPublicKey$() {
        return this._graphService
            .fetchQueryBuilder(webPushPublicKey(), this._clientName, { fresh: true })
            .pipe(filter(isNonNullable));
    }
    register$(input) {
        return this._graphService
            .mutateBuilder(registerPushSubscription(input), this._clientName)
            .pipe(filter(isNonNullable));
    }
    unregister$(endpoint) {
        return this._graphService
            .mutateBuilder(unregisterPushSubscription(endpoint), this._clientName)
            .pipe(map(result => result === true));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWebPushGraphApi, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWebPushGraphApi, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWebPushGraphApi, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXB1c2gtZ3JhcGguYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi93ZWItcHVzaC93ZWItcHVzaC1ncmFwaC5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFjLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBNkQsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsMEJBQTBCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFNUcsaUlBQWlJO0FBSWpJLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhO0lBR2xEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFITyxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1FBSWxHLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxlQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDdEIsaUJBQWlCLENBQVMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ2hGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQTRCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDdEIsYUFBYSxDQUFzQix3QkFBd0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQWdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDdEIsYUFBYSxDQUFVLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDOUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7K0dBeEJVLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07OzRGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGFCYXNlU2VydmljZSB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgaXNOb25OdWxsYWJsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IElUYVdlYlB1c2hBcGksIFB1c2hTdWJzY3JpcHRpb25EdG8sIFB1c2hTdWJzY3JpcHRpb25JbnB1dCwgV0VCX1BVU0hfQ0xJRU5UX05BTUUgfSBmcm9tICcuL3dlYi1wdXNoLWFwaSc7XG5pbXBvcnQgeyByZWdpc3RlclB1c2hTdWJzY3JpcHRpb24sIHVucmVnaXN0ZXJQdXNoU3Vic2NyaXB0aW9uLCB3ZWJQdXNoUHVibGljS2V5IH0gZnJvbSAnLi93ZWItcHVzaC5xdWVyaWVzJztcblxuLyoqIEltcGzDqW1lbnRhdGlvbiBHcmFwaFFMIGR1IGNvbnRyYXQgV2ViIFB1c2ggKGB3ZWJQdXNoUHVibGljS2V5YCwgYHJlZ2lzdGVyUHVzaFN1YnNjcmlwdGlvbmAsIGB1bnJlZ2lzdGVyUHVzaFN1YnNjcmlwdGlvbmApLiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhV2ViUHVzaEdyYXBoQXBpIGV4dGVuZHMgVGFCYXNlU2VydmljZSBpbXBsZW1lbnRzIElUYVdlYlB1c2hBcGkge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jbGllbnROYW1lID0gaW5qZWN0KFdFQl9QVVNIX0NMSUVOVF9OQU1FLCB7IG9wdGlvbmFsOiB0cnVlIH0pID8/ICd3ZWJQdXNoU2VydmljZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBzdXBlci5yZWdpc3RlclJvdXRlcyh7IGdyYXBoRW5kcG9pbnQ6IHsgY2xpZW50TmFtZTogdGhpcy5fY2xpZW50TmFtZSwgZW5kcG9pbnQ6ICcnIH0gfSk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hQdWJsaWNLZXkkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYXBoU2VydmljZVxuICAgICAgLmZldGNoUXVlcnlCdWlsZGVyPHN0cmluZz4od2ViUHVzaFB1YmxpY0tleSgpLCB0aGlzLl9jbGllbnROYW1lLCB7IGZyZXNoOiB0cnVlIH0pXG4gICAgICAucGlwZShmaWx0ZXIoaXNOb25OdWxsYWJsZSkpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyJChpbnB1dDogUHVzaFN1YnNjcmlwdGlvbklucHV0KTogT2JzZXJ2YWJsZTxQdXNoU3Vic2NyaXB0aW9uRHRvPiB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYXBoU2VydmljZVxuICAgICAgLm11dGF0ZUJ1aWxkZXI8UHVzaFN1YnNjcmlwdGlvbkR0bz4ocmVnaXN0ZXJQdXNoU3Vic2NyaXB0aW9uKGlucHV0KSwgdGhpcy5fY2xpZW50TmFtZSlcbiAgICAgIC5waXBlKGZpbHRlcihpc05vbk51bGxhYmxlKSk7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3RlciQoZW5kcG9pbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9ncmFwaFNlcnZpY2VcbiAgICAgIC5tdXRhdGVCdWlsZGVyPGJvb2xlYW4+KHVucmVnaXN0ZXJQdXNoU3Vic2NyaXB0aW9uKGVuZHBvaW50KSwgdGhpcy5fY2xpZW50TmFtZSlcbiAgICAgIC5waXBlKG1hcChyZXN1bHQgPT4gcmVzdWx0ID09PSB0cnVlKSk7XG4gIH1cbn1cbiJdfQ==