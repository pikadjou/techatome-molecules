import { HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { filter, map } from "rxjs";
import { isNonNullable } from "@ta/utils";
import { TaBaseService } from "../server/baseService";
import { STRAPI_SERVER_CONFIG } from "./config";
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
                clientName: "strapi",
                endpoint: this._strapiConfig.url,
                headers: headers,
            },
        });
    }
    fetchQuery$(payload, node) {
        return this._graphService.fetchQuery(payload, node, "strapi").pipe(filter(isNonNullable), map((data) => data));
    }
    fetchQueryList$(payload, node) {
        return this._graphService.fetchQuery(payload, node, "strapi").pipe(filter(isNonNullable), map((data) => data));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiService, deps: [{ token: STRAPI_SERVER_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [STRAPI_SERVER_CONFIG]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3N0cmFwaS9zdHJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUcxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFpQixvQkFBb0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFLL0QsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTtJQUNoRCxZQUN3QyxhQUE0QjtRQUVsRSxLQUFLLEVBQUUsQ0FBQztRQUY4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUlsRSxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixhQUFhLEVBQUUsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtTQUNwRCxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQ25CLGFBQWEsRUFBRTtnQkFDYixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRztnQkFDaEMsT0FBTyxFQUFFLE9BQU87YUFDakI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sV0FBVyxDQUFJLE9BQTBCLEVBQUUsSUFBWTtRQUM1RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFJLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNuRSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ3BCLENBQUM7SUFDSixDQUFDO0lBRU0sZUFBZSxDQUFJLE9BQTBCLEVBQUUsSUFBWTtRQUNoRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFNLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNyRSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ3BCLENBQUM7SUFDSixDQUFDOytHQS9CVSxlQUFlLGtCQUVoQixvQkFBb0I7bUhBRm5CLGVBQWUsY0FGZCxNQUFNOzs0RkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBR0ksTUFBTTsyQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBHcmFwaFF1ZXJ5UGF5bG9hZCB9IGZyb20gXCIuLi9ncmFwaHFsL21vZGVscy9ncmFwaFBheWxvYWRcIjtcbmltcG9ydCB7IFRhQmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmVyL2Jhc2VTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJU3RyYXBpQ29uZmlnLCBTVFJBUElfU0VSVkVSX0NPTkZJRyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYVN0cmFwaVNlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChTVFJBUElfU0VSVkVSX0NPTkZJRykgcHJpdmF0ZSBfc3RyYXBpQ29uZmlnOiBJU3RyYXBpQ29uZmlnXG4gICkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLl9zdHJhcGlDb25maWcudG9rZW59YCxcbiAgICB9KTtcblxuICAgIHN1cGVyLnJlZ2lzdGVyUm91dGVzKHtcbiAgICAgIGdyYXBoRW5kcG9pbnQ6IHtcbiAgICAgICAgY2xpZW50TmFtZTogXCJzdHJhcGlcIixcbiAgICAgICAgZW5kcG9pbnQ6IHRoaXMuX3N0cmFwaUNvbmZpZy51cmwsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGZldGNoUXVlcnkkPFQ+KHBheWxvYWQ6IEdyYXBoUXVlcnlQYXlsb2FkLCBub2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhcGhTZXJ2aWNlLmZldGNoUXVlcnk8VD4ocGF5bG9hZCwgbm9kZSwgXCJzdHJhcGlcIikucGlwZShcbiAgICAgIGZpbHRlcihpc05vbk51bGxhYmxlKSxcbiAgICAgIG1hcCgoZGF0YSkgPT4gZGF0YSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGZldGNoUXVlcnlMaXN0JDxUPihwYXlsb2FkOiBHcmFwaFF1ZXJ5UGF5bG9hZCwgbm9kZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYXBoU2VydmljZS5mZXRjaFF1ZXJ5PFRbXT4ocGF5bG9hZCwgbm9kZSwgXCJzdHJhcGlcIikucGlwZShcbiAgICAgIGZpbHRlcihpc05vbk51bGxhYmxlKSxcbiAgICAgIG1hcCgoZGF0YSkgPT4gZGF0YSlcbiAgICApO1xuICB9XG59XG4iXX0=