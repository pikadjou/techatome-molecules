import { isNonNullable, ObjectKeys, APPLICATION_CONFIG, isURL, newId } from '@ta/utils';
import { BehaviorSubject, filter, tap, map, Subject, switchMap, catchError, throwError, take, of, share } from 'rxjs';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClient, HttpResponse, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import * as i0 from '@angular/core';
import { InjectionToken, Inject, Optional, Injectable, signal, inject, importProvidersFrom, NgModule } from '@angular/core';
import { ApolloLink, InMemoryCache, ApolloClient } from '@apollo/client/core';
import { print } from 'graphql';
import * as i1$1 from 'apollo-angular/http';
import * as i2 from 'apollo-angular';
import { ApolloModule } from 'apollo-angular';
export { gql as Apollo_gql } from 'apollo-angular';
import { differenceInMinutes } from 'date-fns';
import { CommonModule } from '@angular/common';

class GraphSchema {
    constructor(_fields) {
        this._fields = _fields;
    }
    get(field) {
        return this._fields.find((x) => x === field);
    }
}

const keyValueProps = new GraphSchema(['key', 'value']);

class HandleComplexRequest {
    constructor() {
        this.data$ = new BehaviorSubject({});
    }
    fetch(id, subscriber) {
        return subscriber.pipe(filter(data => !!data), tap(entity => {
            const entities = this.data$.getValue();
            entities[id] = entity;
            this.data$.next(entities);
        }));
    }
    add(id, item) {
        const entities = this.data$.getValue();
        if (entities[id]) {
            this.update(id, item);
            return;
        }
        entities[id] = item;
        this.data$.next(entities);
    }
    update(id, item, merge = true) {
        const entities = this.data$.getValue();
        if (!entities[id]) {
            return;
        }
        entities[id] = merge ? { ...entities[id], ...item } : item;
        this.data$.next(entities);
    }
    get(key) {
        return this.data$.getValue()[key] ?? null;
    }
    get$(key) {
        return this.data$.pipe(map(data => data[key]), filter(data => !!data));
    }
}
class HandleSimpleRequest {
    constructor() {
        this.data$ = new BehaviorSubject(null);
    }
    fetch(subscriber) {
        return subscriber.pipe(filter(isNonNullable), tap(entity => {
            this.data$.next(entity);
        }));
    }
    get() {
        return this.data$.getValue() ?? null;
    }
    get$() {
        return this.data$.pipe(filter(data => !!data));
    }
}

class Logger {
    static { this.DEBUG = 0; }
    static { this.INFO = 1; }
    static { this.WARNING = 2; }
    static { this.ERROR = 3; }
    static { this.config = { DEBUG: true, DEBUG_LEVEL: Logger.DEBUG }; }
    static LogDebug(message, data) {
        if (data === undefined) {
            data = '';
        }
        if (Logger.config.DEBUG && Logger.DEBUG >= Logger.config.DEBUG_LEVEL) {
            // tslint:disable-next-line:no-console
            console.debug(message, data);
        }
        this._fsLog('log', message, data);
    }
    static LogInfo(message, ...data) {
        if (Logger.config.DEBUG && Logger.INFO >= Logger.config.DEBUG_LEVEL) {
            // tslint:disable-next-line:no-console
            console.info(message, data);
        }
        this._fsLog('info', message, data);
    }
    static LogWarning(message, data) {
        if (data === undefined) {
            data = '';
        }
        if (Logger.config.DEBUG && Logger.WARNING >= Logger.config.DEBUG_LEVEL) {
            console.warn('/!\\ ' + message + ' /!\\', data);
        }
        this._fsLog('warn', message, data);
    }
    static LogError(message, data) {
        if (data === undefined) {
            data = '';
        }
        if (Logger.config.DEBUG && Logger.ERROR >= Logger.config.DEBUG_LEVEL) {
            console.error('/!\\ ' + message + ' /!\\', data);
        }
        this._fsLog('error', message, data);
    }
    static _fsLog(logLevel, message, data) {
        if (window.FS) {
            window.FS.log(logLevel, `${message} | data: ${JSON.stringify(data)}`);
        }
    }
}

