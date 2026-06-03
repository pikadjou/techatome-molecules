---
description: Assistant contextuel @ta/notification — catalogue compact + pointeurs vers references/notification/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/notification — Assistant contextuel

Tu es un expert de la librairie `@ta/notification` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service, type, enum…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/notification/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, outputs ou l'API du service.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/notification`
- **Import path** : `@ta/notification`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/notification/`

## Catalogue

Format : nom (`Class`) — description courte. Le fichier de référence est `references/notification/<name>.md`.

### Composants principaux

- `ta-notification-box` (`NotificationBoxComponent`) — conteneur fixe en bas à droite, empile les notifications, gère auto-dismiss et persistance. **À placer dans le layout principal.**
- `ta-notification-inline` (`NotificationInlineComponent`) — notification individuelle avec barre latérale colorée, titre typé, message, bouton close.
- `ta-bullet` (`BulletComponent`) — indicateur de compteur de notifications.
- `ta-error-box` (`ErrorBoxModal`) — modale de détail des erreurs serveur.

### Services

- `TaNotificationService` — service principal de dispatch des notifications (`addNotification`, `removeNotification`).
- `TaNotificationDataService` — service de données (fetch GraphQL des notifications backend).
- `TaNotificationSharedService` — service de configuration partagée.
- `LAZY_SERVICE_TOKEN` — `InjectionToken` pour injection lazy depuis modules lazy.

### Types et Enums

- `ENotificationCode` — enum : `none | error | warning | information | success`.
- `NotificationItem` — `{ id, message, code, persistent }`.
- `NotificationDto` — DTO backend.
- `ENotificationLevel` — niveau de notification backend.

## Règles d'or

- `ta-notification-box` doit être présent **une seule fois** dans le layout principal de l'app.
- Utiliser `ENotificationCode` (jamais de valeurs hardcodées).
- Les erreurs (`ENotificationCode.error`) sont **persistantes par défaut** (pas d'auto-dismiss).
- Les succès/info/warning sont auto-dismiss après 3 secondes.

## Conventions

- Messages via le système de traduction (clés i18n, pas de texte hardcodé).
- Pour modules lazy : injecter via `LAZY_SERVICE_TOKEN`.
- Bridge GraphQL → notifications via `NOTIFICATION_HANDLER_TOKEN` dans `@ta/server`.
