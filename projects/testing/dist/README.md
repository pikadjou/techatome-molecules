# @ta/testing

Socle de testabilité end-to-end réutilisable pour les applications construites sur les
librairies `@ta/*`. Fournit :

- un **harness générique** (runtime Angular) pour monter n'importe quel composant `@ta/*`
  à la demande via une route ;
- des **helpers Playwright** (`@ta/testing/e2e`) pour écrire des tests par composant sans
  duplication.

## Deux points d'entrée

| Import | Contexte | Contenu |
|--------|----------|---------|
| `@ta/testing` | Runtime Angular (dans le code de l'app) | `TaHarnessComponent`, `provideHarnessCases`, `HarnessCase`, `harnessRoutes`, `provideTestingServer` |
| `@ta/testing/e2e` | Node / Playwright (dans les `*.spec.ts`) | `testComponent`, `AppPage`, `ShowcasePage`, `byTestId`, types `ComponentTestDescriptor` / `Interaction` |

## 1. Câbler le harness dans l'application

Le harness monte dynamiquement un composant selon le paramètre de route `caseId`.
Chaque « case » est un petit composant standalone rendant un composant `@ta/*` en
configuration canonique, avec la directive `taTestId` (de `@ta/utils`) pour le cibler.

```ts
// cases/ui-button.case.ts
import { Component } from "@angular/core";
import { ButtonComponent } from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

@Component({
  standalone: true,
  imports: [ButtonComponent, TaTestIdDirective],
  template: `<ta-button taTestId="ta-button">Click</ta-button>`,
})
export class UiButtonCase {}
```

```ts
// harness-cases.ts
import { HarnessCase } from "@ta/testing";
import { UiButtonCase } from "./cases/ui-button.case";

export const HARNESS_CASES: HarnessCase[] = [
  { id: "ui-button", component: UiButtonCase },
];
```

```ts
// app.config.ts
import { provideHarnessCases } from "@ta/testing";
import { HARNESS_CASES } from "./e2e-harness/harness-cases";

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideHarnessCases(HARNESS_CASES),
  ],
};
```

```ts
// app.routes.ts — ajouter avant le wildcard
{
  path: "e2e-harness/:caseId",
  loadComponent: () => import("@ta/testing").then((c) => c.TaHarnessComponent),
},
```

> `harnessRoutes("e2e-harness")` est aussi disponible pour générer la route.

Le composant monté est alors accessible sur `/e2e-harness/<id>` (ex. `/e2e-harness/ui-button`).

## 2. Écrire un test par composant

```ts
// e2e/specs/ui/button.spec.ts
import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Button",
  package: "ui",
  route: "/e2e-harness/ui-button",
  testId: "ta-button",
  interactions: [{ kind: "click", assert: "stays-visible" }],
});
```

`testComponent()` génère un test de rendu + un test par interaction déclarée
(`click`, `type`, `select`, `toggle`, `open-overlay`). Le hook `setup` permet de gérer
les cas particuliers.

## 3. Mocker un backend GraphQL / REST

Pour les composants pilotés par des données (grilles, listes, documents…), on
neutralise le backend avec des fixtures déterministes — réutilisable par toute
app `@ta/*`.

```ts
import { test } from "@playwright/test";
import { mockGraphql, mockRest } from "@ta/testing/e2e";

test("liste des projets", async ({ page }) => {
  await mockGraphql(page, {
    ProjectsList: { projects: { items: [{ id: 1, name: "Alpha" }], totalCount: 1 } },
  });
  await mockRest(page, [{ url: "**/api/me", json: { firstname: "John" } }]);

  await page.goto("/projects");
  // … assertions
});
```

`mockGraphql` route les requêtes `**/*graphql*`, matche l'opération par
`operationName` (ou le nom après `query`/`mutation`) et renvoie `{ data }`. Les
opérations non mockées passent au réseau réel (ou à `fallback` si fourni).

## 4. Sous-classer AppPage pour ses propres flux

`AppPage` est portable : chaque app peut l'étendre pour exposer ses parcours métier.

```ts
import { AppPage } from "@ta/testing/e2e";

export class MyAppPage extends AppPage {
  async login(email: string): Promise<void> {
    await this.goto("/login");
    await this.component("ta-input-email").fill(email);
    await this.component("ta-button").click();
  }
}
```

## Configuration Playwright requise

- `playwright.config.ts` avec `webServer` lançant l'app (port dédié conseillé) et
  `tsconfig` pointant vers un tsconfig exposant le path `@ta/testing/e2e`.
- `@playwright/test` en dépendance de dev.

Voir la configuration de référence dans l'application showcase de ce dépôt
(`playwright.config.ts`, `e2e/`).
