# `ContextMenuComponent` — menu contextuel

**Sélecteur** : `ta-context-menu`

**Import** : `import { ContextMenuComponent } from '@ta/menu'`

**Quand l'utiliser** : Menu d'actions contextuel (ex: liste d'actions sur un item de liste, menu flottant).

**Inputs** :
```typescript
menu = input.required<Menu>();  // Menu avec MenuIcon ou MenuAction
```

**Comportement** :
- Affiche les éléments du menu avec icône (FontIcon ou LocalIcon)
- Navigation via `routerLink` si `item.link` est défini
- Désactive la navigation si `item.disabled`

**Usage** :
```typescript
contextMenu = new Menu({
  elements: [
    new MenuIcon({ key: 'edit',   label: 'action.edit',   icon: 'edit',   link: TaRoutes.getAbsoluteUrl([AppRoute.EDIT], { id }) }),
    new MenuIcon({ key: 'delete', label: 'action.delete', icon: 'delete', callback: () => this.delete(id) }),
    new MenuIcon({ key: 'share',  label: 'action.share',  icon: 'share',  visible$: this._auth.isAdmin$ }),
  ]
});
```
```html
<ta-context-menu [menu]="contextMenu"></ta-context-menu>
```

**Notes** :
- Souvent utilisé dans un `OverlayPanel` ou un `MatMenu`
- Supporte les icônes FontIcon (`TaIconType`) et LocalIcon (images SVG)
- `visible$` permet de masquer des actions selon les permissions
