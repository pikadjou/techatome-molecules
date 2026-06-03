# `<ta-documents-list>` — `DocumentsListComponent`
**Quand l'utiliser** : Liste de documents (PDF, Word, Excel) avec téléchargement, suppression ou sélection par cases à cocher.
**Template canonique** :
```html
<ta-documents-list
  [documentsIds]="['doc-1', 'doc-2']"
  [actions]="'delete'"
  [emptyMessage]="'Aucun document'"
  (remove)="onRemove($event)">
</ta-documents-list>
```
**Inputs** :
- `documentsIds: string[]` (required) — IDs des documents à afficher
- `actions: 'delete' | 'select' | ''` — mode d'action (défaut: `''`)
- `emptyMessage: string` — message si liste vide
- `defaultSelected: string[]` — IDs pré-sélectionnés (mode select)
- `readonly: boolean` — désactive les actions

**Outputs** :
- `remove: string` — ID du document à supprimer
- `checkedFilesChanged: InputUploadValue[]` — fichiers sélectionnés (mode select)

**Notes** : Charge les documents via `TaDocumentsService`. Gère loading/error/empty.
