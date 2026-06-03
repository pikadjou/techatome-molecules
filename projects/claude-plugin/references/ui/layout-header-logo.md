# `<ta-layout-header-logo>` — `LayoutHeaderLogoComponent`
**Quand l'utiliser** : En-tête avec logo de l'app, avatar utilisateur et notifications.
**Template canonique** :
```html
<ta-layout-header-logo
  [profile]="{ template: profileTpl, user: { naming: { name: 'Dupont', firstName: 'Jean', trigram: 'JDU' } } }"
  [notificationTemplate]="notifTpl"
/>
```
**Inputs** :
- `profile` : `{ template: TemplateRef, user: { profilePictureUrl?, naming: UserLogoNaming | null } } | null`
- `notificationTemplate` : `TemplateRef<any> | null`
- `askClosing$` : `Observable<null> | undefined`

**Notes** : Clic logo → navigue vers `/`. Extend `TaBaseComponent`.
