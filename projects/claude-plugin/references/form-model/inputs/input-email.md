# `InputEmail` (extends `InputTextBox`)

**Quand l'utiliser** : Saisie d'adresse email avec validation automatique.

**Champs ajoutés vs `InputTextBox`** : aucun.

**Interface de config** :
```typescript
new InputEmail({ key: 'email', label: 'form.email', value: data?.email })
```

**Notes** : Force `type = 'email'` et ajoute `Validators.email` automatiquement. `controlType = 'textbox'` (même rendu que `InputTextBox`).
