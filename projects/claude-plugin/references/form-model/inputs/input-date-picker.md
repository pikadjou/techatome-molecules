# `InputDatePicker` (extends `InputBase<Date | { start: Date|null; end: Date|null }>`)

**Quand l'utiliser** : Sélection d'une date simple ou d'une plage de dates.

**Champs ajoutés vs `InputBase`** :
- `minDate: Date | null` — date minimum (accepte `"today"` dans la config)
- `maxDate: Date | null` — date maximum (accepte `"today"` dans la config)
- `rangeEnabled: boolean` (défaut : `false`) — active la sélection de plage

**Interface de config** :
```typescript
new InputDatePicker({ key: 'birthdate', label: 'form.birthdate', maxDate: 'today' })
new InputDatePicker({ key: 'period', label: 'form.period', rangeEnabled: true })
```

**Notes** : `controlType = 'datePicker'`. Utilise Angular Material Datepicker. Quand `rangeEnabled: true`, la valeur est `{ start: Date|null, end: Date|null }`.
