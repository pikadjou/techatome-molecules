# `<ta-notification-badge-container>` — `NotificationBadgeContainerComponent`
**Quand l'utiliser** : Conteneur qui positionne un `<ta-notification-badge>` en surimpression sur un élément enfant.
**Template canonique** :
```html
<ta-notification-badge-container>
  <ta-font-icon [name]="'notifications'" />
  <ta-notification-badge [number]="3" />
</ta-notification-badge-container>
```
**Notes** : Pas d'inputs. Utilise `<ng-content>` pour accueillir l'icône et le badge.
