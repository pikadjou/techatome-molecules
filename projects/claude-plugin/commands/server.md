---
description: Assistant contextuel @ta/server — TaGraphService, TaServerErrorService, NOTIFICATION_HANDLER_TOKEN, HandleSimpleRequest, HandleComplexRequest, provideServer
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/server — Assistant contextuel

Tu es un expert de la librairie `@ta/server` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/server`
**Import path** : `@ta/server`
**Localisation** : `projects/server/`

## Exports clés

### Services HTTP

- `TaServerService` — service HTTP de base (api/requestMap)
- `BaseService` — classe de base pour tous les services HTTP
- `CacheInterceptor` — intercepteur de cache HTTP
- `TaServerErrorService` — gestion centralisée des erreurs GraphQL, dispatch automatique vers les notifications
- `Logger` — service de logging (`Logger.LogInfo()`, `Logger.LogError()`)

### GraphQL

- `TaGraphService` — service Apollo/GraphQL principal
  - `fetchQueryList<T>(payload, node, context)` — liste
  - `fetchQuery<T>(payload, node, context)` — entité unique
  - `fetchPagedQueryList<T>(payload, node, context)` — liste paginée
  - `fetchQueryBuilder<T>(payload, context)` — query dynamique
  - `mutate<T>(payload, mutationName, context, clearCache?)` — mutation
- `GraphPayload`, `GraphQueryPayload`, `GraphMutationPayload` — modèles de payload
- `GraphEndpoint`, `IGraphConfig` — configuration d'endpoint
- Helpers : `createQuery<T>()`, `createPagedQuery<T>()`

### Strapi

- `TaStrapiService`, `BaseStrapiService` — services Strapi pour CMS

### Bridge erreurs → notifications

- `NOTIFICATION_HANDLER_TOKEN` — `InjectionToken<NotificationHandler>` pour dispatcher les erreurs vers le système de notification
- `NotificationHandler` — type `(message: string, code: number) => void`

### DTOs et interfaces

- `KeyValue` — type clé/valeur générique
- `ServerError` — `{ query, variables, error: ApolloError, errorsMessage: GraphQLFormattedError[] }`
- Interfaces de requête/réponse HTTP

### Helpers

- `HandleSimpleRequest<T>` — gestion d'état pour une entité unique
- `HandleComplexRequest<T>` — gestion d'état pour des entités multiples (keyed)

### Provider

- `provideServer(config)` — provider standalone

## Configuration dans app.config.ts

```typescript
import { provideServer, NOTIFICATION_HANDLER_TOKEN } from '@ta/server';
import { TaNotificationService } from '@ta/notification';

export const appConfig: ApplicationConfig = {
  providers: [
    provideServer({
      graphQlConfig: { url: environment.graphqlUrl },
      restConfig: { url: environment.apiUrl },
      // Option 1 : via provideServer
      notificationHandler: (message, code) => {
        // sera appelé à chaque erreur GraphQL
      },
    }),
    // Option 2 : via provider séparé (recommandé)
    {
      provide: NOTIFICATION_HANDLER_TOKEN,
      useFactory: () => {
        const notifService = inject(TaNotificationService);
        return (message: string, code: number) =>
          notifService.addNotification(message, code);
      },
    },
  ],
};
```

## Gestion des erreurs GraphQL

### Flux complet

```
TaGraphService.fetchQuery/mutate/...
  → catchError(ApolloError)
  → Logger.LogError(...)
  → TaServerErrorService.addError(payload, error)
    → Stocke dans signal notifications()
    → Si NOTIFICATION_HANDLER_TOKEN fourni :
      → Extrait le message user-friendly
      → Dispatch vers TaNotificationService (toast persistant)
    → ErrorBoxModal lit le signal pour afficher les détails
```

### TaServerErrorService

```typescript
// Les erreurs sont stockées dans un signal
const errors = inject(TaServerErrorService).notifications();

// Le service extrait automatiquement :
// 1. Le premier message de networkError.error.errors[]
// 2. Sinon error.message
// 3. Sinon clé de traduction par défaut
```

### Accéder aux détails d'erreur

```typescript
import { openErrorModal } from '@ta/notification';

// Ouvrir la modale de détail des erreurs
openErrorModal(this._matDialog);
```

## Patterns d'utilisation

### Créer un service GraphQL

```typescript
import { Injectable, inject } from '@angular/core';

import { createQuery, TaGraphService, WhereType } from '@ta/server';

const MY_QUERY = createQuery<MyEntity>(`
  myEntities {
    id
    name
    status
  }
`);

@Injectable({ providedIn: 'root' })
export class MyEntityService {
  private _graphService = inject(TaGraphService);

  public fetchAll$(where?: WhereType<MyEntity>) {
    return this._graphService.fetchQueryList<MyEntity>(
      { query: MY_QUERY.query, variables: { where } },
      'myEntities',
      'myGraphEndpoint'
    );
  }
}
```

### Créer un service HTTP

```typescript
import { Injectable } from '@angular/core';

import { BaseService } from '@ta/server';

@Injectable({ providedIn: 'root' })
export class MonService extends BaseService {
  protected override endpoint = '/api/my-resource';

  getData() {
    return this.get<MyData[]>('');
  }

  create(payload: CreatePayload) {
    return this.post<MyData>('', payload);
  }
}
```

## Conventions

- Toujours étendre `BaseService` pour les services HTTP
- Utiliser `TaGraphService` pour toutes les requêtes GraphQL
- `WhereType<T>` pour les filtres : `{ field: { eq/contains/in/neq/gte/lt: value } }`
- `OrderType<T>` pour le tri : `{ field: 'ASC' | 'DESC' }`
- Configurer `NOTIFICATION_HANDLER_TOKEN` pour que les erreurs GraphQL apparaissent en toast
- Les endpoints dans `BaseService` sont relatifs à `environment.apiUrl`
- Pas d'appel `HttpClient` direct — passer par `BaseService`

## Revue de code

- Vérifier que les services étendent `BaseService` (pas `HttpClient` directement)
- Vérifier les types de retour (pas de `any` explicite)
- Vérifier que `NOTIFICATION_HANDLER_TOKEN` est configuré dans l'app
- S'assurer que le `context` passé à `TaGraphService` correspond à un endpoint enregistré
- Vérifier l'ordre des clés dans les objets (sort-keys ESLint)
