# @ta/form

**Purpose:** Comprehensive form system with basic components, input collection, and form models

## Exports

### Components - Basic Form
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| FormComponent | `ta-form` | Main form container | formGroup, onSubmit |
| InputsComponent | `ta-inputs` | Input fields container | inputs |
| EditFieldComponent | `ta-edit-field` | Inline field editing | field, value, onSave |

### Components - Input Controls
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| CheckboxComponent | `ta-checkbox` | Checkbox input | formControl, label |
| ColorPickerComponent | `ta-color-picker` | Color selection input | formControl, palette |
| DatePickerComponent | `ta-date-picker` | Date selection input | formControl, minDate, maxDate |
| DropdownComponent | `ta-dropdown` | Dropdown/select input | formControl, options |
| LabelComponent | `ta-label` | Form labels | text, required |
| RadioComponent | `ta-radio` | Radio button input | formControl, options |
| RatingComponent | `ta-rating` | Star rating input | formControl, max |
| SliderComponent | `ta-slider` | Range slider input | formControl, min, max, step |
| SwitchComponent | `ta-switch` | Toggle switch input | formControl, label |
| TextareaComponent | `ta-textarea` | Multi-line text input | formControl, rows |
| TextBoxComponent | `ta-textbox` | Single-line text input | formControl, placeholder |
| TimePickerComponent | `ta-time-picker` | Time selection input | formControl, format |
| ToggleComponent | `ta-toggle` | Toggle button input | formControl, options |

### Components - Advanced Inputs
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| InputImagesComponent | `ta-input-images` | Multiple images input | formControl, maxFiles |
| InputImageComponent | `ta-input-image` | Single image input | formControl, aspectRatio |
| InputLogoComponent | `ta-input-logo` | Logo upload input | formControl |
| InputSchemaComponent | `ta-input-schema` | Schema-based dynamic input | schema, formControl |
| SearchFieldComponent | `ta-search-field` | Search input field | formControl, onSearch |
| ChoicesComponent | `ta-choices` | Multiple choice selector | formControl, options |
| WysiwygComponent | `ta-wysiwyg` | Rich text editor input | formControl |
| InputPhoneComponent | `ta-input-phone` | Phone number input | formControl, country |
| UploadComponent | `ta-upload` | File upload input | formControl, accept |
| CultureComponent | `ta-culture` | Culture/language selector | formControl |
| ComponentComponent | `ta-component` | Dynamic component input | componentType, formControl |
| AbstractComponent | N/A | Base input component | formControl |

### Models/DTOs
| Name | Purpose |
|------|---------|
| CheckboxInput | Checkbox input configuration |
| ColorPickerInput | Color picker configuration |
| DatePickerInput | Date picker configuration |
| DropdownInput | Dropdown configuration |
| InputBase | Base input model |
| PanelModel | Form panel configuration |
| SchemaModel | Dynamic form schema |
| TranslationModel | Translation configuration |

### Validators
| Function | Purpose |
|----------|---------|
| slugValidator | URL slug validation |
| phoneValidator | Phone number validation |

### Utilities
| Function | Purpose |
|----------|---------|
| InputFactory | Create inputs from configuration |

## Usage Example
```typescript
import { FormComponent, TextBoxComponent, DropdownComponent } from '@ta/form';

@Component({
  template: `
    <ta-form [formGroup]="form" (onSubmit)="submit()">
      <ta-textbox formControlName="name" placeholder="Enter name"></ta-textbox>
      <ta-dropdown formControlName="status" [options]="statusOptions"></ta-dropdown>
    </ta-form>
  `
})
export class MyComponent {
  form = new FormGroup({
    name: new FormControl(''),
    status: new FormControl('')
  });

  statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
  ];

  submit() {
    console.log(this.form.value);
  }
}
```

## Dependencies
- @ta/ui
- @ta/icons
- @angular/forms
- @angular/material
