---
description: Assistant contextuel @ta/server — taBaseService, GraphQL, HandleSimpleRequest, HandleComplexRequest, enrichWith
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

- `ServerService` — service HTTP de base (api/requestMap)
- `BaseService` — classe de base pour tous les services HTTP
- `CacheInterceptor` — intercepteur de cache HTTP
- `ErrorService` — gestion centralisée des erreurs HTTP
- `Logger` — service de logging

### GraphQL

- `GraphService` — service Apollo/GraphQL
- `GraphPayload` — modèle de payload GraphQL
- `GraphSchema` — schéma GraphQL
- `GraphEndpoint` — configuration d'endpoint GraphQL
- `GraphConfig` — configuration Apollo
- Helpers : `queries`, `mutations` — utilitaires pour créer des queries/mutations

### Strapi

- Services Strapi pour l'intégration CMS

### DTOs et interfaces

- `KeyValue` — type clé/valeur générique
- Interfaces de requête/réponse HTTP : `interface`, `request`, `response`
- `Token` — gestion des tokens d'authentification

### Helpers

- `handleRequest` — helper pour gérer les requêtes avec gestion d'erreur
- `enrich` — helper pour enrichir les données de requête

### Module et provider

- `ServerModule` — module NgModule (deprecated)
- `provideServer()` — provider standalone

## Patterns d'utilisation

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

  getById(id: number) {
    return this.get<MyData>(`/${id}`);
  }

  create(payload: CreatePayload) {
    return this.post<MyData>('', payload);
  }
}
```

### Utiliser GraphQL

```typescript
import { Injectable } from '@angular/core';

import { gql } from '@apollo/client/core';

import { GraphService } from '@ta/server';
import { queries } from '@ta/server';

const MY_QUERY = gql`
  query MyQuery {
    items {
      id
      name
    }
  }
`;

@Injectable({ providedIn: 'root' })
export class MonGraphService extends GraphService {
  getItems() {
    return this.query<{ items: Item[] }>(MY_QUERY);
  }
}
```

### Utiliser handleRequest

```typescript
import { handleRequest } from '@ta/server';

// Dans un effet NgRx ou un service
getData() {
  return this.monService.getData().pipe(
    handleRequest()
  );
}
```

### Configuration dans app.config.ts

```typescript
import { provideServer } from '@ta/server';

export const appConfig: ApplicationConfig = {
  providers: [provideServer({ baseUrl: environment.apiUrl })],
};
```

## Conventions

- Toujours étendre `BaseService` pour les services HTTP
- Utiliser `handleRequest()` pour la gestion uniforme des erreurs
- Les endpoints dans `BaseService` sont relatifs à `environment.apiUrl`
- Pas d'appel `HttpClient` direct — passer par `BaseService`
- Pour GraphQL : étendre `GraphService`

## Revue de code

- Vérifier que les services étendent `BaseService` (pas `HttpClient` directement)
- Vérifier que `handleRequest()` est utilisé pour la gestion des erreurs
- Vérifier les types de retour (pas de `any` explicite — warning ESLint)
- S'assurer que les intercepteurs de cache sont configurés si besoin
- Vérifier l'ordre des clés dans les objets de configuration (sort-keys)

## Création d'un nouveau service dans @ta/server

1. Créer `projects/server/src/lib/services/mon-service.service.ts`
2. Étendre `BaseService`
3. Exporter depuis `projects/server/src/public-api.ts`
