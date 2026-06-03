# `<ta-local-icon>` — `LocalIconComponent` — icône SVG locale (TaIconType)

**@deprecated** — Préférer `<ta-font-icon>`.

**Import** : `LocalIconComponent` depuis `@ta/icons`

**Usage** : Affiche des icônes SVG embarquées via l'enum `TaIconType` (SVGs inline).

**Template** :
```html
<ta-local-icon [type]="this.icon.Dashboard" size="md" />
<ta-local-icon [type]="TaIconType.Search" [rotation]="true" />
```

**Inputs** :
| Input | Type | Défaut | Description |
|-------|------|--------|-------------|
| `type` | `TaIconType \| string \| null` | required | L'icône à afficher |
| `size` | `TaSizes \| 'xl'` | `'xs'` | Taille : xs=28px, sm=35px, md=50px, lg=120px, xl=120px |
| `rotation` | `boolean` | `false` | Animation de rotation (loader) |

**Notes** : Injecte le SVG via `innerHTML` + `DomSanitizer`. Tailles plus grandes que `ta-font-icon`. Utiliser `<ta-font-icon>` pour les nouveaux développements.
