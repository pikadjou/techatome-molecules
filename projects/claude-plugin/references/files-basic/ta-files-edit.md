# `<ta-files-edit>` — `FileEditComponent`
**Quand l'utiliser** : Éditeur d'image interactif (dessiner, ajouter texte/formes, undo/redo) basé sur tui-image-editor.
**Template canonique** :
```html
<ta-files-edit
  [imagePath]="imageUrl"
  [saveImage$]="triggerSave$"
  (savedImage)="onImageSaved($event)">
</ta-files-edit>
```
**Inputs** :
- `imagePath: string` (required) — URL de l'image à éditer
- `saveImage$: Observable<null>` (required) — observable pour déclencher la sauvegarde

**Outputs** :
- `savedImage: Blob` — blob de l'image éditée

**Notes** : Outils disponibles : dessin libre, lignes, formes (rect/cercle/triangle), texte. Couleurs et taille de brush configurables. Nécessite `tui-image-editor`.
