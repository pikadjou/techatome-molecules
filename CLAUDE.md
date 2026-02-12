# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Techatome Molecules** (internally called "Taelot"), an Angular monorepo that follows a micro-library architecture pattern. The project is managed using Lerna and Angular CLI, containing 20+ specialized Angular libraries that can be used independently or together to build applications.

The repository uses the `@ta/` namespace for all published packages and follows a structured approach to component library development with Storybook for documentation and testing.

## Custom Slash Commands

This project has dedicated slash commands for accelerating development:

| Command | Description |
|---------|-------------|
| `/ta-component` | Create a new Angular component following all @ta conventions |
| `/ta-form-input` | Create a new form input type with abstract input pattern |
| `/ta-service` | Create a new injectable service |
| `/ta-story` | Create a Storybook story for a component |
| `/ta-build` | Smart dependency-aware build |
| `/ta-graphql` | Create GraphQL queries/mutations with @ta/server |
| `/ta-library` | Scaffold a new @ta/ library |
| `/ta-translate` | Manage i18n translations |
| `/ta-model` | Create models, interfaces, enums |
| `/ta-doc` | Generate component/library documentation |

## Common Development Commands

### Dependencies & Setup

```bash
yarn install                    # Install all dependencies
yarn checkfiles                 # Verify installed dependencies
```

### Development & Building

```bash
yarn start                      # Start main application dev server
yarn start-local                # Start with local environment config
yarn build                     # Build all libraries with dependencies using Lerna
yarn watch                     # Watch for changes and rebuild + start dev server
```

### Library Development

```bash
lerna run build --include-dependencies    # Build all libraries with their dependencies
ng build @ta/[LibName]                    # Build specific library
```

### Quality Assurance

```bash
yarn lint                       # Run ESLint with auto-fix
yarn prettier                   # Format all files with Prettier
ng test                        # Run Karma tests for main app
ng test @ta/[LibName]          # Run tests for specific library
```

### Documentation & Stories

```bash
yarn storybook                  # Start Storybook dev server on port 6006
yarn build-storybook           # Build Storybook for production
```

### Publishing (Lerna-managed)

```bash
yarn version                    # Bump versions for all packages
yarn publish                    # Publish packages to npm registry
```

### Cleanup

```bash
yarn clean                      # Remove all dist folders, node_modules, and lock files
```

## Architecture Overview

### Multi-Library Structure

The project is organized into specialized libraries under the `projects/` directory:

- **Core Libraries**: `@ta/core`, `@ta/server`, `@ta/services`, `@ta/utils`
- **UI Components**: `@ta/ui`, `@ta/icons`, `@ta/styles`, `@ta/menu`, `@ta/notification`
- **Form System**: `@ta/form-basic`, `@ta/form-input`, `@ta/form-model` (specialized form handling)
- **Feature Libraries**: `@ta/calendar`, `@ta/charts`, `@ta/wysiswyg`, `@ta/translation`, `@ta/features`
- **File Management**: `@ta/files-basic`, `@ta/files-extended`
- **Configuration**: `@ta/eslint-config`, `@ta/prettier-config`
- **Integration**: `@ta/capacitor`, `@ta/cms`, `@ta/user`

### Dependency Graph (build order)

```
Layer 0: @ta/styles, @ta/eslint-config, @ta/prettier-config
Layer 1: @ta/icons → @ta/utils
Layer 2: @ta/notification, @ta/translation, @ta/form-model, @ta/server
Layer 3: @ta/ui, @ta/services, @ta/menu
Layer 4: @ta/form-input → @ta/form-basic
Layer 5: @ta/core, @ta/user, @ta/calendar, @ta/charts, @ta/files-basic
Layer 6: @ta/cms, @ta/files-extended, @ta/features, @ta/capacitor, @ta/wysiswyg
```

### Package Management

- Uses **Lerna** for monorepo management with Yarn workspaces
- All packages follow the `@ta/` namespace convention
- Each library has its own `package.json`, `ng-package.json`, and TypeScript configurations
- Dependencies are managed at both root and individual library levels

### Angular Configuration

