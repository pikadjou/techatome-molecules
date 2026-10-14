import { InputBase } from "@ta/form-model";
import { UploadDocumentData } from "./upload-document-data";
import * as i0 from "@angular/core";
export declare class TaUploadDocumentFormService {
    constructor();
    getGroupForm(data: UploadDocumentData): InputBase<any>[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TaUploadDocumentFormService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaUploadDocumentFormService>;
}
/** @deprecated utiliser TaUploadDocumentFormService */
export { TaUploadDocumentFormService as UploadDocumentFormService };
