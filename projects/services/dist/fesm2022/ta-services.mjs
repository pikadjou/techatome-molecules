import { compare, isNonNullable, keepUniqueObjectByProperty } from '@ta/utils';
import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { map, filter, tap } from 'rxjs/operators';
import { BehaviorSubject, map as map$1, filter as filter$1 } from 'rxjs';
import { TaBaseService, Request, GraphSchema, Apollo_gql, graphQlTake, graphQlPaginationFields, HandleSimpleRequest, HandleComplexRequest } from '@ta/server';

const sortByTranslatedValue = (translated) => {
    return translated.sort((a, b) => compare(a.translatedValue || '', b.translatedValue || '', true));
};

const apiRoutes$1 = {
    GetWontDoReasons: {
        type: 'GET',
        url: '{ApiUrl}/wontdoreason',
    },
    GetWorkerJustifications: {
        type: 'GET',
        url: '{ApiUrl}/workerjustifications',
    },
    GetIncidentTypes: {
        type: 'GET',
        url: '{ApiUrl}/incidenttypes',
    },
    GetAbandonReasons: {
        type: 'GET',
        url: '{ApiUrl}/abandonreasons',
    },
    GetFileTypes: {
        type: 'GET',
        url: '{ApiUrl}/FileTypes',
    },
};
class TaEnumerationService extends TaBaseService {
    constructor() {
        super(apiRoutes$1);
        this.getAbandonReasons$ = new BehaviorSubject([]);
        this.wontDoReasons$ = new BehaviorSubject([]);
        this.incidentTypes$ = new BehaviorSubject([]);
        this.workerJustifications$ = new BehaviorSubject([]);
        this._getFileTypes$ = new BehaviorSubject({});
        this.getFileTypes = (id) => (fileTypeId) => {
            return this._getFileTypes$.getValue()[id].find(document => document.id === fileTypeId);
        };
        this.getFileTypes$ = (id) => this._getFileTypes$.pipe(map(data => data[id]), filter(myData => !!myData), map(fileTypes => sortByTranslatedValue(fileTypes)));
    }
    fetchWontDoReasons$() {
        return this._serverService
            .request(new Request({ type: 'GetWontDoReasons', content: {}, cacheTime: 60 }))
            .pipe(filter(data => !!data), tap(data => {
            this.wontDoReasons$.next(data);
        }));
    }
    fetchWorkerJustifications$() {
        return this._serverService
            .request(new Request({
            type: 'GetWorkerJustifications',
            content: {},
            cacheTime: 60,
        }))
            .pipe(filter(data => !!data), tap(data => {
            this.workerJustifications$.next(data);
        }));
    }
    fetchIncidentTypes$() {
        return this._serverService
            .request(new Request({ type: 'GetIncidentTypes', content: {}, cacheTime: 60 }))
            .pipe(filter(data => !!data), tap(data => {
            this.incidentTypes$.next(data);
        }));
    }
    fetchAbandonReasons() {
        return this._serverService
            .request(new Request({ type: 'GetAbandonReasons', cacheTime: -1 }))
            .pipe(filter(myData => !!myData), map(reasons => sortByTranslatedValue(reasons)), tap(reasons => this.getAbandonReasons$.next(reasons)));
    }
    fetchFileTypes() {
        return this._serverService
            .request(new Request({ type: 'GetFileTypes', cacheTime: -1 }))
            .pipe(filter(myData => !!myData), map(fileTypes => sortByTranslatedValue(fileTypes)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaEnumerationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaEnumerationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaEnumerationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const isMinimizedKey = 'isMinimizedMenu';
class TaSharedMenuService {
    constructor() {
        this.isMinimized$ = new BehaviorSubject(localStorage.getItem(isMinimizedKey) === '1' ? true : false);
        this.isMinimized$.subscribe(isMinimized => localStorage.setItem(isMinimizedKey, isMinimized ? '1' : '0'));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaSharedMenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaSharedMenuService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaSharedMenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const projectProps = new GraphSchema([
    'id',
    'name',
    'status',
    'projectAddress',
    'tenantInformation',
    'projectPictureUrl',
]);

var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Unknown"] = 0] = "Unknown";
    ProjectStatus[ProjectStatus["InProgress"] = 1] = "InProgress";
    ProjectStatus[ProjectStatus["Pending"] = 2] = "Pending";
    ProjectStatus[ProjectStatus["Done"] = 3] = "Done";
    ProjectStatus[ProjectStatus["Cancelled"] = 4] = "Cancelled";
})(ProjectStatus || (ProjectStatus = {}));

const addressProps = new GraphSchema(['id', 'country', 'city', 'postCode', 'street']);

const tenantProps = new GraphSchema(['id', 'tenantId', 'tenantName', 'customerId', 'projectId']);

function GET_MY_PROJECTS(filters) {
    const where = filters?.statusList && filters.statusList.length > 0 ? `where: { status: { in: [${filters.statusList}] } }` : '';
    return {
        query: Apollo_gql `
        query Projects {
          projects(${graphQlTake(filters?.take)}, ${where}) {
            items {
              ${projectProps.get('id')}
              ${projectProps.get('name')}
              ${projectProps.get('status')}
              ${projectProps.get('projectPictureUrl')}
              ${projectProps.get('projectAddress')} {
                ${addressProps.get('city')}
                ${addressProps.get('postCode')}
                ${addressProps.get('street')}
              }
              ${projectProps.get('tenantInformation')} {
                ${tenantProps.get('id')}
                ${tenantProps.get('tenantName')}
                ${tenantProps.get('projectId')}
              }
            }
            ${filters?.take ? graphQlPaginationFields() : ''}
          }
        }
      `,
        variables: {},
    };
}
function GET_PROJECT_BY_ID(id) {
    return {
        query: Apollo_gql `
        query GetProjectById($id: UUID!) {
          projectById(id: $id) {
            ${projectProps.get('id')}
            ${projectProps.get('name')}
            ${projectProps.get('status')}
            ${projectProps.get('projectPictureUrl')}
            ${projectProps.get('projectAddress')} {
              ${addressProps.get('city')}
              ${addressProps.get('postCode')}
              ${addressProps.get('street')}
            }
            ${projectProps.get('tenantInformation')} {
              ${tenantProps.get('id')}
              ${tenantProps.get('tenantName')}
              ${tenantProps.get('projectId')}
            }
          }
        }
      `,
        variables: {
            id: id,
        },
    };
}
function GET_LIGHT_PROJECTS(ids) {
    return {
        query: Apollo_gql `
        query Projects($ids: [UUID]!) {
         projects(where: { id: { in: $ids } }, ${graphQlTake()}) {
            items {
              ${projectProps.get('id')}
              ${projectProps.get('name')}
            }
          }
        }
      `,
        variables: {
            ids: ids,
        },
    };
}
function GET_PROJECTS(where, props) {
    return {
        query: Apollo_gql `
        query Projects {
         projects(${where}, ${graphQlTake()}) {
            items {
              ${props}
            }
          }
        }
      `,
        variables: {},
    };
}

const graphEndpoint$1 = {
    clientName: 'projectService',
    endpoint: 'project',
};
class TaProjectsService extends TaBaseService {
    constructor() {
        super();
        this._graphEndpoint = graphEndpoint$1;
        this.projects = new HandleSimpleRequest();
        this.project = new HandleComplexRequest();
        this.projectByContact = new HandleComplexRequest();
        super.registerRoutes({ graphEndpoint: graphEndpoint$1 });
    }
    getProjectsLightInfo$(ids) {
        return this._graphService
            .fetchPagedQueryList(GET_LIGHT_PROJECTS(ids), 'projects', graphEndpoint$1.clientName)
            .pipe(map$1(data => data.items ?? []));
    }
    fetchProjectsByContact$(contactId) {
        return this.projectByContact.fetch(contactId, this._graphService
            .fetchPagedQueryList(GET_PROJECTS(`where: { contactId: { eq: "${contactId}" } }`, `
              ${projectProps.get('id')}
              ${projectProps.get('name')}
            `), 'projects', graphEndpoint$1.clientName)
            .pipe(map$1(data => data.items ?? [])));
    }
    fetchProjects$() {
        return this.projects.fetch(this._graphService
            .fetchPagedQueryList(GET_MY_PROJECTS(), 'projects', graphEndpoint$1.clientName)
            .pipe(map$1(data => data.items)));
    }
    fetchProject$(id) {
        return this.project.fetch(id, this._graphService.fetchQuery(GET_PROJECT_BY_ID(id), 'projectById', graphEndpoint$1.clientName));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaProjectsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaProjectsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaProjectsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const documentProps = new GraphSchema([
    'id',
    'name',
    'url',
    'fileType',
    'size',
    'description',
    'uploadedDate',
    'tenantId',
    'tenantName',
    'tenantDocumentId',
    'projectId',
]);

var FileType;
(function (FileType) {
    FileType[FileType["Unknown"] = 0] = "Unknown";
    FileType[FileType["PriceOfferVersion"] = 1] = "PriceOfferVersion";
    FileType[FileType["SingleLineDiagram"] = 2] = "SingleLineDiagram";
    FileType[FileType["GRDFolder"] = 3] = "GRDFolder";
    FileType[FileType["ExternalEmail"] = 4] = "ExternalEmail";
    FileType[FileType["Invoice"] = 5] = "Invoice";
    FileType[FileType["PurchaseOrder"] = 6] = "PurchaseOrder";
    FileType[FileType["Checklist"] = 7] = "Checklist";
    FileType[FileType["SignedPriceOffer"] = 8] = "SignedPriceOffer";
    FileType[FileType["ExitVoucher"] = 9] = "ExitVoucher";
    FileType[FileType["Picture"] = 10] = "Picture";
})(FileType || (FileType = {}));

function GET_DOCUMENTS(filters) {
    const where = filters.ids && filters.ids.length > 0
        ? `where: { id: { in: [${filters.ids.map(id => `"${id}"`).join(', ')}] } }`
        : '';
    return {
        query: Apollo_gql `
        query Documents {
          documents(${graphQlTake(filters.take)}, order: { isNew: DESC, uploadedDate: DESC }, ${where}) {
            items {
              ${documentProps.get('id')}
              ${documentProps.get('name')}
              ${documentProps.get('url')}
              ${documentProps.get('projectId')}
              ${documentProps.get('fileType')}
              ${documentProps.get('size')}
              ${documentProps.get('uploadedDate')}
            }
          }
        }
      `,
        variables: {},
    };
}

const graphEndpoint = {
    clientName: 'documentService',
    endpoint: 'document',
};
const apiRoutes = {
    UploadDocument: {
        type: 'FILES',
        url: '{ApiUrl}/document-rest/upload',
    },
};
class TaDocumentsService extends TaBaseService {
    constructor() {
        super();
        this.documents = new HandleSimpleRequest();
        super.registerRoutes({
            apiRoutes: apiRoutes,
            graphEndpoint: graphEndpoint,
        });
    }
    getDocuments(ids) {
        return this.documents.get()?.filter(doc => ids.includes(doc.id));
    }
    getDocuments$(ids) {
        return this.documents.get$().pipe(map$1(list => list?.filter(doc => ids.includes(doc.id))));
    }
    fetchDocuments$(ids) {
        return this.documents.fetch(this._graphService
            .fetchPagedQueryList(GET_DOCUMENTS({ ids }), 'documents', graphEndpoint.clientName)
            .pipe(map$1(data => data.items ?? []), filter$1(isNonNullable), map$1(list => [...(list ?? []), ...(this.documents.get() ?? [])]), map$1(list => keepUniqueObjectByProperty(list, item => item.id))));
    }
    addDocument$(doc) {
        const formData = new FormData();
        formData.append('file', doc.file, doc.file.name);
        return this._serverService.request(new Request({
            type: 'UploadDocument',
            content: {
                files: formData,
            },
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaDocumentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaDocumentsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaDocumentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of services
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FileType, GET_LIGHT_PROJECTS, GET_MY_PROJECTS, GET_PROJECTS, GET_PROJECT_BY_ID, ProjectStatus, TaDocumentsService, TaEnumerationService, TaProjectsService, TaSharedMenuService, documentProps, projectProps, sortByTranslatedValue };
//# sourceMappingURL=ta-services.mjs.map
