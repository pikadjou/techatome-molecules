export const STRAPI_SERVER_CONFIG = 'config_strapi_server';

export interface IStrapiConfig {
  config: {
    url: string;
    token: string;
  };
}
