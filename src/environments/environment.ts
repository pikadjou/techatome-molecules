import { IGraphConfig, IServerConfig, IStrapiConfig } from '@ta/server';

export const environment: {
  GRAPHQL_SERVER_CONFIG: IGraphConfig;
  HTTP_SERVER_CONFIG: IServerConfig;
  STRAPI_CONFIG: IStrapiConfig;
} = {
  HTTP_SERVER_CONFIG: {
    pendindRequestId: 5,
    serverUrl: 'http://localhost:1337',
    apiExt: '',
  },
  GRAPHQL_SERVER_CONFIG: {
    url: 'http://localhost:1337',
  },
  STRAPI_CONFIG: {
    url: 'http://localhost:1337/graphql',
    token:
      '8c98adeeec50364734e5fdde973245cf4d72d20679b9b3b5b8a16648e8826d55dc6736719f3f62ebba8a65ead5d1803e69717f882d05b15a13553d2b68956dfeb1e3f88a0e18f4084912c818ab42f72056087e2be71120d0f85bb58bd46b9921d75defd2db8f975d9a8fc2232343c356f0ff54dd2543b3f183cd3627c3d19415',
  },
};
