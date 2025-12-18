# @ta/notification

**Purpose:** Notification system with various display formats and business-specific templates

## Exports

### Components - Core
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| NotificationBoxComponent | `ta-notification-box` | Notification box popup | notification, type |
| NotificationInlineComponent | `ta-notification-inline` | Inline notifications | message, type |
| ContainerComponent | `ta-notification-container` | Notification container | notifications |
| ErrorBoxComponent | `ta-error-box` | Error message box | error, dismissible |

### Components - Display Elements
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| ItemComponent | `ta-notification-item` | Notification item | notification |
| BulletComponent | `ta-notification-bullet` | Notification bullet indicator | status |
| IconComponent | `ta-notification-icon` | Notification icon | type, icon |
| InfoComponent | `ta-notification-info` | Notification info | content |
| TitleComponent | `ta-notification-title` | Notification title | title |

### Components - Business Templates
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| InvoicePaymentStatusChangedComponent | `ta-notif-invoice-payment` | Invoice payment status notification | notification |
| NewInvoiceComponent | `ta-notif-new-invoice` | New invoice notification | notification |
| NewQuotationVersionComponent | `ta-notif-new-quotation` | New quotation version notification | notification |
| ProjectStatusChangedComponent | `ta-notif-project-status` | Project status change notification | notification |
| TaskAssignedComponent | `ta-notif-task-assigned` | Task assignment notification | notification |
| TaskDueTodayComponent | `ta-notif-task-due` | Task due today notification | notification |
| TaskNewActivityComponent | `ta-notif-task-activity` | New task activity notification | notification |
| ToDoAssignedComponent | `ta-notif-todo-assigned` | To-do assignment notification | notification |
| ToDoDueTodayComponent | `ta-notif-todo-due` | To-do due today notification | notification |
| UserTaggedInConversationComponent | `ta-notif-user-tagged` | User mention notification | notification |

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| NotificationService | Notification management | show(), showError(), showSuccess(), dismiss() |

### Enums
| Name | Purpose |
|------|---------|
| NotificationType | Notification type enumeration |
| NotificationStatus | Notification status enumeration |

## Usage Example
```typescript
import { NotificationService } from '@ta/notification';

@Component({
  template: `
    <ta-notification-box [notification]="notification"></ta-notification-box>
  `
})
export class MyComponent {
  constructor(private notificationService: NotificationService) {}

  showNotification() {
    this.notificationService.show({
      message: 'Operation completed successfully',
      type: 'success'
    });
  }

  showError() {
    this.notificationService.showError('An error occurred');
  }
}
```

## Dependencies
- @ta/ui
- @ta/icons
- @angular/common
