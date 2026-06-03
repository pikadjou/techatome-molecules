# `<ta-progress-circle>` — `ProgressCircleComponent`
**Quand l'utiliser** : Indicateur de progression circulaire (gauge) avec pourcentage.
**Template canonique** :
```html
<ta-progress-circle [progress]="75" [upTitle]="'Complété'" [downTitle]="'sur 100%'" />
```
**Inputs** :
- `progress` : `number` — pourcentage `0-100` (`50` par défaut)
- `upTitle` : `string | undefined` — texte au-dessus du cercle
- `downTitle` : `string | undefined` — texte en-dessous du cercle
