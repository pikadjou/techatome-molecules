# Types GraphQL — `@ta/server`

**Importer depuis** : `@ta/server`

## `GraphReponsePaged<T>`
Résultat d'une query paginée :
```typescript
type GraphReponsePaged<T> = {
  pageInfo?: { hasNextPage: boolean; hasPreviousPage: boolean };
  totalCount: number;
  items?: T[];
};
// Usage: data.items ?? [], data.totalCount
```

## `GraphPayload`
Payload d'une query (produit par `createQuery`) :
```typescript
interface GraphPayload {
  name: string;          // nom de la query
  query: any;            // document gql
  variables: any;        // variables de la query
}
```

## `GraphMutationPayload`
Payload d'une mutation :
```typescript
interface GraphMutationPayload {
  mutation: TypedDocumentNode;
  variables: any;
}
// Usage:
const payload: GraphMutationPayload = {
  mutation: gql`mutation UpdateUser($input: UserInput!) { updateUser(input: $input) { id } }`,
  variables: { input: formData }
};
```

## `GraphQueryInput<T>`
Options pour `createQuery` :
```typescript
interface GraphQueryInput<T> {
  props: string;              // champs à sélectionner
  where?: WhereType<T>;       // filtre
  order?: OrderType<T>;       // tri
  take?: number;              // limite (défaut: 1000)
  prefixType?: string;        // préfixe type GraphQL (ex: "User")
}
```

## `IGraphConfig`
Configuration du serveur GraphQL (dans `provideServer`) :
```typescript
interface IGraphConfig {
  url: string;          // URL principale GraphQL
  visitor?: string;     // URL pour visiteurs non-authentifiés
  local_urls?: { [index: string]: string };
}
```

## `GraphEndpoint`
Configuration d'un endpoint Apollo nommé :
```typescript
interface GraphEndpoint {
  clientName: string;    // identifiant du client Apollo
  endpoint: string;      // chemin relatif ou URL absolue
  headers?: HttpHeaders; // headers supplémentaires (ex: auth Bearer)
}
// Usage:
const graphEndpoint: GraphEndpoint = {
  clientName: 'userService',
  endpoint: 'user'
};
```

## `GraphSchema<T>`
Utilitaire pour lister les champs d'une entité :
```typescript
const userProps = new GraphSchema<User>(['id', 'firstName', 'lastName']);
userProps.get('id'); // → 'id'
// Usage dans query: props: `${userProps.get('id')} ${userProps.get('firstName')}`
```
