import { Category } from "./dto/category";

export const organiseCategories = (categories: Category[]): Category[] => {
  // 1. Utilisation de reduce pour organiser les catégories par parent
  const categoriesMap = categories.reduce<Map<string, Category[]>>((map, category) => {
    const parentId = category.parent?.documentId ?? 'root'; // Si pas de parent, 'root'
    if (!map.has(parentId)) {
      map.set(parentId, []);
    }
    map.get(parentId)?.push(category);
    return map;
  }, new Map());

  // 2. Fonction récursive pour générer la hiérarchie des catégories
  const buildCategoryTree = (parentId: string, level: number = 1): Category[] => {
    const children = categoriesMap.get(parentId) || [];
    return children.reduce<Category[]>((result, child) => {
      // Modifier le nom avec indentation en fonction du niveau de profondeur
      const indentedName = `${'--'.repeat(level)} ${child.name}`;
      // Créer une copie de l'objet category avec le nom modifié
      result.push({
        ...child, // Conserver toutes les autres propriétés de l'objet
        name: indentedName // Changer le nom pour ajouter l'indentation
      });
      // Appel récursif pour les enfants
      result.push(...buildCategoryTree(child.documentId ?? '', level + 1));
      return result;
    }, []);
  };

  // 3. Construire la structure complète avec tous les parents
  const structuredCategories: Category[] = [];
  const rootCategories = categoriesMap.get('root') || [];
  rootCategories.forEach((parent) => {
    structuredCategories.push({
      ...parent, // Ajouter le parent avec son nom
      name: parent.name // Nom du parent sans modification
    });
    structuredCategories.push(...buildCategoryTree(parent.documentId ?? '')); // Ajouter les enfants du parent
  });

  // Retourner le tableau des catégories avec leurs noms modifiés
  return structuredCategories;
};
