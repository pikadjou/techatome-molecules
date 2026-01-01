# @ta/menu

Comprehensive navigation and menu components for Angular applications, including menus, navigation bars, bottom sheets, context menus, and quick actions.

## Installation

```bash
npm install @ta/menu
# or
yarn add @ta/menu
```

### Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "@angular/common": "^18.2.13",
  "@angular/core": "^18.2.13"
}
```

### Additional Dependencies

The package also requires these internal dependencies:
- `@ta/icons` - Icon components
- `@ta/styles` - Styling utilities
- `@ta/translation` - i18n support
- `@ta/ui` - UI components
- `@ta/utils` - Utility functions
- `swiper` v9.1.0 - For swipeable navigation

## Import

All components are standalone and can be imported directly:

```typescript
import {
  MenuComponent,
  NavigationComponent,
  QuickActionsComponent,
  BottomSheetTemplateBasicComponent
} from '@ta/menu';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [MenuComponent, NavigationComponent],
  template: `...`
})
export class ExampleComponent {}
```

Or import the full module:

```typescript
import { TaMenuModule } from '@ta/menu';

@NgModule({
  imports: [TaMenuModule],
  // ...
})
export class AppModule {}
```

## Core Concepts

### Menu Models

The package provides a flexible menu system based on class-based models:

```typescript
import { Menu, MenuBase, MenuIcon, MenuAction } from '@ta/menu';

// Base menu item
const baseItem = new MenuBase({
  key: 'home',
  label: 'Home',
  link: '/home'
});

// Menu item with icon
const iconItem = new MenuIcon({
  key: 'settings',
  label: 'Settings',
  icon: 'settings',
  link: '/settings'
});

// Menu container
const menu = new Menu({
  direction: 'horizontal',
  elements: [baseItem, iconItem]
});
```

## Components

### MenuComponent

Basic menu container for displaying menu items.

**Selector:** `ta-menu`

**Inputs:**
| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `menu` | `Menu` | Yes | Menu configuration with items |
| `container` | `"second" \| "overflow" \| "main" \| "panel"` | Yes | Menu container type |

**Usage:**

```typescript
import { Component } from '@angular/core';
import { MenuComponent, Menu, MenuIcon } from '@ta/menu';
import { TaIconType } from '@ta/icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuComponent],
  template: `
    <ta-menu [menu]="sidebarMenu" container="main"></ta-menu>
  `
})
export class SidebarComponent {
  sidebarMenu = new Menu({
    direction: 'vertical',
    elements: [
      new MenuIcon({
        key: 'dashboard',
        label: 'Dashboard',
        icon: TaIconType.Dashboard,
        link: '/dashboard'
      }),
      new MenuIcon({
        key: 'tasks',
        label: 'Tasks',
        icon: TaIconType.Task,
        link: '/tasks'
      }),
      new MenuIcon({
        key: 'profile',
        label: 'Profile',
        icon: TaIconType.Profile,
        link: '/profile'
      })
    ]
  });
}
```

### NavigationComponent

Advanced navigation component with tab support and swipe functionality.

**Selector:** `ta-menu-navigation`

**Inputs:**
| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `menu` | `Menu` | Yes | Menu configuration |
| `container` | `"tags" \| "tab" \| "submenu"` | Yes | Navigation container style |
| `swiper` | `boolean` | No | Enable swipe navigation (default: false) |
| `options` | `{ spaceElement?: TaSizes \| null }` | No | Spacing configuration |
| `manuallyChanged$` | `Observable<string>` | No | Observable for external navigation changes |

**Usage:**

```typescript
import { Component } from '@angular/core';
import { NavigationComponent, Menu, MenuBase } from '@ta/menu';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NavigationComponent],
  template: `
    <ta-menu-navigation
      [menu]="tabMenu"
      container="tab"
      [swiper]="true"
      [options]="{ spaceElement: 'md' }"
      [manuallyChanged$]="activeTab$">
    </ta-menu-navigation>

    <div [ngSwitch]="activeTabKey">
      <div *ngSwitchCase="'overview'">Overview Content</div>
      <div *ngSwitchCase="'analytics'">Analytics Content</div>
      <div *ngSwitchCase="'reports'">Reports Content</div>
    </div>
  `
})
export class TabsComponent {
  activeTab$ = new Subject<string>();
  activeTabKey = 'overview';

  tabMenu = new Menu({
    direction: 'horizontal',
    elements: [
      new MenuBase({
        key: 'overview',
        label: 'Overview',
        defaultOpen: true,
        callback: () => this.onTabChange('overview')
      }),
      new MenuBase({
        key: 'analytics',
        label: 'Analytics',
        callback: () => this.onTabChange('analytics')
      }),
      new MenuBase({
        key: 'reports',
        label: 'Reports',
        callback: () => this.onTabChange('reports')
      })
    ]
  });

