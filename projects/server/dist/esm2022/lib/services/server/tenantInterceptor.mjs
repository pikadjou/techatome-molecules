import { Inject, Injectable, Optional } from '@angular/core';
import { GRAPHQL_SERVER_CONFIG } from '../graphql/models/graphConfig';
import { TENANT_CONFIG_TOKEN } from './token';
import * as i0 from "@angular/core";
export class TenantInterceptor {
    constructor(tenantConfig, graphQlConfig) {
        this.tenantConfig = tenantConfig;
        this.graphQlConfig = graphQlConfig;
    }
    intercept(req, next) {
        if (this.tenantConfig?.tenantId &&
            this.graphQlConfig?.config?.url &&
            req.url.startsWith(this.graphQlConfig?.config?.url)) {
            const tenantRequest = req.clone({
                headers: req.headers.set('TenantId', this.tenantConfig.tenantId.toString()),
            });
            return next.handle(tenantRequest);
        }
        return next.handle(req);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TenantInterceptor, deps: [{ token: TENANT_CONFIG_TOKEN, optional: true }, { token: GRAPHQL_SERVER_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TenantInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TenantInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TENANT_CONFIG_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRAPHQL_SERVER_CONFIG]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50SW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3NlcnZlci90ZW5hbnRJbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFnQixNQUFNLCtCQUErQixDQUFDO0FBRXBGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUMsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUNtRCxZQUEwQixFQUduRSxhQUEyQjtRQUhjLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBR25FLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ2xDLENBQUM7SUFFSixTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNoRCxJQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUTtZQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxHQUFHO1lBQy9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUNuRCxDQUFDO1lBQ0QsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDOUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1RSxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOytHQXJCVSxpQkFBaUIsa0JBRU4sbUJBQW1CLDZCQUUvQixxQkFBcUI7bUhBSnBCLGlCQUFpQjs7NEZBQWpCLGlCQUFpQjtrQkFEN0IsVUFBVTs7MEJBR04sUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxtQkFBbUI7OzBCQUN0QyxRQUFROzswQkFDUixNQUFNOzJCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR1JBUEhRTF9TRVJWRVJfQ09ORklHLCBJR3JhcGhDb25maWcgfSBmcm9tICcuLi9ncmFwaHFsL21vZGVscy9ncmFwaENvbmZpZyc7XG5pbXBvcnQgeyBUZW5hbnRDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBURU5BTlRfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi90b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZW5hbnRJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoVEVOQU5UX0NPTkZJR19UT0tFTikgcHJpdmF0ZSB0ZW5hbnRDb25maWc6IFRlbmFudENvbmZpZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoR1JBUEhRTF9TRVJWRVJfQ09ORklHKVxuICAgIHByaXZhdGUgZ3JhcGhRbENvbmZpZzogSUdyYXBoQ29uZmlnXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRlbmFudENvbmZpZz8udGVuYW50SWQgJiZcbiAgICAgIHRoaXMuZ3JhcGhRbENvbmZpZz8uY29uZmlnPy51cmwgJiZcbiAgICAgIHJlcS51cmwuc3RhcnRzV2l0aCh0aGlzLmdyYXBoUWxDb25maWc/LmNvbmZpZz8udXJsKVxuICAgICkge1xuICAgICAgY29uc3QgdGVuYW50UmVxdWVzdCA9IHJlcS5jbG9uZSh7XG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCgnVGVuYW50SWQnLCB0aGlzLnRlbmFudENvbmZpZy50ZW5hbnRJZC50b1N0cmluZygpKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRlbmFudFJlcXVlc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=