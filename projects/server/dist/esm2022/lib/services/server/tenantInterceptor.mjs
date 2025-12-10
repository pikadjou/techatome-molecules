import { Inject, Injectable, Optional } from "@angular/core";
import { GRAPHQL_SERVER_CONFIG, } from "../graphql/models/graphConfig";
import { TENANT_CONFIG_TOKEN } from "./token";
import * as i0 from "@angular/core";
export class TenantInterceptor {
    constructor(tenantConfig, graphQlConfig) {
        this.tenantConfig = tenantConfig;
        this.graphQlConfig = graphQlConfig;
    }
    intercept(req, next) {
        if (this.tenantConfig?.tenantId &&
            this.graphQlConfig?.url &&
            req.url.startsWith(this.graphQlConfig?.url)) {
            const tenantRequest = req.clone({
                headers: req.headers.set("TenantId", this.tenantConfig.tenantId.toString()),
            });
            return next.handle(tenantRequest);
        }
        return next.handle(req);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TenantInterceptor, deps: [{ token: TENANT_CONFIG_TOKEN, optional: true }, { token: GRAPHQL_SERVER_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TenantInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TenantInterceptor, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50SW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3NlcnZlci90ZW5hbnRJbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0QsT0FBTyxFQUNMLHFCQUFxQixHQUV0QixNQUFNLCtCQUErQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUMsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUNtRCxZQUEwQixFQUduRSxhQUEyQjtRQUhjLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBR25FLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ2xDLENBQUM7SUFFSixTQUFTLENBQ1AsR0FBcUIsRUFDckIsSUFBaUI7UUFFakIsSUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVE7WUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHO1lBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLEVBQzNDLENBQUM7WUFDRCxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQ3RCLFVBQVUsRUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FDdEM7YUFDRixDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOytHQTNCVSxpQkFBaUIsa0JBRU4sbUJBQW1CLDZCQUUvQixxQkFBcUI7bUhBSnBCLGlCQUFpQjs7NEZBQWpCLGlCQUFpQjtrQkFEN0IsVUFBVTs7MEJBR04sUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxtQkFBbUI7OzBCQUN0QyxRQUFROzswQkFDUixNQUFNOzJCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQge1xuICBHUkFQSFFMX1NFUlZFUl9DT05GSUcsXG4gIElHcmFwaENvbmZpZyxcbn0gZnJvbSBcIi4uL2dyYXBocWwvbW9kZWxzL2dyYXBoQ29uZmlnXCI7XG5pbXBvcnQgeyBUZW5hbnRDb25maWcgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFRFTkFOVF9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi90b2tlblwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVuYW50SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFRFTkFOVF9DT05GSUdfVE9LRU4pIHByaXZhdGUgdGVuYW50Q29uZmlnOiBUZW5hbnRDb25maWcsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEdSQVBIUUxfU0VSVkVSX0NPTkZJRylcbiAgICBwcml2YXRlIGdyYXBoUWxDb25maWc6IElHcmFwaENvbmZpZ1xuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy50ZW5hbnRDb25maWc/LnRlbmFudElkICYmXG4gICAgICB0aGlzLmdyYXBoUWxDb25maWc/LnVybCAmJlxuICAgICAgcmVxLnVybC5zdGFydHNXaXRoKHRoaXMuZ3JhcGhRbENvbmZpZz8udXJsKVxuICAgICkge1xuICAgICAgY29uc3QgdGVuYW50UmVxdWVzdCA9IHJlcS5jbG9uZSh7XG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldChcbiAgICAgICAgICBcIlRlbmFudElkXCIsXG4gICAgICAgICAgdGhpcy50ZW5hbnRDb25maWcudGVuYW50SWQudG9TdHJpbmcoKVxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGVuYW50UmVxdWVzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiJdfQ==