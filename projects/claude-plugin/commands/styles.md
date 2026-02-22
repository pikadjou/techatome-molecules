---
description: Assistant contextuel @ta/styles — mixins SCSS, classes CSS utilitaires, tokens de design, breakpoints
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/styles — Assistant contextuel

Tu es un expert de la librairie `@ta/styles` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/styles`
**Import path TypeScript** : `@ta/styles`
**Import SCSS dans les composants** : `@use "ta/utils/mixins/common"` (via styleIncludePaths)
**Localisation** : `projects/styles/src/`
**Point d'entrée SCSS global** : `projects/styles/src/index.scss` → `style/ta/_index.scss`

---

## 1. TYPES TYPESCRIPT

```typescript
import { ColorType, taSizes, taState } from '@ta/styles';

export type taState = 'classic' | 'disabled' | 'inactive' | 'selected' | 'unselected';

export type taSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'big';

export type ColorType = 'default' | 'secondary' | 'success' | 'warning' | 'alert' | 'purple' | 'new';
```

---

## 2. CLASSES CSS UTILITAIRES — RÉFÉRENCE COMPLÈTE

Toutes ces classes sont disponibles globalement (générées par `_generate.scss`). Elles peuvent être utilisées directement dans les templates HTML.

### 2.1 Flex

| Classe                 | Effet                                                                |
| ---------------------- | -------------------------------------------------------------------- |
| `.flex-row`            | `display: flex; flex-direction: row`                                 |
| `.flex-column`         | `display: flex; flex-direction: column`                              |
| `.flex-full`           | `display: flex; flex: 1 1 100%`                                      |
| `.flex-fill`           | `flex: 1 1 auto`                                                     |
| `.full-width`          | `flex: 1; width: 100%`                                               |
| `.full-height`         | `display: flex; height: 100%; flex-direction: column`                |
| `.space-between`       | `display: flex; flex-direction: row; justify-content: space-between` |
| `.space-around`        | `display: flex; flex-direction: row; justify-content: space-around`  |
| `.flex-start`          | `display: flex; flex-wrap: wrap; justify-content: flex-start`        |
| `.justify-center`      | `display: flex; justify-content: center; margin: auto`               |
| `.justify-end`         | `display: flex; justify-content: flex-end; margin-left: auto`        |
| `.align-center`        | `display: flex; align-items: center`                                 |
| `.align-end`           | `display: flex; align-items: flex-end; justify-content: end`         |
| `.simple-flex`         | `display: flex; flex-wrap: nowrap`                                   |
| `.flex-responsive-ctr` | `flex-column` sur mobile, `flex-row` sur tablette+                   |
| `.flex-responsive-rtc` | `flex-row` sur mobile, `flex-column` sur tablette+                   |

**Classes responsive** (préfixes : `sm-` `md-` `lg-` `xl-`) :
`.sm-flex` · `.md-flex-column` · `.lg-flex-row` · `.xl-space-between` · etc.

### 2.2 Espacements — Spacing

Tailles disponibles : `xs` (4px) · `sm` (8px) · `md` (16px) · `lg` (24px) · `xl` (32px) · `xxl` (48px) · `xxxl` (104px)

**Gap**
`.g-space-[xs|sm|md|lg|xl|xxl|xxxl]`

**Padding**
`.p-space-[...]` · `.px-space-[...]` · `.py-space-[...]`
`.pt-space-[...]` · `.pb-space-[...]` · `.pl-space-[...]` · `.pr-space-[...]`

**Margin**
`.m-space-[...]` · `.mx-space-[...]` · `.my-space-[...]`
`.mt-space-[...]` · `.mb-space-[...]` · `.ml-space-[...]` · `.mr-space-[...]`

**Margin auto**
`.m-a` · `.mx-a` · `.my-a` · `.mt-a` · `.mb-a` · `.ml-a` · `.mr-a`

### 2.3 Border Radius

| Classe                | Valeur |
| --------------------- | ------ |
| `.bdr-radius-minimal` | 4px    |
| `.bdr-radius-rounded` | 8px    |
| `.bdr-radius-label`   | 16px   |
| `.bdr-radius-full`    | 40px   |

### 2.4 Couleurs — Foundation

**Brand** (palette bleue principale)
`.color-brand-[900|800|700|600|500|400|300|200|100|50]`
`.bgc-brand-[900|800|700|600|500|400|300|200|100|50]`

Valeurs : 900=#121e38 · 700=#1f375d · 600=#273f67 · 500=#2d466f · 400=#4c5f81 · 300=#6a7a95 · 200=#929fb3 · 100=#bcc4d2 · 50=#e5e8ec

**Second** (palette orange accent)
`.color-second-[900|600|400|300]`
`.bgc-second-[900|600|400|300]`

Valeurs : 900=#f26800 · 600=#f1ab00 · 400=#f2c317 · 300=#f4ce46

**Neutral** (palette grise)
`.color-neutral-[black|700|600|500|400|300|200|100|white]`
`.bgc-neutral-[black|700|600|500|400|300|200|100|white]`

Valeurs : black=#1f2245 · 200=#f4f7f9 · 100=#f8f8f8 · white=#ffffff

**Semantic** (palette sémantique)
`.color-semantic-[red|orange|yellow|green|...]`
`.bgc-semantic-[...]`

Valeurs : red=#e74c3c · orange=#f39c12 · yellow=#ffd166 · green=#38a172

### 2.5 Couleurs — Tokens de design

Ces classes utilisent les variables CSS du design system (s'adaptent au thème partenaire).

**Surface** (fonds)
`.bgc-surface-[default|primary|secondary|tertiary]`
`.bgc-surface-brand-[primary|secondary|tertiary]`
`.bgc-surface-hover-[primary|secondary]`
`.bgc-surface-[invert|success|warning|alert]`

**Text** (couleurs de texte sémantiques)
`.text-color-[primary|secondary|tertiary|body]`
`.text-color-brand-[primary|secondary]`
`.text-color-invert-[primary|secondary]`
`.text-color-[success|warning|alert|link]`

**Icon** (couleurs d'icône)
`.icon-color-[primary|secondary|tertiary]`
`.icon-color-brand-[primary|secondary]`
`.icon-color-invert-[primary|secondary]`
`.icon-color-[disabled|success|alert]`

### 2.6 Bordures

**Bordure transparente** (utile pour aligner sans trait visible)
`.bdp` · `.bdp-t` · `.bdp-b` · `.bdp-l` · `.bdp-r`

**Couleur de bordure** (s'applique sur les éléments qui ont déjà `border` défini)
`.color-border-[primary|secondary|brand|hover|invert|disabled|success|warning|alert]`

### 2.7 Ombres

`.bxs-shadow-black-[sm|md|lg]`
`.bxs-shadow-brand-[sm|md|lg]`

Valeurs black : sm=`0px 4px 8px 0px rgba(0,0,0,0.1)` · md=`0px 4px 16px 0px rgba(0,0,0,0.15)` · lg=`0px 8px 24px 4px rgba(0,0,0,0.1)`

### 2.8 Transitions

`.transition-fast` · `.transition-slow` · `.transition-none` · `.transition-all`
`.transition-fast-colors` · `.transition-fast-transform` · `.transition-fast-opacity`

### 2.9 Typographie — Classes helpers

| Classe     | Effet                                                            |
| ---------- | ---------------------------------------------------------------- |
| `.lh-0`    | `line-height: 0`                                                 |
| `.lh-1`    | `line-height: 1`                                                 |
| `.lh-3\/2` | `line-height: 1.5`                                               |
| `.fs-i`    | `font-style: italic`                                             |
| `.fs-o`    | `font-style: oblique`                                            |
| `.tt-n`    | `text-transform: none`                                           |
| `.tt-u`    | `text-transform: uppercase`                                      |
| `.tt-l`    | `text-transform: lowercase`                                      |
| `.tt-c`    | `text-transform: capitalize`                                     |
| `.ta-c`    | `text-align: center`                                             |
| `.ta-l`    | `text-align: left`                                               |
| `.ta-r`    | `text-align: right`                                              |
| `.tov-e`   | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` |
| `.tll-2`   | Limite à 2 lignes avec ellipsis (`-webkit-line-clamp: 2`)        |
| `.tll-3`   | Limite à 3 lignes avec ellipsis (`-webkit-line-clamp: 3`)        |

