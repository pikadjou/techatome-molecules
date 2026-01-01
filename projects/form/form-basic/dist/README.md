# @ta/form-basic

**Purpose:** Core form components for building dynamic, reactive forms in Angular applications. Provides high-level form containers and field management components that work seamlessly with `@ta/form-model` input types.

## Installation

```bash
npm install @ta/form-basic
```

or with yarn:

```bash
yarn add @ta/form-basic
```

## Dependencies

This package requires the following peer dependencies:
- `@angular/common` ^18.2.13
- `@angular/core` ^18.2.13

And includes these internal dependencies:
- `@ta/form-input` - Input component implementations
- `@ta/form-model` - Input type models and validators
- `@ta/icons` - Icon components
- `@ta/translation` - i18n support
- `@ta/notification` - Error and notification display
- `@ta/ui` - UI components (buttons, loaders, etc.)

## Exports

### Components

| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| **FormComponent** | `ta-form` | Main form container with validation and submission | `inputs`, `loader`, `error`, `border`, `canDisplayButton`, `buttonTitle`, `onLive`, `askValidation$`, `askOnDestroy` |
| **InputsComponent** | `ta-inputs` | Renders individual input fields based on type | `input`, `standalone`, `onFocus`, `space` |
| **EditFieldComponent** | `ta-edit-field` | Inline editable field with toggle mode | `getInput`, `changeEditMode$`, `isLoading`, `withBorder`, `disabled` |

### Module

| Name | Purpose |
|------|---------|
| **TaFormModule** | NgModule for non-standalone usage (deprecated, use standalone components instead) |

## Usage Examples

### Basic Form

```typescript
import { Component } from '@angular/core';
import { FormComponent } from '@ta/form-basic';
import { InputTextBox, InputDropdown } from '@ta/form-model';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormComponent],
  template: `
    <ta-form
      [inputs]="formInputs"
      [loader]="isLoading"
      [error]="formError"
      buttonTitle="Save User"
      (valid)="onFormSubmit($event)"
      (isFormValid)="onValidityChange($event)">
    </ta-form>
  `
})
export class UserFormComponent {
  isLoading = false;
  formError = { status: 'none', message: '' };

  formInputs = [
    new InputTextBox({
      key: 'username',
      label: 'Username',
      value: '',
      validators: [Validators.required, Validators.minLength(3)],
      class: 'col-12 col-md-6'
    }),
    new InputTextBox({
      key: 'email',
      type: 'email',
      label: 'Email',
      value: '',
      validators: [Validators.required, Validators.email],
      class: 'col-12 col-md-6'
    }),
    new InputDropdown({
      key: 'role',
      label: 'Role',
      options$: of([
        { id: 'admin', name: 'Administrator' },
        { id: 'user', name: 'User' },
        { id: 'guest', name: 'Guest' }
      ]),
      value: 'user',
      validators: [Validators.required],
      class: 'col-12'
    })
  ];

  onFormSubmit(values: any) {
    console.log('Form submitted:', values);
    this.isLoading = true;
    // Handle form submission...
  }

  onValidityChange(isValid: boolean) {
    console.log('Form validity changed:', isValid);
  }
}
```

### Live Form (Auto-save on change)

```typescript
import { Component } from '@angular/core';
import { FormComponent } from '@ta/form-basic';
import { InputTextBox, InputTextarea } from '@ta/form-model';

@Component({
  selector: 'app-note-editor',
  standalone: true,
  imports: [FormComponent],
  template: `
    <ta-form
      [inputs]="noteInputs"
      [onLive]="true"
      [canDisplayButton]="false"
      (valid)="autoSave($event)">
    </ta-form>
  `
})
export class NoteEditorComponent {
  noteInputs = [
    new InputTextBox({
      key: 'title',
      label: 'Note Title',
      value: 'My Note',
      class: 'col-12'
    }),
    new InputTextarea({
      key: 'content',
      label: 'Content',
      value: 'Note content...',
      class: 'col-12'
    })
  ];

  autoSave(values: any) {
    console.log('Auto-saving:', values);
    // Debounced auto-save logic...
  }
}
```

### Programmatic Validation

```typescript
import { Component } from '@angular/core';
import { FormComponent } from '@ta/form-basic';
import { InputTextBox } from '@ta/form-model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-validation-example',
  standalone: true,
  imports: [FormComponent],
  template: `
    <ta-form
      [inputs]="inputs"
      [askValidation$]="triggerValidation$"
      (valid)="onSubmit($event)">
    </ta-form>
    <button (click)="validate()">Validate Now</button>
  `
})
export class ValidationExampleComponent {
  triggerValidation$ = new Subject<null>();

  inputs = [
    new InputTextBox({
      key: 'field',
      label: 'Field',
      value: ''
    })
  ];

  validate() {
    this.triggerValidation$.next(null);
  }

  onSubmit(values: any) {
    console.log('Submitted:', values);
  }
}
```

