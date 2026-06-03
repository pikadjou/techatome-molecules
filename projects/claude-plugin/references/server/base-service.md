# `TaBaseService` — classe de base pour les services applicatifs

**Quand l'utiliser** : Tout service qui effectue des appels GraphQL ou REST doit étendre `TaBaseService`.

**Import** : `import { TaBaseService } from '@ta/server'`

**Classe abstraite** :
```typescript
abstract class TaBaseService implements OnDestroy {
  protected _serverService: TaServerSevice;   // REST
  protected _graphService: TaGraphService;    // GraphQL

  constructor(apiRoutes?: MappingApiType)

  public registerRoutes(
    routes: { apiRoutes?: MappingApiType; graphEndpoint?: GraphEndpoint },
    options?: GraphOptions
  ): void

  protected _registerSubscription(subscription: Subscription): void
  ngOnDestroy(): void  // unsubscribe automatique
}
```

**Usage** :
```typescript
@Injectable({ providedIn: 'root' })
export class TaUserService extends TaBaseService {
  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: { clientName: 'userService', endpoint: 'user' } });
  }

  fetchUsers$() {
    return this._graphService.fetchPagedQueryList<User>(
      GET_USERS(),
      'users',
      'userService'
    ).pipe(map(data => data.items ?? []));
  }
}
```

**Notes** :
- Gère automatiquement le `ngOnDestroy` et le cleanup des subscriptions
- `registerRoutes()` enregistre à la fois les routes REST et les endpoints GraphQL
- Sous-classes utiles : `TaBaseStrapiService` (ajoute `_strapiService`)
