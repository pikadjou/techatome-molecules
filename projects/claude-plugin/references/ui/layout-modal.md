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

**Notes** : Extend `TaBaseComponent`. C'est un contenu, pas un conteneur : il se place dans le `<ta-modal>` d'un `XxxModal extends TaBaseModal<In, Out>` (voir `references/ui/modal.md` et `references/utils/ta-base-modal.md`).
