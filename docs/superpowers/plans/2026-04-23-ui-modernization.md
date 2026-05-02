# UI Modernization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernize the visual polish of all UI and form components — refined shadows, transitions, focus rings, tighter typography — without changing the brand palette or the `--ta-*` CSS custom property system.

**Architecture:** All values flow from `_vars.scss` → CSS custom properties via `generateMap()` → consumed by component SCSS via `common.get-var()`. Token changes in `_vars.scss` cascade globally; component-level changes are localized to their own SCSS file. No hardcoded values anywhere — if a value isn't in the token system yet, add it there first.

**Tech Stack:** Angular 18, SCSS, ng-packagr, CSS custom properties (`--ta-*`), `common.get-var()` mixin

---

## Files touched

| File | What changes |
|---|---|
| `projects/styles/src/style/ta/_vars.scss` | `$radius-base` 10px; `$radius` uses `$radius-base`; `$transition` filled; `$shadow` brand-tinted; `$components.button`/`.label` get `font-weight` + `letter-spacing` |
| `projects/ui/src/lib/components/ui/button/button.component.scss` | cursor, transition, font-weight, letter-spacing, shadow, hover lift, focus ring, border 1.5px on secondary/tertiary |
| `projects/form/form-basic/src/lib/components/input/panel/panel.component.scss` | Fix hardcoded `#a9a9a9`; uppercase panel title; shadow on `.card` |
| `projects/form/form-input/src/lib/components/input/checkbox/checkbox.component.scss` | border-radius 5px; hover brand border; focus ring; transition |
| `projects/form/form-input/src/lib/components/input/radio/radio.component.scss` | border-radius via token; 1.5px border tertiary; hover/focus states; fix invalid `neutral, 900` token |
| `projects/form/form-input/src/lib/components/input/dropdown/dropdown.component.scss` | Trigger styled as input (border 1.5px, radius, focus ring); menu shadow + entrance animation; option hover/selected |
| `projects/form/form-input/src/lib/components/input/search-field/search-field.component.scss` | Border 1.5px on `.input-group`; focus ring brand; hover state |
| `projects/ui/src/lib/components/ui/label/label.component.scss` | font-weight 600; letter-spacing 0.03em |
| `projects/ui/src/lib/components/ui/badge/badge.component.scss` | Replace hardcoded `border-radius: 6px` with token |
| `projects/ui/src/lib/components/ui/expansion-panel/expansion-panel.component.scss` | Replace hardcoded `rgba(0,0,0,0.1)` shadow with token; use radius token |

---

## Task 1 — Global tokens (`_vars.scss`)

**Files:**
- Modify: `projects/styles/src/style/ta/_vars.scss`

- [ ] **Step 1: Change `$radius-base` and update `$radius` to use it**

  In `_vars.scss`, replace:
  ```scss
  $radius-base: 8px !default;
  ```
  with:
  ```scss
  $radius-base: 10px !default;
  ```

  Then replace the `$radius` map:
  ```scss
  // BEFORE
  $radius: map.merge(
    (
      minimal: $space-base * 0.5,
      rounded: $space-base * 1,
      label: $space-base * 2,
      full: $space-base * 5,
    ),
    $radius
  );

  // AFTER
  $radius: map.merge(
    (
      minimal: $radius-base * 0.5,
      rounded: $radius-base,
      label: $radius-base * 2,
      full: $space-base * 5,
    ),
    $radius
  );
  ```
  Result: minimal=5px, rounded=10px, label=20px, full=40px (unchanged).

- [ ] **Step 2: Fill the `$transition` map**

  Replace:
  ```scss
  $transition: () !default;
  ```
  with:
  ```scss
  $transition: map.merge(
    (
      fast: 0.12s ease,
      base: 0.18s ease,
      slow: 0.28s ease,
    ),
    $transition
  );
  ```
  This generates `--ta-transition-fast`, `--ta-transition-base`, `--ta-transition-slow` via the existing `generateTransitions()` call in `_generate.scss`.

