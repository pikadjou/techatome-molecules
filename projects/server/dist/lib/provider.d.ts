import { Provider } from "@angular/core";
import { IGraphConfig } from "./services/graphql/models/graphConfig";
import { IRestConfig } from "./services/server/api/server.service";
import { NotificationHandler } from "./services/server/token";
import { IStrapiConfig } from "./services/strapi/config";
export declare const provideServer: (data: {
    graphQlConfig?: IGraphConfig;
    restConfig?: IRestConfig;
    notificationHandler?: NotificationHandler;
}) => Provider;
export declare const provideStrapi: (data: {
    strapiConfig: IStrapiConfig;
}) => Provider;
