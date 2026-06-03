# Types WYSIWYG — `WysiswgBlockData`, `EditorInputSavedData`

## `WysiswgBlockData`
Alias de `OutputBlockData` depuis `@editorjs/editorjs`.
```typescript
import { WysiswgBlockData } from '@ta/wysiswyg';
// Equivalent à OutputBlockData d'Editor.js
// { type: string; data: Record<string, any>; id?: string }
```

## `EditorInputSavedData`
```typescript
type EditorInputSavedData = {
  blocks: WysiswgBlockData[];
  tags: string[];  // IDs des utilisateurs mentionnés (@mention)
};
```

## `EditorToolType`
```typescript
type EditorToolType = 'header' | 'list' | 'quote' | 'delimiter' | 'warning' | 'color' | 'image' | 'mention';
const EDITOR_ALL_TOOLS: EditorToolType[] = [...]; // Tous les outils
```

## `convertBlocksToHtml(blocks: WysiswgBlockData[]): string`
**Quand l'utiliser** : Convertir les blocs Editor.js en HTML pour affichage ou extraction de contenu.
```typescript
import { convertBlocksToHtml } from '@ta/wysiswyg';
const html = convertBlocksToHtml(savedBlocks);
```
