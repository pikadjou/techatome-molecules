# `<ta-grid-form>` — `TaGridFormComponent`
**Quand l'utiliser** : Formulaire de filtres et groupement pour la grille, généré automatiquement depuis les `ColMetaData`.
**Template canonique** :
```html
<ta-grid-form
  [gridId]="'my-entity-grid'"
  [showTitle]="true"
  [showReset]="true">
</ta-grid-form>
```
**Inputs** :
- `gridId: string` (required) — identifiant partagé
- `showTitle: boolean` — affiche le titre "Filtres" (défaut: `true`)
- `showReset: boolean` — affiche le bouton reset (défaut: `true`)

**Notes** : Génère automatiquement les inputs de filtres via `TaGridFormService` d'après les `ColMetaData`. Inclus dans la modale de `ta-grid-control`.
