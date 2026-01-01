# @ta/form-input

A comprehensive Angular library providing a rich collection of form input components built on top of Angular Material and designed for seamless integration with the Techatome ecosystem.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Available Components](#available-components)
- [Usage Examples](#usage-examples)
  - [Text Input](#text-input)
  - [Dropdown](#dropdown)
  - [Date Picker](#date-picker)
  - [Checkbox](#checkbox)
  - [Radio Buttons](#radio-buttons)
  - [Textarea](#textarea)
  - [Slider](#slider)
  - [Time Picker](#time-picker)
  - [Toggle](#toggle)
  - [Switch](#switch)
  - [Rating](#rating)
  - [Color Picker](#color-picker)
  - [Phone Input](#phone-input)
  - [Search Field](#search-field)
  - [WYSIWYG Editor](#wysiwyg-editor)
  - [File Upload](#file-upload)
  - [Image Upload](#image-upload)
  - [Multiple Images Upload](#multiple-images-upload)
  - [Logo Upload](#logo-upload)
  - [Schema Input](#schema-input)
  - [Choices Input](#choices-input)
  - [Culture Selector](#culture-selector)
  - [Component Input](#component-input)
  - [Label](#label)
- [Component Architecture](#component-architecture)
- [Dependencies](#dependencies)
- [License](#license)

## Overview

`@ta/form-input` is a feature-rich form input library that provides 24 specialized input components, each designed to handle specific data types and user interactions. All components are:

- **Standalone**: Modern Angular standalone components, ready to use without NgModule imports
- **Reactive Forms**: Built on Angular Reactive Forms for powerful form control
- **Type-safe**: Full TypeScript support with strong typing
- **Accessible**: Following Angular Material accessibility standards
- **Internationalized**: Built-in i18n support via `@ta/translation`
- **Customizable**: Flexible configuration options for various use cases

## Installation

Install the package via npm or yarn:

```bash
npm install @ta/form-input
```

```bash
yarn add @ta/form-input
```

### Peer Dependencies

This library requires the following peer dependencies:

```json
{
  "@angular/common": "^18.2.13",
  "@angular/core": "^18.2.13",
  "@angular/forms": "^18.2.13",
  "@angular/material": "^18.2.13"
}
```

## Quick Start

### Using Standalone Components (Recommended)

Import individual components directly in your component:

```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TextBoxComponent, DropdownComponent, CheckboxComponent } from '@ta/form-input';
import { InputTextBox, InputDropdown, InputCheckBox } from '@ta/form-model';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [TextBoxComponent, DropdownComponent, CheckboxComponent],
  template: `
    <ta-input-textbox [input]="nameInput" />
    <ta-input-dropdown [input]="categoryInput" />
    <ta-input-checkbox [input]="agreeInput" />
  `
})
export class MyFormComponent {
  nameInput = new InputTextBox({ label: 'Name', placeholder: 'Enter your name' });
  categoryInput = new InputDropdown({ label: 'Category', options: [...] });
  agreeInput = new InputCheckBox({ label: 'I agree to the terms' });
}
```

### Using the Module (Deprecated)

For legacy applications, you can still import the module:

```typescript
import { TaFormInputsModule } from '@ta/form-input';

@NgModule({
  imports: [TaFormInputsModule],
  // ...
})
export class AppModule { }
```

**Note**: The module approach is deprecated and will be removed in a future version. Please migrate to standalone components.

## Available Components

The library provides 24 input components organized by category:

### Text & Number Inputs
- **TextBoxComponent** (`ta-input-textbox`) - Single-line text input with password support
- **TextareaComponent** (`ta-input-textarea`) - Multi-line text input
- **SearchFieldComponent** (`ta-search-field`) - Expandable search input with completion support

### Selection Inputs
- **DropdownComponent** (`ta-input-dropdown`) - Single or multiple selection dropdown
- **RadioComponent** (`ta-input-radio`) - Radio button group selection
- **CheckboxComponent** (`ta-input-checkbox`) - Boolean checkbox input
- **ToggleComponent** (`ta-input-toggle`) - Slide toggle switch
- **SwitchComponent** (`ta-input-switch`) - Dynamic component switcher
- **ChoicesComponent** (`ta-input-choices`) - Advanced multi-select with search and filtering

### Date & Time Inputs
- **DatePickerComponent** (`ta-input-date-picker`) - Date and date range picker
- **TimePickerComponent** (`ta-input-time-picker`) - Time selection input

### Specialized Inputs
- **ColorPickerComponent** (`ta-input-color-picker`) - Color selection input
- **PhoneComponent** (`ta-input-phone`) - International phone number input with country codes
- **RatingComponent** (`ta-input-rating`) - Star rating input
- **SliderComponent** (`ta-input-slider`) - Numeric range slider
- **CultureComponent** (`ta-input-culture`) - Language/culture selector

### File & Media Inputs
- **UploadComponent** (`ta-input-upload`) - File upload with progress tracking
- **InputImageComponent** (`ta-input-image`) - Single image display
- **InputImagesComponent** (`ta-input-images`) - Multiple images upload and management
- **InputLogoComponent** (`ta-input-logo`) - Logo upload with preview

### Rich Content & Advanced Inputs
- **WysiswygComponent** (`ta-input-wysiswyg`) - Rich text WYSIWYG editor
- **InputSchemaComponent** (`ta-input-schema`) - Schema-based file input
- **ComponentInputComponent** (`ta-input-component`) - Custom component selector
- **LabelComponent** (`ta-input-label`) - Read-only label display

## Usage Examples

All components extend from `TaAbstractInputComponent` and follow a consistent API pattern. Each component accepts an `input` property that defines its configuration and behavior.

### Text Input

The text box component supports various input types including text, password, email, and number.

```typescript
import { Component } from '@angular/core';
import { TextBoxComponent } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TextBoxComponent],
  template: `
    <ta-input-textbox [input]="nameInput" />
    <ta-input-textbox [input]="emailInput" />
    <ta-input-textbox [input]="passwordInput" />
  `
})
export class ExampleComponent {
  nameInput = new InputTextBox({
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true
  });

  emailInput = new InputTextBox({
    label: 'Email',
    type: 'email',
    placeholder: 'user@example.com'
  });

  passwordInput = new InputTextBox({
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password'
  });
}
```

### Dropdown

Single or multiple selection dropdown with optional search functionality.

```typescript
import { Component } from '@angular/core';
import { DropdownComponent } from '@ta/form-input';
import { InputDropdown } from '@ta/form-model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [DropdownComponent],
  template: `
    <ta-input-dropdown [input]="categoryInput" />
    <ta-input-dropdown [input]="tagsInput" />
  `
})
export class ExampleComponent {
  // Single selection dropdown
  categoryInput = new InputDropdown({
    label: 'Category',
    placeholder: 'Select a category',
    options$: new BehaviorSubject([
      { id: '1', name: 'Technology' },
      { id: '2', name: 'Science' },
      { id: '3', name: 'Arts' }
    ])
  });

  // Multiple selection with search
  tagsInput = new InputDropdown({
    label: 'Tags',
    placeholder: 'Select tags',
    multiple: true,
    withSearch: true,
    options$: new BehaviorSubject([
      { id: 'js', name: 'JavaScript' },
      { id: 'ts', name: 'TypeScript' },
      { id: 'ng', name: 'Angular' },
      { id: 'react', name: 'React' }
    ])
  });
}
```

### Date Picker

Date picker supporting single dates and date ranges with Angular Material.

```typescript
import { Component } from '@angular/core';
import { DatePickerComponent } from '@ta/form-input';
import { InputDatePicker } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [DatePickerComponent],
  template: `
    <ta-input-date-picker [input]="birthdateInput" />
    <ta-input-date-picker [input]="dateRangeInput" />
  `
})
export class ExampleComponent {
  // Single date picker
  birthdateInput = new InputDatePicker({
    label: 'Birth Date',
    placeholder: 'Select your birth date'
  });

  // Date range picker
  dateRangeInput = new InputDatePicker({
    label: 'Date Range',
    placeholder: 'Select date range',
    range: true
  });
}
```

### Checkbox

Simple boolean checkbox with label support.

```typescript
import { Component } from '@angular/core';
import { CheckboxComponent } from '@ta/form-input';
import { InputCheckBox } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <ta-input-checkbox [input]="agreeInput" />
    <ta-input-checkbox [input]="subscribeInput" />
  `
})
export class ExampleComponent {
  agreeInput = new InputCheckBox({
    label: 'I agree to the terms and conditions',
    required: true
  });

  subscribeInput = new InputCheckBox({
    label: 'Subscribe to newsletter'
  });
}
```

### Radio Buttons

Radio button group for single selection from multiple options.

```typescript
import { Component } from '@angular/core';
import { RadioComponent } from '@ta/form-input';
import { InputRadio } from '@ta/form-model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [RadioComponent],
  template: `
    <ta-input-radio [input]="genderInput" />
    <ta-input-radio [input]="planInput" />
  `
})
export class ExampleComponent {
  genderInput = new InputRadio({
    label: 'Gender',
    options$: new BehaviorSubject([
      { id: 'male', name: 'Male' },
      { id: 'female', name: 'Female' },
      { id: 'other', name: 'Other' }
    ])
  });

  planInput = new InputRadio({
    label: 'Subscription Plan',
    options$: new BehaviorSubject([
      { id: 'free', name: 'Free' },
      { id: 'pro', name: 'Professional' },
      { id: 'enterprise', name: 'Enterprise' }
    ])
  });
}
```

### Textarea

Multi-line text input for longer content.

```typescript
import { Component } from '@angular/core';
import { TextareaComponent } from '@ta/form-input';
import { InputTextarea } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TextareaComponent],
  template: `
    <ta-input-textarea [input]="descriptionInput" />
    <ta-input-textarea [input]="commentsInput" />
  `
})
export class ExampleComponent {
  descriptionInput = new InputTextarea({
    label: 'Description',
    placeholder: 'Enter a detailed description',
    rows: 4
  });

  commentsInput = new InputTextarea({
    label: 'Comments',
    placeholder: 'Additional comments',
    rows: 6,
    maxLength: 500
  });
}
```

### Slider

Numeric range slider for selecting values within a range.

```typescript
import { Component } from '@angular/core';
import { SliderComponent } from '@ta/form-input';
import { InputSlider } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SliderComponent],
  template: `
    <ta-input-slider [input]="volumeInput" />
    <ta-input-slider [input]="priceRangeInput" />
  `
})
export class ExampleComponent {
  volumeInput = new InputSlider({
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    value: 50
  });

  priceRangeInput = new InputSlider({
    label: 'Price Range',
    min: 0,
    max: 1000,
    step: 10,
    value: 250
  });
}
```

### Time Picker

Time selection input using ngx-material-timepicker.

```typescript
import { Component } from '@angular/core';
import { TimePickerComponent } from '@ta/form-input';
import { InputTimePicker } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TimePickerComponent],
  template: `
    <ta-input-time-picker [input]="appointmentInput" />
    <ta-input-time-picker [input]="reminderInput" />
  `
})
export class ExampleComponent {
  appointmentInput = new InputTimePicker({
    label: 'Appointment Time',
    placeholder: 'Select time'
  });

  reminderInput = new InputTimePicker({
    label: 'Reminder Time',
    placeholder: 'Set reminder time'
  });
}
```

### Toggle

Slide toggle switch for boolean values.

```typescript
import { Component } from '@angular/core';
import { ToggleComponent } from '@ta/form-input';
import { InputCheckBox } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ToggleComponent],
  template: `
    <ta-input-toggle [input]="notificationsInput" />
    <ta-input-toggle [input]="darkModeInput" />
  `
})
export class ExampleComponent {
  notificationsInput = new InputCheckBox({
    label: 'Enable Notifications'
  });

  darkModeInput = new InputCheckBox({
    label: 'Dark Mode'
  });
}
```

### Switch

Dynamic component switcher that renders different input types based on configuration.

```typescript
import { Component } from '@angular/core';
import { SwitchComponent } from '@ta/form-input';
import { InputSwitch } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SwitchComponent],
  template: `
    <ta-input-switch [input]="dynamicInput" />
  `
})
export class ExampleComponent {
  dynamicInput = new InputSwitch({
    label: 'Dynamic Field',
    // Configuration determines which component to render
    currentType: 'textbox' // Can switch to 'checkbox', 'datepicker', 'dropdown', etc.
  });
}
```

### Rating

Star rating component for collecting user ratings.

```typescript
import { Component } from '@angular/core';
import { RatingComponent } from '@ta/form-input';
import { InputRating } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [RatingComponent],
  template: `
    <ta-input-rating [input]="productRatingInput" />
    <ta-input-rating [input]="serviceRatingInput" />
  `
})
export class ExampleComponent {
  productRatingInput = new InputRating({
    label: 'Rate this product',
    maxRating: 5,
    value: 0
  });

  serviceRatingInput = new InputRating({
    label: 'Rate our service',
    maxRating: 5,
    value: 0
  });
}
```

### Color Picker

Color selection input with native color picker.

```typescript
import { Component } from '@angular/core';
import { ColorPickerComponent } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ColorPickerComponent],
  template: `
    <ta-input-color-picker [input]="brandColorInput" />
    <ta-input-color-picker [input]="accentColorInput" />
  `
})
export class ExampleComponent {
  brandColorInput = new InputTextBox({
    label: 'Brand Color',
    value: '#3f51b5'
  });

  accentColorInput = new InputTextBox({
    label: 'Accent Color',
    value: '#ff4081'
  });
}
```

### Phone Input

International phone number input with country code selection using intl-tel-input.

```typescript
import { Component } from '@angular/core';
import { InputPhoneComponent } from '@ta/form-input';
import { InputPhone } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [InputPhoneComponent],
  template: `
    <ta-input-phone [input]="phoneInput" />
    <ta-input-phone [input]="emergencyInput" />
  `
})
export class ExampleComponent {
  phoneInput = new InputPhone({
    label: 'Phone Number',
    placeholder: 'Enter phone number',
    preferredCountries: ['be', 'fr', 'nl', 'de']
  });

  emergencyInput = new InputPhone({
    label: 'Emergency Contact',
    placeholder: 'Emergency phone',
    preferredCountries: ['be', 'fr']
  });
}
```

### Search Field

Expandable search field with autocomplete support.

```typescript
import { Component } from '@angular/core';
import { SearchFieldComponent } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SearchFieldComponent],
  template: `
    <ta-search-field
      [input]="searchInput"
      [isOpen]="true"
      [placeholder]="'Search...'"
      (valueCompleted)="onSearchComplete($event)" />
  `
})
export class ExampleComponent {
  searchInput = new InputTextBox({
    placeholder: 'Type to search'
  });