- **Main Application**: "Taelot" - serves as the demo/development application
- **Library Prefix**: All components use `ta-` prefix
- **Build System**: Angular CLI with ng-packagr for library building
- **Testing**: Karma + Jasmine for unit tests
- **Linting**: ESLint with Angular-specific rules

## Coding Conventions (MUST FOLLOW)

### Component Rules

1. **ALWAYS `standalone: true`** - no NgModules for components
2. **ALWAYS use signal inputs**: `input<T>()` or `input.required<T>()` - NEVER `@Input()` decorator
3. **ALWAYS extend base classes**: `TaBaseComponent` from `@ta/utils` (or `TaAbstractInputComponent` for form inputs)
4. **Selector prefix**: always `ta-` (e.g., `ta-button`, `ta-user-card`)
5. **Angular control flow**: use `@if`, `@for`, `@switch` - NEVER `*ngIf`, `*ngFor`
6. **Subscription management**: always use `this._registerSubscription()` from base class
7. **Request states**: use `this.requestState` from base class for loading/error states
8. **Content projection**: prefer `<ng-content>` over complex template inputs

### Import Ordering

Always separate imports into groups with blank lines:
```typescript
// 1. Angular
import { Component, input } from '@angular/core';

// 2. External libraries
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

// 3. @ta/ libraries
import { FontIconComponent } from '@ta/icons';
import { ButtonComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

// 4. Local/relative imports
import { MyLocalService } from '../services/my-local.service';
```

### SCSS Rules

```scss
// ALWAYS import shared mixins
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/flex";
@use "ta/utils/mixins/fonts";
@use "ta/utils/mixins/text";
@use "ta/utils/mixins/mediaQueriesRanges" as mq;

.my-component {
  // Colors via design tokens
  color: common.get-var(text, primary);
  background: common.get-var(surface, primary);
  border: 1px solid common.get-var(border, secondary);
  border-radius: common.get-var(radius, rounded);

  // Spacing (8px grid: xs=4, sm=8, md=16, lg=24, xl=32, xxl=48)
  padding: common.get-var(space, md);
  margin-bottom: common.get-var(space, sm);
  gap: common.get-var(space, sm);

  // Typography
  @include fonts.fontSizeBody(md);      // Body medium
  @include fonts.fontSizeHeader(h2);    // H2 style
  @include fonts.fontSizeKey(lg);       // Display large

  // Flexbox
  @include flex.flex-column();
  @include flex.align-center();
  @include flex.space-between();

  // Text utilities
  @include text.text-overflow();        // Ellipsis
  @include text.text-line-limit(2);     // Clamp to 2 lines

  // Responsive
  @include mq.from(768px) { /* desktop styles */ }
}
```

**Key color tokens:** `common.get-var(brand, 500)`, `common.get-var(text, primary/secondary/brand)`, `common.get-var(surface, primary/secondary/hover)`, `common.get-var(border, primary/secondary)`, `common.get-var(icon, primary/brand)`, `common.get-var(semantic, red/green/orange)`

### CSS Utility Classes (available in templates)

```html
<!-- Flexbox -->
<div class="flex-row g-space-md align-center">
<div class="flex-column g-space-sm">
<div class="space-between full-width">
<div class="flex-full">  <!-- flex: 1 1 100% -->

<!-- Spacing (xs/sm/md/lg/xl/xxl/xxxl) -->
<div class="p-space-md">      <!-- padding -->
<div class="m-space-sm">       <!-- margin -->
<div class="px-space-lg">      <!-- padding-left + right -->
<div class="mt-space-xl">      <!-- margin-top -->
<div class="g-space-md">       <!-- gap -->
<div class="mx-a">             <!-- margin auto horizontal -->

<!-- Grid (12 columns, responsive: sm-/md-/lg-/xl- prefixes) -->
<div class="grid">
  <div class="one-half md-full">     <!-- 50% desktop, 100% mobile -->
  <div class="one-third lg-one-half"> <!-- 33% large, 50% medium -->
</div>

<!-- Text -->
<span class="tt-u">UPPERCASE</span>
<span class="ta-c">Centered text</span>
<span class="tov-e">Truncated with ellipsis...</span>

<!-- Border radius -->
<div class="bdr-radius-rounded">  <!-- 8px radius -->
```

