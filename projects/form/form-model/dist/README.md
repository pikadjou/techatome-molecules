# @ta/form-model

**Purpose:** Type-safe form input models and validators for building dynamic forms. Provides a comprehensive set of input type classes that extend a base model with reactive value handling, validation, and visibility control.

## Installation

```bash
npm install @ta/form-model
```

or with yarn:

```bash
yarn add @ta/form-model
```

## Dependencies

This package requires the following peer dependencies:
- `@angular/common` ^18.2.13
- `@angular/core` ^18.2.13

And includes these internal dependencies:
- `@ta/notification` - Notification types
- `@ta/services` - Core services
- `@ta/utils` - Utility functions
- `@ta/wysiswyg` - WYSIWYG editor types

## Exports

### Base Classes

| Name | Purpose |
|------|---------|
| **InputBase\<T\>** | Base class for all input types with reactive value handling, validation, and form control management |
| **InputLabel** | Label-only field for form sections |

### Input Type Models

All input types extend `InputBase<T>` and provide specific configurations:

| Class | Control Type | Purpose | Key Properties |
|-------|--------------|---------|----------------|
| **InputTextBox** | `textbox` | Single-line text input | `type`, `icon`, `iconClicked` |
| **InputTextarea** | `textarea` | Multi-line text input | `rows`, `maxLength` |
| **InputPassword** | `password` | Password input with visibility toggle | - |
| **InputEmail** | `email` | Email input with validation | - |
| **InputNumber** | `number` | Numeric input | `min`, `max`, `step` |
| **InputDropdown** | `dropdown` | Select dropdown | `options$`, `multiple`, `showNothingOption`, `withSearch` |
| **InputRadio** | `radio` | Radio button group | `options$` |
| **InputCheckBox** | `checkbox` | Checkbox input | - |
| **InputSwitch** | `switch` | Toggle switch | - |
| **InputSlider** | `slider` | Range slider | `min`, `max`, `step` |
| **InputRating** | `rating` | Star rating input | `max` |
| **InputDatePicker** | `datepicker` | Date picker | `min`, `max`, `format` |
| **InputTimePicker** | `timepicker` | Time picker | `format` |
| **InputColorPicker** | `colorpicker` | Color picker | - |
| **InputPhone** | `phone` | Phone number input | `countryCode` |
| **InputAddress** | `address` | Address input | `countryRestriction` |
| **InputUpload** | `upload` | File upload | `accept`, `multiple`, `maxSize` |
| **InputImages** | `images` | Multiple image upload | `maxImages`, `maxSize` |
| **InputLogo** | `logo` | Logo/avatar upload | `shape` |
| **InputWysiswyg** | `wysiswyg` | WYSIWYG editor | `config` |
| **InputSchema** | `schema` | JSON schema editor | `schema` |
| **InputPanel** | `panel` | Container for grouped inputs | `children` |
| **InputComponent** | `component` | Dynamic component input | `component` |
| **InputChoices** | `choices` | Choice list builder | `options` |
| **InputTranslation** | `translation` | Multi-language input | `languages` |
| **InputCulture** | `culture` | Culture/locale selector | - |
| **InputDynamic** | `dynamic` | Factory-based dynamic input | `inputType`, `templateChildren` |

### Validators

| Function | Purpose | Error Key |
|----------|---------|-----------|
| **slugValidator()** | Validates URL-friendly slugs (lowercase, numbers, hyphens) | `invalidSlug` |
| **phoneValidator()** | Validates phone number format | `validatePhoneNumber` |

### Factory

| Class | Purpose |
|-------|---------|
| **InputFactory** | Factory for creating input instances dynamically |

### Types & Interfaces

| Name | Purpose |
|------|---------|
| **IInputBase\<T\>** | Configuration interface for InputBase |
| **IInputsError** | Error state interface |
| **FactoryInputType** | Union type of supported factory input types |

## Usage Examples

### Basic Text Input

```typescript
import { InputTextBox } from '@ta/form-model';
import { Validators } from '@angular/forms';

const usernameInput = new InputTextBox({
  key: 'username',
  label: 'Username',
  value: '',
  validators: [Validators.required, Validators.minLength(3)],
  message: 'Enter your username (min 3 characters)',
  class: 'col-12 col-md-6',
  disabled: false
});

// Access value
console.log(usernameInput.value);

// Set value
usernameInput.value = 'john_doe';

// Subscribe to value changes
usernameInput.changeValue$.subscribe(value => {
  console.log('Value changed:', value);
});
```

