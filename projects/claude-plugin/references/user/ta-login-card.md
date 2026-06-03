# `<ta-login-card>` — `LoginCardComponent`
**Quand l'utiliser** : Carte de connexion avec bouton login, à afficher quand l'utilisateur n'est pas authentifié.
**Template canonique** :
```html
<ta-login-card></ta-login-card>
```
**Notes** : Aucun input/output. Appelle automatiquement `TaAuthService.login()` via `TA_AUTH_TOKEN`. Dépend de `provideUser()` dans les providers.
