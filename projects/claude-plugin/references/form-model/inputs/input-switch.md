# `InputSwitch` (extends `InputBase<unknown>`)

**Quand l'utiliser** : Input dont le type change dynamiquement selon une Observable externe (ex: champ conditionnel selon une sélection).

**Champs ajoutés vs `InputBase`** :
- `matchtype: signal<string>` — type actif (`'textbox'`, `'checkbox'`, `'number'`, `'datePicker'`, `'dropdown'`)

**Interface de config** :
```typescript
new InputSwitch({
  key: 'value', label: 'form.value',
  match: myTypeObservable$ // émet { type: 'textbox', prop: { label: '...' } }
})
```

**Notes** : `controlType = 'switch'`. L'Observable `match` émet `{ type: FactoryInputType; prop: Partial<IInputBase> }` et met à jour les propriétés de l'instance dynamiquement via `Object.assign`.
