# `InputLogo` (extends `InputBase<DocumentDto>`)

**Quand l'utiliser** : Upload d'une image unique (logo, avatar, photo de profil).

**Champs ajoutés vs `InputBase`** :
- `availableFile$: Observable<FileData> | null` — image existante pré-chargée
- `update: ((data: FileStructure) => Promise<Picture>) | null` — callback d'upload
- `fileDeleted?: (FileData: FileData) => void` — callback de suppression
- `removeFile$: Observable<FileData> | null` — suppression externe

**Interface de config** :
```typescript
new InputLogo({
  key: 'logo', label: 'form.logo',
  availableFile$: this._service.getLogo$(id),
  update: (file) => this._service.uploadLogo(file)
})
```

**Notes** : `controlType = 'logo'`. Similaire à `InputImages` mais pour une image unique. Rendu par `InputLogoComponent` (`ta-input-logo`).
