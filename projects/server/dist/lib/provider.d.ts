import { Provider } from '@angular/core';
import { IGraphConfig } from './services/graphql/models/graphConfig';
export declare const provideServer: (data: {
    graphQlConfig: IGraphConfig;
}) => Provider;
