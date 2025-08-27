import { CamBaseService, HandleSimpleRequest } from '@ta/server';
import { DocumentDto } from './dto/document';
import { UploadFilePayloadInput } from './dto/post/UploadFilePayloadInput';
import * as i0 from "@angular/core";
export declare class CamDocumentsService extends CamBaseService {
    documents: HandleSimpleRequest<DocumentDto[]>;
    constructor();
    getDocuments(ids: string[]): DocumentDto[] | undefined;
    getDocuments$(ids: string[]): import("rxjs").Observable<DocumentDto[] | undefined>;
    fetchDocuments$(ids: string[]): import("rxjs").Observable<DocumentDto[]>;
    addDocument$(doc: UploadFilePayloadInput): import("rxjs").Subject<DocumentDto>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamDocumentsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamDocumentsService>;
}
