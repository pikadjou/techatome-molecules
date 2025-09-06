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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaServerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaServerModule, imports: [CommonModule, HttpClientModule, ApolloModule], exports: [ApolloModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaServerModule, providers: [
            TaGraphService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: CacheInterceptor,
                multi: true,
            },
        ], imports: [CommonModule, HttpClientModule, ApolloModule, ApolloModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaServerModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VydmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQWdCLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBRXhFLE9BQU8sRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQ7Ozs7Ozs7Ozs7R0FVRztBQWNILE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBMkI7UUFDeEMsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOytHQWhCVSxjQUFjO2dIQUFkLGNBQWMsWUFYZixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxhQUM1QyxZQUFZO2dIQVVYLGNBQWMsYUFUZDtZQUNULGNBQWM7WUFDZDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsWUFUUyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUM1QyxZQUFZOzs0RkFVWCxjQUFjO2tCQWIxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO29CQUN2RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRTt3QkFDVCxjQUFjO3dCQUNkOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7NEJBQzFCLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBvbGxvTW9kdWxlIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBUYUdyYXBoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ3JhcGhxbC9ncmFwaC5zZXJ2aWNlJztcbmltcG9ydCB7IEdSQVBIUUxfU0VSVkVSX0NPTkZJRywgSUdyYXBoQ29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9ncmFwaHFsL21vZGVscy9ncmFwaENvbmZpZyc7XG5pbXBvcnQgeyBDYWNoZUludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2ZXIvY2FjaGVJbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBUZW5hbnRJbnRlcmNlcHRvciB9IGZyb20gJy4vc2VydmljZXMvc2VydmVyL3RlbmFudEludGVyY2VwdG9yJztcblxuZXhwb3J0IHsgZ3FsIGFzIEFwb2xsb19ncWwgfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYVNlcnZlck1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgQXBvbGxvTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEFwb2xsb01vZHVsZV0sXG4gIGV4cG9ydHM6IFtBcG9sbG9Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBUYUdyYXBoU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBDYWNoZUludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFTZXJ2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChncmFwaFFsQ29uZmlnOiBJR3JhcGhDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRhU2VydmVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUYVNlcnZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogR1JBUEhRTF9TRVJWRVJfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBncmFwaFFsQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgdXNlQ2xhc3M6IFRlbmFudEludGVyY2VwdG9yLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=