- [ ] **Step 3: Update `$shadow` to brand-tinted values**

  Replace the existing `$shadow` map:
  ```scss
  $shadow: map.merge(
    (
      black: (
        sm: 0px 1px 3px 0px rgba(18, 30, 56, 0.08),
        md: 0px 4px 12px 0px rgba(18, 30, 56, 0.10),
        lg: 0px 8px 24px 0px rgba(18, 30, 56, 0.12),
      ),
      brand: (
        sm: 0px 2px 8px 0px rgba(18, 30, 56, 0.14),
        md: 0px 4px 14px 0px rgba(18, 30, 56, 0.20),
        lg: 0px 8px 24px 0px rgba(18, 30, 56, 0.18),
      ),
    ),
    $shadow
  );
  ```

- [ ] **Step 4: Add `font-weight` and `letter-spacing` to `$components.button`**

  In the `$components` map, inside the `button:` section, add after `gap: map.get($space, md),`:
  ```scss
  font-weight: 600,
  letter-spacing: 0.01em,
  ```

- [ ] **Step 5: Add `font-weight` and `letter-spacing` to `$components.label`**

  In the `$components` map, inside the `label:` section, add after `padding-horizontal: map.get($space, md),`:
  ```scss
  font-weight: 600,
  letter-spacing: 0.03em,
  ```

- [ ] **Step 6: Build `@ta/styles` and verify no compile error**

  ```bash
  ng build @ta/styles
  ```
  Expected: build succeeds, no SCSS compilation errors.

- [ ] **Step 7: Commit**

  ```bash
  git add projects/styles/src/style/ta/_vars.scss
  git commit -m "style(tokens): radius 10px, transition map, refined brand shadows"
  ```

---

## Task 2 — Button (`button.component.scss`)

**Files:**
- Modify: `projects/ui/src/lib/components/ui/button/button.component.scss`

- [ ] **Step 1: Rewrite button SCSS**

  Full replacement of `projects/ui/src/lib/components/ui/button/button.component.scss`:
  ```scss
  @use "ta/utils/mixins/flex";
  @use "ta/utils/mixins/common";
  @use "ta/utils/mixins/fonts";

  .button {
    width: 100%;
    border: none;
    border-radius: common.get-var(components, button, radius);
    padding: common.get-var(components, button, padding-vertical)
      common.get-var(components, button, padding-horizontal);

    @include fonts.fontSizeBody(md);
    font-weight: common.get-var(components, button, font-weight);
    letter-spacing: common.get-var(components, button, letter-spacing);

    @include flex.align-center();
    @include flex.justify-center();

    gap: common.get-var(components, button, gap);
    cursor: pointer;
    transition: all common.get-var(transition, base);

    &:focus-visible {
      outline: 2px solid common.get-var(border, brand, primary);
      outline-offset: 2px;
    }

    &.small {
      @include fonts.fontSizeBody(sm);
      padding: common.get-var(components, button, small, padding-vertical)
        common.get-var(components, button, small, padding-horizontal);
    }
    &.large {
      padding: common.get-var(components, button, large, padding-vertical)
        common.get-var(components, button, large, padding-horizontal);
    }
    &.no-border {
      border: none;
    }
    &.disabled,
    &.inactive {
      cursor: not-allowed;
    }

    &.primary {
      color: common.get-var(components, button, primary, color);
      background-color: common.get-var(components, button, primary, background);
      box-shadow: common.get-var(shadow, brand, sm);

      &:hover:not(.disabled):not(.inactive) {
        color: common.get-var(components, button, primary, hover, color);
        background-color: common.get-var(components, button, primary, hover, background);
        border: 1px solid common.get-var(components, button, primary, hover, border);
        box-shadow: common.get-var(shadow, brand, md);
        transform: translateY(-1px);
      }
      &.disabled {
        color: common.get-var(components, button, primary, disabled, color);
        background-color: common.get-var(components, button, primary, disabled, background);
        box-shadow: none;
      }
      &.inactive {
        color: common.get-var(components, button, primary, inactive, color);
        background-color: common.get-var(components, button, primary, inactive, background);
        box-shadow: none;
      }
    }

    &.secondary {
      color: common.get-var(components, button, secondary, color);
      background-color: common.get-var(components, button, secondary, background);
      border: 1.5px solid common.get-var(components, button, secondary, border);
      box-shadow: common.get-var(shadow, black, sm);

      &:hover:not(.disabled):not(.inactive) {
        border-color: common.get-var(components, button, secondary, hover, border);
        box-shadow: common.get-var(shadow, black, md);
        transform: translateY(-1px);
      }
      &.disabled {
        color: common.get-var(components, button, secondary, disabled, color);
        border-color: common.get-var(components, button, secondary, disabled, border);
        box-shadow: none;
      }
      &.inactive {
        border-color: common.get-var(components, button, secondary, inactive, border);
        box-shadow: none;
      }
      ta-font-icon {
        color: common.get-var(components, button, secondary, icon, color);
      }
    }

    &.tertiary {
      color: common.get-var(components, button, tertiary, color);
      background-color: common.get-var(components, button, tertiary, background);
      border: 1.5px solid common.get-var(components, button, tertiary, border);

      &:hover:not(.disabled):not(.inactive) {
        color: common.get-var(components, button, tertiary, hover, color);
        background-color: common.get-var(components, button, tertiary, hover, background);
        border-color: common.get-var(components, button, tertiary, hover, border);
      }
      &.disabled {
        color: common.get-var(components, button, tertiary, disabled, color);
        border-color: common.get-var(components, button, tertiary, disabled, border);
      }
      &.inactive {
        color: common.get-var(components, button, tertiary, inactive, color);
        background-color: common.get-var(components, button, tertiary, inactive, background);
      }
    }
  }

  .circular {
    height: common.get-var(components, button, circular, height);
    width: common.get-var(components, button, circular, width);
    border-radius: common.get-var(components, button, circular, radius);
    padding: common.get-var(components, button, circular, padding);

    &.big {
      height: common.get-var(components, button, circular, big, height);
      width: common.get-var(components, button, circular, big, width);
    }
    &.small {
      height: common.get-var(components, button, circular, small, height);
      width: common.get-var(components, button, circular, small, width);
    }
  }
  ```

