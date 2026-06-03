# `slugValidator()` — ValidatorFn

**Quand l'utiliser** : Valider qu'un champ texte respecte le format slug URL (`lettres-minuscules-et-chiffres`).

**Signature** :
```typescript
slugValidator(): ValidatorFn
```

**Regex** : `/^[a-z0-9]+(?:-[a-z0-9]+)*$/`

**Usage** :
```typescript
new InputTextBox({
  key: 'slug', label: 'form.slug',
  validators: [Validators.required, slugValidator()]
})
```

**En cas d'erreur** : `{ invalidSlug: true }`. Exporté depuis `@ta/form-model`.
