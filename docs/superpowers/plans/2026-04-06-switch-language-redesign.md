# SwitchLanguage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign SwitchLanguageComponent with flag icons, two display modes (inline/dropdown), and configurable languages via provider.

**Architecture:** Add flag SVGs to `TaIconType` enum in `@ta/icons`. Extend `TaLanguageConfig` with a `flag` field referencing a `TaIconType`. Rewrite `SwitchLanguageComponent` with a `mode` input (`inline` | `dropdown`). `SwitchLanguageCtaComponent` becomes a thin wrapper delegating to `mode="dropdown"`.

**Tech Stack:** Angular 18, @ta/icons (LocalIcon SVGs), @ta/ui (list components, mat-menu), @ta/translation

---

### Task 1: Add flag SVGs to @ta/icons

**Files:**
- Modify: `projects/icons/src/lib/services/icons.service.ts`

- [ ] **Step 1: Add flag enum values to TaIconType**

In `projects/icons/src/lib/services/icons.service.ts`, add flag entries at the end of the `TaIconType` enum (before the closing `}`):

```typescript
  // ... existing entries ...
  WorkInProgress,
  Xls,
  FlagFr,
  FlagEn,
  FlagNl,
  FlagEs,
  FlagDe,
  FlagIt,
  FlagPt,
}
```

- [ ] **Step 2: Add flag SVG mappings to iconMapping**

Add the SVG strings for each flag at the end of the `iconMapping` object (before the closing `};`). Each flag is a simple 4:3 ratio SVG (640x480) with the country's flag design using flat colors.

```typescript
  // ... existing mappings ...
  [TaIconType.FlagFr]: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#002654"/><rect x="213.3" width="213.4" height="480" fill="#fff"/><rect x="426.7" width="213.3" height="480" fill="#ce1126"/></svg>',
  [TaIconType.FlagEn]: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/><path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/><path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/><path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/></svg>',
  [TaIconType.FlagNl]: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="160" fill="#AE1C28"/><rect y="160" width="640" height="160" fill="#FFF"/><rect y="320" width="640" height="160" fill="#21468B"/></svg>',
  [TaIconType.FlagEs]: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#AA151B" d="M0 0h640v480H0z"/><path fill="#F1BF00" d="M0 120h640v240H0z"/></svg>',
  [TaIconType.FlagDe]: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="160" fill="#000"/><rect y="160" width="640" height="160" fill="#D00"/><rect y="320" width="640" height="160" fill="#FFCE00"/></svg>',
  [TaIconType.FlagIt]: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#009246"/><rect x="213.3" width="213.4" height="480" fill="#fff"/><rect x="426.7" width="213.3" height="480" fill="#ce2b37"/></svg>',
  [TaIconType.FlagPt]: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="256" height="480" fill="#006600"/><rect x="256" width="384" height="480" fill="#FF0000"/><circle cx="256" cy="240" r="64" fill="#FFCC00"/></svg>',
```

- [ ] **Step 3: Verify build**

Run: `npx ng build 2>&1 | grep -i "error" | grep -v "budget"`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add projects/icons/src/lib/services/icons.service.ts
git commit -m "feat(icons): add country flag SVGs to TaIconType"
```

---

### Task 2: Update TaLanguageConfig and SwitchLanguageComponent

**Files:**
- Modify: `projects/user/src/lib/modules/user/components/switch-language/switch-language.component.ts`
- Modify: `projects/user/src/lib/modules/user/components/switch-language/switch-language.component.html`
- Modify: `projects/user/src/lib/modules/user/components/switch-language/switch-language.component.scss`

- [ ] **Step 1: Update component TypeScript**

Replace `projects/user/src/lib/modules/user/components/switch-language/switch-language.component.ts` with:

```typescript
import { NgClass } from "@angular/common";
import { Component, InjectionToken, inject, input } from "@angular/core";

import { TaIconType } from "@ta/icons";
import { FontIconComponent, LocalIconComponent } from "@ta/icons";
import { TaTranslationService, TranslatePipe } from "@ta/translation";
import {
  ListContainerComponent,
  ListElementComponent,
  ListTagComponent,
  ListTitleComponent,
  LoaderComponent,
} from "@ta/ui";

export type TaLanguageConfig = { id: string; name: string; flag: TaIconType };

export const TA_LANGUAGES = new InjectionToken<TaLanguageConfig[]>(
  "TaLanguages",
  {
    factory: () => [
      { id: "fr", name: "Français", flag: TaIconType.FlagFr },
      { id: "en", name: "English", flag: TaIconType.FlagEn },
    ],
  }
);

@Component({
  selector: "ta-switch-language",
  templateUrl: "./switch-language.component.html",
  styleUrls: ["./switch-language.component.scss"],
  standalone: true,
  imports: [
    FontIconComponent,
    ListContainerComponent,
    ListElementComponent,
    ListTagComponent,
    ListTitleComponent,
    LoaderComponent,
    LocalIconComponent,
    NgClass,
    TranslatePipe,
  ],
})
export class SwitchLanguageComponent {
  mode = input<"inline" | "dropdown">("inline");

