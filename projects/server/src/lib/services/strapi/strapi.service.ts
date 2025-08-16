import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { filter, map } from 'rxjs';

import { isNonNullable } from '@camelot/utils';

import { GraphQueryPayload } from '../graphql/models/graphPayload';
import { CamBaseService } from '../server/baseService';
import { IStrapiConfig, STRAPI_SERVER_CONFIG } from './config';

export interface GraphStrapiResponse<T> {
  data: {
    id: string;
    attributes: T;
  };
}

export interface GraphStrapiListResponse<T> {
  data: {
    id: string;
    attributes: T;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class CamStrapiService extends CamBaseService {
  constructor(@Inject(STRAPI_SERVER_CONFIG) private _strapiConfig: IStrapiConfig) {
    super();

    const headers = new HttpHeaders({
      authorization: `Bearer ${this._strapiConfig.config.token}`,
    });

    super.registerRoutes({
      graphEndpoint: {
        clientName: 'strapi',
        endpoint: this._strapiConfig.config.url,
        headers: headers,
      },
    });
  }

  public fetchQuery$<T>(payload: GraphQueryPayload, node: string) {
    return this._graphService.fetchQuery<GraphStrapiResponse<T>>(payload, node, 'strapi').pipe(
      filter(isNonNullable),
      map(data => data.data.attributes)
    );
  }

  public fetchQueryList$<T>(payload: GraphQueryPayload, node: string) {
    return this._graphService.fetchQuery<GraphStrapiListResponse<T>>(payload, node, 'strapi').pipe(
      filter(isNonNullable),
      map(data => data.data.map(data => data.attributes))
    );
  }
}
