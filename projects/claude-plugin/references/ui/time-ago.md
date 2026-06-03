# `<ta-time-ago>` — `TimeAgoComponent`
**Quand l'utiliser** : Afficher une date relative ("aujourd'hui", "hier", "il y a 2 jours", ou date formatée).
**Template canonique** :
```html
<ta-time-ago [date]="item.createdAt" />
<ta-time-ago [date]="item.updatedAt" [withHours]="true" />
```
**Inputs** :
- `date` (required) : `string` — date ISO ou parsable
- `withHours` : `boolean` — `false` par défaut — affiche l'heure pour les dates anciennes

**Notes** : Clés i18n : `ui.common.today`, `yesterday`, `tomorrow`, `above` (≤3 jours passés), `ahead` (≤3 jours futurs), `to-date`/`to-date-with-hours`.