class RequestMapCore {
    constructor() {
        this.mappingApi = {};
    }
    register(routes) {
        for (const key in routes) {
            this.mappingApi[key] = routes[key];
        }
    }
    getConfigById(id) {
        return this._getConfigById(id);
    }
    parseUrl(data) {
        return (this._formatUrl(data.serverUrl, data.url, data.request) +
            '' +
            (data.apiExt ?? ''));
    }
    _getConfigById(id) {
        if (this.mappingApi.hasOwnProperty(id)) {
            return this.mappingApi[id];
        }
        Logger.LogError('No Api Configuration found for: ', id);
        return null;
    }
    _formatUrl(serverUrl, url, request) {
        return url.replace(/{(\w+)}/g, function (match, string) {
            if (request.urlData !== null && request.urlData.hasOwnProperty(string)) {
                return request.urlData[string];
            }
            if (request.BrutContent !== null &&
                request.BrutContent.hasOwnProperty(string)) {
                return request.BrutContent[string];
            }
            if (string === 'ApiUrl') {
                return serverUrl;
            }
            return match;
        });
    }
}
const RequestMap = new RequestMapCore();

var StatusReponse;
(function (StatusReponse) {
    StatusReponse[StatusReponse["Unknown"] = 0] = "Unknown";
    StatusReponse[StatusReponse["Successful"] = 200] = "Successful";
    StatusReponse[StatusReponse["NoContent"] = 204] = "NoContent";
    StatusReponse[StatusReponse["Unauthorized"] = 401] = "Unauthorized";
    StatusReponse[StatusReponse["Forbidden"] = 403] = "Forbidden";
    StatusReponse[StatusReponse["Error"] = 500] = "Error";
})(StatusReponse || (StatusReponse = {}));

