# `<ta-notification-badge>` — `NotificationBadgeComponent`
**Quand l'utiliser** : Badge numérique de notification (ex: nombre de messages non lus).
**Template canonique** :
```html
<ta-notification-badge [number]="unreadCount" [fontSize]="'xs'" />
<ta-notification-badge [number]="3" [relative]="true" [style]="'semantic-token-alert'" />
```
**Inputs** :
- `number` (required) : `number` — valeur affichée
- `fontSize` : `TaSizes` — `'xs'` (défaut)
- `style` : `string | undefined` — classe CSS de couleur de fond (ex: `'semantic-token-info'`)
- `relative` : `boolean` — `false` (défaut) — positionnement relatif

**Notes** : Utiliser avec `<ta-notification-badge-container>` pour superposer sur un élément. Voir `_composed/` pour le pattern.
