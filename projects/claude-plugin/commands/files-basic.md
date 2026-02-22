---
description: Assistant contextuel @ta/files-basic — upload et gestion de fichiers basique
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/files-basic — Assistant contextuel

Tu es un expert de la librairie `@ta/files-basic` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/files-basic`
**Import path** : `@ta/files-basic`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/files/files-basic/`

## Exports clés

### Composants (`lib/components/`)

- `taFilesListComponent` — `ta-files-list` : liste de fichiers
- `taDisplayComponent` — `ta-display` : affichage d'un fichier
- `taSlideComponent` — `ta-slide` : visualisation en carrousel
- `taPdfViewerComponent` — `ta-pdf-viewer` : lecteur PDF
- `taFileCardComponent` — `ta-file-card` : carte d'un fichier
- `taFilesEditComponent` — `ta-files-edit` : édition des fichiers
- `taDocumentsListComponent` — liste de documents
- `taFileTypeBadgeComponent` — `ta-file-type-badge` : badge type de fichier

### Module

- `FilesBasicModule` — module NgModule (deprecated)

## Patterns d'utilisation

### Liste de fichiers

```typescript
import { taFilesListComponent } from '@ta/files-basic';
import { FileData } from '@ta/utils';

@Component({
  standalone: true,
  imports: [taFilesListComponent],
  template: ` <ta-files-list [files]="files" (fileClick)="onFileClick($event)" /> `,
})
export class MyComponent {
  files: FileData[] = [];
}
```

### Affichage d'un fichier

```typescript
import { taDisplayComponent } from '@ta/files-basic';

@Component({
  standalone: true,
  imports: [taDisplayComponent],
  template: `<ta-display [file]="file" />`
})
```

### Visualisation PDF

```typescript
import { taPdfViewerComponent } from '@ta/files-basic';

@Component({
  standalone: true,
  imports: [taPdfViewerComponent],
  template: `<ta-pdf-viewer [src]="pdfUrl" />`
})
```

### Édition de fichiers

```typescript
import { taFilesEditComponent } from '@ta/files-basic';

@Component({
  standalone: true,
  imports: [taFilesEditComponent],
  template: `
    <ta-files-edit
      [files]="files"
      (filesChanged)="onFilesChanged($event)"
      (fileDeleted)="onFileDeleted($event)"
    />
  `
})
```

### Badge de type de fichier

```typescript
import { taFileTypeBadgeComponent } from '@ta/files-basic';

@Component({
  standalone: true,
  imports: [taFileTypeBadgeComponent],
  template: `<ta-file-type-badge [file]="file" />`
})
```

## Conventions

- Les types `FileData` et `FileExtension` viennent de `@ta/utils`
- `FilesBasicModule` est deprecated — utiliser les composants standalone
- Pour l'upload, utiliser `@ta/files-extended`
- Les documents utilisent le `DocumentsService` de `@ta/services`

## Revue de code

- Vérifier que les types de fichiers sont importés depuis `@ta/utils`
- Vérifier que `standalone: true` et les imports explicites
- S'assurer que les événements de sortie (`fileClick`, `filesChanged`, `fileDeleted`) sont gérés
- Ne pas utiliser `FilesBasicModule` dans les nouveaux développements

## Ajout d'un nouveau composant dans @ta/files-basic

1. Créer dans `projects/files/files-basic/src/lib/components/`
2. Exporter depuis `projects/files/files-basic/src/lib/components/public-api.ts`
3. S'assurer que `standalone: true`
