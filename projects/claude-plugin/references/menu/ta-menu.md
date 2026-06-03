# `MenuComponent` — composant de rendu de menu

**Sélecteur** : `ta-menu`

**Import** : `import { MenuComponent } from '@ta/menu'`

**Quand l'utiliser** : Rendu d'un menu dans différents contextes visuels (main, second, overflow, panel).

**Inputs** :
```typescript
menu      = input.required<Menu>();
container = input.required<'second' | 'overflow' | 'main' | 'panel'>();
```

**Styles CSS générés selon `container`** :
| `container` | Classe CSS |
|-------------|------------|
| `'main'` | `main-nav {direction}` |
| `'second'` | `second {direction}` |
| `'overflow'` | `overflow vertical` |
| `'panel'` | _(pas de classe)_ |

**Usage** :
```html
<!-- Menu principal vertical -->
<ta-menu [menu]="mainMenu" container="main"></ta-menu>

<!-- Menu secondaire horizontal -->
<ta-menu [menu]="secondMenu" container="second"></ta-menu>
```

**Notes** :
- Rend les éléments via `ta-menu-item`
- La direction (`horizontal` / `vertical` / `responsive`) est portée par le modèle `Menu`
- Préférer `ta-main-menu` pour le menu latéral complet de l'application