### Base Class Helpers (from TaAbstractComponent)

**RequestState** - async operation state machine:
```typescript
this.requestState.asked();          // Start loading
this.requestState.completed();      // Stop loading
this.requestState.onError(500, 'msg'); // Set error
this.requestState.isLoading();      // signal<boolean>
this.requestState.clean();          // Reset all
// In template: <ta-loader [isLoading]="this.requestState.isLoading()">
```

**BreakpointDetection** - responsive breakpoints:
```typescript
this.breakpoints.isMobile    // sync boolean
this.breakpoints.isDesktop   // sync boolean
this.breakpoints.isLessThanMD  // sync: < 768px
this.breakpoints.isMoreThanLG$ // Observable<boolean>: >= 992px
```
Breakpoints: XS(0-575), SM(576-767), MD(768-991), LG(992-1199), XL(1200-1399), XXL(1400+)

### Service Rules

- ALWAYS `@Injectable({ providedIn: 'root' })` for singletons
- ALWAYS use `inject()` function, not constructor injection
- ALWAYS prefix class name with `Ta` (e.g., `TaAuthService`)
- ALWAYS return `Observable<T>`, never Promises
- Use `Logger.LogInfo()` / `Logger.LogError()` from `@ta/server`
- Use private `_` prefix for services and methods: `private _myService = inject(MyService)`

### Form System Architecture

```
@ta/form-model  → InputBase<T>, InputTextBox, InputChoices, etc. (data models)
@ta/form-input  → TaAbstractInputComponent<M> (UI components rendering each type)
@ta/form-basic  → <ta-form> container that renders inputs dynamically
```

**Quick form example:**
```typescript
const inputs = [
  new InputPanel({
    key: 'info', label: 'form.info', containerClass: ['highlight-title'],
    contentClass: 'flex-column g-space-md',
    children: [
      new InputTextBox({ key: 'name', label: 'form.name', validators: [Validators.required], value: data?.name }),
      new InputEmail({ key: 'email', label: 'form.email', value: data?.email }),
      new InputDropdown({ key: 'role', label: 'form.role', options: of([{ id: 'admin', name: 'Admin' }]) }),
    ]
  }),
];
// Template: <ta-form [inputs]="inputs" (valid)="onSubmit($event)"></ta-form>
```

**InputBase<T> runtime API:** `input.value` (get/set), `input.changeValue$` (Subject), `input.formControl`, `input.disable()`, `input.enable()`, `input.destroy()`

See `.claude/reference/forms-reference.md` for all 25+ input types and complete API.

### GraphQL (via @ta/server)

- Use `createQuery<T>()` and `createPagedQuery<T>()` for queries
- Use `gql` + `GraphMutationPayload` for mutations
- Use `TaGraphService` methods: `fetchQueryList`, `fetchQuery`, `fetchQueryPaged`, `mutate`
- Filter with `WhereType<T>`: `{ field: { eq: value } }`, `{ field: { contains: str } }`
- Order with `OrderType<T>`: `{ field: 'ASC' | 'DESC' }`

### Translation Keys

Pattern: `<library>.<feature>.<element>.<action>`
Files: `projects/<lib>/src/i18n/{en,fr}.json`
Usage: `{{ 'key' | translate }}` or `TranslateService.instant('key')`

## Detailed Reference Files

For complete API documentation, see `.claude/reference/`:
- **`.claude/reference/ui-reference.md`** - All 60+ UI components with selectors, inputs, outputs, usage
- **`.claude/reference/utils-reference.md`** - All base classes, directives, pipes, helpers, utility functions
- **`.claude/reference/styles-reference.md`** - All SCSS mixins, CSS classes, design tokens, breakpoints
- **`.claude/reference/forms-reference.md`** - All 25+ form input types, form system API, validators
- **`.claude/reference/server-reference.md`** - GraphQL, REST, Strapi, WhereType, mutations

