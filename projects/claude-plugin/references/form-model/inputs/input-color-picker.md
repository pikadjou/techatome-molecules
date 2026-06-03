# `InputColorPicker` (extends `InputTextBox`)

**Quand l'utiliser** : Sélection d'une couleur hexadécimale.

**Champs ajoutés vs `InputTextBox`** : aucun.

**Interface de config** :
```typescript
new InputColorPicker({ key: 'color', label: 'form.color', value: '#FF0000' })
```

**Notes** : `controlType = 'colorPicker'`. La valeur est une chaîne hex (`#RRGGBB`). Rendu par `ColorPickerComponent` (`ta-input-color-picker`).
