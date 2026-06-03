# `<ta-grid-tags>` — `TaGridTagsComponent`
**Quand l'utiliser** : Affiche les filtres actifs de la grille sous forme de badges supprimables.
**Template canonique** :
```html
<ta-grid-tags [gridId]="'my-entity-grid'"></ta-grid-tags>
```
**Inputs** :
- `gridId: string` (required) — identifiant partagé

**Notes** : Affiche aussi le groupement actif. Permet de supprimer un filtre individuel ou de tout effacer. Se met à jour automatiquement quand les filtres changent.