## Component Catalog Quick Reference

### @ta/ui - UI Components (60+)
**Basic**: `ButtonComponent`, `BadgeComponent`, `LabelComponent`, `TextComponent`, `LinkComponent`, `TitleComponent`, `BannerComponent`
**Buttons**: `ActionButtonComponent`, `DualButtonComponent`, `ToolButtonComponent`
**Display**: `BooleanIconComponent`, `CivilityComponent`, `CriticityComponent`, `CultureComponent`, `DurationComponent`, `TimeAgoComponent`, `TrigramComponent`, `UserLogoComponent`, `UsersListComponent`, `AddressComponent`, `ContactInformationComponent`, `MegaoctetComponent`
**Progress**: `ProgressComponent`, `ProgressCircleComponent`, `ProgressBarDataComponent`, `RatingComponent`
**Interactive**: `ExpansionPanelComponent`, `ExpandableTextComponent`, `ToggleCardComponent`
**Notification**: `ToastComponent`, `NotificationBadgeComponent`, `BulletComponent`
**Layout**: `LayoutPageComponent`, `LayoutHeaderComponent`, `LayoutHeaderDefaultComponent`, `LayoutHeaderLogoComponent`, `LayoutTitleComponent`, `LayoutContentComponent`, `LayoutNavComponent`, `LayoutSideComponent`, `LayoutSideContentComponent`, `LayoutSideCtaComponent`, `LayoutPanelComponent`, `LayoutFullPanelComponent`, `LayoutFlexComponent`, `LayoutModalComponent`, `LayoutModalContainerComponent`, `LayoutWithBottomNavComponent`, `LayoutWithPanelComponent`
**Container**: `LoaderComponent`, `EmptyComponent`, `ErrorComponent`, `SwiperLightComponent`, `ContainerValidationComponent`, `ModalValidationComponent`
**Card**: `CardComponent`, `CardHeaderComponent`, `CardTitleComponent`, `CardSubtitleComponent`, `CardContentComponent`, `CardCtaComponent`, `CardImageComponent`, `CardTagComponent`, `DashboardComponent`
**List**: `ListContainerComponent`, `ListElementComponent`, `ListTitleComponent`, `ListSubTitleComponent`, `ListTagComponent`, `ListExtraInformationComponent`
**Overlay**: `TaOverlayPanelComponent`, `DefaultPanelComponent`
**Swiper**: `SwiperComponent`
**Tree**: `TreeContainerComponent`, `TreeItemComponent`, `TreeChildrenComponent`

### @ta/icons
`FontIconComponent` (`ta-font-icon`), `LocalIconComponent` (`ta-local-icon`), `MaterialIconComponent` (`ta-material-icon`)
`TaIconType` enum (100+ icons), `TaIconsService`, `isFontIcon()`, `isLocalIcon()`, `getFontIcon()`

### @ta/form-input - 24 Input Components
`TextBoxComponent`, `TextareaComponent`, `DropdownComponent`, `InputChoicesComponent`, `CheckboxComponent`, `RadioComponent`, `DatePickerComponent`, `TimePickerComponent`, `SliderComponent`, `ToggleComponent`, `SwitchComponent`, `ColorPickerComponent`, `RatingComponent`, `PhoneComponent`, `SearchFieldComponent`, `WysiswygComponent`, `UploadComponent`, `InputImageComponent`, `InputImagesComponent`, `InputLogoComponent`, `InputSchemaComponent`, `CultureComponent`, `ComponentComponent`, `LabelComponent`

### @ta/form-model - 25+ Input Models
`InputBase<T>`, `InputTextBox`, `InputTextarea`, `InputEmail`, `InputPassword`, `InputPhone`, `InputNumber`, `InputDropdown`, `InputChoices`, `InputCheckBox`, `InputRadio`, `InputDatePicker`, `InputTimePicker`, `InputSlider`, `InputSwitch`, `InputColorPicker`, `InputRating`, `InputUpload`, `InputImages`, `InputLogo`, `InputWysiswyg`, `InputSchema`, `InputAddress`, `InputCulture`, `InputComponent`, `InputPanel`, `InputLabel`, `InputDynamic`, `InputTranslation`
Validators: `phoneValidator()`, `slugValidator()`

