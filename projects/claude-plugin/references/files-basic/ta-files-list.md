# `<ta-files-list>` — `FileListComponent`
**Quand l'utiliser** : Affiche une liste de fichiers/images avec sélection, informations et suppression.
**Template canonique** :
```html
<ta-files-list
  [files]="fileList"
  [canDeleteFile]="true"
  (fileSelected)="onFileClick($event)"
  (moreInformationSelected)="onMoreInfo($event)"
  (fileDeleted)="onDelete($event)">
</ta-files-list>
```
**Inputs** :
- `files: FileData[]` — liste des fichiers à afficher
- `canDeleteFile: boolean` — affiche le bouton de suppression (défaut: `false`)

**Outputs** :
- `fileSelected: FileData & { index: number }` — clic sur un fichier
- `moreInformationSelected: FileData` — clic sur "plus d'infos"
- `fileDeleted: FileData` — clic sur supprimer

**Type** `FileData` (depuis `@ta/utils`) : `{ id, name, url, type: FileType, isLoading?, ... }`
