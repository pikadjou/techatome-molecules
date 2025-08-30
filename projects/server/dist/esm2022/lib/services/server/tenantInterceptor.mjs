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
        if (this.tenantConfig?.tenantId && this.graphQlConfig?.url && req.url.startsWith(this.graphQlConfig?.url)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50SW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3NlcnZlci90ZW5hbnRJbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFnQixNQUFNLCtCQUErQixDQUFDO0FBRXBGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUMsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUNtRCxZQUEwQixFQUduRSxhQUEyQjtRQUhjLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBR25FLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ2xDLENBQUM7SUFFSixTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNoRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMxRyxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVFLENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7K0dBakJVLGlCQUFpQixrQkFFTixtQkFBbUIsNkJBRS9CLHFCQUFxQjttSEFKcEIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkFHTixRQUFROzswQkFBSSxNQUFNOzJCQUFDLG1CQUFtQjs7MEJBQ3RDLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBHUkFQSFFMX1NFUlZFUl9DT05GSUcsIElHcmFwaENvbmZpZyB9IGZyb20gJy4uL2dyYXBocWwvbW9kZWxzL2dyYXBoQ29uZmlnJztcbmltcG9ydCB7IFRlbmFudENvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFRFTkFOVF9DT05GSUdfVE9LRU4gfSBmcm9tICcuL3Rva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlbmFudEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChURU5BTlRfQ09ORklHX1RPS0VOKSBwcml2YXRlIHRlbmFudENvbmZpZzogVGVuYW50Q29uZmlnLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChHUkFQSFFMX1NFUlZFUl9DT05GSUcpXG4gICAgcHJpdmF0ZSBncmFwaFFsQ29uZmlnOiBJR3JhcGhDb25maWdcbiAgKSB7fVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmICh0aGlzLnRlbmFudENvbmZpZz8udGVuYW50SWQgJiYgdGhpcy5ncmFwaFFsQ29uZmlnPy51cmwgJiYgcmVxLnVybC5zdGFydHNXaXRoKHRoaXMuZ3JhcGhRbENvbmZpZz8udXJsKSkge1xuICAgICAgY29uc3QgdGVuYW50UmVxdWVzdCA9IHJlcS5jbG9uZSh7XG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCgnVGVuYW50SWQnLCB0aGlzLnRlbmFudENvbmZpZy50ZW5hbnRJZC50b1N0cmluZygpKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRlbmFudFJlcXVlc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=