# `<ta-files-upload>` — `UploadComponent`
**Quand l'utiliser** : Bouton d'action pour prendre une photo, uploader une image ou sélectionner un fichier (Capacitor + web).
**Template canonique** :
```html
<ta-files-upload
  [features]="['upload-pic', 'upload-file']"
  [canSelectMultipleFiles]="true"
  [showInActionButton]="true"
  (filesPicked)="onFilesPicked($event)">
</ta-files-upload>
```
**Inputs** :
- `features: Feature[]` — fonctionnalités actives : `'take-pic' | 'upload-pic' | 'upload-file'`
- `canSelectMultipleFiles: boolean` — sélection multiple (défaut: `false`)
- `showInActionButton: boolean` — affiche dans un `ActionButtonComponent` (défaut: `true`)

**Outputs** :
- `filesPicked: FileStructure[]` — fichiers sélectionnés (`{ file: File; localUrl: string | null }`)

**Notes** : Utilise Capacitor Camera + FilePicker. Supporte PDF, Word, Excel, texte pour `upload-file`.
