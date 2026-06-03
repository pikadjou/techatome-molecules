# `TaAuthService` — service d'authentification abstrait
**Quand l'utiliser** : Implémenter le service d'authentification spécifique à l'application (Auth0, custom, etc.).
**Méthodes abstraites à implémenter** :
- `fetchUserProfile$(): Observable<UserProfile>` — charge le profil
- `load(): void` — initialise l'auth au démarrage
- `login(): void` — lance le flux de connexion
- `signin(): void` — lance le flux d'inscription
- `logout(): Promise<null>` — déconnecte l'utilisateur

**Propriétés** :
- `isAuthenticated$: Observable<boolean>` — état d'auth en observable
- `user$: BehaviorSubject<unknown>` — données brutes de l'utilisateur

**Token** : `TA_AUTH_TOKEN` — à fournir dans les providers avec l'implémentation concrète.
```typescript
{ provide: TA_AUTH_TOKEN, useClass: MyAuth0Service }
```
**Notes** : S'enregistre automatiquement sur `user$` pour charger le profil.
