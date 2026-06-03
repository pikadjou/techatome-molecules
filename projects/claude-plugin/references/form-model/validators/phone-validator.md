# `phoneValidator()` — ValidatorFn

**Quand l'utiliser** : Valider un numéro de téléphone via une instance `intl-tel-input`.

**Signature** :
```typescript
phoneValidator(
  getInstance: () => { isValidNumber: () => boolean | null | undefined } | undefined
): ValidatorFn
```

**Comportement** :
- Contrôle vide → valide (utiliser `Validators.required` séparément)
- Instance non disponible ou utils en chargement (`null`) → valide (différé)
- Numéro invalide → `{ validatePhoneNumber: true }`

**Notes** : Ce validateur est ajouté automatiquement par `InputPhoneComponent`. Ne pas l'ajouter manuellement si on utilise `InputPhone` avec `<ta-form>`. Exporté depuis `@ta/form-model`.
