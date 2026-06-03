# `InputWysiswyg` (extends `InputBase<WysiswgBlockData[] | null>`)

**Quand l'utiliser** : Éditeur de texte riche (WYSIWYG) basé sur EditorJS.

**Champs ajoutés vs `InputBase`** :
- `enabledTools: EditorToolType[]` (défaut : `EDITOR_ALL_TOOLS`) — outils activés
- `placeholder: string` (défaut : `''`)

**Interface de config** :
```typescript
new InputWysiswyg({ key: 'content', label: 'form.content' })
new InputWysiswyg({ key: 'content', stringValue: existingJsonString }) // valeur JSON stringifiée
```

**Notes** : `controlType = 'wysiswyg'`. `stringValue` est parsé automatiquement depuis JSON. La valeur stockée est un tableau de blocs EditorJS (`WysiswgBlockData[]`). Rendu par `WysiswygComponent` de `@ta/form-input`.
