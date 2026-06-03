# `OrderType<T>` — tri GraphQL HotChocolate

**Quand l'utiliser** : Trier les résultats d'une query GraphQL.

**Type** :
```typescript
type OrderType<T> = {
  [index in keyof Partial<T>]: 'ASC' | 'DESC';
};
```

**Exemples** :
```typescript
// Tri simple
const order: OrderType<User> = { lastName: 'ASC' };

// Tri dans createQuery
const GET_USERS = createQuery<User>('users', {
  props: 'id firstName lastName',
  order: { createdDate: 'DESC' },
  prefixType: 'User'
});

// Tri sur champ relation
const order: OrderType<Project> = { name: 'ASC' };
```

**Notes** :
- Correspond aux `SortInput` générés par HotChocolate
- Un seul champ de tri à la fois (limitation HotChocolate)
- Le `prefixType` dans `createQuery` détermine le nom : `[UserSortInput!]`
- Importer depuis `@ta/server`
