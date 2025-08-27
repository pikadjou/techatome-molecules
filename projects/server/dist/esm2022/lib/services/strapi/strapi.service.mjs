import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { isNonNullable } from '@ta/utils';
import { filter, map } from 'rxjs';
import { CamBaseService } from '../server/baseService';
import { STRAPI_SERVER_CONFIG } from './config';
import * as i0 from "@angular/core";
export class CamStrapiService extends CamBaseService {
    constructor(_strapiConfig) {
        super();
        this._strapiConfig = _strapiConfig;
        const headers = new HttpHeaders({
            authorization: `Bearer ${this._strapiConfig.config.token}`,
        });
        super.registerRoutes({
            graphEndpoint: {
                clientName: 'strapi',
                endpoint: this._strapiConfig.config.url,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3N0cmFwaS9zdHJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUduQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFpQixvQkFBb0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFtQi9ELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjO0lBQ2xELFlBQWtELGFBQTRCO1FBQzVFLEtBQUssRUFBRSxDQUFDO1FBRHdDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRzVFLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGFBQWEsRUFBRSxVQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtTQUMzRCxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQ25CLGFBQWEsRUFBRTtnQkFDYixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUc7Z0JBQ3ZDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFdBQVcsQ0FBSSxPQUEwQixFQUFFLElBQVk7UUFDNUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBeUIsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3hGLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDbEMsQ0FBQztJQUNKLENBQUM7SUFFTSxlQUFlLENBQUksT0FBMEIsRUFBRSxJQUFZO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQTZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM1RixNQUFNLENBQUMsYUFBYSxDQUFDLEVBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQ3BELENBQUM7SUFDSixDQUFDOytHQTdCVSxnQkFBZ0Isa0JBQ1Asb0JBQW9CO21IQUQ3QixnQkFBZ0IsY0FGZixNQUFNOzs0RkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFFYyxNQUFNOzJCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR3JhcGhRdWVyeVBheWxvYWQgfSBmcm9tICcuLi9ncmFwaHFsL21vZGVscy9ncmFwaFBheWxvYWQnO1xuaW1wb3J0IHsgQ2FtQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2ZXIvYmFzZVNlcnZpY2UnO1xuaW1wb3J0IHsgSVN0cmFwaUNvbmZpZywgU1RSQVBJX1NFUlZFUl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhcGhTdHJhcGlSZXNwb25zZTxUPiB7XG4gIGRhdGE6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGF0dHJpYnV0ZXM6IFQ7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhcGhTdHJhcGlMaXN0UmVzcG9uc2U8VD4ge1xuICBkYXRhOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBhdHRyaWJ1dGVzOiBUO1xuICB9W107XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1TdHJhcGlTZXJ2aWNlIGV4dGVuZHMgQ2FtQmFzZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNUUkFQSV9TRVJWRVJfQ09ORklHKSBwcml2YXRlIF9zdHJhcGlDb25maWc6IElTdHJhcGlDb25maWcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5fc3RyYXBpQ29uZmlnLmNvbmZpZy50b2tlbn1gLFxuICAgIH0pO1xuXG4gICAgc3VwZXIucmVnaXN0ZXJSb3V0ZXMoe1xuICAgICAgZ3JhcGhFbmRwb2ludDoge1xuICAgICAgICBjbGllbnROYW1lOiAnc3RyYXBpJyxcbiAgICAgICAgZW5kcG9pbnQ6IHRoaXMuX3N0cmFwaUNvbmZpZy5jb25maWcudXJsLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFF1ZXJ5JDxUPihwYXlsb2FkOiBHcmFwaFF1ZXJ5UGF5bG9hZCwgbm9kZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYXBoU2VydmljZS5mZXRjaFF1ZXJ5PEdyYXBoU3RyYXBpUmVzcG9uc2U8VD4+KHBheWxvYWQsIG5vZGUsICdzdHJhcGknKS5waXBlKFxuICAgICAgZmlsdGVyKGlzTm9uTnVsbGFibGUpLFxuICAgICAgbWFwKGRhdGEgPT4gZGF0YS5kYXRhLmF0dHJpYnV0ZXMpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFF1ZXJ5TGlzdCQ8VD4ocGF5bG9hZDogR3JhcGhRdWVyeVBheWxvYWQsIG5vZGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9ncmFwaFNlcnZpY2UuZmV0Y2hRdWVyeTxHcmFwaFN0cmFwaUxpc3RSZXNwb25zZTxUPj4ocGF5bG9hZCwgbm9kZSwgJ3N0cmFwaScpLnBpcGUoXG4gICAgICBmaWx0ZXIoaXNOb25OdWxsYWJsZSksXG4gICAgICBtYXAoZGF0YSA9PiBkYXRhLmRhdGEubWFwKGRhdGEgPT4gZGF0YS5hdHRyaWJ1dGVzKSlcbiAgICApO1xuICB9XG59XG4iXX0=