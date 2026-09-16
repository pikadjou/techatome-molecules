/** Outils EditorJS montables ; séparés de `input.component.ts` pour éviter un cycle avec la barre d'outils. */
export type EditorToolType = 'header' | 'list' | 'quote' | 'delimiter' | 'warning' | 'color' | 'image' | 'mention';
export declare const EDITOR_ALL_TOOLS: EditorToolType[];
