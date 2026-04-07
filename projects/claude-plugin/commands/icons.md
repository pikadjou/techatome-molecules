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

- `FontIconComponent` — `ta-font-icon` : icônes via police de caractères (Remix Icon)
- `MaterialIconComponent` — `ta-material-icon` : icônes Material Design
- `LocalIconComponent` — `ta-local-icon` : icônes SVG locales (via `TaIconType` enum) — **deprecated**
- `FlagIconComponent` — `ta-flag-icon` : drapeaux SVG par code langue

### Services

- `TaIconsService` — service de gestion des icônes locales (`getIcon(type: TaIconType)`)

### Types

- `TaIconType` — enum de toutes les icônes SVG locales (Add, Search, Loader, Pdf, Excel, etc.)

### Helpers

- `isFontIcon(icon)` — vérifie si l'icône est un font icon (string)
- `isLocalIcon(icon)` — vérifie si l'icône est dans `TaIconType`
- `getFontIcon(icon)` — résout le nom du font icon

## Patterns d'utilisation

### Font Icon (Remix Icon) — le plus courant

```typescript
import { FontIconComponent } from '@ta/icons';

@Component({
  standalone: true,
  imports: [FontIconComponent],
  template: `<ta-font-icon name="check-line" type="md"></ta-font-icon>`
})
```

Inputs : `name` (required, string), `type` (TaSizes, défaut `'md'`)

### Material Icon

```typescript
import { MaterialIconComponent } from '@ta/icons';

@Component({
  standalone: true,
  imports: [MaterialIconComponent],
  template: `<ta-material-icon icon="home"></ta-material-icon>`
})
```

### Local Icon (SVG via TaIconType) — deprecated

```typescript
import { LocalIconComponent, TaIconType } from '@ta/icons';

@Component({
  standalone: true,
  imports: [LocalIconComponent],
  template: `<ta-local-icon [type]="icon" size="md"></ta-local-icon>`
})
export class MyComponent {
  icon = TaIconType.Search;
}
```

Inputs : `type` (required, `TaIconType | string`), `size` (`TaSizes | 'xl'`, défaut `'xs'`), `rotation` (boolean, défaut `false`)

### Flag Icon — drapeaux par code langue

```typescript
import { FlagIconComponent } from '@ta/icons';

@Component({
  standalone: true,
  imports: [FlagIconComponent],
  template: `<ta-flag-icon code="fr" size="sm"></ta-flag-icon>`
})
```

Inputs : `code` (required, string — code langue : `fr`, `en`, `nl`, `es`, `de`, `it`, `pt`), `size` (TaSizes, défaut `'sm'`)

Drapeaux disponibles : `fr`, `en`, `nl`, `es`, `de`, `it`, `pt`. Le composant gère ses propres SVG en interne.

## Conventions

- Tous les composants sont `standalone: true`
- Préférer `ta-font-icon` pour la majorité des icônes (Remix Icon)
- Utiliser `ta-flag-icon` pour les drapeaux (pas `ta-local-icon`)
- `ta-local-icon` est deprecated — ne pas l'utiliser dans les nouveaux composants
- Le sélecteur suit le pattern `ta-*-icon`

## Revue de code

- Vérifier que `FontIconComponent` est utilisé (pas `LocalIconComponent`) dans le nouveau code
- Vérifier que les imports sont dans le bon ordre (Angular → External → @ta/ → Local)
- Pour les drapeaux, utiliser `FlagIconComponent` avec le code langue

## Création d'un nouveau composant dans @ta/icons

1. Créer dans `projects/icons/src/lib/components/`
2. Exporter depuis `projects/icons/src/lib/components/public-api.ts`
3. S'assurer que `standalone: true`
