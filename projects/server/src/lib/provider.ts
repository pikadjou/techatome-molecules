import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider, importProvidersFrom } from '@angular/core';

import { ApolloModule } from 'apollo-angular';

import { GRAPHQL_SERVER_CONFIG, IGraphConfig } from './services/graphql/models/graphConfig';
import { TenantInterceptor } from './services/server/tenantInterceptor';
import { IStrapiConfig, STRAPI_SERVER_CONFIG } from './services/strapi/config';

export const provideServer = (data: { graphQlConfig: IGraphConfig }): Provider => [
  importProvidersFrom(ApolloModule),
  {
    provide: GRAPHQL_SERVER_CONFIG,
    useValue: data.graphQlConfig,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TenantInterceptor,
    multi: true,
  },
];

export const provideStrapi = (data: { strapiConfig: IStrapiConfig }): Provider => [
  importProvidersFrom(ApolloModule),
  {
    provide: STRAPI_SERVER_CONFIG,
    useValue: data.strapiConfig,
  },
];
