# `TaServerSevice` — service REST HTTP

**Quand l'utiliser** : Appels REST (upload de fichiers, endpoints non-GraphQL). Accessible via `this._serverService` dans tout service qui étend `TaBaseService`.

**Import** : `import { TaServerSevice } from '@ta/server'` (ou via `TaBaseService`)

**Méthodes** :
```typescript
request<T>(request: Request): Subject<T>   // envoie une requête REST
registerRoutes(routes: MappingApiType): void  // enregistre les routes REST
retryRequest(list: TempRequest[]): void    // rejoue des requêtes en attente
```

**`MappingApiType`** — configuration des routes :
```typescript
const apiRoutes: MappingApiType = {
  UploadDocument: {
    type: 'FILES',    // GET | POST | PUT | PATCH | DELETE | FILES | UPDATEFILES
    url: '{ApiUrl}/Media/upload',
  },
  GetUser: {
    type: 'GET',
    url: '{ApiUrl}/user/:id',
  }
};
```

**`Request`** — objet de requête :
```typescript
new Request({
  type: 'UploadDocument',  // clé dans MappingApiType
  content: { files: formData },
  loginRequired: true,     // optionnel, attend l'authentification
  cacheTime: 5,            // minutes de cache (0 = no cache, -1 = permanent)
})
```

**Usage** :
```typescript
@Injectable({ providedIn: 'root' })
export class TaUserService extends TaBaseService {
  constructor() {
    super();
    super.registerRoutes({ apiRoutes: { UploadAvatar: { type: 'FILES', url: '{ApiUrl}/user/avatar' } } });
  }

  uploadAvatar$(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this._serverService.request<{ url: string }>(
      new Request({ type: 'UploadAvatar', content: { files: formData } })
    );
  }
}
```

**Notes** :
- Préférer GraphQL pour les CRUD. Utiliser REST uniquement pour les uploads ou APIs non-GraphQL
- `IRestConfig` : configuration via `provideServer({ restConfig: { serverUrl, pendindRequestId, apiExt } })`
