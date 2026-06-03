# `InputChoices` (extends `InputDropdown<string[]>`)

**Quand l'utiliser** : Sélection avancée avec panel, recherche et templates personnalisés. Préférer à `InputDropdown` quand les options ont des données riches (`data`) ou nécessitent une recherche serveur.

**Type d'option** :
```typescript
type InputChoicesOption = { id: string; name: string; disabled?: boolean; data: any }
```

**Champs ajoutés vs `InputDropdown`** :
- `advancedSearch$?: (search?: string) => Observable<InputChoicesOption[]>` — recherche côté serveur (debounced 500ms)
- `choiceTemplate?: { one?: TemplateRef; list?: TemplateRef }` — templates personnalisés
- `onlyTemplate?: boolean` — n'afficher que le template
- `showNullableFields: boolean` (défaut : `false`) — option "sans valeur"
- `focusSearch: boolean` (défaut : `false`) — focus automatique sur la recherche

**Interface de config** :
```typescript
new InputChoices({
  key: 'users', label: 'form.users',
  options$: of([{ id: '1', name: 'Alice', data: {} }]),
  multiple: true
})
// Avec recherche serveur :
new InputChoices({ key: 'users', advancedSearch$: (s) => this._userService.search$(s) })
```

**Notes** : `controlType = 'choices'`. La valeur est toujours `string[]` même en sélection simple.