### @ta/form-basic
`FormComponent` (`ta-form`), `InputsComponent` (`ta-inputs`), `EditFieldComponent` (`ta-edit-field`)

### @ta/core
`FiltersContainerComponent`, `FilterContainerComponent`, `FilterDisplayerComponent`, `FiltersTagComponent`, `SearchDisplayerComponent`, `SearchHistoryDisplayerComponent`, `DocumentsComponent`, `UploadDocumentModal`, `TextToClipboardComponent`, `MapComponent`
Providers: `provideGTM()`, `provideGoogleMaps()`

### @ta/server
`TaGraphService`, `TaServerService`, `TaServerErrorService`, `BaseService`, `Logger`, `TaStrapiService`, `BaseStrapiService`, `CacheInterceptor`
Helpers: `createQuery<T>()`, `createPagedQuery<T>()`, `handleRequest()`
Types: `GraphPayload`, `GraphMutationPayload`, `GraphQueryInput<T>`, `WhereType<T>`, `OrderType<T>`, `GraphReponsePaged<T>`, `GraphEndpoint`, `IGraphConfig`
Providers: `provideServer()`, `provideStrapi()`

### @ta/utils
**Classes**: `TaAbstractComponent`, `TaBaseComponent`, `TaBasePage`, `TaBaseModal`
**Helpers**: `SubscriberHandler`, `RequestState`, `BreakpointDetection`, `HorizontalScroll`
**Directives**: `StopPropagationDirective`, `DndDirective`, `LetDirective`, `OnRenderDirective`, `TypedTemplateDirective`
**Pipes**: `FileSizePipe`, `JoinPipe`, `PluralTranslatePipe`, `SafePipe`
**Functions**: `isNonNullable()`, `getUniqueArray()`, `toArray()`, `filterNonNullableItems()`, `capitalizeFirstLetter()`, `isURL()`, `newGuid()`, `merge()`, `compare()`, `getModifiedValues()`, `copyTextToClipboard()`, `isLight()`, `extractEnum()`, `fullName()`, `compressImage()`, `downloadFile()`, `octetsToMo()`, `search()`, `sort()`, `createRange()`, `percentage()`, `roundToDecimal()`
**Types**: `Civility`, `Culture`, `EFileExtension`, `FileData<T>`, `FileType`, `MessageLevel`, `RecursivePartial<T>`
**Service**: `ReadOnlyContextService`

### @ta/notification
`NotificationBoxComponent`, `NotificationInlineComponent`, `BulletComponent`
`TaNotificationService`, `ENotificationCode` enum

### @ta/translation
`TranslatePipe`, `TranslateDirective`, `TaTranslationService`, `TranslationRegistryService`, `LazyTranslationService`, `AbstractTranslationModule`

### @ta/menu
`MenuComponent`, `MenuItemComponent`, `MainMenuComponent`, `NavigationComponent`, `ContextMenuComponent`, `QuickActionsComponent`, `QuickActionsCustomComponent`, `ToggleNavigationComponent`, `BottomSheetTemplateBasicComponent`, `BottomSheetTemplateGenericComponent`
Models: `Menu`, `MenuBase`, `MenuIcon`, `MenuAction`

### @ta/services
`TaEnumerationService`, `TaSharedMenuService`, `TaDocumentsService`, `TaProjectsService`
DTOs: `TranslatedEnumeration`, `User`, `Picture`, `DocumentDto`, `FileType`, `Project`, `Status`

### @ta/features
`TaGridComponent`, `TaGridContainerComponent`, `TaGridFormComponent`, `TaGridSearchComponent`, `TaGridTagsComponent`, `TaGridControlComponent`
Types: `ParameterType` enum, `ColMetaData<T>`, `Preset`

### @ta/charts
`BarChartComponent`, `LineChartComponent`, `DoughnutChartComponent`, `MixedChartComponent`, `PieChartComponent`

### @ta/files-basic
`FilesListComponent`, `FilesEditComponent`, `DocumentsListComponent`

