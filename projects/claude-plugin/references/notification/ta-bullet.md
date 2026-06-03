# `BulletComponent` — badge compteur de notifications

**Sélecteur** : `ta-notification-bullet`

**Import** : `import { BulletComponent } from '@ta/notification'`

**Quand l'utiliser** : Afficher un compteur de notifications non-lues (ex: dans le menu, sur une icône).

**Inputs** :
```typescript
filters = input<NotificationFilter>(null);  // filtres optionnels (type, statut...)
```

**Comportement** :
- Charge automatiquement le compteur via `TaNotificationDataService`
- Affiche le nombre de notifications correspondant aux filtres
- Utilise `ta-bullet` de `@ta/ui` pour le rendu visuel

**Usage** :
```html
<!-- Sans filtre : toutes les notifications -->
<ta-notification-bullet></ta-notification-bullet>

<!-- Avec filtre -->
<ta-notification-bullet [filters]="myFilters"></ta-notification-bullet>
```

**Notes** :
- Différent de `BulletComponent` de `@ta/ui` (celui-ci est le badge applicatif lié au backend)
- Gère son propre état de chargement via `requestState`
- `NotificationFilter` : type de filtre défini dans `@ta/notification`
