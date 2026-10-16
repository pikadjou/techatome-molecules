# `createMutation()` — créer une mutation GraphQL à un argument

**Quand l'utiliser** : Toute mutation dont le champ racine prend un seul argument (le cas HotChocolate
habituel : `createX(payload: CreateXPayloadInput!)`). Évite d'écrire le document `gql` à la main et
porte le `name` que `TaGraphService.mutateBuilder` relit dans la réponse.

**Signature** :
```typescript
function createMutation(name: string, input: GraphMutationInput): GraphMutationBuilderPayload
```

**Paramètres de `GraphMutationInput`** :
- `value: unknown` — la valeur de l'argument (envoyée en variable)
- `argument?: string` — nom de l'argument, défaut `payload`
- `type?: string` — type GraphQL de l'argument ; défaut `<Argument>Input!` si `argument` est donné,
  sinon `<Name>PayloadInput!`
- `props?: string` — champs relus après la mutation, défaut `id` ; `''` pour un résultat scalaire
- `operation?: string` — nom de l'opération, défaut `capitalizeFirstLetter(name)`

**Exemples** :
```typescript
// createUser(payload: CreateUserPayloadInput!) { id }
export const CREATE_USER = (payload: CreateUserInput) => createMutation('createUser', { value: payload });

// registerPushSubscription(input: RegisterPushSubscriptionInput!) { id lastSeenAt }
export function registerPushSubscription(input: PushSubscriptionInput): GraphMutationBuilderPayload {
  return createMutation('registerPushSubscription', {
    argument: 'input',
    props: 'id lastSeenAt',
    type: 'RegisterPushSubscriptionInput!',
    value: input,
  });
}

// unregisterPushSubscription(endpoint: String!) → Boolean, sans sélection
export function unregisterPushSubscription(endpoint: string): GraphMutationBuilderPayload {
  return createMutation('unregisterPushSubscription', { argument: 'endpoint', props: '', type: 'String!', value: endpoint });
}
```

**Résultat** : `GraphMutationBuilderPayload` = `GraphMutationPayload` + `name`.

**Usage dans un service** :
```typescript
this._graphService.mutateBuilder<PushSubscriptionDto>(registerPushSubscription(input), 'webPushService');
```

**Notes** :
- Pour une mutation à plusieurs arguments, rester sur `Apollo_gql` + `GraphMutationPayload` et `mutate()`
- `clearCache` (3e paramètre de `mutateBuilder`) vide les clés Apollo après la mutation
