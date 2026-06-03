# `<ta-files-display>` — `FilesDisplayComponent`
**Quand l'utiliser** : Composant tout-en-un : navigation par catégories + liste de fichiers + bouton d'upload.
**Template canonique** :
```html
<ta-files-display
  [files$]="files$"
  [menu]="navigationMenu"
  [tempFiles]="pendingFiles"
  [fileType]="'Image'"
  [canAddFile]="true"
  (fileSelected)="onFileSelected($event)"
  (moreInformationSelected)="onMoreInfo($event)"
  (fileUploading)="onFileUploading($event)">
</ta-files-display>
```
**Inputs** :
- `files$: Observable<FileData[]>` (required) — flux de fichiers
- `menu: Menu` (required) — menu de navigation latérale
- `tempFiles: FileData[]` (required) — fichiers en cours d'upload
- `fileType: FileType` (required) — `'Image' | 'Document'`
- `canAddFile: boolean` — affiche le bouton d'ajout (défaut: `true`)

**Outputs** :
- `fileSelected: FileData & { index: number }`
- `moreInformationSelected: FileData`
- `fileUploading: FileStructure[]` — fichiers sélectionnés pour upload

**Notes** : Pour `'Document'`, sélection simple. Pour `'Image'`, sélection multiple.
