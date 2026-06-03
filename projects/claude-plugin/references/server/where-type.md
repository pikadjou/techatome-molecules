# `WhereType<T>` — filtres GraphQL HotChocolate

**Quand l'utiliser** : Filtrer les résultats dans une query GraphQL (style HotChocolate).

**Type** :
```typescript
type WhereType<T> = {
  [index in keyof Partial<T>]:
    | WhereType<T[index]>          // filtre imbriqué
    | WhereType<T>[]               // OR/AND
    | { [op: string]: string | string[] | number | boolean | Date | null }
};
```

**Opérateurs disponibles** :
| Opérateur | Utilisation |
|-----------|-------------|
| `eq` | Égalité : `{ id: { eq: '123' } }` |
| `neq` | Différent : `{ status: { neq: 0 } }` |
| `contains` | Contient (string) : `{ name: { contains: 'dupont' } }` |
| `in` | Dans liste : `{ id: { in: ['1', '2', '3'] } }` |
| `nin` | Pas dans liste : `{ status: { nin: [3, 4] } }` |
| `gte` | Supérieur ou égal : `{ date: { gte: new Date() } }` |
| `lte` | Inférieur ou égal : `{ date: { lte: new Date() } }` |
| `gt` | Strictement supérieur |
| `lt` | Strictement inférieur |
| `startsWith` | Commence par (string) |
| `endsWith` | Se termine par (string) |

**Exemples** :
```typescript
// Filtre simple
const where: WhereType<User> = { id: { eq: userId } };

// Filtre combiné
const where: WhereType<Project> = {
  status: { eq: ProjectStatus.InProgress },
  name: { contains: searchTerm }
};

// Filtre sur liste
const where: WhereType<Document> = {
  id: { in: documentIds }
};

// Filtre imbriqué (relation)
const where: WhereType<Visit> = {
  project: { id: { eq: projectId } }
};
```

**Notes** :
- Correspond aux `FilterInput` générés par HotChocolate côté serveur
- Le `prefixType` dans `createQuery` détermine le nom du type GraphQL (`UserFilterInput`)
- Importer depuis `@ta/server`