### Dropdown with Observable Options

```typescript
import { InputDropdown } from '@ta/form-model';
import { of } from 'rxjs';

const roleDropdown = new InputDropdown({
  key: 'role',
  label: 'Select Role',
  options$: of([
    { id: 'admin', name: 'Administrator', disabled: false },
    { id: 'editor', name: 'Editor', disabled: false },
    { id: 'viewer', name: 'Viewer', disabled: true }
  ]),
  value: 'viewer',
  multiple: false,
  showNothingOption: true,
  withSearch: true,
  validators: [Validators.required]
});
```

### Conditional Visibility

```typescript
import { InputTextBox, InputCheckBox } from '@ta/form-model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const showAddressSubject = new BehaviorSubject(false);

const showAddressCheckbox = new InputCheckBox({
  key: 'hasAddress',
  label: 'I have a different shipping address',
  value: false
});

// Subscribe to checkbox changes
showAddressCheckbox.changeValue$.subscribe(value => {
  showAddressSubject.next(value as boolean);
});

const addressInput = new InputTextBox({
  key: 'address',
  label: 'Shipping Address',
  value: '',
  visible$: showAddressSubject.asObservable(),
  bindStatusToVisible: true // Auto disable when not visible
});
```

### Reactive Value Updates

```typescript
import { InputTextBox } from '@ta/form-model';
import { BehaviorSubject } from 'rxjs';

const userEmail$ = new BehaviorSubject('user@example.com');

const emailInput = new InputTextBox({
  key: 'email',
  label: 'Email',
  value$: userEmail$.asObservable(), // Set initial value from Observable
  type: 'email',
  validators: [Validators.required, Validators.email]
});

// Update from external source
userEmail$.next('newemail@example.com');
```

### Grouped Inputs with Panel

```typescript
import { InputPanel, InputTextBox, InputDropdown } from '@ta/form-model';
import { of } from 'rxjs';

const personalInfoPanel = new InputPanel({
  key: 'personalInfo',
  label: 'Personal Information',
  children: [
    new InputTextBox({
      key: 'firstName',
      label: 'First Name',
      class: 'col-6'
    }),
    new InputTextBox({
      key: 'lastName',
      label: 'Last Name',
      class: 'col-6'
    }),
    new InputDropdown({
      key: 'gender',
      label: 'Gender',
      options$: of([
        { id: 'male', name: 'Male' },
        { id: 'female', name: 'Female' },
        { id: 'other', name: 'Other' }
      ]),
      class: 'col-12'
    })
  ]
});
```

### Using Validators

```typescript
import { InputTextBox } from '@ta/form-model';
import { slugValidator, phoneValidator } from '@ta/form-model';
import { Validators } from '@angular/forms';

const slugInput = new InputTextBox({
  key: 'slug',
  label: 'URL Slug',
  value: 'my-article',
  validators: [Validators.required, slugValidator()],
  message: 'Use lowercase letters, numbers, and hyphens only'
});

const phoneInput = new InputTextBox({
  key: 'phone',
  label: 'Phone Number',
  validators: [phoneValidator()]
});
```

### Dynamic Input with Factory

```typescript
import { InputFactory, FactoryInputType } from '@ta/form-model';

function createInput(type: FactoryInputType, config: any) {
  return InputFactory.getInput(type, {
    key: config.key,
    label: config.label,
    value: config.value,
    ...config
  });
}

// Create different input types dynamically
const textInput = createInput('InputTextBox', {
  key: 'name',
  label: 'Name',
  value: ''
});

const dropdownInput = createInput('InputDropdown', {
  key: 'category',
  label: 'Category',
  options$: of([{ id: '1', name: 'Option 1' }])
});
```

### File Upload Input

```typescript
import { InputUpload } from '@ta/form-model';

const fileUpload = new InputUpload({
  key: 'document',
  label: 'Upload Document',
  accept: '.pdf,.doc,.docx',
  multiple: false,
  maxSize: 5 * 1024 * 1024, // 5MB
  validators: [Validators.required]
});
```

### WYSIWYG Editor

```typescript
import { InputWysiswyg } from '@ta/form-model';

const contentEditor = new InputWysiswyg({
  key: 'content',
  label: 'Article Content',
  value: {
    blocks: [
      {
        type: 'paragraph',
        data: { text: 'Start writing...' }
      }
    ]
  },
  config: {
    placeholder: 'Type your content here...',
    minHeight: 300
  }
});
```

