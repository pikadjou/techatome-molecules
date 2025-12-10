import { TranslatedEnumeration } from "@ta/services";
import { Observable } from "rxjs";
export interface UploadDocumentData {
    description?: string;
    documentTypes$: Observable<TranslatedEnumeration[]>;
}
