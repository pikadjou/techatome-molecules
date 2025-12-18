# @ta/ui

**Purpose:** Comprehensive UI component library with layouts, cards, and display components

## Exports

### Components - Basic
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| BadgeComponent | `ta-badge` | Badge display | text, color |
| BooleanIconComponent | `ta-boolean-icon` | Boolean value as icon | value |
| BulletComponent | `ta-bullet` | Bullet point marker | color, size |
| LabelComponent | `ta-label` | Label display | text, style |
| LinkComponent | `ta-link` | Styled link | href, target |
| LogoComponent | `ta-logo` | Logo display | src, alt |
| NewComponent | `ta-new` | "New" indicator badge | N/A |
| TextComponent | `ta-text` | Styled text display | content, variant |
| TitleComponent | `ta-title` | Section title | text, level |
| ToastComponent | `ta-toast` | Toast notification | message, type |

### Components - Buttons
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| ButtonComponent | `ta-button` | Standard button | label, disabled, type |
| ActionButtonComponent | `ta-action-button` | Action button with icon | icon, label, action |
| DualButtonComponent | `ta-dual-button` | Split button | primary, secondary |
| ToolComponent | `ta-tool` | Tool button | icon, tooltip |

### Components - Display
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| AddressComponent | `ta-address` | Address display | address |
| BannerComponent | `ta-banner` | Banner/alert display | message, type |
| BenefitItemComponent | `ta-benefit-item` | Benefit item card | benefit |
| CivilityComponent | `ta-civility` | Civility/title display | civility |
| ContactInformationComponent | `ta-contact-info` | Contact info display | contact |
| CriticityComponent | `ta-criticity` | Criticality indicator | level |
| CultureComponent | `ta-culture` | Culture/language display | culture |
| DurationComponent | `ta-duration` | Duration display | seconds, format |
| FileImageComponent | `ta-file-image` | File thumbnail image | file |
| HelloUserComponent | `ta-hello-user` | User greeting | user |
| HourDateLineComponent | `ta-hour-date-line` | Time and date display | date |
| MegaoctetComponent | `ta-megaoctet` | File size display | bytes |
| PictureInfoMessageComponent | `ta-picture-info` | Picture with info message | picture, message |
| RatingComponent | `ta-rating` | Star rating display | rating, max |
| TimeAgoComponent | `ta-time-ago` | Relative time display | date |
| TrigramComponent | `ta-trigram` | User initials display | name |
| TypedMessageComponent | `ta-typed-message` | Typed text animation | message, speed |
| UserLogoComponent | `ta-user-logo` | User avatar/logo | user |
| UsersListComponent | `ta-users-list` | List of users | users |

### Components - Department
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| DepartmentsComponent | `ta-departments` | Department display | departments |
| DepartmentIconListComponent | `ta-department-icons` | Department icons list | departments |
| ProfessionsComponent | `ta-professions` | Professions display | professions |

### Components - Interactive
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| ExpandableTextComponent | `ta-expandable-text` | Expandable text block | text, maxLength |
| ExpansionPanelComponent | `ta-expansion-panel` | Collapsible panel | title, expanded |
| ToggleCardComponent | `ta-toggle-card` | Toggle card component | title, content |
| PwaComponent | `ta-pwa` | PWA install prompt | N/A |

### Components - Notifications
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| NotificationBadgeContainerComponent | `ta-notification-badge-container` | Notification badge container | count |
| NotificationBadgeComponent | `ta-notification-badge` | Notification badge | count |

### Components - Profile
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| InlineProfileDataComponent | `ta-inline-profile` | Inline profile information | profile |
| UiProfileDisplayComponent | `ta-profile-display` | Profile display component | profile |

### Components - Progress
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| ProgressBarComponent | `ta-progress-bar` | Progress bar | value, max |
| ProgressCircleComponent | `ta-progress-circle` | Circular progress | value, max |
| ProgressBarDataComponent | `ta-progress-bar-data` | Progress bar with data | value, label |

### Components - Tree
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| TreeContainerComponent | `ta-tree-container` | Tree structure container | nodes |
| TreeChildrenComponent | `ta-tree-children` | Tree children nodes | nodes |
| TreeItemComponent | `ta-tree-item` | Individual tree item | node |

