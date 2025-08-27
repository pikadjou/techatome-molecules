import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { CamGraphService } from './services/graphql/graph.service';
import { GRAPHQL_SERVER_CONFIG } from './services/graphql/models/graphConfig';
import { CacheInterceptor } from './services/server/cacheInterceptor';
import { TenantInterceptor } from './services/server/tenantInterceptor';
import * as i0 from "@angular/core";
export { gql as Apollo_gql } from 'apollo-angular';
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamServerModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ApolloModule } from '@ta/library-name';
 */
export class CamServerModule {
    static forRoot(graphQlConfig) {
        return {
            ngModule: CamServerModule,
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamServerModule, imports: [CommonModule, HttpClientModule, ApolloModule], exports: [ApolloModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerModule, providers: [
            CamGraphService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: CacheInterceptor,
                multi: true,
            },
        ], imports: [CommonModule, HttpClientModule, ApolloModule, ApolloModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, HttpClientModule, ApolloModule],
                    exports: [ApolloModule],
                    providers: [
                        CamGraphService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: CacheInterceptor,
                            multi: true,
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VydmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQWdCLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBRXhFLE9BQU8sRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQ7Ozs7Ozs7Ozs7R0FVRztBQWNILE1BQU0sT0FBTyxlQUFlO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBMkI7UUFDeEMsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOytHQWhCVSxlQUFlO2dIQUFmLGVBQWUsWUFYaEIsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksYUFDNUMsWUFBWTtnSEFVWCxlQUFlLGFBVGY7WUFDVCxlQUFlO1lBQ2Y7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGLFlBVFMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFDNUMsWUFBWTs7NEZBVVgsZUFBZTtrQkFiM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQztvQkFDdkQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixTQUFTLEVBQUU7d0JBQ1QsZUFBZTt3QkFDZjs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsZ0JBQWdCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwb2xsb01vZHVsZSB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuaW1wb3J0IHsgQ2FtR3JhcGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ncmFwaHFsL2dyYXBoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR1JBUEhRTF9TRVJWRVJfQ09ORklHLCBJR3JhcGhDb25maWcgfSBmcm9tICcuL3NlcnZpY2VzL2dyYXBocWwvbW9kZWxzL2dyYXBoQ29uZmlnJztcbmltcG9ydCB7IENhY2hlSW50ZXJjZXB0b3IgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZlci9jYWNoZUludGVyY2VwdG9yJztcbmltcG9ydCB7IFRlbmFudEludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2ZXIvdGVuYW50SW50ZXJjZXB0b3InO1xuXG5leHBvcnQgeyBncWwgYXMgQXBvbGxvX2dxbCB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBDYW1TZXJ2ZXJNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqIFxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBBcG9sbG9Nb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgQXBvbGxvTW9kdWxlXSxcbiAgZXhwb3J0czogW0Fwb2xsb01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIENhbUdyYXBoU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBDYWNoZUludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FtU2VydmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZ3JhcGhRbENvbmZpZzogSUdyYXBoQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYW1TZXJ2ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhbVNlcnZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogR1JBUEhRTF9TRVJWRVJfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBncmFwaFFsQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgdXNlQ2xhc3M6IFRlbmFudEludGVyY2VwdG9yLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=