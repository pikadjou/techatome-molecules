# `TaServerErrorService` — gestion des erreurs GraphQL

**Quand l'utiliser** : Accéder aux erreurs GraphQL capturées automatiquement, ou afficher des notifications d'erreur.

**Import** : `import { TaServerErrorService } from '@ta/server'`

**API** :
```typescript
class TaServerErrorService {
  public notifications: Signal<ServerError[]>;  // toutes les erreurs capturées

  public addError(
    query: GraphQueryPayload | GraphMutationPayload,
    error: ApolloError
  ): void
}

type ServerError = {
  query: string;
  variables: any;
  error: ApolloError;
  errorsMessage: GraphQLFormattedError[];
};
```

**Usage** :
```typescript
private _errorService = inject(TaServerErrorService);

// Lire les erreurs
const errors = this._errorService.notifications();

// Les erreurs sont ajoutées automatiquement par TaGraphService
// Elles déclenchent aussi le notificationHandler si configuré dans provideServer()
```

**Connexion aux notifications** (dans `provideServer`) :
```typescript
provideServer({
  notificationHandler: (message, code) => {
    inject(TaNotificationService).addNotification(message, code as ENotificationCode);
  }
})
```

**Notes** :
- `TaGraphService` appelle `addError()` automatiquement sur chaque erreur Apollo
- Le `notificationHandler` de `provideServer()` est appelé avec le message d'erreur extrait
- Ne pas utiliser directement dans la plupart des cas — les erreurs sont gérées automatiquement