### 2.10 Grid CSS (12 colonnes)

**Conteneur** : `.grid` (12 colonnes)
**Enfants** : `.full` · `.two-thirds` · `.one-half` · `.one-third` · `.one-fourth` · `.three-fourth` · `.one-sixth` · `.five-sixths`

**Grilles prédéfinies** (applique le span à tous les enfants directs)
`.grid-one-half` · `.grid-one-third` · `.grid-one-fourth` · `.grid-one-sixth`

**Variantes responsives** (breakpoints : `xs` `sm` `mobile` `md` `tablette` `desktop` `lg` `xl` `xxl` `xxxl`)
`.grid-[bp]-full` · `.grid-[bp]-one-half` · `.grid-[bp]-one-third` · `.grid-[bp]-one-fourth` · `.grid-[bp]-one-sixth`

### 2.11 Utilitaires divers

| Classe           | Effet                                                       |
| ---------------- | ----------------------------------------------------------- |
| `.c-pointer`     | `cursor: pointer`                                           |
| `.is-disabled`   | `cursor: not-allowed`                                       |
| `.hover-bgc`     | Fond `surface.hover.secondary` au hover + `cursor: pointer` |
| `.pointer`       | `cursor: pointer` (global)                                  |
| `.innerHTML img` | `max-width: 100%` (sécurité pour le contenu HTML injecté)   |

