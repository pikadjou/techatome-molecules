---
description: Assistant contextuel @ta/icons — FontIcon, MaterialIcon, LocalIcon, taIconType
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/icons — Assistant contextuel

Tu es un expert de la librairie `@ta/icons` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/icons`
**Import path** : `@ta/icons`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/icons/`

## Exports clés

### Composants

- `taLocalIconComponent` — `ta-local-icon` : icônes SVG locales
- `taMaterialIconComponent` — `ta-material-icon` : icônes Material Design
- `taFontIconComponent` — `ta-font-icon` : icônes via police de caractères

### Services

- `IconsService` — service de gestion des icônes

### Module

- `IconsModule` — module NgModule (deprecated, préférer les composants standalone)

### Helpers

- Helpers pour la gestion et résolution des icônes

## Patterns d'utilisation

### Icône Material

```typescript
import { taMaterialIconComponent } from '@ta/icons';

@Component({
  standalone: true,
  imports: [taMaterialIconComponent],
  template: `<ta-material-icon icon="home" />`
})
```

### Icône locale (SVG)

```typescript
import { taLocalIconComponent } from '@ta/icons';

@Component({
  standalone: true,
  imports: [taLocalIconComponent],
  template: `<ta-local-icon icon="my-icon" />`
})
```

### Icône font

```typescript
import { taFontIconComponent } from '@ta/icons';

@Component({
  standalone: true,
  imports: [taFontIconComponent],
  template: `<ta-font-icon icon="icon-name" />`
})
```

## Conventions

- Tous les composants sont `standalone: true`
- Préférer `ta-material-icon` pour les icônes Material, `ta-local-icon` pour les SVG custom
- Les icônes locales se trouvent dans les assets du projet
- Le sélecteur suit le pattern `ta-*-icon`

## Revue de code

- Vérifier que l'import correct est utilisé selon le type d'icône
- Ne pas utiliser le `IconsModule` deprecated dans les nouveaux composants
- Vérifier que les imports sont dans le bon ordre (sort-keys sur les objets)

## Création d'un nouveau composant dans @ta/icons

```bash
ng g component projects/icons/src/lib/components/mon-icon --standalone --prefix ta
```

1. Exporter depuis `projects/icons/src/lib/components/public-api.ts`
2. S'assurer que `standalone: true`