  onTabChange(key: string) {
    this.activeTabKey = key;
  }

  // Programmatically change tab
  switchToTab(key: string) {
    this.activeTab$.next(key);
  }
}
```

### QuickActionsComponent

Display quick action buttons with optional swiper.

**Selector:** `ta-quick-actions`

**Inputs:**
| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `menu` | `Menu` | Yes | Menu with action items |
| `tabSelection` | `string \| null` | No | Currently selected tab key |
| `elementPerPage` | `number` | No | Number of items per page (default: 3.5) |
| `canDeselect` | `boolean` | No | Allow deselecting items (default: false) |

**Outputs:**
| Output | Type | Description |
|--------|------|-------------|
| `tabSelected` | `EventEmitter<string \| null>` | Emits when an action is selected |

**Usage:**

```typescript
import { Component } from '@angular/core';
import { QuickActionsComponent, Menu, MenuIcon } from '@ta/menu';
import { TaIconType } from '@ta/icons';

@Component({
  selector: 'app-quick-panel',
  standalone: true,
  imports: [QuickActionsComponent],
  template: `
    <ta-quick-actions
      [menu]="quickMenu"
      [tabSelection]="selectedAction"
      [elementPerPage]="4"
      [canDeselect]="true"
      (tabSelected)="onActionSelected($event)">
    </ta-quick-actions>

    <div *ngIf="selectedAction">
      Selected: {{ selectedAction }}
    </div>
  `
})
export class QuickPanelComponent {
  selectedAction: string | null = null;

  quickMenu = new Menu({
    elements: [
      new MenuIcon({
        key: 'add-task',
        label: 'New Task',
        icon: TaIconType.Add
      }),
      new MenuIcon({
        key: 'add-deal',
        label: 'New Deal',
        icon: TaIconType.Deal
      }),
      new MenuIcon({
        key: 'search',
        label: 'Search',
        icon: TaIconType.Search
      }),
      new MenuIcon({
        key: 'filter',
        label: 'Filter',
        icon: TaIconType.Filter
      })
    ]
  });

  onActionSelected(action: string | null) {
    this.selectedAction = action;
    console.log('Action selected:', action);
  }
}
```

### BottomSheetTemplateBasicComponent

Template for Angular Material bottom sheets with menu actions.

**Selector:** `ta-bottom-sheet-template-basic`

**Data Interface:**
```typescript
interface BottomSheetTemplateBasicParams {
  orientation: "horizontal" | "vertical";
  menu$: Observable<BottomSheetData[]>;
}
```

**Usage:**

```typescript
import { Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetTemplateBasicComponent, BottomSheetData } from '@ta/menu';
import { of } from 'rxjs';

@Component({
  selector: 'app-actions',
  standalone: true,
  template: `
    <button (click)="openBottomSheet()">Show Actions</button>
  `
})
export class ActionsComponent {
  private bottomSheet = inject(MatBottomSheet);

  openBottomSheet() {
    const actions: BottomSheetData[] = [
      {
        key: 'edit',
        label: 'Edit',
        icon: 'edit',
        callback: () => this.handleEdit()
      },
      {
        key: 'delete',
        label: 'Delete',
        icon: 'delete',
        callback: () => this.handleDelete()
      },
      {
        key: 'share',
        label: 'Share',
        icon: 'share',
        callback: () => this.handleShare()
      }
    ];

    this.bottomSheet.open(BottomSheetTemplateBasicComponent, {
      data: {
        orientation: 'vertical',
        menu$: of(actions)
      }
    });
  }

  handleEdit() {
    console.log('Edit action');
  }

  handleDelete() {
    console.log('Delete action');
  }

  handleShare() {
    console.log('Share action');
  }
}
```

### ContextMenuComponent

Right-click context menu component.

**Selector:** `ta-context-menu`

**Usage:**

```typescript
import { Component } from '@angular/core';
import { ContextMenuComponent, Menu, MenuIcon } from '@ta/menu';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [ContextMenuComponent],
  template: `
    <div (contextmenu)="onRightClick($event)">
      Right-click me for options
    </div>
    <ta-context-menu
      *ngIf="showContextMenu"
      [menu]="contextMenu"
      [position]="menuPosition">
    </ta-context-menu>
  `
})
export class ListItemComponent {
  showContextMenu = false;
  menuPosition = { x: 0, y: 0 };

