# `ColMetaData<T>` — définition de colonnes de grille

**Quand l'utiliser** : Décrire les colonnes et leurs capacités de filtrage pour `<ta-grid-container>`.

**Interface** :
```typescript
interface ColMetaData<T = unknown> {
  name: keyof T;               // Champ de l'entité
  type: ParameterType;         // Type de données
  isSearchField?: boolean;     // Inclus dans la recherche textuelle
  notDisplayable?: boolean;    // Masquer de la liste des colonnes affichables
  showOnSearch?: boolean;      // Afficher dans le panneau de recherche
  highlighted?: boolean;       // Mettre en évidence dans les résultats
  multivalues?: boolean;       // Filtre multi-valeurs
  enumValues?: string[];       // Valeurs possibles pour les enums
  dataSearch$?: (search?: string) => Observable<InputChoicesOption[]>; // Recherche async
  manyToOneOptions?: {
    field: string;
    model: string;
    data$: (id: number[]) => Observable<string[]>;
  };
}
```

**Exemple** :
```typescript
colsMetaData: ColMetaData<MyEntity>[] = [
  { name: 'name', type: ParameterType.String, isSearchField: true },
  { name: 'status', type: ParameterType.Enum, enumValues: ['active', 'inactive'] },
  { name: 'createdAt', type: ParameterType.DateTime },
  { name: 'category', type: ParameterType.Relation, manyToOneOptions: { field: 'name', model: 'Category', data$: ids => ... } },
];
```

**`ParameterType` enum** : `Unknown=0, String=1, Number=2, Boolean=3, DateTime=4, Enum=5, Relation=6`
