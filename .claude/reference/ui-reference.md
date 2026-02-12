# @ta/ui - Complete Component Reference

## Basic UI Components

### ta-button
```html
<ta-button [type]="'primary'" [size]="'medium'" [icon]="'save'" [state]="'classic'" (action)="onClick()">
  Label
</ta-button>
```
Inputs: `state: TaState`, `type: 'primary'|'secondary'|'tertiary'|'danger'`, `size: 'small'|'medium'|'large'`, `icon: string|null`, `options: { class?, circular?, border? }`, `stopPropagationActivation: boolean`

### ta-action-button
```html
<ta-action-button [actions]="actionList"></ta-action-button>
```
Input: `actions: ActionButtonData[]` (array of { icon, label, callback })

### ta-dual-button
```html
<ta-dual-button [first]="{ icon, label, callback }" [second]="{ icon, label, callback }" [type]="'primary'"></ta-dual-button>
```

### ta-button-tool
```html
<ta-button-tool [icon]="'edit'" [size]="'sm'" [state]="'classic'" (action)="onTool()"></ta-button-tool>
```

### ta-badge
```html
<ta-badge [value]="'Status'" [type]="'success'" [icon]="'check'"></ta-badge>
```
Types: `danger`, `warning`, `success`, `primary`, `secondary`, `info`, `purple`, `orange`

### ta-label
```html
<ta-label [size]="'sm'" [type]="'success'">Label text</ta-label>
```

### ta-text
```html
<ta-text [size]="'md'" [isBold]="true" [color]="'primary'">Content</ta-text>
```

### ta-title
```html
<ta-title [level]="2" [isBold]="true" [icon]="'settings'">Section Title</ta-title>
```
Level: 1-6 (maps to h1-h6)

### ta-link
```html
<ta-link [underline]="true" [bold]="false" [icon]="'arrow_forward'" (action)="onLink()">
  Click here
</ta-link>
```

### ta-banner
```html
<ta-banner [message]="'ui.banner.message'"></ta-banner>
```

## Display Components

### ta-boolean-icon
```html
<ta-boolean-icon [value]="true" [size]="'md'"></ta-boolean-icon>
```
Shows check (true), cancel (false), or "not communicated" (null)

### ta-civility
```html
<ta-civility [civility]="user.civility"></ta-civility>
```

### ta-contact-information
```html
<ta-contact-information [value]="'john@email.com'" [icon]="'email'">
  <div>Extra content</div>
</ta-contact-information>
```

### ta-address
```html
<ta-address [address]="{ street, number, city, zipCode, country }"></ta-address>
```

### ta-duration
```html
<ta-duration [startDate]="start" [endDate]="end"></ta-duration>
```
Displays years/months/days/hours

### ta-time-ago
```html
<ta-time-ago [date]="dateValue"></ta-time-ago>
```

### ta-rating
```html
<ta-rating [value]="3.5" [max]="5" [readonly]="true" [size]="24" (ratingChange)="onRate($event)"></ta-rating>
```

### ta-progress
```html
<ta-progress [value]="75" [size]="'md'" [type]="'success'"></ta-progress>
```

### ta-progress-circle
Circle progress indicator

### ta-progress-bar-data
Progress bar with data labels

### ta-user-logo
User avatar display

### ta-trigram
```html
<ta-trigram [name]="'John Doe'"></ta-trigram>
```
Shows 3-letter initials

### ta-users-list
```html
<ta-users-list [users]="userArray"></ta-users-list>
```

### ta-criticity
```html
<ta-criticity [criticity]="CriticityStatus.P1"></ta-criticity>
```
Maps: P1→danger, P2→warning, P3→success

### ta-culture
```html
<ta-culture [cultures]="[Culture.FR_FR, Culture.EN_EN]"></ta-culture>
```

### ta-expandable-text
```html
<ta-expandable-text [height]="100">Long text content...</ta-expandable-text>
```

### ta-expansion-panel
```html
<ta-expansion-panel [templates]="[{ title: 'Section', content: templateRef }]"></ta-expansion-panel>
```

### ta-megaoctet - File size display
### ta-new - "New" badge indicator
### ta-bullet - Colored dot
### ta-wrapped-icon - Icon with wrapper
### ta-benefit-item - Benefit with icon (check/warning/error)
### ta-notification-badge - Badge with count
### ta-picture-info-message - Message with picture/icon
### ta-typed-message - Message with type styling
### ta-toast - Notification toast card

