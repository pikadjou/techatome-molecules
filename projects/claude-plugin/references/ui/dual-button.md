# `<ta-dual-button>` — `DualButtonComponent`
**Quand l'utiliser** : Deux boutons côte à côte (ex: Annuler / Confirmer) avec callbacks intégrés.
**Template canonique** :
```html
<ta-dual-button
  [first]="{ icon: 'close', label: 'ui.cancel', callback: onCancel }"
  [second]="{ icon: 'check', label: 'ui.confirm', callback: onConfirm }"
  [type]="'primary'"
/>
```
**Inputs** :
- `first` (required) : `DualButtonInput` — `{ icon, label, callback }`
- `second` (required) : `DualButtonInput` — `{ icon, label, callback }`
- `type` : `'primary'` (défaut) | `'secondary'`
- `isFull` : `boolean` — pleine largeur (`false` par défaut)

**Notes** : `label` est une clé i18n traduite automatiquement.
