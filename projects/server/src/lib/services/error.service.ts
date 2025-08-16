import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { ApolloError } from '@apollo/client/errors';
import { print } from 'graphql';
import { GraphQLFormattedError } from 'graphql';

import { GraphMutationPayload, GraphQueryPayload } from './graphql/public-api';

export type ServerError = { query: string; variables: any; error: ApolloError; errorsMessage: GraphQLFormattedError[] };
@Injectable({
  providedIn: 'root',
})
export class CamServerErrorService {
  public notifications = signal<ServerError[]>([]);

  constructor() {}

  public addError(query: GraphQueryPayload | GraphMutationPayload, error: ApolloError) {
    this.notifications().push({
      query: print('query' in query ? query.query : query.mutation),
      variables: query.variables,
      error,
      errorsMessage: (error.networkError as HttpErrorResponse).error.errors,
    });
  }
}
