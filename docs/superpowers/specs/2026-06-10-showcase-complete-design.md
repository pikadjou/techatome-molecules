# Showcase Complet — Design Spec

**Date:** 2026-06-10  
**Status:** Approved

## Objectif

Restructurer le showcase de l'application Taelot pour présenter tous les packages visuels `@ta/*` avec une page par package, des onglets (child routes Angular) pour les packages multi-sections, et une sidebar mise à jour. Résultat attendu : un showcase de référence exhaustif pour les 12 packages visuels.

## Packages inclus

| Package | Structure | Onglets |
|---------|-----------|---------|
| `@ta/ui` | Shell + 6 sous-pages | Basics, Display, Cards & Lists, Layout, Progress, Container |
| `@ta/notification` | Page unique | — |
| `@ta/menu` | Shell + 2 sous-pages | Components, Navigation |
| `@ta/form` | Shell + 5 sous-pages | Inputs, Selection, Date & Time, Advanced, Full Example |
| `@ta/features` | Page unique refactorée | — |
| `@ta/charts` | Page unique refactorée | — |
| `@ta/files` | Shell + 2 sous-pages | Basic, Extended |
| `@ta/icons` | Shell + 2 sous-pages | Font, Material |
| `@ta/calendar` | Page unique (nouvelle) | — |
| `@ta/utils` | Shell + 3 sous-pages | Pipes, Directives, Functions |
| `@ta/user` | Page unique refactorée | — |
| `@ta/wysiswyg` | Page unique (inchangée) | — |

**Exclus (backend) :** `@ta/server`, `@ta/services`, `@ta/capacitor`, `@ta/cms`, `@ta/translation`

## Architecture technique

### Pattern shell + child routes

Chaque package avec plusieurs sections suit ce pattern :

**Shell component** (`<package>-shell.component.ts`) :
- Contient `<app-page-layout title="@ta/<package>">`
- Barre d'onglets avec `routerLink` vers les child routes
- `<router-outlet>` pour le contenu des sous-pages
- Redirect vers le premier onglet si la route parente est accédée directement

