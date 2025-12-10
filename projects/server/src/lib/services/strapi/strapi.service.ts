import { HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { filter, map } from "rxjs";

import { isNonNullable } from "@ta/utils";

import { GraphQueryPayload } from "../graphql/models/graphPayload";
import { TaBaseService } from "../server/baseService";
import { IStrapiConfig, STRAPI_SERVER_CONFIG } from "./config";

@Injectable({
  providedIn: "root",
})
export class TaStrapiService extends TaBaseService {
  constructor(
    @Inject(STRAPI_SERVER_CONFIG) private _strapiConfig: IStrapiConfig
  ) {
    super();

    const headers = new HttpHeaders({
      authorization: `Bearer ${this._strapiConfig.token}`,
    });

    super.registerRoutes({
      graphEndpoint: {
        clientName: "strapi",
        endpoint: this._strapiConfig.url,
        headers: headers,
      },
    });
  }

  public fetchQuery$<T>(payload: GraphQueryPayload, node: string) {
    return this._graphService.fetchQuery<T>(payload, node, "strapi").pipe(
      filter(isNonNullable),
      map((data) => data)
    );
  }

  public fetchQueryList$<T>(payload: GraphQueryPayload, node: string) {
    return this._graphService.fetchQuery<T[]>(payload, node, "strapi").pipe(
      filter(isNonNullable),
      map((data) => data)
    );
  }
}
