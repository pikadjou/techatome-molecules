import { GraphEndpoint, HandleComplexRequest, HandleSimpleRequest, TaBaseService } from '@ta/server';
import { Project } from './dto/project';
import * as i0 from "@angular/core";
export declare class TaProjectsService extends TaBaseService {
    protected _graphEndpoint: GraphEndpoint;
    projects: HandleSimpleRequest<Project[]>;
    project: HandleComplexRequest<Project>;
    projectByContact: HandleComplexRequest<Project[]>;
    constructor();
    getProjectsLightInfo$(ids: string[]): import("rxjs").Observable<Project[]>;
    fetchProjectsByContact$(contactId: string): import("rxjs").Observable<Project[]>;
    fetchProjects$(): import("rxjs").Observable<Project[]>;
    fetchProject$(id: string): import("rxjs").Observable<Project>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaProjectsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaProjectsService>;
}