## Card Module

### ta-card
```html
<ta-card [highlight]="false" [shadow]="true" [fullHeight]="false" [directionCard]="'vertical'">
  <ta-card-image>
    <img src="image.jpg" />
  </ta-card-image>
  <ta-card-header>
    <ta-card-tag>Tag</ta-card-tag>
    <ta-card-title>Card Title</ta-card-title>
    <ta-card-subtitle>Subtitle</ta-card-subtitle>
  </ta-card-header>
  <ta-card-content>Content here</ta-card-content>
  <ta-card-cta>
    <ta-button (action)="onCta()">Action</ta-button>
  </ta-card-cta>
</ta-card>
```

### ta-card-dashboard - Dashboard variant card

## Layout Module

### ta-layout-page (main page layout)
```html
<ta-layout-page>
  <ta-layout-header>Header content</ta-layout-header>
  <ta-layout-title>Page Title</ta-layout-title>
  <ta-layout-nav>Navigation</ta-layout-nav>
  <!-- Main content as default slot -->
</ta-layout-page>
```

### ta-layout-side (side panel with content + CTA)
```html
<ta-layout-side>
  <ta-layout-side-content>Main content</ta-layout-side-content>
  <ta-layout-side-cta>
    <ta-button (action)="save()">Save</ta-button>
  </ta-layout-side-cta>
</ta-layout-side>
```

### Other Layouts
- `ta-layout-header` - Page header
- `ta-layout-header-default` - Default header styling
- `ta-layout-header-logo` - Header with logo
- `ta-layout-title` - Title section
- `ta-layout-content` - Main content wrapper
- `ta-layout-nav` - Navigation bar
- `ta-layout-panel` - Side panel
- `ta-layout-full-panel` - Full-width panel
- `ta-layout-flex` - Flexbox layout utility
- `ta-layout-modal` - Modal layout
- `ta-layout-modal-container` - Modal content container
- `ta-layout-with-bottom-nav` - Layout with bottom nav
- `ta-layout-with-panel` - Layout with side panel
- `ta-not-found` - 404 error page

## Container Module

### ta-loader
```html
<ta-loader [isLoading]="requestState.isLoading()" [text]="'Loading...'" [size]="'md'">
  <div>Content shown when not loading</div>
</ta-loader>
```

### ta-empty
```html
<ta-empty [isEmpty]="items.length === 0">
  <div>Content shown when not empty</div>
</ta-empty>
```

### ta-error
```html
<ta-error [message]="'Error occurred'" [code]="500">
  <div>Content shown when no error</div>
</ta-error>
```

### ta-container-validation / ta-modal-validation
Validation display components

### ta-swiper-light
Lightweight carousel component

## List Module

```html
<ta-list-container>
  <ta-list-element>
    <ta-list-title>Item Title</ta-list-title>
    <ta-list-sub-title>Subtitle</ta-list-sub-title>
    <ta-list-tag>Tag</ta-list-tag>
    <ta-list-extra-information>Extra info</ta-list-extra-information>
  </ta-list-element>
</ta-list-container>
```

## Overlay Panel Module

### ta-overlay-panel
```html
<ta-overlay-panel [panelConfig]="{ matchTriggerWidth: false }" [position]="'default'" (closed)="onClose()">
  <ng-template #panelTrigger>
    <ta-button>Open Panel</ta-button>
  </ng-template>
  <ng-template #panelContent>
    <div>Panel content here</div>
  </ng-template>
</ta-overlay-panel>
```
Methods: `open()`, `close()`

## Swiper Module

### ta-swiper
```html
<ta-swiper [slides]="slideData" [slidesPerPage]="3.5" [swipeTemplate]="slideTemplate">
  <ng-template #slideTemplate let-item>
    <ta-card>{{ item.name }}</ta-card>
  </ng-template>
</ta-swiper>
```

## Tree Module

```html
<ta-tree-container>
  <ta-tree-item>
    Item content
    <ta-tree-children>
      <ta-tree-item>Child item</ta-tree-item>
    </ta-tree-children>
  </ta-tree-item>
</ta-tree-container>
```
