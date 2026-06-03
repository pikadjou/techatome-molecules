# `NotificationInlineComponent` — notification en ligne

**Sélecteur** : `ta-notification-inline`

**Import** : `import { NotificationInlineComponent } from '@ta/notification'`

**Quand l'utiliser** : Afficher une notification inline dans un formulaire ou une section (pas un toast flottant).

**Inputs** :
```typescript
message = input<string>('');                      // clé i18n ou texte direct
code    = input<ENotificationCode>(ENotificationCode.information);
showClose = input<boolean>(true);                 // afficher le bouton fermer
```

**Outputs** :
```typescript
askClose = output<void>();  // émis quand l'utilisateur clique sur fermer
```

**Usage** :
```html
<!-- Erreur de formulaire -->
<ta-notification-inline
  [message]="'form.validation.error'"
  [code]="ENotificationCode.error"
  (askClose)="hideError()"
></ta-notification-inline>

<!-- Succès sans bouton fermer -->
<ta-notification-inline
  [message]="'user.saved.success'"
  [code]="ENotificationCode.success"
  [showClose]="false"
></ta-notification-inline>
```

**Notes** :
- Le composant se masque si `message` est vide
- Intègre un lien "voir le détail" pour les erreurs (ouvre une `ErrorBoxModal`)
- Classes CSS générées selon le code : `danger`, `warning`, `info`, `success`
