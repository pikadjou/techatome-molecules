---
description: Assistant contextuel @ta/files-extended — gestion de fichiers avancée avec preview et édition
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/files-extended — Assistant contextuel

Tu es un expert de la librairie `@ta/files-extended` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/files-extended`
**Import path** : `@ta/files-extended`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/files/files-extended/`

## Exports clés

### Composants (`lib/components/`)

- `taFilesDisplayComponent` — `ta-files-display` : affichage étendu de fichiers
- `taFilesUploadComponent` — `ta-files-upload` : upload de fichiers

### Services (`lib/services/`)

- Services étendus pour la gestion des fichiers (upload, gestion avancée)

### Module

- `FilesExtendedModule` — module NgModule (deprecated)

## Patterns d'utilisation

### Upload de fichiers

```typescript
import { taFilesUploadComponent } from '@ta/files-extended';
import { UploadFilePayloadInput } from '@ta/services';

@Component({
  standalone: true,
  imports: [taFilesUploadComponent],
  template: ` <ta-files-upload [entityId]="entityId" [entityType]="entityType" (uploaded)="onUploaded($event)" /> `,
})
export class MyComponent {
  entityId = 123;
  entityType = 'project';

  onUploaded(files: UploadFilePayloadInput[]) {
    // traiter les fichiers uploadés
  }
}
```

### Affichage étendu de fichiers

```typescript
import { taFilesDisplayComponent } from '@ta/files-extended';

@Component({
  standalone: true,
  imports: [taFilesDisplayComponent],
  template: `
    <ta-files-display
      [entityId]="entityId"
      [entityType]="entityType"
    />
  `
})
```

## Différence avec @ta/files-basic

| `@ta/files-basic`                | `@ta/files-extended`         |
| -------------------------------- | ---------------------------- |
| Affichage et lecture de fichiers | Upload et gestion avancée    |
| Liste, slide, PDF viewer         | Upload avec progression      |
| Pas d'upload                     | Intégration serveur complète |
| Composants simples               | Services + composants        |

## Conventions

- `FilesExtendedModule` est deprecated — utiliser les composants standalone
- `taFilesUploadComponent` gère l'upload vers le serveur via `@ta/server`
- Les types de fichiers acceptés sont configurables via les inputs du composant
- Intégration avec `DocumentsService` de `@ta/services` pour la persistance

## Revue de code

- Vérifier que les `entityId` et `entityType` sont fournis pour l'upload
- S'assurer que l'événement `uploaded` est géré pour mettre à jour l'état
- Vérifier que `standalone: true` et les imports explicites
- Ne pas utiliser `FilesExtendedModule` dans les nouveaux développements

## Ajout d'un nouveau composant dans @ta/files-extended

1. Créer dans `projects/files/files-extended/src/lib/components/`
2. Exporter depuis `projects/files/files-extended/src/lib/components/public-api.ts`
3. S'assurer que `standalone: true`
