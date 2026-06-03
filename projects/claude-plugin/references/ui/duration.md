# `<ta-duration>` — `DurationComponent`
**Quand l'utiliser** : Afficher la durée entre deux dates (ex: durée d'un projet, d'une mission).
**Template canonique** :
```html
<ta-duration [startDate]="project.startDate" [endDate]="project.endDate" />
```
**Inputs** :
- `startDate` : `number | string` — timestamp ou chaîne ISO (`Date.now()` par défaut)
- `endDate` : `number | string` — timestamp ou chaîne ISO (`Date.now()` par défaut)

**Notes** : Calcule l'intervalle avec `date-fns`. Affiche années/mois/jours via `PluralTranslatePipe`.
