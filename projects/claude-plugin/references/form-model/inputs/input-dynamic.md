# `InputDynamic` (extends `InputBase<{ [index: string]: any }>`)

**Quand l'utiliser** : Liste dynamique d'inputs répétables (ex: liste d'adresses, d'URLs, de contacts). Chaque entrée suit le même template de champs.

**Champs ajoutés vs `InputBase`** :
- `inputsGroup: { [key: string]: InputBase<any>[] }` — groupes d'inputs existants (pré-remplis)
- `template: IInputTemplateDynamic[]` — template d'un groupe (`{ type: FactoryInputType, options: IInputBase }`)
- `listChanged$: Subject<void>` — émet quand un groupe est ajouté/supprimé
- `firstRender: boolean` (défaut : `true`) — ajoute un groupe vide à l'init si `inputsGroup` est vide

**Interface de config** :
```typescript
new InputDynamic({
  key: 'contacts', label: 'form.contacts',
  template: [
    { type: 'InputTextBox', options: { key: 'name', label: 'form.name' } },
    { type: 'InputEmail', options: { key: 'email', label: 'form.email' } },
  ]
})
```

**Méthodes** :
- `add(key?: string)` — ajoute un nouveau groupe d'inputs
- `remove(id: string)` — supprime un groupe

**Notes** : `controlType = 'dynamic'`. Crée un `FormGroup` enfant. Base de `InputTranslation`.