### @ta/files-extended
`FilesDisplayComponent`, `FilesUploadComponent`, `UploadDocumentFormService`

### @ta/user
`LoginCardComponent`, `LoginComponent`, `SigninComponent`, `MyAccountComponent`, `GuardComponent`, `SwitchLanguageCtaComponent`

### @ta/cms
`CmsComponent`, `SaleComponent`, `TaCmsService`

### @ta/capacitor
`DeviceInfoService`, `DeviceNetworkService`, `DevicePositionService`, `PwaService`

## Library File Paths

| Library | Source Path |
|---------|-------------|
| `@ta/ui` | `projects/ui/src/lib/` |
| `@ta/core` | `projects/core/src/lib/` |
| `@ta/server` | `projects/server/src/lib/` |
| `@ta/services` | `projects/services/src/lib/` |
| `@ta/utils` | `projects/utils/src/lib/` |
| `@ta/icons` | `projects/icons/src/lib/` |
| `@ta/styles` | `projects/styles/src/` |
| `@ta/form-model` | `projects/form/form-model/src/lib/` |
| `@ta/form-input` | `projects/form/form-input/src/lib/` |
| `@ta/form-basic` | `projects/form/form-basic/src/lib/` |
| `@ta/notification` | `projects/notification/src/lib/` |
| `@ta/translation` | `projects/translation/src/lib/` |
| `@ta/menu` | `projects/menu/src/lib/` |
| `@ta/calendar` | `projects/calendar/src/lib/` |
| `@ta/charts` | `projects/charts/src/lib/` |
| `@ta/user` | `projects/user/src/lib/` |
| `@ta/cms` | `projects/cms/src/lib/` |
| `@ta/files-basic` | `projects/files/files-basic/src/lib/` |
| `@ta/files-extended` | `projects/files/files-extended/src/lib/` |
| `@ta/features` | `projects/features/src/lib/` |

## Do's and Don'ts

### DO
- Use `input()` signal API for all new component inputs
- Extend `TaBaseComponent` for any new component
- Use `common.get-var()` for all style values
- Use `_registerSubscription()` for every subscription
- Export from `public-api.ts` at every level
- Keep i18n files in sync (en.json + fr.json)
- Use `inject()` for dependency injection in services

### DON'T
- Use `@Input()` decorator (deprecated pattern in this project)
- Use `*ngIf` or `*ngFor` (use `@if`, `@for` control flow)
- Hardcode colors, spacing, or fonts in SCSS
- Create NgModules (use standalone components)
- Use constructor injection (use `inject()` function)
- Import from dist/ folders (always import from `@ta/<lib>`)
- Forget to clean up subscriptions (base class handles it via ngOnDestroy)

## Development Workflow

### Creating New Libraries

Follow the documented process in README.md or use `/ta-library`:

1. Generate library: `ng g lib [LibName]`
2. Update `ng-package.json` dest to `'dist'`
3. Update `package.json` name to `'@ta/[LibName]'`
4. Add build scripts to package.json
5. Update angular.json project references
6. Update tsconfig path mappings

### Building and Testing

- Always build with dependencies: `lerna run build --include-dependencies`
- Test individual libraries: `ng test @ta/[LibName]`
- Use Storybook for component development and documentation

### Code Organization

- Each library follows Angular library structure with `src/lib/` containing main code
- Public APIs are defined in `public-api.ts` files
- Components, services, and models are organized in dedicated folders
- Translation files and type definitions are co-located with their features

## Environment & Configuration

### Build Configurations

- **Production**: Optimized builds with budgets (500kb warning, 1mb error)
- **Development**: Unoptimized with source maps
- **Local**: Development mode with environment file replacement

### Style System

- SCSS-based styling with shared style library (`@ta/styles`)
- Angular Material integration
- Custom component styling following BEM-like conventions
- Style preprocessing with include paths for shared styles

## Testing Notes

- Karma + Jasmine for unit testing
- Storybook for component documentation and manual testing
- ESLint + Prettier for code quality
- Individual library testing is supported
- Tests are located alongside source files in each library
