# Showcase Phase 1 — Foundation (Routing + Sidebar + Shells) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mettre en place l'architecture de routing Angular avec child routes par package, les shell components avec barre d'onglets, des sous-pages placeholder, et la sidebar mise à jour — sans supprimer les anciennes pages existantes.

**Architecture:** Chaque package multi-sections a un shell component (`<package>-shell.component`) qui contient `<app-page-layout>`, une `tabs-nav` avec `routerLink`, et un `<router-outlet>`. Les sous-pages sont des standalone components qui rendent directement leurs sections sans wrapper page-layout. L'app.component est mis à jour pour supporter les items de navigation avec enfants.

**Tech Stack:** Angular 18, standalone components, signal inputs, RouterLink/RouterLinkActive/RouterOutlet, ChangeDetectionStrategy.OnPush, SCSS avec common.get-var()

---

## Fichiers créés / modifiés

| Action | Fichier |
|--------|---------|
| Create | `src/app/showcase/ui/ui-shell.component.ts/html/scss` |
| Create | `src/app/showcase/form/form-shell.component.ts/html/scss` |
| Create | `src/app/showcase/menu/menu-shell.component.ts/html/scss` |
| Create | `src/app/showcase/files/files-shell.component.ts/html/scss` |
| Create | `src/app/showcase/icons/icons-shell.component.ts/html/scss` |
| Create | `src/app/showcase/utils/utils-shell.component.ts/html/scss` |
| Create | `src/app/showcase/ui/basics/basics.component.ts` |
| Create | `src/app/showcase/ui/display/display.component.ts` |
| Create | `src/app/showcase/ui/cards/cards.component.ts` |
| Create | `src/app/showcase/ui/layout/layout.component.ts` |
| Create | `src/app/showcase/ui/progress/progress.component.ts` |
| Create | `src/app/showcase/ui/container/container.component.ts` |
| Create | `src/app/showcase/form/inputs/inputs.component.ts` |
| Create | `src/app/showcase/form/selection/selection.component.ts` |
| Create | `src/app/showcase/form/datetime/datetime.component.ts` |
| Create | `src/app/showcase/form/advanced/advanced.component.ts` |
| Create | `src/app/showcase/form/example/example.component.ts` |
| Create | `src/app/showcase/menu/components/components.component.ts` |
| Create | `src/app/showcase/menu/navigation/navigation.component.ts` |
| Create | `src/app/showcase/files/basic/basic.component.ts` |
| Create | `src/app/showcase/files/extended/extended.component.ts` |
| Create | `src/app/showcase/icons/font/font.component.ts` |
| Create | `src/app/showcase/icons/material/material.component.ts` |
| Create | `src/app/showcase/utils/pipes/pipes.component.ts` |
| Create | `src/app/showcase/utils/directives/directives.component.ts` |
| Create | `src/app/showcase/utils/functions/functions.component.ts` |
| Create | `src/app/showcase/notification/notification.component.ts` |
| Create | `src/app/showcase/calendar/calendar.component.ts` |
| Create | `src/app/showcase/features/features.component.ts` |
| Modify | `src/app/app.routes.ts` |
| Modify | `src/app/app.component.ts` |
| Modify | `src/app/app.component.html` |
| Modify | `src/app/app.component.scss` |

---

### Task 1: UiShellComponent

**Files:**
- Create: `src/app/showcase/ui/ui-shell.component.ts`
- Create: `src/app/showcase/ui/ui-shell.component.html`
- Create: `src/app/showcase/ui/ui-shell.component.scss`

- [ ] **Créer `ui-shell.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-ui-shell",
  templateUrl: "./ui-shell.component.html",
  styleUrl: "./ui-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiShellComponent {
  tabs = [
    { label: "Basics", route: "basics" },
    { label: "Display", route: "display" },
    { label: "Cards & Lists", route: "cards" },
    { label: "Layout", route: "layout" },
    { label: "Progress", route: "progress" },
    { label: "Container", route: "container" },
  ];
}
```

- [ ] **Créer `ui-shell.component.html`**

```html
<app-page-layout title="@ta/ui">
  <nav class="tabs-nav">
    @for (tab of this.tabs; track tab.route) {
      <a [routerLink]="tab.route" routerLinkActive="active" class="tab-link">{{ tab.label }}</a>
    }
  </nav>
  <div class="tab-content">
    <router-outlet></router-outlet>
  </div>
</app-page-layout>
```

