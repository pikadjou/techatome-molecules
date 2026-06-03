# `InputTextarea` (extends `InputBase<string>`)

**Quand l'utiliser** : Saisie de texte long multi-lignes.

**Champs ajoutés vs `InputBase`** : aucun.

**Interface de config** :
```typescript
new InputTextarea({ key: 'description', label: 'form.description', value: '' })
```

**Notes** : `controlType = 'textarea'`. Rendu par `TextareaComponent` (`ta-input-textarea`).