### 2.12 Modales Material (panelClass)

Passer dans `MatDialog.open(..., { panelClass: '...' })` :

| Classe                 | Dimensions                                                              |
| ---------------------- | ----------------------------------------------------------------------- |
| `classic-modal`        | `max-width: 75vw; min-width: 50vw; min-height: 400px; max-height: 70vh` |
| `classic-modal-strict` | `width: 75vw; height: 70vh`                                             |
| `big-modal`            | `width: 85vw; height: 85vh` (95vw/95vh sur mobile)                      |
| `full-modal`           | `width: 100vw; height: 100vh`                                           |

### 2.13 Visit Type

Pour coloriser selon le type de visite (1 à 6) :

```html
<div class="visit-type vt-3 vt-color">...</div>
<!-- fond + texte colorés -->
<div class="visit-type vt-3 vt-border">...</div>
<!-- bordure colorée -->
```

Types : 1=vert · 2=jaune · 3=rouge · 4=orange · 5=marine · 6=violet

---

## 3. MIXINS SCSS — RÉFÉRENCE COMPLÈTE

À utiliser dans les fichiers `.component.scss` après import.

### Import dans un composant

```scss
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/flex";
@use "ta/utils/mixins/fonts";
@use "ta/utils/mixins/text";
@use "ta/utils/mixins/mediaQueriesRanges" as mq;
```

### 3.1 Mixins Flex

```scss
@include flex.flex-row();         // display: flex; flex-direction: row
@include flex.flex-column();      // display: flex; flex-direction: column
@include flex.flex-full();        // display: flex; flex: 1 1 100%
@include flex.flex-fill();        // flex: 1 1 auto
@include flex.full-width();       // flex: 1; width: 100%
@include flex.full-height();      // display: flex; height: 100%; flex-direction: column
@include flex.space-between();    // flex row + justify-content: space-between
@include flex.space-around();     // flex row + justify-content: space-around
@include flex.flex-start();       // flex wrap + justify-content: flex-start
@include flex.justify-center();   // flex + justify-content: center + margin: auto
@include flex.justify-end();      // flex + justify-content: flex-end + margin-left: auto
@include flex.align-center();     // flex + align-items: center
@include flex.align-end();        // flex + align-items: flex-end + justify-content: end
@include flex.simple-flex();      // display: flex; flex-wrap: nowrap
@include flex.flex-responsive-ctr(); // column sur mobile, row sur tablette+
@include flex.flex-responsive-rtc(); // row sur mobile, column sur tablette+
```

### 3.2 Mixins Typographie

```scss
// Corps de texte (scope: xs | sm | md)
@include fonts.fontSizeBody(md);         // taille normale
@include fonts.fontSizeBody(sm, true);   // taille petite, gras

// Titres (scope: h1 | h2 | h3 | h4)
@include fonts.fontSizeHeader(h1);
@include fonts.fontSizeHeader(h2, true); // gras

// Chiffres clés / métriques (scope: xxs | xs | sm | md | lg | xl)
@include fonts.fontSizeKey(lg);
@include fonts.fontSizeKey(md, true);    // gras

// Générique (scope + sub)
@include fonts.fontSize('body', 'md', false);
```

### 3.3 Mixins Texte

