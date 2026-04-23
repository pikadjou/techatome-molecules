# UI Modernization — Design Spec
Date: 2026-04-23

## Direction

**Style:** Refined Corporate — lignes nettes, professionnel, sobriété assumée.  
**Palette:** Inchangée. On conserve `$brand` (navy #121e38→#e5e8ec) et `$second` (gold #f26800→#fdf7e0).  
**Périmètre:** Tous les composants UI et formulaires. SCSS + templates HTML si nécessaire.

---

## 1. Tokens globaux (`projects/styles/src/style/ta/_vars.scss`)

### Radius
| Token | Avant | Après |
|---|---|---|
| `$radius-base` | `8px` | `10px` |
| `rounded` | `8px` | `10px` |
| `label` | `16px` | `20px` |
| `full` | `40px` | `40px` (inchangé) |
| `minimal` | `4px` | `5px` |

### Shadows
Remplacer les ombres actuelles par des variantes plus raffinées basées sur la couleur brand :

```scss
$shadow: (
  black: (
    sm:  0px 1px 3px 0px rgba(18, 30, 56, 0.08),
    md:  0px 4px 12px 0px rgba(18, 30, 56, 0.10),
    lg:  0px 8px 24px 0px rgba(18, 30, 56, 0.12),
  ),
  brand: (
    sm:  0px 2px 8px  0px rgba(18, 30, 56, 0.14),
    md:  0px 4px 14px 0px rgba(18, 30, 56, 0.20),
    lg:  0px 8px 24px 0px rgba(18, 30, 56, 0.18),
  ),
);
```

### Transitions
Ajouter des valeurs dans `$transition` :

```scss
$transition: (
  fast:   '0.12s ease',
  base:   '0.18s ease',
  slow:   '0.28s ease',
);
```

### Composants — button
```scss
button: (
  radius: map.get($radius, rounded),          // → 10px
  padding-vertical:   map.get($space, sm),    // 8px (inchangé)
  padding-horizontal: map.get($space, md),    // 16px (inchangé)
  ...
)
```

---

## 2. Boutons (`projects/ui/src/lib/components/ui/button/button.component.scss`)

- Ajouter `cursor: pointer` (sauf `.disabled`)
- Ajouter `transition: all var(--ta-transition-base)` sur `.button`
- Ajouter `font-weight: 600` sur `.button`
- Ajouter `letter-spacing: 0.01em`
- Primary : `box-shadow: var(--ta-shadow-brand-sm)` + hover `translateY(-1px)` + shadow md
- Secondary : même traitement avec shadow second
- Tertiary : `border-width: 1.5px`, hover `background: var(--ta-surface-secondary)`
- Focus visible : `outline: 2px solid var(--ta-border-brand-primary); outline-offset: 2px`

---

## 3. Inputs formulaire (`projects/form/form-input/src/lib/...`)

### Abstract / base
Le wrapper de chaque input doit avoir :
- `border: 1.5px solid var(--ta-border-tertiary)`
- `border-radius: var(--ta-radius-rounded)` (10px)
- `transition: border-color var(--ta-transition-base), box-shadow var(--ta-transition-base)`
- Focus : `border-color: var(--ta-border-brand-primary)` + `box-shadow: 0 0 0 3px rgba(18,30,56,0.10)`

### Labels de champ
- `font-size: 12px`
- `font-weight: 600`
- `text-transform: uppercase`
- `letter-spacing: 0.05em`
- `color: var(--ta-text-brand-primary)` (navy 400)

### Checkbox (`checkbox.component.scss`)
- `border-radius: 5px`
- `border: 1.5px solid var(--ta-border-tertiary)`
- Focus ring brand
- Checked : `background: var(--ta-surface-brand-primary)` + checkmark SVG ou `✓`

### Radio (`radio.component.scss`)
- Dot centré brand quand checked
- Focus ring brand

### Dropdown (`dropdown.component.scss`)
- Trigger : même style que input (1.5px border, radius 10px)
- Options hover : `background: var(--ta-surface-secondary)`
- Option selected : `background: var(--ta-surface-tertiary)` + `font-weight: 600`
- Transition open : `opacity + transform(translateY -4px → 0)`

### Search field (`search-field.component.scss`)
- Border 1.5px + radius 10px
- Focus ring brand

---

## 4. Panels (`projects/form/form-basic/src/lib/components/input/panel/panel.component.scss`)

- `.with-separator` : remplacer `#a9a9a9` hardcodé par `var(--ta-border-tertiary)`
- `.card` : `border-radius: var(--ta-radius-rounded)` + `box-shadow: var(--ta-shadow-black-sm)`
- `.highlight-title .panel-title` : ajouter `text-transform: uppercase; letter-spacing: 0.07em; font-size: 12px; border-bottom: 2px solid var(--ta-border-tertiary); padding-bottom: var(--ta-space-sm)`

---

## 5. Cards UI (`projects/ui/src/lib/components/ui/`)

Fichiers concernés : `card`, `list`, `expansion-panel`, `toggle-card`.

- Radius : `var(--ta-radius-rounded)` uniformisé (10px)
- Shadow de base : `var(--ta-shadow-black-sm)`
- Hover : `var(--ta-shadow-black-md)` + `transform: translateY(-1px)` + `transition`
- Border : `1px solid var(--ta-border-tertiary)`

---

## 6. Badges / Labels (`projects/ui/src/lib/components/ui/label/`)

- Radius : `var(--ta-radius-label)` (20px)
- `font-weight: 600`
- `font-size: 11px`
- `letter-spacing: 0.03em`
- Variante gold (secondary) : `background: var(--ta-surface-brand-tertiary)` + `color: var(--ta-second-900)` + `border: 1px solid var(--ta-second-100)`

---

## Ordre de build recommandé

1. `_vars.scss` (tokens) — impact global immédiat
2. `button.component.scss`
3. `panel.component.scss`
4. Inputs form-input (checkbox, radio, dropdown, search-field)
5. Cards / labels UI

## Non dans le scope

- Changement de palette (couleurs inchangées)
- Changement de typographie / font-family
- Réécriture des templates HTML (sauf si un composant le nécessite pour le focus/label)
- Nouveaux composants
