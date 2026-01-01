# @ta/icons

A comprehensive icon system for Angular applications supporting multiple icon formats: Material Design icons, custom SVG icons, and font-based icons.

## Installation

```bash
npm install @ta/icons
# or
yarn add @ta/icons
```

### Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "@angular/common": "^18.2.13",
  "@angular/core": "^18.2.13",
  "@angular/material": "^18.2.13"
}
```

## Import

All components in this library are standalone and can be imported directly:

```typescript
import { MaterialIconComponent, LocalIconComponent, FontIconComponent } from '@ta/icons';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [MaterialIconComponent, LocalIconComponent, FontIconComponent],
  template: `...`
})
export class ExampleComponent {}
```

Or import the full module:

```typescript
import { TaIconsModule } from '@ta/icons';

@NgModule({
  imports: [TaIconsModule],
  // ...
})
export class AppModule {}
```

## Components

### MaterialIconComponent (Deprecated)

Display Material Design icons with various style variations.

**Selector:** `ta-material-icon`

**Inputs:**
| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `outline` | `boolean` | `false` | Use outlined icon style |
| `sharp` | `boolean` | `false` | Use sharp icon style |
| `round` | `boolean` | `false` | Use rounded icon style |
| `dualTone` | `boolean` | `false` | Use two-tone icon style |
| `type` | `TaSizes \| ""` | `""` | Icon size (xs, sm, md, lg) |

**Usage:**

```typescript
import { MaterialIconComponent } from '@ta/icons';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [MaterialIconComponent],
  template: `
    <!-- Default filled style -->
    <ta-material-icon>home</ta-material-icon>

    <!-- Outlined style -->
    <ta-material-icon [outline]="true">settings</ta-material-icon>

    <!-- Rounded style with size -->
    <ta-material-icon [round]="true" type="md">favorite</ta-material-icon>

    <!-- Sharp style -->
    <ta-material-icon [sharp]="true">star</ta-material-icon>

    <!-- Two-tone style -->
    <ta-material-icon [dualTone]="true">account_circle</ta-material-icon>
  `
})
export class ExampleComponent {}
```

### LocalIconComponent (Deprecated)

Display custom SVG icons from the built-in icon registry.

**Selector:** `ta-local-icon`

**Inputs:**
| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `type` | `TaIconType \| string \| null` | - | Icon to display from TaIconType enum |
| `size` | `TaSizes \| "xl"` | `"xs"` | Icon size (xs, sm, md, lg, xl) |
| `rotation` | `boolean` | `false` | Enable rotation animation |

**Size Mappings:**
- `xs`: 28px
- `sm`: 35px
- `md`: 50px
- `lg`: 120px
- `xl`: 120px

**Usage:**

```typescript
import { LocalIconComponent, TaIconType } from '@ta/icons';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [LocalIconComponent],
  template: `
    <!-- Basic usage -->
    <ta-local-icon [type]="iconType.Dashboard"></ta-local-icon>

    <!-- With custom size -->
    <ta-local-icon [type]="iconType.Profile" size="md"></ta-local-icon>

    <!-- With rotation animation -->
    <ta-local-icon [type]="iconType.Loader" [rotation]="true"></ta-local-icon>

    <!-- Extra large icon -->
    <ta-local-icon [type]="iconType.ErrorLogo" size="xl"></ta-local-icon>
  `
})
export class ExampleComponent {
  iconType = TaIconType;
}
```

### FontIconComponent

Display font-based icons.

**Selector:** `ta-font-icon`

**Inputs:**
| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `string` | - | Icon name/class from your icon font |
| `type` | `TaSizes` | `"md"` | Icon size (xs, sm, md, lg) |

**Usage:**

```typescript
import { FontIconComponent } from '@ta/icons';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FontIconComponent],
  template: `
    <!-- Basic usage -->
    <ta-font-icon name="icon-home"></ta-font-icon>

    <!-- With custom size -->
    <ta-font-icon name="icon-settings" type="lg"></ta-font-icon>

    <!-- Small icon -->
    <ta-font-icon name="icon-search" type="sm"></ta-font-icon>
  `
})
export class ExampleComponent {}
```

## Services

### TaIconsService

Service for managing and retrieving custom SVG icons.

**Methods:**
| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `getIcon()` | `icon: TaIconType` | `string` | Get SVG content for a given icon type |

**Usage:**

```typescript
import { TaIconsService, TaIconType } from '@ta/icons';

