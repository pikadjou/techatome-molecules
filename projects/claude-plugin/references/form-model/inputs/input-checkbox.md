# `InputCheckBox` (extends `InputBase<boolean>`)

**Quand l'utiliser** : Case à cocher booléenne. Peut aussi être rendu comme un toggle switch.

**Champs ajoutés vs `InputBase`** :
- `toggle?: boolean` — si `true`, `controlType` devient `'toggle'` (rendu différent)

**Interface de config** :
```typescript
new InputCheckBox({ key: 'acceptTerms', label: 'form.acceptTerms', value: false })
new InputCheckBox({ key: 'active', label: 'form.active', toggle: true }) // rendu toggle
```

**Notes** : Valeur initialisée à `false` si non fournie. `controlType = 'checkbox'` (ou `'toggle'` si `toggle: true`). Rendu par `CheckboxComponent` ou `ToggleComponent` selon le `controlType`.
