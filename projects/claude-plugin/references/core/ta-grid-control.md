# `<ta-grid-control>` — `TaGridControlComponent`
**Quand l'utiliser** : Barre de contrôle de la grille : boutons switch vue, ouverture filtres, sélection de preset.
**Template canonique** :
```html
<ta-grid-control
  [gridId]="'my-entity-grid'"
  [show]="{ switchView: true, filters: true, preset: true }">
</ta-grid-control>
```
**Inputs** :
- `gridId: string` (required) — identifiant partagé
- `show: { switchView?: boolean; filters?: boolean; preset?: boolean }` — contrôles à afficher

**Notes** : Sur mobile, bascule automatiquement en vue carte. Ouvre les filtres dans une modale (`ta-grid-filters-modal`). Les presets sont définis dans `ta-grid-container`.
