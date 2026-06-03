# `<ta-error>` — `ErrorComponent`
**Quand l'utiliser** : État d'erreur d'un chargement avec message et bouton réessayer. Voir `_composed/container.md`.
**Template canonique** :
```html
<ta-error [message]="errorMsg" [code]="500" [showRetry]="true" (retry)="reload()" />
```
**Inputs** :
- `message` : `string` — `''` par défaut
- `code` : `number` — code HTTP (`200` par défaut)
- `showRetry` : `boolean` — `true` par défaut
- `retryLabel` : `string` — clé i18n (`'ui.container.error.retry'` par défaut)

**Outputs** : `(retry)`.