const SERVER_CONFIG_KEY = new InjectionToken('config_server');
class CamServerSevice {
    get requestInProgressNumber() {
        return this._correlations.length;
    }
    get isAuthenticated() {
        return this._isAuthenticated;
    }
    set isAuthenticated(value) {
        this._isAuthenticated = value;
        if (this._isAuthenticated) {
            this._retryLoginRequired();
        }
    }
    constructor($http, _config) {
        this.$http = $http;
        this._config = _config;
        this._tempLoginRequiredRequest = [];
        this._tempPendingRequest = [];
        this._correlations = [];
        this._isAuthenticated = false;
        this._onPacketReceived = (id, response) => {
            Logger.LogInfo('[SERVER] Api Reponse:', response);
            this._resolveCorrelation(id, response.body);
        };
        this._resolveCorrelation = (corrId, body) => {
            const correlation = this._correlations.find((item) => item.id === corrId);
            if (!correlation) {
                return;
            }
            let content;
            if (typeof body === 'string') {
                try {
                    content = JSON.parse(body);
                }
                catch (error) {
                    content = body;
                }
            }
            else {
                content = body;
            }
            this._resolveResponseStatus(correlation, content);
            this._correlations = this._correlations.filter((item) => item !== correlation);
            if (this.requestInProgressNumber === 0) {
                this._retryPending();
            }
        };
    }
    registerRoutes(routes) {
        RequestMap.register(routes);
    }
    request(request) {
        const subject = new Subject();
        this._send(subject, request);
        return subject;
    }
    retryRequest(list = []) {
        for (const request of list) {
            this._send(request.subject, request.request);
        }
    }
    _send(subject, request) {
        if (!this._config) {
            return;
        }
        // le user doit etre connecté
        if (request.loginRequired === true && this.isAuthenticated === false) {
            this._tempLoginRequiredRequest.push({
                request: request,
                subject: subject,
            });
            return;
        }
        if (this.requestInProgressNumber >= this._config.pendindRequestId) {
            this._tempPendingRequest.push({ request: request, subject: subject });
            return;
        }
        this._addCorrelation(request.id, request, subject);
        this._sendRequest(request);
    }
    _sendRequest(request) {
        if (!this._config) {
            return;
        }
        const requestConfig = RequestMap.getConfigById(request.type);
        if (!requestConfig) {
            return;
        }
        const url = RequestMap.parseUrl({
            serverUrl: this._config.serverUrl,
            url: requestConfig.url,
            request,
            apiExt: this._config.apiExt,
        });
        Logger.LogInfo('[SERVER] Api Request:', url, request);
        switch (requestConfig.type) {
            case 'GET':
                this._get(url, request);
                break;
            case 'POST':
                this._post(url, request);
                break;
            case 'PUT':
                this._put(url, request);
                break;
            case 'PATCH':
                this._patch(url, request);
                break;
            case 'DELETE':
                this._delete(url, request);
                break;
            case 'FILES':
                this._files(url, request);
                break;
            case 'UPDATEFILES':
                this._updateFiles(url, request);
                break;
            default:
                Logger.LogError('[ERROR] Request not send');
        }
    }
    _addCorrelation(corrId, request, sub) {
        this._correlations.push({ id: corrId, request: request, subject: sub });
    }
    _resolveResponseStatus(correlation, content) {
        Logger.LogInfo('[SERVER] Api Reponse content:', content.Status, content.Content);
        switch (content.Status) {
            case StatusReponse.Successful:
            case StatusReponse.NoContent:
                correlation.subject.next(content.Content);
                correlation.subject.complete();
                correlation.subject.unsubscribe();
                break;
            default:
                correlation.subject.error(content.Content);
                correlation.subject.complete();
                correlation.subject.unsubscribe();
        }
    }
    _retryPending() {
        const list = [...this._tempPendingRequest];
        this._tempPendingRequest = [];
        this.retryRequest(list);
    }
    _retryLoginRequired() {
        const list = [...this._tempLoginRequiredRequest];
        this._tempLoginRequiredRequest = [];
        this.retryRequest(list);
    }
    _get(url, request) {
        this.$http
            .get(url, {
            headers: this._headers(),
            params: { cacheTime: request.cacheTime },
        })
            .subscribe({
            next: (response) => {
                this._onPacketReceived(request.id, this._formatReponse(response, 200));
            },
            error: (message) => {
                this._onPacketReceived(request.id, this._formatReponse(message, message.status));
            },
            complete: () => Logger.LogDebug('API GET CLOSE'),
        });
    }
    _post(url, request) {
        this.$http
            .post(url, request.BrutContent, {
            headers: this._headers(),
        })
            .subscribe({
            next: (response) => this._onPacketReceived(request.id, this._formatReponse(response)),
            error: (message) => this._onPacketReceived(request.id, this._formatReponse(message, message.status)),
            complete: () => Logger.LogDebug('API POST CLOSE'),
        });
    }
    _patch(url, request) {
        this.$http
            .patch(url, request.Content, { headers: this._headers() })
            .subscribe({
            next: (response) => this._onPacketReceived(request.id, this._formatReponse(response)),
            error: (message) => this._onPacketReceived(request.id, this._formatReponse(message, message.status)),
            complete: () => Logger.LogDebug('API PATCH CLOSE'),
        });
    }
    _put(url, request) {
        this.$http
            .put(url, request.Content, { headers: this._headers() })
            .subscribe({
            next: (response) => this._onPacketReceived(request.id, this._formatReponse(response)),
            error: (message) => this._onPacketReceived(request.id, this._formatReponse(message, message.status)),
            complete: () => Logger.LogDebug('API PUT CLOSE'),
        });
    }
    _delete(url, request) {
        this.$http
            .delete(url, { headers: this._headers() })
            .subscribe({
            next: (response) => this._onPacketReceived(request.id, this._formatReponse(response)),
            error: (message) => this._onPacketReceived(request.id, this._formatReponse(message, message.status)),
            complete: () => Logger.LogDebug('API DELETE CLOSE'),
        });
    }
    _files(url, request) {
        this.$http
            .post(url, request.BrutContent.files, {
            headers: this._headers({
                contentType: '',
            }),
        })
            .subscribe({
            next: (response) => {
                this._onPacketReceived(request.id, this._formatReponse(response));
            },
            error: (message) => this._onPacketReceived(request.id, this._formatReponse(message, message.status)),
            complete: () => Logger.LogDebug('API DELETE CLOSE'),
        });
    }
    _updateFiles(url, request) {
        this.$http
            .put(url, request.BrutContent.files, {
            headers: this._headers({
                contentType: '',
            }),
        })
            .subscribe({
            next: (response) => {
                this._onPacketReceived(request.id, this._formatReponse(response));
            },
            error: (message) => this._onPacketReceived(request.id, this._formatReponse(message, message.status)),
            complete: () => Logger.LogDebug('API DELETE CLOSE'),
        });
    }
    _formatReponse(response, status = 200) {
        return { body: { Status: status, Content: response } };
    }
    _headers(option) {
        let headers = new HttpHeaders();
        if (option?.contentType !== '') {
            headers = headers.set('Content-Type', option?.contentType ? option?.contentType : 'application/json');
        }
        headers = headers.set('Access-Control-Allow-Origin', this._config?.serverUrl ?? '');
        Logger.LogInfo('[SERVER] Api Request Header:', headers);
        return headers;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerSevice, deps: [{ token: HttpClient }, { token: SERVER_CONFIG_KEY, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerSevice, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerSevice, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.HttpClient, decorators: [{
                    type: Inject,
                    args: [HttpClient]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [SERVER_CONFIG_KEY]
                }] }] });

