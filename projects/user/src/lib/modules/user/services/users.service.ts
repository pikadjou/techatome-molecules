import { Injectable } from '@angular/core';

import { Observable, catchError, filter, map, of, switchMap, tap } from 'rxjs';

import { CamBaseService, GraphEndpoint, HandleComplexRequest, HandleSimpleRequest } from '@ta/server';
import { isNonNullable } from '@ta/utils';

import { CurrentUser } from './users/dto/currentUser';
import { functionProps } from './users/dto/function';
import { ModifyUserPayloadInput } from './users/dto/modifyUserPayloadInput';
import { User, userProps } from './users/dto/user';
import { UserAddedPayload } from './users/dto/userAddedPayload';
import { ADD_USER, DISABLE_CURRENT_USER, DISABLE_USER, UPDATE_CURRENT_USER } from './users/userMutations';
import {
  GET_CONTACT_TENANT_ROUTE,
  GET_CURRENT_USER,
  GET_MY_CONTACTS,
  GET_SEARCH_USERS_CUSTOMERS,
  GET_USERS,
  GET_USER_BY_ID,
} from './users/userQueries';

export const cachedQueryName = {
  currentUser: 'currentUser',
};
const graphEndpoint: GraphEndpoint = {
  clientName: 'userService',
  endpoint: 'user',
};

@Injectable({
  providedIn: 'root',
})
export class TaUsersService extends CamBaseService {
  public users = new HandleSimpleRequest<User[]>();
  public usersCustomers = new HandleSimpleRequest<User[]>();

  public userById = new HandleComplexRequest<User>();
  public user = new HandleComplexRequest<User>();
  public currentUser = new HandleSimpleRequest<User>();
  public currentUserContactIds = new HandleSimpleRequest<string[]>();

  public contactTenantRoute = new HandleSimpleRequest<string>();

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public fetchUsers$() {
    return this.users.fetch(
      this._graphService
        .fetchPagedQueryList<User>(
          GET_USERS(
            '',
            `
              ${userProps.get('id')}
              ${userProps.get('userName')}
              ${userProps.get('firstName')}
              ${userProps.get('lastName')}
              ${userProps.get('phoneNumber')}
              ${userProps.get('functions')} {
                ${functionProps.get('id')}
                ${functionProps.get('name')}
              }
              ${userProps.get('culture')}
              ${userProps.get('trigram')}
              ${userProps.get('picture')}
              
            `,
            `order: { lastName: ASC }`
          ),
          'users',
          graphEndpoint.clientName
        )
        .pipe(
          filter(isNonNullable),
          map(data => data.items ?? [])
        )
    );
  }

  public fetchContactTenantRoute$(contactId: string) {
    return this.contactTenantRoute.fetch(
      this._graphService
        .fetchQuery<string>(GET_CONTACT_TENANT_ROUTE(contactId), 'contactTenantRoute', graphEndpoint.clientName)
        .pipe(filter(isNonNullable))
    );
  }

  public fetchUsersByIds$(ids: string[]) {
    return this.users.fetch(
      this._graphService
        .fetchPagedQueryList<User>(
          GET_USERS(
            `where: { id: { in: [${ids.map(id => `"${id}"`).join(', ')}] } }`,
            `
              ${userProps.get('id')}
              ${userProps.get('userName')}
              ${userProps.get('firstName')}
              ${userProps.get('lastName')}
              ${userProps.get('picture')}
              ${userProps.get('trigram')}
            `,
            `order: { lastName: ASC }`
          ),
          'users',
          graphEndpoint.clientName
        )
        .pipe(
          filter(isNonNullable),
          map(data => data.items ?? [])
        )
    );
  }

  public fetchUser$(id: string) {
    return this.user.fetch(
      id,
      this._graphService.fetchQuery<User>(GET_USER_BY_ID(id), 'userById', graphEndpoint.clientName)
    );
  }

  public fetchCurrentUser$() {
    return this.currentUser.fetch(
      this._graphService.fetchQuery<User>(GET_CURRENT_USER(), cachedQueryName.currentUser, graphEndpoint.clientName)
    );
  }

  public fetchCurrentUserContactIds$() {
    return this.currentUserContactIds
      .fetch(
        this._graphService
          .fetchQueryList<string>(GET_MY_CONTACTS(), 'myContacts', graphEndpoint.clientName)
          .pipe(map(data => data ?? []))
      )
      .pipe(
        tap(() => {
          this._graphService.contactsLoaded$.next(true);
        })
      );
  }

  public fetchUsersCustomers$(search?: string) {
    if (!search || search.length < 3) {
      return of([]);
    }
    return this._graphService
      .fetchPagedQueryList<User>(
        GET_SEARCH_USERS_CUSTOMERS(
          search,
          `
              ${userProps.get('id')}
              ${userProps.get('picture')}
              ${userProps.get('trigram')}
              ${userProps.get('firstName')}
              ${userProps.get('lastName')}
              ${userProps.get('userName')}
            `
        ),
        'searchUsersCustomers',
        graphEndpoint.clientName
      )
      .pipe(
        filter(isNonNullable),
        map(data => data.items ?? []),
        tap(list =>
          list.forEach(element => {
            this.userById.add(element.id, element);
          })
        )
      );
  }

  public addUser$(userAddedPayload: UserAddedPayload): Observable<User[] | null> {
    return this._graphService.mutate<User>(ADD_USER(userAddedPayload), 'users', graphEndpoint.clientName).pipe(
      filter(isNonNullable),
      switchMap(() => this.fetchUsers$()),
      catchError(error => {
        console.error('Error adding user:', error);
        return of(null);
      })
    );
  }

  public disableUser$(userId: string) {
    return this._graphService.mutate<boolean>(DISABLE_USER(userId), 'users', graphEndpoint.clientName).pipe(
      switchMap(() => this.fetchUser$(userId)),
      catchError(error => {
        console.error('Error disabling user:', error);
        return of(null);
      })
    );
  }

  public disableCurrentUser$() {
    return this._graphService.mutate<boolean>(DISABLE_CURRENT_USER(), 'users', graphEndpoint.clientName).pipe(
      switchMap(() => this.fetchCurrentUser$()),
      catchError(error => {
        console.error('Error disabling user:', error);
        return of(null);
      })
    );
  }

  public updateCurrentUser$(user: ModifyUserPayloadInput) {
    return this._graphService
      .mutate<CurrentUser>(UPDATE_CURRENT_USER(user), 'users', graphEndpoint.clientName, [cachedQueryName.currentUser])
      .pipe(
        switchMap(() => this.fetchCurrentUser$()),
        catchError(error => {
          console.error('Error updating user:', error);
          return of(null);
        })
      );
  }
}
