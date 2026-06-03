# `<ta-validation-modal>` — `ValidationModal`
**Quand l'utiliser** : Modale de confirmation oui/non (destructive actions, confirmations critiques).
**Template canonique** :
```html
<ta-validation-modal
  [open]="showConfirm"
  [params]="{ title: 'Confirmer ?', subtitle: 'Cette action est définitive' }"
  (validated)="onYes()"
  (closeEvent)="showConfirm = false"
/>
```
**Inputs** :
- `open` (required) : `boolean`
- `params` : `ModalParameter | undefined` — `{ title?, subtitle? }`

**Outputs** : `(validated)`, `(closeEvent)`.

**Notes** : Sélecteur réel : `ta-validation-modal`. Extend `TaBaseComponent`.
