import { Provider } from '@angular/core';
import { IGraphConfig } from './services/graphql/models/graphConfig';
import { IStrapiConfig } from './services/strapi/config';
export declare const provideServer: (data: {
    graphQlConfig: IGraphConfig;
}) => Provider;
export declare const provideStrapi: (data: {
    strapiConfig: IStrapiConfig;
}) => Provider;
