# `<ta-input-date-picker>` — `DatePickerComponent`

**Quand l'utiliser** : Rendu d'un `InputDatePicker`.

**Usage direct** :
```html
<ta-input-date-picker [input]="myDateInput" [standalone]="true"></ta-input-date-picker>
```

**Notes** : Étend `TaAbstractInputComponent<InputDatePicker>`. Utilise Angular Material Datepicker. En mode range (`rangeEnabled: true`), gère un `FormGroup` interne `{ start, end }` et synchronise la valeur composite. Dépend de `MatDatepickerModule`.
