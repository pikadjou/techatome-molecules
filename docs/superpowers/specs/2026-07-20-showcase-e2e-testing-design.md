# Tests e2e du Showcase + socle de testabilité générique — Design Spec

**Date:** 2026-07-20
**Status:** Draft (en attente de revue utilisateur)

## Objectif

Mettre en place des tests d'intégration end-to-end (Playwright) qui vérifient les
composants `@ta/*` **tels qu'affichés dans le showcase** (`src/app/showcase/`), et
en extraire un **socle de testabilité réutilisable** que les applications
consommatrices des librairies `@ta/*` peuvent importer.

Deux livrables :
1. Une suite e2e Playwright pilotant le showcase, avec **1 spec par composant `@ta/*`**.
2. Un socle générique : directive `taTestId`, testids par défaut sur les composants
   clés, helpers Playwright (`testComponent()`, page objects) et harness runtime
   (mock providers) — distribués via un nouveau package `@ta/testing`.

## Décisions verrouillées (brainstorming)

| Sujet | Décision |
|-------|----------|
| Portée du « générique » | Helpers e2e partagés **+** harness runtime d'app (testable de façon uniforme) |
| Runner e2e | **Playwright** |
| Stratégie de sélecteurs | Directive `taTestId` (opt-in) dans `@ta/utils` + testids par défaut sur composants clés |
| Cible des tests | Les composants `@ta/*` rendus dans le showcase |
| Granularité | **1 spec par composant `@ta/*`** |
| Mécanisme des specs | **B** — descripteur + runner partagé (`testComponent()`) |
| data-testid en prod | **Toujours présents** (pas de token de bascule) |

## Architecture

### Layout monorepo

```
projects/utils/           → directive taTestId (runtime, déjà dépendance de tout @ta/*)
projects/testing/         → NOUVEAU package @ta/testing
  src/lib/                → harness runtime (mock providers, test module helpers) → import: @ta/testing
  e2e/                    → helpers Playwright (plain TS)                         → import: @ta/testing/e2e
e2e/                      → NOUVEAU dossier racine (projet Playwright)
  playwright.config.ts
  support/                → helpers e2e locaux avant migration vers @ta/testing/e2e
  specs/…                 → 1 fichier .spec.ts par composant (miroir du showcase)
```

Deux contextes de consommation séparés :
- **Runtime Angular** (`@ta/testing`) : importé *dans* le code des apps (mock providers ;
  la directive vit dans `@ta/utils`).
- **Node/Playwright** (`@ta/testing/e2e`) : `testComponent()`, page objects, types de
  descripteur — importés par les fichiers `.spec.ts`. Aucune dépendance Angular ;
  `@playwright/test` en `peerDependency`.

> **À trancher dans le plan :** mécanisme de build de l'entrée `/e2e` (secondary entry
> ng-packagr vs compilation `tsc` dédiée). ng-packagr est orienté Angular ; une entrée
> plain-TS important Playwright peut nécessiter un tsconfig/étape de build séparés.

### Directive `taTestId` (`@ta/utils`)

```ts
@Directive({ selector: '[taTestId]', standalone: true })
export class TaTestIdDirective {
  readonly taTestId = input.required<string>();
  @HostBinding('attr.data-testid') get attr() { return this.taTestId(); }
}
```

- Convention : attribut standard `data-testid`.
- Les composants **interactifs clés** émettent un `data-testid` **par défaut**,
  surchargeable par l'app :
  - `@ta/ui` : `ButtonComponent` (`ta-button`), `ActionButtonComponent`, `LinkComponent`,
    `LayoutModalComponent`, `ExpansionPanelComponent`.
  - `@ta/form-input` : chaque composant d'input (via `TaAbstractInputComponent`, testid
    dérivé de la `key` de l'input : `ta-input-<key>`).
  - `@ta/menu` : `MenuComponent`, `MenuItemComponent`.
- **Toujours présents** en build prod (attributs inertes, pas de token de bascule).

### Descripteur + runner (`@ta/testing/e2e`)