- [ ] **Créer `ui-shell.component.scss`**

```scss
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/fonts";

.tabs-nav {
  display: flex;
  border-bottom: 1px solid common.get-var(border, secondary);
  padding: 0 common.get-var(space, xl);
  gap: common.get-var(space, xs);
  background: common.get-var(surface, primary);
  flex-shrink: 0;
}

.tab-link {
  padding: common.get-var(space, sm) common.get-var(space, md);
  text-decoration: none;
  color: common.get-var(text, secondary);
  @include fonts.fontSizeBody(md);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: color 0.15s ease, border-color 0.15s ease;
  white-space: nowrap;

  &:hover {
    color: common.get-var(text, primary);
  }

  &.active {
    color: common.get-var(text, brand);
    border-bottom-color: common.get-var(brand, 500);
    font-weight: 600;
  }
}

.tab-content {
  flex: 1;
  overflow-y: auto;
}
```

---

### Task 2: FormShellComponent

**Files:**
- Create: `src/app/showcase/form/form-shell.component.ts`
- Create: `src/app/showcase/form/form-shell.component.html`
- Create: `src/app/showcase/form/form-shell.component.scss`

- [ ] **Créer `form-shell.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-form-shell",
  templateUrl: "./form-shell.component.html",
  styleUrl: "./form-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormShellComponent {
  tabs = [
    { label: "Inputs", route: "inputs" },
    { label: "Selection", route: "selection" },
    { label: "Date & Time", route: "datetime" },
    { label: "Advanced", route: "advanced" },
    { label: "Full Example", route: "example" },
  ];
}
```

- [ ] **Créer `form-shell.component.html`**

```html
<app-page-layout title="@ta/form">
  <nav class="tabs-nav">
    @for (tab of this.tabs; track tab.route) {
      <a [routerLink]="tab.route" routerLinkActive="active" class="tab-link">{{ tab.label }}</a>
    }
  </nav>
  <div class="tab-content">
    <router-outlet></router-outlet>
  </div>
</app-page-layout>
```

- [ ] **Créer `form-shell.component.scss`**

Contenu identique à `ui-shell.component.scss` (même styles `.tabs-nav`, `.tab-link`, `.tab-content`).

---

### Task 3: MenuShellComponent

**Files:**
- Create: `src/app/showcase/menu/menu-shell.component.ts`
- Create: `src/app/showcase/menu/menu-shell.component.html`
- Create: `src/app/showcase/menu/menu-shell.component.scss`

- [ ] **Créer `menu-shell.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-menu-shell",
  templateUrl: "./menu-shell.component.html",
  styleUrl: "./menu-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuShellComponent {
  tabs = [
    { label: "Components", route: "components" },
    { label: "Navigation", route: "navigation" },
  ];
}
```

- [ ] **Créer `menu-shell.component.html`** — contenu identique au template de `ui-shell.component.html` avec le titre `@ta/menu`

```html
<app-page-layout title="@ta/menu">
  <nav class="tabs-nav">
    @for (tab of this.tabs; track tab.route) {
      <a [routerLink]="tab.route" routerLinkActive="active" class="tab-link">{{ tab.label }}</a>
    }
  </nav>
  <div class="tab-content">
    <router-outlet></router-outlet>
  </div>
</app-page-layout>
```

- [ ] **Créer `menu-shell.component.scss`** — contenu identique à `ui-shell.component.scss`

---

### Task 4: FilesShellComponent

**Files:**
- Create: `src/app/showcase/files/files-shell.component.ts`
- Create: `src/app/showcase/files/files-shell.component.html`
- Create: `src/app/showcase/files/files-shell.component.scss`

- [ ] **Créer `files-shell.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-files-shell",
  templateUrl: "./files-shell.component.html",
  styleUrl: "./files-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesShellComponent {
  tabs = [
    { label: "Basic", route: "basic" },
    { label: "Extended", route: "extended" },
  ];
}
```

- [ ] **Créer `files-shell.component.html`**

```html
<app-page-layout title="@ta/files">
  <nav class="tabs-nav">
    @for (tab of this.tabs; track tab.route) {
      <a [routerLink]="tab.route" routerLinkActive="active" class="tab-link">{{ tab.label }}</a>
    }
  </nav>
  <div class="tab-content">
    <router-outlet></router-outlet>
  </div>
</app-page-layout>
```

- [ ] **Créer `files-shell.component.scss`** — contenu identique à `ui-shell.component.scss`

