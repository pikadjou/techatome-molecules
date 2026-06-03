# `<ta-file-image>` — `FileImageComponent`
**Quand l'utiliser** : Afficher l'icône correspondant au type de fichier (PDF, DOCX, XLSX, autre).
**Template canonique** :
```html
<ta-file-image [fileName]="document.filename" [size]="'md'" />
```
**Inputs** :
- `fileName` (required) : `string` — nom du fichier avec extension
- `size` : `TaSizes` — `'sm'` (défaut)

**Notes** : Détecte automatiquement `.pdf`, `.docx`, `.xlsx` → icône correspondante. Autres extensions → icône générique.
