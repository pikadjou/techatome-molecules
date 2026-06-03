# `bceValidator()` — ValidatorFn

**Quand l'utiliser** : Valider un numéro BCE belge (numéro d'entreprise).

**Signature** :
```typescript
bceValidator(): ValidatorFn
```

**Regex** : `/^[01]\d{3}[. ]?\d{3}[. ]?\d{3}$/`

**Usage** :
```typescript
new InputTextBox({ key: 'bce', label: 'form.bce', validators: [bceValidator()] })
```

**En cas d'erreur** : `{ bce: true }`. Contrôle vide → valide. Exporté depuis `@ta/form-model`.