---

### Task 5: IconsShellComponent

**Files:**
- Create: `src/app/showcase/icons/icons-shell.component.ts`
- Create: `src/app/showcase/icons/icons-shell.component.html`
- Create: `src/app/showcase/icons/icons-shell.component.scss`

- [ ] **Créer `icons-shell.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-icons-shell",
  templateUrl: "./icons-shell.component.html",
  styleUrl: "./icons-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsShellComponent {
  tabs = [
    { label: "Font Icons", route: "font" },
    { label: "Material Icons", route: "material" },
  ];
}
```

- [ ] **Créer `icons-shell.component.html`**

```html
<app-page-layout title="@ta/icons">
  <nav class="tabs-nav">
    @for (tab of this.tabs; track tab.route) {
      <a [routerLink]="tab.route" routerLinkActive="active" class="tab-link">{{ tab.label }}</a>
    }
  </nav>
  <div class="tab-content">
    <router-outlet></router-outlet>
  </div>
</app-page-layout>
```

- [ ] **Créer `icons-shell.component.scss`** — contenu identique à `ui-shell.component.scss`

---

### Task 6: UtilsShellComponent

**Files:**
- Create: `src/app/showcase/utils/utils-shell.component.ts`
- Create: `src/app/showcase/utils/utils-shell.component.html`
- Create: `src/app/showcase/utils/utils-shell.component.scss`

- [ ] **Créer `utils-shell.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-utils-shell",
  templateUrl: "./utils-shell.component.html",
  styleUrl: "./utils-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsShellComponent {
  tabs = [
    { label: "Pipes", route: "pipes" },
    { label: "Directives", route: "directives" },
    { label: "Functions", route: "functions" },
  ];
}
```

- [ ] **Créer `utils-shell.component.html`**

```html
<app-page-layout title="@ta/utils">
  <nav class="tabs-nav">
    @for (tab of this.tabs; track tab.route) {
      <a [routerLink]="tab.route" routerLinkActive="active" class="tab-link">{{ tab.label }}</a>
    }
  </nav>
  <div class="tab-content">
    <router-outlet></router-outlet>
  </div>
</app-page-layout>
```

- [ ] **Créer `utils-shell.component.scss`** — contenu identique à `ui-shell.component.scss`

---

### Task 7: Placeholder sub-pages @ta/ui (6 fichiers)

**Files:** (tous créés dans cette task)
- Create: `src/app/showcase/ui/basics/basics.component.ts`
- Create: `src/app/showcase/ui/display/display.component.ts`
- Create: `src/app/showcase/ui/cards/cards.component.ts`
- Create: `src/app/showcase/ui/layout/layout.component.ts`
- Create: `src/app/showcase/ui/progress/progress.component.ts`
- Create: `src/app/showcase/ui/container/container.component.ts`

- [ ] **Créer `basics.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-ui-basics",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">Buttons, Text, Badges, Labels, Links — Phase 2</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicsComponent {}
```

- [ ] **Créer `display.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-ui-display",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">Civility, Criticity, Duration, TimeAgo, Trigram, UserLogo — Phase 2</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent {}
```

- [ ] **Créer `cards.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-ui-cards",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">Card, CardImage, CardTag, ListContainer, Dashboard — Phase 2</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {}
```

- [ ] **Créer `layout.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-ui-layout",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">LayoutPage, LayoutHeader, LayoutPanel, LayoutModal — Phase 2</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
```

- [ ] **Créer `progress.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-ui-progress",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">Progress, ProgressCircle, ProgressBarData, Rating — Phase 2</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {}
```

- [ ] **Créer `container.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-ui-container",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">Empty, Loader, Error, SwiperLight, ExpansionPanel, ToggleCard — Phase 2</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {}
```

---

### Task 8: Placeholder sub-pages @ta/form (5 fichiers)

**Files:**
- Create: `src/app/showcase/form/inputs/inputs.component.ts`
- Create: `src/app/showcase/form/selection/selection.component.ts`
- Create: `src/app/showcase/form/datetime/datetime.component.ts`
- Create: `src/app/showcase/form/advanced/advanced.component.ts`
- Create: `src/app/showcase/form/example/example.component.ts`

- [ ] **Créer `inputs.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-form-inputs",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">TextBox, Textarea, Email, Password, Phone, Number — Phase 3</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputsComponent {}
```

