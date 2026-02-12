# Create a new @ta/ Angular Component

You are creating a new Angular component in the Techatome Molecules monorepo. Follow all conventions strictly.

## Input: $ARGUMENTS

Parse the arguments to determine:
- **Library name**: which @ta/ library (e.g., `ui`, `core`, `form-input`, `server`)
- **Component name**: the component name in kebab-case (e.g., `user-card`)
- **Component path** (optional): subfolder path within the library (e.g., `modules/card`)

If the arguments are unclear, ask the user to clarify with the format: `<library> <component-name> [path]`
Example: `ui user-card modules/card` or simply `ui user-card`

## Steps

### 1. Determine file paths

Based on the library name, compute the base path:
- For `form-input` or `form-basic` or `form-model`: `projects/form/<lib>/src/lib/`
- For `files-basic` or `files-extended`: `projects/files/<lib>/src/lib/`
- For all others: `projects/<lib>/src/lib/`

If a path is provided, nest the component under: `<base>/components/<path>/<component-name>/`
Otherwise: `<base>/components/<component-name>/`

### 2. Read existing patterns

Before creating files, read the nearest existing component in the same library to match conventions. Also read:
- The library's `public-api.ts` to understand export structure
- The library's `ng-package.json` for configuration reference

### 3. Create the Component TypeScript file (`<name>.component.ts`)

```typescript
import { Component, input, Output, EventEmitter } from '@angular/core';

// Import from @ta/ libraries as needed - NEVER from relative paths to other libraries
import { TaBaseComponent } from '@ta/utils';

@Component({
  selector: 'ta-<component-name>',
  templateUrl: './<component-name>.component.html',
  styleUrls: ['./<component-name>.component.scss'],
  standalone: true,
  imports: [
    // Add Angular and @ta/ imports here
  ],
})
export class <ComponentName>Component extends TaBaseComponent {
  // Use signal-based inputs (Angular 18+)
  // example = input<string>('default');
  // example = input.required<string>();

  // Use @Output() for events
  // @Output() action = new EventEmitter<void>();

  constructor() {
    super();
  }
}
```

**CONVENTIONS:**
- ALWAYS `standalone: true`
- ALWAYS use `input()` signal API, NEVER `@Input()` decorator
- ALWAYS extend `TaBaseComponent` from `@ta/utils` (or `TaAbstractComponent` if no trackBy needed)
- Selector prefix: `ta-`
- Use `_registerSubscription()` for any Observable subscriptions
- Use `this.requestState` for loading states
- Use `this.breakpoints` for responsive logic

### 4. Create the Template file (`<name>.component.html`)

Use Angular control flow syntax (`@if`, `@for`, `@switch`), NOT `*ngIf`, `*ngFor`.

```html
<div class="<component-name>">
  <ng-content></ng-content>
</div>
```

### 5. Create the SCSS file (`<name>.component.scss`)

```scss
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/flex";
@use "ta/utils/mixins/fonts";

:host {
  display: block;
}

.<component-name> {
  // Use common.get-var() for design tokens
  // Example: color: common.get-var(neutral, 900);
  // Example: border-radius: common.get-var(radius, rounded);
  // Example: padding: common.get-var(spacing, md);
}
```

**SCSS CONVENTIONS:**
- Always import shared mixins via `@use "ta/utils/mixins/..."`
- Use `common.get-var()` for all design tokens (colors, spacing, radius, etc.)
- Use `flex.*` mixins for flexbox layouts
- Use `fonts.fontSizeBody()` or `fonts.fontSizeTitle()` for typography
- Never hardcode colors, spacing, or font sizes

### 6. Update public-api.ts exports

Find the appropriate `public-api.ts` in the library and add the export:
```typescript
export * from './<path>/<component-name>/<component-name>.component';
```

If the component is in a subfolder that has its own `public-api.ts`, add the export there and ensure it's re-exported up the chain.

### 7. Import ordering convention

Always order imports in this sequence (with blank lines between groups):
1. `@angular/*` imports
2. External library imports (rxjs, ngx-translate, etc.)
3. `@ta/*` library imports
4. Local/relative imports

### 8. Verify

After creating all files:
1. Check that the component selector doesn't conflict with existing selectors
2. Ensure all @ta/ imports reference actual exported symbols
3. Verify the public-api.ts export chain is complete
