# `InputSlider` (extends `InputBase<number>`)

**Quand l'utiliser** : Sélection d'une valeur numérique par glissement.

**Champs ajoutés vs `InputBase`** :
- `min: number` (défaut : `0`)
- `max: number` (défaut : `100`)

**Interface de config** :
```typescript
new InputSlider({ key: 'volume', label: 'form.volume', value: 50, min: 0, max: 100 })
```

**Notes** : `controlType = 'slider'`. Rendu par `SliderComponent` (`ta-input-slider`).
