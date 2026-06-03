# `Logger` — utilitaire de logging

**Quand l'utiliser** : Logging dans les services et composants. Remplace `console.log`.

**Import** : `import { Logger } from '@ta/server'`

**Méthodes statiques** :
```typescript
Logger.LogDebug(message: string, data?: any): void   // niveau DEBUG
Logger.LogInfo(message: string, ...data: any[]): void  // niveau INFO
Logger.LogWarning(message: string, data?: any): void  // niveau WARNING
Logger.LogError(message: string, data?: any): void   // niveau ERROR
```

**Configuration** :
```typescript
Logger.config = { DEBUG: true, DEBUG_LEVEL: Logger.DEBUG }; // tout afficher
Logger.config = { DEBUG: false, DEBUG_LEVEL: Logger.ERROR }; // prod: erreurs uniquement
```

**Niveaux** : `Logger.DEBUG (0)` < `Logger.INFO (1)` < `Logger.WARNING (2)` < `Logger.ERROR (3)`

**Usage** :
```typescript
Logger.LogInfo('[UserService] fetchUsers:', { count: users.length });
Logger.LogError('[UserService] fetchUsers failed:', error);
Logger.LogWarning('[UserService] No data returned');
```

**Notes** :
- Préfixer le message avec `[NomDuService]` pour faciliter le filtrage
- Intègre FullStory (`window.FS`) si disponible
- Utiliser dans les `tap()` et `catchError()` des observables GraphQL
