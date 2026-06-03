# `InputRadio<T>` (extends `InputBase<T>`)

**Quand l'utiliser** : Choix exclusif parmi plusieurs options affichées visuellement (boutons radio). Supporte des options avec icônes.

**Champs ajoutés vs `InputBase`** :
- `options: Observable<{ id: T; name?: string; icon?: TaIconType }[]>` — liste des options

**Interface de config** :
```typescript
new InputRadio({
  key: 'gender', label: 'form.gender',
  options: of([{ id: 'M', name: 'form.male' }, { id: 'F', name: 'form.female' }])
})
// Avec icônes :
new InputRadio({ key: 'type', options: of([{ id: 'A', icon: TaIconType.star }]) })
```

**Notes** : `controlType = 'radio'`, `type = 'radioGroup'`. Clic sur option déjà sélectionnée la désélectionne (remet à `null`). Les `name` sont des clés i18n.
