# Modèles de navigation — `@ta/menu`

**Import** : `import { Menu, MenuBase, MenuIcon, MenuAction, MenuPanel } from '@ta/menu'`

## `Menu<T>`
Conteneur racine d'un menu :
```typescript
class Menu<T = MenuBase> {
  direction: 'horizontal' | 'vertical' | 'responsive';  // défaut: 'responsive'
  elements: T[];
}

// Création
const menu = new Menu({
  direction: 'vertical',
  elements: [item1, item2, item3]
});
```

## `MenuBase`
Élément de menu de base (lien de navigation) :
```typescript
class MenuBase {
  key: string;              // identifiant unique
  label: string;            // clé i18n
  link: string;             // URL de navigation (toujours via TaRoutes.getUrl())
  order: number;            // ordre d'affichage (défaut: 1)
  children: MenuBase[];     // sous-éléments
  visible$: Observable<boolean>;  // visibilité réactive (défaut: of(true))
  defaultOpen: boolean;     // ouvert par défaut
  exact: boolean;           // router link exact
  disabled: boolean;
  callback?: (data?: any) => void;
  style: string;            // style CSS ('bloc' par défaut)
  options?: { notificationBadge?: { label: number; style?: string }; extraTemplate?: TemplateRef }
}
```

## `MenuIcon` extends `MenuBase`
Avec une icône FontIcon :
```typescript
class MenuIcon extends MenuBase {
  icon: string | TaIconType;
}
// Création
new MenuIcon({ key: 'home', label: 'menu.home', icon: 'home', link: TaRoutes.getAbsoluteUrl(['HOME']) })
```

## `MenuAction` extends `MenuBase`
Bouton d'action (sans navigation, avec callback) :
```typescript
class MenuAction extends MenuBase {
  action: Function;
}
// Création
new MenuAction({ key: 'logout', label: 'menu.logout', icon: 'logout', action: () => this._auth.logout() })
```

## `MenuPanel` extends `MenuIcon`
Élément qui ouvre un panel/overlay :
```typescript
class MenuPanel extends MenuIcon {
  template: TemplateRef<any>;  // template à afficher dans le panel
}
// Création
new MenuPanel({ key: 'settings', icon: 'settings', label: 'menu.settings', template: this.settingsTpl })
```

## Options communes
```typescript
{
  visible$: this._auth.isAdmin$,  // masquer si non-admin
  disabled: !this.hasPermission,
  options: { notificationBadge: { label: 5 } },  // badge "5" sur l'élément
  defaultOpen: true,  // sélectionné par défaut
}
```
