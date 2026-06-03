# `TaPermissionsService`
**Quand l'utiliser** : Vérifier les droits d'accès de l'utilisateur connecté (features, rôles, authentification).
**Méthodes** :
- `set(info: GuardInfo | null, isAuthenticated: boolean)` — initialise permissions + authentification en une fois
- `setGuard(info: GuardInfo | null)` — définit features/roles/guards
- `setAuthenticated(isAuthenticated: boolean)` — met à jour le statut d'auth et notifie
- `canAccess$(feature: string, level: Level): Observable<boolean>` — vérifie accès en observable
- `canDirectAccess(feature: string, level: Level): boolean` — vérifie accès synchrone
- `hasRole$(role: string): Observable<boolean>` — vérifie rôle en observable
- `hasRole(role: string): boolean` — vérifie rôle synchrone

**Type** :
```typescript
type Level = 'authenticated' | 'unauthenticated' | 'authorize' | 'administrator';
type GuardInfo = { guards?: string[]; roles?: string[]; features?: string[] };
```

**Notes** : `providedIn: 'root'`. À initialiser au démarrage via `TaAuthService`. Expose `updated$` (Observable) et `isAuthenticated` (boolean).
