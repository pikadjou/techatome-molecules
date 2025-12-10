import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApolloModule } from "apollo-angular";
import { TaGraphService } from "./services/graphql/graph.service";
import { GRAPHQL_SERVER_CONFIG, } from "./services/graphql/models/graphConfig";
import { CacheInterceptor } from "./services/server/cacheInterceptor";
import { TenantInterceptor } from "./services/server/tenantInterceptor";
import * as i0 from "@angular/core";
export { gql as Apollo_gql } from "apollo-angular";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaServerModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ApolloModule } from '@ta/library-name';
 */
export class TaServerModule {
    static forRoot(graphQlConfig) {
        return {
            ngModule: TaServerModule,
            providers: [
                {
                    provide: GRAPHQL_SERVER_CONFIG,
                    useValue: graphQlConfig,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TenantInterceptor,
                    multi: true,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaServerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaServerModule, imports: [CommonModule, HttpClientModule, ApolloModule], exports: [ApolloModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaServerModule, providers: [
            TaGraphService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: CacheInterceptor,
                multi: true,
            },
        ], imports: [CommonModule, HttpClientModule, ApolloModule, ApolloModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaServerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, HttpClientModule, ApolloModule],
                    exports: [ApolloModule],
                    providers: [
                        TaGraphService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: CacheInterceptor,
                            multi: true,
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VydmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQ0wscUJBQXFCLEdBRXRCLE1BQU0sdUNBQXVDLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBRXhFLE9BQU8sRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQ7Ozs7Ozs7Ozs7R0FVRztBQWNILE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQ1osYUFBMkI7UUFFM0IsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOytHQWxCVSxjQUFjO2dIQUFkLGNBQWMsWUFYZixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxhQUM1QyxZQUFZO2dIQVVYLGNBQWMsYUFUZDtZQUNULGNBQWM7WUFDZDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsWUFUUyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUM1QyxZQUFZOzs0RkFVWCxjQUFjO2tCQWIxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO29CQUN2RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRTt3QkFDVCxjQUFjO3dCQUNkOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7NEJBQzFCLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQXBvbGxvTW9kdWxlIH0gZnJvbSBcImFwb2xsby1hbmd1bGFyXCI7XG5cbmltcG9ydCB7IFRhR3JhcGhTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ3JhcGhxbC9ncmFwaC5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBHUkFQSFFMX1NFUlZFUl9DT05GSUcsXG4gIElHcmFwaENvbmZpZyxcbn0gZnJvbSBcIi4vc2VydmljZXMvZ3JhcGhxbC9tb2RlbHMvZ3JhcGhDb25maWdcIjtcbmltcG9ydCB7IENhY2hlSW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXJ2ZXIvY2FjaGVJbnRlcmNlcHRvclwiO1xuaW1wb3J0IHsgVGVuYW50SW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXJ2ZXIvdGVuYW50SW50ZXJjZXB0b3JcIjtcblxuZXhwb3J0IHsgZ3FsIGFzIEFwb2xsb19ncWwgfSBmcm9tIFwiYXBvbGxvLWFuZ3VsYXJcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhU2VydmVyTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBBcG9sbG9Nb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgQXBvbGxvTW9kdWxlXSxcbiAgZXhwb3J0czogW0Fwb2xsb01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIFRhR3JhcGhTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IENhY2hlSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYVNlcnZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIGdyYXBoUWxDb25maWc6IElHcmFwaENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRhU2VydmVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUYVNlcnZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogR1JBUEhRTF9TRVJWRVJfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBncmFwaFFsQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgdXNlQ2xhc3M6IFRlbmFudEludGVyY2VwdG9yLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=