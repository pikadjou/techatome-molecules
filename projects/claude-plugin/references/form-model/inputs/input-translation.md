# `InputTranslation` (extends `InputDynamic`)

**Quand l'utiliser** : Saisie d'une valeur dans plusieurs langues — génère dynamiquement un groupe d'inputs par culture.

**Champs ajoutés vs `InputDynamic`** :
- `mainCulture: Culture | null` — culture principale affichée par défaut

**Interface de config** :
```typescript
new InputTranslation({
  key: 'name', label: 'form.name',
  mainCulture: Culture.fr,
  template: [
    { type: 'InputTextBox', options: { key: 'InputTextBox', label: 'form.name' } }
  ],
  value: { fr: { InputTextBox: 'Bonjour' }, en: { InputTextBox: 'Hello' } }
})
```

**Notes** : `controlType = 'translation'`. `firstRender = false` par défaut. `composedKeyForGroup = false`. La méthode `add(culture: string)` ajoute un groupe par code culture. Les clés de `value` sont les codes culture (ex: `'fr'`, `'en'`).

Voir aussi `InputDynamicTranslation` pour une version simplifiée à un seul champ texte par culture.
