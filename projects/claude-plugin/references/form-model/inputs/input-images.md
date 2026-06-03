# `InputImages` (extends `InputBase<DocumentDto[]>`)

**Quand l'utiliser** : Galerie d'images uploadables (sélection multiple depuis la galerie du device).

**Champs ajoutés vs `InputBase`** :
- `files$: Observable<FileData[]> | null` — images existantes pré-chargées
- `update: ((data: FileStructure[]) => Promise<Picture[]>) | null` — callback d'upload vers le serveur
- `fileDeleted?: (FileData: FileData) => void` — callback de suppression
- `removeFile$: Observable<FileData> | null` — suppression externe d'un fichier
- `limit: number | null` — nombre maximum d'images (null = illimité)

**Interface de config** :
```typescript
new InputImages({
  key: 'photos', label: 'form.photos',
  files$: this._service.getImages$(id),
  update: (files) => this._service.uploadImages(files),
  limit: 5
})
```

**Notes** : `controlType = 'images'`. Rendu par `InputImagesComponent` (`ta-input-images`). Base aussi pour `InputLogo` (image unique).
