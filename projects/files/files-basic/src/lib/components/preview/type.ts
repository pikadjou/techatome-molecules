import { EFileExtension, getFileExtension } from "@ta/utils";

export type PreviewDocumentDto = {
  filename?: string;
  url: string;
  uploadedDate?: string;
  size?: number;
  /** Légende affichée sous la pièce dans la visionneuse plein écran. */
  description?: string;
};

/**
 * Le type d'une pièce, pour choisir le visualiseur qui sait l'afficher.
 *
 * Le nom du fichier prime sur son adresse : une pièce servie par une API, ou
 * derrière une adresse signée, n'a pas d'extension dans son URL. S'en remettre
 * à l'adresse seule fait passer une photo pour un format inconnu, alors que son
 * nom l'annonce clairement.
 */
export const getDocumentExtension = (
  document: PreviewDocumentDto | null | undefined
): EFileExtension => {
  if (!document) {
    return EFileExtension.Unknown;
  }

  const fromName = document.filename
    ? getFileExtension(document.filename)
    : EFileExtension.Unknown;

  return fromName !== EFileExtension.Unknown ? fromName : getFileExtension(document.url);
};
