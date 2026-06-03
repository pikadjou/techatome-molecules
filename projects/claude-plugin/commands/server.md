---
description: Assistant contextuel @ta/server — catalogue compact + pointeurs vers references/server/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/server — Assistant contextuel

Tu es un expert de la librairie `@ta/server` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (service GraphQL, service HTTP, helper, type…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/server/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les signatures de méthodes ou les types.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/server`
- **Import path** : `@ta/server`
- **Localisation** : `projects/server/`

## Catalogue

Format : nom (`Class`) — description courte. Le fichier de référence est `references/server/<name>.md`.

### Services GraphQL

- `TaGraphService` — service Apollo/GraphQL principal (fetchQueryList, fetchQuery, fetchQueryPaged, fetchQueryBuilder, mutate).
- `createQuery<T>()` — helper pour définir une query GraphQL typée.
- `createPagedQuery<T>()` — helper pour une query paginée typée.

### Services HTTP

- `TaServerService` — service HTTP de base.
- `BaseService` — classe de base à étendre pour tous les services HTTP (get, post, put, delete…).
- `CacheInterceptor` — intercepteur de cache HTTP.

### Gestion des erreurs

- `TaServerErrorService` — gestion centralisée des erreurs GraphQL, dispatch vers notifications.
- `NOTIFICATION_HANDLER_TOKEN` — `InjectionToken<NotificationHandler>` pour dispatcher les erreurs vers `@ta/notification`.
- `Logger` — logging (`Logger.LogInfo()`, `Logger.LogError()`).

### Strapi

- `TaStrapiService` / `BaseStrapiService` — services Strapi pour CMS.

### Helpers d'état

- `HandleSimpleRequest<T>` — gestion d'état pour une entité unique.
- `HandleComplexRequest<T>` — gestion d'état pour des entités multiples (keyed).

### Types et interfaces

- `GraphPayload` / `GraphQueryPayload` / `GraphMutationPayload` — modèles de payload.
- `GraphEndpoint` / `IGraphConfig` — configuration d'endpoint.
- `WhereType<T>` — filtres HotChocolate (`{ field: { eq/contains/in/neq/gte/lt: value } }`).
- `OrderType<T>` — tri (`{ field: 'ASC' | 'DESC' }`).
- `ServerError` — `{ query, variables, error: ApolloError, errorsMessage }`.
- `KeyValue` — type clé/valeur générique.

### Provider

- `provideServer(config)` — provider standalone pour `app.config.ts`.

## Conventions

- Toujours étendre `BaseService` pour les services HTTP (pas d'accès direct à `HttpClient`).
- Utiliser `TaGraphService` pour toutes les requêtes GraphQL.
- Configurer `NOTIFICATION_HANDLER_TOKEN` pour que les erreurs GraphQL apparaissent en toast.
- `WhereType<T>` pour les filtres, `OrderType<T>` pour le tri.
- Clés d'objets triées alphabétiquement (`sort-keys` ESLint).