  onSearchComplete(value: string) {
    console.log('Search completed with:', value);
    // Perform search operation
  }
}
```

### WYSIWYG Editor

Rich text WYSIWYG editor for formatted content.

```typescript
import { Component } from '@angular/core';
import { WysiswygComponent } from '@ta/form-input';
import { InputWysiswyg } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [WysiswygComponent],
  template: `
    <ta-input-wysiswyg [input]="contentInput" />
    <ta-input-wysiswyg [input]="articleInput" />
  `
})
export class ExampleComponent {
  contentInput = new InputWysiswyg({
    label: 'Content',
    placeholder: 'Write your content here...'
  });

  articleInput = new InputWysiswyg({
    label: 'Article',
    placeholder: 'Write your article...'
  });
}
```

### File Upload

File upload component with drag-and-drop, progress tracking, and preview.

```typescript
import { Component } from '@angular/core';
import { UploadComponent } from '@ta/form-input';
import { InputUpload } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [UploadComponent],
  template: `
    <ta-input-upload
      [input]="documentInput"
      (uploadStatusChanged)="onUploadStatusChanged($event)" />
  `
})
export class ExampleComponent {
  documentInput = new InputUpload({
    label: 'Upload Documents',
    multiple: true,
    acceptedTypes: ['application/pdf', 'application/msword'],
    confirmButton: true
  });

