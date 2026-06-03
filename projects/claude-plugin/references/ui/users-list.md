# `<ta-users-list>` — `UsersListComponent`
**Quand l'utiliser** : Afficher une liste horizontale d'avatars utilisateurs superposés.
**Template canonique** :
```html
<ta-users-list [users]="users$" />
```
**Inputs** :
- `users` (required) : `Observable<UserLogoData[]>` — flux d'utilisateurs `{ firstname, lastname, picture? }`

**Notes** : Chaque utilisateur est rendu via `<ta-user-logo>`. L'input attend un `Observable` (utiliser `of([...])` si synchrone).
