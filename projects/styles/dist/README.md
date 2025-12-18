# @ta/styles

**Purpose:** SCSS styles and design system foundation

## Exports

### Components
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| StylesComponent | `ta-styles` | Style showcase/documentation component | N/A |

### SCSS Assets
| Type | Purpose |
|------|---------|
| Mixins | Reusable SCSS mixins for common patterns |
| Variables | Design tokens (colors, spacing, typography) |
| Theme | Material Design theme customization |
| Utilities | CSS utility classes |

## Usage Example
```scss
// Import in your component styles
@import '@ta/styles/mixins';
@import '@ta/styles/variables';

.my-component {
  @include flex-center;
  color: var(--primary-color);
  padding: $spacing-md;
}
```

```typescript
// Use the showcase component
import { StylesComponent } from '@ta/styles';

@Component({
  template: `<ta-styles></ta-styles>`
})
export class StyleGuideComponent {}
```

## Dependencies
- @angular/material
- sass