```ts
export type Interaction =
  | { kind: 'click'; assert?: string }
  | { kind: 'type'; value: string; assert?: string }
  | { kind: 'select'; option: string; assert?: string }
  | { kind: 'toggle'; assert?: string }
  | { kind: 'open-overlay'; assert?: string };

export interface ComponentTestDescriptor {
  name: string;              // "Button"
  package: string;           // "ui"
  route: string;             // "/ui/basics"
  testId: string;            // "ta-button"
  interactions?: Interaction[];
  setup?: (page: ShowcasePage) => Promise<void>;   // hook pour cas particuliers
}

export function testComponent(d: ComponentTestDescriptor): void {
  // génère test.describe(d.name) avec :
  //  - test('rend le composant')  → component(testId) visible
  //  - test('a11y smoke')         → optionnel
  //  - un test() par interaction déclarée
}
```

Page objects :
- `AppPage` : base portable (goto, `component(testId)` → `Locator`, `byTestId()`),
  sous-classable par n'importe quelle app consommatrice.
- `ShowcasePage extends AppPage` : navigation sidebar/onglets propre au showcase.

### Config Playwright (racine)

- `playwright.config.ts` : `webServer` lance `yarn start` (showcase sur `:4200`,
  `reuseExistingServer: !process.env.CI`), `baseURL: http://localhost:4200`,
  `testDir: e2e/specs`.
- Projet `chromium` par défaut (firefox/webkit activables).
- Scripts `package.json` : `e2e`, `e2e:ui`, `e2e:headed`.

### Organisation des specs (miroir du showcase)

```
e2e/specs/
  ui/basics/button.spec.ts      → testComponent({ package:'ui', route:'/ui/basics', testId:'ta-button', … })
  ui/basics/badge.spec.ts
  ui/cards/card.spec.ts
  form/inputs/textbox.spec.ts
  menu/components/menu.spec.ts
  …
```

Chaque fichier est minuscule (déclare un descripteur, appelle `testComponent()`),
isolé par composant, sans logique de navigation/assertion dupliquée. Les cas
particuliers passent par le hook `setup`.

### Harness runtime pour les apps (`@ta/testing`)

- Mock providers pour les pages showcase/app nécessitant un backend
  (`provideTestingServer()` stubbant GraphQL/REST via `@ta/server`).
- Helpers de module de test pour les tests unitaires des apps consommatrices.
- La majorité des pages showcase étant purement UI, ce harness n'est requis que pour
  les sections à données.

## Phases de déploiement

| Phase | Contenu | Critère de sortie |
|-------|---------|-------------------|
| **0 — Infra** | Playwright + `playwright.config.ts` + `testComponent()` runner + `ShowcasePage`/`AppPage` + 1 spec démo | `ta-button` vert en local |
| **1 — Testabilité** | Directive `taTestId` dans `@ta/utils` + testids par défaut sur composants interactifs clés | Directive exportée, testids présents dans le DOM du showcase |
| **2 — Package** | Scaffolding `@ta/testing` + entrée `/e2e`, migration des helpers depuis `e2e/support` | `@ta/testing/e2e` importable, specs consomment le package |
| **3 — Couverture** | Génération des specs descripteur section par section (ui → form → menu → files → icons → charts → features → utils → user → calendar → notification → wysiswyg) | 1 spec par composant `@ta/*` du showcase, suite verte |
| **4 — CI + harness app** | Workflow CI e2e + `provideTestingServer()` pour les apps consommatrices | e2e en CI, harness runtime documenté |

## Hors périmètre (YAGNI)

- Tests unitaires Karma des composants `@ta/*` (le repo n'en a pas ; non demandé).
- Tests de régression visuelle / screenshots (peut s'ajouter en Phase 5 plus tard).
- Sélecteurs basés sur les rôles a11y en priorité (rejeté au profit de `taTestId`).
- Couverture des packages backend (`@ta/server`, `@ta/services`, `@ta/capacitor`,
  `@ta/cms`, `@ta/translation`) — non visuels, absents du showcase.

## Risques / points ouverts

1. **Build de l'entrée `/e2e`** (ng-packagr vs tsc) — à résoudre en Phase 2.
2. **Volume Phase 3** (~200+ composants) — mitigé par le mécanisme descripteur ; à
   dérouler section par section, pas d'un bloc.
3. **Composants sans état interactif** (display-only) — le descripteur se limite à
   l'assertion de rendu via testid.
4. **Pages showcase à données** — nécessitent le harness runtime (Phase 4) ou sont
   marquées `setup` custom.
