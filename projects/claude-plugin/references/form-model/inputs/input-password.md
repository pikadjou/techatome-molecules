# `InputPassword` (extends `InputTextBox`)

**Quand l'utiliser** : Saisie de mot de passe avec masquage.

**Champs ajoutés vs `InputTextBox`** : aucun.

**Interface de config** :
```typescript
new InputPassword({ key: 'password', label: 'form.password' })
```

**Notes** : Force `type = 'password'` et ajoute `Validators.required` automatiquement. `controlType = 'textbox'`. Le composant `TextBoxComponent` gère le toggle show/hide.
