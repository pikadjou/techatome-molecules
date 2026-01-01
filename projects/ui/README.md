# @ta/ui

A comprehensive Angular UI component library providing a rich set of reusable, standalone components for building modern web applications. Part of the Techatome Molecules monorepo.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Component Categories](#component-categories)
  - [Basic UI Components](#basic-ui-components)
  - [Buttons](#buttons)
  - [Cards](#cards)
  - [Layout Components](#layout-components)
  - [List Components](#list-components)
  - [Container Components](#container-components)
  - [Display Components](#display-components)
  - [Data Visualization](#data-visualization)
  - [Interactive Components](#interactive-components)
  - [Navigation Components](#navigation-components)
  - [Specialized Components](#specialized-components)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install @ta/ui
# or
yarn add @ta/ui
```

### Peer Dependencies

This library requires the following peer dependencies:

```json
{
  "@angular/animations": "^18.2.13",
  "@angular/cdk": "^18.2.13",
  "@angular/common": "^18.2.13",
  "@angular/core": "^18.2.13",
  "@angular/material": "^18.2.13"
}
```

## Getting Started

All components in this library are standalone, so you can import them directly in your components or modules.

### Basic Import

```typescript
import { Component } from '@angular/core';
import { ButtonComponent, BadgeComponent, CardComponent } from '@ta/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent, BadgeComponent, CardComponent],
  template: `
    <ta-button type="primary" (action)="handleClick()">
      Click me
    </ta-button>
  `
})
export class ExampleComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

### Module Import (Legacy)

If you're using NgModules:

```typescript
import { NgModule } from '@angular/core';
import { UiModule } from '@ta/ui';

@NgModule({
  imports: [UiModule],
  // ...
})
export class AppModule { }
```

## Component Categories

### Basic UI Components

#### Badge

Display small status or count indicators.

```typescript
import { BadgeComponent } from '@ta/ui';
```

**Usage:**

```html
<!-- Basic badge -->
<ta-badge value="New" type="primary"></ta-badge>

<!-- Badge with icon -->
<ta-badge value="Success" type="success" icon="check"></ta-badge>

<!-- Different badge types -->
<ta-badge value="Error" type="danger"></ta-badge>
<ta-badge value="Warning" type="warning"></ta-badge>
<ta-badge value="Info" type="info"></ta-badge>
```

**Inputs:**
- `value: string` - Text to display in badge (required)
- `type: BadgeType` - Badge style (default: 'primary')
  - Options: 'danger' | 'warning' | 'success' | 'primary' | 'secondary' | 'info' | 'purple' | 'orange'
- `icon?: string` - Optional icon to display
- `showClickOption: boolean` - Deprecated, enables click interaction

**Outputs:**
- `clickAction` - Emitted when badge is clicked

---

#### Label

Styled label component for text display.

```typescript
import { LabelComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-label size="md" type="primary">Important Label</ta-label>
<ta-label size="lg" type="success">Success Message</ta-label>
<ta-label size="sm" type="danger">Error Text</ta-label>
```

**Inputs:**
- `size: TaSizes` - Label size (default: 'md')
  - Options: 'sm' | 'md' | 'lg' | 'xl'
- `type: ColorType` - Label color type (default: 'default')

---

#### Title

Semantic heading component with multiple levels.

```typescript
import { TitleComponent } from '@ta/ui';
```

**Usage:**

```html
<!-- H1 title -->
<ta-title [level]="1">Main Heading</ta-title>

<!-- H2 with theme -->
<ta-title [level]="2" [isTheme]="true">Themed Subheading</ta-title>

<!-- Bold H3 with icon -->
<ta-title [level]="3" [isBold]="true" icon="home">Section Title</ta-title>
```

**Inputs:**
- `level: 1 | 2 | 3 | 4 | 5 | 6` - Heading level (default: 1)
- `isTheme: boolean` - Apply theme styling (default: false)
- `isBold: boolean` - Make text bold (default: false)
- `icon: string` - Optional icon to display

---

#### Text

Generic text display component.

```typescript
import { TextComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-text>Regular text content</ta-text>
```

---

#### Link

Styled link component.

```typescript
import { LinkComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-link>Click here</ta-link>
```

---

### Buttons

#### Button

Primary button component with multiple variants and states.

```typescript
import { ButtonComponent } from '@ta/ui';
```

**Usage:**

```html
<!-- Primary button -->
<ta-button type="primary" (action)="onSubmit()">
  Submit
</ta-button>

<!-- Secondary button with icon -->
<ta-button
  type="secondary"
  icon="save"
  (action)="onSave()">
  Save
</ta-button>

<!-- Circular icon button -->
<ta-button
  type="tertiary"
  icon="edit"
  [options]="{ circular: true }"
  (action)="onEdit()">
</ta-button>

<!-- Disabled state -->
<ta-button
  type="primary"
  state="disabled">
  Loading...
</ta-button>

<!-- Custom styled button -->
<ta-button
  type="primary"
  size="large"
  [options]="{ class: 'my-custom-class', border: true }">
  Custom Button
</ta-button>
```

**Inputs:**
- `state: TaState` - Button state (default: 'classic')
  - Options: 'classic' | 'disabled' | 'loading'
- `type: string` - Button variant (default: 'primary')
  - Options: 'primary' | 'secondary' | 'tertiary' | 'danger'
- `size: string` - Button size (default: 'medium')
  - Options: 'small' | 'medium' | 'large'
- `icon: string | null` - Optional icon name
- `options: object` - Additional configuration
  - `class?: string` - Custom CSS classes
  - `circular?: boolean | 'big' | 'small'` - Make button circular
  - `border?: boolean` - Show/hide border
- `stopPropagationActivation: boolean` - Stop event propagation (default: true)

**Outputs:**
- `action` - Emitted when button is clicked (only in 'classic' state)

---

#### Action Button

Button with predefined action configuration.

```typescript
import { ActionButtonComponent, ActionButtonData } from '@ta/ui';
```

**Usage:**

```html
<ta-action-button [data]="actionData"></ta-action-button>
```

```typescript
actionData: ActionButtonData = {
  label: 'Delete',
  icon: 'delete',
  action: () => this.handleDelete()
};
```

---

#### Dual Button

Button with two action options.

```typescript
import { DualButtonComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-dual-button></ta-dual-button>
```

---

#### Tool Button

Specialized tool button component.

```typescript
import { ToolComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-tool></ta-tool>
```

---

### Cards

#### Card

Flexible card container with multiple configuration options.

```typescript
import { CardComponent } from '@ta/ui';
```

**Usage:**

```html
<!-- Basic card -->
<ta-card>
  <ta-card-header>
    <ta-card-title>Card Title</ta-card-title>
    <ta-card-subtitle>Card subtitle</ta-card-subtitle>
  </ta-card-header>
  <ta-card-content>
    Card content goes here
  </ta-card-content>
</ta-card>

<!-- Clickable card with highlight -->
<ta-card
  [highlight]="true"
  (click)="onCardClick()">
  <ta-card-content>
    Clickable content
  </ta-card-content>
</ta-card>

<!-- Horizontal card without shadow -->
<ta-card
  directionCard="horizontal"
  [shadow]="false">
  <ta-card-image [src]="imageUrl"></ta-card-image>
  <ta-card-content>
    Content next to image
  </ta-card-content>
</ta-card>

<!-- Full height card with tag -->
<ta-card [fullHeight]="true" [isNew]="true">
  <ta-card-tag>Featured</ta-card-tag>
  <ta-card-content>
    Full height content
  </ta-card-content>
  <ta-card-cta>
    <ta-button type="primary">Action</ta-button>
  </ta-card-cta>
</ta-card>
```

**Inputs:**
- `highlight: boolean` - Apply highlight styling (default: false)
- `shadow: boolean` - Show shadow (default: true)
- `fullHeight: boolean` - Make card full height (default: false)
- `noContent: boolean` - Remove default content padding (default: false)
- `directionCard: 'vertical' | 'horizontal' | null` - Card layout direction
- `isNew: boolean` - Show "new" indicator (default: false)

**Outputs:**
- `click` - Emitted when card is clicked

**Sub-components:**
- `CardHeaderComponent` - Card header container
- `CardTitleComponent` - Card title
- `CardSubtitleComponent` - Card subtitle
- `CardContentComponent` - Card content area
- `CardImageComponent` - Card image
- `CardTagComponent` - Card tag/label
- `CardCtaComponent` - Call-to-action container

---

#### Dashboard

Dashboard layout component.

```typescript
import { DashboardComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-dashboard></ta-dashboard>
```

---

#### Toggle Card

Interactive card that can be toggled on/off.

```typescript
import { ToggleCardComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-toggle-card
  title="Enable Feature"
  description="Turn this feature on or off"
  icon="settings"
  [isActive]="featureEnabled"
  (toggle)="onToggle($event)">
</ta-toggle-card>
```

**Inputs:**
- `title: string` - Card title (required)
- `description?: string` - Optional description
- `icon?: string` - Optional icon
- `isActive: boolean` - Current toggle state (default: false)
- `disabled: boolean` - Disable interaction (default: false)

**Outputs:**
- `toggle` - Emits new boolean state when toggled

---

### Layout Components

The layout module provides a complete set of components for building application layouts.

```typescript
import {
  LayoutContentComponent,
  LayoutTitleComponent,
  LayoutFlexComponent,
  LayoutHeaderComponent,
  LayoutSideComponent,
  LayoutNavComponent,
  LayoutPanelComponent,
  LayoutPageComponent,
  LayoutModalComponent
} from '@ta/ui';
```

#### Layout Content

Main content area container.

```html
<ta-layout-content [autoHeight]="true">
  Main content here
</ta-layout-content>
```

**Inputs:**
- `autoHeight: boolean` - Auto adjust height (default: false)

---

#### Layout Header

Application header component.

```html
<ta-layout-header>
  <ta-layout-header-logo [src]="logoUrl"></ta-layout-header-logo>
  <ta-layout-header-default>
    Header content
  </ta-layout-header-default>
</ta-layout-header>
```

---

#### Layout Side

Sidebar container with content and CTA sections.

```html
<ta-layout-side>
  <ta-layout-side-content>
    Sidebar content
  </ta-layout-side-content>
  <ta-layout-side-cta>
    <ta-button type="primary">Action</ta-button>
  </ta-layout-side-cta>
</ta-layout-side>
```

---

#### Layout Page

Full page layout wrapper.

```html
<ta-layout-page>
  <ta-layout-header></ta-layout-header>
  <ta-layout-content>Page content</ta-layout-content>
</ta-layout-page>
```

---

#### Layout Modal

Modal dialog container.

```html
<ta-layout-modal>
  <ta-layout-modal-container>
    Modal content
  </ta-layout-modal-container>
</ta-layout-modal>
```

---

#### Layout with Panel

Layout with side panel.

```html
<ta-layout-with-panel>
  <ta-layout-content>Main content</ta-layout-content>
  <ta-layout-panel>Panel content</ta-layout-panel>
</ta-layout-with-panel>
```

---

#### Layout with Bottom Nav

Layout with bottom navigation.

```html
<ta-layout-with-bottom-nav>
  Content with bottom navigation
</ta-layout-with-bottom-nav>
```

---

#### Layout Error Components

Error and not-found pages.

```html
<ta-not-found></ta-not-found>
```

---

### List Components

Build structured lists with headers, titles, and elements.

```typescript
import {
  ListContainerComponent,
  ListElementComponent,
  ListTitleComponent,
  ListSubTitleComponent,
  ListTagComponent,
  ListExtraInformationComponent
} from '@ta/ui';
```

**Usage:**

```html
<ta-list-container>
  <ta-list-element>
    <ta-list-title>Item Title</ta-list-title>
    <ta-list-sub-title>Item subtitle</ta-list-sub-title>
    <ta-list-tag>New</ta-list-tag>
    <ta-list-extra-information>
      Additional info
    </ta-list-extra-information>
  </ta-list-element>

  <ta-list-element>
    <ta-list-title>Another Item</ta-list-title>
  </ta-list-element>
</ta-list-container>
```

---

### Container Components

Utility containers for common UI patterns.

```typescript
import {
  LoaderComponent,
  EmptyComponent,
  ErrorComponent,
  SwiperLightComponent,
  ModalValidationComponent,
  ContainerValidationComponent
} from '@ta/ui';
```

#### Loader

Loading spinner with optional skeleton placeholders.

```html
<!-- Basic loader -->
<ta-loader [isLoading]="true" size="lg"></ta-loader>

<!-- Loader with custom text -->
<ta-loader
  [isLoading]="loading"
  text="Loading data...">
</ta-loader>

<!-- Loader with skeleton -->
<ta-loader
  [isLoading]="true"
  [skeleton]="skeletonConfig">
  <div>Content shown when loaded</div>
</ta-loader>
```

**Inputs:**
- `isLoading: boolean` - Show loader (default: false)
- `skeleton: PlaceholderConfig | null` - Skeleton configuration
- `size: TaSizes` - Spinner size (default: 'lg')
- `text: string` - Loading message

---

#### Empty

Empty state component.

```html
<ta-empty></ta-empty>
```

---

#### Error

Error state component.

```html
<ta-error></ta-error>
```

---

### Display Components

#### User Logo

Display user avatar with fallback to initials.

```typescript
import { UserLogoComponent, UserLogoData } from '@ta/ui';
```

**Usage:**

```html
<ta-user-logo
  [user]="userData"
  size="lg"
  defaultType="trigram">
</ta-user-logo>
```

```typescript
userData: UserLogoData = {
  firstname: 'John',
  lastname: 'Doe',
  picture: 'path/to/image.jpg'
};
```

**Inputs:**
- `user?: UserLogoData` - User data object
  - `firstname: string`
  - `lastname: string`
  - `picture?: string`
- `size?: TaSizes` - Avatar size (default: 'lg')
- `forcedSize?: number` - Override size with pixels
- `defaultType: 'font' | 'trigram'` - Fallback type when no picture (default: 'font')

---

#### Trigram

Display user initials.

```typescript
import { TrigramComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-trigram></ta-trigram>
```

---

#### Logo

Application logo component.

```typescript
import { LogoComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-logo></ta-logo>
```

---

#### File Image

Display file images with fallback.

```typescript
import { FileImageComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-file-image></ta-file-image>
```

---

#### Wrapped Icon

Icon with wrapper container.

```typescript
import { WrappedIconComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-wrapped-icon></ta-wrapped-icon>
```

---

### Data Visualization

#### Progress Bar

Linear progress indicator.

```typescript
import { ProgressBarComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-progress-bar [current]="75" [max]="100"></ta-progress-bar>
```

**Inputs:**
- `current: number` - Current progress value (required)
- `max: number` - Maximum value (required)

---

#### Progress Components

Additional progress indicators.

```typescript
import {
  ProgressComponent,
  ProgressCircleComponent,
  ProgressBarDataComponent
} from '@ta/ui';
```

**Usage:**

```html
<ta-progress></ta-progress>
<ta-progress-circle></ta-progress-circle>
<ta-progress-bar-data></ta-progress-bar-data>
```

---

#### Rating

Star rating component with interactive or read-only mode.

```typescript
import { RatingComponent } from '@ta/ui';
```

**Usage:**

```html
<!-- Read-only rating -->
<ta-rating
  [value]="4.5"
  [max]="5"
  [readonly]="true">
</ta-rating>

<!-- Interactive rating -->
<ta-rating
  [value]="rating"
  [max]="5"
  [readonly]="false"
  (ratingChange)="onRatingChange($event)">
</ta-rating>

<!-- Custom colors and size -->
<ta-rating
  [value]="3"
  [size]="32"
  color="#ff9800"
  emptyColor="#e0e0e0">
</ta-rating>
```

**Inputs:**
- `value: number` - Current rating (supports decimals, default: 0)
- `max: number` - Maximum stars (default: 5)
- `size: number` - Star size in pixels (default: 24)
- `color: string` - Filled star color (default: '#fbbf24')
- `emptyColor: string` - Empty star color (default: '#d1d5db')
- `readonly: boolean` - Read-only mode (default: false)
- `showHover: boolean` - Show hover effect (default: true)

**Outputs:**
- `ratingChange` - Emits new rating when clicked
- `hoverChange` - Emits rating value on hover

---

### Interactive Components

#### Expansion Panel

Expandable accordion panels.

```typescript
import { TaExpansionPanelComponent, ExpansionPanelInput } from '@ta/ui';
```

**Usage:**

```html
<ta-expansion-panel [templates]="panels"></ta-expansion-panel>
```

```typescript
@Component({
  template: `
    <ng-template #titleTemplate>Panel Title</ng-template>
    <ng-template #contentTemplate>Panel Content</ng-template>
  `
})
export class MyComponent {
  @ViewChild('titleTemplate') titleTemplate!: TemplateRef<any>;
  @ViewChild('contentTemplate') contentTemplate!: TemplateRef<any>;

  panels: ExpansionPanelInput[] = [];

  ngAfterViewInit() {
    this.panels = [{
      title: this.titleTemplate,
      content: this.contentTemplate
    }];
  }
}
```

**Inputs:**
- `templates: ExpansionPanelInput[]` - Array of panel configurations
  - `title: TemplateRef<any>` - Title template
  - `content: TemplateRef<any>` - Content template
  - `context?: object` - Optional context data

---

#### Expandable Text

Text that can be expanded/collapsed.

```typescript
import { ExpandableTextComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-expandable-text></ta-expandable-text>
```

---

#### Toast

Toast notification component.

```typescript
import { ToastComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-toast [code]="notificationCode">
  Notification message
</ta-toast>
```

**Inputs:**
- `code: ENotificationCode` - Notification type

---

#### Banner

Banner message component.

```typescript
import { BannerComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-banner></ta-banner>
```

---

### Navigation Components

#### Tree Components

Hierarchical tree view components.

```typescript
import {
  TreeContainerComponent,
  TreeItemComponent,
  TreeChildrenComponent
} from '@ta/ui';
```

**Usage:**

```html
<ta-tree-container>
  <ta-tree-item>
    Item 1
    <ta-tree-children>
      <ta-tree-item>Child 1.1</ta-tree-item>
      <ta-tree-item>Child 1.2</ta-tree-item>
    </ta-tree-children>
  </ta-tree-item>
  <ta-tree-item>Item 2</ta-tree-item>
</ta-tree-container>
```

---

#### Swiper

Swiper/carousel component.

```typescript
import { SwiperComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-swiper></ta-swiper>
```

---

#### Overlay Panel

Overlay panel service and components.

```typescript
import {
  OverlayPanelComponent,
  DefaultPanelComponent,
  OverlayService
} from '@ta/ui';
```

**Usage:**

```html
<ta-overlay-panel></ta-overlay-panel>
<ta-default-panel></ta-default-panel>
```

---

### Specialized Components

#### Notification Badge

Badge with notification counter.

```typescript
import {
  NotificationBadgeContainerComponent,
  NotificationBadgeComponent
} from '@ta/ui';
```

**Usage:**

```html
<ta-notification-badge-container>
  <ta-notification-badge></ta-notification-badge>
</ta-notification-badge-container>
```

---

#### Users List

Display list of users.

```typescript
import { UsersListComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-users-list></ta-users-list>
```

---

#### Address

Address display component.

```typescript
import { AddressComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-address></ta-address>
```

---

#### Contact Information

Contact info display.

```typescript
import { ContactInformationComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-contact-information></ta-contact-information>
```

---

#### Inline Profile Data

Inline profile information display.

```typescript
import { InlineProfileDataComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-inline-profile-data></ta-inline-profile-data>
```

---

#### Civility

Civility/title selector.

```typescript
import { CivilityComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-civility></ta-civility>
```

---

#### Culture

Culture/language selector.

```typescript
import { CultureComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-culture></ta-culture>
```

---

#### Departments

Department-related components.

```typescript
import {
  DepartmentsComponent,
  DepartmentIconListComponent,
  ProfessionsComponent
} from '@ta/ui';
```

**Usage:**

```html
<ta-departments></ta-departments>
<ta-department-icon-list></ta-department-icon-list>
<ta-professions></ta-professions>
```

---

#### Duration

Duration display component.

```typescript
import { DurationComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-duration></ta-duration>
```

---

#### Time Ago

Relative time display.

```typescript
import { TimeAgoComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-time-ago></ta-time-ago>
```

---

#### Hour Date Line

Date and time display.

```typescript
import { HourDateLineComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-hour-date-line></ta-hour-date-line>
```

---

#### Criticity

Criticality indicator.

```typescript
import { CriticityComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-criticity></ta-criticity>
```

---

#### Boolean Icon

Icon representation of boolean values.

```typescript
import { BooleanIconComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-boolean-icon></ta-boolean-icon>
```

---

#### Bullet

Bullet point component.

```typescript
import { BulletComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-bullet></ta-bullet>
```

---

#### Megaoctet

File size display.

```typescript
import { MegaoctetComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-megaoctet></ta-megaoctet>
```

---

#### New Badge

"New" indicator badge.

```typescript
import { NewComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-new></ta-new>
```

---

#### Hello User

User greeting component.

```typescript
import { HelloUserComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-hello-user></ta-hello-user>
```

---

#### Picture Info Message

Message with picture information.

```typescript
import { PictureInfoMessageComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-picture-info-message></ta-picture-info-message>
```

---

#### Typed Message

Animated typing message effect.

```typescript
import { TypedMessageComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-typed-message></ta-typed-message>
```

---

#### Benefit Item

Benefit/feature display item.

```typescript
import { BenefitItemComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-benefit-item></ta-benefit-item>
```

---

#### PWA

Progressive Web App component.

```typescript
import { PwaComponent } from '@ta/ui';
```

**Usage:**

```html
<ta-pwa></ta-pwa>
```

---

#### Segmented Tab Items

Segmented tab navigation.

```typescript
import { SegmentedTabItem } from '@ta/ui';
```

---

## Dependencies

This library depends on:

- `@ta/capacitor` - Capacitor integration utilities
- `@ta/icons` - Icon component library
- `@ta/server` - Server communication utilities
- `@ta/services` - Shared services
- `@ta/styles` - Shared styles and theming
- `@ta/utils` - Utility functions and directives
- `@ta/translation` - Internationalization support
- `storage-manager-js` - Local storage management
- `swiper` - Touch slider functionality

## Contributing

This library is part of the Techatome Molecules monorepo. For contribution guidelines, please refer to the main repository documentation.

### Development

```bash
# Build the library
yarn build

# Run tests
ng test @ta/ui

# Start Storybook for component documentation
yarn storybook
```

## License

MIT

---

For more information about the Techatome Molecules project, visit the [main repository](https://github.com/pikadjou/techatome-molecules).
