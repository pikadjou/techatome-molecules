import { Observable } from 'rxjs';

import { TranslatedEnumeration } from '@camelot/services';

export interface UploadDocumentData {
  description?: string;
  documentTypes$: Observable<TranslatedEnumeration[]>;
}
