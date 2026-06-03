# `<ta-badge>` — `BadgeComponent`
**Quand l'utiliser** : Afficher un statut coloré avec un libellé court (label de catégorie, état, tag sémantique).
**Template canonique** :
```html
<ta-badge [value]="'Actif'" [type]="'success'" />
<ta-badge [value]="'Erreur'" [type]="'danger'" [icon]="'error'" />
```
**Inputs** :
- `value` (required) : `string` — texte affiché
- `type` : `BadgeType` — `'primary'` (défaut) | `'danger'` | `'warning'` | `'success'` | `'secondary'` | `'info'` | `'purple'` | `'orange'`
- `icon` : `string | undefined` — icône Material optionnelle
- `showClickOption` : `boolean` — **déprécié**

**Outputs** : `(clickAction)` — clic sur le badge.