### Inline Edit Field

```typescript
import { Component, signal } from '@angular/core';
import { EditFieldComponent } from '@ta/form-basic';
import { InputTextBox } from '@ta/form-model';

@Component({
  selector: 'app-inline-edit',
  standalone: true,
  imports: [EditFieldComponent],
  template: `
    <ta-edit-field
      [getInput]="getInput"
      [isLoading]="isUpdating()"
      [withBorder]="true"
      (newValue)="onUpdate($event)">
    </ta-edit-field>
  `
})
export class InlineEditComponent {
  userName = signal('John Doe');
  isUpdating = signal(false);

  getInput = () => new InputTextBox({
    key: 'name',
    label: 'Name',
    value: this.userName()
  });

  onUpdate(newValue: unknown) {
    console.log('New value:', newValue);
    this.isUpdating.set(true);

    // Simulate API call
    setTimeout(() => {
      this.userName.set(newValue as string);
      this.isUpdating.set(false);
    }, 1000);
  }
}
```

### Standalone Input Rendering

```typescript
import { Component } from '@angular/core';
import { InputsComponent } from '@ta/form-basic';
import { InputTextBox } from '@ta/form-model';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [InputsComponent, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <ta-inputs
        [input]="usernameInput"
        [standalone]="true">
      </ta-inputs>
    </form>
  `
})
export class CustomFormComponent {
  usernameInput = new InputTextBox({
    key: 'username',
    label: 'Username',
    value: ''
  });

  form = new FormGroup({});

  ngOnInit() {
    this.usernameInput.createFormControl(this.form);
  }
}
```

## Component Details

### FormComponent

The main form container component that handles:
- Dynamic form generation from input models
- Form validation and error display
- Submit button rendering and handling
- Live form updates (auto-save)
- Programmatic validation triggers
- Loading states

**Key Features:**
- Automatically creates FormGroup from InputBase array
- Supports both manual submission and live updates
- Emits validity changes
- Handles cleanup on destroy
- Deep equality checking for change detection

### InputsComponent

Renders individual form inputs based on their type. Supports all input types from `@ta/form-model` and `@ta/form-input`:
- Textbox, Textarea, Password
- Dropdown, Radio, Checkbox
- Date Picker, Time Picker
- File Upload, Images, Logo
- WYSIWYG Editor
- Phone, Email, Address
- Color Picker, Slider, Rating
- And more...

### EditFieldComponent

Provides inline editing functionality:
- Click to edit mode
- Click outside to save
- Loading state during update
- Programmatic edit mode control
- Optional border styling

## Form Input Props Reference

### FormComponent Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `inputs` | `InputBase<any>[]` | required | Array of input models defining form fields |
| `loader` | `boolean` | `false` | Show loading state |
| `error` | `IInputsError` | `{ status: 'none', message: '' }` | Error state and message |
| `border` | `boolean` | `true` | Show form border |
| `canDisplayButton` | `boolean` | `true` | Show submit button |
| `buttonTitle` | `string` | `'form.save'` | Submit button text (translation key) |
| `onLive` | `boolean` | `false` | Enable auto-submit on changes |
| `askValidation$` | `Observable<null>` | - | Observable to trigger validation |
| `askOnDestroy` | `boolean` | `false` | Submit on component destroy |

### FormComponent Outputs

| Event | Payload | Description |
|-------|---------|-------------|
| `valid` | `{}` | Emitted when form is valid and submitted |
| `isFormValid` | `boolean` | Emitted when form validity changes |

## Building

To build the library:

```bash
ng build @ta/form-basic
```

or use the Lerna build:

```bash
lerna run build --scope=@ta/form-basic --include-dependencies
```

## Testing

```bash
ng test @ta/form-basic
```

## Migration from NgModule

The `TaFormModule` is deprecated. Migrate to standalone components:

```typescript
// Old (deprecated)
import { TaFormModule } from '@ta/form-basic';

@NgModule({
  imports: [TaFormModule]
})

// New (recommended)
import { FormComponent, EditFieldComponent, InputsComponent } from '@ta/form-basic';

@Component({
  standalone: true,
  imports: [FormComponent, EditFieldComponent, InputsComponent]
})
```

## Related Packages

- **@ta/form-model** - Input type models, validators, and base classes
- **@ta/form-input** - Input component implementations
- **@ta/wysiswyg** - WYSIWYG editor integration

## License

MIT
