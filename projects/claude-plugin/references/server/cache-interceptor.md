# `CacheInterceptor` — cache HTTP pour requêtes REST

**Quand l'utiliser** : Mettre en cache automatiquement les réponses GET REST selon une durée configurée.

**Import** : `import { CacheInterceptor } from '@ta/server'`

**Fonctionnement** :
- Intercepte les requêtes GET
- Cache la réponse en mémoire avec un timestamp
- Sert la réponse cachée si elle n'a pas expiré
- Le paramètre `cacheTime` (minutes) est passé dans la requête

**Configuration dans `app.config.ts`** :
```typescript
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
]
```

**Contrôle du cache via `Request`** :
```typescript
new Request({
  type: 'GetData',
  cacheTime: 5,   // cache 5 minutes
  // cacheTime: 0  → pas de cache
  // cacheTime: -1 → cache permanent (session)
})
```

**Notes** :
- Ne s'applique qu'aux requêtes GET
- Cache stocké en mémoire (perdu au rechargement)
- Ne s'applique pas aux requêtes GraphQL (Apollo gère son propre cache)
