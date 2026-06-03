# `NavigationComponent` — navigation par onglets/tags

**Sélecteur** : `ta-menu-navigation`

**Import** : `import { NavigationComponent } from '@ta/menu'`

**Quand l'utiliser** : Navigation en onglets, tags cliquables, ou sous-menu horizontal (pas le menu latéral principal).

**Inputs** :
```typescript
menu            = input.required<Menu>();
container       = input.required<'tags' | 'tab' | 'submenu'>();
swiper          = input<boolean>(false);                  // activer le swiper horizontal
options         = input<{ spaceElement?: TaSizes | null }>({});  // espacement entre items
manuallyChanged$ = input<Observable<string>>();           // forcer la sélection d'un item par key
```

**Comportement** :
- Active l'item avec `defaultOpen: true` automatiquement au chargement
- Exécute `item.callback()` lors du clic
- `manuallyChanged$` : permet de changer l'item actif depuis l'extérieur (Observable<key>)
- `swiper: true` : wrape dans `SwiperLightComponent` pour le scroll horizontal

**Usage** :
```typescript
// Modèle
const tabMenu = new Menu({
  direction: 'horizontal',
  elements: [
    new MenuBase({ key: 'info',    label: 'tab.info',    callback: () => this.activeTab = 'info',    defaultOpen: true }),
    new MenuBase({ key: 'history', label: 'tab.history', callback: () => this.activeTab = 'history' }),
    new MenuBase({ key: 'docs',    label: 'tab.docs',    callback: () => this.activeTab = 'docs' }),
  ]
});
```
```html
<ta-menu-navigation [menu]="tabMenu" container="tab"></ta-menu-navigation>
```

**Notes** :
- Pas de routerLink dans `NavigationComponent` — la navigation est gérée via `callback()`
- `spaceElement: null` pour supprimer le gap entre les items
- Classes d'espacement : `g-space-lg` par défaut, configurable via `options.spaceElement`
