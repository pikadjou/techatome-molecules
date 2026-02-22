---
description: Rappel des règles Techatome-first — composants @ta/* obligatoires, SCSS avec tokens et mixins. À invoquer avant tout développement de template ou de style.
argument-hint: [contexte ou fichier concerné]
allowed-tools: [Read, Glob, Grep]
---

# Règle Techatome-First — Composants & SCSS

$ARGUMENTS

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

### Icônes

| ❌ Interdit                     | ✅ Obligatoire                                  |
| ------------------------------- | ----------------------------------------------- |
| `<i class="icon-*">`            | `<ta-font-icon [name]="'search'">`              |
| `<span class="material-icons">` | `<ta-material-icon>search</ta-material-icon>`   |
| SVG inline                      | `<ta-local-icon [type]="TaIconType.Search">`    |

### Layout de page

| ❌ Interdit                           | ✅ Obligatoire                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------ |
| Divs custom pour la structure de page | `<ta-layout-page>`, `<ta-layout-header>`, `<ta-layout-content>`, `<ta-layout-nav>` |

### Cards

| ❌ Interdit                  | ✅ Obligatoire                                  |
| ---------------------------- | ----------------------------------------------- |
| `<div class="card">` custom  | `<ta-card>`                                     |
| Titres de card en `<h*>`     | `<ta-card-title>` dans `<ta-card-header>`       |
| Sous-titres de card en `<p>` | `<ta-card-subtitle>` dans `<ta-card-header>`    |

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

| ❌ Interdit                            | ✅ Obligatoire                                |
| -------------------------------------- | --------------------------------------------- |
| `<ul>/<li>` pour des listes de données | `<ta-list-container>` + `<ta-list-element>`   |

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

| ❌ Interdit                   | ✅ Obligatoire                                                                         |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| `<span class="badge">` custom | `<ta-badge value="..." type="primary\|success\|warning\|danger\|info\|secondary">` |

### États (loading / erreur / vide)

| ❌ Interdit                            | ✅ Obligatoire                              |
| -------------------------------------- | ------------------------------------------- |
| Spinner custom, `<mat-spinner>` direct | `<ta-loader [isLoading]="...">`             |
| Div "aucun résultat" custom            | `<ta-empty [isEmpty]="...">`                |
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

| ❌ Interdit                                          | ✅ Obligatoire                                   |
| ---------------------------------------------------- | ------------------------------------------------ |
| `<form>`, `<input>`, `<select>`, `<textarea>` natifs | `<ta-form>` + composants de `@ta/form-input`     |

### Notifications

| ❌ Interdit                      | ✅ Obligatoire                                                                |
| -------------------------------- | ----------------------------------------------------------------------------- |
| `alert()`, `mat-snackbar` direct | `TaNotificationService.addNotification()` de `@ta/notification`              |

---

## 2. SCSS OBLIGATOIRE — TOKENS & CLASSES

### Import en tête de chaque `.component.scss`

```scss
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/flex";
@use "ta/utils/mixins/fonts";
@use "ta/utils/mixins/mediaQueriesRanges" as mq;
```

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

### Couleurs — `common.get-var(...)`

```scss
// ❌
color: #1f2245;
background-color: #f4f4f4;
border-color: #e0e0e0;

// ✅
color: common.get-var(text, primary);
background-color: common.get-var(surface, secondary);
border-color: common.get-var(border, primary);
```

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
border-radius: common.get-var(radius, label);   // 16px
border-radius: common.get-var(radius, full);    // 40px
```

### Ombres — `common.get-var(shadow, ...)`

```scss
// ❌
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

// ✅
box-shadow: common.get-var(shadow, black-sm);
box-shadow: common.get-var(shadow, black-md);
box-shadow: common.get-var(shadow, brand-lg);
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

- [ ] Aucune valeur px brute → `common.get-var(space, ...)`
- [ ] Aucune couleur hex brute → `common.get-var(text|surface|border|icon, ...)`
- [ ] Aucun `border-radius` brut → `common.get-var(radius, ...)`
- [ ] Aucun `box-shadow` brut → `common.get-var(shadow, ...)`
- [ ] Aucun `@media` brut → `@include mq.from()` / `@include mq.to()`
- [ ] Classes utilitaires utilisées dans le template pour éviter du CSS redondant
