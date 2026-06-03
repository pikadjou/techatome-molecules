# `<ta-layout-flex>` — `LayoutFlexComponent`
**Quand l'utiliser** : Layout multi-panneaux (gauche/centre/droite) avec adaptation mobile automatique.
**Template canonique** :
```html
<ta-layout-flex [allowClose]="false">
  <div left><!-- panneau gauche --></div>
  <div center><!-- panneau central --></div>
  <div right><!-- panneau droit --></div>
</ta-layout-flex>
```
**Inputs** :
- `allowClose` : `boolean` — `false` — permet de fermer des panneaux

**Notes** : Sur mobile (< LG), seul le panneau gauche est visible. Extend `TaBaseComponent`.
