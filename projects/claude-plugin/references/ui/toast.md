# `<ta-toast>` — `ToastComponent`
**Quand l'utiliser** : Message toast avec style lié à un code de notification (info, succès, erreur).
**Template canonique** :
```html
<ta-toast [code]="ENotificationCode.success">
  Opération réussie
</ta-toast>
```
**Inputs** :
- `code` : `ENotificationCode` — `ENotificationCode.information` (défaut) | `.success` | `.warning` | `.error`

**Notes** : Utilise `<ng-content>`. Pour les toasts dynamiques, préférer `TaNotificationService` depuis `@ta/notification`.
