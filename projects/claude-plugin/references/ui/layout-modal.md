# `<ta-layout-modal>` — `LayoutModalComponent`
**Quand l'utiliser** : Contenu d'une modale avec en-tête (titre + fermer) et zone scrollable.
**Template canonique** :
```html
<ta-layout-modal [title]="'Éditer'" [style]="'classic'" [showClose]="true" (closeEvent)="onClose()">
  <!-- contenu de la modale -->
</ta-layout-modal>
```
**Inputs** :
- `style` : `ModalStyle` — `'classic'` (défaut) | `'full'` | `'big'` | `'small'`
- `title` : `string` — `''` par défaut
- `showClose` : `boolean` — `true` par défaut

**Outputs** : `(closeEvent)`.

**Notes** : Extend `TaBaseComponent`. Pour ouvrir une modale via service, voir `TaModalComponent`.
