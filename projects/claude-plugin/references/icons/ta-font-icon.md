# `<ta-font-icon>` — `FontIconComponent` — icône Remix Icon / Material

**Composant principal pour les icônes.** Affiche une icône via son nom de classe CSS (Remix Icon, Material, etc.).

**Import** : `FontIconComponent` depuis `@ta/icons`

**Template canonique** :
```html
<ta-font-icon name="home" />
<ta-font-icon name="ri-user-line" type="lg" />
<ta-font-icon [name]="this.iconName" [type]="'sm'" />
```

**Inputs** :
| Input | Type | Défaut | Description |
|-------|------|--------|-------------|
| `name` | `string` | required | Nom de la classe d'icône (ex: `ri-home-line`, `home`) |
| `type` | `TaSizes` | `'md'` | Taille : `'xs'` / `'sm'` / `'md'` / `'lg'` / `'xl'` |

**Rendu interne** :
```html
<mat-icon [ngClass]="this.type">{{ this.name() }}</mat-icon>
```

**Notes** :
- Utilise `<mat-icon>` de Angular Material — le contenu texte correspond au nom de la police d'icône (ligature ou classe).
- Pour les icônes Remix, utiliser le nom de classe : `ri-home-line`, `ri-user-fill`, etc.
- C'est le composant d'icône **recommandé** (les deux autres sont `@deprecated`).
