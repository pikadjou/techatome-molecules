# `InputNumber` (extends `InputTextBox<number>`)

**Quand l'utiliser** : Saisie d'un nombre entier ou décimal.

**Champs ajoutés vs `InputTextBox`** :
- `decimals: number` (défaut : `0`) — nombre de décimales
- `step` calculé automatiquement (`1` si `decimals=0`, `0.1` si `decimals=1`, etc.)

**Interface de config** :
```typescript
new InputNumber({ key: 'quantity', label: 'form.quantity', value: 0 })
new InputNumber({ key: 'price', label: 'form.price', decimals: 2 })
```

**Notes** : Force `type = 'number'`. Les getters `get/set value` castent en `Number`. `controlType = 'textbox'`.
