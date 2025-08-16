import { Injectable, inject } from '@angular/core';

import { Observable, catchError, filter, map, of, switchMap } from 'rxjs';

import { CamBaseService, GraphEndpoint, HandleSimpleRequest } from '@camelot/server';
import { isNonNullable } from '@camelot/utils';

import { CamUsersService } from './users.service';
import { Function, FunctionCreationPayload, FunctionModifierPayload, functionProps } from './users/dto/function';
import { Role, roleProps } from './users/dto/role';
import { UserFunctionPayload } from './users/dto/user';
import { ADD_FUNCTION, ADD_FUNCTION_TO_USER, REMOVE_FUNCTION_FROM_USER, UPDATE_FUNCTION } from './users/userMutations';
import { GET_FUNCTIONS, GET_ROLES } from './users/userQueries';

const graphEndpoint: GraphEndpoint = {
  clientName: 'userService',
  endpoint: 'user',
};

@Injectable({
  providedIn: 'root',
})
export class CamFunctionsService extends CamBaseService {
  public functions = new HandleSimpleRequest<Function[]>();
  public roles = new HandleSimpleRequest<Role[]>();

  private _usersService = inject(CamUsersService);

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public fetchFunctions$() {
    return this.functions.fetch(
      this._graphService
        .fetchPagedQueryList<Function>(
          GET_FUNCTIONS(
            '',
            `
              ${functionProps.get('id')}
              ${functionProps.get('name')}
              ${functionProps.get('roles')} {
                ${roleProps.get('id')}
                ${roleProps.get('name')}
              }
            `
          ),
          'functions',
          graphEndpoint.clientName
        )
        .pipe(
          filter(isNonNullable),
          map(data => data.items ?? [])
        )
    );
  }

  public fetchRoles$() {
    return this.roles.fetch(
      this._graphService
        .fetchPagedQueryList<Role>(
          GET_ROLES(
            '',
            `
              ${roleProps.get('id')}
              ${roleProps.get('name')}
            `
          ),
          'roles',
          graphEndpoint.clientName
        )
        .pipe(
          filter(isNonNullable),
          map(data => data.items ?? [])
        )
    );
  }

  public addFunction$(functionAddedPayload: FunctionCreationPayload): Observable<Function[] | null> {
    return this._graphService
      .mutate<Function>(ADD_FUNCTION(functionAddedPayload), 'addFunction', graphEndpoint.clientName, ['functions'])
      .pipe(
        filter(isNonNullable),
        switchMap(() => this.fetchFunctions$()),
        catchError(error => {
          console.error('Error adding function:', error);
          return of(null);
        })
      );
  }

  public updateFunction$(functionModifierPayload: Partial<FunctionModifierPayload>): Observable<Function[] | null> {
    return this._graphService
      .mutate<Function>(UPDATE_FUNCTION(functionModifierPayload), 'updateFunction', graphEndpoint.clientName, [
        'functions',
      ])
      .pipe(
        filter(isNonNullable),
        switchMap(() => this.fetchFunctions$()),
        catchError(error => {
          console.error('Error adding function:', error);
          return of(null);
        })
      );
  }

  public addFunctionToUser$(payload: UserFunctionPayload) {
    return this._graphService
      .mutate<Function>(ADD_FUNCTION_TO_USER(payload), 'addFunctionToUser', graphEndpoint.clientName, ['userById'])
      .pipe(
        filter(isNonNullable),
        switchMap(() => this._usersService.fetchUser$(payload.userId)),
        catchError(error => {
          console.error('Error adding function:', error);
          return of(null);
        })
      );
  }

  public removeFunctionFromUser$(payload: UserFunctionPayload) {
    return this._graphService
      .mutate<Function>(REMOVE_FUNCTION_FROM_USER(payload), 'removeFunctionFromUser', graphEndpoint.clientName, [
        'userById',
      ])
      .pipe(
        filter(isNonNullable),
        switchMap(() => this._usersService.fetchUser$(payload.userId)),
        catchError(error => {
          console.error('Error adding function:', error);
          return of(null);
        })
      );
  }
}
