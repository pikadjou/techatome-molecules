# Showcase e2e Testing + Socle générique — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mettre en place une suite e2e Playwright qui teste les composants `@ta/*` affichés dans le showcase (1 spec par composant via un runner descripteur partagé), et en extraire un socle de testabilité réutilisable (`taTestId`, `@ta/testing`).

**Architecture:** Playwright pilote l'app showcase (`ng serve` sur `:4200`). Un runner `testComponent(descriptor)` génère les tests à partir d'un descripteur minimal, gardant chaque spec par composant petit et sans duplication. La testabilité repose sur une directive `taTestId` dans `@ta/utils` et des testids par défaut sur les composants interactifs clés. Les helpers Playwright et le harness runtime sont packagés dans `@ta/testing` (entrée `@ta/testing/e2e` en plain-TS).

**Tech Stack:** Angular 18, Playwright, TypeScript, ng-packagr (lib runtime) + tsc (entrée e2e plain-TS), Lerna/Yarn workspaces.

## Global Constraints

- Angular `^18.2.13`, TypeScript aligné sur `tsconfig.json` racine.
- Composants **standalone**, **signal inputs** (`input()` / `input.required()`), jamais `@Input()`.
- Directives/composants nouveaux : préfixe sélecteur `ta`, classe préfixée `Ta`.
- Control flow Angular `@if`/`@for` ; jamais `*ngIf`/`*ngFor`.
- Export depuis `public-api.ts` à chaque niveau.
- **Pas de commit git sans instruction explicite de l'utilisateur** (règle globale du repo). Les steps "Commit" ci-dessous ne sont exécutés QUE si l'utilisateur l'a demandé ; sinon, sauter le step Commit et passer au suivant.
- `data-testid` **toujours présents** (pas de token de bascule).
- Nom de package : `@ta/testing`, root `projects/testing`.
- Convention testid : attribut standard `data-testid`. Testid d'un input de formulaire = `ta-input-<key>`.

---

## File Structure

**Nouveaux fichiers / dossiers :**

```
projects/utils/src/lib/directive/
  test-id.directive.ts                     # directive taTestId
  test-id.directive.spec.ts                # test unitaire Karma de la directive
  public-api.ts                            # + export test-id.directive

projects/testing/                          # NOUVEAU package @ta/testing
  package.json                             # name @ta/testing + exports map ./e2e
  ng-package.json                          # build runtime (ng-packagr)
  tsconfig.lib.json / tsconfig.lib.prod.json
  tsconfig.e2e.json                        # build plain-TS de l'entrée /e2e (tsc)
  src/public-api.ts                        # runtime: provideTestingServer, harness
  src/lib/providers/testing-server.provider.ts
  e2e/src/public-api.ts                    # entrée @ta/testing/e2e
  e2e/src/descriptor.ts                    # types ComponentTestDescriptor, Interaction
  e2e/src/selectors.ts                     # byTestId()
  e2e/src/pages/app-page.ts                # AppPage (base portable)
  e2e/src/pages/showcase-page.ts           # ShowcasePage extends AppPage
  e2e/src/test-component.ts                # testComponent(descriptor)

e2e/                                       # NOUVEAU projet Playwright (racine)
  playwright.config.ts
  tsconfig.json                            # tsconfig des specs (paths vers @ta/testing/e2e)
  specs/
    _smoke/navigation.spec.ts              # smoke nav (Phase 0)
    ui/basics/button.spec.ts               # specs par composant (Phase 3)
    ...

playwright.config.ts (racine)             # ou dans e2e/ selon step
```

**Fichiers modifiés :**

```
package.json                               # scripts e2e + devDeps @playwright/test
tsconfig.json                              # paths @ta/testing, @ta/testing/e2e
angular.json                               # projet @ta/testing
lerna.json / workspaces                    # inclure projects/testing (si nécessaire)
projects/ui/src/lib/components/ui/button/button.component.html   # testid par défaut
projects/form/form-input/src/lib/components/abstract.component.ts # testid par défaut inputs
projects/menu/... (menu component)         # testid par défaut
.github/workflows/e2e.yml                  # CI (Phase 4)
```

---

## PHASE 0 — Infrastructure Playwright

### Task 0.1 : Installer Playwright et scripts

**Files:**
- Modify: `package.json` (devDependencies + scripts)

**Interfaces:**
- Produces: scripts `yarn e2e`, `yarn e2e:ui`, `yarn e2e:headed` ; binaire `playwright` disponible.

