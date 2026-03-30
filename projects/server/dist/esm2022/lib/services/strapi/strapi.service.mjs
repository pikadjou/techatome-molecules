import { HttpHeaders } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { filter, map } from "rxjs";
import { isNonNullable } from "@ta/utils";
import { TaBaseService } from "../server/baseService";
import { STRAPI_SERVER_CONFIG } from "./config";
import * as i0 from "@angular/core";
export class TaStrapiService extends TaBaseService {
    constructor(_strapiConfig) {
        super();
        this._strapiConfig = _strapiConfig;
        if (this._strapiConfig) {
            const headers = new HttpHeaders({
                authorization: `Bearer ${this._strapiConfig.token}`,
            });
            super.registerRoutes({
                graphEndpoint: {
                    clientName: "strapi",
                    endpoint: this._strapiConfig.url,
                    headers: headers,
                },
            });
        }
    }
    fetchQuery$(payload, node) {
        return this._graphService.fetchQuery(payload, node, "strapi").pipe(filter(isNonNullable), map((data) => data));
    }
    fetchQueryList$(payload, node) {
        return this._graphService.fetchQuery(payload, node, "strapi").pipe(filter(isNonNullable), map((data) => data));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiService, deps: [{ token: STRAPI_SERVER_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [STRAPI_SERVER_CONFIG]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3N0cmFwaS9zdHJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRW5DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBaUIsb0JBQW9CLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBSy9ELE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7SUFDaEQsWUFHVSxhQUFtQztRQUUzQyxLQUFLLEVBQUUsQ0FBQztRQUZBLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUkzQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztnQkFDOUIsYUFBYSxFQUFFLFVBQVUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7YUFDcEQsQ0FBQyxDQUFDO1lBRUgsS0FBSyxDQUFDLGNBQWMsQ0FBQztnQkFDbkIsYUFBYSxFQUFFO29CQUNiLFVBQVUsRUFBRSxRQUFRO29CQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHO29CQUNoQyxPQUFPLEVBQUUsT0FBTztpQkFDakI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVNLFdBQVcsQ0FBSSxPQUEwQixFQUFFLElBQVk7UUFDNUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBSSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDbkUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVNLGVBQWUsQ0FBSSxPQUEwQixFQUFFLElBQVk7UUFDaEUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBTSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDckUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNwQixDQUFDO0lBQ0osQ0FBQzsrR0FuQ1UsZUFBZSxrQkFHaEIsb0JBQW9CO21IQUhuQixlQUFlLGNBRmQsTUFBTTs7NEZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUdJLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IEdyYXBoUXVlcnlQYXlsb2FkIH0gZnJvbSBcIi4uL2dyYXBocWwvbW9kZWxzL2dyYXBoUGF5bG9hZFwiO1xuaW1wb3J0IHsgVGFCYXNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2ZXIvYmFzZVNlcnZpY2VcIjtcbmltcG9ydCB7IElTdHJhcGlDb25maWcsIFNUUkFQSV9TRVJWRVJfQ09ORklHIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFRhU3RyYXBpU2VydmljZSBleHRlbmRzIFRhQmFzZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoU1RSQVBJX1NFUlZFUl9DT05GSUcpXG4gICAgcHJpdmF0ZSBfc3RyYXBpQ29uZmlnOiBJU3RyYXBpQ29uZmlnIHwgbnVsbFxuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHRoaXMuX3N0cmFwaUNvbmZpZykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLl9zdHJhcGlDb25maWcudG9rZW59YCxcbiAgICAgIH0pO1xuXG4gICAgICBzdXBlci5yZWdpc3RlclJvdXRlcyh7XG4gICAgICAgIGdyYXBoRW5kcG9pbnQ6IHtcbiAgICAgICAgICBjbGllbnROYW1lOiBcInN0cmFwaVwiLFxuICAgICAgICAgIGVuZHBvaW50OiB0aGlzLl9zdHJhcGlDb25maWcudXJsLFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hRdWVyeSQ8VD4ocGF5bG9hZDogR3JhcGhRdWVyeVBheWxvYWQsIG5vZGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9ncmFwaFNlcnZpY2UuZmV0Y2hRdWVyeTxUPihwYXlsb2FkLCBub2RlLCBcInN0cmFwaVwiKS5waXBlKFxuICAgICAgZmlsdGVyKGlzTm9uTnVsbGFibGUpLFxuICAgICAgbWFwKChkYXRhKSA9PiBkYXRhKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hRdWVyeUxpc3QkPFQ+KHBheWxvYWQ6IEdyYXBoUXVlcnlQYXlsb2FkLCBub2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhcGhTZXJ2aWNlLmZldGNoUXVlcnk8VFtdPihwYXlsb2FkLCBub2RlLCBcInN0cmFwaVwiKS5waXBlKFxuICAgICAgZmlsdGVyKGlzTm9uTnVsbGFibGUpLFxuICAgICAgbWFwKChkYXRhKSA9PiBkYXRhKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==