- [ ] **Step 2: Build `@ta/ui` and verify**

  ```bash
  ng build @ta/ui
  ```
  Expected: build succeeds.

- [ ] **Step 3: Commit**

  ```bash
  git add projects/ui/src/lib/components/ui/button/button.component.scss
  git commit -m "style(button): transition, hover lift, shadow, focus ring, 1.5px border"
  ```

---

## Task 3 — Form panel (`panel.component.scss`)

**Files:**
- Modify: `projects/form/form-basic/src/lib/components/input/panel/panel.component.scss`

- [ ] **Step 1: Rewrite panel SCSS**

  Full replacement of `projects/form/form-basic/src/lib/components/input/panel/panel.component.scss`:
  ```scss
  @use 'ta/utils/mixins/common';
  @use 'ta/utils/mixins/fonts';

  .with-separator {
    border-bottom: 1px solid common.get-var(border, tertiary);
    padding-bottom: common.get-var(space, lg);
    margin-bottom: common.get-var(space, md);
  }

  .highlight-title {
    .panel-title {
      color: common.get-var(text, brand, primary);
      @include fonts.fontSizeBody(sm, true);
      text-transform: uppercase;
      letter-spacing: 0.07em;
      padding-bottom: common.get-var(space, sm);
      border-bottom: 2px solid common.get-var(border, tertiary);
      margin-bottom: common.get-var(space, md);
    }
  }

  .card {
    border-radius: common.get-var(radius, rounded);
    border: 1px solid common.get-var(border, tertiary);
    padding: common.get-var(space, lg);
    box-shadow: common.get-var(shadow, black, sm);
  }

  .no-title-space {
    .panel-title {
      padding-top: 0;
    }
  }

  .required {
    color: common.get-var(semantic, red);
  }
  ```

- [ ] **Step 2: Build `@ta/form-basic` and verify**

  ```bash
  ng build "@ta/form-basic"
  ```
  Expected: build succeeds.

- [ ] **Step 3: Commit**

  ```bash
  git add projects/form/form-basic/src/lib/components/input/panel/panel.component.scss
  git commit -m "style(panel): remove hardcoded color, uppercase title, shadow on card"
  ```

---

## Task 4 — Checkbox (`checkbox.component.scss`)

**Files:**
- Modify: `projects/form/form-input/src/lib/components/input/checkbox/checkbox.component.scss`