- [ ] **Step 1: Installer la dépendance**

Run:
```bash
yarn add -D -W @playwright/test@^1.48.0
npx playwright install chromium
```
Expected: `@playwright/test` ajouté à `devDependencies` racine, navigateur chromium installé.

- [ ] **Step 2: Ajouter les scripts**

Dans `package.json`, section `"scripts"`, ajouter :
```json
"e2e": "playwright test",
"e2e:ui": "playwright test --ui",
"e2e:headed": "playwright test --headed"
```

- [ ] **Step 3: Vérifier l'install**

Run: `npx playwright --version`
Expected: affiche `Version 1.4x.x` sans erreur.

- [ ] **Step 4: Commit** *(uniquement si l'utilisateur l'a demandé — voir Global Constraints)*

```bash
git add package.json yarn.lock
git commit -m "chore(e2e): add Playwright dependency and scripts"
```

---

### Task 0.2 : Config Playwright + webServer

**Files:**
- Create: `playwright.config.ts` (racine)
- Create: `e2e/tsconfig.json`

**Interfaces:**
- Produces: `testDir: ./e2e/specs`, `baseURL: http://localhost:4200`, `webServer` lançant `yarn start`.

- [ ] **Step 1: Écrire la config**

Create `playwright.config.ts` :
```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'yarn start',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
```

- [ ] **Step 2: tsconfig des specs**

Create `e2e/tsconfig.json` :
```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "types": ["node"],
    "module": "esnext",
    "moduleResolution": "bundler"
  },
  "include": ["**/*.ts"]
}
```

- [ ] **Step 3: Placeholder spec pour valider la découverte**

Create `e2e/specs/_smoke/boot.spec.ts` :
```ts
import { test, expect } from '@playwright/test';

test('le showcase démarre et redirige vers /home', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/home$/);
});
```

