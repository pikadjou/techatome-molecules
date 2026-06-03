# `InputLabel` (extends `InputBase<null>`)

**Quand l'utiliser** : Texte statique ou titre dans un formulaire — ne crée pas de `formControl`.

**Champs ajoutés vs `InputBase`** :
- `icon?: string` — icône à gauche du label
- `level?: 1|2|3|4|5|6` — niveau de heading
- `required?: boolean` — affiche un astérisque

**Interface de config** :
```typescript
new InputLabel({ label: 'form.sectionTitle', icon: 'info-circle', level: 3 })
```

**Notes** : `controlType = 'label'`. `createFormControl()` est une no-op — ne contribue jamais à `form.value`. Peut être utilisé comme séparateur visuel ou titre intermédiaire dans une liste d'inputs.