- [ ] **Créer `selection.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-form-selection",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">Dropdown, Choices, CheckBox, Radio, Slider, Switch — Phase 3</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSelectionComponent {}
```

- [ ] **Créer `datetime.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-form-datetime",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">DatePicker, TimePicker — Phase 3</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDatetimeComponent {}
```

- [ ] **Créer `advanced.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-form-advanced",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">ColorPicker, Rating, Upload, Images, Logo, Schema, Address, Culture — Phase 3</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAdvancedComponent {}
```

- [ ] **Créer `example.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-form-example",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">Formulaire complet avec InputPanel groupés, soumission, validation — Phase 3</ta-text>
      </section>
    </div>
  `,
  styles: [`
    .sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; }
    section { display: flex; flex-direction: column; gap: 16px; }
  `],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormExampleComponent {}
```

---

### Task 9: Placeholder sub-pages @ta/menu, @ta/files, @ta/icons, @ta/utils (10 fichiers)

**Files:**
- Create: `src/app/showcase/menu/components/components.component.ts`
- Create: `src/app/showcase/menu/navigation/navigation.component.ts`
- Create: `src/app/showcase/files/basic/basic.component.ts`
- Create: `src/app/showcase/files/extended/extended.component.ts`
- Create: `src/app/showcase/icons/font/font.component.ts`
- Create: `src/app/showcase/icons/material/material.component.ts`
- Create: `src/app/showcase/utils/pipes/pipes.component.ts`
- Create: `src/app/showcase/utils/directives/directives.component.ts`
- Create: `src/app/showcase/utils/functions/functions.component.ts`

- [ ] **Créer `menu/components/components.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-menu-components",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">MenuComponent, MenuIcon, MenuAction, ContextMenu, QuickActions — Phase 4</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponentsComponent {}
```

- [ ] **Créer `menu/navigation/navigation.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-menu-navigation",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">MainMenu, NavigationComponent, ToggleNavigation, BottomSheet — Phase 4</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavigationComponent {}
```

- [ ] **Créer `files/basic/basic.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-files-basic",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">FilesList, FilesEdit, DocumentsList — Phase 5</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesBasicComponent {}
```

- [ ] **Créer `files/extended/extended.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-files-extended",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">FilesDisplay, FilesUpload — Phase 5</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesExtendedComponent {}
```

- [ ] **Créer `icons/font/font.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-icons-font",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">FontIconComponent — tous les TaIconType en grille — Phase 5</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsFontComponent {}
```

- [ ] **Créer `icons/material/material.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-icons-material",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">MaterialIconComponent — variantes et tailles — Phase 5</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsMaterialComponent {}
```

- [ ] **Créer `utils/pipes/pipes.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-utils-pipes",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">FileSizePipe, JoinPipe, PluralTranslatePipe, SafePipe — Phase 7</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsPipesComponent {}
```

- [ ] **Créer `utils/directives/directives.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-utils-directives",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">StopPropagation, Dnd, Let, OnRender directives — Phase 7</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsDirectivesComponent {}
```

- [ ] **Créer `utils/functions/functions.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-utils-functions",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">search, sort, newGuid, copyTextToClipboard, percentage, etc. — Phase 7</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsFunctionsComponent {}
```

---

### Task 10: Pages standalone — Notification, Calendar, Features

**Files:**
- Create: `src/app/showcase/notification/notification.component.ts`
- Create: `src/app/showcase/calendar/calendar.component.ts`
- Create: `src/app/showcase/features/features.component.ts`

- [ ] **Créer `notification/notification.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-notification",
  template: `
    <app-page-layout title="@ta/notification">
      <div class="sections">
        <section>
          <ta-title [level]="2">Coming Soon</ta-title>
          <ta-text size="sm">NotificationBox, NotificationInline, NotificationBadge, Bullet, Toast — Phase 4</ta-text>
        </section>
      </div>
    </app-page-layout>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [PageLayoutComponent, TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {}
```

