# `<ta-input-schema>` — `InputSchemaComponent`

**Quand l'utiliser** : Rendu d'un `InputSchema` — upload d'un schéma/image avec modal de recadrage.

**Usage direct** :
```html
<ta-input-schema [input]="mySchemaInput" [standalone]="true"></ta-input-schema>
```

**Méthodes publiques** :
- `openDialog()` — ouvre la modal `InputSchemaModal`
- `onSavedFile(data)` — callback après sélection/recadrage

**Getters** :
- `pics: FileData[] | null` — image courante comme `FileData`
- `isCircularButton: boolean` — bouton rond si image présente

**Notes** : Étend `TaAbstractInputComponent<InputSchema>`. `isModalOpen` est un signal. La valeur est base64 après conversion via `getBase64FromFile()`.
