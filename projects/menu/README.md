# @ta/menu

**Purpose:** Navigation and menu components with bottom sheets and context menus

## Exports

### Components - Menu
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| MenuComponent | `ta-menu` | Main menu container | items, orientation |
| MenuItemComponent | `ta-menu-item` | Individual menu items | item, icon, label |
| MainMenuComponent | `ta-main-menu` | Application main menu | menuItems, collapsed |
| ListComponent | `ta-list` | Menu list display | items, selectable |

### Components - Bottom Sheet
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| BottomSheetTemplateBasicComponent | `ta-bottom-sheet-basic` | Basic bottom sheet template | title, content |
| BottomSheetTemplateGenericComponent | `ta-bottom-sheet-generic` | Generic bottom sheet template | data, config |

### Components - Navigation
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| NavigationComponent | `ta-navigation` | Navigation container | routes, active |
| ToggleNavigationComponent | `ta-toggle-navigation` | Navigation toggle | isOpen, onToggle |
| ContextMenuComponent | `ta-context-menu` | Right-click context menu | items, position |

### Components - Quick Actions
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| QuickActionsComponent | `ta-quick-actions` | Quick action buttons | actions |
| QuickActionsCustomComponent | `ta-quick-actions-custom` | Customizable quick actions | actions, template |

### Models/DTOs
| Name | Purpose |
|------|---------|
| Menu | Menu structure definition |
| IconMenuItem | Menu item with icon |
| BaseMenuItem | Base menu item model |
| PanelMenuItem | Panel menu item |
| BottomSheetData | Bottom sheet configuration |
| RouteModel | Route configuration |

### Utilities
| Function | Purpose |
|----------|---------|
| filterMenu() | Menu filtering utilities |

## Usage Example
```typescript
import { MenuComponent, MenuItem } from '@ta/menu';

@Component({
  template: `
    <ta-menu [items]="menuItems" orientation="vertical"></ta-menu>
  `
})
export class MyComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'Settings', icon: 'settings', route: '/settings' }
  ];
}
```

## Dependencies
- @ta/ui
- @ta/icons
- @angular/material/bottom-sheet
- @angular/router
