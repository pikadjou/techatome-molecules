# `InputPhone` (extends `InputBase<string>`)

**Quand l'utiliser** : Saisie de numéro de téléphone international avec sélecteur de pays.

**Champs ajoutés vs `InputBase`** :
- `preferredCountries: string[]` (défaut : `['be', 'fr']`) — pays affichés en premier

**Interface de config** :
```typescript
new InputPhone({ key: 'phone', label: 'form.phone', value: data?.phone })
```

**Notes** : `controlType = 'phone'`, `type = 'tel'`. La validation est gérée par `intl-tel-input` via `phoneValidator()` — ajouté automatiquement par le composant `InputPhoneComponent`. La valeur stockée est au format E.164 (ex: `+32478123456`).