```scss
@include text.text-overflow();       // ellipsis sur une ligne
@include text.text-line-limit(2);    // ellipsis après N lignes
@include text.text-line-limit(3);
```

### 3.4 Mixins Couleurs

```scss
@include common.hover-bgc(); // fond hover + cursor pointer

// Fonction pour calculer la couleur de texte sur un fond
$text-color: common.getTextOnBackground(#3c54e4); // retourne text.primary ou text.tertiary
```

### 3.5 Mixins Ombres

```scss
@include common.shadow-mixin(black, sm); // box-shadow sm noir
@include common.shadow-mixin(black, md);
@include common.shadow-mixin(black, lg);
@include common.shadow-mixin(brand, sm); // box-shadow sm bleu brand
@include common.shadow-mixin(brand, md);
@include common.shadow-mixin(brand, lg);
```

### 3.6 Mixins Media Queries

Breakpoints disponibles :
`xs`=0 · `sm`=576px · `mobile`=577px · `md`=768px · `tablette`=769px · `desktop`=991px · `lg`=992px · `xl`=1200px · `xxl`=1400px · `xxxl`=1800px

```scss
// min-width (à partir de, valeur px)
@include mq.from(768px) { ... }

// min-width (à partir de, par clé)
@include mq.from-key(md) { ... }

// max-width (jusqu'à, valeur px)
@include mq.to(768px) { ... }

// max-width (jusqu'à, par clé)
@include mq.to-key(sm) { ... }

// entre deux valeurs px
@include mq.between(576px, 992px) { ... }

// media query custom
@include mq.mq('screen and (orientation: landscape)') { ... }

// contexte CSS arbitraire (:host-context)
@include mq.in-context('.my-parent-class') { ... }
```

### 3.7 Mixins Grid

```scss
@include common.grid-base(); // display: grid; grid-template-columns: repeat(12, 1fr)
@include common.one-sixth();   // grid-column: span 2
@include common.one-fourth();  // grid-column: span 3
@include common.one-third();   // grid-column: span 4
@include common.one-half();    // grid-column: span 6
@include common.two-thirds();  // grid-column: span 8
@include common.three-fourth(); // grid-column: span 9
@include common.five-sixths(); // grid-column: span 10
@include common.full();        // grid-column: span 12

// Grilles prédéfinies (applique le span à tous les enfants)
@include common.grid-one-half();
@include common.grid-one-third();
@include common.grid-one-fourth();
@include common.grid-one-sixth();
```

### 3.8 Mixins Hauteur écran

```scss
// height / min-height en tenant compte de la topbar (60px) et bottom (55px)
@include common.setHeight();             // min-height: calc(100vh - 60px - 55px)
@include common.setHeight(false);        // height: calc(100vh - 60px - 55px)
@include common.setHeight(true, false);  // min-height: calc(100vh - 60px)
```

---

## 4. VARIABLES CSS (CSS Custom Properties)

Toutes les valeurs du design system sont disponibles via des variables CSS `--ta-*`.
Utiliser la fonction `common.get-var()` en SCSS pour y accéder.

```scss
@use "ta/utils/mixins/common";

// Syntaxe SCSS
color: common.get-var(text, primary);           // var(--ta-text-primary)
background: common.get-var(surface, brand, primary); // var(--ta-surface-brand-primary)
gap: common.get-var(space, md);                 // var(--ta-space-md)
border-radius: common.get-var(radius, rounded); // var(--ta-radius-rounded)
box-shadow: common.get-var(shadow, black, sm);  // var(--ta-shadow-black-sm)
transition: all common.get-var(transition, fast); // var(--ta-transition-fast)

// Accès direct en CSS
color: var(--ta-text-primary);
```

### Variables de couleurs disponibles

```
--ta-brand-[900|800|700|600|500|400|300|200|100|50]
--ta-second-[900|600|400|300]
--ta-neutral-[black|700|600|500|400|300|200|100|white]
--ta-semantic-[red|orange|yellow|green|...]
--ta-surface-[default|primary|secondary|tertiary|brand-primary|brand-secondary|brand-tertiary|hover-primary|hover-secondary|invert|success|warning|alert]
--ta-text-[primary|secondary|tertiary|body|brand-primary|brand-secondary|invert-primary|invert-secondary|success|warning|alert|link]
--ta-icon-[primary|secondary|tertiary|brand-primary|brand-secondary|invert-primary|invert-secondary|disabled|success|alert]
--ta-border-[primary|secondary|brand|hover|invert|disabled|success|warning|alert]
--ta-semantic-token-[success|alert|warning|link]
```