- [ ] **Step 1: Rewrite checkbox SCSS**

  Full replacement of `projects/form/form-input/src/lib/components/input/checkbox/checkbox.component.scss`:
  ```scss
  @use "ta/utils/mixins/common";

  .custom-checkbox {
    border-color: common.get-var(border, tertiary);
    border-radius: 5px;
    transition: border-color common.get-var(transition, fast),
                box-shadow common.get-var(transition, fast);

    &:hover {
      border-color: common.get-var(border, brand, primary);
    }
  }

  .input {
    border-radius: 5px;
    transition: all common.get-var(transition, fast);

    &:checked {
      background-color: common.get-var(surface, brand, primary);
      border-color: common.get-var(surface, brand, primary);
    }

    &:not(:disabled) {
      border-color: common.get-var(border, tertiary);

      &:hover {
        border-color: common.get-var(border, brand, primary);
      }
    }

    &:focus-visible {
      outline: 2px solid common.get-var(border, brand, primary);
      outline-offset: 2px;
      box-shadow: 0 0 0 3px rgba(18, 30, 56, 0.10);
    }
  }
  ```

- [ ] **Step 2: Build `@ta/form-input` and verify**

  ```bash
  ng build "@ta/form-input"
  ```
  Expected: build succeeds.

- [ ] **Step 3: Commit**

  ```bash
  git add projects/form/form-input/src/lib/components/input/checkbox/checkbox.component.scss
  git commit -m "style(checkbox): border-radius 5px, hover/focus brand ring, transition"
  ```

---

## Task 5 — Radio (`radio.component.scss`)

**Files:**
- Modify: `projects/form/form-input/src/lib/components/input/radio/radio.component.scss`

- [ ] **Step 1: Rewrite radio SCSS**

  Full replacement of `projects/form/form-input/src/lib/components/input/radio/radio.component.scss`:
  ```scss
  @use "ta/utils/mixins/fonts";
  @use "ta/utils/mixins/common";

  .radio-label {
    display: block;
    padding-bottom: 0.5em;
  }

  .button-with-icon {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: common.get-var(space, sm);
  }

  .only-icon {
    margin-left: auto;
    margin-right: auto;
  }

  .radio-container {
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;

    .radio-element {
      display: flex;
      height: 50px;
      width: 45%;
      border: 1.5px solid common.get-var(border, tertiary);
      border-radius: common.get-var(radius, rounded);
      box-sizing: border-box;
      align-items: center;
      gap: common.get-var(space, sm);
      justify-content: center;
      color: common.get-var(text, secondary);
      @include fonts.fontSizeBody(md);
      line-height: 28px;
      font-weight: 500;
      cursor: pointer;
      transition: border-color common.get-var(transition, base),
                  box-shadow common.get-var(transition, base);

      app-local-icon {
        opacity: 0.4;
        transition: opacity common.get-var(transition, fast);
      }

      &:hover:not(.disabled) {
        border-color: common.get-var(border, brand, primary);
      }

      &.validated {
        border: 1.5px solid common.get-var(surface, brand, primary);
        box-shadow: 0 0 0 3px rgba(18, 30, 56, 0.10);

        app-local-icon {
          opacity: 1;
        }

        span {
          color: common.get-var(text, primary);
        }
      }

      &.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
  }
  ```
  Note: `neutral, 900` n'existe pas dans la map — remplacé par `text, primary`.

- [ ] **Step 2: Build `@ta/form-input` and verify**

  ```bash
  ng build "@ta/form-input"
  ```
  Expected: build succeeds.

- [ ] **Step 3: Commit**

  ```bash
  git add projects/form/form-input/src/lib/components/input/radio/radio.component.scss
  git commit -m "style(radio): radius token, 1.5px border, hover/focus ring, fix invalid token"
  ```

---

## Task 6 — Dropdown (`dropdown.component.scss`)

**Files:**
- Modify: `projects/form/form-input/src/lib/components/input/dropdown/dropdown.component.scss`

