# `<ta-progress-bar>` — `ProgressBarComponent`
**Quand l'utiliser** : Barre de progression simple avec valeur courante et maximum.
**Template canonique** :
```html
<ta-progress-bar [current]="done" [max]="total" />
```
**Inputs** :
- `current` (required) : `number`
- `max` (required) : `number`

**Notes** : Pour un affichage enrichi (titre, icône, texte), utiliser `<ta-progress-bar-data>`.
