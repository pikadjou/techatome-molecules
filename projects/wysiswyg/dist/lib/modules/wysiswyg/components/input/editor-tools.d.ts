/**
 * Outils EditorJS montables dans l'éditeur.
 *
 * Ce fichier est séparé de `input.component.ts` parce que la barre d'outils a
 * besoin de ces types pour n'offrir que les outils réellement montés, et que
 * l'éditeur importe la barre : les laisser dans le composant créerait un cycle.
 */
export type EditorToolType = "header" | "list" | "quote" | "delimiter" | "warning" | "color" | "image" | "mention";
export declare const EDITOR_ALL_TOOLS: EditorToolType[];
