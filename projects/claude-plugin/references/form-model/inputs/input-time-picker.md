# `InputTimePicker` (extends `InputTextBox`)

**Quand l'utiliser** : Saisie d'une heure (format HH:mm).

**Champs ajoutés vs `InputTextBox`** : aucun.

**Interface de config** :
```typescript
new InputTimePicker({ key: 'startTime', label: 'form.startTime', value: '09:00' })
```

**Notes** : Force `type = 'time'`, `controlType = 'timePicker'`. Utilise `ngx-material-timepicker` pour le rendu visuel.
