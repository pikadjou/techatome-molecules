# @ta/icons

**Purpose:** Icon components supporting multiple icon systems (SVG, Material, Font)

## Exports

### Components
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| LocalIconComponent | `ta-local-icon` | Local SVG icons | name, size, color |
| MaterialIconComponent | `ta-material-icon` | Material Design icons | icon, size, color |
| FontIconComponent | `ta-font-icon` | Font-based icons | icon, size, color |

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| IconsService | Icon management and registration | registerIcon(), getIcon() |

### Utilities
| Function | Purpose |
|----------|---------|
| IconHelpers | Icon utility functions |

## Usage Example
```typescript
import { MaterialIconComponent, LocalIconComponent } from '@ta/icons';

@Component({
  template: `
    <ta-material-icon icon="home" size="24"></ta-material-icon>
    <ta-local-icon name="custom-logo" size="32"></ta-local-icon>
  `
})
export class MyComponent {}
```

## Dependencies
- @angular/material/icon
- @angular/common
