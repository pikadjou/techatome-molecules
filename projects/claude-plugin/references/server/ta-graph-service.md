# `TaGraphService`

**Quand l'utiliser** : Toutes les opérations GraphQL (queries, mutations). Service central de `@ta/server`.

**Méthodes principales** :
- `fetchQueryList<T>(payload, node, context): Observable<T[]>` — liste non paginée
- `fetchPagedQueryList<T>(payload, node, context): Observable<GraphReponsePaged<T>>` — liste paginée
- `fetchQuery<T>(payload, node, context): Observable<T>` — item unique
- `fetchQueryBuilder<T>(payload, context): Observable<T>` — query builder générique
- `mutate<T>(payload, mutationName, context, clearCache?): Observable<T>` — mutation
- `clearCache(key)` — vider le cache Apollo pour un champ
- `registerGraphEndpoint(endpoint, options?)` — enregistrer un endpoint Apollo

**Paramètres** :
- `payload` : résultat de `createQuery<T>()` — contient `query` (gql), `variables`, `name`
- `node` : nom du champ racine dans la réponse GraphQL (ex: `"users"`, `"userById"`)
- `context` : `clientName` de l'endpoint Apollo (ex: `"userService"`)

**Usage typique dans un service** :
```typescript
// Dans TaBaseService (à étendre)
protected _graphService = inject(TaGraphService);

// Requête liste
this._graphService.fetchPagedQueryList<User>(
  GET_USERS({ where: { active: { eq: true } } }),
  'users',
  'userService'
).pipe(map(data => data.items ?? []));

// Requête item unique
this._graphService.fetchQuery<User>(
  GET_USER_BY_ID(id),
  'userById',
  'userService'
);

// Mutation
this._graphService.mutate<User>(
  { mutation: UPDATE_USER, variables: { input } },
  'updateUser',
  'userService',
  ['users'] // cache keys à vider
);
```

**Notes** :
- Toujours utiliser depuis un service qui étend `TaBaseService` (ou via `inject()`)
- Le `context` correspond au `clientName` de `GraphEndpoint` enregistré via `registerGraphEndpoint()`
- Les erreurs sont gérées automatiquement via `TaServerErrorService`
- `isReady$` : BehaviorSubject indiquant si le service est prêt
