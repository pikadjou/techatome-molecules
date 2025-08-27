export declare const GRAPHQL_SERVER_CONFIG = "config_graphQl_server";
export interface IGraphConfig {
    config: {
        url: string;
        visitor?: string;
        local_urls?: {
            [index: string]: string;
        };
    };
}
