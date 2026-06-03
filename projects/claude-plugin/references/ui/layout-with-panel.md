# `<ta-layout-with-panel>` — `LayoutWithPanelComponent`
**Quand l'utiliser** : Layout principal + drawer latéral Material (ouvert/fermé dynamiquement). Voir `_composed/layout-with-panel.md`.
**Template canonique** :
```html
<ta-layout-with-panel [open]="isPanelOpen">
  <div class="main-content"><!-- contenu principal --></div>
  <div drawer><!-- contenu du drawer --></div>
</ta-layout-with-panel>
```
**Inputs** :
- `open` (required) : `boolean` — contrôle l'ouverture du drawer

**Notes** : Basé sur `MatDrawer`. Répond aux changements de `open` via `ngOnChanges`.