const GRAPHQL_SERVER_CONFIG = 'config_graphQl_server';

const graphQlTake = (take) => {
    return `take: ${take || 1000}`;
};
const graphQlPaginationFields = () => {
    return `
        pageInfo {
            hasNextPage
            hasPreviousPage
        }
        totalCount
    `;
};

const graphQlUpdateFields = (object) => {
    return { updatedFields: ObjectKeys(object) };
};

class CamServerErrorService {
    constructor() {
        this.notifications = signal([]);
    }
    addError(query, error) {
        this.notifications().push({
            query: print('query' in query ? query.query : query.mutation),
            variables: query.variables,
            error,
            errorsMessage: error.networkError.error.errors,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerErrorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerErrorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerErrorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class CamGraphService {
    constructor(_graphConfig, httpLink, apollo) {
        this._graphConfig = _graphConfig;
        this.httpLink = httpLink;
        this.apollo = apollo;
        this.contactsLoaded$ = new BehaviorSubject(false);
        this.isReady$ = new BehaviorSubject(true);
        this._errorServices = inject(CamServerErrorService);
        this._applicationConfig = inject(APPLICATION_CONFIG);
        this._defaultEndpoint = new ApolloLink((operation, forward) => {
            return forward(operation);
        });
        this._cache = new InMemoryCache();
        //  (<any>window).apolloCache = this._cache;
        this.apollo.client = new ApolloClient({
            cache: this._cache,
            link: this._defaultEndpoint,
        });
    }
    clearCache(key) {
        this._cache.evict({
            fieldName: key,
        });
    }
    fetchQueryList(payload, node, context) {
        return this._getWrapper({ context }).pipe(tap(() => Logger.LogInfo('[GraphQL] [Query] fetchQueryList:', {
            payload,
            node,
            context,
        })), switchMap(() => this.apollo.query(this._setupData(payload, context)).pipe(tap(data => Logger.LogInfo('[GraphQL] [Response] fetchQueryList:', {
            data,
            node,
            context,
        })), filter(response => !!response.data), map(response => response.data[node]), catchError((err) => {
            Logger.LogError('[GraphQL] [Error] fetchQueryList:', {
                payload,
                node,
                context,
                message: err.message,
            });
            //this._errorServices.addError(err);
            return throwError(() => err);
        }), catchError((err) => {
            Logger.LogError('[GraphQL] [Error] fetchPagedQueryList:', {
                payload,
                node,
                context,
                message: err.message,
            });
            this._errorServices.addError(payload, err);
            return throwError(() => err);
        }))), take(1));
    }
    fetchPagedQueryList(payload, node, context) {
        Logger.LogInfo('[GraphQL] [Prepare] fetchPagedQueryList:', {
            payload,
            node,
            context,
        });
        return this._getWrapper({ context }).pipe(tap(() => Logger.LogInfo('[GraphQL] [Query] fetchPagedQueryList:', {
            payload,
            node,
            context,
        })), switchMap(() => this.apollo.query(this._setupData(payload, context)).pipe(tap(data => Logger.LogInfo('[GraphQL] [Response] fetchPagedQueryList:', {
            data,
            node,
            context,
        })), filter(response => !!response.data), map(response => response.data[node]), catchError((err) => {
            Logger.LogError('[GraphQL] [Error] fetchPagedQueryList:', {
                payload,
                node,
                context,
                message: err.message,
            });
            this._errorServices.addError(payload, err);
            return throwError(() => err);
        }))), take(1));
    }
    fetchQuery(payload, node, context) {
        return this._getWrapper({ context }).pipe(tap(() => Logger.LogInfo('[GraphQL] [Query] fetchQuery:', {
            payload,
            node,
            context,
        })), switchMap(() => this.apollo.query(this._setupData(payload, context)).pipe(tap(data => Logger.LogInfo('[GraphQL] [Response] fetchQuery:', {
            data,
            node,
            context,
        })), filter(response => !!response.data), map(data => data.data[node]), catchError((err) => {
            Logger.LogError('[GraphQL] [Error] fetchPagedQueryList:', {
                payload,
                node,
                context,
                message: err.message,
            });
            this._errorServices.addError(payload, err);
            return throwError(() => err);
        }))), take(1));
    }
    mutate(payload, mutationName, context, clearCache) {
        Logger.LogInfo('[GraphQL]  [Prepare] mutate', payload, mutationName);
        return this.apollo.mutate(this._setupData(payload, context)).pipe(tap(data => Logger.LogInfo('[GraphQL] [Reponse] mutate', data)), filter(response => !!response.data), tap(() => clearCache?.forEach(cacheKey => this.clearCache(cacheKey))), map(response => {
            return response.data[mutationName];
        }), catchError((err) => {
            Logger.LogError('[GraphQL] [Error] fetchPagedQueryList:', {
                payload,
                context,
                message: err.message,
            });
            this._errorServices.addError(payload, err);
            return throwError(() => err);
        }));
    }
    registerGraphEndpoint(graphEndpoint, options) {
        const url = options?.visitor === true && this._graphConfig?.visitor ? this._graphConfig?.visitor : this._graphConfig?.url;
        let uri = isURL(graphEndpoint.endpoint) ? graphEndpoint.endpoint : url + graphEndpoint.endpoint;
        const newHttpLink = this.httpLink.create({
            headers: graphEndpoint.headers,
            uri: uri,
        });
        this.apollo.client.setLink(this.apollo.client.link.concat(ApolloLink.split(operation => operation.getContext()['clientName'] === graphEndpoint.clientName, newHttpLink)));
    }
    _setupData(payload, context) {
        return { ...payload, ...{ context: { clientName: context } } };
    }
    _getWrapper(data) {
        if (!this._applicationConfig.isCustomerApplication) {
            return this.isReady$;
        }
        if (data?.context === 'userService') {
            return this.isReady$;
        }
        if (data?.context?.includes('Visitor')) {
            return this.isReady$;
        }
        return this.contactsLoaded$.pipe(filter(loaded => loaded));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamGraphService, deps: [{ token: GRAPHQL_SERVER_CONFIG, optional: true }, { token: i1$1.HttpLink }, { token: i2.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamGraphService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamGraphService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRAPHQL_SERVER_CONFIG]
                }] }, { type: i1$1.HttpLink }, { type: i2.Apollo }] });

class CamBaseService {
    constructor(apiRoutes) {
        this._subscriptionList = [];
        this._serverService = inject(CamServerSevice);
        this._graphService = inject(CamGraphService);
        this.registerRoutes({ apiRoutes });
    }
    registerRoutes(routes, options) {
        if (routes.apiRoutes)
            this._serverService.registerRoutes(routes.apiRoutes);
        if (routes.graphEndpoint)
            this._graphService.registerGraphEndpoint(routes.graphEndpoint, options);
    }
    ngOnDestroy() {
        this._subscriptionList.forEach((subscription) => subscription.unsubscribe());
    }
    _registerSubscription(subscription) {
        this._subscriptionList.push(subscription);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamBaseService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamBaseService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamBaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined }] });

