import { inject, Injectable } from '@angular/core';

import { HandleComplexRequest, TaBaseService, TaStrapiService } from '@ta/server';

import { Document, PostDocument } from './dto/document';
import { GET_DOCUMENT, GET_DOCUMENTS } from './queries';
import { ADD_DOCUMENT, DELETE_DOCUMENT, UPDATE_DOCUMENT } from './mutations';
import { AgreementsService } from '../agreements/agreements.service';
import { mergeMap, switchMap } from 'rxjs';
import { Agreement } from '../agreements/dto/agreement';
import { isNonNullable } from '@ta/utils';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService extends TaBaseService {
  protected readonly _strapiService = inject(TaStrapiService);

  private readonly _agreementsService = inject(AgreementsService);

  readonly documentsByCategory = new HandleComplexRequest<Document[]>();
  readonly document = new HandleComplexRequest<Document>();

  constructor() {
    super();
  }

  public fetchDocument$(id: string) {
    return this.document.fetch(id, this._strapiService.fetchQuery$<Document>(GET_DOCUMENT(id), 'doc'));
  }
  public fetchDocuments$(catId: string) {
    return this.documentsByCategory.fetch(
      catId,
      this._strapiService.fetchQueryList$<Document>(GET_DOCUMENTS(catId), 'docs'),
    );
  }

  public addDocument$(document: PostDocument, agreements: Agreement[]) {
    return this._agreementsService
      .addAgreements$(agreements)
      .pipe(
        mergeMap((aggs) =>
          this._strapiService.mutate$<Document>(
            ADD_DOCUMENT({ ...document, ...{ agreements: aggs.map((agg) => agg.documentId ?? '') } }),
            'createDoc',
          ),
        ),
      );
  }

  public updateDocument$(id: string, document: PostDocument, agreements: Agreement[], currentDocument: Document) {
    return this._agreementsService
    .updateAgreements$(currentDocument.agreements ?? [], agreements)
    .pipe(
      mergeMap((arg) => this._strapiService.mutate$<Document>(UPDATE_DOCUMENT(id, {...document, ...{agreements: arg}}), 'updateDoc'))
    );
  }
  public deleteDocument$(id: string, agreements: Agreement[]) {
    return this._agreementsService
    .deleteAgreements$(agreements.map(agg => agg.documentId).filter(isNonNullable))
    .pipe(
      mergeMap(() => this._strapiService.mutate$<Document>(DELETE_DOCUMENT(id), 'deleteDocument')
    ))
  }
}
