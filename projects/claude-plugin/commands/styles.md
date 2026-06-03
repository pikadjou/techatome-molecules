---
description: Assistant contextuel @ta/styles — catalogue compact + pointeurs vers references/styles/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/styles — Assistant contextuel

Tu es un expert de la librairie `@ta/styles` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (mixin, classe CSS, token, breakpoint…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/styles/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les signatures de mixins ou les noms de tokens.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/styles`
- **Import path TypeScript** : `@ta/styles`
- **Import SCSS dans les composants** : `@use "ta/utils/mixins/common"` (via styleIncludePaths)
- **Localisation** : `projects/styles/src/`

## Catalogue

Format : nom — description courte. Le fichier de référence est `references/styles/<name>.md`.

### Types TypeScript

- `ColorType` — `'default' | 'secondary' | 'success' | 'warning' | 'alert' | 'purple' | 'new'`
- `taSizes` — `'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'big'`
- `taState` — `'classic' | 'disabled' | 'inactive' | 'selected' | 'unselected'`

### Mixins SCSS (`references/styles/mixins.md`)

- `flex` — mixins flexbox (flex-row, flex-column, flex-full, space-between, align-center…)
- `fonts` — mixins typographie (fontSizeBody, fontSizeHeader, fontSizeKey)
- `text` — mixins texte (text-overflow, text-line-limit)
- `common` — mixins couleurs, ombres, grid, hauteur écran + fonction `get-var()`
- `mediaQueriesRanges` — mixins media queries (from, to, between, in-context)

### Classes CSS utilitaires (`references/styles/css-classes.md`)

- `flex-*` — classes flexbox (flex-row, flex-column, flex-full, space-between, align-center…)
- `g-space-*` / `p-space-*` / `m-space-*` — espacements gap/padding/margin (xs→xxxl)
- `bdr-radius-*` — border radius (minimal=4px, rounded=8px, label=16px, full=40px)
- `color-brand-*` / `bgc-brand-*` — palette brand (900→50)
- `color-second-*` / `bgc-second-*` — palette secondaire
- `color-neutral-*` / `bgc-neutral-*` — palette neutre
- `bgc-surface-*` / `text-color-*` / `icon-color-*` / `color-border-*` — tokens design
- `bxs-shadow-*` — ombres (black/brand × sm/md/lg)
- `transition-*` — transitions
- `.tt-u` / `.ta-c` / `.tov-e` / `.tll-2` — typographie utilitaires
- `.grid` / `.one-half` / `.one-third` / `.grid-one-half` — grid 12 colonnes
- `classic-modal` / `big-modal` / `full-modal` — panelClass Material Dialog
- `visit-type` / `vt-*` — colorisation par type de visite

### Tokens CSS Variables (`references/styles/tokens.md`)

- `--ta-space-*` — espacements (xs=4px → xxxl=104px)
- `--ta-radius-*` — rayons (minimal=4px → full=40px)
- `--ta-shadow-*` — ombres
- `--ta-transition-*` — transitions
- `--ta-text-*` / `--ta-surface-*` / `--ta-border-*` / `--ta-icon-*` — tokens sémantiques
- `--ta-brand-*` / `--ta-second-*` / `--ta-neutral-*` / `--ta-semantic-*` — foundations
- `--ta-font-*` — typographie

### Theming partenaire (`references/styles/theming.md`)

- `apply-theme($overrides, $selector)` — mixin qui génère les CSS custom properties
- `build-tokens($brand, $second, $neutral, $semantic)` — recalcule tous les tokens dérivés

## Conventions

- **Ne jamais hardcoder** une couleur, taille ou ombre — utiliser `common.get-var()` ou les classes utilitaires.
- **Mixins > classes** dans les composants SCSS (encapsulation Angular).
- **Classes CSS globales** s'utilisent dans les templates HTML.
- **Import SCSS** : `@use "ta/utils/mixins/common"` (pas de `@import` deprecated).
