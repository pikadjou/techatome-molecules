import { Injectable } from '@angular/core';

import { CamBaseService, GraphEndpoint, HandleSimpleRequest, MappingApiType, Request } from '@ta/server';
import { isNonNullable, keepUniqueObjectByProperty } from '@ta/utils';
import { filter, map } from 'rxjs';

import { DocumentDto } from './dto/document';
import { UploadFilePayloadInput } from './dto/post/UploadFilePayloadInput';
import { GET_DOCUMENTS } from './queries';

const graphEndpoint: GraphEndpoint = {
  clientName: 'documentService',
  endpoint: 'document',
};

const apiRoutes: MappingApiType = {
  UploadDocument: {
    type: 'FILES',
    url: '{ApiUrl}/document-rest/upload',
  },
};

@Injectable({
  providedIn: 'root',
})
export class CamDocumentsService extends CamBaseService {
  public documents = new HandleSimpleRequest<DocumentDto[]>();

  constructor() {
    super();
    super.registerRoutes({
      apiRoutes: apiRoutes,
      graphEndpoint: graphEndpoint,
    });
  }

  public getDocuments(ids: string[]) {
    return this.documents.get()?.filter(doc => ids.includes(doc.id));
  }

  public getDocuments$(ids: string[]) {
    return this.documents.get$().pipe(map(list => list?.filter(doc => ids.includes(doc.id))));
  }
  public fetchDocuments$(ids: string[]) {
    return this.documents.fetch(
      this._graphService
        .fetchPagedQueryList<DocumentDto>(GET_DOCUMENTS({ ids }), 'documents', graphEndpoint.clientName)
        .pipe(
          map(data => data.items ?? []),
          filter(isNonNullable),
          map(list => [...(list ?? []), ...(this.documents.get() ?? [])]),
          map(list => keepUniqueObjectByProperty(list, item => item.id))
        )
    );
  }

  public addDocument$(doc: UploadFilePayloadInput) {
    const formData = new FormData();
    formData.append('file', doc.file, doc.file.name);

    return this._serverService.request<DocumentDto>(
      new Request({
        type: 'UploadDocument',
        content: {
          files: formData,
        },
      })
    );
  }
}
