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

### Mixins SCSS (`references/styles/mixin-flex.md`, `mixin-fonts.md`, `mixin-text.md`, `mixin-common.md`, `mixin-media-queries.md`)

- `flex` — mixins flexbox (flex-row, flex-column, flex-full, space-between, align-center…)
- `fonts` — mixins typographie (fontSizeBody, fontSizeHeader, fontSizeKey)
- `text` — mixins texte (text-overflow, text-line-limit)
- `common` — mixins couleurs, ombres, grid, hauteur écran + fonction `get-var()`
- `mediaQueriesRanges` — mixins media queries (from, to, between, in-context)

### Classes CSS utilitaires (`references/styles/css-classes-flexbox.md`, `css-classes-spacing.md`, `css-classes-grid.md`, `css-classes-text.md`)

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

### Tokens CSS Variables (`references/styles/design-tokens.md`)

- `--ta-space-*` — espacements (xs=4px → xxxl=104px)
- `--ta-radius-*` — rayons (minimal=4px → full=40px, + `card`, `panel`, `pill`=999px)
- `--ta-shadow-*` — ombres
- `--ta-transition-*` — transitions
- `--ta-text-*` / `--ta-surface-*` / `--ta-border-*` / `--ta-icon-*` — tokens sémantiques (+ `text-muted`, `surface-ground`, `surface-veil-xs|sm|md|lg` : voiles blancs sur fond sombre)
- `--ta-brand-*` / `--ta-second-*` / `--ta-neutral-*` / `--ta-semantic-*` — foundations
- `--ta-font-*` — typographie (`font-display-family` : police d'affichage du thème)
- `--ta-components-<composant>-*` — jetons propres à un composant (`card`, `label`, `tab-bar`, `lightbox`, `header`, `button`, `chip`, `segment`, `badge`…) — **c'est là qu'on ajoute un jeton manquant**, dans `_vars.scss`

### Theming partenaire (`references/styles/theming.md`)

- `apply-theme($overrides, $selector)` — mixin qui génère les CSS custom properties
- `build-tokens($brand, $second, $neutral, $semantic)` — recalcule tous les tokens dérivés

## Conventions

- **Ne jamais hardcoder** une couleur (hex, `rgb()`, `rgba()`), une taille ou une ombre — utiliser `common.get-var()` ou les classes utilitaires. Un px « ajusté » (`11px`, `22px`) n'est pas une exception : palier `space` ou jeton `components.<composant>` ajouté dans `_vars.scss`.
- **Jamais `var(--ta-…)` à la main**, ni réassignation `--ta-xxx: …` d'un composant enfant depuis le parent : un composant ne se retouche pas de l'extérieur, on lui ajoute une variante.
- **On ne change pas la police** : `font-size` / `font-weight` par les mixins `fonts.*`, pas de `font-family` ni de `letter-spacing` à la main (seule famille alternative : `common.get-var(font, display, family)`).
- **Flex par les mixins** `flex.*`, jamais `display: flex; flex-direction: …` à la main.
- **Mixins > classes** dans les composants SCSS (encapsulation Angular).
- **Classes CSS globales** s'utilisent dans les templates HTML.
- **Import SCSS** : `@use "ta/utils/mixins/common"` (pas de `@import` deprecated).
