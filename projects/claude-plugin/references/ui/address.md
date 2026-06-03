# `<ta-address>` — `AddressComponent`
**Quand l'utiliser** : Afficher une adresse postale formatée (rue, numéro, ville, code postal, étage).
**Template canonique** :
```html
<ta-address [address]="location.address" />
```
**Inputs** :
- `address` (required) : `Address` — `{ id, street, number, city, zipCode, country?, floor }`
