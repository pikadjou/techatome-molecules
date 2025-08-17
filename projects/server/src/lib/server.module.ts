import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ApolloModule } from 'apollo-angular';

import { CamGraphService } from './services/graphql/graph.service';
import { GRAPHQL_SERVER_CONFIG, IGraphConfig } from './services/graphql/models/graphConfig';
import { CacheInterceptor } from './services/server/cacheInterceptor';
import { TenantInterceptor } from './services/server/tenantInterceptor';

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
@NgModule({
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
})
export class CamServerModule {
  static forRoot(graphQlConfig: IGraphConfig): ModuleWithProviders<CamServerModule> {
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
}
