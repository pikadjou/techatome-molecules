# Banner Color Types — Design Spec

**Date:** 2026-06-10  
**Status:** Approved

## Objectif

Ajouter un input `type` au `BannerComponent` pour supporter plusieurs variantes de couleur sémantique (`default`, `warning`, `success`, `alert`), en s'alignant sur le `ColorType` existant de `@ta/styles`.

## Approche retenue

**Tokens sémantiques directs** — utiliser les tokens `semantic.*` existants dans le SCSS du banner, sans ajouter de tokens composant dans `_vars.scss`. Cohérent avec l'implémentation actuelle du banner.

## Fichiers à modifier

### 1. `projects/ui/src/lib/components/ui/banner/banner.component.ts`

- Ajouter import `NgClass` et `ColorType` depuis `@ta/styles`
- Ajouter input : `type = input<ColorType>("warning")`
- Ajouter `NgClass` aux imports du composant

### 2. `projects/ui/src/lib/components/ui/banner/banner.component.html`

- Ajouter `[ngClass]="'banner--' + this.type()"` sur le div `.banner`

### 3. `projects/ui/src/lib/components/ui/banner/banner.component.scss`

- Supprimer les couleurs fixes `yellow-light`/`yellow-dark` du bloc `.banner` (tokens inexistants)
- Ajouter 4 variantes BEM :

```scss
&--warning {
  background-color: common.get-var(semantic, orange-light);
  color: common.get-var(semantic, orange);
}
&--success {
  background-color: common.get-var(semantic, green-light);
  color: common.get-var(semantic, green);
}
&--alert {
  background-color: common.get-var(semantic, red-light);
  color: common.get-var(semantic, red);
}
&--default {
  background-color: common.get-var(surface, secondary);
  color: common.get-var(text, primary);
}
```

### 4. `src/app/showcase/ui-feedback/ui-feedback.component.html`

- Corriger la section "Banner — Types" existante (types incorrects `info`/`danger`)
- Utiliser les types `ColorType` corrects avec `[inline]="true"` :

```html
<ta-banner [inline]="true" type="default" message="This is a default banner."></ta-banner>
<ta-banner [inline]="true" type="warning" message="Please review before continuing."></ta-banner>
<ta-banner [inline]="true" type="success" message="Operation completed successfully."></ta-banner>
<ta-banner [inline]="true" type="alert" message="Something went wrong."></ta-banner>
```

## Ce qui ne change pas

- Le fichier `banner.stories.ts` n'est pas modifié
- Aucun token composant ajouté dans `_vars.scss`
- Le comportement `inline` et `message` reste inchangé
- La valeur par défaut `"warning"` préserve une cohérence avec les autres composants sémantiques (orange = attention)

## Types disponibles

| type      | background              | color               |
|-----------|-------------------------|---------------------|
| `default` | `surface, secondary`    | `text, primary`     |
| `warning` | `semantic, orange-light`| `semantic, orange`  |
| `success` | `semantic, green-light` | `semantic, green`   |
| `alert`   | `semantic, red-light`   | `semantic, red`     |
