# `InputSchema` (extends `InputBase<string>`)

**Quand l'utiliser** : Upload et affichage d'un schéma/image avec recadrage (type plan, signature, schéma technique).

**Champs ajoutés vs `InputBase`** :
- `update: ((data: FileStructure[]) => Promise<Picture[]>) | null` — callback d'upload

**Interface de config** :
```typescript
new InputSchema({
  key: 'plan', label: 'form.plan',
  value: existingBase64OrUrl,
  update: (files) => this._service.uploadSchema(files)
})
```

**Notes** : `controlType = 'schema'`. La valeur est une URL ou base64 de l'image. Ouvre une modal avec `InputSchemaModal` pour le recadrage/upload. Rendu par `InputSchemaComponent` (`ta-input-schema`).