  contextMenu = new Menu({
    elements: [
      new MenuIcon({
        key: 'copy',
        label: 'Copy',
        icon: 'content_copy',
        callback: () => this.handleCopy()
      }),
      new MenuIcon({
        key: 'delete',
        label: 'Delete',
        icon: 'delete',
        callback: () => this.handleDelete()
      })
    ]
  });

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.menuPosition = { x: event.clientX, y: event.clientY };
    this.showContextMenu = true;
  }

  handleCopy() {
    console.log('Copy action');
    this.showContextMenu = false;
  }

  handleDelete() {
    console.log('Delete action');
    this.showContextMenu = false;
  }
}
```

## Menu Models

### MenuBase

Base menu item with common properties.

**Properties:**
```typescript
class MenuBase {
  key: string;                    // Unique identifier
  label: string;                  // Display text
  order: number;                  // Sort order (default: 1)
  link: string;                   // Router link
  callback?: (data?: any) => void; // Click callback
  style: string;                  // CSS class (default: 'bloc')
  children: MenuBase[];           // Nested menu items
  visible$: Observable<boolean>;  // Visibility state
  defaultOpen: boolean;           // Open by default (default: false)
  exact: boolean;                 // Exact route matching (default: false)
  replaceUrl: boolean;            // Replace URL in history (default: false)
  queryParamsHandling: QueryParamsHandling; // Query params handling
  disabled: boolean;              // Disable item (default: false)
  translationData?: any;          // Translation parameters
  endingIcon?: string;            // Icon at the end
  iconsColor?: string;            // Icon color
  options?: {
    notificationBadge?: { label: number; style?: string };
    extraTemplate?: TemplateRef<any>;
  };
}
```

**Usage:**

```typescript
import { MenuBase } from '@ta/menu';
import { of } from 'rxjs';

const menuItem = new MenuBase({
  key: 'settings',
  label: 'Settings',
  link: '/settings',
  order: 2,
  callback: () => console.log('Settings clicked'),
  visible$: of(true),
  options: {
    notificationBadge: {
      label: 5,
      style: 'warning'
    }
  }
});
```

### MenuIcon

Menu item with icon support (extends MenuBase).

**Additional Properties:**
```typescript
class MenuIcon extends MenuBase {
  icon: string | TaIconType;
}
```

**Usage:**

```typescript
import { MenuIcon } from '@ta/menu';
import { TaIconType } from '@ta/icons';

const iconItem = new MenuIcon({
  key: 'dashboard',
  label: 'Dashboard',
  icon: TaIconType.Dashboard,
  link: '/dashboard',
  iconsColor: '#3c54e4'
});

// With Material icon
const materialIconItem = new MenuIcon({
  key: 'home',
  label: 'Home',
  icon: 'home',
  link: '/'
});
```

### Menu

Container for menu items.

**Properties:**
```typescript
class Menu<T = MenuBase> {
  direction: "horizontal" | "vertical" | "responsive";
  elements: T[];
}
```

**Usage:**

```typescript
import { Menu, MenuIcon } from '@ta/menu';

const horizontalMenu = new Menu({
  direction: 'horizontal',
  elements: [
    new MenuIcon({ key: 'home', label: 'Home', icon: 'home' }),
    new MenuIcon({ key: 'about', label: 'About', icon: 'info' })
  ]
});

const verticalMenu = new Menu({
  direction: 'vertical',
  elements: [
    // ... items
  ]
});
```

## Advanced Features

### Dynamic Visibility

Control menu item visibility with observables:

```typescript
import { Component } from '@angular/core';
import { Menu, MenuBase } from '@ta/menu';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dynamic-menu',
  template: `
    <ta-menu [menu]="menu" container="main"></ta-menu>
    <button (click)="toggleAdminMenu()">Toggle Admin Menu</button>
  `
})
export class DynamicMenuComponent {
  private isAdmin$ = new BehaviorSubject(false);

  menu = new Menu({
    elements: [
      new MenuBase({
        key: 'home',
        label: 'Home',
        link: '/'
      }),
      new MenuBase({
        key: 'admin',
        label: 'Admin Panel',
        link: '/admin',
        visible$: this.isAdmin$
      })
    ]
  });

  toggleAdminMenu() {
    this.isAdmin$.next(!this.isAdmin$.value);
  }
}
```

### Nested Menus

Create hierarchical menu structures:

```typescript
import { Menu, MenuBase } from '@ta/menu';

const menu = new Menu({
  elements: [
    new MenuBase({
      key: 'products',
      label: 'Products',
      children: [
        new MenuBase({
          key: 'electronics',
          label: 'Electronics',
          link: '/products/electronics'
        }),
        new MenuBase({
          key: 'clothing',
          label: 'Clothing',
          link: '/products/clothing'
        })
      ]
    })
  ]
});
```

### Notification Badges

Add notification badges to menu items:

```typescript
import { MenuIcon } from '@ta/menu';
import { TaIconType } from '@ta/icons';

