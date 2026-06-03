# `InputTextBox<T = string>` (extends `InputBase<T>`)

**Quand l'utiliser** : Saisie de texte libre sur une ligne. Aussi base pour `InputEmail`, `InputPassword`, `InputNumber`, `InputTimePicker`, `InputColorPicker`.

**Champs ajoutés vs `InputBase`** :
- `type: string` (défaut : `'text'`) — type HTML natif (`text`, `email`, `password`, `number`, `time`…)
- `icon?: string | null` — icône `ta-font-icon` affichée à droite
- `iconClicked?: () => void` — callback au clic sur l'icône
- `step?: string` — pas pour les inputs numériques

**Interface de config** :
```typescript
new InputTextBox({ key: 'name', label: 'form.name', value: '', validators: [Validators.required] })
new InputTextBox({ key: 'amount', label: 'form.amount', type: 'number', icon: 'euro-line' })
```

**Notes** : `controlType = 'textbox'`. Le composant de rendu `TextBoxComponent` gère aussi la visibilité de l'icône et le toggle password.
