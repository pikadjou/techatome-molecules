# `<ta-progress-bar-data>` — `ProgressBarDataComponent`
**Quand l'utiliser** : Barre de progression enrichie avec titre, icône et texte droit (ex: "5/10 tâches").
**Template canonique** :
```html
<ta-progress-bar-data
  [title]="'Progression'"
  [current]="5"
  [max]="10"
  [titleIcon]="'task_alt'"
  [rightText]="{ text: '50%', colorClass: 'text-success' }"
/>
```
**Inputs** :
- `title` (required) : `string` — clé i18n ou texte
- `current` : `number | undefined`
- `max` : `number | undefined`
- `titleIcon` : `string | undefined` — icône Material
- `rightText` : `{ text: string; colorClass?: string } | undefined`
- `description` : `string | undefined` — **déprécié**
