# Types importants de `@ta/utils`

## `Civility` — enum de civilité
```typescript
enum Civility {
  Unknown = 0,
  Sir = 1,     // Monsieur
  Madame = 2,  // Madame
  Dear = 3,    // Neutre / Cher(e)
}
```

## `Culture` — enum de langue/région
```typescript
enum Culture {
  Unknown = 0,
  FR_FR = 10,
  FR_BE = 11,
  NL_NL = 20,
  EN_EN = 30,
  ES_ES = 40,
}
```

## `EFileExtension` — enum d'extension de fichier
```typescript
enum EFileExtension {
  Unknown,
  PDF,
  Excel,
  Word,
  Image,
}
```

## `FileType` — type de fichier
```typescript
type FileType = 'Unknown' | 'Document' | 'Image';
```

## `FileData<T>` — interface de fichier
```typescript
interface FileData<T = any> {
  id: number;
  url: string;
  thumbnailUrl?: string;
  type: FileType;
  fileExtension?: EFileExtension;
  name?: string;
  fileMetaData?: T;
  isLoading?: boolean;
  isSelected?: boolean;
}
```

## `MessageLevel` — niveau de message
```typescript
type MessageLevel = 'danger' | 'info' | 'warning' | 'success';
```

## `RecursivePartial<T>` — version partielle récursive
```typescript
type RecursivePartial<T> = {
  [P in keyof T]?: any;
};
```
Utilisé pour les payloads de mise à jour partiels.
