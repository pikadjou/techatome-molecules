import { GraphQueryPayload } from '../graphql/models/graphPayload';
import { CamBaseService } from '../server/baseService';
import { IStrapiConfig } from './config';
import * as i0 from "@angular/core";
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
export declare class CamStrapiService extends CamBaseService {
    private _strapiConfig;
    constructor(_strapiConfig: IStrapiConfig);
    fetchQuery$<T>(payload: GraphQueryPayload, node: string): import("rxjs").Observable<T>;
    fetchQueryList$<T>(payload: GraphQueryPayload, node: string): import("rxjs").Observable<T[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamStrapiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamStrapiService>;
}
