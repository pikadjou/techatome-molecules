---
description: Assistant contextuel @ta/notification — toast notifications, ENotificationCode, NotificationItem, persistent errors, LAZY_SERVICE_TOKEN
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/notification — Assistant contextuel

Tu es un expert de la librairie `@ta/notification` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/notification`
**Import path** : `@ta/notification`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/notification/`

## Exports clés

### Composants principaux (`lib/components/`)

- `NotificationBoxComponent` — `ta-notification-box` : conteneur fixe en bas à droite, empile les notifications, gère auto-dismiss et persistance
- `NotificationInlineComponent` — `ta-notification-inline` : notification individuelle avec barre latérale colorée, titre typé, message, bouton close, lien "Voir détails" pour les erreurs
- `BulletComponent` — `ta-bullet` : indicateur de compteur de notifications
- `ErrorBoxModal` — `ta-error-box` : modale de détail des erreurs serveur (query, variables, stack)

### Composants items (notifications métier)

- `InvoicePaymentStatusChangedComponent`
- `NewInvoiceComponent`
- `NewQuotationVersionComponent`
- `ProjectStatusChangedComponent`
- `TaskAssignedComponent`
- `TaskDueTodayComponent`
- `TaskNewActivityComponent`
- `ToDoAssignedComponent`
- `ToDoDueTodayComponent`
- `UserTaggedInConversationComponent`

### Services

- `TaNotificationService` — service principal de dispatch des notifications
- `TaNotificationDataService` — service de données (fetch GraphQL)
- `TaNotificationSharedService` — service de configuration partagée
- `LAZY_SERVICE_TOKEN` — InjectionToken pour injection lazy

### Types et Enums

- `NotificationItem` — type complet d'une notification : `{ id, message, code, persistent }`
- `ENotificationCode` — enum : `none | error | warning | information | success`
- `NotificationDto` — DTO backend
- `ENotificationLevel` — niveau de notification backend

## Système de notifications (toast)

### Architecture

```
TaNotificationService.addNotification(message, code, persistent?)
  → émet sur newNotification$ (Subject<NotificationItem>)
  → NotificationBoxComponent écoute et affiche

TaNotificationService.removeNotification(id)
  → émet sur removeNotification$ (Subject<string>)
  → NotificationBoxComponent retire la notification
```

### NotificationItem

```typescript
type NotificationItem = {
  id: string;           // GUID auto-généré
  message: string;      // clé de traduction ou texte
  code: ENotificationCode;
  persistent: boolean;  // true = reste jusqu'au clic sur close
};
```

### Persistance

- **Erreurs** (`ENotificationCode.error`) : persistantes par défaut — restent affichées jusqu'à fermeture manuelle
- **Succès / Info / Warning** : auto-dismiss après 3 secondes
- Le paramètre `persistent` peut être forcé explicitement

### Envoyer une notification

```typescript
import { ENotificationCode, TaNotificationService } from '@ta/notification';
// ou via LAZY_SERVICE_TOKEN pour les modules lazy

private _notificationService = inject(TaNotificationService);

// Succès (auto-dismiss 3s)
this._notificationService.addNotification('notification.common.success', ENotificationCode.success);

// Erreur (persistante, reste affichée avec bouton close)
this._notificationService.addNotification('notification.common.error', ENotificationCode.error);

// Info avec persistance forcée
this._notificationService.addNotification('my.info.key', ENotificationCode.information, true);

// Retirer une notification par id
this._notificationService.removeNotification(id);
```

### Afficher le conteneur dans le layout

```html
<!-- Dans le layout principal de l'app -->
<ta-notification-box></ta-notification-box>
```

### Design des notifications inline

Structure visuelle :
```
┌──────────────────────────────────────────┐
│ ██ [icon]  Type label            [x]     │
│ ██                                       │
│ ██  Message text                         │
│ ██                                       │
│ ██  [Voir détails]        (si erreur)    │
└──────────────────────────────────────────┘
```

- Barre latérale colorée (4px) : rouge (error), orange (warning), bleu (info), vert (success)
- Titre en gras avec icône typée
- Bouton close toujours visible pour les notifications persistantes
- Lien "Voir détails" pour les erreurs → ouvre `ErrorBoxModal`

### Inputs de NotificationInlineComponent

| Input | Type | Défaut | Description |
|-------|------|--------|-------------|
| `message` | `string` | `""` | Message ou clé de traduction |
| `code` | `ENotificationCode` | `information` | Type de notification |
| `showClose` | `boolean` | `true` | Affiche le bouton close |

### Bridge GraphQL → Notifications

Les erreurs GraphQL sont automatiquement envoyées au système de notification via `NOTIFICATION_HANDLER_TOKEN` (voir `/server`). Quand configuré, chaque erreur GraphQL affiche un toast persistant avec le message d'erreur et un lien "Voir détails".

## Traductions (i18n)

Namespace : `notification` (auto-préfixé par `TaLazyTranslationService`)

Fichiers : `projects/notification/src/i18n/{en,fr}.json`

Clés principales :
- `notification.type.{error,warning,info,success}` — titres
- `notification.inline.label.{error,warning,info,success}` — messages par défaut
- `notification.action.{close,dismiss,viewDetails}` — actions

## Conventions

- Utiliser `ENotificationCode` (pas de nombres ou strings)
- Les messages passent par le système de traduction
- Les erreurs sont persistantes par défaut
- Pour les modules lazy : injecter via `LAZY_SERVICE_TOKEN`
- `ta-notification-box` doit être présent dans le layout principal

## Revue de code

- Vérifier que `ta-notification-box` est présent dans le layout principal
- Vérifier l'utilisation de `ENotificationCode` (pas de valeurs hardcodées)
- Vérifier que les erreurs GraphQL passent bien par le bridge (NOTIFICATION_HANDLER_TOKEN configuré)
- Ne pas oublier les deux fichiers i18n (en.json + fr.json)
