# `<ta-grid-search>` — `TaGridSearchComponent`
**Quand l'utiliser** : Champ de recherche textuelle liée à la grille.
**Template canonique** :
```html
<ta-grid-search
  [gridId]="'my-entity-grid'"
  [placeholder]="'grid.search.placeholder'"
  [outOfBox]="false">
</ta-grid-search>
```
**Inputs** :
- `gridId: string` (required) — identifiant partagé
- `placeholder: string` — clé i18n du placeholder (défaut: `'grid.search.placeholder'`)
- `outOfBox: boolean` — si `true`, persiste le filtre en session (pour navigation retour)

**Notes** : Applique un filtre `like` sur tous les champs `isSearchField: true` des `ColMetaData`.
