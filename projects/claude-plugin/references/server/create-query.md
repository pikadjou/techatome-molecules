# `createQuery<T>()` — créer une query GraphQL typée

**Quand l'utiliser** : Définir une query GraphQL typée pour utilisation avec `TaGraphService`.

**Signature** :
```typescript
function createQuery<T>(name: string, input?: GraphQueryInput<T>): GraphPayload
```

**Paramètres de `GraphQueryInput<T>`** :
- `props: string` — champs à sélectionner dans la query
- `where?: WhereType<T>` — filtre HotChocolate
- `order?: OrderType<T>` — tri
- `take?: number` — limite (défaut: 1000)
- `prefixType?: string` — préfixe pour les types GraphQL générés (ex: `"User"` → `UserFilterInput`)

**Exemples** :
```typescript
// Query simple sans variables
const GET_ALL_USERS = createQuery<User>('users', {
  props: 'id firstName lastName email'
});

// Query avec filtre dynamique
export const GET_USER_BY_ID = (id: string) => createQuery<User>('userById', {
  props: 'id firstName lastName',
  where: { id: { eq: id } },
  prefixType: 'User'
});

// Query avec filtre et tri
export const GET_ACTIVE_USERS = (where?: WhereType<User>) => createQuery<User>('users', {
  props: 'id firstName lastName',
  where,
  order: { lastName: 'ASC' },
  prefixType: 'User'
});
```

**Résultat** : `GraphPayload` avec `{ name, query: gql\`...\`, variables }`

**Notes** :
- Retourner une fonction `(params) => createQuery<T>(...)` pour les queries avec variables
- Utiliser avec `fetchQueryList`, `fetchQuery`, `fetchPagedQueryList` de `TaGraphService`
- `graphQlTake(n)` — helper pour limiter à n résultats
- `graphQlPaginationFields()` — helper pour inclure `pageInfo` + `totalCount`
