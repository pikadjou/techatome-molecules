import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { BehaviorSubject } from 'rxjs';
import { GraphMutationPayload, GraphQueryPayload } from './models/graphPayload';
import { GraphEndpoint, IGraphConfig } from './public-api';
import * as i0 from "@angular/core";
export type GraphOptions = {
    visitor: boolean;
};
export declare class CamGraphService {
    private _graphConfig;
    private httpLink;
    private apollo;
    contactsLoaded$: BehaviorSubject<boolean>;
    isReady$: BehaviorSubject<boolean>;
    private _errorServices;
    private _applicationConfig;
    private _defaultEndpoint;
    private _cache;
    constructor(_graphConfig: IGraphConfig, httpLink: HttpLink, apollo: Apollo);
    clearCache(key: string): void;
    fetchQueryList<T>(payload: GraphQueryPayload, node: string, context: string): import("rxjs").Observable<T[]>;
    fetchPagedQueryList<T>(payload: GraphQueryPayload, node: string, context: string): import("rxjs").Observable<{
        pageInfo?: import("./models/pageInfo").PageInfo | undefined;
        totalCount: number;
        items?: T[] | undefined;
    }>;
    fetchQuery<T>(payload: GraphQueryPayload, node: string, context: string): import("rxjs").Observable<T>;
    mutate<T>(payload: GraphMutationPayload, mutationName: string, context: string, clearCache?: string[]): import("rxjs").Observable<T>;
    registerGraphEndpoint(graphEndpoint: GraphEndpoint, options?: GraphOptions): void;
    private _setupData;
    private _getWrapper;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamGraphService, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamGraphService>;
}
