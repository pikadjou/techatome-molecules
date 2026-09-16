---
description: Rappel des règles Techatome-first — composants @ta/* obligatoires, SCSS avec tokens et mixins. À invoquer avant tout développement de template ou de style.
argument-hint: [contexte ou fichier concerné]
allowed-tools: [Read, Glob, Grep]
---

# Règle Techatome-First — Composants & SCSS

$ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans les tableaux ci-dessous le composant ou token concerné.
2. **Lis la fiche de référence** via `Read` si un élément spécifique est mentionné :
   - Composants UI : `references/ui/<selector>.md`
   - Tokens SCSS : `references/styles/design-tokens.md` — mixins : `references/styles/mixin-flex.md`, `mixin-fonts.md`, `mixin-common.md`, `mixin-media-queries.md`, `mixin-text.md`
   - Classes CSS : `references/styles/css-classes-flexbox.md`, `css-classes-spacing.md`, `css-classes-grid.md`, `css-classes-text.md`
3. **Réponds à partir du contenu lu** — les références sont la **source de vérité**.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

---

## PRINCIPE FONDAMENTAL

> **La librairie `@ta/*` est PRIORITAIRE sur tout élément HTML natif ou composant tiers.**
> Si un composant `@ta/*` existe pour un besoin donné, son utilisation est **obligatoire**.
> Idem pour le SCSS : les tokens, variables et classes utilitaires de `@ta/styles` doivent être utilisés en priorité sur toute valeur brute.

---

## 1. COMPOSANTS OBLIGATOIRES — HTML

### Typographie

| ❌ Interdit                   | ✅ Obligatoire                                      |
| ----------------------------- | --------------------------------------------------- |
| `<h1>` à `<h6>`               | `<ta-title [level]="1">` à `<ta-title [level]="6">` |
| `<p>`, `<span>` pour du texte | `<ta-text>`                                         |

```html
<!-- ❌ -->
<h2>Mon titre</h2>
<p>Du texte descriptif.</p>

<!-- ✅ -->
<ta-title [level]="2">Mon titre</ta-title>
<ta-text>Du texte descriptif.</ta-text>
```

### Actions

| ❌ Interdit             | ✅ Obligatoire |
| ----------------------- | -------------- |
| `<button>`              | `<ta-button>`  |
| `<a>` stylisé en bouton | `<ta-link>`    |

```html
<!-- ❌ -->
<button class="btn">Valider</button>

<!-- ✅ -->
<ta-button type="primary" size="medium" (action)="this.save()">Valider</ta-button>
```

**Exceptions actées (2026-09-16), à ne pas rouvrir** : les `<button>` natifs de `ta-files-preview-modal`
(visionneuse plein écran) et de la toolbar EditorJS de `@ta/wysiswyg` — contrôles denses propres à ces
composants, `ta-button` n'ayant pas d'état « pressé ». Partout ailleurs la règle est entière.

### Icônes

| ❌ Interdit                     | ✅ Obligatoire                                |
| ------------------------------- | --------------------------------------------- |
| `<i class="icon-*">`            | `<ta-font-icon [name]="'search'">`            |
| `<span class="material-icons">` | `<ta-material-icon>search</ta-material-icon>` |
| SVG inline                      | `<ta-local-icon [type]="TaIconType.Search">`  |

### Layout de page

| ❌ Interdit                           | ✅ Obligatoire                                                                     |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Divs custom pour la structure de page | `<ta-layout-page>`, `<ta-layout-header>`, `<ta-layout-content>`, `<ta-layout-nav>` |

### Cards

| ❌ Interdit                  | ✅ Obligatoire                               |
| ---------------------------- | -------------------------------------------- |
| `<div class="card">` custom  | `<ta-card>`                                  |
| Titres de card en `<h*>`     | `<ta-card-title>` dans `<ta-card-header>`    |
| Sous-titres de card en `<p>` | `<ta-card-subtitle>` dans `<ta-card-header>` |

```html
<!-- ✅ Structure complète d'une card -->
<ta-card type="primary">
  <ta-card-header>
    <ta-card-tag><ta-badge value="Statut" type="info"></ta-badge></ta-card-tag>
    <ta-card-title>Titre</ta-card-title>
    <ta-card-subtitle>Sous-titre</ta-card-subtitle>
  </ta-card-header>
  <ta-card-content>
    <ta-text>Contenu de la card.</ta-text>
  </ta-card-content>
  <ta-card-cta>
    <ta-button type="primary" size="small">Action</ta-button>
  </ta-card-cta>
</ta-card>
```

### Listes

| ❌ Interdit                            | ✅ Obligatoire                              |
| -------------------------------------- | ------------------------------------------- |
| `<ul>/<li>` pour des listes de données | `<ta-list-container>` + `<ta-list-element>` |

```html
<!-- ✅ -->
<ta-list-container>
  <ta-list-element>
    <ta-list-title>Nom</ta-list-title>
    <ta-list-sub-title>Sous-titre</ta-list-sub-title>
    <ta-list-tag><ta-badge value="Tag" type="success"></ta-badge></ta-list-tag>
    <ta-list-extra-information>Info complémentaire</ta-list-extra-information>
  </ta-list-element>
</ta-list-container>
```

### Badges

| ❌ Interdit                   | ✅ Obligatoire                                                                     |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| `<span class="badge">` custom | `<ta-badge value="..." type="primary\|success\|warning\|danger\|info\|secondary">` |

### États (loading / erreur / vide)

| ❌ Interdit                            | ✅ Obligatoire                            |
| -------------------------------------- | ----------------------------------------- |
| Spinner custom, `<mat-spinner>` direct | `<ta-loader [isLoading]="...">`           |
| Div "aucun résultat" custom            | `<ta-empty [isEmpty]="...">`              |
| Div d'erreur custom                    | `<ta-error [message]="..." [code]="...">` |

```html
<!-- ✅ Imbrication standard obligatoire -->
<ta-loader [isLoading]="this.requestState.isLoading()">
  <ta-error [message]="this.requestState.getErrorMessage()" [code]="this.requestState.getErrorStatus()">
    <ta-empty [isEmpty]="this.items.length === 0">
      <!-- contenu -->
    </ta-empty>
  </ta-error>
</ta-loader>
```

### Formulaires

| ❌ Interdit                                          | ✅ Obligatoire                               |
| ---------------------------------------------------- | -------------------------------------------- |
| `<form>`, `<input>`, `<select>`, `<textarea>` natifs | `<ta-form>` + composants de `@ta/form-input` |

### Notifications

| ❌ Interdit                      | ✅ Obligatoire                                                  |
| -------------------------------- | --------------------------------------------------------------- |
| `alert()`, `mat-snackbar` direct | `TaNotificationService.addNotification()` de `@ta/notification` |

---

## 2. SCSS OBLIGATOIRE — TOKENS & CLASSES

### Import en tête de chaque `.component.scss`

```scss
@use 'ta/utils/mixins/common';
@use 'ta/utils/mixins/flex';
@use 'ta/utils/mixins/fonts';
@use 'ta/utils/mixins/mediaQueriesRanges' as mq;
```

### Jetons : uniquement `common.get-var()` — jamais `var(--ta-…)` à la main

Un jeton se **lit** par `common.get-var(...)`, son nom se **produit** par `common.get-var-name(...)`.
Écrire `var(--ta-…)` soi-même, avec ou sans valeur de repli, est interdit. Poser `--ta-xxx: …` sur un
composant depuis l'extérieur (« réassignation ») l'est aussi : un composant ne se retouche jamais depuis
l'endroit qui l'utilise. S'il manque une variante, on l'ajoute au composant (`type`, `shape`, `variant`…).

```scss
// ❌ hook maison, valeur de repli, réassignation depuis le parent
padding: var(--ta-card-padding, #{common.get-var(space, md)});
ta-label {
  --ta-label-radius: #{common.get-var(radius, pill)};
}

// ✅ le jeton, rien d'autre
padding: common.get-var(components, card, padding);
```

**Jeton manquant → on l'ajoute dans `_vars.scss`**, jamais de valeur brute dans un `.component.scss` :

- espacement hors grille propre à un composant → map `components.<composant>` (ex. `components.tab-bar.pill.padding-vertical`) ;
- couleur ou taille propre à un composant → même map (ex. `components.lightbox.background`, `components.lightbox.control-size`) ;
- voile translucide sur surface sombre → `common.get-var(surface, veil, xs|sm|md|lg)`.

### Espacements — `common.get-var(space, ...)`

| ❌ Valeur brute | ✅ Token                     |
| --------------- | ---------------------------- |
| `4px`           | `common.get-var(space, xs)`  |
| `8px`           | `common.get-var(space, sm)`  |
| `16px`          | `common.get-var(space, md)`  |
| `24px`          | `common.get-var(space, lg)`  |
| `32px`          | `common.get-var(space, xl)`  |
| `48px`          | `common.get-var(space, xxl)` |

```scss
// ❌
margin-bottom: 32px;
padding: 16px;
gap: 8px;

// ✅
margin-bottom: common.get-var(space, xl);
padding: common.get-var(space, md);
gap: common.get-var(space, sm);
```

Un `11px`, `13px`, `22px` « ajusté à l'œil » n'est pas une exception : soit le palier `space` le plus proche,
soit un jeton `components.<composant>` ajouté dans `_vars.scss`.

### Couleurs — `common.get-var(...)`

```scss
// ❌ — hex, rgb(), rgba(), noms de couleur : tout est interdit
color: #1f2245;
background-color: #f4f4f4;
border: 1px solid rgba(255, 255, 255, 0.14);
background: #0b1426;

// ✅
color: common.get-var(text, primary);
background-color: common.get-var(surface, secondary);
border: 1px solid common.get-var(surface, veil, md);
background: common.get-var(components, lightbox, background);
```

Une couleur « proche de la marque » (`#0b1426`) se remplace par le jeton de la marque (`brand, 900`) ; une
couleur dérivée (scrim, dégradé) se définit dans `_vars.scss` avec `color.change(map.get($brand, 900), $alpha: …)`.

**Tokens texte :** `common.get-var(text, primary|secondary|tertiary|brand|invert|body|success|warning|alert)`
**Tokens surface :** `common.get-var(surface, default|primary|secondary|tertiary|brand|hover|invert|success|warning|alert)`
**Tokens bordure :** `common.get-var(border, primary|secondary|brand|hover|invert|disabled|success|warning|alert)`
**Tokens icône :** `common.get-var(icon, primary|secondary|tertiary|brand|invert|disabled|success|alert)`

### Radius — `common.get-var(radius, ...)`

```scss
// ❌
border-radius: 4px;
border-radius: 8px;

// ✅
border-radius: common.get-var(radius, minimal); // 4px
border-radius: common.get-var(radius, rounded); // 8px
border-radius: common.get-var(radius, label); // 16px
border-radius: common.get-var(radius, full); // 40px
```

### Ombres — `common.get-var(shadow, ...)`

```scss
// ❌
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

// ✅ — 3 arguments : famille puis taille
box-shadow: common.get-var(shadow, black, sm);
box-shadow: common.get-var(shadow, black, md);
box-shadow: common.get-var(shadow, brand, lg);
```

### Typographie — mixins `fonts.*` obligatoires

On ne change pas la police. Aucun `font-family`, `font-size`, `font-weight`, `letter-spacing` écrit à la
main : taille et graisse viennent des mixins, la famille du thème.

```scss
// ❌
font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
font-size: 13px;
font-weight: 600;
letter-spacing: 0.06em;

// ✅
@include fonts.fontSizeBody(sm); // taille + graisse du palier
@include fonts.fontSizeBody(sm, true); // même palier, graisse bold
@include fonts.fontSizeHeader(h2);
font-family: common.get-var(font, display, family); // seule famille alternative admise : celle du thème
```

### Flexbox — mixins `flex.*` obligatoires

```scss
// ❌
display: flex;
flex-direction: column;

// ✅
@include flex.flex-column();
@include flex.flex-row();
@include flex.space-between(); // display: flex; flex-direction: row; justify-content: space-between
@include flex.align-center(); // display: flex; align-items: center
```

### Media queries — mixins obligatoires

```scss
// ❌
@media (min-width: 768px) { ... }
@media (max-width: 576px) { ... }

// ✅
@include mq.from(768px) { ... }
@include mq.to(576px) { ... }
```

Breakpoints disponibles : `xs` (0), `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px), `xxl` (1400px).

### Classes utilitaires — préférer au CSS custom

Utiliser les classes dans le **template HTML** plutôt que de recréer les mêmes règles en SCSS :

**Flexbox :**

```html
<div class="flex-column">
  <div class="flex-row">
    <div class="space-between">
      <div class="align-center">
        <div class="flex-full">
          <div class="full-width">
            <div class="justify-center">
              <div class="ml-a"><!-- margin-left: auto --></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Espacements (dans le template) :**

```html
<div class="p-space-md">
  <!-- padding: 16px -->
  <div class="px-space-lg">
    <!-- padding left+right: 24px -->
    <div class="mt-space-xl">
      <!-- margin-top: 32px -->
      <div class="g-space-sm"><!-- gap: 8px --></div>
    </div>
  </div>
</div>
```

**Couleurs (dans le template) :**

```html
<div class="bgc-surface-primary">
  <span class="text-color-secondary">
    <ta-font-icon class="icon-color-brand-primary"></ta-font-icon>
  </span>
</div>
```

**Typographie :**

```html
<span class="ta-c">
  <!-- text-align: center -->
  <span class="tt-u">
    <!-- text-transform: uppercase -->
    <span class="tov-e"><!-- text-overflow: ellipsis --></span>
  </span>
</span>
```

---

## 3. CHECKLIST RAPIDE

Avant de soumettre tout code HTML/SCSS, vérifier :

**Template :**

- [ ] Aucun `<h1>`–`<h6>` → `<ta-title [level]="N">`
- [ ] Aucun `<p>` → `<ta-text>`
- [ ] Aucun `<button>` / `<a>` stylisé → `<ta-button>`
- [ ] Aucun `<i>` ou `<span>` pour les icônes → `<ta-font-icon>` / `<ta-material-icon>` / `<ta-local-icon>`
- [ ] Aucun `<ul>/<li>` pour données → `<ta-list-container>` + `<ta-list-element>`
- [ ] Aucune div "card" custom → `<ta-card>` et ses slots
- [ ] Aucun spinner custom → `<ta-loader>`
- [ ] Aucune div "vide" custom → `<ta-empty>`
- [ ] Aucune div "erreur" custom → `<ta-error>`
- [ ] Aucun `<form>`/`<input>` natif → `<ta-form>` + composants `@ta/form-input`

**SCSS :**

- [ ] Aucun `var(--ta-…)` écrit à la main, avec ou sans repli → `common.get-var(...)`
- [ ] Aucun `--ta-xxx: …` posé sur un composant enfant (réassignation) → variante du composant
- [ ] Aucune valeur px brute, même « ajustée » (`11px`, `22px`) → `space` ou jeton `components.<composant>` dans `_vars.scss`
- [ ] Aucune couleur hex / `rgb()` / `rgba()` → `text|surface|border|icon`, `surface.veil` sur fond sombre, ou jeton `components.<composant>`
- [ ] Aucun `font-family` / `font-size` / `font-weight` / `letter-spacing` à la main → `fonts.*`
- [ ] Aucun `display: flex` + `flex-direction` à la main → `flex.*`
- [ ] Aucun `border-radius` brut → `common.get-var(radius, ...)`
- [ ] Aucun `box-shadow` brut → `common.get-var(shadow, famille, taille)`
- [ ] Aucun `@media` brut → `@include mq.from()` / `@include mq.to()`
- [ ] Classes utilitaires utilisées dans le template pour éviter du CSS redondant

**TypeScript / templates :**

- [ ] Aucune assertion non-null `!` dans un template → `@if (this.x(); as x) { … }`
- [ ] Variantes de composant par `[ngClass]="this.getClass()"` dans le template + SCSS, pas par `host: { '[class.x]': … }`
- [ ] Commentaires courts : une ligne par input / méthode publique, pas de bannière de section ni de paragraphe de justification