  onUploadStatusChanged(allComplete: boolean) {
    console.log('Upload status:', allComplete ? 'Complete' : 'In progress');
  }
}
```

### Image Upload

Single image display component.

```typescript
import { Component } from '@angular/core';
import { InputImageComponent } from '@ta/form-input';
import { InputImages } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [InputImageComponent],
  template: `
    <ta-input-image [input]="profilePictureInput" />
  `
})
export class ExampleComponent {
  profilePictureInput = new InputImages({
    label: 'Profile Picture',
    value: []
  });
}
```

### Multiple Images Upload

Multiple images upload and management with preview.

```typescript
import { Component } from '@angular/core';
import { InputImagesComponent } from '@ta/form-input';
import { InputImages } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [InputImagesComponent],
  template: `
    <ta-input-images [input]="galleryInput" />
  `
})
export class ExampleComponent {
  galleryInput = new InputImages({
    label: 'Product Gallery',
    placeholder: 'Upload product images',
    value: []
  });
}
```

### Logo Upload

Specialized logo upload component with preview and removal.

```typescript
import { Component } from '@angular/core';
import { InputLogoComponent } from '@ta/form-input';
import { InputLogo } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [InputLogoComponent],
  template: `
    <ta-input-logo [input]="companyLogoInput" />
  `
})
export class ExampleComponent {
  companyLogoInput = new InputLogo({
    label: 'Company Logo',
    value: ''
  });
}
```

### Schema Input

Schema-based file input with modal selection.

```typescript
import { Component } from '@angular/core';
import { InputSchemaComponent } from '@ta/form-input';
import { InputSchema } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [InputSchemaComponent],
  template: `
    <ta-input-schema [input]="schemaInput" />
  `
})
export class ExampleComponent {
  schemaInput = new InputSchema({
    label: 'Schema',
    placeholder: 'Select schema file',
    update: async (files) => {
      // Process and return updated files
      return files;
    }
  });
}
```

### Choices Input

Advanced multi-select component with search, filtering, and async data loading.

```typescript
import { Component } from '@angular/core';
import { InputChoicesComponent } from '@ta/form-input';
import { InputChoices } from '@ta/form-model';
import { of } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [InputChoicesComponent],
  template: `
    <ta-input-choices [input]="categoriesInput" />
    <ta-input-choices [input]="tagsInput" />
  `
})
export class ExampleComponent {
  // Simple choices
  categoriesInput = new InputChoices({
    label: 'Categories',
    multiple: true,
    options$: of([
      { id: '1', name: 'Technology', data: {} },
      { id: '2', name: 'Science', data: {} },
      { id: '3', name: 'Arts', data: {} }
    ])
  });