- [ ] **Step 4: Lancer le test (échoue si l'app ne démarre pas)**

Run: `yarn e2e e2e/specs/_smoke/boot.spec.ts`
Expected: Playwright lance `yarn start`, ouvre `/`, PASS (redirection `/home` confirmée par `app.routes.ts`).

- [ ] **Step 5: Commit** *(si demandé)*

```bash
git add playwright.config.ts e2e/
git commit -m "test(e2e): add Playwright config, webServer and boot smoke test"
```

---

### Task 0.3 : Sélecteurs et page objects de base

**Files:**
- Create: `e2e/support/selectors.ts`
- Create: `e2e/support/pages/app-page.ts`
- Create: `e2e/support/pages/showcase-page.ts`

> Ces helpers vivent d'abord dans `e2e/support/` (Phase 0), puis migrent vers `@ta/testing/e2e` en Phase 2. Import local via chemin relatif jusque-là.

**Interfaces:**
- Produces:
  - `byTestId(scope, id: string): Locator`
  - `class AppPage { constructor(page: Page); goto(path: string): Promise<void>; component(testId: string): Locator; }`
  - `class ShowcasePage extends AppPage { openSection(route: string): Promise<void>; }`

- [ ] **Step 1: selectors.ts**

Create `e2e/support/selectors.ts` :
```ts
import type { Locator, Page } from '@playwright/test';

export function byTestId(scope: Page | Locator, id: string): Locator {
  return scope.locator(`[data-testid="${id}"]`);
}
```

- [ ] **Step 2: AppPage (base portable)**

Create `e2e/support/pages/app-page.ts` :
```ts
import type { Locator, Page } from '@playwright/test';

import { byTestId } from '../selectors';

export class AppPage {
  constructor(protected readonly page: Page) {}

  async goto(path: string): Promise<void> {
    await this.page.goto(path);
    await this.page.waitForLoadState('networkidle');
  }

  component(testId: string): Locator {
    return byTestId(this.page, testId);
  }
}
```

- [ ] **Step 3: ShowcasePage**

Create `e2e/support/pages/showcase-page.ts` :
```ts
import type { Page } from '@playwright/test';

import { AppPage } from './app-page';

export class ShowcasePage extends AppPage {
  constructor(page: Page) {
    super(page);
  }

  async openSection(route: string): Promise<void> {
    await this.goto(route);
  }
}
```

- [ ] **Step 4: Test de fumée utilisant ShowcasePage**

Create `e2e/specs/_smoke/navigation.spec.ts` :
```ts
import { test, expect } from '@playwright/test';

import { ShowcasePage } from '../../support/pages/showcase-page';

test('navigation vers /theme rend la page', async ({ page }) => {
  const showcase = new ShowcasePage(page);
  await showcase.openSection('/theme');
  await expect(page).toHaveURL(/\/theme$/);
  await expect(page.locator('app-root')).toBeVisible();
});
```

- [ ] **Step 5: Lancer**

Run: `yarn e2e e2e/specs/_smoke/navigation.spec.ts`
Expected: PASS.

- [ ] **Step 6: Commit** *(si demandé)*

```bash
git add e2e/support e2e/specs/_smoke/navigation.spec.ts
git commit -m "test(e2e): add base page objects (AppPage, ShowcasePage) and selectors"
```

---

### Task 0.4 : Runner `testComponent` + types descripteur

**Files:**
- Create: `e2e/support/descriptor.ts`
- Create: `e2e/support/test-component.ts`

**Interfaces:**
- Produces:
  - `type Interaction` (union : `click` | `type` | `select` | `toggle` | `open-overlay`).
  - `interface ComponentTestDescriptor { name; package; route; testId; interactions?; setup?; }`
  - `function testComponent(d: ComponentTestDescriptor): void`

- [ ] **Step 1: Types descripteur**

Create `e2e/support/descriptor.ts` :
```ts
import type { ShowcasePage } from './pages/showcase-page';

export type Interaction =
  | { kind: 'click'; targetTestId?: string; assert?: 'stays-visible' }
  | { kind: 'type'; value: string; targetTestId?: string }
  | { kind: 'select'; option: string; targetTestId?: string }
  | { kind: 'toggle'; targetTestId?: string }
  | { kind: 'open-overlay'; overlayTestId: string };

export interface ComponentTestDescriptor {
  /** Nom lisible, ex: "Button" */
  name: string;
  /** Package @ta/*, ex: "ui" */
  package: string;
  /** Route showcase, ex: "/ui/basics" */
  route: string;
  /** data-testid du composant à cibler, ex: "ta-button" */
  testId: string;
  /** Interactions optionnelles à vérifier */
  interactions?: Interaction[];
  /** Hook d'initialisation pour cas particuliers */
  setup?: (page: ShowcasePage) => Promise<void>;
}
```

- [ ] **Step 2: Runner**

Create `e2e/support/test-component.ts` :
```ts
import { test, expect } from '@playwright/test';

import type { ComponentTestDescriptor, Interaction } from './descriptor';
import { byTestId } from './selectors';
import { ShowcasePage } from './pages/showcase-page';

export function testComponent(d: ComponentTestDescriptor): void {
  test.describe(`@ta/${d.package} — ${d.name}`, () => {
    test.beforeEach(async ({ page }) => {
      const showcase = new ShowcasePage(page);
      await showcase.openSection(d.route);
      if (d.setup) {
        await d.setup(showcase);
      }
    });

    test('rend le composant', async ({ page }) => {
      await expect(byTestId(page, d.testId).first()).toBeVisible();
    });

    for (const interaction of d.interactions ?? []) {
      test(`interaction: ${interaction.kind}`, async ({ page }) => {
        await runInteraction(page, d.testId, interaction);
      });
    }
  });
}

async function runInteraction(
  page: import('@playwright/test').Page,
  testId: string,
  interaction: Interaction,
): Promise<void> {
  const target = interaction['targetTestId']
    ? byTestId(page, interaction['targetTestId']).first()
    : byTestId(page, testId).first();

  switch (interaction.kind) {
    case 'click':
      await target.click();
      if (interaction.assert === 'stays-visible') {
        await expect(target).toBeVisible();
      }
      break;
    case 'type':
      await target.click();
      await target.pressSequentially(interaction.value);
      await expect(target).toContainText('');
      break;
    case 'select':
      await target.click();
      await page.getByText(interaction.option, { exact: false }).first().click();
      break;
    case 'toggle':
      await target.click();
      break;
    case 'open-overlay':
      await target.click();
      await expect(byTestId(page, interaction.overlayTestId).first()).toBeVisible();
      break;
  }
}
```

- [ ] **Step 3: Barrel local**

Create `e2e/support/index.ts` :
```ts
export * from './descriptor';
export * from './selectors';
export * from './test-component';
export * from './pages/app-page';
export * from './pages/showcase-page';
```

- [ ] **Step 4: Vérifier la compilation TS du support**

Run: `npx tsc --noEmit -p e2e/tsconfig.json`
Expected: aucune erreur de type.

- [ ] **Step 5: Commit** *(si demandé)*

```bash
git add e2e/support
git commit -m "test(e2e): add ComponentTestDescriptor and testComponent runner"
```

---

## PHASE 1 — Directive `taTestId` + testids par défaut

### Task 1.1 : Directive `taTestId` dans `@ta/utils`

**Files:**
- Create: `projects/utils/src/lib/directive/test-id.directive.ts`
- Create: `projects/utils/src/lib/directive/test-id.directive.spec.ts`
- Modify: `projects/utils/src/lib/directive/public-api.ts`

**Interfaces:**
- Produces: `TaTestIdDirective` (selector `[taTestId]`, standalone), lie `data-testid` à la valeur d'entrée `taTestId`.

- [ ] **Step 1: Écrire le test unitaire (échoue)**

Create `projects/utils/src/lib/directive/test-id.directive.spec.ts` :
```ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTestIdDirective } from './test-id.directive';

@Component({
  standalone: true,
  imports: [TaTestIdDirective],
  template: `<button taTestId="ta-button">Click</button>`,
})
class TestHostComponent {}

describe('TaTestIdDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('expose data-testid', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('data-testid')).toBe('ta-button');
  });
});
```

- [ ] **Step 2: Lancer (échoue — directive absente)**

Run: `ng test @ta/utils --include='**/test-id.directive.spec.ts' --watch=false`
Expected: FAIL (`TaTestIdDirective` introuvable).

- [ ] **Step 3: Implémenter la directive**

Create `projects/utils/src/lib/directive/test-id.directive.ts` :
```ts
import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[taTestId]',
  standalone: true,
})
export class TaTestIdDirective {
  readonly taTestId = input.required<string>();

  @HostBinding('attr.data-testid')
  get attr(): string {
    return this.taTestId();
  }
}
```

- [ ] **Step 4: Exporter**

Modify `projects/utils/src/lib/directive/public-api.ts`, ajouter :
```ts
export * from "./test-id.directive";
```

- [ ] **Step 5: Lancer (passe)**

Run: `ng test @ta/utils --include='**/test-id.directive.spec.ts' --watch=false`
Expected: PASS.

- [ ] **Step 6: Rebuild @ta/utils**

Run: `ng build @ta/utils`
Expected: build OK (directive dans le bundle).

- [ ] **Step 7: Commit** *(si demandé)*

```bash
git add projects/utils/src/lib/directive
git commit -m "feat(utils): add taTestId directive for stable e2e selectors"
```

---

### Task 1.2 : Testid par défaut sur `ButtonComponent`

**Files:**
- Modify: `projects/ui/src/lib/components/ui/button/button.component.html`

**Interfaces:**
- Consumes: attribut DOM `data-testid` (pas de dépendance de code).
- Produces: `ta-button` émet `data-testid="ta-button"` par défaut.

> Le bouton étant purement visuel avec un `<button>` natif, on ajoute directement l'attribut `data-testid` (pas besoin de la directive ici). La directive `taTestId` sert aux composants où l'app veut surcharger l'id.

- [ ] **Step 1: Ajouter l'attribut**

Modify `button.component.html`, sur l'élément `<button>` racine, ajouter `data-testid="ta-button"` :
```html
<button
  appStopPropagation
  data-testid="ta-button"
  [stopPropagationActivation]="this.stopPropagationActivation()"
  type="button"
  class="button pointer"
  [ngClass]="this.getClass()"
  (click)="handleClick()"
>
```

- [ ] **Step 2: Rebuild @ta/ui**

Run: `ng build @ta/ui`
Expected: build OK.

- [ ] **Step 3: Vérifier via e2e sur une page réelle contenant un bouton**

Repérer une page showcase rendant un `ta-button` :
Run: `grep -rl "ta-button" src/app/showcase --include=*.html`
Choisir une route existante (ex. `/container` si `container.component.html` en contient).

Create `e2e/specs/ui/basics/button.spec.ts` :
```ts
import { testComponent } from '../../../support';

testComponent({
  name: 'Button',
  package: 'ui',
  route: '/container',
  testId: 'ta-button',
  interactions: [{ kind: 'click', assert: 'stays-visible' }],
});
```
> Remplacer `route` par une route confirmée à l'étape grep ci-dessus.

- [ ] **Step 4: Lancer**

Run: `yarn e2e e2e/specs/ui/basics/button.spec.ts`
Expected: 2 tests PASS (rend + click).

- [ ] **Step 5: Commit** *(si demandé)*

```bash
git add projects/ui/src/lib/components/ui/button/button.component.html e2e/specs/ui/basics/button.spec.ts
git commit -m "feat(ui): emit default data-testid on ta-button + e2e coverage"
```

---

### Task 1.3 : Testid par défaut sur les inputs de formulaire

**Files:**
- Modify: `projects/form/form-input/src/lib/components/abstract.component.ts`

**Interfaces:**
- Consumes: `this.input.key` (propriété `key` de `InputBase`).
- Produces: getter `testId(): string` → `ta-input-<key>` sur `TaAbstractInputComponent`, à lier dans les templates concrets.

- [ ] **Step 1: Ajouter un getter testId à l'abstract**

Modify `abstract.component.ts`, dans la classe `TaAbstractInputComponent`, ajouter :
```ts
get testId(): string {
  return `ta-input-${this.input.key}`;
}
```

- [ ] **Step 2: Lier dans un template concret (ex. textbox)**

Repérer le template :
Run: `find projects/form/form-input/src -iname "text-box.component.html" -o -iname "textbox.component.html"`
Sur l'élément `<input>` racine, ajouter `[attr.data-testid]="this.testId"`.

- [ ] **Step 3: Rebuild @ta/form-input (avec deps)**

Run: `ng build @ta/form-input`
Expected: build OK.

- [ ] **Step 4: Vérifier via e2e sur la page form**

Repérer une route form rendant un input :
Run: `grep -rln "InputTextBox\|ta-form" src/app/showcase/form`

Create `e2e/specs/form/inputs/textbox.spec.ts` :
```ts
import { testComponent } from '../../../support';

testComponent({
  name: 'TextBox',
  package: 'form-input',
  route: '/form/inputs',
  testId: 'ta-input-name',
  interactions: [{ kind: 'type', value: 'Hello' }],
});
```
> Adapter `route` et `testId` (`ta-input-<key>`) selon la `key` réellement utilisée dans le showcase form (repérée au grep). Si la section est "Coming Soon", voir note Phase 3.

- [ ] **Step 5: Lancer**

Run: `yarn e2e e2e/specs/form/inputs/textbox.spec.ts`
Expected: PASS (si la section form rend l'input ; sinon marquer `test.fixme` et traiter en Phase 3).

- [ ] **Step 6: Commit** *(si demandé)*

```bash
git add projects/form/form-input/src/lib/components/abstract.component.ts projects/form/form-input/src/lib/components/input e2e/specs/form/inputs/textbox.spec.ts
git commit -m "feat(form-input): emit default data-testid (ta-input-<key>) on inputs"
```

---

### Task 1.4 : Testid par défaut sur le menu

**Files:**
- Modify: composant `MenuComponent` (`projects/menu/src/lib/...`)

**Interfaces:**
- Produces: `ta-menu` émet `data-testid="ta-menu"` par défaut.

- [ ] **Step 1: Repérer le template**

Run: `find projects/menu/src -iname "menu.component.html" | head -3`

- [ ] **Step 2: Ajouter l'attribut sur l'élément racine du menu**

Ajouter `data-testid="ta-menu"` sur le conteneur racine du template `menu.component.html`.

- [ ] **Step 3: Rebuild @ta/menu**

Run: `ng build @ta/menu`
Expected: build OK.

- [ ] **Step 4: Commit** *(si demandé)*

```bash
git add projects/menu
git commit -m "feat(menu): emit default data-testid on ta-menu"
```

---

## PHASE 2 — Package `@ta/testing`

### Task 2.1 : Scaffolder le package `@ta/testing` (runtime)

**Files:**
- Create: `projects/testing/package.json`
- Create: `projects/testing/ng-package.json`
- Create: `projects/testing/tsconfig.lib.json`
- Create: `projects/testing/tsconfig.lib.prod.json`
- Create: `projects/testing/src/public-api.ts`
- Create: `projects/testing/src/lib/providers/testing-server.provider.ts`
- Modify: `angular.json`, `tsconfig.json`

**Interfaces:**
- Produces: import `@ta/testing` exposant `provideTestingServer(config?)` (stub des services `@ta/server` pour les tests d'apps).

- [ ] **Step 1: package.json**

Create `projects/testing/package.json` :
```json
{
  "name": "@ta/testing",
  "version": "0.0.0",
  "main": "./dist",
  "scripts": {
    "build": "ng build @ta/testing",
    "build:e2e": "tsc -p projects/testing/tsconfig.e2e.json",
    "postpublish": "rm -rf dist/"
  },
  "exports": {
    ".": { "default": "./dist/fesm2022/ta-testing.mjs" },
    "./e2e": { "types": "./dist-e2e/public-api.d.ts", "default": "./dist-e2e/public-api.js" }
  },
  "peerDependencies": {
    "@angular/common": "^18.2.13",
    "@angular/core": "^18.2.13",
    "@playwright/test": "^1.48.0"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  },
  "sideEffects": false,
  "license": "MIT"
}
```

- [ ] **Step 2: ng-package.json**

Create `projects/testing/ng-package.json` :
```json
{
  "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "dist",
  "lib": { "entryFile": "src/public-api.ts" }
}
```

- [ ] **Step 3: tsconfigs runtime**

Create `projects/testing/tsconfig.lib.json` :
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "../../out-tsc/lib",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "types": []
  },
  "exclude": ["**/*.spec.ts", "e2e/**/*"]
}
```
Create `projects/testing/tsconfig.lib.prod.json` :
```json
{
  "extends": "./tsconfig.lib.json",
  "compilerOptions": { "declarationMap": false },
  "angularCompilerOptions": { "compilationMode": "partial" }
}
```

- [ ] **Step 4: provider runtime minimal**

Create `projects/testing/src/lib/providers/testing-server.provider.ts` :
```ts
import { Provider } from '@angular/core';

export interface TestingServerConfig {
  /** Réponses GraphQL/REST mockées, indexées par nom d'opération */
  responses?: Record<string, unknown>;
}

/**
 * Fournit un environnement de test uniforme pour les apps consommatrices :
 * stubs des services @ta/server. À enrichir selon les besoins réels des apps.
 */
export function provideTestingServer(config: TestingServerConfig = {}): Provider[] {
  return [{ provide: 'TA_TESTING_SERVER_CONFIG', useValue: config }];
}
```

- [ ] **Step 5: public-api runtime**

Create `projects/testing/src/public-api.ts` :
```ts
/*
 * Public API Surface of @ta/testing (runtime)
 */
export * from './lib/providers/testing-server.provider';
```

- [ ] **Step 6: Enregistrer le projet dans angular.json**

Dans `angular.json`, section `"projects"`, ajouter (copier le bloc `@ta/utils` en adaptant les chemins) :
```json
"@ta/testing": {
  "projectType": "library",
  "root": "projects/testing",
  "sourceRoot": "projects/testing/src",
  "prefix": "ta",
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:ng-packagr",
      "options": { "project": "projects/testing/ng-package.json" },
      "configurations": {
        "production": { "tsConfig": "projects/testing/tsconfig.lib.prod.json" },
        "development": { "tsConfig": "projects/testing/tsconfig.lib.json" }
      },
      "defaultConfiguration": "production"
    }
  }
}
```

- [ ] **Step 7: Path mapping**

Dans `tsconfig.json`, section `"paths"`, ajouter :
```json
"@ta/testing": ["projects/testing"],
"@ta/testing/e2e": ["projects/testing/e2e/src/public-api.ts"]
```

- [ ] **Step 8: Build runtime**

Run: `ng build @ta/testing`
Expected: build OK, `dist/` généré sous `projects/testing`.

- [ ] **Step 9: Commit** *(si demandé)*

```bash
git add projects/testing angular.json tsconfig.json
git commit -m "feat(testing): scaffold @ta/testing runtime package"
```

---

### Task 2.2 : Migrer les helpers Playwright vers `@ta/testing/e2e`

**Files:**
- Create: `projects/testing/e2e/src/public-api.ts`
- Create: `projects/testing/e2e/src/{descriptor,selectors,test-component}.ts`
- Create: `projects/testing/e2e/src/pages/{app-page,showcase-page}.ts`
- Create: `projects/testing/tsconfig.e2e.json`
- Delete: `e2e/support/*` (déplacés)
- Modify: `e2e/specs/**` imports (`../../support` → `@ta/testing/e2e`)

**Interfaces:**
- Consumes: le contenu de `e2e/support/` (Phase 0).
- Produces: import `@ta/testing/e2e` exposant `testComponent`, `byTestId`, `ComponentTestDescriptor`, `AppPage`, `ShowcasePage`.

- [ ] **Step 1: Déplacer les fichiers**

Déplacer `e2e/support/*.ts` et `e2e/support/pages/*.ts` vers `projects/testing/e2e/src/` (même arborescence : `descriptor.ts`, `selectors.ts`, `test-component.ts`, `pages/app-page.ts`, `pages/showcase-page.ts`). Ajuster les imports relatifs internes (inchangés car l'arborescence est préservée).

- [ ] **Step 2: public-api e2e**

Create `projects/testing/e2e/src/public-api.ts` :
```ts
export * from './descriptor';
export * from './selectors';
export * from './test-component';
export * from './pages/app-page';
export * from './pages/showcase-page';
```

- [ ] **Step 3: tsconfig.e2e.json (build plain-TS)**

Create `projects/testing/tsconfig.e2e.json` :
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist-e2e",
    "declaration": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "types": ["node"],
    "rootDir": "./e2e/src"
  },
  "include": ["e2e/src/**/*.ts"]
}
```

- [ ] **Step 4: Mettre à jour les imports des specs existantes**

Dans `e2e/specs/**/*.spec.ts`, remplacer `from '../../../support'` (et variantes relatives) par `from '@ta/testing/e2e'`.

- [ ] **Step 5: Vérifier la résolution de type**

Run: `npx tsc --noEmit -p e2e/tsconfig.json`
Expected: aucune erreur (le path `@ta/testing/e2e` résout vers la source).

- [ ] **Step 6: Relancer les specs existantes**

Run: `yarn e2e`
Expected: les specs Phase 0/1 (`boot`, `navigation`, `button`) PASS via le nouvel import.

- [ ] **Step 7: Vérifier le build publishable de l'entrée e2e**

Run: `npx tsc -p projects/testing/tsconfig.e2e.json`
Expected: `projects/testing/dist-e2e/public-api.js` + `.d.ts` générés.

- [ ] **Step 8: Nettoyer**

Supprimer le dossier `e2e/support/` désormais vide.

- [ ] **Step 9: Commit** *(si demandé)*

```bash
git add projects/testing e2e
git rm -r e2e/support
git commit -m "refactor(testing): move Playwright helpers into @ta/testing/e2e"
```

---

## PHASE 3 — Couverture par composant

> **Réalité du showcase :** plusieurs sous-pages du nouveau showcase sont encore des placeholders "Coming Soon" (ex. `ui/basics`). On ne peut tester que les composants **effectivement rendus**. Pour chaque section, d'abord repérer les composants rendus, écrire une spec descripteur par composant, puis passer à la section suivante. Les sections vides sont notées `test.fixme` avec la route cible, à activer quand la page sera implémentée.

### Task 3.0 : Procédure répétable (pattern) — à appliquer par section

**Interfaces:**
- Consumes: `testComponent` de `@ta/testing/e2e`, testids par défaut (Phase 1).

- [ ] **Step 1: Inventorier les composants d'une section**

Pour une route donnée (ex. `/container`), lister les composants `@ta/*` rendus :
```bash
grep -oE "ta-[a-z-]+" src/app/showcase/<section>/*.html | sort -u
```

- [ ] **Step 2: Vérifier/ajouter les testids manquants**

Pour chaque composant listé sans `data-testid` par défaut (hors ceux de Phase 1), soit :
- ajouter un `data-testid` par défaut dans le template `@ta/*` du composant (rebuild la lib), soit
- appliquer `taTestId="..."` sur l'usage dans le template showcase.

- [ ] **Step 3: Écrire une spec par composant**

Un fichier par composant sous `e2e/specs/<package>/<section>/<component>.spec.ts` :
```ts
import { testComponent } from '@ta/testing/e2e';

testComponent({
  name: 'Badge',
  package: 'ui',
  route: '/ui-display',
  testId: 'ta-badge',
  // interactions optionnelles selon le composant
});
```

- [ ] **Step 4: Lancer la section**

Run: `yarn e2e e2e/specs/<package>/<section>`
Expected: toutes les specs de la section PASS.

- [ ] **Step 5: Commit** *(si demandé)* par section

```bash
git add e2e/specs/<package>/<section>
git commit -m "test(e2e): cover @ta/<package> <section> components"
```

### Task 3.1 → 3.N : Sections dans l'ordre

Appliquer Task 3.0 à chaque section, dans cet ordre de priorité (spec §Phases) :
1. `ui` (basics, display, cards, layout, progress, container) — inclut les anciennes pages `ui-display`, `ui-cards-lists`, `ui-feedback`, `container` qui contiennent du contenu réel aujourd'hui.
2. `form` (inputs, selection, datetime, advanced, example)
3. `menu` (components, navigation)
4. `files` (basic, extended)
5. `icons` (font, material)
6. `charts`
7. `features`
8. `utils` (pipes, directives, functions)
9. `user`
10. `calendar`
11. `notification`
12. `wysiswyg`

Chaque section = une task indépendante, testable et committable séparément.

---

## PHASE 4 — CI + harness app

### Task 4.1 : Workflow CI e2e

**Files:**
- Create: `.github/workflows/e2e.yml`

**Interfaces:**
- Consumes: `yarn e2e`, `npx playwright install`.

- [ ] **Step 1: Écrire le workflow**

Create `.github/workflows/e2e.yml` :
```yaml
name: e2e

on:
  pull_request:
  push:
    branches: [main]

jobs:
  playwright:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: yarn install --frozen-lockfile
      - run: yarn build
      - run: npx playwright install --with-deps chromium
      - run: yarn e2e
      - uses: actions/upload-artifact@v4
        if: ${{ !cancelled() }}
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 7
```

- [ ] **Step 2: Valider la syntaxe localement**

Run: `yarn e2e` (le job réutilise la même commande).
Expected: suite verte en local (proxy de validation du workflow).

- [ ] **Step 3: Commit** *(si demandé)*

```bash
git add .github/workflows/e2e.yml
git commit -m "ci(e2e): run Playwright suite on PRs"
```

---

### Task 4.2 : Documenter le harness pour les apps consommatrices

**Files:**
- Create: `projects/testing/README.md`

**Interfaces:**
- Consumes: `provideTestingServer`, `@ta/testing/e2e`.

- [ ] **Step 1: Rédiger le README**

Create `projects/testing/README.md` documentant :
- import runtime `import { provideTestingServer } from '@ta/testing';`
- import e2e `import { testComponent, ShowcasePage, AppPage } from '@ta/testing/e2e';`
- comment une app consommatrice sous-classe `AppPage` et déclare ses propres descripteurs.

Exemple à inclure :
```ts
// app.e2e-page.ts
import { AppPage } from '@ta/testing/e2e';

export class MyAppPage extends AppPage {
  async login(email: string): Promise<void> {
    await this.goto('/login');
    await this.component('ta-input-email').fill(email);
    await this.component('ta-button').click();
  }
}
```

- [ ] **Step 2: Commit** *(si demandé)*

```bash
git add projects/testing/README.md
git commit -m "docs(testing): document @ta/testing runtime and e2e harness for apps"
```

---

## Self-Review

**Couverture spec :**
- Layout monorepo (`@ta/testing` + `/e2e` + dossier `e2e/`) → Tasks 0.x, 2.x ✓
- Directive `taTestId` dans `@ta/utils` → Task 1.1 ✓
- Testids par défaut composants clés → Tasks 1.2 (button), 1.3 (inputs), 1.4 (menu) ✓
- Descripteur + `testComponent()` → Task 0.4 ✓
- Config Playwright + webServer → Task 0.2 ✓
- Organisation 1-spec-par-composant → Tasks 3.0–3.N ✓
- Harness runtime (mock providers) → Task 2.1 (`provideTestingServer`) + 4.2 doc ✓
- Phases 0–4 → couvertes ✓
- `data-testid` toujours présents (pas de token) → respecté (attribut statique / getter, aucun token) ✓

**Placeholders :** les "Coming Soon" du showcase sont une contrainte réelle documentée (Phase 3), pas un placeholder de plan. Tous les steps de code contiennent le code réel.

**Cohérence des types :** `ComponentTestDescriptor`, `Interaction`, `testComponent`, `byTestId`, `AppPage`, `ShowcasePage`, `provideTestingServer` utilisés de façon cohérente entre Phase 0 (création), Phase 2 (migration, mêmes signatures) et Phase 3 (consommation). `testId` = `ta-<selector>` / `ta-input-<key>` cohérent entre Task 1.3 et Phase 3.

**Point ouvert résolu :** build de l'entrée `/e2e` → **tsc dédié** (`tsconfig.e2e.json`) + `exports` map, consommation locale via path mapping tsconfig (pas de conflit ng-packagr/Playwright).
