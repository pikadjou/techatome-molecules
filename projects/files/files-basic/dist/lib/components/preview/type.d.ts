import { EFileExtension } from '@ta/utils';
export type PreviewDocumentDto = {
    filename?: string;
    url: string;
    uploadedDate?: string;
    size?: number;
    /** Légende affichée sous la pièce. */
    description?: string;
};
/** Extension d'une pièce : lue sur `filename` en priorité, l'URL pouvant être signée ou sans extension. */
export declare const getDocumentExtension: (document: PreviewDocumentDto | null | undefined) => EFileExtension;
