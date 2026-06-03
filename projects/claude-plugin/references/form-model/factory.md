# `InputFactory` — fabrique d'inputs

**Quand l'utiliser** : Créer un `InputBase` à partir d'une clé string, notamment dans `InputDynamic.template`.

**Types supportés** :
```typescript
type FactoryInputType =
  | 'InputCheckBox' | 'InputRadio' | 'InputColorPicker' | 'InputDropdown'
  | 'InputImages' | 'InputLabel' | 'InputLogo' | 'InputNumber' | 'InputPanel'
  | 'InputSchema' | 'InputTextarea' | 'InputTextBox' | 'InputWysiswyg' | 'InputUpload'
```

**Usage** :
```typescript
const input = InputFactory.getInput('InputTextBox', { key: 'name', label: 'form.name' });

// Dans InputDynamic.template :
template: [
  { type: 'InputTextBox', options: { key: 'title', label: 'form.title' } },
  { type: 'InputDropdown', options: { key: 'type', label: 'form.type', options$: ... } },
]
```

**Notes** : Renvoie `InputTextBox` par défaut pour les types inconnus. `templateChildren` dans les options est résolu avant création (pour les panels imbriqués). Exporté depuis `@ta/form-model`.
