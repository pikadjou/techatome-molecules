# `<ta-material-icon>` — `MaterialIconComponent` — icône Material Icons

**@deprecated** — Préférer `<ta-font-icon>`.

**Import** : `MaterialIconComponent` depuis `@ta/icons`

**Template** :
```html
<ta-material-icon>home</ta-material-icon>
<ta-material-icon [outline]="true" type="md">settings</ta-material-icon>
```

**Inputs** :
| Input | Type | Défaut | Description |
|-------|------|--------|-------------|
| `outline` | `boolean` | `false` | Style outlined |
| `sharp` | `boolean` | `false` | Style sharp |
| `round` | `boolean` | `false` | Style rounded |
| `dualTone` | `boolean` | `false` | Style two-tone |
| `type` | `TaSizes \| ''` | `''` | Taille de l'icône |

**Notes** : La variante de style appliquée correspond à la classe `material-icons[-outlined|-sharp|-round|-two-tone]`. Utiliser `<ta-font-icon>` à la place pour les nouveaux développements.