  private _translateService = inject(TaTranslationService);
  readonly languages = inject(TA_LANGUAGES);

  public activeLanguage = this._translateService.getLanguage();
  public changeLanguageAsked: boolean = false;
  public dropdownOpen = false;

  get activeConfig(): TaLanguageConfig | undefined {
    return this.languages.find((l) => l.id === this.activeLanguage);
  }

  public toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  public changeLanguage(language: string) {
    if (this.activeLanguage !== language) {
      this.activeLanguage = language;
      this.changeLanguageAsked = true;
      this.dropdownOpen = false;
      this._translateService.use(language);
    }
  }
}
```

- [ ] **Step 2: Update component template**

Replace `projects/user/src/lib/modules/user/components/switch-language/switch-language.component.html` with:

```html
<ta-loader [isLoading]="this.changeLanguageAsked">
  @if (this.mode() === 'inline') {
    <div class="language-inline">
      @for (language of this.languages; track language.id) {
        <button
          class="language-chip"
          [ngClass]="{ active: language.id === this.activeLanguage }"
          (click)="this.changeLanguage(language.id)"
        >
          <ta-local-icon [type]="language.flag" size="xs"></ta-local-icon>
          <span class="language-code">{{ language.id.toUpperCase() }}</span>
        </button>
      }
    </div>
  }

  @if (this.mode() === 'dropdown') {
    <div class="language-dropdown">
      <button class="dropdown-trigger" (click)="this.toggleDropdown()">
        @if (this.activeConfig) {
          <ta-local-icon [type]="this.activeConfig.flag" size="xs"></ta-local-icon>
        }
        <span class="trigger-code">{{ this.activeLanguage.toUpperCase() }}</span>
        <ta-font-icon
          name="arrow-big-bottom"
          [ngClass]="{ 'chevron-open': this.dropdownOpen }"
          class="chevron"
        ></ta-font-icon>
      </button>

      @if (this.dropdownOpen) {
        <div class="dropdown-panel">
          <ta-list-container>
            @for (language of this.languages; track language.id) {
              <ta-list-element
                [withSeparator]="false"
                (click)="this.changeLanguage(language.id)"
              >
                <ta-list-title class="d-flex p-space-xs g-space-sm align-center">
                  <ta-local-icon [type]="language.flag" size="xs"></ta-local-icon>
                  {{ language.name | translate }}
                </ta-list-title>
                @if (language.id === this.activeLanguage) {
                  <ta-list-tag>
                    <ta-font-icon
                      name="check-line"
                      class="color-semantic-token-success"
                    ></ta-font-icon>
                  </ta-list-tag>
                }
              </ta-list-element>
            }
          </ta-list-container>
        </div>
      }
    </div>
  }
</ta-loader>
```

- [ ] **Step 3: Update component SCSS**

Replace `projects/user/src/lib/modules/user/components/switch-language/switch-language.component.scss` with:

```scss
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/flex";
@use "ta/utils/mixins/fonts";

// ── Inline mode ──
.language-inline {
  @include flex.flex-row();
  @include flex.align-center();
  gap: common.get-var(space, sm);
}

