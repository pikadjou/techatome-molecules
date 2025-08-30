import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { isNonNullable } from '@ta/utils';
import { CamBaseService } from '../server/baseService';
import { STRAPI_SERVER_CONFIG } from './config';
import * as i0 from "@angular/core";
export class CamStrapiService extends CamBaseService {
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
        return this._graphService.fetchQuery(payload, node, 'strapi').pipe(filter(isNonNullable), map(data => data.data.attributes));
    }
    fetchQueryList$(payload, node) {
        return this._graphService.fetchQuery(payload, node, 'strapi').pipe(filter(isNonNullable), map(data => data.data.map(data => data.attributes)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiService, deps: [{ token: STRAPI_SERVER_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [STRAPI_SERVER_CONFIG]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3N0cmFwaS9zdHJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUcxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFpQixvQkFBb0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFtQi9ELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjO0lBQ2xELFlBQWtELGFBQTRCO1FBQzVFLEtBQUssRUFBRSxDQUFDO1FBRHdDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRzVFLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGFBQWEsRUFBRSxVQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO1NBQ3BELENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDbkIsYUFBYSxFQUFFO2dCQUNiLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHO2dCQUNoQyxPQUFPLEVBQUUsT0FBTzthQUNqQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxXQUFXLENBQUksT0FBMEIsRUFBRSxJQUFZO1FBQzVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQXlCLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUN4RixNQUFNLENBQUMsYUFBYSxDQUFDLEVBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQ2xDLENBQUM7SUFDSixDQUFDO0lBRU0sZUFBZSxDQUFJLE9BQTBCLEVBQUUsSUFBWTtRQUNoRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUE2QixPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDNUYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQzsrR0E3QlUsZ0JBQWdCLGtCQUNQLG9CQUFvQjttSEFEN0IsZ0JBQWdCLGNBRmYsTUFBTTs7NEZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBRWMsTUFBTTsyQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgR3JhcGhRdWVyeVBheWxvYWQgfSBmcm9tICcuLi9ncmFwaHFsL21vZGVscy9ncmFwaFBheWxvYWQnO1xuaW1wb3J0IHsgQ2FtQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2ZXIvYmFzZVNlcnZpY2UnO1xuaW1wb3J0IHsgSVN0cmFwaUNvbmZpZywgU1RSQVBJX1NFUlZFUl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhcGhTdHJhcGlSZXNwb25zZTxUPiB7XG4gIGRhdGE6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGF0dHJpYnV0ZXM6IFQ7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhcGhTdHJhcGlMaXN0UmVzcG9uc2U8VD4ge1xuICBkYXRhOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBhdHRyaWJ1dGVzOiBUO1xuICB9W107XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1TdHJhcGlTZXJ2aWNlIGV4dGVuZHMgQ2FtQmFzZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNUUkFQSV9TRVJWRVJfQ09ORklHKSBwcml2YXRlIF9zdHJhcGlDb25maWc6IElTdHJhcGlDb25maWcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5fc3RyYXBpQ29uZmlnLnRva2VufWAsXG4gICAgfSk7XG5cbiAgICBzdXBlci5yZWdpc3RlclJvdXRlcyh7XG4gICAgICBncmFwaEVuZHBvaW50OiB7XG4gICAgICAgIGNsaWVudE5hbWU6ICdzdHJhcGknLFxuICAgICAgICBlbmRwb2ludDogdGhpcy5fc3RyYXBpQ29uZmlnLnVybCxcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hRdWVyeSQ8VD4ocGF5bG9hZDogR3JhcGhRdWVyeVBheWxvYWQsIG5vZGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9ncmFwaFNlcnZpY2UuZmV0Y2hRdWVyeTxHcmFwaFN0cmFwaVJlc3BvbnNlPFQ+PihwYXlsb2FkLCBub2RlLCAnc3RyYXBpJykucGlwZShcbiAgICAgIGZpbHRlcihpc05vbk51bGxhYmxlKSxcbiAgICAgIG1hcChkYXRhID0+IGRhdGEuZGF0YS5hdHRyaWJ1dGVzKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hRdWVyeUxpc3QkPFQ+KHBheWxvYWQ6IEdyYXBoUXVlcnlQYXlsb2FkLCBub2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhcGhTZXJ2aWNlLmZldGNoUXVlcnk8R3JhcGhTdHJhcGlMaXN0UmVzcG9uc2U8VD4+KHBheWxvYWQsIG5vZGUsICdzdHJhcGknKS5waXBlKFxuICAgICAgZmlsdGVyKGlzTm9uTnVsbGFibGUpLFxuICAgICAgbWFwKGRhdGEgPT4gZGF0YS5kYXRhLm1hcChkYXRhID0+IGRhdGEuYXR0cmlidXRlcykpXG4gICAgKTtcbiAgfVxufVxuIl19