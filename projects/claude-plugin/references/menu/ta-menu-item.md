# `MenuItemComponent` — élément de menu

**Sélecteur** : `ta-menu-item`

**Import** : `import { MenuItemComponent } from '@ta/menu'`

**Quand l'utiliser** : Rendu d'un élément individuel du menu. Utilisé en interne par `ta-menu`. Rarement utilisé directement.

**Inputs** :
```typescript
item      = input.required<MenuIcon | MenuAction | MenuBase | MenuPanel>();
styleType = input<String>('bloc');
```

**Comportement** :
- Affiche l'icône si l'item est `MenuIcon`
- Exécute `callback()` si l'item est `MenuAction`
- Ouvre un panel/modal si l'item est `MenuPanel`
  - Desktop : `MatMenu` overlay
  - Mobile (< XS) : `TaModalComponent`
- Affiche les sous-éléments (`children`) via récursion
- Affiche `NotificationBadgeComponent` si `options.notificationBadge` est défini

**Notes** :
- Gère automatiquement les icônes FontIcon et LocalIcon
- `toggle()` : ouvre/ferme les sous-éléments
- `disabled` : empêche la navigation et le callback