## InputBase API Reference

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `key` | `string` | Unique identifier for the input (used as form control name) |
| `label` | `string` | Display label |
| `value` | `T \| null` | Current value (reactive signal) |
| `type` | `string` | Input type (e.g., 'text', 'email', 'number') |
| `message` | `string` | Help text or hint message |
| `controlType` | `string` | Control type identifier for rendering |
| `validators` | `ValidatorFn[]` | Angular validators |
| `formControl` | `AbstractControl` | Associated form control (created by `createFormControl()`) |
| `class` | `string` | CSS classes (default: 'col-12') |
| `children` | `InputBase[]` | Child inputs for panel/group types |
| `disabled` | `boolean` | Disabled state |
| `visible$` | `Observable<boolean>` | Visibility control |
| `changeValue$` | `Subject<T \| null>` | Observable for value changes |

### Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `createFormControl()` | `group?: FormGroup` | `void` | Creates and registers FormControl |
| `launchChangeValue()` | - | `void` | Manually trigger value change event |
| `disable()` | - | `void` | Disable the input |
| `enable()` | - | `void` | Enable the input |
| `destroy()` | - | `void` | Cleanup subscriptions and complete observables |

### Constructor Options (IInputBase\<T\>)

```typescript
interface IInputBase<T> {
  value$?: Observable<T>;           // Observable for initial value
  value?: T | null;                 // Initial value
  key?: string;                     // Unique identifier
  label?: string;                   // Display label
  type?: string;                    // Input type
  message?: string;                 // Help text
  controlType?: string;             // Control type identifier
  validators?: ValidatorFn[];       // Angular validators
  class?: string;                   // CSS classes
  children?: InputBase[];           // Child inputs
  disabled?: boolean;               // Initial disabled state
  visible$?: Observable<boolean>;   // Visibility control
  bindStatusToVisible?: boolean;    // Auto-disable when hidden (default: true)
}
```

## Advanced Patterns

### Multi-step Form with Dynamic Inputs

```typescript
import { InputDynamic } from '@ta/form-model';

const dynamicStep = new InputDynamic({
  key: 'step2',
  label: 'Additional Information',
  inputType: 'InputPanel',
  templateChildren: () => [
    new InputTextBox({
      key: 'field1',
      label: 'Dynamic Field 1'
    }),
    new InputTextBox({
      key: 'field2',
      label: 'Dynamic Field 2'
    })
  ]
});
```

### Form State Management

```typescript
class FormStateService {
  private inputs: InputBase<any>[] = [];

  addInput(input: InputBase<any>) {
    this.inputs.push(input);
  }

  getFormValues() {
    return this.inputs.reduce((acc, input) => {
      acc[input.key] = input.value;
      return acc;
    }, {} as Record<string, any>);
  }

  resetForm() {
    this.inputs.forEach(input => {
      input.value = null;
    });
  }

  cleanup() {
    this.inputs.forEach(input => input.destroy());
    this.inputs = [];
  }
}
```

### Custom Validator Integration

```typescript
import { InputTextBox } from '@ta/form-model';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function customValidator(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    return pattern.test(control.value) ? null : { customError: true };
  };
}

const customInput = new InputTextBox({
  key: 'custom',
  label: 'Custom Field',
  validators: [
    Validators.required,
    customValidator(/^[A-Z]{3}-\d{4}$/)
  ]
});
```

## Building

To build the library:

```bash
ng build @ta/form-model
```

or use the Lerna build:

```bash
lerna run build --scope=@ta/form-model --include-dependencies
```

## Testing

```bash
ng test @ta/form-model
```

## Best Practices

1. **Always call `destroy()` when component is destroyed** to prevent memory leaks
2. **Use `class` property** for responsive grid layouts (e.g., 'col-12 col-md-6')
3. **Leverage `visible$`** for conditional fields instead of removing from array
4. **Use `bindStatusToVisible`** to automatically manage disabled state
5. **Subscribe to `changeValue$`** for reactive value updates
6. **Provide clear `label` and `message`** for better UX
7. **Use type-safe generics** when extending InputBase for custom types

## Related Packages

- **@ta/form-basic** - Form container and rendering components
- **@ta/form-input** - Input component implementations
- **@ta/wysiswyg** - WYSIWYG editor integration

## License

MIT