@Component({
  selector: 'app-example',
  standalone: true,
  template: `<div [innerHTML]="iconSvg"></div>`
})
export class ExampleComponent {
  iconSvg: SafeHtml;

  constructor(
    private iconService: TaIconsService,
    private sanitizer: DomSanitizer
  ) {
    const svgContent = this.iconService.getIcon(TaIconType.Dashboard);
    this.iconSvg = this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
}
```

## Enums

### TaIconType

Enumeration of all available custom SVG icons. Includes icons such as:

- **Common Actions:** `Add`, `Edit`, `Delete`, `Save`, `Cancel`, `Close`, `Search`, `Filter`
- **UI Elements:** `Menu`, `Back`, `RightArrow`, `CheckLight`, `Checked`
- **Business Objects:** `Dashboard`, `Task`, `ToDo`, `Deal`, `Offer`, `Incident`, `Maintenance`
- **Files:** `Pdf`, `Excel`, `Doc`, `Csv`, `Xls`, `Ppt`, `Image`, `Folder`
- **Communication:** `Email`, `Phone`, `Comment`, `Send`, `Gmail`
- **Status & Feedback:** `Warning`, `Error`, `Info`, `Success`, `Loader`, `Waiting`
- **User & Profile:** `Profile`, `Men`, `Women`, `Company`, `Contacts`
- **And many more...**

View the complete list in the `TaIconType` enum exported from the package.

## Utilities

### Icon Helper Functions

The package exports helper functions for icon type detection:

```typescript
import { isFontIcon, isLocalIcon, getFontIcon } from '@ta/icons';

// Check if an icon is a font icon (string)
const isFontBased = isFontIcon('icon-home'); // true
const isIconType = isFontIcon(TaIconType.Dashboard); // false

// Check if an icon is a local/custom SVG icon
const isCustom = isLocalIcon(TaIconType.Dashboard); // true

// Get font icon name
const fontName = getFontIcon('icon-home'); // 'icon-home'
```

## Complete Example

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MaterialIconComponent,
  LocalIconComponent,
  FontIconComponent,
  TaIconType
} from '@ta/icons';

@Component({
  selector: 'app-icon-showcase',
  standalone: true,
  imports: [
    CommonModule,
    MaterialIconComponent,
    LocalIconComponent,
    FontIconComponent
  ],
  template: `
    <div class="icon-grid">
      <!-- Material Icons -->
      <div class="section">
        <h3>Material Icons</h3>
        <ta-material-icon>home</ta-material-icon>
        <ta-material-icon [outline]="true">settings</ta-material-icon>
        <ta-material-icon [round]="true" type="md">favorite</ta-material-icon>
      </div>

      <!-- Local/Custom SVG Icons -->
      <div class="section">
        <h3>Custom Icons</h3>
        <ta-local-icon [type]="icons.Dashboard" size="md"></ta-local-icon>
        <ta-local-icon [type]="icons.Task" size="sm"></ta-local-icon>
        <ta-local-icon [type]="icons.Loader" [rotation]="true"></ta-local-icon>
      </div>

      <!-- Font Icons -->
      <div class="section">
        <h3>Font Icons</h3>
        <ta-font-icon name="icon-home" type="md"></ta-font-icon>
        <ta-font-icon name="icon-settings" type="lg"></ta-font-icon>
      </div>
    </div>
  `,
  styles: [`
    .icon-grid {
      display: grid;
      gap: 2rem;
    }
    .section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  `]
})
export class IconShowcaseComponent {
  icons = TaIconType;
}
```

## Migration Notes

The `MaterialIconComponent` and `LocalIconComponent` are marked as deprecated. Consider migrating to modern Angular icon solutions or using the `FontIconComponent` for new implementations.

## Dependencies

- `@ta/styles` - Provides size types and styling utilities
- `@angular/material` - Required for Material icon support
- `@angular/common` - Required for common Angular directives

## License

MIT