- [ ] **Step 1: Rewrite dropdown SCSS**

  Full replacement of `projects/form/form-input/src/lib/components/input/dropdown/dropdown.component.scss`:
  ```scss
  @use "ta/utils/mixins/common";

  .custom-dropdown-button {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1.5px solid common.get-var(border, tertiary);
    border-radius: common.get-var(radius, rounded);
    transition: border-color common.get-var(transition, base),
                box-shadow common.get-var(transition, base);

    &:hover:not(.disabled) {
      border-color: common.get-var(border, hover, primary);
    }

    &:focus,
    &:focus-within {
      border-color: common.get-var(border, brand, primary);
      box-shadow: 0 0 0 3px rgba(18, 30, 56, 0.10);
      outline: none;
    }

    &.disabled {
      border-color: common.get-var(border, disabled);
      pointer-events: none;
      opacity: 0.6;
    }
  }

  button .selected-value {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .custom-menu {
    padding: 0;
    border-radius: common.get-var(radius, rounded);
    border: 1px solid common.get-var(border, tertiary);
    box-shadow: common.get-var(shadow, black, md);
    animation: dropdownIn common.get-var(transition, base);
  }

  @keyframes dropdownIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .input-search {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: none;
    border-bottom: 1px solid common.get-var(border, tertiary);
    outline: none;

    &:focus {
      border: none;
      border-bottom: 1px solid common.get-var(border, tertiary);
      outline: none;
      box-shadow: none;
    }
  }

  .dropdown-option {
    display: flex;
    align-items: center;
    padding: common.get-var(space, sm) common.get-var(space, md);
    text-align: left;
    border: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    transition: background-color common.get-var(transition, fast);

    .checkmark {
      margin-left: common.get-var(space, sm);
      color: common.get-var(border, brand, primary);
    }

    &:hover {
      background-color: common.get-var(surface, secondary);
    }

    &.selected {
      background-color: common.get-var(surface, tertiary);
      font-weight: 600;
    }

    &.disabled {
      color: common.get-var(neutral, 500);
      cursor: not-allowed;
    }
  }
  ```

- [ ] **Step 2: Build `@ta/form-input` and verify**

  ```bash
  ng build "@ta/form-input"
  ```
  Expected: build succeeds.

- [ ] **Step 3: Commit**

  ```bash
  git add projects/form/form-input/src/lib/components/input/dropdown/dropdown.component.scss
  git commit -m "style(dropdown): focus ring, border token, menu shadow, entrance animation"
  ```

---

## Task 7 — Search field (`search-field.component.scss`)

**Files:**
- Modify: `projects/form/form-input/src/lib/components/input/search-field/search-field.component.scss`

- [ ] **Step 1: Rewrite search-field SCSS**

  Full replacement of `projects/form/form-input/src/lib/components/input/search-field/search-field.component.scss`:
  ```scss
  @use "ta/utils/mixins/flex";
  @use "ta/utils/mixins/common";

  $search-field-size: 44px;
  $search-field-deploy-size: 100%;

  .input-group {
    @include flex.simple-flex();
    @include flex.align-center();
    padding: common.get-var(space, sm);
    gap: common.get-var(space, sm);
    box-sizing: border-box;
    border: 1.5px solid common.get-var(border, tertiary);
    border-radius: common.get-var(radius, rounded);
    transition: border-color common.get-var(transition, base),
                box-shadow common.get-var(transition, base);

    &:hover {
      border-color: common.get-var(border, hover, secondary);
    }

    &.focus {
      border-color: common.get-var(border, brand, primary);
      box-shadow: 0 0 0 3px rgba(18, 30, 56, 0.10);

      ta-font-icon {
        color: common.get-var(icon, brand, primary);
      }
    }

    &.disabled {
      color: common.get-var(text, tertiary);
      opacity: 0.6;

      ta-font-icon {
        color: common.get-var(icon, tertiary);
      }
    }

    .inner-div {
      flex-grow: 1;
    }
  }

  .search-input-container {
    width: 100%;
  }

  .form-control {
    width: 90%;
  }
  ```

- [ ] **Step 2: Build `@ta/form-input` and verify**

  ```bash
  ng build "@ta/form-input"
  ```
  Expected: build succeeds.

- [ ] **Step 3: Commit**

  ```bash
  git add projects/form/form-input/src/lib/components/input/search-field/search-field.component.scss
  git commit -m "style(search-field): border 1.5px token, focus ring, hover state"
  ```

---

## Task 8 — Label UI (`label.component.scss`)

**Files:**
- Modify: `projects/ui/src/lib/components/ui/label/label.component.scss`

- [ ] **Step 1: Add font-weight and letter-spacing to `.label-container`**

  In `projects/ui/src/lib/components/ui/label/label.component.scss`, add to `.label-container`:
  ```scss
  .label-container {
    padding: common.get-var(components, label, padding-vertical) common.get-var(components, label, padding-horizontal);
    @include fonts.fontSizeBody(sm);
    font-weight: common.get-var(components, label, font-weight);
    letter-spacing: common.get-var(components, label, letter-spacing);
    border-radius: common.get-var(components, label, radius);
    border: 1px solid transparent;
    // ... rest unchanged
  }
  ```

