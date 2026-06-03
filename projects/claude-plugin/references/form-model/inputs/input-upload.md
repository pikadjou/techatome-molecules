# `InputUpload` (extends `InputBase<InputUploadValue[]>`)

**Quand l'utiliser** : Upload de documents (PDF, Word, Excel, texte) avec progress bar.

**Type de valeur** :
```typescript
type InputUploadValue = { id: string; url: string; name?: string }
```

**Champs ajoutés vs `InputBase`** :
- `confirmButton: boolean` (défaut : `false`) — si `true`, la valeur n'est confirmée que sur action explicite (sinon, confirmée dès upload terminé)

**Interface de config** :
```typescript
new InputUpload({ key: 'documents', label: 'form.documents', value: existingDocs })
```

**Méthodes** :
- `confirmValue(ids: InputUploadValue[])` — confirme la liste de fichiers uploadés

**Notes** : `controlType = 'upload'`. Supporte drag & drop et upload Capacitor (mobile). Utilise `TaDocumentsService` en interne.
