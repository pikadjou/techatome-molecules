import * as i0 from '@angular/core';
import { Injectable, inject, InjectionToken, Component, EventEmitter, ViewChild, Output, Input, Optional, Inject, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import { TaRoutes, MenuPanel, MenuIcon, Menu, MenuComponent, TaMainRoute, CamMenuModule } from '@ta/menu';
import { Logger, CamBaseService, Request, GraphSchema, Apollo_gql, graphQlTake, HandleComplexRequest, HandleSimpleRequest, GRAPHQL_SERVER_CONFIG } from '@ta/server';
import { isNonNullable, APPLICATION_CONFIG, TaBaseComponent, StopPropagationDirective, JoinPipe, sendMail, fullName, openExternalUrl, CamAbstractComponent, Culture, DEFAULT_USER_LANGUAGE, CamDirectivePipeModule, trigram } from '@ta/utils';
import { BehaviorSubject, filter, map as map$1, tap, of, switchMap, catchError, distinct } from 'rxjs';
import * as i1 from '@angular/router';
import { gql } from 'apollo-angular';
import { Validators } from '@angular/forms';
import { InputPanel, InputTextBox, InputChoices, InputDropdown } from '@ta/form-model';
import * as i1$1 from '@ta/translation';
import { TranslatePipe, CamTranslationService, CamLazyTranslationService } from '@ta/translation';
import { CardComponent, CardContentComponent, ButtonComponent, LoaderComponent as LoaderComponent$1, ErrorComponent, EmptyComponent, InlineProfileDataComponent, TitleComponent, ListContainerComponent as ListContainerComponent$1, ListElementComponent as ListElementComponent$1, ListTitleComponent as ListTitleComponent$1, ListExtraInformationComponent, UiProfileDisplayComponent, LinkComponent, UserLogoComponent, CamUiModule, CamCardModule, CamListModule, CamContainerModule } from '@ta/ui';
import { AsyncPipe, NgIf, NgFor, CommonModule } from '@angular/common';
import { TrigramComponent, ButtonComponent as ButtonComponent$1, ListTagComponent, LoaderComponent, ListContainerComponent, ListElementComponent, ListTitleComponent } from 'projects/ui/dist';
import { DropdownComponent, CamFormInputsModule } from '@ta/form-input';
import { FontIconComponent, CamIconType, CamIconsModule } from '@ta/icons';
import { MatMenu, MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import * as i1$2 from '@auth0/auth0-angular';
import { AuthService, provideAuth0 as provideAuth0$1, AuthHttpInterceptor } from '@auth0/auth0-angular';
import * as i3 from '@ta/services';
import { CamConfigurationService } from '@ta/services';

/** @deprecated */
class PermissionsCore {
    get received() {
        return this._updated$.value !== null;
    }
    constructor() {
        this._updated$ = new BehaviorSubject(null);
        this._isFill = { permissions: false, isAuthenticated: false };
        this.guards = {};
        this.roles = [];
        this.isAuthenticated = false;
        this.updated$ = this._updated$.pipe(filter(isNonNullable));
    }
    set(info, isAuthenticated) {
        Logger.LogInfo('[PERMISSIONS] List brut:', info.permissions);
        this.guards = {};
        if (info.permissions) {
            for (let perm of info.permissions) {
                const access = perm.split(':');
                if (!this.guards[access[1]]) {
                    this.guards[access[1]] = [];
                }
                this.guards[access[1]].push(access[0]);
            }
        }
        this.roles = info.roles || [];
        this._isFill.permissions = true;
        this.setSilentAuthenticated(isAuthenticated);
        this._canYouUpdate();
        Logger.LogInfo('[PERMISSIONS] List:', this.guards, this.roles);
    }
    setSilentAuthenticated(isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this._isFill.isAuthenticated = true;
        this._canYouUpdate();
    }
    setAuthenticated(isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this._updated$.next(Date.now());
    }
    hasRole(role) {
        return this.roles.some(x => x.includes(role));
    }
    canDirectAccess(feature, level) {
        if (level === 'authenticated') {
            return this.isAuthenticated;
        }
        if (!feature) {
            return true;
        }
        const featureGuard = this.guards[feature];
        if (!featureGuard) {
            return false;
        }
        if (featureGuard.includes('all')) {
            return true;
        }
        if (!featureGuard.includes(level)) {
            return false;
        }
        return true;
    }
    canAccess(feature, level) {
        return this._updated$.pipe(map(() => this.canDirectAccess(feature, level)));
    }
    _canYouUpdate() {
        if (!this._isFill.isAuthenticated || !this._isFill.permissions) {
            return;
        }
        this._updated$.next(Date.now());
    }
}
/** @deprecated */
const Permissions = new PermissionsCore();

const accessLevels = ['reader', 'contributor', 'administrator'];
class CamPermissionsService {
    get received() {
        return this._updated$.value !== null;
    }
    constructor() {
        this._updated$ = new BehaviorSubject(null);
        this._isFill = { permissions: false, isAuthenticated: false };
        this.features = [];
        this.guards = {};
        this.roles = [];
        this.isAuthenticated = false;
        this.updated$ = this._updated$.pipe(filter(isNonNullable));
    }
    set(info, isAuthenticated) {
        Logger.LogInfo('[PERMISSIONS] List brut:', info.permissions);
        this.features = info.features || [];
        this.roles = info.roles || [];
        this.guards = info.roles
            .map(role => role.replace('Merlin_', ''))
            .reduce((acc, role) => {
            if (!role.includes('-')) {
                return acc;
            }
            const [domain, access] = role.split('-');
            const lastAccess = accessLevels.indexOf(access) > accessLevels.indexOf(acc[domain] || '') ? access : acc[domain];
            return {
                ...acc,
                [domain]: lastAccess,
            };
        }, {});
        Logger.LogInfo('[PERMISSIONS] Guard', this.guards);
        this._isFill.permissions = true;
        this.setSilentAuthenticated(isAuthenticated);
        Permissions.set(info, isAuthenticated);
        this._canYouUpdate();
    }
    setSilentAuthenticated(isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this._isFill.isAuthenticated = true;
        Permissions.setSilentAuthenticated(isAuthenticated);
        this._canYouUpdate();
    }
    setAuthenticated(isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        Permissions.setAuthenticated(isAuthenticated);
        this._updated$.next(Date.now());
    }
    hasRole(role) {
        return this.roles.some(x => x === role);
    }
    canDirectAccess(feature, level) {
        if (level === 'authenticated') {
            return this.isAuthenticated;
        }
        if (level === 'authorize') {
            return this.features.includes(feature);
        }
        if (!feature) {
            return Permissions.canDirectAccess(feature, level);
        }
        const featureGuard = this.guards[feature];
        if (!featureGuard) {
            return Permissions.canDirectAccess(feature, level);
        }
        return accessLevels.indexOf(featureGuard) >= accessLevels.indexOf(level);
    }
    canAccess$(feature, level) {
        return this._updated$.pipe(map$1(() => this.canDirectAccess(feature, level)));
    }
    _canYouUpdate() {
        if (!this._isFill.isAuthenticated || !this._isFill.permissions) {
            return;
        }
        this._updated$.next(Date.now());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamPermissionsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamPermissionsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamPermissionsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class AuthGuard {
    constructor(router) {
        this.router = router;
        this._permissionsService = inject(CamPermissionsService);
    }
    canActivate(next, state) {
        if (!this._permissionsService.received) {
            return this._permissionsService.updated$.pipe(map(() => {
                if (this._permissionsService.isAuthenticated) {
                    return true;
                }
                else {
                    this.setRedirect();
                    return false;
                }
            }));
        }
        if (this._permissionsService.isAuthenticated === false) {
            this.setRedirect();
            return false;
        }
        return this._permissionsService.isAuthenticated;
    }
    setRedirect() {
        this.router.navigateByUrl(TaRoutes.getLogin());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AuthGuard, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AuthGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }] });

class FeatureGuard {
    constructor(router) {
        this.router = router;
        this._permissionsService = inject(CamPermissionsService);
    }
    canActivate(route) {
        const level = route.data['level'];
        const feature = route.data['feature'];
        if (this._permissionsService.received === true) {
            return this._isValidPermission(feature, level);
        }
        return this._permissionsService.updated$.pipe(map(() => {
            return this._isValidPermission(feature, level);
        }));
    }
    setRedirect() {
        this.router.navigateByUrl(TaRoutes.getHome());
    }
    _isValidPermission(feature, level) {
        if (this._permissionsService.canDirectAccess(feature, level)) {
            return true;
        }
        this.setRedirect();
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }] });

/*
 * Public API Surface of users
 */

