# `ENotificationCode` — codes de notification

**Import** : `import { ENotificationCode } from '@ta/notification'`

**Enum** :
```typescript
enum ENotificationCode {
  none        = 0,  // aucune (style neutre)
  error       = 1,  // rouge, persistant par défaut
  warning     = 2,  // orange, auto-dismiss
  information = 3,  // bleu, auto-dismiss
  success     = 4,  // vert, auto-dismiss
}
```

**Correspondance visuelle** :
| Code | Couleur | Icône | Persistant |
|------|---------|-------|-----------|
| `error` | rouge | `close-tool` | oui |
| `warning` | orange | `warning` | non |
| `information` | bleu | `help` | non |
| `success` | vert | `checked` | non |

**Usage** :
```typescript
this._notification.addNotification('msg.key', ENotificationCode.success);
this._notification.addNotification('error.key', ENotificationCode.error);
```

**Notes** :
- Utilisé aussi dans `NotificationInlineComponent` (input `code`)
- Le code `error (1)` correspond au `NOTIFICATION_CODE_ERROR` de `TaServerErrorService`