  // Advanced search with async loading
  tagsInput = new InputChoices({
    label: 'Tags',
    multiple: true,
    nullable: true,
    advancedSearch$: (searchTerm?: string) => {
      // Return observable of filtered options
      return of([
        { id: 'tag1', name: 'JavaScript', data: {} },
        { id: 'tag2', name: 'TypeScript', data: {} }
      ]);
    }
  });
}
```

### Culture Selector

Language/culture selection dropdown.

```typescript
import { Component } from '@angular/core';
import { CultureComponent } from '@ta/form-input';
import { InputCulture } from '@ta/form-model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CultureComponent],
  template: `
    <ta-input-culture [input]="languageInput" />
  `
})
export class ExampleComponent {
  languageInput = new InputCulture({
    label: 'Language',
    options$: new BehaviorSubject([
      { id: 'en', name: 'English' },
      { id: 'fr', name: 'Français' },
      { id: 'nl', name: 'Nederlands' },
      { id: 'de', name: 'Deutsch' }
    ])
  });
}
```

### Component Input

Custom component selector with modal interface.

```typescript
import { Component } from '@angular/core';
import { ComponentInputComponent } from '@ta/form-input';
import { InputComponent } from '@ta/form-model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ComponentInputComponent],
  template: `
    <ta-input-component [input]="componentInput" />
  `
})
export class ExampleComponent {
  componentInput = new InputComponent({
    label: 'Select Component',
    selectedValue$: new Subject<string>()
  });

