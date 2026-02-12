# @ta/form-model + @ta/form-input + @ta/form-basic - Complete Reference

## Architecture

```
@ta/form-model  → InputBase<T> subclasses (data models)
@ta/form-input  → TaAbstractInputComponent<M> (UI components)
@ta/form-basic  → <ta-form> container (orchestrator)
```

## Quick Start

```typescript
// 1. Define inputs array
const inputs = [
  new InputTextBox({ key: 'name', label: 'Name', validators: [Validators.required] }),
  new InputEmail({ key: 'email', label: 'Email' }),
  new InputDropdown({ key: 'role', label: 'Role', options: of([{ id: 'admin', name: 'Admin' }]) }),
];

// 2. Use in template
// <ta-form [inputs]="inputs" (valid)="onSubmit($event)"></ta-form>
```

## ta-form Component

```html
<ta-form
  [inputs]="formInputs"
  [askValidation$]="validateTrigger$"
  [askOnDestroy]="true"
  [loader]="isLoading()"
  [error]="{ status: ENotificationCode, message: string }"
  [border]="true"
  [canDisplayButton]="true"
  [buttonTitle]="'form.save'"
  [onLive]="false"
  (valid)="onSubmit($event)"
  (isFormValid)="onValidityChange($event)">
</ta-form>
```

## Standalone Input Usage

```html
<ta-input-textbox [input]="myInput" [standalone]="true" (valueChanged)="onChange($event)"></ta-input-textbox>
```

## All Input Model Types

### Text Inputs

```typescript
// Simple text
new InputTextBox({
  key: 'name', label: 'Name', type: 'text',
  icon: TaIconType, iconClicked: () => void,
  validators: [Validators.required],
  value: 'default', disabled: false, class: 'col-12',
  visible$: of(true)
})

// Textarea
new InputTextarea({ key: 'desc', label: 'Description' })

// Email (auto validation)
new InputEmail({ key: 'email', label: 'Email' })

// Password
new InputPassword({ key: 'password', label: 'Password' })

// Phone (with formatting)
new InputPhone({ key: 'phone', label: 'Phone' })
```

### Selection Inputs

```typescript
// Dropdown
new InputDropdown({
  key: 'category', label: 'Category',
  options: of([{ id: '1', name: 'Option 1', disabled: false }]),
  multiple: false, showNothingOption: false,
  withSearch: false, width: '100%',
  valueChanged: (data) => {}
})

// Choices (advanced dropdown with templates)
new InputChoices({
  key: 'users', label: 'Users',
  options: of([{ id: '1', name: 'John', data: {} }]),
  multiple: true, withSearch: true,
  advancedSearch$: (search) => searchService.search(search),
  choiceTemplate: { one: templateRef, list: templateRef }
})

// Radio buttons
new InputRadio({
  key: 'status', label: 'Status',
  options: of([{ id: true, icon: 'check' }, { id: false, icon: 'close' }])
})
```

### Boolean Inputs

```typescript
// Checkbox
new InputCheckBox({
  key: 'agree', label: 'I agree', value: false,
  toggle: false  // true for switch style
})
```

### Date/Time Inputs

```typescript
// Date picker
new InputDatePicker({
  key: 'deadline', label: 'Deadline',
  minDate: 'today', maxDate: new Date('2025-12-31'),
  rangeEnabled: false, value: new Date()
})

// Time picker
new InputTimePicker({ key: 'time', label: 'Time' })
```

### Numeric Inputs

```typescript
// Number
new InputNumber({ key: 'quantity', label: 'Quantity', min: 0, max: 100 })

// Slider
new InputSlider({ key: 'rating', label: 'Rating', min: 0, max: 100, step: 1, value: 50 })

// Rating (stars)
new InputRating({ key: 'stars', label: 'Rating' })
```

### Advanced Inputs

```typescript
// Color picker
new InputColorPicker({ key: 'color', label: 'Color' })

// File upload
new InputUpload({ key: 'docs', label: 'Files', confirmButton: true })

// Images
new InputImages({
  key: 'photos', label: 'Photos',
  files$: getFiles(), update: (files) => upload(files),
  onFileDeleted: (file) => delete(file)
})

// Logo
new InputLogo({ key: 'logo', label: 'Logo' })

// WYSIWYG editor
new InputWysiswyg({ key: 'content', label: 'Content' })

// Schema (JSON)
new InputSchema({ key: 'schema', label: 'Schema' })

// Address (with autocomplete)
new InputAddress({ key: 'address', label: 'Address' })

// Culture selector
new InputCulture({ key: 'lang', label: 'Language' })

// Custom component
new InputComponent({ key: 'custom', label: 'Custom' })
```

### Layout & Grouping

```typescript
// Panel (groups children)
new InputPanel({
  key: 'personal', label: 'Personal Info',
  containerClass: ['with-separator', 'highlight-title'],
  contentClass: 'flex-column g-space-md',
  children: [
    new InputTextBox({ key: 'first', label: 'First' }),
    new InputTextBox({ key: 'last', label: 'Last' }),
  ]
})
// containerClass options: 'with-separator', 'no-title-space', 'highlight-title'

// Static label
new InputLabel({ key: 'section', label: 'Section Title' })
```

