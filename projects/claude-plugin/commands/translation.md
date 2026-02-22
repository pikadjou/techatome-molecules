---
description: Assistant contextuel @ta/translation — i18n, TranslatePipe, fichiers JSON en/fr/nl/es
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/translation — Assistant contextuel

Tu es un expert de la librairie `@ta/translation` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/translation`
**Import path** : `@ta/translation`
**Localisation** : `projects/translation/`
**Langues supportées** : en, fr, nl, es

## Exports clés

### Depuis @ngx-translate/core (réexportés)

- `TranslateDirective` — directive `translate` pour les templates
- `TranslatePipe` — pipe `translate`

### Classes abstraites

- `AbstractTranslationModule` — base pour créer un module de traduction

### Services

- `TranslationService` — service principal de traduction
- `TranslationRegistryService` — registre des traductions
- `LazyTranslationService` — chargement lazy des fichiers de traduction

### Pipes

- `ArrayPipe` — traduction d'éléments d'un tableau
- `PluralPipe` — gestion du pluriel dans les traductions

### Provider

- `provideTranslation()` — provider pour configurer le système de traduction

## Patterns d'utilisation

### Configuration dans app.config.ts

```typescript
import { provideTranslation } from '@ta/translation';

export const appConfig: ApplicationConfig = {
  providers: [
    provideTranslation(),
    // ...
  ],
};
```

### Utiliser TranslatePipe dans un template

```typescript
import { TranslatePipe } from '@ta/translation';

@Component({
  standalone: true,
  imports: [TranslatePipe],
  template: `<span>{{ 'MY_KEY' | translate }}</span>`
})
```

### Utiliser TranslateDirective

```html
<span translate="MY_KEY"></span>
<!-- ou -->
<span [translate]="dynamicKey"></span>
```

### Charger des traductions lazy

```typescript
import { LazyTranslationService } from '@ta/translation';

constructor(private lazy: LazyTranslationService) {}

ngOnInit() {
  this.lazy.load('my-feature');
}
```

### Créer un module de traduction pour une librairie

```typescript
import { AbstractTranslationModule } from '@ta/translation';

export class MyLibTranslationService extends AbstractTranslationModule {
  protected override namespace = 'my-lib';
  protected override translations = {
    en: () => import('./i18n/en.json'),
    fr: () => import('./i18n/fr.json'),
    nl: () => import('./i18n/nl.json'),
    es: () => import('./i18n/es.json'),
  };
}
```

### Utiliser dans un service

```typescript
import { TranslationService } from '@ta/translation';

constructor(private translation: TranslationService) {}

getLabel(): string {
  return this.translation.instant('MY_KEY');
}
```

## Structure des fichiers i18n

Chaque librairie qui a des traductions crée ses fichiers JSON :

```
projects/my-lib/src/lib/i18n/
  en.json
  fr.json
  nl.json
  es.json
```

Les clés JSON doivent être triées alphabétiquement (`sort-keys`).

## Conventions

- Toujours fournir les 4 langues : en, fr, nl, es
- Utiliser `TranslatePipe` dans les templates (standalone)
- Les clés de traduction en UPPER_SNAKE_CASE
- Chaque librairie gère ses propres traductions via `AbstractTranslationModule`
- Ne jamais hardcoder de texte visible par l'utilisateur — toujours passer par les traductions

## Revue de code

- Vérifier que toutes les chaînes visibles utilisent `translate`
- Vérifier que les 4 fichiers de langue existent et sont synchronisés
- Vérifier que les clés JSON sont triées alphabétiquement
- S'assurer que `LazyTranslationService.load()` est appelé avant d'utiliser les clés
