---
description: Assistant contextuel @ta/utils — pipes, directives, BaseComponent, taAbstractComponent, helpers RxJS
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/utils — Assistant contextuel

Tu es un expert de la librairie `@ta/utils` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/utils`
**Import path** : `@ta/utils`
**Localisation** : `projects/utils/`

## Exports clés

### Directives (`projects/utils/src/lib/directive/`)

- `StopPropagationDirective` — stoppe la propagation des événements
- `TypeTemplateDirective` — directive de typage de template
- `LetDirective` — directive `*taLet` pour assigner des valeurs dans le template
- `OnRenderDirective` — directive déclenchée au rendu
- `ClickOrDblclickDirective` — gestion click / double-click

### Pipes (`projects/utils/src/lib/pipe/`)

- `FileSizePipe` — formatage de taille de fichier (bytes → Ko/Mo/Go)
- `JoinPipe` — jointure d'un tableau en chaîne
- `SafePipe` — DomSanitizer pipe (safe HTML, safe URL, etc.)

### Module

- `DirectivePipeModule` — module NgModule groupant directives et pipes (deprecated)

### Classes abstraites (`projects/utils/src/lib/abstract/`)

- `AbstractComponent` — base pour tous les composants
- `BaseComponent` — composant de base avec gestion du cycle de vie
- `BasePage` — base pour les pages
- `BaseModal` — base pour les modales

### Services (`projects/utils/src/lib/service/`)

- `ReadOnlyContextService` — gestion du contexte lecture seule

### Types (`projects/utils/src/lib/types/`)

- Types pour fichiers : `FileData`, `FileExtension`, `TemporaryFiles`
- Types de civilité : `Civility`
- Types culture : `Culture`
- Types généraux : `Type`

### Helpers et utils (`projects/utils/src/lib/helpers/`, `utils/`)

- Fonctions utilitaires diverses

### Constante d'environnement

- `environment` — depuis `@ta/utils` (réexportée)

## Patterns d'utilisation

### Utiliser LetDirective dans un template

```typescript
import { LetDirective } from '@ta/utils';

@Component({
  standalone: true,
  imports: [LetDirective],
  template: `
    <ng-container *taLet="data$ | async as data">
      {{ data.name }}
    </ng-container>
  `
})
```

### Utiliser SafePipe

```typescript
import { SafePipe } from '@ta/utils';

@Component({
  standalone: true,
  imports: [SafePipe],
  template: `<div [innerHTML]="htmlContent | safe:'html'"></div>`
})
```

### Étendre BaseComponent

```typescript
import { BaseComponent } from '@ta/utils';

@Component({ standalone: true, ... })
export class MonComponent extends BaseComponent {
  // Accès à this.destroy$ pour la gestion des subscriptions RxJS
}
```

### Étendre BasePage

```typescript
import { BasePage } from '@ta/utils';

@Component({ selector: 'app-ma-page', ... })
export class MaPage extends BasePage implements OnInit {
  ngOnInit(): void {
    super.ngOnInit();
  }
}
```

### ReadOnlyContextService

```typescript
import { ReadOnlyContextService } from '@ta/utils';

constructor(private readOnly: ReadOnlyContextService) {}

// Dans le template
readonly isReadOnly = this.readOnly.isReadOnly;
```

## Conventions

- `BaseComponent` doit être étendu par tous les composants qui font des subscriptions RxJS
- Utiliser `takeUntil(this.destroy$)` pour éviter les memory leaks
- Les pipes et directives sont `standalone: true`
- Préférer les imports individuels plutôt que `DirectivePipeModule`

## Revue de code

- Vérifier que tous les composants avec subscriptions étendent `BaseComponent`
- Vérifier l'utilisation de `takeUntil(this.destroy$)` sur toutes les subscriptions
- S'assurer que `SafePipe` est utilisé pour tout contenu HTML dynamique
- Vérifier que les types `FileData`, `Civility`, `Culture` sont importés depuis `@ta/utils`

## Ajout dans @ta/utils

- Directives → `projects/utils/src/lib/directive/`
- Pipes → `projects/utils/src/lib/pipe/`
- Helpers → `projects/utils/src/lib/helpers/`
- Types → `projects/utils/src/lib/types/`
- Exporter depuis le `public-api.ts` correspondant
