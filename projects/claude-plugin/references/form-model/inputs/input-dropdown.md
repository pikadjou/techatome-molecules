# `InputDropdown<T = string | string[]>` (extends `InputBase<T>`)

**Quand l'utiliser** : Sélection dans une liste d'options, simple ou multiple.

**Champs ajoutés vs `InputBase`** :
- `options$: Observable<{ id: string; name: string; disabled?: boolean }[]>` — liste des options
- `multiple: boolean` (défaut : `false`) — sélection multiple
- `showNothingOption: boolean` (défaut : `false`) — option vide (ignorée si `multiple`)
- `withSearch: boolean` (défaut : `false`) — filtre de recherche interne
- `width?: string` (défaut : `'100%'`) — largeur du panel

**Interface de config** :
```typescript
new InputDropdown({
  key: 'role', label: 'form.role',
  options$: of([{ id: 'admin', name: 'Admin' }, { id: 'user', name: 'User' }]),
  value: 'admin'
})
new InputDropdown({ key: 'tags', label: 'form.tags', options$: tags$, multiple: true })
```

**Notes** : `controlType = 'dropdown'`. Base de `InputChoices` et `InputCulture`. Pour des options chargées via API, passer un `Observable` depuis un service.
