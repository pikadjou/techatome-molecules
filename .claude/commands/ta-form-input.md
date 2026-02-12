# Create a new @ta/ Form Input Component

You are creating a new form input type in the `@ta/form-input` library. This follows the abstract input component pattern used throughout the form system.

## Input: $ARGUMENTS

Parse the arguments to determine:
- **Input type name**: in kebab-case (e.g., `color-picker`, `rating`, `phone`)

If unclear, ask the user to specify the input name.

## Architecture Context

The form system has 3 layers:
1. **@ta/form-model** - Input model classes (e.g., `InputTextBox`, `InputChoices`, `InputCheckBox`)
2. **@ta/form-input** - Input UI components that render the models
3. **@ta/form-basic** - Form container that orchestrates inputs

## Steps

### 1. Create the Input Model in @ta/form-model

File: `projects/form/form-model/src/lib/models/input/<name>.ts`

Read existing models first (e.g., `textbox.ts`, `choices.ts`, `checkbox.ts`) to match conventions.

```typescript
import { InputBase, IInputBase } from './base';

export interface IInput<Name> extends IInputBase</* value type */> {
  // Add specific options for this input type
  // placeholder?: string;
  // min?: number;
}

export class Input<Name> extends InputBase</* value type */> {
  // Add specific properties
  // placeholder: string;

  constructor(options: IInput<Name> = {}) {
    super(options);
    options.controlType = '<name>';
    // Initialize specific properties
    // this.placeholder = options.placeholder || '';
  }
}
```

**CONVENTIONS:**
- Class name: `Input<PascalCaseName>` (e.g., `InputColorPicker`)
- Interface name: `IInput<PascalCaseName>`
- Always extend `InputBase<T>` with the appropriate value type
- Always set `controlType` in constructor
- Export from `projects/form/form-model/src/lib/models/input/public-api.ts`

### 2. Create the Input Component in @ta/form-input

Files in: `projects/form/form-input/src/lib/components/input/<name>/`

#### TypeScript (`<name>.component.ts`)

```typescript
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Input<Name> } from '@ta/form-model';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-<name>',
  templateUrl: './<name>.component.html',
  styleUrls: ['./<name>.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputLayoutComponent,
    // Add other imports
  ],
})
export class Input<Name>Component extends TaAbstractInputComponent<Input<Name>> {
  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    // Custom initialization logic
  }
}
```

**CRITICAL CONVENTIONS:**
- ALWAYS extend `TaAbstractInputComponent<InputModelClass>`
- ALWAYS use `InputLayoutComponent` wrapper in template for consistent form field rendering
- Selector: `ta-input-<name>`
- Always call `super.ngOnInit()` if overriding
- Use `this.input` getter to access the model (comes from `inputModel = input.required<C>({ alias: 'input' })`)
- Use `this.input.formControl` for reactive form binding
- Use `this.input.value` for getting/setting value
- Use `this.input.changeValue$` for value change stream

#### Template (`<name>.component.html`)

```html
<ta-input-layout [input]="this.input">
  <div class="form-control" #focusedElement>
    <div class="input-group flex-full">
      <!-- Your input rendering here -->
      <!-- Always bind formControl: [formControl]="$any(this.input.formControl)" -->
    </div>
  </div>
</ta-input-layout>
```

**Template CONVENTIONS:**
- ALWAYS wrap in `<ta-input-layout [input]="this.input">` for label, error display, etc.
- ALWAYS include `#focusedElement` on the focusable element
- ALWAYS bind `[formControl]="$any(this.input.formControl)"` on the actual input
- Use `| async` pipe for observables
- Use `| translate` pipe for i18n strings

#### SCSS (`<name>.component.scss`)

```scss
@use "ta/utils/mixins/common";

.form-control {
  // Component-specific styles
}
```

### 3. Register the component in the form renderer

Read `projects/form/form-input/src/lib/components/input-renderer/input-renderer.component.ts` and add the new input type to the switch/mapping so the form system can render it automatically.

### 4. Update exports

1. Export model from `projects/form/form-model/src/lib/models/input/public-api.ts`
2. Export component from `projects/form/form-input/src/lib/components/input/public-api.ts` or the appropriate nested public-api
3. Verify the export chain up to the library's root `public-api.ts`

### 5. Add translations (if needed)

If the input has labels/messages, add them to:
- `projects/form/form-input/src/i18n/en.json`
- `projects/form/form-input/src/i18n/fr.json`

Key pattern: `form.input.<name>.<key>`

### 6. Verify

1. Check that the `controlType` string is unique
2. Ensure the model is properly exported from @ta/form-model
3. Ensure the component is properly exported from @ta/form-input
4. Verify the input-renderer knows about the new type
