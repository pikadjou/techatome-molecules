# `InputAddress` (extends `InputBase<Partial<IAddressValue>>`)

**Quand l'utiliser** : Saisie d'une adresse complète (rue, numéro, étage, ville, code postal, pays).

**Type de valeur** :
```typescript
interface IAddressValue {
  street: string | null; number: string | null; floor: string | null;
  city: string | null; zipCode: string | null; country: string | null;
  longitude: number | null; latitude: number | null;
}
```

**Sous-inputs publics** (chaque champ est un `InputTextBox`) :
`street`, `number`, `floor`, `city`, `country`, `zipCode`

**Interface de config** :
```typescript
new InputAddress({ key: 'address', label: 'form.address', value: data?.address })
```

**Méthodes** :
- `updateValue()` — recompose la valeur depuis les sous-inputs
- `static formatAddressForm(data)` — extrait les champs depuis un objet plat

**Notes** : `controlType = 'address'`. Le setter `value` distribue les données dans les sous-inputs automatiquement.
