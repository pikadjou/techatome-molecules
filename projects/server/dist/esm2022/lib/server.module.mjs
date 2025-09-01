import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { TaGraphService } from './services/graphql/graph.service';
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
            TaGraphService,
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
                        TaGraphService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: CacheInterceptor,
                            multi: true,
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VydmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQWdCLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBRXhFLE9BQU8sRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQ7Ozs7Ozs7Ozs7R0FVRztBQWNILE1BQU0sT0FBTyxlQUFlO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBMkI7UUFDeEMsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOytHQWhCVSxlQUFlO2dIQUFmLGVBQWUsWUFYaEIsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksYUFDNUMsWUFBWTtnSEFVWCxlQUFlLGFBVGY7WUFDVCxjQUFjO1lBQ2Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGLFlBVFMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFDNUMsWUFBWTs7NEZBVVgsZUFBZTtrQkFiM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQztvQkFDdkQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixTQUFTLEVBQUU7d0JBQ1QsY0FBYzt3QkFDZDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsZ0JBQWdCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwb2xsb01vZHVsZSB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuaW1wb3J0IHsgVGFHcmFwaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dyYXBocWwvZ3JhcGguc2VydmljZSc7XG5pbXBvcnQgeyBHUkFQSFFMX1NFUlZFUl9DT05GSUcsIElHcmFwaENvbmZpZyB9IGZyb20gJy4vc2VydmljZXMvZ3JhcGhxbC9tb2RlbHMvZ3JhcGhDb25maWcnO1xuaW1wb3J0IHsgQ2FjaGVJbnRlcmNlcHRvciB9IGZyb20gJy4vc2VydmljZXMvc2VydmVyL2NhY2hlSW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgVGVuYW50SW50ZXJjZXB0b3IgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZlci90ZW5hbnRJbnRlcmNlcHRvcic7XG5cbmV4cG9ydCB7IGdxbCBhcyBBcG9sbG9fZ3FsIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgQ2FtU2VydmVyTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBBcG9sbG9Nb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgQXBvbGxvTW9kdWxlXSxcbiAgZXhwb3J0czogW0Fwb2xsb01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIFRhR3JhcGhTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IENhY2hlSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1TZXJ2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChncmFwaFFsQ29uZmlnOiBJR3JhcGhDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENhbVNlcnZlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2FtU2VydmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBHUkFQSFFMX1NFUlZFUl9DT05GSUcsXG4gICAgICAgICAgdXNlVmFsdWU6IGdyYXBoUWxDb25maWcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICB1c2VDbGFzczogVGVuYW50SW50ZXJjZXB0b3IsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==