.language-chip {
  @include flex.flex-column();
  @include flex.align-center();
  gap: common.get-var(space, xs);
  padding: common.get-var(space, sm);
  border-radius: common.get-var(radius, rounded);
  border: 2px solid transparent;
  background: common.get-var(surface, secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 56px;

  &:hover {
    background: common.get-var(surface, hover);
    border-color: common.get-var(border, secondary);
  }

  &.active {
    background: common.get-var(surface, primary);
    border-color: common.get-var(brand, 500);
  }

  .language-code {
    @include fonts.fontSizeBody(sm);
    color: common.get-var(text, secondary);
    font-weight: 600;
    text-transform: uppercase;
  }

  &.active .language-code {
    color: common.get-var(text, brand);
  }

  ta-local-icon {
    width: 28px;
    height: 20px;
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }

  &:hover ta-local-icon,
  &.active ta-local-icon {
    opacity: 1;
  }
}

// ── Dropdown mode ──
.language-dropdown {
  position: relative;
}

.dropdown-trigger {
  @include flex.flex-row();
  @include flex.align-center();
  gap: common.get-var(space, sm);
  padding: common.get-var(space, xs) common.get-var(space, sm);
  border-radius: common.get-var(radius, rounded);
  border: 1px solid common.get-var(border, secondary);
  background: common.get-var(surface, primary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: common.get-var(brand, 500);
    background: common.get-var(surface, hover);
  }

  ta-local-icon {
    width: 24px;
    height: 18px;
    border-radius: 2px;
    overflow: hidden;
  }

  .trigger-code {
    @include fonts.fontSizeBody(sm);
    font-weight: 600;
    color: common.get-var(text, primary);
  }

  .chevron {
    transition: transform 0.2s ease;
    color: common.get-var(icon, primary);
  }

  .chevron-open {
    transform: rotate(180deg);
  }
}

.dropdown-panel {
  position: absolute;
  top: calc(100% + #{common.get-var(space, xs)});
  left: 0;
  min-width: 200px;
  background: common.get-var(surface, primary);
  border: 1px solid common.get-var(border, secondary);
  border-radius: common.get-var(radius, rounded);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow: hidden;

  ta-local-icon {
    width: 24px;
    height: 18px;
    border-radius: 2px;
    overflow: hidden;
  }
}
```

- [ ] **Step 4: Verify build**

Run: `npx ng build 2>&1 | grep -i "error" | grep -v "budget"`
Expected: no errors

- [ ] **Step 5: Commit**

```bash
git add projects/user/src/lib/modules/user/components/switch-language/
git commit -m "feat(user): redesign SwitchLanguageComponent with flag icons and inline/dropdown modes"
```

---

### Task 3: Update SwitchLanguageCtaComponent

**Files:**
- Modify: `projects/user/src/lib/modules/user/components/switch-language/switch-language-cta/switch-language-cta.component.ts`
- Modify: `projects/user/src/lib/modules/user/components/switch-language/switch-language-cta/switch-language-cta.component.html`

- [ ] **Step 1: Simplify CTA component TypeScript**

Replace `projects/user/src/lib/modules/user/components/switch-language/switch-language-cta/switch-language-cta.component.ts` with:

```typescript
import { Component } from "@angular/core";

import { SwitchLanguageComponent } from "../switch-language.component";

@Component({
  selector: "ta-switch-language-cta",
  template: `<ta-switch-language mode="dropdown"></ta-switch-language>`,
  standalone: true,
  imports: [SwitchLanguageComponent],
})
export class SwitchLanguageCtaComponent {}
```

- [ ] **Step 2: Delete the old template file**

Delete `projects/user/src/lib/modules/user/components/switch-language/switch-language-cta/switch-language-cta.component.html` and `switch-language-cta.component.scss` (no longer needed since we use an inline template).

- [ ] **Step 3: Verify build**

Run: `npx ng build 2>&1 | grep -i "error" | grep -v "budget"`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add projects/user/src/lib/modules/user/components/switch-language/switch-language-cta/
git commit -m "refactor(user): SwitchLanguageCtaComponent delegates to SwitchLanguageComponent mode=dropdown"
```

---

### Task 4: Update showcase

**Files:**
- Modify: `src/app/showcase/user/user.component.ts`
- Modify: `src/app/showcase/user/user.component.html`

- [ ] **Step 1: Update showcase component**

Replace `src/app/showcase/user/user.component.ts` with:

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaIconType } from "@ta/icons";
import { TextComponent, TitleComponent } from "@ta/ui";
import {
  SwitchLanguageComponent,
  SwitchLanguageCtaComponent,
  TA_LANGUAGES,
} from "@ta/user";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    PageLayoutComponent,
    SwitchLanguageComponent,
    SwitchLanguageCtaComponent,
    TextComponent,
    TitleComponent,
  ],
  providers: [
    {
      provide: TA_LANGUAGES,
      useValue: [
        { id: "fr", name: "Français", flag: TaIconType.FlagFr },
        { id: "nl", name: "Nederlands", flag: TaIconType.FlagNl },
        { id: "en", name: "English", flag: TaIconType.FlagEn },
        { id: "es", name: "Español", flag: TaIconType.FlagEs },
      ],
    },
  ],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage {}
```

- [ ] **Step 2: Update showcase template**

Replace `src/app/showcase/user/user.component.html` with:

```html
<app-page-layout title="User">
  <div class="sections">
    <!-- ============================== -->
    <!-- SWITCH LANGUAGE — INLINE       -->
    <!-- ============================== -->
    <section>
      <ta-title [level]="2">Switch Language — Inline</ta-title>
      <ta-text size="sm">ta-switch-language mode="inline" — flags with language code</ta-text>
      <div class="demo-row">
        <ta-switch-language></ta-switch-language>
      </div>
    </section>

    <!-- ============================== -->
    <!-- SWITCH LANGUAGE — DROPDOWN     -->
    <!-- ============================== -->
    <section>
      <ta-title [level]="2">Switch Language — Dropdown</ta-title>
      <ta-text size="sm">ta-switch-language mode="dropdown" — flag trigger with panel</ta-text>
      <div class="demo-row">
        <ta-switch-language mode="dropdown"></ta-switch-language>
      </div>
    </section>

    <!-- ============================== -->
    <!-- SWITCH LANGUAGE CTA (WRAPPER)  -->
    <!-- ============================== -->
    <section>
      <ta-title [level]="2">Switch Language CTA</ta-title>
      <ta-text size="sm">ta-switch-language-cta — backward-compatible wrapper (delegates to dropdown mode)</ta-text>
      <div class="demo-row">
        <ta-switch-language-cta></ta-switch-language-cta>
      </div>
    </section>
  </div>
</app-page-layout>
```

- [ ] **Step 3: Verify full build and test in browser**

Run: `npx ng build 2>&1 | grep -i "error" | grep -v "budget"`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/app/showcase/user/
git commit -m "feat(showcase): display SwitchLanguage inline and dropdown modes with flags"
```
