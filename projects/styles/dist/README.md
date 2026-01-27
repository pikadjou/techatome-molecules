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

## Grid System

The styles package includes a responsive 12-column grid system with predefined classes for common layouts.

### Breakpoints
The following breakpoints are available:
- `xs`: 0px
- `sm`: 576px
- `mobile`: 577px
- `md`: 768px
- `tablette`: 769px
- `desktop`: 991px
- `lg`: 992px
- `xl`: 1200px
- `xxl`: 1400px
- `xxxl`: 1800px

### Basic Grid Classes

Use the `.grid` container with child classes to create grid layouts:

```html
<div class="grid">
  <div class="one-half">50% width</div>
  <div class="one-half">50% width</div>
</div>
```

Available child classes:
- `.full` - 12/12 columns (100%)
- `.five-sixths` - 10/12 columns (~83%)
- `.two-thirds` - 8/12 columns (~67%)
- `.one-half` - 6/12 columns (50%)
- `.one-third` - 4/12 columns (~33%)
- `.one-fourth` - 3/12 columns (25%)
- `.one-sixth` - 2/12 columns (~17%)

### Responsive Grid Classes

All grid classes can be prefixed with a breakpoint to apply at specific screen sizes:

```html
<div class="grid">
  <div class="one-third md-one-half sm-full">
    1/3 on large screens, 1/2 on medium, full on small
  </div>
  <div class="two-thirds md-one-half sm-full">
    2/3 on large screens, 1/2 on medium, full on small
  </div>
</div>
```

Pattern: `.{breakpoint}-{size}`

Examples:
- `.sm-one-half` - 50% width on small screens and up
- `.md-two-thirds` - 66% width on medium screens and up
- `.lg-one-third` - 33% width on large screens and up
- `.xl-full` - 100% width on extra large screens and up

### Standalone Grid Classes

For elements that should create their own grid with evenly distributed children:

```html
<div class="grid-one-third">
  <div>Auto 1/3</div>
  <div>Auto 1/3</div>
  <div>Auto 1/3</div>
</div>
```

Available classes:
- `.grid-one-half` - Creates grid with 2 columns (all children at 50%)
- `.grid-one-third` - Creates grid with 3 columns (all children at 33%)
- `.grid-one-fourth` - Creates grid with 4 columns (all children at 25%)
- `.grid-one-sixth` - Creates grid with 6 columns (all children at 16.6%)

### Responsive Standalone Grid Classes

Standalone grids also support responsive breakpoints:

```html
<div class="grid-one-third md-grid-one-half sm-grid-one-half">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

Pattern: `.grid-{breakpoint}-{size}`

Examples:
- `.grid-sm-one-half` - 2 columns on small screens and up
- `.grid-md-one-third` - 3 columns on medium screens and up
- `.grid-lg-one-fourth` - 4 columns on large screens and up

### Grid Alignment

Align grid items vertically and horizontally with responsive alignment classes:

```html
<div class="grid align-center-vert-md align-center-horiz-lg">
  <div class="one-half">Centered content</div>
</div>
```

Available alignment classes (all support breakpoint suffixes):
- `.align-center-vert-{breakpoint}` - Vertically center items
- `.align-center-horiz-{breakpoint}` - Horizontally center items
- `.align-end-vert-{breakpoint}` - Align items to bottom
- `.align-end-horiz-{breakpoint}` - Align items to end

## Dependencies
- @angular/material
- sass
