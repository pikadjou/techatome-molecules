import { IGraphConfig, IRestConfig, IStrapiConfig } from "@ta/server";

export const environment: {
  GRAPHQL_SERVER_CONFIG: IGraphConfig;
  HTTP_SERVER_CONFIG: IRestConfig;
  STRAPI_CONFIG: IStrapiConfig;
} = {
  HTTP_SERVER_CONFIG: {
    pendindRequestId: 5,
    serverUrl: "http://localhost:1337",
    apiExt: "",
  },
  GRAPHQL_SERVER_CONFIG: {
    config: {
      url: "http://localhost:1337",
    },
  },
  STRAPI_CONFIG: {
    config: {
      url: "http://localhost:1337/graphql",
      token:
        "fb7917f12d9d397e268477664a4b9ef413de8ffe4f5a557cbd74fa7bd4b55740bbe048d6f5c86a6e6407c71fb9710e97cd90a2816ded4308907d0dd2e527054344020dc8101df8cbe404e2c1395c8d61b7e78101d673c17323b852971e21fdc6433e724ad4bd108ee7ade1d0afa44c36650ebd590752e6f4af27d0fb8da08943",
    },
  },
};
