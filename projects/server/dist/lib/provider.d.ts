import { Provider } from "@angular/core";
import { IGraphConfig } from "./services/graphql/models/graphConfig";
import { IRestConfig } from "./services/server/api/server.service";
import { IStrapiConfig } from "./services/strapi/config";
export declare const provideServer: (data: {
    graphQlConfig?: IGraphConfig;
    restConfig?: IRestConfig;
}) => Provider;
export declare const provideStrapi: (data: {
    strapiConfig: IStrapiConfig;
}) => Provider;
