# `<ta-cms-editor-input>` — `EditorInputComponent`
**Quand l'utiliser** : Éditeur WYSIWYG riche basé sur Editor.js (titres, listes, citations, images, couleurs, mentions).
**Template canonique** :
```html
<ta-cms-editor-input
  [initValue]="existingBlocks"
  [enabledTools]="['header', 'list', 'image']"
  [saveOnChange]="false"
  [requestSave$]="saveTrigger$"
  (changed)="onChanged($event)"
  (saved)="onSaved($event)">
</ta-cms-editor-input>
```
**Inputs** :
- `initValue: WysiswgBlockData[] | null` — contenu initial
- `enabledTools: EditorToolType[]` — outils activés (défaut: tous)
- `saveOnChange: boolean` — sauvegarde automatique à chaque changement
- `maxHeight: boolean` — limite la hauteur de l'éditeur
- `placeholder: string` — texte placeholder
- `users: { id: string; name: string }[]` — utilisateurs pour le tool mention
- `requestSave$: Observable<void>` — déclencheur externe de sauvegarde
- `clear$: Observable<void>` — déclencheur de vidage
- `setNewValue$: Observable<{ blocks: WysiswgBlockData[] | string | null; saveAfter?: boolean }>` — mise à jour externe du contenu

**Outputs** :
- `changed: { blocks: WysiswgBlockData[] }` — émet à chaque modification
- `saved: EditorInputSavedData` — émet lors d'une sauvegarde (`{ blocks, tags: string[] }`)

**Outils disponibles** (`EditorToolType`) :
`'header' | 'list' | 'quote' | 'delimiter' | 'warning' | 'color' | 'image' | 'mention'`

**Notes** : Supporte l'upload d'images via `TaDocumentsService`. Les mentions génèrent des tags extractibles depuis les blocs sauvegardés. I18n automatique via `TaTranslationService`.

---

# `<ta-cms-editor-blocks>` — `BlockTextComponent`
**Quand l'utiliser** : Rendu en lecture seule des blocs Editor.js sauvegardés.
```html
<ta-cms-editor-blocks [blocks]="savedBlocks"></ta-cms-editor-blocks>
```
**Inputs** :
- `blocks: OutputBlockData[]` (required) — blocs Editor.js à afficher
