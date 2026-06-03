# `InputPanel` (extends `InputBase<any>`)

**Quand l'utiliser** : Grouper des inputs dans une section avec titre et style. Élément de structuration principal des formulaires complexes.

**Champs ajoutés vs `InputBase`** :
- `children: (InputBase<any> | InputLabel)[]` — inputs enfants du panel
- `containerClass: classAvailable[]` — classes CSS du conteneur
  - `'highlight-title'` — titre mis en évidence (fond coloré)
  - `'with-separator'` — séparateur horizontal entre les sections
  - `'no-title-space'` — supprime l'espace au-dessus du titre
- `contentClass: string` — classes CSS du contenu (`'flex-column g-space-md'`, `'grid'`…)
- `icon?: string` — icône du titre
- `required?: boolean` — affiche un astérisque sur le titre
- `level: 1|2|3|4|5|6` (défaut : `2`) — niveau de heading du titre

**Interface de config** :
```typescript
new InputPanel({
  key: 'section', label: 'form.section',
  containerClass: ['highlight-title', 'with-separator'],
  contentClass: 'flex-column g-space-md',
  children: [
    new InputTextBox({ key: 'name', label: 'form.name' }),
    new InputEmail({ key: 'email', label: 'form.email' }),
  ]
})
```

**Notes** : `controlType = 'panel'`. Pas de `formControl` propre — gère récursivement les formControls de ses enfants. Le `key` du panel n'apparaît pas dans `form.value` (les enfants utilisent leurs propres `key`).
