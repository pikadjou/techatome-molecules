import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { isNonNullable } from '@ta/utils';
import { TaBaseService } from '../server/baseService';
import { STRAPI_SERVER_CONFIG } from './config';
import * as i0 from "@angular/core";
export class TaStrapiService extends TaBaseService {
    constructor(_strapiConfig) {
        super();
        this._strapiConfig = _strapiConfig;
        const headers = new HttpHeaders({
            authorization: `Bearer ${this._strapiConfig.token}`,
        });
        super.registerRoutes({
            graphEndpoint: {
                clientName: 'strapi',
                endpoint: this._strapiConfig.url,
                headers: headers,
            },
        });
    }
    fetchQuery$(payload, node) {
        return this._graphService.fetchQuery(payload, node, 'strapi').pipe(filter(isNonNullable), map(data => data));
    }
    fetchQueryList$(payload, node) {
        return this._graphService.fetchQuery(payload, node, 'strapi').pipe(filter(isNonNullable), map(data => data));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaStrapiService, deps: [{ token: STRAPI_SERVER_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaStrapiService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaStrapiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [STRAPI_SERVER_CONFIG]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3N0cmFwaS9zdHJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUcxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFpQixvQkFBb0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFLL0QsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTtJQUNoRCxZQUFrRCxhQUE0QjtRQUM1RSxLQUFLLEVBQUUsQ0FBQztRQUR3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUc1RSxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixhQUFhLEVBQUUsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtTQUNwRCxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQ25CLGFBQWEsRUFBRTtnQkFDYixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRztnQkFDaEMsT0FBTyxFQUFFLE9BQU87YUFDakI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sV0FBVyxDQUFJLE9BQTBCLEVBQUUsSUFBWTtRQUM1RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFJLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNuRSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNsQixDQUFDO0lBQ0osQ0FBQztJQUVNLGVBQWUsQ0FBSSxPQUEwQixFQUFFLElBQVk7UUFDaEUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBTSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDckUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEIsQ0FBQztJQUNKLENBQUM7K0dBN0JVLGVBQWUsa0JBQ04sb0JBQW9CO21IQUQ3QixlQUFlLGNBRmQsTUFBTTs7NEZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUVjLE1BQU07MkJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgaXNOb25OdWxsYWJsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IEdyYXBoUXVlcnlQYXlsb2FkIH0gZnJvbSAnLi4vZ3JhcGhxbC9tb2RlbHMvZ3JhcGhQYXlsb2FkJztcbmltcG9ydCB7IFRhQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2ZXIvYmFzZVNlcnZpY2UnO1xuaW1wb3J0IHsgSVN0cmFwaUNvbmZpZywgU1RSQVBJX1NFUlZFUl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYVN0cmFwaVNlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChTVFJBUElfU0VSVkVSX0NPTkZJRykgcHJpdmF0ZSBfc3RyYXBpQ29uZmlnOiBJU3RyYXBpQ29uZmlnKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuX3N0cmFwaUNvbmZpZy50b2tlbn1gLFxuICAgIH0pO1xuXG4gICAgc3VwZXIucmVnaXN0ZXJSb3V0ZXMoe1xuICAgICAgZ3JhcGhFbmRwb2ludDoge1xuICAgICAgICBjbGllbnROYW1lOiAnc3RyYXBpJyxcbiAgICAgICAgZW5kcG9pbnQ6IHRoaXMuX3N0cmFwaUNvbmZpZy51cmwsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGZldGNoUXVlcnkkPFQ+KHBheWxvYWQ6IEdyYXBoUXVlcnlQYXlsb2FkLCBub2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhcGhTZXJ2aWNlLmZldGNoUXVlcnk8VD4ocGF5bG9hZCwgbm9kZSwgJ3N0cmFwaScpLnBpcGUoXG4gICAgICBmaWx0ZXIoaXNOb25OdWxsYWJsZSksXG4gICAgICBtYXAoZGF0YSA9PiBkYXRhKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hRdWVyeUxpc3QkPFQ+KHBheWxvYWQ6IEdyYXBoUXVlcnlQYXlsb2FkLCBub2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhcGhTZXJ2aWNlLmZldGNoUXVlcnk8VFtdPihwYXlsb2FkLCBub2RlLCAnc3RyYXBpJykucGlwZShcbiAgICAgIGZpbHRlcihpc05vbk51bGxhYmxlKSxcbiAgICAgIG1hcChkYXRhID0+IGRhdGEpXG4gICAgKTtcbiAgfVxufVxuIl19