const apiRoutes$1 = {
    GetUserProfile: {
        type: 'GET',
        url: '{ApiUrl}/UserProfile',
    },
};
class CamUserService extends CamBaseService {
    constructor() {
        super(apiRoutes$1);
        this.userProfile$ = new BehaviorSubject(null);
    }
    fetchUserProfile() {
        return this._serverService.request(new Request({ type: 'GetUserProfile', cacheTime: -1 })).pipe(filter(data => !!data), tap(data => {
            this.userProfile$.next(data);
        })
        // GOOGLE TAG MANAGER NOT USED YET
        // tap(data => {
        //   this._gtmService.pushTag({
        //     event: 'userProfile',
        //     userProfile: {
        //       id: data.id,
        //       lastName: data.lastName,
        //       firstName: data.firstName,
        //     },
        //   });
        // })
        );
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const props = ['id', 'firstName', 'lastName', 'mail', 'phoneNumber', 'tenantPersonId'];
const contactProps = new GraphSchema(props);

function GET_CONTACTS(where, props) {
    return {
        query: Apollo_gql `
        query Contacts {
          contacts(${where}, ${graphQlTake()}) {
            items {
              ${props}
            }
          }
        }
      `,
        variables: {},
    };
}
function GET_CONTACTS_LIGHT(where, props) {
    return {
        query: Apollo_gql `
        query Contacts {
          contactsLight(${where}, ${graphQlTake()}) {
            items {
              ${props}
            }
          }
        }
      `,
        variables: {},
    };
}
function GET_SEARCH_CONTACTS(filter, props, order) {
    return {
        query: Apollo_gql `
    query Contacts {
        searchContactsLight(${order}, filter: "${filter}", ${graphQlTake()}) {
            totalCount
            items {
                ${props}
            }
        }
    }
    `,
        variables: {},
    };
}

const graphEndpoint$2 = {
    clientName: 'contactService',
    endpoint: 'contact',
};
class CamContactService extends CamBaseService {
    constructor() {
        super();
        this.contactById = new HandleComplexRequest();
        this.contacts = new HandleSimpleRequest();
        super.registerRoutes({ graphEndpoint: graphEndpoint$2 });
    }
    fetchContactById$(contactId) {
        return this.contactById.fetch(contactId, this._graphService
            .fetchPagedQueryList(GET_CONTACTS(`where: { id: { eq: "${contactId}" } }`, `
            ${contactProps.get('id')}
            ${contactProps.get('firstName')}
            ${contactProps.get('lastName')}
            ${contactProps.get('mail')}
            ${contactProps.get('phoneNumber')}
            ${contactProps.get('tenantPersonId')}
          `), 'contacts', graphEndpoint$2.clientName)
            .pipe(filter(isNonNullable), map$1(data => ({
            ...data,
            items: data.items ?? [],
        })), filter(data => data.items.length > 0), map$1(data => data.items[0])));
    }
    fetchContact$() {
        return this.contacts.fetch(this._graphService
            .fetchPagedQueryList(GET_CONTACTS_LIGHT('', `
              ${contactProps.get('id')}
              ${contactProps.get('firstName')}
              ${contactProps.get('lastName')}
              ${contactProps.get('mail')}
              ${contactProps.get('phoneNumber')}
            `), 'contactsLight', graphEndpoint$2.clientName)
            .pipe(filter(isNonNullable), map$1(data => data.items ?? [])));
    }
    fetchContactsByIds$(ids) {
        return this.contacts.fetch(this._graphService
            .fetchPagedQueryList(GET_CONTACTS_LIGHT(`where: { id: { in: [${ids.map(id => `"${id}"`).join(', ')}] } }`, `
              ${contactProps.get('id')}
              ${contactProps.get('firstName')}
              ${contactProps.get('lastName')}
              ${contactProps.get('mail')}
            `), 'contactsLight', graphEndpoint$2.clientName)
            .pipe(filter(isNonNullable), map$1(data => data.items ?? [])));
    }
    fetchSearchContact$(search) {
        if (!search || search.length < 3) {
            return of([]);
        }
        return this._graphService
            .fetchPagedQueryList(GET_SEARCH_CONTACTS(search, `
              ${contactProps.get('id')}
              ${contactProps.get('firstName')}
              ${contactProps.get('lastName')}
              ${contactProps.get('mail')}
            `, `order: { lastName: ASC }`), 'searchContactsLight', graphEndpoint$2.clientName)
            .pipe(filter(isNonNullable), map$1(data => data.items ?? []), tap(list => list.forEach(element => {
            this.contactById.add(element.id, element);
        })));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamContactService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamContactService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamContactService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const functionProps = new GraphSchema(['id', 'name', 'tenantId', 'roles']);

const userProps = new GraphSchema([
    'id',
    'userName',
    'firstName',
    'lastName',
    'phoneNumber',
    'isCompany',
    'culture',
    'trigram',
    'picture',
    'tenantInformations',
    'functions',
]);

function ADD_USER(userAddedPayload) {
    return {
        mutation: gql `
      mutation AddUser($userAddedPayload: UserAddedPayloadInput!) {
        addUser(userAddedPayload: $userAddedPayload) {
          ${userProps.get('id')}
          ${userProps.get('userName')}
          ${userProps.get('firstName')}
          ${userProps.get('lastName')}
          ${userProps.get('phoneNumber')}
          ${userProps.get('culture')}
          ${userProps.get('trigram')}
          ${userProps.get('picture')}
        }
      }
    `,
        variables: {
            userAddedPayload: userAddedPayload,
        },
    };
}
function DISABLE_USER(userId) {
    return {
        mutation: gql `
      mutation DisableUser($userId: String!) {
        disableUser(userId: $userId)
      }
    `,
        variables: {
            userId: userId,
        },
    };
}
function DISABLE_CURRENT_USER() {
    return {
        mutation: gql `
      mutation DisableCurrentUser() {
        disableCurrentUser()
      }
    `,
        variables: {},
    };
}
function UPDATE_CURRENT_USER(user) {
    return {
        mutation: gql `
        mutation UpdateCurrentUser($user: ModifyUserPayloadInput!) {
          updateCurrentUser(user: $user) {
            ${userProps.get('firstName')}
            ${userProps.get('lastName')}
            ${userProps.get('phoneNumber')}
            ${userProps.get('picture')}
          }
        }
      `,
        variables: {
            user: user,
        },
    };
}
function ADD_FUNCTION(functionAddedPayload) {
    return {
        mutation: gql `
      mutation AddFunction($functionAddedPayload: AddFunctionPayloadInput!) {
        addFunction(payload: $functionAddedPayload) {
          ${functionProps.get('id')}
        }
      }
    `,
        variables: {
            functionAddedPayload: functionAddedPayload,
        },
    };
}
function UPDATE_FUNCTION(functionModifierPayload) {
    return {
        mutation: gql `
        mutation UpdateFunction($functionModifierPayload: ModifyFunctionPayloadInput!) {
          updateFunction(payload: $functionModifierPayload) {
            ${functionProps.get('id')}
          }
        }
      `,
        variables: {
            functionModifierPayload: functionModifierPayload,
        },
    };
}
function ADD_FUNCTION_TO_USER(payload) {
    return {
        mutation: gql `
      mutation AddFunctionToUser($payload: UserFunctionPayloadInput!) {
        addFunctionToUser(payload: $payload) {
          userId
        }
      }
    `,
        variables: {
            payload,
        },
    };
}
function REMOVE_FUNCTION_FROM_USER(payload) {
    return {
        mutation: gql `
      mutation RemoveFunctionFromUser($payload: UserFunctionPayloadInput!) {
        removeFunctionFromUser(payload: $payload)
      }
    `,
        variables: {
            payload,
        },
    };
}

const tenantInformationsProps = new GraphSchema(['customerId', 'tenantId', 'tenantName']);

function GET_USER_BY_ID(id) {
    return {
        query: Apollo_gql `
        query GetUserById($id: UUID!) {
          userById(id: $id) {
              ${userProps.get('id')}
              ${userProps.get('userName')}
              ${userProps.get('firstName')}
              ${userProps.get('lastName')}
              ${userProps.get('phoneNumber')}
              ${userProps.get('isCompany')}
              ${userProps.get('culture')}
              ${userProps.get('trigram')}
              ${userProps.get('picture')}
              ${userProps.get('functions')} {
                ${functionProps.get('id')}
                ${functionProps.get('name')}
              }
            }
          }
      `,
        variables: {
            id: id,
        },
    };
}
function GET_CURRENT_USER() {
    return {
        query: Apollo_gql `
        query GetCurrentUser {
          currentUser {
            ${userProps.get('id')}
            ${userProps.get('userName')}
            ${userProps.get('firstName')}
            ${userProps.get('lastName')}
            ${userProps.get('phoneNumber')}
            ${userProps.get('isCompany')}
            ${userProps.get('culture')}
            ${userProps.get('trigram')}
            ${userProps.get('picture')}
            ${userProps.get('tenantInformations')} {
              ${tenantInformationsProps.get('customerId')}
              ${tenantInformationsProps.get('tenantId')}
              ${tenantInformationsProps.get('tenantName')}
            }
          }
        }
      `,
        variables: {},
    };
}
function GET_USERS(where, props, order) {
    return {
        query: Apollo_gql `
      query Users {
        users(${order}, ${where}, ${graphQlTake()}) {
          items {
            ${props}
          }
        }
      }
    `,
        variables: {},
    };
}
function GET_FUNCTIONS(where, props) {
    return {
        query: Apollo_gql `
      query Functions {
        functions(${where}, ${graphQlTake()}) {
          items {
            ${props}
          }
        }
      }
    `,
        variables: {},
    };
}
function GET_ROLES(where, props) {
    return {
        query: Apollo_gql `
      query Roles {
        roles(${where}, ${graphQlTake()}) {
          items {
            ${props}
          }
        }
      }
    `,
        variables: {},
    };
}
function GET_USERS_CUSTOMERS(where, props) {
    return {
        query: Apollo_gql `
      query UsersCustomers {
        usersCustomers(${where}, ${graphQlTake()}) {
          items {
            ${props}
          }
        }
      }
    `,
        variables: {},
    };
}
function GET_SEARCH_USERS_CUSTOMERS(filter, props) {
    return {
        query: Apollo_gql `
    query UsersCustomers {
        searchUsersCustomers(filter: "${filter}", ${graphQlTake()}) {
            totalCount
            items {
                ${props}
            }
        }
    }
    `,
        variables: {},
    };
}
function GET_MY_CONTACTS() {
    return {
        query: Apollo_gql `
      query MyContacts {
        myContacts
      }
    `,
        variables: {},
    };
}
function GET_CONTACT_TENANT_ROUTE(contactId) {
    return {
        query: Apollo_gql `
        query ContactTenantRoute($contactId: UUID!) {
          contactTenantRoute(contactId: $contactId)
        }
      `,
        variables: {
            contactId: contactId,
        },
    };
}

const cachedQueryName = {
    currentUser: 'currentUser',
};
const graphEndpoint$1 = {
    clientName: 'userService',
    endpoint: 'user',
};
class CamUsersService extends CamBaseService {
    constructor() {
        super();
        this.users = new HandleSimpleRequest();
        this.usersCustomers = new HandleSimpleRequest();
        this.userById = new HandleComplexRequest();
        this.user = new HandleComplexRequest();
        this.currentUser = new HandleSimpleRequest();
        this.currentUserContactIds = new HandleSimpleRequest();
        this.contactTenantRoute = new HandleSimpleRequest();
        super.registerRoutes({ graphEndpoint: graphEndpoint$1 });
    }
    fetchUsers$() {
        return this.users.fetch(this._graphService
            .fetchPagedQueryList(GET_USERS('', `
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
              
            `, `order: { lastName: ASC }`), 'users', graphEndpoint$1.clientName)
            .pipe(filter(isNonNullable), map$1(data => data.items ?? [])));
    }
    fetchContactTenantRoute$(contactId) {
        return this.contactTenantRoute.fetch(this._graphService
            .fetchQuery(GET_CONTACT_TENANT_ROUTE(contactId), 'contactTenantRoute', graphEndpoint$1.clientName)
            .pipe(filter(isNonNullable)));
    }
    fetchUsersByIds$(ids) {
        return this.users.fetch(this._graphService
            .fetchPagedQueryList(GET_USERS(`where: { id: { in: [${ids.map(id => `"${id}"`).join(', ')}] } }`, `
              ${userProps.get('id')}
              ${userProps.get('userName')}
              ${userProps.get('firstName')}
              ${userProps.get('lastName')}
              ${userProps.get('picture')}
              ${userProps.get('trigram')}
            `, `order: { lastName: ASC }`), 'users', graphEndpoint$1.clientName)
            .pipe(filter(isNonNullable), map$1(data => data.items ?? [])));
    }
    fetchUser$(id) {
        return this.user.fetch(id, this._graphService.fetchQuery(GET_USER_BY_ID(id), 'userById', graphEndpoint$1.clientName));
    }
    fetchCurrentUser$() {
        return this.currentUser.fetch(this._graphService.fetchQuery(GET_CURRENT_USER(), cachedQueryName.currentUser, graphEndpoint$1.clientName));
    }
    fetchCurrentUserContactIds$() {
        return this.currentUserContactIds
            .fetch(this._graphService
            .fetchQueryList(GET_MY_CONTACTS(), 'myContacts', graphEndpoint$1.clientName)
            .pipe(map$1(data => data ?? [])))
            .pipe(tap(() => {
            this._graphService.contactsLoaded$.next(true);
        }));
    }
    fetchUsersCustomers$(search) {
        if (!search || search.length < 3) {
            return of([]);
        }
        return this._graphService
            .fetchPagedQueryList(GET_SEARCH_USERS_CUSTOMERS(search, `
              ${userProps.get('id')}
              ${userProps.get('picture')}
              ${userProps.get('trigram')}
              ${userProps.get('firstName')}
              ${userProps.get('lastName')}
              ${userProps.get('userName')}
            `), 'searchUsersCustomers', graphEndpoint$1.clientName)
            .pipe(filter(isNonNullable), map$1(data => data.items ?? []), tap(list => list.forEach(element => {
            this.userById.add(element.id, element);
        })));
    }
    addUser$(userAddedPayload) {
        return this._graphService.mutate(ADD_USER(userAddedPayload), 'users', graphEndpoint$1.clientName).pipe(filter(isNonNullable), switchMap(() => this.fetchUsers$()), catchError(error => {
            console.error('Error adding user:', error);
            return of(null);
        }));
    }
    disableUser$(userId) {
        return this._graphService.mutate(DISABLE_USER(userId), 'users', graphEndpoint$1.clientName).pipe(switchMap(() => this.fetchUser$(userId)), catchError(error => {
            console.error('Error disabling user:', error);
            return of(null);
        }));
    }
    disableCurrentUser$() {
        return this._graphService.mutate(DISABLE_CURRENT_USER(), 'users', graphEndpoint$1.clientName).pipe(switchMap(() => this.fetchCurrentUser$()), catchError(error => {
            console.error('Error disabling user:', error);
            return of(null);
        }));
    }
    updateCurrentUser$(user) {
        return this._graphService
            .mutate(UPDATE_CURRENT_USER(user), 'users', graphEndpoint$1.clientName, [cachedQueryName.currentUser])
            .pipe(switchMap(() => this.fetchCurrentUser$()), catchError(error => {
            console.error('Error updating user:', error);
            return of(null);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUsersService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUsersService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUsersService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const roleProps = new GraphSchema(['id', 'name']);

const graphEndpoint = {
    clientName: 'userService',
    endpoint: 'user',
};
class CamFunctionsService extends CamBaseService {
    constructor() {
        super();
        this.functions = new HandleSimpleRequest();
        this.roles = new HandleSimpleRequest();
        this._usersService = inject(CamUsersService);
        super.registerRoutes({ graphEndpoint: graphEndpoint });
    }
    fetchFunctions$() {
        return this.functions.fetch(this._graphService
            .fetchPagedQueryList(GET_FUNCTIONS('', `
              ${functionProps.get('id')}
              ${functionProps.get('name')}
              ${functionProps.get('roles')} {
                ${roleProps.get('id')}
                ${roleProps.get('name')}
              }
            `), 'functions', graphEndpoint.clientName)
            .pipe(filter(isNonNullable), map$1(data => data.items ?? [])));
    }
    fetchRoles$() {
        return this.roles.fetch(this._graphService
            .fetchPagedQueryList(GET_ROLES('', `
              ${roleProps.get('id')}
              ${roleProps.get('name')}
            `), 'roles', graphEndpoint.clientName)
            .pipe(filter(isNonNullable), map$1(data => data.items ?? [])));
    }
    addFunction$(functionAddedPayload) {
        return this._graphService
            .mutate(ADD_FUNCTION(functionAddedPayload), 'addFunction', graphEndpoint.clientName, ['functions'])
            .pipe(filter(isNonNullable), switchMap(() => this.fetchFunctions$()), catchError(error => {
            console.error('Error adding function:', error);
            return of(null);
        }));
    }
    updateFunction$(functionModifierPayload) {
        return this._graphService
            .mutate(UPDATE_FUNCTION(functionModifierPayload), 'updateFunction', graphEndpoint.clientName, [
            'functions',
        ])
            .pipe(filter(isNonNullable), switchMap(() => this.fetchFunctions$()), catchError(error => {
            console.error('Error adding function:', error);
            return of(null);
        }));
    }
    addFunctionToUser$(payload) {
        return this._graphService
            .mutate(ADD_FUNCTION_TO_USER(payload), 'addFunctionToUser', graphEndpoint.clientName, ['userById'])
            .pipe(filter(isNonNullable), switchMap(() => this._usersService.fetchUser$(payload.userId)), catchError(error => {
            console.error('Error adding function:', error);
            return of(null);
        }));
    }
    removeFunctionFromUser$(payload) {
        return this._graphService
            .mutate(REMOVE_FUNCTION_FROM_USER(payload), 'removeFunctionFromUser', graphEndpoint.clientName, [
            'userById',
        ])
            .pipe(filter(isNonNullable), switchMap(() => this._usersService.fetchUser$(payload.userId)), catchError(error => {
            console.error('Error adding function:', error);
            return of(null);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFunctionsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFunctionsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFunctionsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const CAM_AUTH_TOKEN = new InjectionToken('CamAuthService');
class CamAuthService extends CamBaseService {
    constructor(apiRoutes) {
        super(apiRoutes);
        this._permissionsService = inject(CamPermissionsService);
        this.isAuthenticated$ = this._permissionsService.canAccess$('', 'authenticated');
        this.user$ = new BehaviorSubject(null);
        this._applicationConfig = inject(APPLICATION_CONFIG);
        this._userService = inject(CamUsersService);
        this.user$
            .pipe(filter(user => !!user), filter(() => this._applicationConfig.isCustomerApplication), switchMap(() => this.fetchUserContactIds()))
            .subscribe();
    }
    fetchUserContactIds() {
        return this._userService.fetchCurrentUserContactIds$();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuthService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined }] });

var EFunctionFormFields;
(function (EFunctionFormFields) {
    EFunctionFormFields["name"] = "name";
    EFunctionFormFields["roles"] = "roles";
})(EFunctionFormFields || (EFunctionFormFields = {}));
class CamFunctionsFormService {
    constructor() {
        this._functionsService = inject(CamFunctionsService);
    }
    getFunctionForm(func) {
        return [
            new InputPanel({
                key: 'panel',
                label: 'user.functions.form.title',
                contentClass: 'highlight-title g-space-md',
                children: [
                    new InputTextBox({
                        key: EFunctionFormFields.name,
                        value: func?.name,
                        label: 'user.functions.form.name',
                        validators: [Validators.required],
                    }),
                    new InputChoices({
                        key: EFunctionFormFields.roles,
                        label: 'user.functions.form.roles',
                        class: 'pt-xxl',
                        withSearch: true,
                        options: this._functionsService.fetchRoles$().pipe(filter(isNonNullable), map$1(roles => roles.map(role => ({
                            id: role.id,
                            name: role.name,
                            data: role,
                        })))),
                        value: func?.roles?.map(x => x.id),
                        multiple: true,
                    }),
                ],
            }),
        ];
    }
    formatCreationFunctionForm(data) {
        return {
            name: data[EFunctionFormFields.name],
            roleIds: data[EFunctionFormFields.roles],
        };
    }
    formatUpdateFunctionForm(id, data) {
        return {
            id: id,
            name: data[EFunctionFormFields.name],
            roleIds: data[EFunctionFormFields.roles],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFunctionsFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFunctionsFormService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFunctionsFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class LoginCardComponent {
    constructor() {
        this._authService = inject(CAM_AUTH_TOKEN);
    }
    login() {
        this._authService.login();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LoginCardComponent, isStandalone: true, selector: "ta-login-card", ngImport: i0, template: "<ta-card (click)=\"this.login()\">\n  <ta-card-content>\n    <ta-button (action)=\"this.login()\">{{ 'user.login' | translate }}</ta-button>\n  </ta-card-content>\n</ta-card>\n", styles: [""], dependencies: [{ kind: "component", type: CardComponent, selector: "ta-card", inputs: ["highlight", "shadow", "fullHeight", "noContent", "isNew"], outputs: ["click"] }, { kind: "component", type: CardContentComponent, selector: "ta-card-content" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-login-card', standalone: true, imports: [CardComponent, CardContentComponent, ButtonComponent, TranslatePipe], template: "<ta-card (click)=\"this.login()\">\n  <ta-card-content>\n    <ta-button (action)=\"this.login()\">{{ 'user.login' | translate }}</ta-button>\n  </ta-card-content>\n</ta-card>\n" }]
        }], ctorParameters: () => [] });

class LoginRedirectComponent {
    constructor() {
        this._authService = inject(CAM_AUTH_TOKEN);
        this._authService.login();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginRedirectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LoginRedirectComponent, isStandalone: true, selector: "ng-component", ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginRedirectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: '',
                    standalone: true,
                }]
        }], ctorParameters: () => [] });

class MenuUserComponent extends TaBaseComponent {
    get roles() {
        return this._permissionsService.roles;
    }
    get getFirstLetter() {
        return this.authService.firstLetter;
    }
    constructor(translateService) {
        super();
        this.translateService = translateService;
        this._permissionsService = inject(CamPermissionsService);
        this.authService = inject(CAM_AUTH_TOKEN);
        this.language = new InputDropdown({
            label: '',
            options: of([
                { id: 'fr', name: 'Français' },
                { id: 'nl', name: 'Nederlands' },
                { id: 'en', name: 'English' },
                { id: 'es', name: 'Español' },
            ]),
        });
        this.language.value = this.translateService.getLanguage();
        this._registerSubscription(this.language.changeValue$.subscribe(value => this.translateService.use(value)));
    }
    login() {
        this.authService.login();
    }
    logout() {
        this.authService.logout();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MenuUserComponent, deps: [{ token: i1$1.CamTranslationService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MenuUserComponent, isStandalone: true, selector: "ta-user-menu", usesInheritance: true, ngImport: i0, template: "<div class=\"overlay\">\n  <div class=\"row user-info\">\n    <div class=\"col-5 align-items-center\">\n      {{ 'user.language' | translate }}\n    </div>\n    <div class=\"col-7\">\n      <ta-input-dropdown [input]=\"this.language\" appStopPropagation [standalone]=\"true\"></ta-input-dropdown>\n    </div>\n  </div>\n\n  @if (this.authService.isAuthenticated$ | async) {\n    <div class=\"row user-info\">\n      <div class=\"col-2\">\n        <ta-trigram [value]=\"this.getFirstLetter\"></ta-trigram>\n      </div>\n      <div class=\"col\">\n        <div class=\"title\">{{ (this.authService.user$ | async)?.name }}</div>\n        @if (this.roles.length > 0) {\n          <div class=\"subtitle\">\n            {{ this.roles | join }}\n          </div>\n        }\n      </div>\n    </div>\n\n    <div class=\"row user-info\">\n      <ta-button type=\"secondary\" (action)=\"this.logout()\">\n        {{ 'user.logout' | translate }}\n      </ta-button>\n    </div>\n  }\n</div>\n", styles: [".connect{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.user{background-color:var(--ta-neutral-100);color:var(--ta-text-primary);padding:var(--ta-space-space);border-radius:60px}.user .expand{text-align:center;line-height:0}.overlay{padding:var(--ta-space-space);width:350px}.overlay .user-info{border-bottom:1px solid var(--ta-border-primary);padding-bottom:var(--ta-space-xs);margin:0;margin-bottom:var(--ta-space-xs)}.overlay .user-info:last-of-type{border-bottom:none;padding:0;margin:0}.overlay .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.overlay .subtitle{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }, { kind: "component", type: ButtonComponent$1, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "pipe", type: JoinPipe, name: "join" }, { kind: "component", type: DropdownComponent, selector: "ta-input-dropdown", inputs: ["space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MenuUserComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-user-menu', standalone: true, imports: [
                        NgIf,
                        AsyncPipe,
                        StopPropagationDirective,
                        TrigramComponent,
                        ButtonComponent$1,
                        TranslatePipe,
                        JoinPipe,
                        DropdownComponent,
                    ], template: "<div class=\"overlay\">\n  <div class=\"row user-info\">\n    <div class=\"col-5 align-items-center\">\n      {{ 'user.language' | translate }}\n    </div>\n    <div class=\"col-7\">\n      <ta-input-dropdown [input]=\"this.language\" appStopPropagation [standalone]=\"true\"></ta-input-dropdown>\n    </div>\n  </div>\n\n  @if (this.authService.isAuthenticated$ | async) {\n    <div class=\"row user-info\">\n      <div class=\"col-2\">\n        <ta-trigram [value]=\"this.getFirstLetter\"></ta-trigram>\n      </div>\n      <div class=\"col\">\n        <div class=\"title\">{{ (this.authService.user$ | async)?.name }}</div>\n        @if (this.roles.length > 0) {\n          <div class=\"subtitle\">\n            {{ this.roles | join }}\n          </div>\n        }\n      </div>\n    </div>\n\n    <div class=\"row user-info\">\n      <ta-button type=\"secondary\" (action)=\"this.logout()\">\n        {{ 'user.logout' | translate }}\n      </ta-button>\n    </div>\n  }\n</div>\n", styles: [".connect{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.user{background-color:var(--ta-neutral-100);color:var(--ta-text-primary);padding:var(--ta-space-space);border-radius:60px}.user .expand{text-align:center;line-height:0}.overlay{padding:var(--ta-space-space);width:350px}.overlay .user-info{border-bottom:1px solid var(--ta-border-primary);padding-bottom:var(--ta-space-xs);margin:0;margin-bottom:var(--ta-space-xs)}.overlay .user-info:last-of-type{border-bottom:none;padding:0;margin:0}.overlay .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.overlay .subtitle{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.CamTranslationService }] });

class SwitchLanguageComponent {
    constructor() {
        this.translateService = inject(CamTranslationService);
        this.languages = [
            { id: 'fr', name: 'Français' },
            { id: 'nl', name: 'Nederlands' },
            { id: 'en', name: 'English' },
            { id: 'es', name: 'Español' },
        ];
        this.activeLanguage = this.translateService.getLanguage();
        this.changeLanguageAsked = false;
    }
    changeLanguage(language) {
        if (this.activeLanguage != language) {
            this.activeLanguage = language;
            this.changeLanguageAsked = true;
            this.translateService.use(language);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchLanguageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SwitchLanguageComponent, isStandalone: true, selector: "ta-switch-language", ngImport: i0, template: "<ta-loader [isLoading]=\"this.changeLanguageAsked\">\n  <div class=\"mx-space-sm language-panel\">\n    <ta-list-container>\n      @for (language of this.languages; track language.id) {\n        <ta-list-element [withSeparator]=\"false\" (click)=\"this.changeLanguage(language.id)\">\n          <ta-list-title class=\"d-flex p-space-xs\">\n            {{ language.name | translate }}\n          </ta-list-title>\n          @if (language.id === this.activeLanguage) {\n            <ta-list-tag>\n              <ta-font-icon name=\"check-line\" class=\"color-semantic-token-success\"></ta-font-icon>\n            </ta-list-tag>\n          }\n        </ta-list-element>\n      }\n    </ta-list-container>\n  </div>\n</ta-loader>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ListTagComponent, selector: "ta-list-tag" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ListContainerComponent, selector: "ta-list-container" }, { kind: "component", type: ListElementComponent, selector: "ta-list-element", inputs: ["withSeparator", "flexColumn"], outputs: ["action"] }, { kind: "component", type: ListTitleComponent, selector: "ta-list-title" }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchLanguageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-switch-language', standalone: true, imports: [
                        NgIf,
                        NgFor,
                        FontIconComponent,
                        ListTagComponent,
                        LoaderComponent,
                        ListContainerComponent,
                        ListElementComponent,
                        ListTitleComponent,
                        TranslatePipe,
                    ], template: "<ta-loader [isLoading]=\"this.changeLanguageAsked\">\n  <div class=\"mx-space-sm language-panel\">\n    <ta-list-container>\n      @for (language of this.languages; track language.id) {\n        <ta-list-element [withSeparator]=\"false\" (click)=\"this.changeLanguage(language.id)\">\n          <ta-list-title class=\"d-flex p-space-xs\">\n            {{ language.name | translate }}\n          </ta-list-title>\n          @if (language.id === this.activeLanguage) {\n            <ta-list-tag>\n              <ta-font-icon name=\"check-line\" class=\"color-semantic-token-success\"></ta-font-icon>\n            </ta-list-tag>\n          }\n        </ta-list-element>\n      }\n    </ta-list-container>\n  </div>\n</ta-loader>\n" }]
        }] });

class MyAccountComponent extends TaBaseComponent {
    get currentUser$() {
        return this._usersService.currentUser.get$();
    }
    constructor(_usersService) {
        super();
        this._usersService = _usersService;
        this.infosMenu = null;
        this.appVersion = null;
        this.isEditable = false;
        this.navigateEvent = new EventEmitter();
        this.navigateEditEvent = new EventEmitter();
        this._authService = inject(CAM_AUTH_TOKEN);
        this.profileMenu = null;
        this.disconnectionMenu = null;
        this._fetch();
    }
    get profile$() {
        return this.currentUser$.pipe(map$1(data => {
            return {
                title: {
                    second: data?.firstName || data?.lastName,
                },
                email: data?.userName,
            };
        }));
    }
    get userLogo$() {
        return this.currentUser$.pipe(map$1(x => {
            if (!x) {
                return null;
            }
            return {
                userInfo: {
                    profilePictureUrl: x.picture,
                    naming: {
                        name: x.firstName || '',
                        firstName: x.lastName || '',
                        trigram: x.trigram || '',
                    },
                },
                size: 'lg',
            };
        }));
    }
    ngAfterViewChecked() {
        this.profileMenu = this.getProfileMenu(this.languageTemplate, this.infosTemplate);
        this.disconnectionMenu = this.getDisconnectionMenu();
    }
    navigateToProfile() {
        this.navigateEvent.emit();
    }
    disconnect() {
        this._authService.logout().then(() => location.reload());
    }
    getProfileMenu(languageTemplate, infosTemplate) {
        const menu = [
            new MenuPanel({
                key: 'language',
                label: 'user.language',
                order: 2,
                template: languageTemplate,
                style: 'dark',
                icon: 'language',
                iconsColor: 'icon-color-icon-tertiary',
                endingIcon: 'arrow-big-right',
            }),
            new MenuPanel({
                key: 'infos',
                label: 'user.infos',
                order: 3,
                template: infosTemplate,
                style: 'dark',
                icon: 'infos',
                iconsColor: 'icon-color-icon-tertiary',
                endingIcon: 'arrow-big-right',
            }),
            new MenuIcon({
                key: 'params',
                label: 'user.params',
                order: 4,
                disabled: true,
                style: 'dark',
                icon: 'label',
                iconsColor: 'icon-color-icon-tertiary',
            }),
        ];
        return new Menu({
            elements: menu.sort((a, b) => a.order - b.order),
            direction: 'vertical',
        });
    }
    getDisconnectionMenu() {
        const menu = [
            new MenuIcon({
                key: 'logout',
                label: 'user.logout',
                order: 4,
                style: 'dark',
                icon: 'log-out',
                iconsColor: 'icon-color-icon-tertiary',
                callback: () => this.disconnect(),
            }),
        ];
        return new Menu({
            elements: menu.sort((a, b) => a.order - b.order),
            direction: 'vertical',
        });
    }
    navigateToEditProfile() {
        this.navigateEditEvent.emit();
    }
    _fetch() {
        this.requestState.asked();
        this._usersService.fetchCurrentUser$().subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyAccountComponent, deps: [{ token: CamUsersService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MyAccountComponent, isStandalone: true, selector: "ta-my-account", inputs: { infosMenu: "infosMenu", appVersion: "appVersion", isEditable: "isEditable" }, outputs: { navigateEvent: "navigateEvent", navigateEditEvent: "navigateEditEvent" }, viewQueries: [{ propertyName: "languageTemplate", first: true, predicate: ["languageTemplate"], descendants: true, static: true }, { propertyName: "infosTemplate", first: true, predicate: ["infosTemplate"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.profile$ | async as profile\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n        <div class=\"bdp-b color-border-primary\">\n          <div class=\"pt-space-xs m-xs\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$ | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n        </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n\n  @if (this.profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"this.profileMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n\n  @if (this.disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"this.disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n<ng-template #languageTemplate>\n  <ta-switch-language></ta-switch-language>\n</ng-template>\n\n<ng-template #infosTemplate>\n  @if (this.infosMenu) {\n    <div class=\"mx-space-sm info-panel\">\n      <ta-menu [menu]=\"this.infosMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n</ng-template>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent$1, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: InlineProfileDataComponent, selector: "ta-inline-profile-data", inputs: ["profile", "userLogo"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: MenuComponent, selector: "ta-menu", inputs: ["menu", "container"] }, { kind: "component", type: SwitchLanguageComponent, selector: "ta-switch-language" }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyAccountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-my-account', standalone: true, imports: [
                        NgIf,
                        AsyncPipe,
                        FontIconComponent,
                        StopPropagationDirective,
                        LoaderComponent$1,
                        ErrorComponent,
                        EmptyComponent,
                        InlineProfileDataComponent,
                        ButtonComponent,
                        MenuComponent,
                        SwitchLanguageComponent,
                        TranslatePipe,
                    ], template: "<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.profile$ | async as profile\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n        <div class=\"bdp-b color-border-primary\">\n          <div class=\"pt-space-xs m-xs\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$ | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n        </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n\n  @if (this.profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"this.profileMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n\n  @if (this.disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"this.disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n<ng-template #languageTemplate>\n  <ta-switch-language></ta-switch-language>\n</ng-template>\n\n<ng-template #infosTemplate>\n  @if (this.infosMenu) {\n    <div class=\"mx-space-sm info-panel\">\n      <ta-menu [menu]=\"this.infosMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n</ng-template>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"] }]
        }], ctorParameters: () => [{ type: CamUsersService }], propDecorators: { infosMenu: [{
                type: Input
            }], appVersion: [{
                type: Input
            }], isEditable: [{
                type: Input
            }], navigateEvent: [{
                type: Output
            }], navigateEditEvent: [{
                type: Output
            }], languageTemplate: [{
                type: ViewChild,
                args: ['languageTemplate', { static: true }]
            }], infosTemplate: [{
                type: ViewChild,
                args: ['infosTemplate', { static: true }]
            }] } });

class UserMyProfileComponent extends TaBaseComponent {
    get currentUser$() {
        return this._userService.currentUser.get$();
    }
    constructor(_userService) {
        super();
        this._userService = _userService;
        this.canModify = true;
        this.modifyAction = new EventEmitter();
        this.mailTo = sendMail;
        this.ctas = [
            {
                icon: 'modify',
                label: 'user.modify',
                callback: () => this._modifyProfile(),
            },
        ];
        this._fetch();
    }
    getFullName(firstName, lastName) {
        return fullName({ firstName: firstName, name: lastName });
    }
    getUserLogo(user) {
        return {
            userInfo: {
                profilePictureUrl: user.picture,
                naming: {
                    name: user.lastName,
                    firstName: user.firstName,
                    trigram: user.trigram,
                },
            },
        };
    }
    _fetch() {
        this.requestState.asked();
        this._userService.fetchCurrentUser$().subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    _modifyProfile() {
        this.modifyAction.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UserMyProfileComponent, deps: [{ token: CamUsersService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UserMyProfileComponent, isStandalone: true, selector: "ta-user-my-profile", inputs: { canModify: "canModify" }, outputs: { modifyAction: "modifyAction" }, usesInheritance: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.currentUser$ | async as currentUser\">\n  <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n    <ta-empty [isEmpty]=\"!currentUser\">\n      @if (currentUser) {\n        <ta-ui-profile-display\n          [label]=\"this.getFullName(currentUser.firstName, currentUser.lastName)\"\n          [ctas]=\"this.canModify ? this.ctas : null\"\n          [userLogo]=\"this.getUserLogo(currentUser)\"\n        >\n          <div class=\"pt-space-xxl\">\n            <div class=\"pt-space-xs align-center\">\n              <ta-title class=\"m-a\" [level]=\"3\">\n                <ta-link (action)=\"this.mailTo(currentUser.userName)\">{{ currentUser.userName }}</ta-link>\n              </ta-title>\n            </div>\n            <div class=\"pt-space-xs align-center\">\n              <ta-title class=\"m-a\" [level]=\"3\">\n                {{ currentUser.phoneNumber }}\n              </ta-title>\n            </div>\n            @if (currentUser.tenantInformations.length === 1) {\n              <div class=\"align-center\">\n                <ta-title class=\"m-a\" [level]=\"3\">\n                  {{ 'user.clientnumber' | translate }}\n                  {{ currentUser.tenantInformations[0].customerId }}\n                </ta-title>\n              </div>\n            }\n            @if (currentUser.tenantInformations.length > 1) {\n              <div>\n                <div class=\"pt-space-xxl align-center\">\n                  <ta-title class=\"m-a\" [level]=\"3\">\n                    {{ 'user.tenantlisttitle' | translate }}\n                  </ta-title>\n                </div>\n                <div class=\"list\">\n                  <div class=\"tenant-list\">\n                    <ta-list-container>\n                      @for (tenantInformation of currentUser.tenantInformations; track tenantInformation) {\n                        <ta-list-element [withSeparator]=\"false\">\n                          <ta-list-title>\n                            <div>{{ tenantInformation.tenantName }}</div>\n                          </ta-list-title>\n                          <ta-list-extra-information>\n                            @if (tenantInformation.customerId) {\n                              <div class=\"align-center\">\n                                <div class=\"mr-space-sm\">\n                                  {{ tenantInformation.customerId }}\n                                </div>\n                                <!-- <ta-text-to-clipboard [value]=\"tenantInformation.customerId.toString()\" ></ta-text-to-clipboard> -->\n                              </div>\n                            }\n                          </ta-list-extra-information>\n                        </ta-list-element>\n                      }\n                    </ta-list-container>\n                  </div>\n                </div>\n              </div>\n            }\n          </div>\n        </ta-ui-profile-display>\n      }\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n", styles: [".text{font-size:var(--ta-font-key-key-default-size);line-height:var(--ta-font-key-key-default-line);font-weight:var(--ta-font-key-key-default-weight);display:flex;justify-content:center;line-height:32px}.list{display:flex;justify-content:center}.list .tenant-list{min-width:240px}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: ListContainerComponent$1, selector: "ta-list-container" }, { kind: "component", type: ListElementComponent$1, selector: "ta-list-element", inputs: ["withSeparator", "flexColumn"], outputs: ["action"] }, { kind: "component", type: ListTitleComponent$1, selector: "ta-list-title" }, { kind: "component", type: ListExtraInformationComponent, selector: "ta-list-extra-information" }, { kind: "component", type: LoaderComponent$1, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: UiProfileDisplayComponent, selector: "ta-ui-profile-display", inputs: ["label", "userLogo", "ctas", "sideIcon"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UserMyProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-user-my-profile', standalone: true, imports: [
                        NgIf,
                        NgFor,
                        AsyncPipe,
                        TitleComponent,
                        ListContainerComponent$1,
                        ListElementComponent$1,
                        ListTitleComponent$1,
                        ListExtraInformationComponent,
                        LoaderComponent$1,
                        ErrorComponent,
                        EmptyComponent,
                        UiProfileDisplayComponent,
                        LinkComponent,
                        TranslatePipe,
                    ], template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.currentUser$ | async as currentUser\">\n  <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n    <ta-empty [isEmpty]=\"!currentUser\">\n      @if (currentUser) {\n        <ta-ui-profile-display\n          [label]=\"this.getFullName(currentUser.firstName, currentUser.lastName)\"\n          [ctas]=\"this.canModify ? this.ctas : null\"\n          [userLogo]=\"this.getUserLogo(currentUser)\"\n        >\n          <div class=\"pt-space-xxl\">\n            <div class=\"pt-space-xs align-center\">\n              <ta-title class=\"m-a\" [level]=\"3\">\n                <ta-link (action)=\"this.mailTo(currentUser.userName)\">{{ currentUser.userName }}</ta-link>\n              </ta-title>\n            </div>\n            <div class=\"pt-space-xs align-center\">\n              <ta-title class=\"m-a\" [level]=\"3\">\n                {{ currentUser.phoneNumber }}\n              </ta-title>\n            </div>\n            @if (currentUser.tenantInformations.length === 1) {\n              <div class=\"align-center\">\n                <ta-title class=\"m-a\" [level]=\"3\">\n                  {{ 'user.clientnumber' | translate }}\n                  {{ currentUser.tenantInformations[0].customerId }}\n                </ta-title>\n              </div>\n            }\n            @if (currentUser.tenantInformations.length > 1) {\n              <div>\n                <div class=\"pt-space-xxl align-center\">\n                  <ta-title class=\"m-a\" [level]=\"3\">\n                    {{ 'user.tenantlisttitle' | translate }}\n                  </ta-title>\n                </div>\n                <div class=\"list\">\n                  <div class=\"tenant-list\">\n                    <ta-list-container>\n                      @for (tenantInformation of currentUser.tenantInformations; track tenantInformation) {\n                        <ta-list-element [withSeparator]=\"false\">\n                          <ta-list-title>\n                            <div>{{ tenantInformation.tenantName }}</div>\n                          </ta-list-title>\n                          <ta-list-extra-information>\n                            @if (tenantInformation.customerId) {\n                              <div class=\"align-center\">\n                                <div class=\"mr-space-sm\">\n                                  {{ tenantInformation.customerId }}\n                                </div>\n                                <!-- <ta-text-to-clipboard [value]=\"tenantInformation.customerId.toString()\" ></ta-text-to-clipboard> -->\n                              </div>\n                            }\n                          </ta-list-extra-information>\n                        </ta-list-element>\n                      }\n                    </ta-list-container>\n                  </div>\n                </div>\n              </div>\n            }\n          </div>\n        </ta-ui-profile-display>\n      }\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n", styles: [".text{font-size:var(--ta-font-key-key-default-size);line-height:var(--ta-font-key-key-default-line);font-weight:var(--ta-font-key-key-default-weight);display:flex;justify-content:center;line-height:32px}.list{display:flex;justify-content:center}.list .tenant-list{min-width:240px}\n"] }]
        }], ctorParameters: () => [{ type: CamUsersService }], propDecorators: { canModify: [{
                type: Input
            }], modifyAction: [{
                type: Output
            }] } });

class TenantUrlDisplayerComponent extends TaBaseComponent {
    get contactTenantRoute$() {
        return this._usersService.contactTenantRoute.get$();
    }
    constructor() {
        super();
        this.display = 'icon';
        this._usersService = inject(CamUsersService);
    }
    ngOnInit() {
        this._fetch();
    }
    navigateToTenantContact(url) {
        openExternalUrl(url);
    }
    _fetch() {
        this.requestState.asked();
        this._usersService.fetchContactTenantRoute$(this.contactId).subscribe({
            next: () => {
                this.requestState.completed();
            },
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TenantUrlDisplayerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: TenantUrlDisplayerComponent, isStandalone: true, selector: "ta-tenant-url-displayer", inputs: { contactId: "contactId", display: "display" }, usesInheritance: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.contactTenantRoute$ | async as contactTenantRoute\">\n  <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n    @if (this.display === 'icon') {\n      <ta-font-icon\n        [name]=\"'arrow-big-right'\"\n        (click)=\"this.navigateToTenantContact(contactTenantRoute)\"\n      ></ta-font-icon>\n    } @else if (this.display === 'button') {\n      <ta-button [type]=\"'secondary'\" (action)=\"this.navigateToTenantContact(contactTenantRoute)\">\n        <ng-content></ng-content>\n      </ta-button>\n    }\n  </ta-error>\n</ta-loader>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: LoaderComponent$1, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TenantUrlDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-tenant-url-displayer', standalone: true, imports: [AsyncPipe, FontIconComponent, ButtonComponent, LoaderComponent$1, ErrorComponent], template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.contactTenantRoute$ | async as contactTenantRoute\">\n  <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n    @if (this.display === 'icon') {\n      <ta-font-icon\n        [name]=\"'arrow-big-right'\"\n        (click)=\"this.navigateToTenantContact(contactTenantRoute)\"\n      ></ta-font-icon>\n    } @else if (this.display === 'button') {\n      <ta-button [type]=\"'secondary'\" (action)=\"this.navigateToTenantContact(contactTenantRoute)\">\n        <ng-content></ng-content>\n      </ta-button>\n    }\n  </ta-error>\n</ta-loader>\n" }]
        }], ctorParameters: () => [], propDecorators: { contactId: [{
                type: Input
            }], display: [{
                type: Input
            }] } });

class GuardComponent extends CamAbstractComponent {
    get noAccessIcon() {
        return CamIconType.NoAccess;
    }
    constructor() {
        super();
        this.canDisplayErrorMessage = true;
        this._permissionsService = inject(CamPermissionsService);
    }
    isGuardValid() {
        return this._permissionsService.canDirectAccess(this.feature, this.level);
    }
    goToLogin() {
        this._router.navigateByUrl(TaRoutes.getUrl([TaMainRoute.USERLOGIN]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: GuardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: GuardComponent, isStandalone: true, selector: "ta-guard", inputs: { level: "level", feature: "feature", canDisplayErrorMessage: "canDisplayErrorMessage" }, usesInheritance: true, ngImport: i0, template: "<div class=\"guard\">\n  @if (this.isGuardValid()) {\n    <div class=\"guard-valid\">\n      <ng-content></ng-content>\n    </div>\n  }\n  @if (!this.isGuardValid() && this.canDisplayErrorMessage) {\n    <div class=\"guard-no-valid ta-c\">\n      <ta-font-icon name=\"close-tool\" size=\"md\"></ta-font-icon>\n      {{ 'container.guard.content' | translate }}\n\n      @if (this.level === 'authenticated') {\n        <ta-button (action)=\"this.goToLogin()\"> Me connecter </ta-button>\n      }\n    </div>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: GuardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-guard', standalone: true, imports: [NgIf, FontIconComponent, ButtonComponent, TranslatePipe], template: "<div class=\"guard\">\n  @if (this.isGuardValid()) {\n    <div class=\"guard-valid\">\n      <ng-content></ng-content>\n    </div>\n  }\n  @if (!this.isGuardValid() && this.canDisplayErrorMessage) {\n    <div class=\"guard-no-valid ta-c\">\n      <ta-font-icon name=\"close-tool\" size=\"md\"></ta-font-icon>\n      {{ 'container.guard.content' | translate }}\n\n      @if (this.level === 'authenticated') {\n        <ta-button (action)=\"this.goToLogin()\"> Me connecter </ta-button>\n      }\n    </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { level: [{
                type: Input
            }], feature: [{
                type: Input
            }], canDisplayErrorMessage: [{
                type: Input
            }] } });

class ContactCardComponent extends TaBaseComponent {
    get user$() {
        return this._usersService.user.get$(this.userId);
    }
    constructor(_usersService) {
        super();
        this._usersService = _usersService;
        this.userId = '';
    }
    ngOnInit() {
        this._fetch();
    }
    getUserLogoData(user) {
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            trigram: user.trigram,
            picture: user.picture,
        };
    }
    _fetch() {
        this.requestState.asked();
        this._usersService.fetchUser$(this.userId).subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactCardComponent, deps: [{ token: CamUsersService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ContactCardComponent, isStandalone: true, selector: "ta-contact-card", inputs: { userId: "userId" }, usesInheritance: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.user$ | async as user\">\n  <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n    <ta-empty [isEmpty]=\"!user\">\n      @if (user) {\n        <ta-user-logo class=\"user-logo\" [user]=\"this.getUserLogoData(user)\"></ta-user-logo>\n      }\n      <div class=\"contact-name\">{{ user?.firstName }} {{ user?.lastName }}</div>\n      <div class=\"contacts align-center\">\n        <div class=\"phone align-center\">\n          <ta-font-icon class=\"mr-space-xs\" name=\"phone\"></ta-font-icon>\n          {{ user?.phoneNumber }}\n        </div>\n        <div class=\"mail align-center\">\n          <ta-font-icon class=\"mr-space-xs\" name=\"mail\"></ta-font-icon>\n          {{ user?.userName }}\n        </div>\n      </div>\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n", styles: [".contact-name{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.user-logo{display:flex;padding-bottom:var(--ta-space-xs)}.contacts{padding-top:var(--ta-space-sm);gap:var(--ta-space-xl)}ta-font-icon{color:var(--ta-icon-brand-primary)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LoaderComponent$1, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["userInfo", "user", "size", "forcedSize", "defaultType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-contact-card', standalone: true, imports: [NgIf, AsyncPipe, FontIconComponent, LoaderComponent$1, ErrorComponent, EmptyComponent, UserLogoComponent], template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.user$ | async as user\">\n  <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n    <ta-empty [isEmpty]=\"!user\">\n      @if (user) {\n        <ta-user-logo class=\"user-logo\" [user]=\"this.getUserLogoData(user)\"></ta-user-logo>\n      }\n      <div class=\"contact-name\">{{ user?.firstName }} {{ user?.lastName }}</div>\n      <div class=\"contacts align-center\">\n        <div class=\"phone align-center\">\n          <ta-font-icon class=\"mr-space-xs\" name=\"phone\"></ta-font-icon>\n          {{ user?.phoneNumber }}\n        </div>\n        <div class=\"mail align-center\">\n          <ta-font-icon class=\"mr-space-xs\" name=\"mail\"></ta-font-icon>\n          {{ user?.userName }}\n        </div>\n      </div>\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n", styles: [".contact-name{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.user-logo{display:flex;padding-bottom:var(--ta-space-xs)}.contacts{padding-top:var(--ta-space-sm);gap:var(--ta-space-xl)}ta-font-icon{color:var(--ta-icon-brand-primary)}\n"] }]
        }], ctorParameters: () => [{ type: CamUsersService }], propDecorators: { userId: [{
                type: Input
            }] } });

class SwitchLanguageCtaComponent {
    constructor() {
        this.translateService = inject(CamTranslationService);
        this.activeLanguage = this.translateService.getLanguage();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchLanguageCtaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SwitchLanguageCtaComponent, isStandalone: true, selector: "ta-switch-language-cta", ngImport: i0, template: "<div [matMenuTriggerFor]=\"menu\" class=\"flex-start g-space-sm c-pointer\">\n  {{ this.activeLanguage.toLocaleUpperCase() }}\n  <ta-font-icon name=\"arrow-big-bottom\"></ta-font-icon>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  <ta-switch-language></ta-switch-language>\n</mat-menu>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: SwitchLanguageComponent, selector: "ta-switch-language" }, { kind: "directive", type: MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchLanguageCtaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-switch-language-cta', standalone: true, imports: [FontIconComponent, MatMenu, SwitchLanguageComponent, MatMenuTrigger], template: "<div [matMenuTriggerFor]=\"menu\" class=\"flex-start g-space-sm c-pointer\">\n  {{ this.activeLanguage.toLocaleUpperCase() }}\n  <ta-font-icon name=\"arrow-big-bottom\"></ta-font-icon>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  <ta-switch-language></ta-switch-language>\n</mat-menu>\n" }]
        }] });

class ContactScopeInterceptor {
    constructor(graphQlConfig, _userService) {
        this.graphQlConfig = graphQlConfig;
        this._userService = _userService;
        this._applicationConfig = inject(APPLICATION_CONFIG);
    }
    intercept(req, next) {
        if (req.url.endsWith('.json')) {
            return next.handle(req);
        }
        if (!this._applicationConfig.isCustomerApplication) {
            return next.handle(req);
        }
        if (!this.graphQlConfig?.config?.url ||
            !req.url.startsWith(this.graphQlConfig?.config?.url) ||
            req.url.endsWith('user')) {
            return next.handle(req);
        }
        if (this.graphQlConfig?.config?.visitor && req.url.startsWith(this.graphQlConfig?.config?.visitor)) {
            return next.handle(req);
        }
        return this._setContactToHeader(req, next);
    }
    _setContactToHeader(req, next) {
        const contactIds = this._userService.currentUserContactIds.get()?.join(';') ?? '';
        const contactIdsRequest = req.clone({
            headers: req.headers.set('ContactIds', contactIds),
        });
        return next.handle(contactIdsRequest);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactScopeInterceptor, deps: [{ token: GRAPHQL_SERVER_CONFIG, optional: true }, { token: CamUsersService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactScopeInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactScopeInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRAPHQL_SERVER_CONFIG]
                }] }, { type: CamUsersService }] });

class CamTranslationUser extends CamLazyTranslationService {
    constructor() {
        super('user');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationUser, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationUser, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationUser, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamUserModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { LoginCardComponent, MenuUserComponent, MyAccountComponent } from '@ta/library-name';
 */
class CamUserModule {
    constructor() {
        CamTranslationUser.getInstance();
    }
    static forRoot() {
        return {
            ngModule: CamUserModule,
            providers: [
                {
                    provide: DEFAULT_USER_LANGUAGE,
                    deps: [CamUsersService],
                    useFactory: (usersService) => usersService.currentUser.get()?.culture ?? Culture.FR_BE,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ContactScopeInterceptor,
                    multi: true,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, imports: [CamUiModule, CamCardModule, CamDirectivePipeModule, CamFormInputsModule, CommonModule, CamMenuModule, CamIconsModule, CamListModule, CamContainerModule, MatMenuModule, TranslatePipe, LoginCardComponent, MenuUserComponent, MyAccountComponent, GuardComponent, LoginRedirectComponent, TenantUrlDisplayerComponent, ContactCardComponent, SwitchLanguageComponent, SwitchLanguageCtaComponent, UserMyProfileComponent], exports: [LoginCardComponent,
            MenuUserComponent,
            MyAccountComponent,
            GuardComponent,
            LoginRedirectComponent,
            TenantUrlDisplayerComponent,
            ContactCardComponent,
            SwitchLanguageCtaComponent,
            UserMyProfileComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, imports: [CamUiModule, CamCardModule, CamDirectivePipeModule, CamFormInputsModule, CommonModule, CamMenuModule, CamIconsModule, CamListModule, CamContainerModule, MatMenuModule, LoginCardComponent, MenuUserComponent, MyAccountComponent, GuardComponent, TenantUrlDisplayerComponent, ContactCardComponent, SwitchLanguageComponent, SwitchLanguageCtaComponent, UserMyProfileComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CamUiModule, CamCardModule, CamDirectivePipeModule, CamFormInputsModule, CommonModule, CamMenuModule, CamIconsModule, CamListModule, CamContainerModule, MatMenuModule, TranslatePipe, LoginCardComponent, MenuUserComponent, MyAccountComponent, GuardComponent, LoginRedirectComponent, TenantUrlDisplayerComponent, ContactCardComponent, SwitchLanguageComponent, SwitchLanguageCtaComponent, UserMyProfileComponent],
                    exports: [
                        LoginCardComponent,
                        MenuUserComponent,
                        MyAccountComponent,
                        GuardComponent,
                        LoginRedirectComponent,
                        TenantUrlDisplayerComponent,
                        ContactCardComponent,
                        SwitchLanguageCtaComponent,
                        UserMyProfileComponent,
                    ],
                    providers: [],
                }]
        }], ctorParameters: () => [] });

const apiRoutes = {
    GetUserProfile: {
        type: 'GET',
        url: '{ApiUrl}/UserProfile',
    },
};
class CamAuth0Service extends CamAuthService {
    get trigram() {
        return trigram(this.user$.value?.nickname);
    }
    get firstLetter() {
        const name = this.user$.value?.nickname;
        if (!name) {
            return '-';
        }
        return name[0].toUpperCase();
    }
    get userProfile$() {
        return this.userService.userProfile$;
    }
    constructor(auth, userService, configurationService) {
        super(apiRoutes);
        this.auth = auth;
        this.userService = userService;
        this.configurationService = configurationService;
        this.auth.user$
            .pipe(filter(isNonNullable), distinct(user => user?.sub), tap(user => this.user$.next(user || null)), tap(user => {
            Logger.LogInfo('user info', user);
            if (user) {
                this._permissionsService.set({
                    permissions: user['merlinsoftware/permissions'],
                    roles: user['merlinsoftware/roles'],
                    features: user['merlinsoftware/features'],
                }, true);
                configurationService.set(user);
                this.fetchUserProfile().subscribe();
            }
        }))
            .subscribe();
        this.auth.error$
            .pipe(tap(errors => {
            Logger.LogError('[USERSERVICE] error on authentication', errors);
        }))
            .subscribe();
        this.auth.appState$
            .pipe(tap(state => {
            Logger.LogInfo('[USERSERVICE] state', state);
        }))
            .subscribe();
        this.auth.isAuthenticated$
            .pipe(tap(isAuthenticated => {
            this._serverService.isAuthenticated = isAuthenticated;
            if (isAuthenticated) {
                this._permissionsService.setSilentAuthenticated(isAuthenticated);
            }
            else {
                this._permissionsService.setAuthenticated(isAuthenticated);
            }
        }))
            .subscribe();
    }
    fetchUserProfile() {
        return this.userService.fetchUserProfile();
    }
    load() { }
    login() {
        this.auth.loginWithRedirect();
    }
    logout() {
        return new Promise(resolve => {
            this.auth.logout();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuth0Service, deps: [{ token: AuthService }, { token: CamUserService }, { token: CamConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuth0Service, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuth0Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$2.AuthService, decorators: [{
                    type: Inject,
                    args: [AuthService]
                }] }, { type: CamUserService, decorators: [{
                    type: Inject,
                    args: [CamUserService]
                }] }, { type: i3.CamConfigurationService, decorators: [{
                    type: Inject,
                    args: [CamConfigurationService]
                }] }] });

const provideAuth0 = (data) => [
    provideAuth0$1(data.config),
    { provide: CAM_AUTH_TOKEN, useClass: CamAuth0Service },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true,
    },
];

/*
 * Public API Surface of users
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthGuard, CAM_AUTH_TOKEN, CamAuthService, CamContactService, CamFunctionsFormService, CamFunctionsService, CamPermissionsService, CamUserModule, CamUserService, CamUsersService, ContactCardComponent, EFunctionFormFields, FeatureGuard, GuardComponent, LoginCardComponent, LoginRedirectComponent, MenuUserComponent, MyAccountComponent, Permissions, PermissionsCore, SwitchLanguageCtaComponent, TenantUrlDisplayerComponent, UserMyProfileComponent, cachedQueryName, contactProps, functionProps, provideAuth0, roleProps, userProps };
//# sourceMappingURL=ta-user.mjs.map
