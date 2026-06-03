# `<ta-my-account>` — `MyAccountComponent`
**Quand l'utiliser** : Bloc de profil utilisateur avec avatar, nom, email, menu de déconnexion et menu personnalisé.
**Template canonique** :
```html
<ta-my-account
  [profileMenu]="menu"
  [appVersion]="'1.0.0'"
  [isEditable]="true"
  (navigateEvent)="goToProfile()"
  (navigateEditEvent)="goToEditProfile()">
</ta-my-account>
```
**Inputs** :
- `profileMenu: Menu | null` — menu supplémentaire à afficher
- `appVersion: string | null` — version de l'app affichée
- `isEditable: boolean` — affiche le bouton d'édition

**Outputs** :
- `navigateEvent` — clic sur le profil
- `navigateEditEvent` — clic sur modifier le profil

**Notes** : Charge automatiquement le profil via `TA_USER_SERVICE`. Inclut un menu de déconnexion.
