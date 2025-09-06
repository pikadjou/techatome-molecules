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
        return this._graphService.fetchQuery(payload, node, 'strapi').pipe(filter(isNonNullable), map(data => data.data.attributes));
    }
    fetchQueryList$(payload, node) {
        return this._graphService.fetchQuery(payload, node, 'strapi').pipe(filter(isNonNullable), map(data => data.data.map(data => data.attributes)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3N0cmFwaS9zdHJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUcxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFpQixvQkFBb0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFtQi9ELE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7SUFDaEQsWUFBa0QsYUFBNEI7UUFDNUUsS0FBSyxFQUFFLENBQUM7UUFEd0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFHNUUsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsYUFBYSxFQUFFLFVBQVUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7U0FDcEQsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUNuQixhQUFhLEVBQUU7Z0JBQ2IsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUc7Z0JBQ2hDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFdBQVcsQ0FBSSxPQUEwQixFQUFFLElBQVk7UUFDNUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBeUIsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3hGLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDbEMsQ0FBQztJQUNKLENBQUM7SUFFTSxlQUFlLENBQUksT0FBMEIsRUFBRSxJQUFZO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQTZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM1RixNQUFNLENBQUMsYUFBYSxDQUFDLEVBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQ3BELENBQUM7SUFDSixDQUFDOytHQTdCVSxlQUFlLGtCQUNOLG9CQUFvQjttSEFEN0IsZUFBZSxjQUZkLE1BQU07OzRGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFFYyxNQUFNOzJCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBHcmFwaFF1ZXJ5UGF5bG9hZCB9IGZyb20gJy4uL2dyYXBocWwvbW9kZWxzL2dyYXBoUGF5bG9hZCc7XG5pbXBvcnQgeyBUYUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmVyL2Jhc2VTZXJ2aWNlJztcbmltcG9ydCB7IElTdHJhcGlDb25maWcsIFNUUkFQSV9TRVJWRVJfQ09ORklHIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdyYXBoU3RyYXBpUmVzcG9uc2U8VD4ge1xuICBkYXRhOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBhdHRyaWJ1dGVzOiBUO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYXBoU3RyYXBpTGlzdFJlc3BvbnNlPFQ+IHtcbiAgZGF0YToge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgYXR0cmlidXRlczogVDtcbiAgfVtdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFTdHJhcGlTZXJ2aWNlIGV4dGVuZHMgVGFCYXNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoU1RSQVBJX1NFUlZFUl9DT05GSUcpIHByaXZhdGUgX3N0cmFwaUNvbmZpZzogSVN0cmFwaUNvbmZpZykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLl9zdHJhcGlDb25maWcudG9rZW59YCxcbiAgICB9KTtcblxuICAgIHN1cGVyLnJlZ2lzdGVyUm91dGVzKHtcbiAgICAgIGdyYXBoRW5kcG9pbnQ6IHtcbiAgICAgICAgY2xpZW50TmFtZTogJ3N0cmFwaScsXG4gICAgICAgIGVuZHBvaW50OiB0aGlzLl9zdHJhcGlDb25maWcudXJsLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFF1ZXJ5JDxUPihwYXlsb2FkOiBHcmFwaFF1ZXJ5UGF5bG9hZCwgbm9kZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYXBoU2VydmljZS5mZXRjaFF1ZXJ5PEdyYXBoU3RyYXBpUmVzcG9uc2U8VD4+KHBheWxvYWQsIG5vZGUsICdzdHJhcGknKS5waXBlKFxuICAgICAgZmlsdGVyKGlzTm9uTnVsbGFibGUpLFxuICAgICAgbWFwKGRhdGEgPT4gZGF0YS5kYXRhLmF0dHJpYnV0ZXMpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFF1ZXJ5TGlzdCQ8VD4ocGF5bG9hZDogR3JhcGhRdWVyeVBheWxvYWQsIG5vZGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9ncmFwaFNlcnZpY2UuZmV0Y2hRdWVyeTxHcmFwaFN0cmFwaUxpc3RSZXNwb25zZTxUPj4ocGF5bG9hZCwgbm9kZSwgJ3N0cmFwaScpLnBpcGUoXG4gICAgICBmaWx0ZXIoaXNOb25OdWxsYWJsZSksXG4gICAgICBtYXAoZGF0YSA9PiBkYXRhLmRhdGEubWFwKGRhdGEgPT4gZGF0YS5hdHRyaWJ1dGVzKSlcbiAgICApO1xuICB9XG59XG4iXX0=