// Fonctions trackBy génériques pour optimiser les performances des listes Angular

export interface TrackableEntity {
  documentId?: string;
  id?: string;
}

export class TrackByUtils {
  // Track by documentId (pour les entités Strapi)
  static byDocumentId<T extends TrackableEntity>(index: number, item: T): string {
    return item.documentId || index.toString();
  }

  // Track by id générique
  static byId<T extends { id: string | number }>(index: number, item: T): string | number {
    return item.id;
  }

  // Track by index (fallback)
  static byIndex(index: number): number {
    return index;
  }

  // Track by propriété personnalisée
  static byProperty<T>(property: keyof T) {
    return (index: number, item: T): any => {
      return item[property] || index;
    };
  }

  // Track by combinaison de propriétés
  static byComposite<T>(...properties: (keyof T)[]) {
    return (index: number, item: T): string => {
      return properties
        .map(prop => item[prop])
        .filter(val => val !== undefined && val !== null)
        .join('-') || index.toString();
    };
  }

  // Track by pour les catégories
  static category = TrackByUtils.byDocumentId;

  // Track by pour les documents
  static document = TrackByUtils.byDocumentId;

  // Track by pour les options de formulaire
  static formOption<T extends { id: string | number; name?: string }>(index: number, item: T): string | number {
    return item.id;
  }
}