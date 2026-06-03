# `<ta-hour-date-line>` — `HourDateLineComponent`
**Quand l'utiliser** : Afficher une plage horaire/date (date de début et de fin) formatée.
**Template canonique** :
```html
<ta-hour-date-line [startDate]="event.start" [endDate]="event.end" />
```
**Inputs** :
- `startDate` (required) : `Date | null`
- `endDate` (required) : `Date | null`

**Notes** : Utilise `DatePipe` Angular pour le formatage.
