# `NotificationBoxComponent` — conteneur de toasts

**Sélecteur** : `ta-notification-box`

**Import** : `import { NotificationBoxComponent } from '@ta/notification'`

**Quand l'utiliser** : Placer une seule fois dans le layout principal de l'application pour afficher les toasts.

**Usage** :
```html
<!-- Dans app.component.html ou le layout principal -->
<ta-notification-box></ta-notification-box>
<router-outlet></router-outlet>
```

**Comportement** :
- S'abonne automatiquement à `TaNotificationService.newNotification$`
- Affiche les notifications via `ta-notification-inline`
- Les notifications non-persistantes disparaissent après **3 secondes** (AUTO_DISMISS_DELAY)
- Les notifications persistantes restent jusqu'à clic sur "fermer"

**API publique** :
```typescript
public list: NotificationItem[]  // liste des notifications actives
public dismiss(id: string): void // fermer une notification manuellement
```

**Notes** :
- Aucun input requis — tout est géré via `TaNotificationService`
- À placer en dehors du `<router-outlet>` pour persister entre les navigations
- Ne pas instancier plusieurs fois (singleton de service)
