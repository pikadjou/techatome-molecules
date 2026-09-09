import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { DocumentsListComponent } from "@ta/files-basic";
import { TaDocumentsService } from "@ta/services";
import { TaTestIdDirective } from "@ta/utils";

/** TaDocumentsService factice : renvoie une liste vide sans requête GraphQL. */
const MOCK_DOCUMENTS_SERVICE = {
  documents: { get: () => [], get$: () => of([]), fetch: () => of([]) },
  getDocuments: () => [],
  getDocuments$: () => of([]),
  fetchDocuments$: () => of([]),
};

/**
 * Galerie « documents » @ta/files-basic — `ta-documents-list` avec service mocké.
 * Route: /e2e-harness/documents
 */
@Component({
  standalone: true,
  selector: "app-case-documents",
  imports: [DocumentsListComponent, TaTestIdDirective],
  providers: [{ provide: TaDocumentsService, useValue: MOCK_DOCUMENTS_SERVICE }],
  template: ` <ta-documents-list taTestId="ta-documents-list" [documentsIds]="['1']"></ta-documents-list> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentsCase {}