- [ ] **Step 2: Build `@ta/ui` and verify**

  ```bash
  ng build @ta/ui
  ```
  Expected: build succeeds.

- [ ] **Step 3: Commit**

  ```bash
  git add projects/ui/src/lib/components/ui/label/label.component.scss
  git commit -m "style(label): font-weight 600 + letter-spacing from tokens"
  ```

---

## Task 9 — Badge UI (`badge.component.scss`)

**Files:**
- Modify: `projects/ui/src/lib/components/ui/badge/badge.component.scss`

- [ ] **Step 1: Replace hardcoded border-radius with token**

  In `projects/ui/src/lib/components/ui/badge/badge.component.scss`, replace:
  ```scss
  .badge-container {
    display: flex;
    width: fit-content;
    padding: common.get-var(space, sm) common.get-var(space, xs);
    @include fonts.fontSizeBody(xs, true);
    border-radius: 6px;       // ← hardcoded
    ...
  }
  ```
  with:
  ```scss
  .badge-container {
    display: flex;
    width: fit-content;
    padding: common.get-var(space, sm) common.get-var(space, xs);
    @include fonts.fontSizeBody(xs, true);
    border-radius: common.get-var(radius, minimal);
    font-weight: 600;
    letter-spacing: 0.03em;
    ...
  }
  ```

- [ ] **Step 2: Build `@ta/ui` and verify**

  ```bash
  ng build @ta/ui
  ```
  Expected: build succeeds.

- [ ] **Step 3: Commit**

  ```bash
  git add projects/ui/src/lib/components/ui/badge/badge.component.scss
  git commit -m "style(badge): radius token, font-weight 600, letter-spacing"
  ```

---

## Task 10 — Expansion panel (`expansion-panel.component.scss`)

**Files:**
- Modify: `projects/ui/src/lib/components/ui/expansion-panel/expansion-panel.component.scss`

- [ ] **Step 1: Replace hardcoded values with tokens**

  Full replacement of `projects/ui/src/lib/components/ui/expansion-panel/expansion-panel.component.scss`:
  ```scss
  @use "ta/utils/mixins/common";

  :host,
  ::ng-deep {
    .mat-content {
      overflow: visible !important;
    }
    .mat-expansion-panel {
      box-shadow: none;
      border-radius: 0px !important;
      border-bottom: 1px solid common.get-var(border, tertiary);
      padding: common.get-var(space, sm) 0;
      background-color: common.get-var(surface, primary);
      transition: box-shadow common.get-var(transition, base),
                  border-radius common.get-var(transition, base);

      &.mat-expanded {
        box-shadow: common.get-var(shadow, black, md);
        border-radius: common.get-var(radius, rounded) !important;
      }
    }
    .mat-expansion-panel-header,
    .mat-expansion-panel-body {
      padding: common.get-var(space, xs) !important;
    }
  }
  ```

- [ ] **Step 2: Build `@ta/ui` and verify**

  ```bash
  ng build @ta/ui
  ```
  Expected: build succeeds.

- [ ] **Step 3: Commit**

  ```bash
  git add projects/ui/src/lib/components/ui/expansion-panel/expansion-panel.component.scss
  git commit -m "style(expansion-panel): replace hardcoded shadow/radius with tokens"
  ```

---

## Task 11 — Build dist & visual verification

- [ ] **Step 1: Build all affected libraries in dependency order**

  ```bash
  ng build @ta/styles && ng build @ta/ui && ng build "@ta/form-input" && ng build "@ta/form-basic"
  ```
  Expected: all four builds succeed with no errors.

- [ ] **Step 2: Start the showcase app**

  ```bash
  yarn start
  ```
  Open `http://localhost:4200` and visually check:
  - Buttons: hover lift, shadow, focus ring visible with Tab key
  - Form inputs: focus ring brand when active
  - Dropdown: menu entrance animation, option hover/selected state
  - Radio elements: border changes on hover and selection
  - Panel cards: shadow, title uppercase
  - Labels/badges: font-weight visible

- [ ] **Step 3: Final commit if dist files are committed in this project**

  ```bash
  git add -u
  git commit -m "style: rebuild dist after UI modernization"
  ```