### Variables d'espacement

```
--ta-space-[xs|sm|md|lg|xl|xxl|xxxl]    (4px · 8px · 16px · 24px · 32px · 48px · 104px)
--ta-radius-[minimal|rounded|label|full] (4px · 8px · 16px · 40px)
--ta-shadow-black-[sm|md|lg]
--ta-shadow-brand-[sm|md|lg]
--ta-transition-[fast|slow]
```

### Variables de typographie

```
--ta-font-family
--ta-font-h[1|2|3|4]-default-[size|line|weight]
--ta-font-h[1|2|3|4]-desktop-[size|line]
--ta-font-body-[xs|sm|md]-default-[size|line|weight]
--ta-font-body-[xs|sm|md]-desktop-[size|line]
--ta-font-key-[xxs|xs|sm|md|lg|xl]-default-[size|line|weight]
--ta-font-key-[xxs|xs|sm|md|lg|xl]-desktop-[size|line]
```

---

## 5. SYSTÈME DE TYPOGRAPHIE — ÉCHELLE

| Scope            | Sub | Mobile size | Desktop size | Line-height desktop |
| ---------------- | --- | ----------- | ------------ | ------------------- |
| `fontSizeHeader` | h1  | 28px        | 28px         | 28px                |
| `fontSizeHeader` | h2  | 24px        | 24px         | 24px                |
| `fontSizeHeader` | h3  | 18px        | 18px         | 18px                |
| `fontSizeHeader` | h4  | 14px        | 14px         | 14px                |
| `fontSizeBody`   | md  | 15px        | 16px         | 24px                |
| `fontSizeBody`   | sm  | 13px        | 13px         | 18px                |
| `fontSizeBody`   | xs  | 10px        | 11px         | 14px                |
| `fontSizeKey`    | xl  | 36px        | 42px         | 48px                |
| `fontSizeKey`    | lg  | 20px        | 24px         | 32px                |
| `fontSizeKey`    | md  | 18px        | 22px         | 28px                |
| `fontSizeKey`    | sm  | 15px        | 16px         | 24px                |
| `fontSizeKey`    | xs  | 13px        | 13px         | 18px                |
| `fontSizeKey`    | xxs | 10px        | 11px         | 14px                |

---

## 6. BREAKPOINTS

| Nom        | Valeur | Usage typique     |
| ---------- | ------ | ----------------- |
| `xs`       | 0px    | Mobile très petit |
| `sm`       | 576px  | Mobile            |
| `mobile`   | 577px  | Mobile+           |
| `md`       | 768px  | Tablette          |
| `tablette` | 769px  | Tablette+         |
| `desktop`  | 991px  | Desktop           |
| `lg`       | 992px  | Large             |
| `xl`       | 1200px | Extra large       |
| `xxl`      | 1400px | 2K                |
| `xxxl`     | 1800px | 4K                |

---

## 7. CONVENTIONS

- **Ne jamais hardcoder** une couleur, taille ou ombre — utiliser les classes utilitaires ou `common.get-var()`
- **Mixins > classes** dans les composants SCSS (encapsulation Angular)
- Les **classes CSS globales** s'utilisent dans les templates HTML
- Les **mixins** s'utilisent dans les fichiers `.component.scss`
- **Partenaires** : les overrides de tokens se font dans `src/partners/[nom]/` — ne pas toucher aux vars de base
- La **scrollbar** est stylisée globalement via les tokens (`space.sm`, `neutral.100`, `neutral.300`, `surface.brand.primary`)

## 8. REVUE DE CODE

- Aucune couleur hex hardcodée dans un composant — utiliser `common.get-var()` ou les classes `.color-*` / `.bgc-*`
- Aucun `px` hardcodé pour spacing/radius — utiliser `common.get-var(space, ...)` ou `.p-space-*` / `.m-space-*`
- Aucun `font-size` inline — utiliser `@include fonts.fontSizeBody()` / `@include fonts.fontSizeKey()`
- Les media queries utilisent `@include mq.from()` / `@include mq.to()`
- Import SCSS : `@use "ta/utils/mixins/common"` (pas de `@import` deprecated, pas de `@use ... as *`)
