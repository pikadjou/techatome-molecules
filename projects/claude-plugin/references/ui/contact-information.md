# `<ta-contact-information>` — `ContactInformationComponent`
**Quand l'utiliser** : Afficher une information de contact (téléphone, email, adresse) avec icône.
**Template canonique** :
```html
<ta-contact-information [value]="user.email" [icon]="'email'" />
<ta-contact-information [value]="user.phone" [localIcon]="TaIconType.Phone" />
```
**Inputs** :
- `value` (required) : `string | null` — texte à afficher
- `icon` : `string` — icône Material
- `localIcon` : `TaIconType` — icône locale (alternative à `icon`)
