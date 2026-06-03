# `provideServer()` / `provideStrapi()` — providers applicatifs

**Quand l'utiliser** : Configuration du serveur GraphQL et REST dans le `app.config.ts`.

**Import** : `import { provideServer, provideStrapi } from '@ta/server'`

## `provideServer()`
```typescript
provideServer({
  graphQlConfig?: IGraphConfig;   // config GraphQL Apollo
  restConfig?: IRestConfig;       // config REST
  notificationHandler?: (message: string, code: number) => void;
})
```

**Usage dans `app.config.ts`** :
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideServer({
      graphQlConfig: {
        url: environment.graphqlUrl,
        visitor: environment.graphqlVisitorUrl, // optionnel
      },
      restConfig: {
        serverUrl: environment.apiUrl,
        pendindRequestId: 5,  // nb max requêtes simultanées
        apiExt: '/api',       // optionnel
      },
      notificationHandler: (message, code) => {
        inject(TaNotificationService).addNotification(message, code);
      }
    }),
  ]
};
```

## `provideStrapi()`
```typescript
provideStrapi({
  strapiConfig: {
    url: environment.strapiUrl,  // URL Strapi GraphQL
    token: environment.strapiToken,
  }
})
```

**Notes** :
- `notificationHandler` connecte automatiquement les erreurs GraphQL au système de notifications
- `TenantInterceptor` est automatiquement ajouté par `provideServer()`
- Importer `ApolloModule` est géré automatiquement