### Dynamic & Conditional

```typescript
// Dynamic list (repeatable group)
new InputDynamic({
  key: 'items', label: 'Items',
  template: [
    { type: 'InputTextBox', options: { key: 'name', label: 'Name' } },
    { type: 'InputTextarea', options: { key: 'desc', label: 'Description' } },
  ]
})
// Methods: add(key?), remove(id)

// Multilingual
new InputTranslation({
  key: 'content', label: 'Content',
  mainCulture: Culture.FR_FR,
  template: [{ type: 'InputTextBox', options: { key: 'title', label: 'Title' } }],
  value: { FR_FR: { title: 'Titre' }, EN_EN: { title: 'Title' } }
})

// Conditional (switches input type)
new InputSwitch({
  key: 'field', label: 'Dynamic',
  match: type$.pipe(map(type => ({ type: type, prop: {} })))
})
```

## InputBase<T> Common Properties

```typescript
interface IInputBase<T> {
  value$?: Observable<T>;          // Reactive value source
  value?: T | null;                // Initial value
  key?: string;                    // Unique identifier
  label?: string;                  // Display label (i18n key)
  type?: string;                   // Input type
  message?: string;                // Help text
  controlType?: string;            // Component type ID
  validators?: ValidatorFn[];      // Angular validators
  class?: string;                  // CSS class (default: 'col-12')
  children?: InputBase[];          // Child inputs
  disabled?: boolean;              // Disabled state
  visible$?: Observable<boolean>;  // Visibility control
  bindStatusToVisible?: boolean;   // Auto-disable when hidden (default: true)
}
```

### InputBase<T> Runtime API
```typescript
input.value              // Get current value
input.value = newValue   // Set value (updates FormControl)
input.changeValue$       // Subject<T|null> - value change stream
input.formControl        // AbstractControl reference
input.createFormControl(group?) // Initialize FormControl
input.disable()          // Disable input
input.enable()           // Enable input (if visible)
input.destroy()          // Clean up subscriptions
```

## Validators

```typescript
import { Validators } from '@angular/forms';
import { phoneValidator, slugValidator } from '@ta/form-model';

validators: [
  Validators.required,
  Validators.email,
  Validators.minLength(5),
  Validators.maxLength(100),
  Validators.min(0),
  Validators.max(100),
  Validators.pattern(/regex/),
  phoneValidator(),  // Phone number validation
  slugValidator(),   // URL slug validation
]
```

## Form Service Pattern

```typescript
@Injectable({ providedIn: 'root' })
export class MyFormService {
  public getForm(data?: MyType): InputBase<any>[] {
    return [
      new InputPanel({
        key: 'section', label: 'form.section',
        containerClass: ['highlight-title'],
        contentClass: 'flex-column g-space-md',
        children: [
          new InputTextBox({
            key: 'name', label: 'form.name',
            validators: [Validators.required],
            value: data?.name,
          }),
        ],
      }),
    ];
  }

  public formatForm(data: any): Partial<MyType> {
    return { name: data.name };
  }
}
```

## Form Input Components (selectors)

| Component | Selector | Model |
|-----------|----------|-------|
| TextBoxComponent | `ta-input-textbox` | InputTextBox |
| TextareaComponent | `ta-input-textarea` | InputTextarea |
| DropdownComponent | `ta-input-dropdown` | InputDropdown |
| InputChoicesComponent | `ta-input-choices` | InputChoices |
| CheckboxComponent | `ta-input-checkbox` | InputCheckBox |
| RadioComponent | `ta-input-radio` | InputRadio |
| DatePickerComponent | `ta-input-date-picker` | InputDatePicker |
| TimePickerComponent | `ta-input-time-picker` | InputTimePicker |
| SliderComponent | `ta-input-slider` | InputSlider |
| ToggleComponent | `ta-input-toggle` | - |
| SwitchComponent | `ta-input-switch` | InputSwitch |
| ColorPickerComponent | `ta-input-color-picker` | InputColorPicker |
| RatingComponent | `ta-input-rating` | InputRating |
| PhoneComponent | `ta-input-phone` | InputPhone |
| SearchFieldComponent | `ta-search-field` | InputTextBox |
| WysiswygComponent | `ta-input-wysiswyg` | InputWysiswyg |
| UploadComponent | `ta-input-upload` | InputUpload |
| InputImageComponent | `ta-input-image` | - |
| InputImagesComponent | `ta-input-images` | InputImages |
| InputLogoComponent | `ta-input-logo` | InputLogo |
| InputSchemaComponent | `ta-input-schema` | InputSchema |
| CultureComponent | `ta-input-culture` | InputCulture |
| ComponentComponent | `ta-input-component` | InputComponent |
| LabelComponent | `ta-input-label` | InputLabel |

## EditFieldComponent
```html
<ta-edit-field [input]="textboxInput" (saved)="onSave($event)"></ta-edit-field>
```
Inline editing with save/cancel.
