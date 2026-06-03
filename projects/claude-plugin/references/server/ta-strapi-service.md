# `TaStrapiService` / `TaBaseStrapiService` — intégration Strapi

**Quand l'utiliser** : Requêtes vers un backend Strapi (CMS headless). Configuré via `provideStrapi()`.

**Import** : `import { TaBaseStrapiService, TaStrapiService } from '@ta/server'`

## `TaStrapiService` — service direct
```typescript
// Méthodes (utilisent le client Apollo "strapi")
fetchQuery$<T>(payload: GraphQueryPayload, node: string): Observable<T>
fetchQueryList$<T>(payload: GraphQueryPayload, node: string): Observable<T[]>
```

## `TaBaseStrapiService` — classe abstraite à étendre
```typescript
abstract class TaBaseStrapiService extends TaBaseService {
  protected _strapiService: TaStrapiService;
}
```

**Usage** :
```typescript
@Injectable({ providedIn: 'root' })
export class TaMyContentService extends TaBaseStrapiService {
  fetchArticles$(lang: string) {
    return this._strapiService.fetchQueryList$<Article>(
      GET_ARTICLES(lang),
      'articles'
    );
  }
}
```

**Notes** :
- Le `clientName` Apollo est toujours `"strapi"` (configuré automatiquement)
- L'authentification Bearer est gérée automatiquement via `provideStrapi({ strapiConfig: { token } })`
- `IStrapiConfig: { url: string; token: string }` — configuré via `provideStrapi()`