class CacheInterceptor {
    constructor() {
        this.cache = new Map();
    }
    intercept(req, next) {
        if (req.method !== 'GET') {
            return next.handle(req);
        }
        const cacheTime = Number(req.params.get('cacheTime'));
        if (cacheTime === 0) {
            Logger.LogInfo('[SERVER] Api No Cache required', req.url);
            return next.handle(req);
        }
        const cachedResponse = this.cache.get(req.url);
        if (cachedResponse) {
            const diffInMinutes = differenceInMinutes(new Date(), cachedResponse?.timestamp);
            if (cacheTime === -1 || cacheTime > diffInMinutes) {
                Logger.LogInfo('[SERVER] Api Cached response:', req.url, cachedResponse);
                return of(cachedResponse.response.clone());
            }
            else {
                Logger.LogInfo('[SERVER] Api Cached expired', req.url);
            }
        }
        return next.handle(req).pipe(tap((stateEvent) => {
            if (stateEvent instanceof HttpResponse) {
                this.cache.set(req.url, {
                    timestamp: new Date(),
                    response: stateEvent.clone(),
                });
            }
        }), share());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CacheInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CacheInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CacheInterceptor, decorators: [{
            type: Injectable
        }] });

var ECacheStrategy;
(function (ECacheStrategy) {
    ECacheStrategy[ECacheStrategy["Inifity"] = -1] = "Inifity";
    ECacheStrategy[ECacheStrategy["NoCache"] = 0] = "NoCache";
})(ECacheStrategy || (ECacheStrategy = {}));

