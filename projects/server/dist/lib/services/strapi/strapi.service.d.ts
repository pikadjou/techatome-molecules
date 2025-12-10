import { GraphQueryPayload } from "../graphql/models/graphPayload";
import { TaBaseService } from "../server/baseService";
import { IStrapiConfig } from "./config";
import * as i0 from "@angular/core";
export declare class TaStrapiService extends TaBaseService {
    private _strapiConfig;
    constructor(_strapiConfig: IStrapiConfig);
    fetchQuery$<T>(payload: GraphQueryPayload, node: string): import("rxjs").Observable<T & {}>;
    fetchQueryList$<T>(payload: GraphQueryPayload, node: string): import("rxjs").Observable<T[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaStrapiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaStrapiService>;
}