const menuWithBadge = new MenuIcon({
  key: 'notifications',
  label: 'Notifications',
  icon: TaIconType.Notification,
  options: {
    notificationBadge: {
      label: 12,
      style: 'danger' // CSS class for badge styling
    }
  }
});
```

## Complete Example

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MenuComponent,
  NavigationComponent,
  QuickActionsComponent,
  Menu,
  MenuBase,
  MenuIcon
} from '@ta/menu';
import { TaIconType } from '@ta/icons';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    NavigationComponent,
    QuickActionsComponent
  ],
  template: `
    <div class="app-layout">
      <!-- Main Navigation -->
      <nav class="sidebar">
        <ta-menu [menu]="mainMenu" container="main"></ta-menu>
      </nav>

      <!-- Top Navigation Tabs -->
      <header>
        <ta-menu-navigation
          [menu]="topNav"
          container="tab"
          [swiper]="true">
        </ta-menu-navigation>
      </header>

      <!-- Quick Actions -->
      <aside class="quick-panel">
        <ta-quick-actions
          [menu]="quickActions"
          [tabSelection]="selectedQuickAction"
          (tabSelected)="onQuickActionSelected($event)">
        </ta-quick-actions>
      </aside>

      <!-- Content -->
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-layout {
      display: grid;
      grid-template-areas:
        "sidebar header header"
        "sidebar main quick-panel";
      grid-template-columns: 250px 1fr 300px;
      grid-template-rows: 60px 1fr;
      height: 100vh;
    }
    .sidebar { grid-area: sidebar; }
    header { grid-area: header; }
    main { grid-area: main; }
    .quick-panel { grid-area: quick-panel; }
  `]
})
export class LayoutComponent {
  selectedQuickAction: string | null = null;

  mainMenu = new Menu({
    direction: 'vertical',
    elements: [
      new MenuIcon({
        key: 'dashboard',
        label: 'Dashboard',
        icon: TaIconType.Dashboard,
        link: '/dashboard',
        defaultOpen: true
      }),
      new MenuIcon({
        key: 'tasks',
        label: 'Tasks',
        icon: TaIconType.Task,
        link: '/tasks',
        options: {
          notificationBadge: { label: 5, style: 'warning' }
        }
      }),
      new MenuIcon({
        key: 'deals',
        label: 'Deals',
        icon: TaIconType.Deal,
        link: '/deals'
      }),
      new MenuIcon({
        key: 'contacts',
        label: 'Contacts',
        icon: TaIconType.Contacts,
        link: '/contacts'
      })
    ]
  });

  topNav = new Menu({
    direction: 'horizontal',
    elements: [
      new MenuBase({
        key: 'overview',
        label: 'Overview',
        defaultOpen: true,
        callback: () => this.onTabChange('overview')
      }),
      new MenuBase({
        key: 'analytics',
        label: 'Analytics',
        callback: () => this.onTabChange('analytics')
      }),
      new MenuBase({
        key: 'reports',
        label: 'Reports',
        callback: () => this.onTabChange('reports')
      })
    ]
  });

  quickActions = new Menu({
    elements: [
      new MenuIcon({
        key: 'new-task',
        label: 'New Task',
        icon: TaIconType.Add
      }),
      new MenuIcon({
        key: 'search',
        label: 'Search',
        icon: TaIconType.Search
      }),
      new MenuIcon({
        key: 'filter',
        label: 'Filter',
        icon: TaIconType.Filter
      })
    ]
  });

  onTabChange(key: string) {
    console.log('Tab changed to:', key);
  }

  onQuickActionSelected(action: string | null) {
    this.selectedQuickAction = action;
    console.log('Quick action:', action);
  }
}
```

## Helper Functions

### filterMenu

Filter menu items based on criteria:

```typescript
import { filterMenu } from '@ta/menu';

// Usage in your code
const filteredItems = filterMenu(menuItems, searchTerm);
```

### Icon Helpers

```typescript
import { hasFontIcon, getFontIcon } from '@ta/menu';

// Check if item has font icon
const hasFont = hasFontIcon(iconValue);

// Get font icon name
const fontName = getFontIcon(iconValue);
```

## Dependencies

- `@ta/icons` - Icon components
- `@ta/styles` - Styling utilities
- `@ta/translation` - Translation support
- `@ta/ui` - UI components
- `@ta/utils` - Utility functions
- `swiper` v9.1.0 - Swipeable navigation
- `@angular/material` - Material bottom sheet
- `@angular/router` - Routing support
- `@ngx-translate/core` - i18n translation

## License

MIT
