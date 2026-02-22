---
description: Assistant contextuel @ta/notification — toast notifications, ENotificationCode, LAZY_SERVICE_TOKEN
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

- `taNotificationBoxComponent` — `ta-notification-box` : boîte de notification popup
- `taNotificationInlineComponent` — `ta-notification-inline` : notification inline
- `taContainerComponent` — `ta-container` : conteneur de notifications
- `taBulletComponent` — `ta-bullet` : indicateur de notification
- `taErrorBoxComponent` — `ta-error-box` : boîte d'erreur

### Composants items

- `taItemComponent` — élément de notification individuel
- `taIconComponent` — icône d'une notification
- `taInfoComponent` — info d'une notification
- `taTitleComponent` — titre d'une notification

### Composants templates (notifications métier)

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

- `NotificationService` — service principal de gestion des notifications
- `DataService` — service de données des notifications
- `SharedService` — service partagé de notifications
- `Queries` — queries GraphQL des notifications

### DTOs et Enums

- `NotificationDto` — DTO de notification
- `LevelDto` — niveau de notification (info, warning, error, success)
- `SwitchCasesDto` — switch cases pour les types de notification
- Enums du module `notification`

### Module et Provider

- `NotificationModule` — module NgModule (deprecated)
- `provideNotification()` — provider standalone
- `NotificationTranslationService` — service de traduction des notifications

## Patterns d'utilisation

### Configurer les notifications

```typescript
import { provideNotification } from '@ta/notification';

export const appConfig: ApplicationConfig = {
  providers: [provideNotification()],
};
```

### Afficher les notifications dans le template

```typescript
import { taContainerComponent } from '@ta/notification';

@Component({
  standalone: true,
  imports: [taContainerComponent],
  template: `<ta-notification-container />`
})
```

### Envoyer une notification depuis un service

```typescript
import { LevelDto, NotificationService } from '@ta/notification';

@Injectable({ providedIn: 'root' })
export class MyService {
  private notification = inject(NotificationService);

  showSuccess(message: string) {
    this.notification.show({ level: LevelDto.Success, message });
  }

  showError(message: string) {
    this.notification.show({ level: LevelDto.Error, message });
  }
}
```

### Notification inline

```typescript
import { taNotificationInlineComponent } from '@ta/notification';

@Component({
  standalone: true,
  imports: [taNotificationInlineComponent],
  template: `<ta-notification-inline [level]="level" [message]="message" />`
})
```

## Conventions

- Utiliser `provideNotification()` au lieu de `NotificationModule`
- Les niveaux de notification sont définis dans `LevelDto`
- Les templates de notification métier sont dans `items/item/template/`
- Les messages passent par le système de traduction

## Revue de code

- Vérifier que `provideNotification()` est bien dans les providers de l'app
- Vérifier que `ta-notification-container` est présent dans le layout principal
- Vérifier l'utilisation des niveaux `LevelDto` (pas de strings hardcodés)
- Ne pas importer `NotificationModule` dans les nouveaux composants

## Ajout d'un nouveau template de notification

1. Créer dans `projects/notification/src/lib/components/items/item/template/`
2. Exporter depuis `projects/notification/src/lib/components/public-api.ts`
3. Enregistrer dans la factory de notification si nécessaire