**Sous-pages** (`<tab>/tab.component.ts`) :
- Pas de `<app-page-layout>` (le shell s'en charge)
- Rendent directement `<div class="sections">...</div>`
- Standalone components, `ChangeDetectionStrategy.OnPush`

### Structure de routing (`app.routes.ts`)

```typescript
{
  path: 'ui',
  loadComponent: () => import('./showcase/ui/ui-shell.component'),
  children: [
    { path: '', redirectTo: 'basics', pathMatch: 'full' },
    { path: 'basics', loadComponent: () => import('./showcase/ui/basics/basics.component') },
    { path: 'display', loadComponent: () => import('./showcase/ui/display/display.component') },
    { path: 'cards', loadComponent: () => import('./showcase/ui/cards/cards.component') },
    { path: 'layout', loadComponent: () => import('./showcase/ui/layout/layout.component') },
    { path: 'progress', loadComponent: () => import('./showcase/ui/progress/progress.component') },
    { path: 'container', loadComponent: () => import('./showcase/ui/container/container.component') },
  ]
},
// idem pour form, files, icons, menu, utils
// pages uniques : notification, features, charts, calendar, user, wysiswyg
```

### Barre d'onglets (shell template)

```html
<app-page-layout title="@ta/ui">
  <div class="tabs-nav">
    <a routerLink="basics" routerLinkActive="active">Basics</a>
    <a routerLink="display" routerLinkActive="active">Display</a>
    <!-- ... -->
  </div>
  <router-outlet></router-outlet>
</app-page-layout>
```

Style des onglets : border-bottom actif avec `brand` color, tokens `common.get-var()`.

## Navigation (sidebar)

### Groupes et items

```
Home

── Foundation ──
  Theme           /theme
  Icons           /icons → redirect /icons/font
    Font Icons    /icons/font
    Material      /icons/material

── UI ──
  @ta/ui          /ui → redirect /ui/basics
    Basics        /ui/basics
    Display       /ui/display
    Cards & Lists /ui/cards
    Layout        /ui/layout
    Progress      /ui/progress
    Container     /ui/container
  @ta/notification /notification
  @ta/menu        /menu → redirect /menu/components
    Components    /menu/components
    Navigation    /menu/navigation

── Forms & Data ──
  @ta/form        /form → redirect /form/inputs
    Inputs        /form/inputs
    Selection     /form/selection
    Date & Time   /form/datetime
    Advanced      /form/advanced
    Full Example  /form/example
  @ta/features    /features
  @ta/charts      /charts
  @ta/files       /files → redirect /files/basic
    Basic         /files/basic
    Extended      /files/extended
  @ta/wysiswyg    /wysiswyg

── Utilities ──
  @ta/calendar    /calendar
  @ta/utils       /utils → redirect /utils/pipes
    Pipes         /utils/pipes
    Directives    /utils/directives
    Functions     /utils/functions
  @ta/user        /user
```

Items enfants : indentés visuellement avec un trait vertical gauche, taille de texte sm, couleur `text, secondary` (actif : `text, brand`).

## Contenu par package

### @ta/ui — Basics
Title, Text, Link, Badge, Label, Button (primary/secondary/tertiary, sizes, states, circular), ActionButton, DualButton, ToolButton, BannerComponent (all types)

### @ta/ui — Display
Civility, Criticity, Duration, TimeAgo, Trigram, UserLogo, UsersList, Megaoctet, ExpandableText, Culture, Address, ContactInformation

### @ta/ui — Cards & Lists
Card (base, with image, with tag, advanced with all slots), CardHeader, CardTitle, CardSubtitle, CardContent, CardCta, CardImage, CardTag, ListContainer, ListElement, ListTitle, ListSubTitle, ListTag, ListExtraInformation, Dashboard

### @ta/ui — Layout
LayoutPage, LayoutHeader (default + logo), LayoutContent, LayoutTitle, LayoutPanel, LayoutFullPanel, LayoutFlex, LayoutSide, LayoutSideContent, LayoutSideCta, LayoutModal, LayoutModalContainer, LayoutWithBottomNav, LayoutWithPanel, LayoutNav

### @ta/ui — Progress
Progress (values + animated), ProgressCircle, ProgressBarData, Rating

### @ta/ui — Container
Empty (default, light, subtitle, CTA), Loader, Error, SwiperLight, ExpansionPanel, ToggleCard, ContainerValidation

### @ta/notification
NotificationBox, NotificationInline (codes 0–3), NotificationBadge, Bullet (types), Toast (via TaNotificationService)

### @ta/menu — Components
MenuComponent (with MenuBase items), MenuIcon, MenuAction, ContextMenu, QuickActions, QuickActionsCustom

### @ta/menu — Navigation
MainMenu, NavigationComponent, ToggleNavigation, BottomSheetTemplateBasic, BottomSheetTemplateGeneric

### @ta/form — Inputs
InputTextBox, InputTextarea, InputEmail, InputPassword, InputPhone, InputNumber — démontrés dans un `<ta-form>`

### @ta/form — Selection
InputDropdown, InputChoices, InputCheckBox, InputRadio, InputSlider, InputSwitch — démontrés dans un `<ta-form>`

### @ta/form — Date & Time
InputDatePicker, InputTimePicker — démontrés dans un `<ta-form>`

### @ta/form — Advanced
InputColorPicker, InputRating, InputUpload, InputImages, InputLogo, InputSchema, InputAddress, InputCulture, InputComponent, InputLabel, InputTranslation — démontrés dans un `<ta-form>`

### @ta/form — Full Example
Formulaire complet avec InputPanel groupés (identité, détails, préférences), soumission, affichage des valeurs soumises

### @ta/features (Grid)
Grid basique, avec templates colonnes custom, avec search + filtering, avec sorting, avec pagination, avec presets — refactoring de l'existant

### @ta/charts
BarChart, LineChart, DoughnutChart, PieChart, MixedChart — refactoring de l'existant

### @ta/files — Basic
FilesList, FilesEdit, DocumentsList

### @ta/files — Extended
FilesDisplay, FilesUpload (avec UploadDocumentFormService)

### @ta/icons — Font
Grille de tous les TaIconType, démonstration des tailles (sm/md/lg), couleurs

### @ta/icons — Material
MaterialIconComponent avec variantes et tailles

### @ta/calendar
Explorer `projects/calendar/src/lib/` pour identifier les composants disponibles. Démontrer les composants exportés avec des données de démo. Si aucun composant visuel n'est exporté, afficher une section "Coming soon" avec la liste des exports publics.

### @ta/utils — Pipes
FileSizePipe (octets → Mo), JoinPipe (array → string), PluralTranslatePipe, SafePipe (HTML safe)

### @ta/utils — Directives
StopPropagationDirective, DndDirective (drag & drop), LetDirective, OnRenderDirective

### @ta/utils — Functions
Démo interactive de : search(), sort(), newGuid(), copyTextToClipboard(), isNonNullable(), capitalizeFirstLetter(), percentage(), roundToDecimal(), fullName()

### @ta/user
LoginCard, Login (full form), Signin, SwitchLanguageCta

## Fichiers à créer/modifier

### Modifiés
- `src/app/app.routes.ts`
- `src/app/app.component.ts` + `.html` + `.scss`

### Supprimés (contenu migré)
- `src/app/showcase/ui/` → `ui/basics/`
- `src/app/showcase/ui-display/` → `ui/display/`
- `src/app/showcase/ui-cards-lists/` → `ui/cards/`
- `src/app/showcase/ui-layout/` → `ui/layout/`
- `src/app/showcase/ui-feedback/` → `notification/`
- `src/app/showcase/ui-navigation/` → `menu/navigation/`
- `src/app/showcase/ui-progress/` → `ui/progress/`
- `src/app/showcase/container/` → `ui/container/`
- `src/app/showcase/icons/` → `icons/font/` + `icons/material/`
- `src/app/showcase/form/` → `form/` (restructuré)
- `src/app/showcase/grid/` → `features/` (restructuré)
- `src/app/showcase/charts/` → `charts/` (restructuré)
- `src/app/showcase/files/` → `files/` (restructuré)
- `src/app/showcase/utils/` → `utils/` (restructuré)
- `src/app/showcase/user/` → `user/` (restructuré)

### Nouveaux (~50 composants)
Voir arborescence dans section 4 du design.

## Implémentation recommandée (ordre)

1. **Routing + sidebar** — fondation, débloque tout le reste
2. **@ta/ui** (6 sous-pages) — plus grand package
3. **@ta/form** (5 sous-pages) — second plus grand
4. **@ta/notification + @ta/menu** (pages simples + shell)
5. **@ta/files + @ta/icons** (shells + 2 sous-pages chacun)
6. **@ta/features + @ta/charts + @ta/wysiswyg** (refactoring existant)
7. **@ta/calendar + @ta/utils + @ta/user** (nouvelles pages + shell utils)
