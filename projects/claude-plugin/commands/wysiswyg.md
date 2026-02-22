---
description: Assistant contextuel @ta/wysiswyg — éditeur WYSIWYG EditorJS, ta-wysiswyg
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/wysiswyg — Assistant contextuel

Tu es un expert de la librairie `@ta/wysiswyg` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

**Note** : Le nom du package est intentionnellement `wysiswyg` (orthographe techatome), pas `wysiwyg`.

## Informations sur la librairie

**Package** : `@ta/wysiswyg`
**Import path** : `@ta/wysiswyg`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/wysiswyg/`
**Éditeur sous-jacent** : EditorJS

## Exports clés

### Types (depuis @editorjs/editorjs)

- `WysiswgBlockData` — type de bloc de données (réexport de `OutputBlockData`)

### Composants (`lib/modules/wysiswyg/components/`)

- `taBlockTextComponent` — `ta-block-text` : rendu d'un bloc de texte EditorJS
- `taWysiswgInputComponent` — `ta-wysiswyg-input` : éditeur WYSIWYG en mode édition

### Helpers

- Fonctions utilitaires pour la manipulation des données EditorJS

### Module

- `WysiswygModule` — module NgModule (deprecated, noter l'orthographe)

## Patterns d'utilisation

### Éditeur en mode édition

```typescript
import { WysiswgBlockData, taWysiswgInputComponent } from '@ta/wysiswyg';

@Component({
  standalone: true,
  imports: [taWysiswgInputComponent],
  template: ` <ta-wysiswyg-input [value]="content" (valueChange)="onContentChange($event)" /> `,
})
export class EditorComponent {
  content: WysiswgBlockData[] = [];

  onContentChange(blocks: WysiswgBlockData[]) {
    this.content = blocks;
  }
}
```

### Affichage du contenu (lecture seule)

```typescript
import { WysiswgBlockData, taBlockTextComponent } from '@ta/wysiswyg';

@Component({
  standalone: true,
  imports: [taBlockTextComponent],
  template: `
    <ng-container *ngFor="let block of content">
      <ta-block-text [block]="block" />
    </ng-container>
  `,
})
export class ViewerComponent {
  content: WysiswgBlockData[] = [];
}
```

### Intégration dans un formulaire form-model

```typescript
import { WysiswyInput } from '@ta/form-model';

// Dans la configuration du formulaire
fields = [
  new WysiswyInput({
    key: 'description',
    label: 'DESCRIPTION',
  }),
];
```

### Utiliser les helpers

```typescript
import '@ta/wysiswyg';

// Convertir les blocs en texte plain
const plainText = helpers.blocksToPlainText(blocks);
```

## Structure des données EditorJS

```typescript
// WysiswgBlockData
interface WysiswgBlockData {
  data: Record<string, unknown>;
  id: string;
  type: string; // 'paragraph', 'header', 'list', etc.
}
```

## Conventions

- `WysiswygModule` est deprecated — utiliser les composants standalone (noter : le module a une orthographe différente du package)
- `taWysiswgInputComponent` pour l'édition, `taBlockTextComponent` pour l'affichage
- Les données sont des tableaux de `WysiswgBlockData`
- Le nom du package/sélecteur utilise `wysiswyg` (3 s, pas de 'a') — c'est intentionnel dans ce projet

## Revue de code

- Vérifier que `WysiswgBlockData` est utilisé pour typer les données (pas `any`)
- S'assurer que l'éditeur et le viewer utilisent les bons composants
- Vérifier que `standalone: true` et les imports explicites
- Ne pas importer `WysiswygModule` dans les nouveaux composants

## Ajout dans @ta/wysiswyg

1. Créer dans `projects/wysiswyg/src/lib/modules/wysiswyg/`
2. Exporter depuis `projects/wysiswyg/src/lib/modules/wysiswyg/public-api.ts`