### Components - Layout
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| LayoutContentComponent | `ta-layout-content` | Content area | N/A |
| LayoutTitleComponent | `ta-layout-title` | Layout title | title |
| LayoutFlexComponent | `ta-layout-flex` | Flexbox layout | direction, gap |
| LayoutHeaderComponent | `ta-layout-header` | Header layout | N/A |
| LayoutHeaderDefaultComponent | `ta-layout-header-default` | Default header | title |
| LayoutHeaderLogoComponent | `ta-layout-header-logo` | Logo header | logo |
| LayoutSideComponent | `ta-layout-side` | Sidebar layout | position |
| LayoutSideCtaComponent | `ta-layout-side-cta` | Sidebar CTA | N/A |
| LayoutSideContentComponent | `ta-layout-side-content` | Sidebar content | N/A |
| LayoutNavComponent | `ta-layout-nav` | Navigation layout | N/A |
| LayoutPanelComponent | `ta-layout-panel` | Panel layout | N/A |
| LayoutFullPanelComponent | `ta-layout-full-panel` | Full-width panel | N/A |
| LayoutWithBottomNavComponent | `ta-layout-bottom-nav` | Layout with bottom navigation | N/A |
| LayoutWithPanelComponent | `ta-layout-with-panel` | Layout with side panel | N/A |
| LayoutPageComponent | `ta-layout-page` | Full page layout | N/A |
| LayoutModalComponent | `ta-layout-modal` | Modal layout | N/A |
| LayoutModalContainerComponent | `ta-layout-modal-container` | Modal container | N/A |
| NotFoundComponent | `ta-not-found` | 404 error page | N/A |

### Components - Card
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| CardComponent | `ta-card` | Card container | elevation |
| DashboardComponent | `ta-dashboard` | Dashboard card grid | cards |
| CardContentComponent | `ta-card-content` | Card content area | N/A |
| CardCtaComponent | `ta-card-cta` | Card call-to-action | N/A |
| CardImageComponent | `ta-card-image` | Card image | src, alt |
| CardHeaderComponent | `ta-card-header` | Card header | N/A |
| CardSubtitleComponent | `ta-card-subtitle` | Card subtitle | text |
| CardTagComponent | `ta-card-tag` | Card tag | label |
| CardTitleComponent | `ta-card-title` | Card title | text |

### Components - List
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| ListElementComponent | `ta-list-element` | List item element | item |
| ListContainerComponent | `ta-list-container` | List container | items |
| ListSubTitleComponent | `ta-list-subtitle` | List item subtitle | text |
| ListTagComponent | `ta-list-tag` | List item tag | label |
| ListTitleComponent | `ta-list-title` | List item title | text |
| ListExtraInformationComponent | `ta-list-extra-info` | List item extra info | info |

### Components - Container
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| ContainerValidationComponent | `ta-container-validation` | Validation CTA container | onValidate, onCancel |
| ModalValidationComponent | `ta-modal-validation` | Validation modal | onValidate, onCancel |
| EmptyComponent | `ta-empty` | Empty state display | message, icon |
| ErrorComponent | `ta-error` | Error state display | error |
| LoaderComponent | `ta-loader` | Loading indicator | size |
| SwiperLightComponent | `ta-swiper-light` | Light swiper component | items |

### Components - Swiper
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| SwiperComponent | `ta-swiper` | Swiper carousel | slides, config |

### Components - Overlay
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| DefaultPanelComponent | `ta-default-panel` | Default overlay panel | content |
| OverlayPanelComponent | `ta-overlay-panel` | Custom overlay panel | config |

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| OverlayService | Overlay management | open(), close(), toggle() |

### Models/DTOs
| Name | Purpose |
|------|---------|
| SegmentedTabItem | Segmented tab item model |

## Usage Example
```typescript
import { CardComponent, ButtonComponent } from '@ta/ui';

@Component({
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-title text="My Card"></ta-card-title>
      </ta-card-header>
      <ta-card-content>
        <p>Card content here</p>
      </ta-card-content>
      <ta-card-cta>
        <ta-button label="Action" (click)="handleClick()"></ta-button>
      </ta-card-cta>
    </ta-card>
  `
})
export class MyComponent {
  handleClick() {
    console.log('Button clicked');
  }
}
```

## Dependencies
- @ta/icons
- @ta/styles
- @angular/material
- @angular/common
- swiper
