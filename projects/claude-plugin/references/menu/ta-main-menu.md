# `MainMenuComponent` — menu latéral principal

**Sélecteur** : `ta-main-menu`

**Import** : `import { MainMenuComponent } from '@ta/menu'`

**Quand l'utiliser** : Menu latéral principal de l'application (sidebar). Gère le mode réduit/étendu.

**Inputs** :
```typescript
menuMain        = input.required<Menu>();                    // menu principal
menuUser        = input<Menu>();                             // menu utilisateur (optionnel)
userMenuTemplate = input<TemplateRef<any>>();                // template custom pour le menu user
direction       = input<'horizontal' | 'vertical'>('vertical'); // direction du menu
```

**Fonctionnalités** :
- Logo cliquable (navigue vers `/`)
- Toggle minimisé/étendu via `TaSharedMenuService`
- Toggle panneau mobile
- Support `MatExpansionModule` pour les sous-menus

**Méthodes** :
```typescript
navigateToHome(): void      // navigue vers /
toggleView(): void          // bascule isMinimized$ dans TaSharedMenuService
toggleMobilePanel(): void   // ouvre/ferme le panneau mobile
closeMobilePanel(): void    // ferme le panneau mobile
```

**Usage** :
```html
<ta-main-menu
  [menuMain]="mainMenu"
  [menuUser]="userMenu"
  [userMenuTemplate]="userTpl"
></ta-main-menu>

<ng-template #userTpl>
  <ta-user-card [user]="currentUser"></ta-user-card>
</ng-template>
```

**Notes** :
- L'état minimisé est partagé via `TaSharedMenuService` (persisté dans localStorage)
- Pour un layout complet, utiliser avec `LayoutPageComponent` et `LayoutSideComponent` de `@ta/ui`