  ngOnInit() {
    this.componentInput.selectedValue$.subscribe(value => {
      console.log('Selected component:', value);
    });
  }
}
```

### Label

Read-only label component for displaying static text.

```typescript
import { Component } from '@angular/core';
import { LabelComponent } from '@ta/form-input';
import { InputLabel } from '@ta/form-model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [LabelComponent],
  template: `
    <ta-input-label [input]="infoLabel" />
    <ta-input-label [input]="warningLabel" />
  `
})
export class ExampleComponent {
  infoLabel = new InputLabel({
    label: 'Important Information',
    value: 'This is read-only information displayed to the user.'
  });

  warningLabel = new InputLabel({
    label: 'Warning',
    value: 'Please review the terms before proceeding.'
  });
}
```

## Component Architecture

All input components follow a consistent architecture:

### Base Component

All components extend `TaAbstractInputComponent<C extends InputBase<any>, V = unknown>`:

```typescript
export abstract class TaAbstractInputComponent<C extends InputBase<any>, V = unknown>
  extends TaBaseComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() input!: C;              // Input configuration
  @Input() matcher!: ErrorStateMatcher;  // Error state matcher
  @Input() standalone = false;      // Standalone mode
  @Input() onFocus!: Observable<void>;   // Focus trigger
  @Output() valueChanged = new EventEmitter<V>();  // Value change event

  // Lifecycle methods and common functionality
}
```

### Input Models

Each component uses a specific input model from `@ta/form-model`:

- `InputTextBox` - Text box configuration
- `InputDropdown` - Dropdown configuration
- `InputCheckBox` - Checkbox configuration
- `InputRadio` - Radio configuration
- `InputDatePicker` - Date picker configuration
- And more...

### Common Properties

All input models share common properties:

```typescript
{
  label?: string;           // Input label
  placeholder?: string;     // Placeholder text
  required?: boolean;       // Required validation
  disabled?: boolean;       // Disabled state
  value?: any;             // Current value
  formControl?: FormControl; // Reactive form control
  validators?: ValidatorFn[]; // Validators
}
```

### Value Change Detection

All components emit `valueChanged` events and expose `changeValue$` observables:

```typescript
// Subscribe to value changes
this.input.changeValue$.subscribe(value => {
  console.log('Value changed:', value);
});