- [ ] **Créer `calendar/calendar.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-calendar",
  template: `
    <app-page-layout title="@ta/calendar">
      <div class="sections">
        <section>
          <ta-title [level]="2">Coming Soon</ta-title>
          <ta-text size="sm">@ta/calendar components — Phase 7</ta-text>
        </section>
      </div>
    </app-page-layout>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [PageLayoutComponent, TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {}
```

- [ ] **Créer `features/features.component.ts`**

Ce composant reprend le contenu existant du `GridPage`. Lire `src/app/showcase/grid/grid.component.ts` et copier son contenu en changeant uniquement le sélecteur en `app-features` et le nom de classe en `FeaturesComponent`. Le titre dans `<app-page-layout>` devient `@ta/features`.

Exemple (adapter au contenu exact de grid.component.ts) :

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
// ... mêmes imports que grid.component.ts

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",  // à créer
  styleUrl: "./features.component.scss",      // à créer
  standalone: true,
  imports: [/* mêmes que grid.component.ts */],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  // ... même contenu que GridPage
}
```

Copier également `grid.component.html` → `features.component.html` et `grid.component.scss` → `features.component.scss`, puis changer `Grid` → `@ta/features` dans le titre.

---

### Task 11: Mettre à jour app.routes.ts

**Files:**
- Modify: `src/app/app.routes.ts`

- [ ] **Remplacer le contenu de `app.routes.ts`**

```typescript
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadComponent: () =>
      import("./showcase/home/home.component").then((c) => c.HomePage),
  },
  {
    path: "theme",
    loadComponent: () =>
      import("./showcase/theme/theme.component").then((c) => c.ThemePage),
  },
  {
    path: "ui",
    loadComponent: () =>
      import("./showcase/ui/ui-shell.component").then((c) => c.UiShellComponent),
    children: [
      { path: "", redirectTo: "basics", pathMatch: "full" },
      {
        path: "basics",
        loadComponent: () =>
          import("./showcase/ui/basics/basics.component").then((c) => c.BasicsComponent),
      },
      {
        path: "display",
        loadComponent: () =>
          import("./showcase/ui/display/display.component").then((c) => c.DisplayComponent),
      },
      {
        path: "cards",
        loadComponent: () =>
          import("./showcase/ui/cards/cards.component").then((c) => c.CardsComponent),
      },
      {
        path: "layout",
        loadComponent: () =>
          import("./showcase/ui/layout/layout.component").then((c) => c.LayoutComponent),
      },
      {
        path: "progress",
        loadComponent: () =>
          import("./showcase/ui/progress/progress.component").then((c) => c.ProgressComponent),
      },
      {
        path: "container",
        loadComponent: () =>
          import("./showcase/ui/container/container.component").then((c) => c.ContainerComponent),
      },
    ],
  },
  {
    path: "notification",
    loadComponent: () =>
      import("./showcase/notification/notification.component").then((c) => c.NotificationComponent),
  },
  {
    path: "menu",
    loadComponent: () =>
      import("./showcase/menu/menu-shell.component").then((c) => c.MenuShellComponent),
    children: [
      { path: "", redirectTo: "components", pathMatch: "full" },
      {
        path: "components",
        loadComponent: () =>
          import("./showcase/menu/components/components.component").then((c) => c.MenuComponentsComponent),
      },
      {
        path: "navigation",
        loadComponent: () =>
          import("./showcase/menu/navigation/navigation.component").then((c) => c.MenuNavigationComponent),
      },
    ],
  },
  {
    path: "form",
    loadComponent: () =>
      import("./showcase/form/form-shell.component").then((c) => c.FormShellComponent),
    children: [
      { path: "", redirectTo: "inputs", pathMatch: "full" },
      {
        path: "inputs",
        loadComponent: () =>
          import("./showcase/form/inputs/inputs.component").then((c) => c.FormInputsComponent),
      },
      {
        path: "selection",
        loadComponent: () =>
          import("./showcase/form/selection/selection.component").then((c) => c.FormSelectionComponent),
      },
      {
        path: "datetime",
        loadComponent: () =>
          import("./showcase/form/datetime/datetime.component").then((c) => c.FormDatetimeComponent),
      },
      {
        path: "advanced",
        loadComponent: () =>
          import("./showcase/form/advanced/advanced.component").then((c) => c.FormAdvancedComponent),
      },
      {
        path: "example",
        loadComponent: () =>
          import("./showcase/form/example/example.component").then((c) => c.FormExampleComponent),
      },
    ],
  },
  {
    path: "wysiswyg",
    loadComponent: () =>
      import("./showcase/wysiswyg/wysiswyg.component").then((c) => c.WysiswygPage),
  },
  {
    path: "features",
    loadComponent: () =>
      import("./showcase/features/features.component").then((c) => c.FeaturesComponent),
  },
  {
    path: "charts",
    loadComponent: () =>
      import("./showcase/charts/charts.component").then((c) => c.ChartsPage),
  },
  {
    path: "files",
    loadComponent: () =>
      import("./showcase/files/files-shell.component").then((c) => c.FilesShellComponent),
    children: [
      { path: "", redirectTo: "basic", pathMatch: "full" },
      {
        path: "basic",
        loadComponent: () =>
          import("./showcase/files/basic/basic.component").then((c) => c.FilesBasicComponent),
      },
      {
        path: "extended",
        loadComponent: () =>
          import("./showcase/files/extended/extended.component").then((c) => c.FilesExtendedComponent),
      },
    ],
  },
  {
    path: "icons",
    loadComponent: () =>
      import("./showcase/icons/icons-shell.component").then((c) => c.IconsShellComponent),
    children: [
      { path: "", redirectTo: "font", pathMatch: "full" },
      {
        path: "font",
        loadComponent: () =>
          import("./showcase/icons/font/font.component").then((c) => c.IconsFontComponent),
      },
      {
        path: "material",
        loadComponent: () =>
          import("./showcase/icons/material/material.component").then((c) => c.IconsMaterialComponent),
      },
    ],
  },
  {
    path: "calendar",
    loadComponent: () =>
      import("./showcase/calendar/calendar.component").then((c) => c.CalendarComponent),
  },
  {
    path: "utils",
    loadComponent: () =>
      import("./showcase/utils/utils-shell.component").then((c) => c.UtilsShellComponent),
    children: [
      { path: "", redirectTo: "pipes", pathMatch: "full" },
      {
        path: "pipes",
        loadComponent: () =>
          import("./showcase/utils/pipes/pipes.component").then((c) => c.UtilsPipesComponent),
      },
      {
        path: "directives",
        loadComponent: () =>
          import("./showcase/utils/directives/directives.component").then((c) => c.UtilsDirectivesComponent),
      },
      {
        path: "functions",
        loadComponent: () =>
          import("./showcase/utils/functions/functions.component").then((c) => c.UtilsFunctionsComponent),
      },
    ],
  },
  {
    path: "user",
    loadComponent: () =>
      import("./showcase/user/user.component").then((c) => c.UserPage),
  },
  { path: "**", redirectTo: "/home" },
];
```

---

### Task 12: Mettre à jour app.component.ts (menu avec enfants)

**Files:**
- Modify: `src/app/app.component.ts`

- [ ] **Remplacer le contenu de `app.component.ts`**

```typescript
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { NotificationBoxComponent } from "@ta/notification";

import { ThemeConfig } from "./themes/theme.config";
import { ThemeService } from "./themes/theme.service";

interface MenuItem {
  label: string;
  route?: string;
  icon?: string;
  group?: boolean;
  children?: { label: string; route: string }[];
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NotificationBoxComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "Molecules Sandbox";

  private _themeService = inject(ThemeService);

  themes = this._themeService.themes;
  activeTheme = this._themeService.activeTheme;

  menu: MenuItem[] = [
    { label: "Home", route: "/home", icon: "home" },
    { label: "Foundation", group: true },
    { label: "Theme", route: "/theme", icon: "palette" },
    {
      label: "@ta/icons",
      route: "/icons/font",
      icon: "emoji_symbols",
      children: [
        { label: "Font Icons", route: "/icons/font" },
        { label: "Material Icons", route: "/icons/material" },
      ],
    },
    { label: "UI", group: true },
    {
      label: "@ta/ui",
      route: "/ui/basics",
      icon: "widgets",
      children: [
        { label: "Basics", route: "/ui/basics" },
        { label: "Display", route: "/ui/display" },
        { label: "Cards & Lists", route: "/ui/cards" },
        { label: "Layout", route: "/ui/layout" },
        { label: "Progress", route: "/ui/progress" },
        { label: "Container", route: "/ui/container" },
      ],
    },
    { label: "@ta/notification", route: "/notification", icon: "notifications" },
    {
      label: "@ta/menu",
      route: "/menu/components",
      icon: "menu",
      children: [
        { label: "Components", route: "/menu/components" },
        { label: "Navigation", route: "/menu/navigation" },
      ],
    },
    { label: "Forms & Data", group: true },
    {
      label: "@ta/form",
      route: "/form/inputs",
      icon: "edit_note",
      children: [
        { label: "Inputs", route: "/form/inputs" },
        { label: "Selection", route: "/form/selection" },
        { label: "Date & Time", route: "/form/datetime" },
        { label: "Advanced", route: "/form/advanced" },
        { label: "Full Example", route: "/form/example" },
      ],
    },
    { label: "@ta/features", route: "/features", icon: "table_chart" },
    { label: "@ta/charts", route: "/charts", icon: "bar_chart" },
    {
      label: "@ta/files",
      route: "/files/basic",
      icon: "folder",
      children: [
        { label: "Basic", route: "/files/basic" },
        { label: "Extended", route: "/files/extended" },
      ],
    },
    { label: "@ta/wysiswyg", route: "/wysiswyg", icon: "edit_document" },
    { label: "Utilities", group: true },
    { label: "@ta/calendar", route: "/calendar", icon: "calendar_month" },
    {
      label: "@ta/utils",
      route: "/utils/pipes",
      icon: "build",
      children: [
        { label: "Pipes", route: "/utils/pipes" },
        { label: "Directives", route: "/utils/directives" },
        { label: "Functions", route: "/utils/functions" },
      ],
    },
    { label: "@ta/user", route: "/user", icon: "person" },
  ];

  onThemeChange(event: Event): void {
    const name = (event.target as HTMLSelectElement).value;
    const theme = this.themes.find((t: ThemeConfig) => t.name === name);
    if (theme) {
      this._themeService.applyTheme(theme);
    }
  }
}
```

---

### Task 13: Mettre à jour app.component.html (rendu des enfants)

**Files:**
- Modify: `src/app/app.component.html`

- [ ] **Remplacer le contenu de `app.component.html`**

```html
<div class="shell">
  <nav class="sidebar">
    <div class="sidebar-header">{{ this.title }}</div>
    <div class="sidebar-nav">
      @for (item of this.menu; track item.label) {
        @if (item.group) {
          <div class="nav-group">{{ item.label }}</div>
        } @else if (item.children) {
          <a
            [routerLink]="item.route"
            class="nav-item"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: false }"
          >
            <span class="material-icons">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </a>
          @for (child of item.children; track child.label) {
            <a
              [routerLink]="child.route"
              class="nav-item nav-item--child"
              routerLinkActive="active"
            >
              <span>{{ child.label }}</span>
            </a>
          }
        } @else {
          <a
            [routerLink]="item.route"
            class="nav-item"
            routerLinkActive="active"
          >
            <span class="material-icons">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </a>
        }
      }
    </div>
    <div class="sidebar-footer">
      <label class="theme-label">
        <span class="material-icons">palette</span>
        <select
          class="theme-select"
          [value]="this.activeTheme().name"
          (change)="this.onThemeChange($event)"
        >
          @for (theme of this.themes; track theme.name) {
            <option [value]="theme.name">{{ theme.label }}</option>
          }
        </select>
      </label>
    </div>
  </nav>
  <main class="content">
    <router-outlet />
  </main>
</div>

<ta-notification-box></ta-notification-box>
```

---

### Task 14: Mettre à jour app.component.scss (style nav enfants)

**Files:**
- Modify: `src/app/app.component.scss`

- [ ] **Ajouter le style `.nav-item--child` à la fin du fichier existant**

Ajouter après le bloc `.nav-item` existant (conserver tout le SCSS existant) :

```scss
.nav-item--child {
  padding-left: common.get-var(space, xxl);
  @include fonts.fontSizeBody(sm);
  border-left: 2px solid transparent;
  margin-left: common.get-var(space, md);

  &:hover {
    background: common.get-var(surface, hover);
    color: common.get-var(text, primary);
  }

  &.active {
    background: common.get-var(brand, 50);
    color: common.get-var(text, brand);
    font-weight: 600;
    border-left-color: common.get-var(brand, 500);
  }
}
```

---

### Task 15: Vérification build

- [ ] **Lancer le build de l'application**

```bash
ng build Techatome --configuration=development
```

Résultat attendu : build sans erreur TypeScript. Les warnings SCSS DEPRECATION sont normaux.

- [ ] **Vérifier que l'app démarre**

```bash
ng serve Techatome
```

Naviguer vers `http://localhost:4200`. Vérifier :
- La sidebar affiche les groupes avec les items enfants
- `/ui/basics` charge et affiche "Coming Soon"
- `/form/inputs` charge et affiche "Coming Soon"
- `/notification` charge et affiche "Coming Soon"
- Les onglets dans `@ta/ui` sont cliquables et changent l'URL
