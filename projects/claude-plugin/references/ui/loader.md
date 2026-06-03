# `<ta-loader>` — `LoaderComponent`
**Quand l'utiliser** : Indicateur de chargement (spinner ou skeleton) pendant un appel async. Voir `_composed/container.md`.
**Template canonique** :
```html
<ta-loader [isLoading]="this.requestState.isLoading()">
  <!-- contenu affiché une fois chargé -->
</ta-loader>

<!-- Avec skeleton -->
<ta-loader [isLoading]="loading" [skeleton]="'list'" />
```
**Inputs** :
- `isLoading` : `boolean` — `true` par défaut
- `skeleton` : `PlaceholderConfig | null` — `null` par défaut — config skeleton (`'default'`, `'list'`, etc.)
- `size` : `TaSizes` — `'lg'` par défaut — taille du spinner
- `text` : `string` — clé i18n du message de chargement

**Notes** : Utilise `<ng-content>` pour le contenu affiché quand `isLoading=false`.
