# `<ta-inline-profile-data>` — `InlineProfileDataComponent`
**Quand l'utiliser** : Afficher les données de profil d'un utilisateur en ligne (nom, titre, email, téléphone) avec avatar optionnel.
**Template canonique** :
```html
<ta-inline-profile-data
  [profile]="{ title: { main: 'Jean Dupont', second: 'Développeur', sub: 'Tech' }, email: 'j@d.be' }"
  [userLogo]="{ user: { firstname: 'Jean', lastname: 'Dupont' }, size: 'md' }"
/>
```
**Inputs** :
- `profile` (required) : `IProfileData` — `{ title?: { main?, second?, sub? }, phoneNumber?, email? }`
- `userLogo` : `{ user: UserLogoData; size?: TaSizes } | null | undefined`