// Or use the output event
<ta-input-textbox
  [input]="nameInput"
  (valueChanged)="onNameChanged($event)" />
```

## Dependencies

This library integrates with multiple Techatome packages:

### Core Dependencies
- `@ta/form-model` - Input model definitions
- `@ta/utils` - Utility functions and directives
- `@ta/translation` - Internationalization support
- `@ta/ui` - UI components and layouts
- `@ta/icons` - Icon components
- `@ta/styles` - Styling system

### Specialized Dependencies
- `@ta/wysiswyg` - WYSIWYG editor
- `@ta/files-basic` - File management
- `@ta/services` - Document and API services
- `@ta/menu` - Menu components
- `@ta/notification` - Notification system

### Third-Party Dependencies
- `@angular/material` - Material Design components
- `@angular/flex-layout` - Flexbox layout
- `ngx-material-timepicker` - Time picker component
- `intl-tel-input` - International phone input
- `libphonenumber-js` - Phone number parsing
- `luxon` - Date/time manipulation
- `angular-star-rating` - Star rating component

## License

MIT

---

**Note**: This package is part of the Techatome Molecules monorepo. For more information about the overall project architecture and development workflow, please refer to the main repository documentation.

For issues, feature requests, or contributions, please visit the [Techatome Molecules repository](https://github.com/pikadjou/techatome-molecules).
