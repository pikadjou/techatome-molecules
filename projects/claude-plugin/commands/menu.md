---
description: Assistant contextuel @ta/menu — taRoutes, MenuIcon, MenuBase, MenuCollapse, MenuPanel, Menu
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/menu — Assistant contextuel

Tu es un expert de la librairie `@ta/menu` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/menu`
**Import path** : `@ta/menu`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/menu/`

## Exports clés

### Composants (`lib/components/`)

- `taMenuComponent` — `ta-menu` : composant menu principal
- `taMenuItemComponent` — `ta-menu-item` : élément de menu
- `taMainMenuComponent` — `ta-main-menu` : menu principal de l'application
- `taBottomSheetTemplateBasicComponent` — template bottom sheet basique
- `taBottomSheetTemplateGenericComponent` — template bottom sheet générique
- `taQuickActionsComponent` — `ta-quick-actions` : actions rapides
- `taQuickActionsCustomComponent` — `ta-quick-actions-custom`
- `taToggleNavigationComponent` — `ta-toggle-navigation`
- `taContextMenuComponent` — `ta-context-menu`
- `taListComponent` — `ta-list` (menu list)
- `taNavigationComponent` — `ta-navigation`

### Helpers (`lib/helpers/`)

- Fonctions utilitaires pour la construction du menu

### Modèles (`lib/models/`)

- `BottomSheetData` — données pour le bottom sheet
- `Menu` — modèle de menu
- `MenuItemIcon` — modèle icône d'élément de menu
- `MenuItemBase` — modèle de base pour les éléments de menu
- `MenuItemPanel` — modèle élément panneau
- `MenuItemCollapse` — modèle élément repliable
- `Routes` — routes du menu

### Module

- `MenuModule` — module NgModule (deprecated)

## Patterns d'utilisation

### Menu principal

```typescript
import { taMainMenuComponent } from '@ta/menu';
import { MenuItemBase, MenuItemIcon } from '@ta/menu';

@Component({
  standalone: true,
  imports: [taMainMenuComponent],
  template: `<ta-main-menu [items]="menuItems" />`,
})
export class AppComponent {
  menuItems: MenuItemBase[] = [
    {
      icon: 'home',
      label: 'HOME',
      route: '/dashboard',
    },
  ];
}
```

### Context Menu

```typescript
import { taContextMenuComponent } from '@ta/menu';

@Component({
  standalone: true,
  imports: [taContextMenuComponent],
  template: `
    <ta-context-menu [items]="contextItems" (itemClick)="onItemClick($event)" />
  `
})
```

### Quick Actions

```typescript
import { taQuickActionsComponent } from '@ta/menu';

@Component({
  standalone: true,
  imports: [taQuickActionsComponent],
  template: `<ta-quick-actions [actions]="actions" />`
})
```

### Navigation avec Bottom Sheet

```typescript
import { taNavigationComponent, taBottomSheetTemplateGenericComponent } from '@ta/menu';

@Component({
  standalone: true,
  imports: [taNavigationComponent, taBottomSheetTemplateGenericComponent],
  template: `<ta-navigation />`
})
```

## Conventions

- Tous les composants sont `standalone: true`
- Les modèles de menu (`MenuItemBase`, etc.) définissent la structure des éléments
- Les labels de menu doivent être des clés de traduction (via `@ta/translation`)
- Le `MenuModule` est deprecated — utiliser les composants standalone

## Revue de code

- Vérifier que les labels de menu passent par les traductions
- Vérifier que les routes dans les éléments de menu correspondent aux routes Angular définies
- S'assurer que l'ordre des clés dans les objets `MenuItemBase` est trié alphabétiquement
- Ne pas utiliser `MenuModule` dans les nouveaux développements

## Ajout d'un nouveau composant dans @ta/menu

1. Créer dans `projects/menu/src/lib/components/`
2. Exporter depuis `projects/menu/src/lib/components/public-api.ts`
3. S'assurer que `standalone: true`
