# `InputCulture` (extends `InputDropdown<string>`)

**Quand l'utiliser** : Sélection d'une langue/culture dans la liste des cultures supportées (`@ta/utils` `Culture` enum).

**Champs ajoutés vs `InputDropdown`** : aucun — `options$` est fourni automatiquement.

**Interface de config** :
```typescript
new InputCulture({ key: 'language', label: 'form.language', value: 'fr' })
```

**Notes** : `controlType = 'culture'`. Les options sont générées automatiquement depuis l'enum `Culture` avec les clés i18n `ui.culture.long.*`. Rendu par `CultureComponent` (`ta-input-culture`) qui utilise `DropdownComponent` en interne.
