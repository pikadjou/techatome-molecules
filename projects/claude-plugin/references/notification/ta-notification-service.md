# `TaNotificationService` — afficher des notifications toast

**Quand l'utiliser** : Afficher des messages de retour utilisateur (succès, erreur, avertissement, info).

**Import** : `import { TaNotificationService } from '@ta/notification'`

**Méthodes** :
```typescript
addNotification(message: string, code: ENotificationCode, persistent?: boolean): void
removeNotification(id: string): void
```

**Subjects publics** :
```typescript
newNotification$: Subject<NotificationItem>      // émis à chaque nouvelle notif
removeNotification$: Subject<string>             // émis à chaque suppression
```

**`NotificationItem`** :
```typescript
type NotificationItem = {
  id: string;
  message: string;
  code: ENotificationCode;
  persistent: boolean;   // true = ne disparaît pas auto (défaut pour les erreurs)
};
```

**Usage courant** :
```typescript
private _notification = inject(TaNotificationService);

// Succès (auto-dismiss après 3s)
this._notification.addNotification('form.saved', ENotificationCode.success);

// Erreur persistante (reste jusqu'à fermeture manuelle)
this._notification.addNotification('form.error', ENotificationCode.error);

// Info ou avertissement
this._notification.addNotification('user.updated', ENotificationCode.information);
this._notification.addNotification('quota.warning', ENotificationCode.warning);

// Forcer persistent sur un succès
this._notification.addNotification('message', ENotificationCode.success, true);
```

**Notes** :
- Les messages sont des clés i18n (traduites par `ta-notification-inline`)
- Les erreurs sont `persistent: true` par défaut
- Le reste (succès, info, warning) disparaît après **3 secondes** automatiquement
- Nécessite `<ta-notification-box>` dans le layout principal de l'application
