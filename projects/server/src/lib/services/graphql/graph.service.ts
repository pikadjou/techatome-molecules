import { Inject, Injectable, Optional, inject } from '@angular/core';

import { ApolloClient, ApolloError, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { BehaviorSubject, catchError, filter, map, switchMap, take, tap, throwError } from 'rxjs';

import { isURL } from '@ta/utils';

import { CamServerErrorService } from '../error.service';
import { Logger } from '../logger';
import { GraphMutationPayload, GraphQueryPayload } from './models/graphPayload';
import { GraphReponseData } from './models/graphResponseData';
import { GraphReponsePagedData } from './models/graphResponsePagedData';
import { ReponseMutationData } from './models/responseData';
import { GRAPHQL_SERVER_CONFIG, GraphEndpoint, IGraphConfig } from './public-api';

export type GraphOptions = {
  visitor: boolean;
};
type WrapperData = {
  context?: string;
};
@Injectable({
  providedIn: 'root',
})
export class TaGraphService {
  public isReady$ = new BehaviorSubject<boolean>(true);

  private _errorServices = inject(CamServerErrorService);

  private _defaultEndpoint;
  private _cache;
  constructor(
    @Optional()
    @Inject(GRAPHQL_SERVER_CONFIG)
    private _graphConfig: IGraphConfig,
    private httpLink: HttpLink,
    private apollo: Apollo
  ) {
    this._defaultEndpoint = new ApolloLink((operation, forward) => {
      return forward(operation);
    });

    this._cache = new InMemoryCache();

    this.apollo.client = new ApolloClient({
      cache: this._cache,
      link: this._defaultEndpoint,
    });
  }

  public clearCache(key: string) {
    this._cache.evict({
      fieldName: key,
    });
  }

  public fetchQueryList<T>(payload: GraphQueryPayload, node: string, context: string) {
    return this._getWrapper({ context }).pipe(
      tap(() =>
        Logger.LogInfo('[GraphQL] [Query] fetchQueryList:', {
          payload,
          node,
          context,
        })
      ),
      switchMap(() =>
        this.apollo.query<GraphReponseData<T[]>>(this._setupData(payload, context)).pipe(
          tap(data =>
            Logger.LogInfo('[GraphQL] [Response] fetchQueryList:', {
              data,
              node,
              context,
            })
          ),
          filter(response => !!response.data),
          map(response => response.data[node]),
          catchError((err: ApolloError) => {
            Logger.LogError('[GraphQL] [Error] fetchQueryList:', {
              payload,
              node,
              context,
              message: err.message,
            });
            //this._errorServices.addError(err);
            return throwError(() => err);
          }),
          catchError((err: ApolloError) => {
            Logger.LogError('[GraphQL] [Error] fetchPagedQueryList:', {
              payload,
              node,
              context,
              message: err.message,
            });

            this._errorServices.addError(payload, err);
            return throwError(() => err);
          })
        )
      ),
      take(1)
    );
  }

  public fetchPagedQueryList<T>(payload: GraphQueryPayload, node: string, context: string) {
    Logger.LogInfo('[GraphQL] [Prepare] fetchPagedQueryList:', {
      payload,
      node,
      context,
    });
    return this._getWrapper({ context }).pipe(
      tap(() =>
        Logger.LogInfo('[GraphQL] [Query] fetchPagedQueryList:', {
          payload,
          node,
          context,
        })
      ),
      switchMap(() =>
        this.apollo.query<GraphReponsePagedData<T>>(this._setupData(payload, context)).pipe(
          tap(data =>
            Logger.LogInfo('[GraphQL] [Response] fetchPagedQueryList:', {
              data,
              node,
              context,
            })
          ),
          filter(response => !!response.data),
          map(response => response.data[node]),
          catchError((err: ApolloError) => {
            Logger.LogError('[GraphQL] [Error] fetchPagedQueryList:', {
              payload,
              node,
              context,
              message: err.message,
            });

            this._errorServices.addError(payload, err);
            return throwError(() => err);
          })
        )
      ),
      take(1)
    );
  }

  public fetchQuery<T>(payload: GraphQueryPayload, node: string, context: string) {
    return this._getWrapper({ context }).pipe(
      tap(() =>
        Logger.LogInfo('[GraphQL] [Query] fetchQuery:', {
          payload,
          node,
          context,
        })
      ),
      switchMap(() =>
        this.apollo.query<GraphReponseData<T>>(this._setupData(payload, context)).pipe(
          tap(data =>
            Logger.LogInfo('[GraphQL] [Response] fetchQuery:', {
              data,
              node,
              context,
            })
          ),
          filter(response => !!response.data),
          map(data => data.data[node]),
          catchError((err: ApolloError) => {
            Logger.LogError('[GraphQL] [Error] fetchPagedQueryList:', {
              payload,
              node,
              context,
              message: err.message,
            });

            this._errorServices.addError(payload, err);
            return throwError(() => err);
          })
        )
      ),
      take(1)
    );
  }

  public mutate<T>(payload: GraphMutationPayload, mutationName: string, context: string, clearCache?: string[]) {
    Logger.LogInfo('[GraphQL]  [Prepare] mutate', payload, mutationName);
    return this.apollo.mutate<ReponseMutationData<T>>(this._setupData(payload, context)).pipe(
      tap(data => Logger.LogInfo('[GraphQL] [Reponse] mutate', data)),
      filter(response => !!response.data),
      tap(() => clearCache?.forEach(cacheKey => this.clearCache(cacheKey))),
      map(response => {
        return response!.data![mutationName];
      }),
      catchError((err: ApolloError) => {
        Logger.LogError('[GraphQL] [Error] fetchPagedQueryList:', {
          payload,
          context,
          message: err.message,
        });

        this._errorServices.addError(payload, err);
        return throwError(() => err);
      })
    );
  }

  public registerGraphEndpoint(graphEndpoint: GraphEndpoint, options?: GraphOptions) {
    const url =
      options?.visitor === true && this._graphConfig?.visitor ? this._graphConfig?.visitor : this._graphConfig?.url;

    let uri = isURL(graphEndpoint.endpoint) ? graphEndpoint.endpoint : url + graphEndpoint.endpoint;

    const newHttpLink = this.httpLink.create({
      headers: graphEndpoint.headers,
      uri: uri,
    });

    this.apollo.client.setLink(
      this.apollo.client.link.concat(
        ApolloLink.split(operation => operation.getContext()['clientName'] === graphEndpoint.clientName, newHttpLink)
      )
    );
  }

  private _setupData<T>(payload: T, context: string) {
    return { ...payload, ...{ context: { clientName: context } } };
  }

  private _getWrapper(data?: WrapperData) {
    return this.isReady$;
  }
}
