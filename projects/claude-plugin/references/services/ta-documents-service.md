# `TaDocumentsService` — gestion des documents

**Quand l'utiliser** : Fetch, cacher et uploader des documents (`DocumentDto`).

**Import** : `import { TaDocumentsService } from '@ta/services'`

**API** :
```typescript
class TaDocumentsService extends TaBaseService {
  public documents: HandleSimpleRequest<DocumentDto[]>;

  // Lecture depuis le cache
  getDocuments(ids: string[]): DocumentDto[] | undefined

  // Lecture réactive depuis le cache
  getDocuments$(ids: string[]): Observable<DocumentDto[]>

  // Fetch depuis GraphQL (endpoint: "document", clientName: "documentService")
  fetchDocuments$(ids: string[]): Observable<DocumentDto[]>

  // Upload via REST (endpoint: {ApiUrl}/Media/upload)
  addDocument$(doc: UploadFilePayloadInput): Subject<DocumentDto>
}
```

**`DocumentDto`** :
```typescript
interface DocumentDto {
  id: string;
  url: string;
  description: string;
  size: number;
  createdDate?: string;
}
```

**`UploadFilePayloadInput`** :
```typescript
interface UploadFilePayloadInput {
  file: File;
}
```

**Usage** :
```typescript
private _documents = inject(TaDocumentsService);

// Fetch et mise en cache
this._registerSubscription(
  this._documents.fetchDocuments$(documentIds).subscribe()
);

// Lecture réactive
this._documents.getDocuments$(documentIds).subscribe(docs => this.docs = docs);

// Upload
this._documents.addDocument$({ file: myFile }).subscribe(doc => console.log(doc.url));
```

**Notes** :
- Les documents fetchés sont dédupliqués par ID (merging intelligent)
- `graphEndpoint.clientName = 'documentService'`, `endpoint = 'document'`
- `documentProps` : `GraphSchema<DocumentDto>(['id', 'url', 'description', 'createdDate', 'size'])`