class Request {
    get Content() {
        return JSON.stringify(this._content);
    }
    get BrutContent() {
        return this._content;
    }
    constructor({ type, content = null, urlData = null, cacheTime = ECacheStrategy.NoCache, loginRequired = true, }) {
        this.id = newId();
        this.type = type;
        this.loginRequired = loginRequired;
        this.cacheTime = cacheTime;
        this.urlData = urlData;
        this._content = content;
    }
}

const STRAPI_SERVER_CONFIG = 'config_strapi_server';

class CamStrapiService extends CamBaseService {
    constructor(_strapiConfig) {
        super();
        this._strapiConfig = _strapiConfig;
        const headers = new HttpHeaders({
            authorization: `Bearer ${this._strapiConfig.token}`,
        });
        super.registerRoutes({
            graphEndpoint: {
                clientName: 'strapi',
                endpoint: this._strapiConfig.url,
                headers: headers,
            },
        });
    }
    fetchQuery$(payload, node) {
        return this._graphService.fetchQuery(payload, node, 'strapi').pipe(filter(isNonNullable), map(data => data.data.attributes));
    }
    fetchQueryList$(payload, node) {
        return this._graphService.fetchQuery(payload, node, 'strapi').pipe(filter(isNonNullable), map(data => data.data.map(data => data.attributes)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiService, deps: [{ token: STRAPI_SERVER_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [STRAPI_SERVER_CONFIG]
                }] }] });

class CamBaseStrapiService extends CamBaseService {
    constructor() {
        super(...arguments);
        this._strapiService = inject(CamStrapiService);
    }
}

const baseStrapiProps = [
    'createdAt',
    'updatedAt',
    'publishedAt',
];

const TENANT_CONFIG_TOKEN = new InjectionToken('TenantConfig');

class TenantInterceptor {
    constructor(tenantConfig, graphQlConfig) {
        this.tenantConfig = tenantConfig;
        this.graphQlConfig = graphQlConfig;
    }
    intercept(req, next) {
        if (this.tenantConfig?.tenantId && this.graphQlConfig?.url && req.url.startsWith(this.graphQlConfig?.url)) {
            const tenantRequest = req.clone({
                headers: req.headers.set('TenantId', this.tenantConfig.tenantId.toString()),
            });
            return next.handle(tenantRequest);
        }
        return next.handle(req);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TenantInterceptor, deps: [{ token: TENANT_CONFIG_TOKEN, optional: true }, { token: GRAPHQL_SERVER_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TenantInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TenantInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TENANT_CONFIG_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRAPHQL_SERVER_CONFIG]
                }] }] });

const provideServer = (data) => [
    importProvidersFrom(ApolloModule),
    {
        provide: GRAPHQL_SERVER_CONFIG,
        useValue: data.graphQlConfig,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TenantInterceptor,
        multi: true,
    },
];
const provideStrapi = (data) => [
    importProvidersFrom(ApolloModule),
    {
        provide: STRAPI_SERVER_CONFIG,
        useValue: data.strapiConfig,
    },
];

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamServerModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ApolloModule } from '@ta/library-name';
 */
class CamServerModule {
    static forRoot(graphQlConfig) {
        return {
            ngModule: CamServerModule,
            providers: [
                {
                    provide: GRAPHQL_SERVER_CONFIG,
                    useValue: graphQlConfig,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TenantInterceptor,
                    multi: true,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamServerModule, imports: [CommonModule, HttpClientModule, ApolloModule], exports: [ApolloModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerModule, providers: [
            CamGraphService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: CacheInterceptor,
                multi: true,
            },
        ], imports: [CommonModule, HttpClientModule, ApolloModule, ApolloModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, HttpClientModule, ApolloModule],
                    exports: [ApolloModule],
                    providers: [
                        CamGraphService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: CacheInterceptor,
                            multi: true,
                        },
                    ],
                }]
        }] });

/*
 * Public API Surface of server
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CacheInterceptor, CamBaseService, CamBaseStrapiService, CamGraphService, CamServerErrorService, CamServerModule, CamServerSevice, CamStrapiService, GRAPHQL_SERVER_CONFIG, GraphSchema, HandleComplexRequest, HandleSimpleRequest, Logger, Request, RequestMap, SERVER_CONFIG_KEY, STRAPI_SERVER_CONFIG, StatusReponse, TENANT_CONFIG_TOKEN, baseStrapiProps, graphQlPaginationFields, graphQlTake, graphQlUpdateFields, keyValueProps, provideServer, provideStrapi };
//# sourceMappingURL=ta-server.mjs.map
