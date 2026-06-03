# `<ta-layout-full-panel>` — `LayoutFullPanelComponent`
**Quand l'utiliser** : Panneau latéral pleine hauteur avec titre et bouton fermer.
**Template canonique** :
```html
<ta-layout-full-panel [title]="'Détails'" [width]="'400px'" (closeEvent)="onClose()">
  <!-- contenu du panneau -->
</ta-layout-full-panel>
```
**Inputs** :
- `title` : `string` — `''` par défaut
- `width` : `string` — `'400px'` par défaut

**Outputs** : `(closeEvent)` — clic sur le bouton fermer.
