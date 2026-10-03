# Vitrine `@ta/*` — Phase 0 : fondation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire la machinerie qui rend possible une page de vitrine par composant — génération des métadonnées d'API et des extraits de code depuis les sources, page générique, registre, navigation — et la prouver sur trois composants pilotes.

**Architecture:** Un script Node lit les sources `projects/*` avec l'API compilateur TypeScript et émet trois fichiers TypeScript (API, extraits de code, couverture). Une page Angular unique, paramétrée par la route `/:pkg/:component`, assemble ces données avec des composants d'exemple chargés paresseusement depuis un registre. Le même registre alimente le harness E2E, ce qui supprime le besoin d'un second catalogue.

**Tech Stack:** Angular 18.2 (standalone, signal inputs, `@if`/`@for`), TypeScript 5.4.5 (API compilateur, déjà présent), Node 22 (`node --test`, runner intégré), Playwright 1.48, SCSS avec les mixins `@ta/styles`.

**Spec:** `docs/superpowers/specs/2026-09-07-showcase-vitrine-complete-design.md`

## Global Constraints

- **Angular** : composants `standalone: true`, `ChangeDetectionStrategy.OnPush`, inputs par `input()` / `input.required()` — jamais `@Input()`. Flux de contrôle `@if` / `@for` / `@switch`, jamais `*ngIf` / `*ngFor`. Préfixe `this.` dans les templates (`this.method()`, `this.property`).
- **Injection** : fonction `inject()`, jamais l'injection par constructeur. Services et champs privés préfixés `_`.
- **Ordre des imports**, séparés par une ligne vide : Angular → bibliothèques externes → `@ta/*` → relatifs.
- **SCSS** : `@use "ta/utils/mixins/common"` et consorts ; toute couleur, espacement et police par `common.get-var()`. Jamais de valeur en dur.
- **Aucune modification fonctionnelle des composants documentés.** Seule exception autorisée par la spec : l'ajout du champ `load` à `HarnessCase` dans `@ta/testing` (tâche 1).
- **Karma est inutilisable** dans ce dépôt (`projects/utils/src/lib/utils/object.spec.ts` porte des erreurs TypeScript préexistantes qui bloquent `ng test`). La validation passe par `node --test`, `ng build` et Playwright.
- **Playwright** : serveur dédié sur le port **4300** (`playwright.config.ts`), jamais 4200 qui est souvent occupé.
- **Barils chargés par Playwright** : toujours des re-exports nommés explicites (`export { X } from "./x"`), jamais `export * from "./x"` — le loader Playwright ne re-exporte pas les noms quand la chaîne traverse un module purement typé.
- **Commits** : ce dépôt interdit tout `git commit` sans demande explicite de l'utilisateur. Chaque tâche se termine par un **point de contrôle** (commandes de vérification + message de commit suggéré), pas par un commit automatique.
- **Répertoire de travail** : `C:\Techatome\techatome-molecules`. Shell PowerShell ; les commandes ci-dessous sont données en syntaxe compatible.

---

## Structure des fichiers

### Générateur (Node pur, testable sans navigateur)

| Fichier | Responsabilité |
|---|---|
| `scripts/showcase-metadata/packages.mjs` | Résoudre les paquets `@ta/*` depuis `tsconfig.json`, suivre les re-exports depuis `public-api.ts`, lister les sources |
| `scripts/showcase-metadata/build.mjs` | Assembler les métadonnées : parcourir les paquets, parser, résoudre l'héritage, calculer la couverture |
| `scripts/showcase-metadata/build.test.mjs` | Tests d'intégration du générateur sur le vrai dépôt |
| `scripts/showcase-metadata/parse-api.mjs` | AST TypeScript → classes, sélecteurs, inputs / outputs / méthodes, alias, JSDoc |
| `scripts/showcase-metadata/inherit.mjs` | Remonter les chaînes `extends` et fusionner les membres hérités |
| `scripts/showcase-metadata/parse-demos.mjs` | AST des `*.demo.ts` → templates désindentés, résumés, titres d'exemples |
| `scripts/showcase-metadata/emit.mjs` | Rendu déterministe des trois fichiers TypeScript générés |
| `scripts/generate-showcase-metadata.mjs` | Point d'entrée CLI, mode `--check` |
| `scripts/showcase-metadata/*.test.mjs` | Tests `node --test` (lancés par motif glob : sur ce poste `node --test <répertoire>` traite le chemin comme un module et échoue) |
| `scripts/showcase-metadata/__fixtures__/` | Sources d'exemple pour les tests |

### Application

| Fichier | Responsabilité |
|---|---|
| `src/app/showcase/demo.types.ts` | Contrats `DemoExample`, `ComponentDemo` |
| `src/app/showcase/registry.ts` | Liste des démos, chargement paresseux |
| `src/app/showcase/registry.guards.ts` | Gardes `canMatch` pour les routes paramétrées |
| `src/app/showcase/generated/api-metadata.ts` | **Généré** — `TA_API` |
| `src/app/showcase/generated/demo-sources.ts` | **Généré** — `DEMO_SOURCES`, `DEMO_INDEX` |
| `src/app/showcase/generated/coverage.ts` | **Généré** — `COVERAGE` |
| `src/app/showcase/component-page/api-table.component.*` | Tableau d'API, membres propres et hérités |
| `src/app/showcase/component-page/example-block.component.*` | Un exemple : rendu, bascule de code, copie |
| `src/app/showcase/component-page/component-page.component.*` | Page `/:pkg/:component` |
| `src/app/showcase/package-index/package-index.component.*` | Page `/:pkg` |
| `src/app/e2e-harness/registry-harness-cases.ts` | `harnessCasesFromRegistry()` |
| `src/app/showcase/demos/ui/ta-button.demo.ts` | Pilote — inputs à union de littéraux |
| `src/app/showcase/demos/ui/ta-card.demo.ts` | Pilote — projection de contenu |
| `src/app/showcase/demos/form-input/ta-input-textbox.demo.ts` | Pilote — alias et héritage |

### Bibliothèque

| Fichier | Responsabilité |
|---|---|
| `projects/testing/src/lib/harness/harness-case.ts` | Ajout du champ `load` |
| `projects/testing/src/lib/harness/harness.component.ts` | Résolution paresseuse |

---

## Task 1: Chargement paresseux des cas harness

Sans ce changement, alimenter `provideHarnessCases()` depuis le registre importerait les 183 démos au démarrage de l'application. La campagne E2E précédente a déjà documenté ce piège : « les cases sont importées eagerly via `provideHarnessCases` → une erreur de type/import casse le boot de l'app ».

**Files:**
- Modify: `projects/testing/src/lib/harness/harness-case.ts`
- Modify: `projects/testing/src/lib/harness/harness.component.ts`
- Modify: `src/app/e2e-harness/harness-cases.ts`
- Test: `e2e/specs/harness/lazy-case.spec.ts`

**Interfaces:**
- Consumes: rien.
- Produces: `HarnessCase.load?: () => Promise<Type<unknown>>`, consommé par `harnessCasesFromRegistry()` en tâche 11.

- [ ] **Step 1: Écrire la spec Playwright qui échoue**

Créer `e2e/specs/harness/lazy-case.spec.ts` :

```ts
import { expect, test } from "@playwright/test";

/**
 * Vérifie le mécanisme de chargement paresseux du harness lui-même, dont dépend
 * tout le catalogue de démos de la vitrine.
 */
test("un cas déclaré avec `load` monte son composant", async ({ page }) => {
  await page.goto("/e2e-harness/lazy-smoke");

  await expect(page.getByTestId("harness-root")).toBeVisible();
  await expect(page.locator("ta-button")).toBeVisible();
});

test("un identifiant inconnu affiche l'état introuvable", async ({ page }) => {
  await page.goto("/e2e-harness/identifiant-qui-nexiste-pas");

  await expect(page.getByTestId("harness-not-found")).toBeVisible();
});
```

- [ ] **Step 2: Lancer la spec pour la voir échouer**

```powershell
npx playwright test e2e/specs/harness/lazy-case.spec.ts
```

Attendu : le premier test échoue — `harness-not-found` s'affiche parce que le cas `lazy-smoke` n'existe pas. Le second passe déjà.

- [ ] **Step 3: Étendre le contrat `HarnessCase`**

Dans `projects/testing/src/lib/harness/harness-case.ts`, remplacer l'interface :

```ts
export interface HarnessCase {
  /** Identifiant unique utilisé dans l'URL (/e2e-harness/:caseId), ex: "ui-button" */
  id: string;
  /** Libellé lisible optionnel */
  label?: string;
  /**
   * Composant standalone monté directement. Exclusif avec `load`.
   * Les applications existantes ne renseignent que ce champ.
   */
  component?: Type<unknown>;
  /**
   * Chargement paresseux du composant. Exclusif avec `component`. Permet à un
   * catalogue de plusieurs centaines d'entrées de ne rien importer au démarrage.
   */
  load?: () => Promise<Type<unknown>>;
}
```

- [ ] **Step 4: Résoudre paresseusement dans `TaHarnessComponent`**

Remplacer intégralement le corps de `projects/testing/src/lib/harness/harness.component.ts` :

```ts
import { NgComponentOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  Type,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";

import { map } from "rxjs";

import { TA_HARNESS_CASES } from "./harness-case";

/**
 * Monte dynamiquement un composant @ta/* selon le paramètre de route `caseId`,
 * en le cherchant dans les cas fournis via `provideHarnessCases`.
 * Réutilisable par n'importe quelle app consommatrice des librairies @ta/*.
 *
 * Un cas portant `component` est résolu de façon synchrone, comme auparavant ;
 * un cas portant `load` est chargé à la demande.
 */
@Component({
  selector: "ta-harness",
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    @if (this.component(); as cmp) {
      <div data-testid="harness-root">
        <ng-container *ngComponentOutlet="cmp"></ng-container>
      </div>
    } @else if (this.notFound()) {
      <div data-testid="harness-not-found">Case introuvable</div>
    } @else if (this.loadFailed()) {
      <div data-testid="harness-load-error">Échec du chargement du cas</div>
    } @else {
      <div data-testid="harness-loading">Chargement…</div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaHarnessComponent {
  private _cases = inject(TA_HARNESS_CASES);

  private _caseId = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((params) => params.get("caseId") ?? "")),
    { initialValue: "" }
  );

  private _case = computed(() => this._cases.find((c) => c.id === this._caseId()) ?? null);

  /**
   * Résultat de la résolution paresseuse, mémorisé avec l'identifiant qui l'a
   * produit. `component: null` signale un échec définitif pour ce cas.
   */
  private _lazy = signal<{ id: string; component: Type<unknown> | null } | null>(null);

  readonly component = computed<Type<unknown> | null>(() => {
    const found = this._case();
    if (!found) {
      return null;
    }
    if (found.component) {
      return found.component;
    }
    const lazy = this._lazy();
    return lazy?.id === found.id ? lazy.component : null;
  });

  readonly notFound = computed(() => this._case() === null);

  /**
   * Le cas existe mais son composant ne viendra jamais : `load()` a échoué, ou le
   * cas est mal formé (ni `component` ni `load`). Sans cet état, la page resterait
   * figée sur « Chargement… » indéfiniment.
   */
  readonly loadFailed = computed(() => {
    const found = this._case();
    const lazy = this._lazy();
    return !!found && !found.component && lazy?.id === found.id && lazy.component === null;
  });

  constructor() {
    effect(
      () => {
        const found = this._case();
        if (!found || found.component) {
          return;
        }
        const id = found.id;

        if (!found.load) {
          // Cas mal formé : ni composant direct, ni chargeur.
          this._lazy.set({ id, component: null });
          return;
        }

        void found
          .load()
          .then((component) => this._lazy.set({ id, component }))
          .catch((error: unknown) => {
            console.error(`[ta-harness] échec du chargement du cas "${id}"`, error);
            this._lazy.set({ id, component: null });
          });
      },
      { allowSignalWrites: true }
    );
  }
}
```

Le chemin synchrone est intact : un cas portant `component` ne passe jamais par l'effet, donc les 176 tests E2E existants ne changent pas de comportement.

- [ ] **Step 5: Enregistrer le cas témoin**

Dans `src/app/e2e-harness/harness-cases.ts`, ajouter en fin de tableau `HARNESS_CASES` :

```ts
  // Témoin permanent du mécanisme de chargement paresseux, dont dépend le
  // catalogue de démos de la vitrine. Ne pas supprimer.
  {
    id: "lazy-smoke",
    label: "Chargement paresseux (témoin)",
    load: () => import("./cases/ui-button.case").then((m) => m.UiButtonCase),
  },
```

- [ ] **Step 6: Reconstruire `@ta/testing` et relancer la spec**

```powershell
npx ng build @ta/testing
npx playwright test e2e/specs/harness/lazy-case.spec.ts
```

Attendu : 2 tests verts.

- [ ] **Step 7: Vérifier la non-régression du harness existant**

```powershell
npx playwright test e2e/specs
```

Attendu : la totalité de la suite existante reste verte (176 tests au dernier jalon, plus les 2 nouveaux).

- [ ] **Step 8: Point de contrôle**

Commandes vertes : `ng build @ta/testing`, `playwright test e2e/specs`.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(testing): permettre le chargement paresseux d'un cas harness`

---

## Task 2: Résolution des paquets et des sources publiques

**Files:**
- Create: `scripts/showcase-metadata/packages.mjs`
- Create: `scripts/showcase-metadata/packages.test.mjs`
- Create: `scripts/showcase-metadata/__fixtures__/barrel/public-api.ts`
- Create: `scripts/showcase-metadata/__fixtures__/barrel/alpha.ts`
- Create: `scripts/showcase-metadata/__fixtures__/barrel/sub/public-api.ts`
- Create: `scripts/showcase-metadata/__fixtures__/barrel/sub/beta.ts`

**Interfaces:**
- Consumes: rien.
- Produces:
  - `REPO_ROOT: string`
  - `listPackages(repoRoot?): { name: string; short: string; dir: string; publicApi: string }[]`
  - `collectPublicFiles(entryFile: string): string[]`
  - `collectAllSources(dir: string): string[]`

- [ ] **Step 1: Écrire les fixtures**

`scripts/showcase-metadata/__fixtures__/barrel/public-api.ts` :

```ts
export * from "./alpha";
export * from "./sub";
```

`scripts/showcase-metadata/__fixtures__/barrel/alpha.ts` :

```ts
export const alpha = 1;
```

`scripts/showcase-metadata/__fixtures__/barrel/sub/public-api.ts` :

```ts
export { beta } from "./beta";
```

`scripts/showcase-metadata/__fixtures__/barrel/sub/beta.ts` :

```ts
export const beta = 2;
```

- [ ] **Step 2: Écrire le test qui échoue**

`scripts/showcase-metadata/packages.test.mjs` :

```js
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

import { collectAllSources, collectPublicFiles, listPackages, REPO_ROOT } from "./packages.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

test("listPackages ne retient que les paquets @ta/* présents sur le disque", () => {
  const names = listPackages().map((p) => p.name);

  assert.ok(names.includes("@ta/ui"), "@ta/ui doit être listé");
  assert.ok(names.includes("@ta/form-input"), "@ta/form-input doit être listé");
  // Déclaré dans tsconfig.json mais absent du disque et de git.
  assert.ok(!names.includes("@ta/calendar"), "@ta/calendar ne doit pas être listé");
  // Entrée de sous-chemin, pas un paquet.
  assert.ok(!names.includes("@ta/testing/e2e"), "les sous-chemins sont écartés");
  // Outillage sans runtime documentable.
  assert.ok(!names.includes("@ta/eslint-config"), "l'outillage est écarté");
});

test("listPackages expose un nom court utilisable en segment de route", () => {
  const ui = listPackages().find((p) => p.name === "@ta/ui");

  assert.equal(ui.short, "ui");
  assert.equal(ui.publicApi, path.join(REPO_ROOT, "projects", "ui", "src", "public-api.ts"));
});

test("collectAllSources écarte mocks, specs et stories", () => {
  const ui = listPackages().find((p) => p.name === "@ta/ui");

  const files = collectAllSources(ui.dir);

  assert.ok(files.length > 0, "des sources doivent être trouvées");
  // Le dépôt écrit `__mock__` au singulier dans trois paquets et `__mocks__` au
  // pluriel dans @ta/ui : les deux graphies doivent être écartées.
  assert.equal(
    files.filter((f) => f.includes("__mocks__") || f.includes("__mock__")).length,
    0,
    "aucun fichier de mock ne doit être indexé"
  );
  assert.equal(
    files.filter((f) => /\.(spec|stories)\.ts$/.test(f)).length,
    0,
    "ni fichier de test ni story"
  );
});

test("collectPublicFiles suit `export *` et `export { }`", () => {
  const entry = path.join(HERE, "__fixtures__", "barrel", "public-api.ts");

  const files = collectPublicFiles(entry).map((f) => path.relative(path.dirname(entry), f));

  assert.deepEqual(files.sort(), [
    "alpha.ts",
    "public-api.ts",
    path.join("sub", "beta.ts"),
    path.join("sub", "public-api.ts"),
  ].sort());
});
```

- [ ] **Step 3: Lancer le test pour le voir échouer**

```powershell
node --test scripts/showcase-metadata/packages.test.mjs
```

Attendu : `ERR_MODULE_NOT_FOUND` sur `./packages.mjs`.

- [ ] **Step 4: Écrire l'implémentation**

`scripts/showcase-metadata/packages.mjs` :

```js
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Racine du dépôt, déduite de l'emplacement de ce fichier. */
export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

/** Paquets déclarés mais hors périmètre de la vitrine. */
const EXCLUDED = new Set([
  "@ta/eslint-config",
  "@ta/prettier-config",
  "@ta/styles",
  "@ta/testing",
]);

/** Lit tsconfig.json en tolérant les commentaires que JSON.parse refuse. */
export function readTsconfigPaths(repoRoot = REPO_ROOT) {
  const raw = fs.readFileSync(path.join(repoRoot, "tsconfig.json"), "utf8");
  const stripped = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
  return JSON.parse(stripped).compilerOptions?.paths ?? {};
}

/**
 * Paquets @ta/* documentables : présents sur le disque, avec un public-api.
 * Un paquet déclaré dans tsconfig mais absent (cas de @ta/calendar) est ignoré
 * silencieusement — c'est la tâche 12 qui nettoie la déclaration morte.
 */
export function listPackages(repoRoot = REPO_ROOT) {
  const packages = [];
  for (const [name, targets] of Object.entries(readTsconfigPaths(repoRoot))) {
    if (!name.startsWith("@ta/")) continue;
    if (name.split("/").length !== 2) continue; // écarte "@ta/testing/e2e"
    if (EXCLUDED.has(name)) continue;

    const dir = path.resolve(repoRoot, targets[0]);
    const publicApi = path.join(dir, "src", "public-api.ts");
    if (!fs.existsSync(publicApi)) continue;

    packages.push({ name, short: name.slice("@ta/".length), dir, publicApi });
  }
  return packages.sort((a, b) => a.name.localeCompare(b.name));
}

const RE_EXPORT = /export\s+(?:\*|\{[^}]*\})\s+from\s+["'](\.[^"']+)["']/g;

/** Suit récursivement les re-exports relatifs depuis un fichier baril. */
export function collectPublicFiles(entryFile) {
  const seen = new Set();
  const stack = [path.resolve(entryFile)];

  while (stack.length > 0) {
    const file = stack.pop();
    if (seen.has(file) || !fs.existsSync(file)) continue;
    seen.add(file);

    const text = fs.readFileSync(file, "utf8");
    for (const match of text.matchAll(RE_EXPORT)) {
      const base = path.resolve(path.dirname(file), match[1]);
      const candidates = [`${base}.ts`, path.join(base, "public-api.ts"), path.join(base, "index.ts")];
      const resolved = candidates.find((c) => fs.existsSync(c));
      if (resolved) stack.push(resolved);
    }
  }
  return [...seen].sort();
}

const SKIP_DIRS = new Set(["node_modules", "dist", "__mock__", "__mocks__", ".angular"]);

/**
 * Tous les .ts d'un paquet. Sert à indexer les classes de base — `TaBaseComponent`
 * ou `TaAbstractInputComponent` ne sont pas forcément atteignables depuis un
 * public-api, alors que leurs membres doivent apparaître comme hérités.
 */
export function collectAllSources(dir) {
  const files = [];
  const stack = [path.join(dir, "src")];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!fs.existsSync(current)) continue;

    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) stack.push(full);
        continue;
      }
      if (!entry.name.endsWith(".ts")) continue;
      if (/\.(spec|stories)\.ts$/.test(entry.name)) continue;
      files.push(full);
    }
  }
  return files.sort();
}
```

- [ ] **Step 5: Lancer le test pour le voir passer**

```powershell
node --test scripts/showcase-metadata/packages.test.mjs
```

Attendu : 4 tests verts.

- [ ] **Step 6: Point de contrôle**

Message suggéré : `feat(showcase): résoudre les paquets @ta/* et leurs sources publiques`

---

## Task 3: Parseur d'API — sélecteurs, inputs, outputs

Le dépôt mélange les styles de guillemets : 154 fichiers écrivent `selector: "ta-x"`, 52 écrivent `selector: 'ta-x'`. C'est la raison pour laquelle ce parseur passe par l'AST TypeScript et non par des expressions régulières.

**Files:**
- Create: `scripts/showcase-metadata/parse-api.mjs`
- Create: `scripts/showcase-metadata/parse-api.test.mjs`

**Interfaces:**
- Consumes: rien.
- Produces:
  - `parseSource(filePath: string, text: string, relativePath: string): ParsedClass[]`
  - `ParsedClass = { className, kind, selector?, doc?, extendsName?, file, members }`
  - `ParsedMember = { name, propertyName, kind, type, default?, required, doc? }`
  - `getAngularDecorator(node)`, `literalProp(objectLiteral, key)` — réutilisés par `parse-demos.mjs` en tâche 5.

- [ ] **Step 1: Écrire le test qui échoue**

`scripts/showcase-metadata/parse-api.test.mjs` :

```js
import assert from "node:assert/strict";
import { test } from "node:test";

import { parseSource } from "./parse-api.mjs";

const BUTTON = `
import { Component, input, output } from "@angular/core";

/** Bouton d'action. */
@Component({ selector: "ta-button", standalone: true, template: "" })
export class ButtonComponent {
  state = input<TaState>("classic");
  type = input<"primary" | "secondary" | "tertiary" | "danger">("primary");
  size = input<"small" | "medium" | "large">("medium");
  icon = input<string | null>(null);
  action = output<void>();
}
`;

const CARD = `
import { Component, input, output } from '@angular/core';

@Component({ selector: 'ta-card', standalone: true, template: '' })
export class CardComponent {
  directionCard = input<'vertical' | 'horizontal' | null>(null);
  click = output<any>();
}
`;

const ABSTRACT = `
import { Directive, input } from "@angular/core";

@Directive()
export class TaAbstractInputComponent<C, T> {
  inputModel = input.required<C>({ alias: 'input' });
  standaloneMode = input<boolean>(false, { alias: 'standalone' });
}
`;

const LEGACY_OUTPUT = `
import { Component, EventEmitter, Output } from "@angular/core";

@Component({ selector: "ta-legacy", standalone: true, template: "" })
export class LegacyComponent {
  @Output() closeEvent = new EventEmitter<string>();
}
`;

test("lit le sélecteur, la doc et les inputs à guillemets doubles", () => {
  const [cls] = parseSource("button.component.ts", BUTTON, "projects/ui/button.component.ts");

  assert.equal(cls.className, "ButtonComponent");
  assert.equal(cls.kind, "component");
  assert.equal(cls.selector, "ta-button");
  assert.equal(cls.doc, "Bouton d'action.");
  assert.equal(cls.file, "projects/ui/button.component.ts");

  const type = cls.members.find((m) => m.name === "type");
  assert.equal(type.kind, "input");
  assert.equal(type.type, `"primary" | "secondary" | "tertiary" | "danger"`);
  assert.equal(type.default, `"primary"`);
  assert.equal(type.required, false);

  const action = cls.members.find((m) => m.name === "action");
  assert.equal(action.kind, "output");
  assert.equal(action.type, "void");
});

test("lit indifféremment les guillemets simples", () => {
  const [cls] = parseSource("card.component.ts", CARD, "projects/ui/card.component.ts");

  assert.equal(cls.selector, "ta-card");
  assert.equal(cls.members.find((m) => m.name === "directionCard").type, `'vertical' | 'horizontal' | null`);
});

test("résout les alias et distingue les inputs requis", () => {
  const [cls] = parseSource("abstract.ts", ABSTRACT, "projects/form/abstract.ts");

  const model = cls.members.find((m) => m.name === "input");
  assert.equal(model.propertyName, "inputModel");
  assert.equal(model.required, true);
  assert.equal(model.default, undefined);

  const standalone = cls.members.find((m) => m.name === "standalone");
  assert.equal(standalone.propertyName, "standaloneMode");
  assert.equal(standalone.required, false);
  assert.equal(standalone.default, "false");
});

test("reconnaît les @Output() hérités du style décorateur", () => {
  const [cls] = parseSource("legacy.component.ts", LEGACY_OUTPUT, "projects/ui/legacy.component.ts");

  const out = cls.members.find((m) => m.name === "closeEvent");
  assert.equal(out.kind, "output");
  assert.equal(out.type, "string");
});

test("compte les déclarations de la classe, constructeur exclu", () => {
  const source = `
    import { Component } from "@angular/core";

    @Component({ selector: "ta-vide", standalone: true, template: "" })
    export class VideComponent {}

    @Component({ selector: "ta-non-classe", standalone: true, template: "" })
    export class NonClasseComponent {
      public typeItem!: { item: string };
      constructor() {}
    }
  `;

  const [vide, nonClasse] = parseSource("a.ts", source, "projects/ui/a.ts");

  // Un conteneur de projection pure n'a rien déclaré : ce n'est pas un angle mort.
  assert.equal(vide.declarationCount, 0);

  // Une propriété publique sans initialiseur échappe au parseur : elle doit être
  // comptée pour que la couverture la signale au lieu de la taire.
  assert.equal(nonClasse.declarationCount, 1);
  assert.equal(nonClasse.members.length, 0);
});

test("expose les accesseurs publics et masque les privés", () => {
  const source = `
    import { Component } from "@angular/core";

    @Component({ selector: "ta-accessors", standalone: true, template: "" })
    export class AccessorsComponent {
      /** Étoiles à peindre. */
      get stars(): number[] { return []; }
      private get hidden(): string { return ""; }
      get selection(): string { return ""; }
      set selection(value: string) {}
    }
  `;

  const [cls] = parseSource("a.ts", source, "projects/ui/a.ts");

  const stars = cls.members.find((m) => m.name === "stars");
  assert.equal(stars.kind, "property");
  assert.equal(stars.type, "number[]");
  assert.equal(stars.doc, "Étoiles à peindre.");

  assert.equal(cls.members.find((m) => m.name === "hidden"), undefined);

  // Une paire get/set ne produit qu'une entrée.
  assert.equal(cls.members.filter((m) => m.name === "selection").length, 1);
});

test("mémorise la classe de base pour la résolution d'héritage", () => {
  const source = `
    import { Component } from "@angular/core";
    @Component({ selector: "ta-input-textbox", standalone: true, template: "" })
    export class TextBoxComponent extends TaAbstractInputComponent<InputTextBox, string> {}
  `;

  const [cls] = parseSource("t.ts", source, "projects/form/t.ts");

  assert.equal(cls.extendsName, "TaAbstractInputComponent");
});
```

- [ ] **Step 2: Lancer le test pour le voir échouer**

```powershell
node --test scripts/showcase-metadata/parse-api.test.mjs
```

Attendu : `ERR_MODULE_NOT_FOUND` sur `./parse-api.mjs`.

- [ ] **Step 3: Écrire l'implémentation**

`scripts/showcase-metadata/parse-api.mjs` :

```js
import ts from "typescript";

const ANGULAR_DECORATORS = {
  Component: "component",
  Directive: "directive",
  Pipe: "pipe",
  Injectable: "service",
};

/** Méthodes de cycle de vie Angular : bruit dans un tableau d'API. */
const LIFECYCLE = new Set([
  "ngOnInit", "ngOnChanges", "ngOnDestroy", "ngDoCheck",
  "ngAfterContentInit", "ngAfterContentChecked",
  "ngAfterViewInit", "ngAfterViewChecked", "ngViewDidLoad",
]);

/** Décorateur Angular porté par une classe, avec son objet de métadonnées. */
export function getAngularDecorator(node) {
  for (const decorator of ts.getDecorators?.(node) ?? []) {
    if (!ts.isCallExpression(decorator.expression)) continue;
    const name = decorator.expression.expression.getText();
    if (!(name in ANGULAR_DECORATORS)) continue;

    const arg = decorator.expression.arguments[0];
    return {
      kind: ANGULAR_DECORATORS[name],
      meta: arg && ts.isObjectLiteralExpression(arg) ? arg : null,
    };
  }
  return null;
}

/** Valeur d'une propriété chaîne d'un objet littéral, quels que soient les guillemets. */
export function literalProp(objectLiteral, key) {
  if (!objectLiteral) return undefined;

  for (const prop of objectLiteral.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    if (prop.name.getText().replace(/['"]/g, "") !== key) continue;

    const init = prop.initializer;
    if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) {
      return init.text;
    }
  }
  return undefined;
}

function readJsDoc(node) {
  const comments = ts
    .getJSDocCommentsAndTags(node)
    .filter(ts.isJSDoc)
    .map((doc) =>
      typeof doc.comment === "string" ? doc.comment : ts.getTextOfJSDocComment(doc.comment) ?? ""
    )
    .filter(Boolean);

  const joined = comments.join(" ").replace(/\s+/g, " ").trim();
  return joined || undefined;
}

function hasDecorator(node, name) {
  return (ts.getDecorators?.(node) ?? []).some(
    (d) => ts.isCallExpression(d.expression) && d.expression.expression.getText() === name
  );
}

function isIdentifierNamed(node, name) {
  return ts.isIdentifier(node) && node.text === name;
}

/** Reconnaît une propriété d'API. Retourne null pour tout le reste. */
function readMember(member, sourceFile) {
  if (!ts.isPropertyDeclaration(member) || !member.initializer) return null;
  if (!ts.isIdentifier(member.name)) return null;

  const propertyName = member.name.text;
  if (propertyName.startsWith("_")) return null;

  const init = member.initializer;

  // @Output() x = new EventEmitter<T>()
  if (ts.isNewExpression(init) && init.expression.getText() === "EventEmitter") {
    if (!hasDecorator(member, "Output")) return null;
    return {
      name: propertyName,
      propertyName,
      kind: "output",
      type: init.typeArguments?.[0]?.getText(sourceFile) ?? "void",
      required: false,
      doc: readJsDoc(member),
    };
  }

  if (!ts.isCallExpression(init)) return null;

  const callee = init.expression;
  const type = init.typeArguments?.[0]?.getText(sourceFile) ?? "void";
  const isRequiredInput =
    ts.isPropertyAccessExpression(callee) &&
    isIdentifierNamed(callee.expression, "input") &&
    callee.name.text === "required";

  let kind;
  let required = false;
  let defaultNode;
  let optionsNode;

  if (isIdentifierNamed(callee, "input")) {
    kind = "input";
    defaultNode = init.arguments[0];
    optionsNode = init.arguments[1];
  } else if (isRequiredInput) {
    kind = "input";
    required = true;
    optionsNode = init.arguments[0]; // un input requis n'a pas de valeur par défaut
  } else if (isIdentifierNamed(callee, "output")) {
    // `output()` sans argument de type est un OutputEmitterRef<void>.
    kind = "output";
  } else {
    return null;
  }

  const alias =
    optionsNode && ts.isObjectLiteralExpression(optionsNode)
      ? literalProp(optionsNode, "alias")
      : undefined;

  return {
    name: alias ?? propertyName,
    propertyName,
    kind,
    type,
    default: defaultNode ? defaultNode.getText(sourceFile) : undefined,
    required,
    doc: readJsDoc(member),
  };
}

function readMethod(member, sourceFile) {
  if (!ts.isMethodDeclaration(member) || !ts.isIdentifier(member.name)) return null;

  const name = member.name.text;
  if (name.startsWith("_") || LIFECYCLE.has(name)) return null;

  const isPrivate = (member.modifiers ?? []).some(
    (m) => m.kind === ts.SyntaxKind.PrivateKeyword || m.kind === ts.SyntaxKind.ProtectedKeyword
  );
  if (isPrivate) return null;

  const params = member.parameters.map((p) => p.getText(sourceFile)).join(", ");
  const returnType = member.type ? member.type.getText(sourceFile) : "void";

  return {
    name,
    propertyName: name,
    kind: "method",
    type: `(${params}) => ${returnType}`,
    required: false,
    doc: readJsDoc(member),
  };
}

/**
 * Accesseur `get` ou `set` public. Le dépôt en compte 34 composants ; les ignorer
 * amputerait silencieusement leur tableau d'API.
 */
function readAccessor(member, sourceFile) {
  if (!ts.isGetAccessorDeclaration(member) && !ts.isSetAccessorDeclaration(member)) return null;
  if (!ts.isIdentifier(member.name)) return null;

  const name = member.name.text;
  if (name.startsWith("_")) return null;

  const isHidden = (member.modifiers ?? []).some(
    (m) => m.kind === ts.SyntaxKind.PrivateKeyword || m.kind === ts.SyntaxKind.ProtectedKeyword
  );
  if (isHidden) return null;

  // Le type vient de l'annotation de retour du getter, ou du paramètre du setter.
  let type = "unknown";
  if (ts.isGetAccessorDeclaration(member) && member.type) {
    type = member.type.getText(sourceFile);
  } else if (ts.isSetAccessorDeclaration(member) && member.parameters[0]?.type) {
    type = member.parameters[0].type.getText(sourceFile);
  }

  return {
    name,
    propertyName: name,
    kind: "property",
    type,
    required: false,
    doc: readJsDoc(member),
  };
}

function extendsName(node) {
  for (const clause of node.heritageClauses ?? []) {
    if (clause.token !== ts.SyntaxKind.ExtendsKeyword) continue;
    const expression = clause.types[0]?.expression;
    if (expression && ts.isIdentifier(expression)) return expression.text;
  }
  return undefined;
}

/** Classes décorées Angular d'un fichier source, avec leurs membres d'API. */
export function parseSource(filePath, text, relativePath) {
  const sourceFile = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true);
  const classes = [];

  const visit = (node) => {
    if (ts.isClassDeclaration(node) && node.name) {
      const decorator = getAngularDecorator(node);
      if (decorator) {
        const members = [];
        // Une paire `get`/`set` de même nom ne doit produire qu'une entrée ;
        // le dépôt en compte deux (`isFilterOpen`, `selection`).
        const seen = new Set();
        for (const member of node.members) {
          const parsed =
            readMember(member, sourceFile) ??
            readMethod(member, sourceFile) ??
            readAccessor(member, sourceFile);
          if (!parsed || seen.has(parsed.name)) {
            continue;
          }
          seen.add(parsed.name);
          members.push(parsed);
        }

        classes.push({
          className: node.name.text,
          kind: decorator.kind,
          selector: literalProp(decorator.meta, "selector"),
          doc: readJsDoc(node),
          extendsName: extendsName(node),
          file: relativePath,
          members,
          // Nombre de déclarations écrites dans la classe, constructeur exclu.
          // Une classe qui déclare quelque chose sans qu'aucun membre n'en
          // ressorte est un angle mort du parseur ; une classe au corps vide
          // — les conteneurs de projection pure — n'en est pas un.
          declarationCount: node.members.filter((m) => !ts.isConstructorDeclaration(m)).length,
        });
      }
    }
    ts.forEachChild(node, visit);
  };

  ts.forEachChild(sourceFile, visit);
  return classes;
}
```

- [ ] **Step 4: Lancer le test pour le voir passer**

```powershell
node --test scripts/showcase-metadata/parse-api.test.mjs
```

Attendu : 7 tests verts.

- [ ] **Step 5: Vérifier sur les vraies sources**

```powershell
node -e "import('./scripts/showcase-metadata/parse-api.mjs').then(async (m)=>{const fs=await import('node:fs');const f='projects/ui/src/lib/components/ui/button/button.component.ts';const [c]=m.parseSource(f,fs.readFileSync(f,'utf8'),f);console.log(c.selector, c.members.map(x=>x.name+':'+x.kind).join(' '))})"
```

Attendu, exactement :

```
ta-button state:input type:input size:input icon:input options:input stopPropagationActivation:input action:output handleClick:method getClass:method
```

`options` est déclaré sur plusieurs lignes (`input<{ … } | null>(null)`) : sa
présence prouve que le parseur lit bien les arguments de type multilignes.
`handleClick` et `getClass` sont des méthodes publiques réelles du composant —
le tableau d'API les range dans leur propre section.

- [ ] **Step 6: Point de contrôle**

Message suggéré : `feat(showcase): extraire l'API des composants depuis l'AST TypeScript`

---

## Task 4: Résolution de l'héritage

50 composants étendent `TaBaseComponent`, 21 `TaAbstractInputComponent`, 7 `TaAbstractGridComponent`, 5 `BaseChartComponent`. Sans cette tâche, la page de `ta-input-textbox` n'afficherait pas les inputs `input` et `standalone`, pourtant obligatoires à l'usage.

**Files:**
- Create: `scripts/showcase-metadata/inherit.mjs`
- Create: `scripts/showcase-metadata/inherit.test.mjs`

**Interfaces:**
- Consumes: `ParsedClass` de la tâche 3.
- Produces: `resolveInheritance(classes: ParsedClass[]): ParsedClass[]` — chaque classe reçoit les membres de ses ancêtres, marqués `inheritedFrom`.

- [ ] **Step 1: Écrire le test qui échoue**

`scripts/showcase-metadata/inherit.test.mjs` :

```js
import assert from "node:assert/strict";
import { test } from "node:test";

import { resolveInheritance } from "./inherit.mjs";

const member = (name, extra = {}) => ({
  name,
  propertyName: name,
  kind: "input",
  type: "string",
  required: false,
  ...extra,
});

test("ajoute les membres des ancêtres en les marquant", () => {
  const classes = [
    { className: "TextBoxComponent", extendsName: "TaAbstractInputComponent", members: [member("space")] },
    { className: "TaAbstractInputComponent", extendsName: "TaBaseComponent", members: [member("input", { required: true })] },
    { className: "TaBaseComponent", extendsName: undefined, members: [member("cssClass")] },
  ];

  const [textbox] = resolveInheritance(classes);

  assert.deepEqual(textbox.members.map((m) => m.name), ["space", "input", "cssClass"]);
  assert.equal(textbox.members[0].inheritedFrom, undefined);
  assert.equal(textbox.members[1].inheritedFrom, "TaAbstractInputComponent");
  assert.equal(textbox.members[2].inheritedFrom, "TaBaseComponent");
});

test("la classe fille l'emporte sur un membre de même nom", () => {
  const classes = [
    { className: "Child", extendsName: "Parent", members: [member("size", { type: "'lg'" })] },
    { className: "Parent", extendsName: undefined, members: [member("size", { type: "string" })] },
  ];

  const [child] = resolveInheritance(classes);

  assert.equal(child.members.length, 1);
  assert.equal(child.members[0].type, "'lg'");
  assert.equal(child.members[0].inheritedFrom, undefined);
});

test("un ancêtre absent de l'index est ignoré sans planter", () => {
  const classes = [{ className: "Orphan", extendsName: "InconnuAuBataillon", members: [member("a")] }];

  const [orphan] = resolveInheritance(classes);

  assert.deepEqual(orphan.members.map((m) => m.name), ["a"]);
});

test("un cycle d'héritage ne provoque pas de boucle infinie", () => {
  const classes = [
    { className: "A", extendsName: "B", members: [member("a")] },
    { className: "B", extendsName: "A", members: [member("b")] },
  ];

  const [a] = resolveInheritance(classes);

  assert.deepEqual(a.members.map((m) => m.name), ["a", "b"]);
});
```

- [ ] **Step 2: Lancer le test pour le voir échouer**

```powershell
node --test scripts/showcase-metadata/inherit.test.mjs
```

Attendu : `ERR_MODULE_NOT_FOUND` sur `./inherit.mjs`.

- [ ] **Step 3: Écrire l'implémentation**

`scripts/showcase-metadata/inherit.mjs` :

```js
/**
 * Fusionne dans chaque classe les membres de ses ancêtres présents dans l'index.
 * Les membres hérités portent `inheritedFrom` : la page d'un composant les
 * affiche dans une section repliée, distincte de son API propre.
 */
export function resolveInheritance(classes) {
  const index = new Map(classes.map((c) => [c.className, c]));

  return classes.map((cls) => {
    const members = [...cls.members];
    const taken = new Set(members.map((m) => m.name));
    const visited = new Set([cls.className]);

    let ancestorName = cls.extendsName;
    while (ancestorName && !visited.has(ancestorName)) {
      visited.add(ancestorName);

      const ancestor = index.get(ancestorName);
      if (!ancestor) break;

      for (const member of ancestor.members) {
        if (taken.has(member.name)) continue; // la classe fille l'emporte
        taken.add(member.name);
        members.push({ ...member, inheritedFrom: ancestorName });
      }
      ancestorName = ancestor.extendsName;
    }

    return { ...cls, members };
  });
}
```

- [ ] **Step 4: Lancer le test pour le voir passer**

```powershell
node --test scripts/showcase-metadata/inherit.test.mjs
```

Attendu : 4 tests verts.

- [ ] **Step 5: Point de contrôle**

Message suggéré : `feat(showcase): résoudre les membres hérités des composants`

---

## Task 5: Parseur de démos

**Files:**
- Create: `scripts/showcase-metadata/parse-demos.mjs`
- Create: `scripts/showcase-metadata/parse-demos.test.mjs`

**Interfaces:**
- Consumes: `getAngularDecorator`, `literalProp` de la tâche 3.
- Produces:
  - `slugify(title: string): string`
  - `parseDemoFile(filePath: string, text: string): { id, summary, templates: Record<string,string>, examples: { title, slug, className, skipHarness }[], notRenderable: boolean }`

- [ ] **Step 1: Écrire le test qui échoue**

`scripts/showcase-metadata/parse-demos.test.mjs` :

```js
import assert from "node:assert/strict";
import { test } from "node:test";

import { parseDemoFile, slugify } from "./parse-demos.mjs";

const DEMO = `
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-button-types",
  imports: [ButtonComponent],
  template: \`
    <ta-button type="primary">Primary</ta-button>
    <ta-button type="danger">Danger</ta-button>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonTypesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-button",
  summary: "Bouton d'action.",
  examples: [
    { title: "Types", component: TaButtonTypesExample },
    { title: "États avancés", component: TaButtonStatesExample, skipHarness: true },
  ],
};
`;

test("slugify produit un segment d'URL stable", () => {
  assert.equal(slugify("États avancés"), "etats-avances");
  assert.equal(slugify("Types × Tailles"), "types-tailles");
});

test("extrait l'identifiant et le résumé", () => {
  const parsed = parseDemoFile("ta-button.demo.ts", DEMO);

  assert.equal(parsed.id, "ta-button");
  assert.equal(parsed.summary, "Bouton d'action.");
  assert.equal(parsed.notRenderable, false);
});

test("désindente le template et le range sous le nom de classe", () => {
  const parsed = parseDemoFile("ta-button.demo.ts", DEMO);

  assert.equal(
    parsed.templates.TaButtonTypesExample,
    '<ta-button type="primary">Primary</ta-button>\n<ta-button type="danger">Danger</ta-button>'
  );
});

test("liste les exemples avec leur slug et leur drapeau harness", () => {
  const parsed = parseDemoFile("ta-button.demo.ts", DEMO);

  assert.deepEqual(parsed.examples, [
    { title: "Types", slug: "types", className: "TaButtonTypesExample", skipHarness: false },
    { title: "États avancés", slug: "etats-avances", className: "TaButtonStatesExample", skipHarness: true },
  ]);
});

test("lit les clés écrites entre guillemets", () => {
  const quoted = [
    "export const DEMO = {",
    '  "id": "ta-x",',
    '  "summary": "Résumé.",',
    '  "examples": [{ "title": "Cas", "component": XExample, "skipHarness": true }],',
    "};",
  ].join("
");

  const parsed = parseDemoFile("ta-x.demo.ts", quoted);

  assert.equal(parsed.id, "ta-x");
  assert.equal(parsed.summary, "Résumé.");
  assert.deepEqual(parsed.examples, [
    { title: "Cas", slug: "cas", className: "XExample", skipHarness: true },
  ]);
});

test("refuse deux exemples dont les titres produisent le même identifiant", () => {
  const duplicated = [
    "export const DEMO = {",
    '  id: "ta-x",',
    '  summary: "r",',
    "  examples: [",
    '    { title: "États", component: A },',
    '    { title: "Etats", component: B },',
    "  ],",
    "};",
  ].join("\n");

  assert.throws(() => parseDemoFile("ta-x.demo.ts", duplicated), /etats.*distincts/s);
});

test("refuse un template interpolé plutôt que de le perdre en silence", () => {
  const interpolated = [
    'import { Component } from "@angular/core";',
    "",
    "@Component({",
    '  selector: "app-ex-interp",',
    "  template: `<p>${this.valeur}</p>`,",
    "})",
    "export class InterpExample {}",
    "",
    "export const DEMO = { id: \"ta-x\", summary: \"r\", examples: [] };",
  ].join("
");

  assert.throws(() => parseDemoFile("ta-x.demo.ts", interpolated), /InterpExample.*template/s);
});

test("refuse un résumé qui n'est pas une chaîne littérale", () => {
  const concatenated = [
    "export const DEMO = {",
    '  id: "ta-x",',
    '  summary: "début " + "suite",',
    "  examples: [],",
    "};",
  ].join("
");

  assert.throws(() => parseDemoFile("ta-x.demo.ts", concatenated), /summary.*littérale/s);
});

test("signale une démo dont l'identifiant ne suit pas le nom de fichier", () => {
  const bad = DEMO.replace('id: "ta-button"', 'id: "ta-bouton"');

  assert.throws(() => parseDemoFile("ta-button.demo.ts", bad), /ta-bouton.*ta-button/);
});
```

- [ ] **Step 2: Lancer le test pour le voir échouer**

```powershell
node --test scripts/showcase-metadata/parse-demos.test.mjs
```

Attendu : `ERR_MODULE_NOT_FOUND` sur `./parse-demos.mjs`.

- [ ] **Step 3: Écrire l'implémentation**

`scripts/showcase-metadata/parse-demos.mjs` :

```js
import path from "node:path";

import ts from "typescript";

import { getAngularDecorator, literalProp } from "./parse-api.mjs";

/** Segment d'URL stable, sans accent ni ponctuation. */
export function slugify(title) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Retire l'indentation commune d'un template littéral. */
function dedent(text) {
  const lines = text.replace(/\t/g, "  ").split("\n");
  while (lines.length > 0 && lines[0].trim() === "") lines.shift();
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") lines.pop();

  const indents = lines.filter((l) => l.trim() !== "").map((l) => l.match(/^ */)[0].length);
  const common = indents.length > 0 ? Math.min(...indents) : 0;

  return lines.map((l) => l.slice(common)).join("\n");
}

function booleanProp(objectLiteral, key) {
  for (const prop of objectLiteral.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    if (prop.name.getText().replace(/['"]/g, "") !== key) continue;
    return prop.initializer.kind === ts.SyntaxKind.TrueKeyword;
  }
  return false;
}

function identifierProp(objectLiteral, key) {
  for (const prop of objectLiteral.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    if (prop.name.getText().replace(/['"]/g, "") !== key) continue;
    return prop.initializer.getText();
  }
  return undefined;
}

function readExamples(demoObject) {
  const examples = [];

  for (const prop of demoObject.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    if (prop.name.getText().replace(/['"]/g, "") !== "examples") continue;
    if (!ts.isArrayLiteralExpression(prop.initializer)) continue;

    for (const element of prop.initializer.elements) {
      if (!ts.isObjectLiteralExpression(element)) continue;

      const title = literalProp(element, "title");
      const className = identifierProp(element, "component");
      if (!title || !className) continue;

      examples.push({
        title,
        slug: slugify(title),
        className,
        skipHarness: booleanProp(element, "skipHarness"),
      });
    }
  }
  return examples;
}

/**
 * Lit un fichier de démo : templates des classes d'exemple d'un côté, contenu de
 * la constante `DEMO` de l'autre. Le nom du fichier fait foi pour l'identifiant.
 */
export function parseDemoFile(filePath, text) {
  const sourceFile = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true);
  const templates = {};
  let demoObject = null;

  const visit = (node) => {
    if (ts.isClassDeclaration(node) && node.name) {
      const decorator = getAngularDecorator(node);
      if (decorator?.kind === "component") {
        // Tout composant d'un fichier de démo est un exemple : son template doit
        // être un littéral extractible. Un template interpolé ou un templateUrl
        // ferait diverger l'extrait affiché du code réellement exécuté — le seul
        // défaut que cette vitrine ne peut pas se permettre. On échoue fort.
        const template = literalProp(decorator.meta, "template");
        if (template === undefined) {
          throw new Error(
            `${filePath} : le composant d'exemple ${node.name.text} n'expose pas de ` +
              "`template` littéral. Un template interpolé (${…}) ou un `templateUrl` " +
              "rendrait l'extrait de code différent du code exécuté."
          );
        }
        templates[node.name.text] = dedent(template);
      }
    }

    if (ts.isVariableStatement(node)) {
      for (const declaration of node.declarationList.declarations) {
        if (declaration.name.getText() !== "DEMO") continue;
        if (declaration.initializer && ts.isObjectLiteralExpression(declaration.initializer)) {
          demoObject = declaration.initializer;
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  ts.forEachChild(sourceFile, visit);

  if (!demoObject) {
    throw new Error(`${filePath} : aucune constante DEMO exportée`);
  }

  const expectedId = path.basename(filePath).replace(/\.demo\.ts$/, "");
  const id = literalProp(demoObject, "id");
  if (id !== expectedId) {
    throw new Error(`${filePath} : DEMO.id vaut "${id}" alors que le fichier impose "${expectedId}"`);
  }

  const notRenderable = demoObject.properties.some(
    (p) => ts.isPropertyAssignment(p) && p.name.getText().replace(/['"]/g, "") === "notRenderable"
  );

  // Deux exemples de même identifiant se disputeraient leur extrait de code et
  // leur cas de test E2E, tous deux dérivés du titre. On refuse plutôt que de
  // laisser l'un écraser l'autre en silence.
  const examples = readExamples(demoObject);
  const slugs = new Set();
  for (const example of examples) {
    if (slugs.has(example.slug)) {
      throw new Error(
        `${filePath} : deux exemples produisent l'identifiant "${example.slug}". ` +
          "Les titres d'une même démo doivent rester distincts."
      );
    }
    slugs.add(example.slug);
  }

  // Même exigence que pour les templates : un résumé construit par concaténation
  // deviendrait silencieusement vide dans l'index et dans la recherche.
  const summary = literalProp(demoObject, "summary");
  if (summary === undefined) {
    throw new Error(`${filePath} : DEMO.summary doit être une chaîne littérale.`);
  }

  return {
    id,
    summary,
    templates,
    examples,
    notRenderable,
  };
}
```

- [ ] **Step 4: Lancer le test pour le voir passer**

```powershell
node --test scripts/showcase-metadata/parse-demos.test.mjs
```

Attendu : 9 tests verts.

- [ ] **Step 5: Point de contrôle**

Message suggéré : `feat(showcase): extraire templates et index des fichiers de démo`

---

## Task 6: Émission des fichiers générés et CLI

**Files:**
- Create: `scripts/showcase-metadata/emit.mjs`
- Create: `scripts/showcase-metadata/emit.test.mjs`
- Create: `scripts/generate-showcase-metadata.mjs`
- Modify: `package.json`
- Create: `.prettierignore`

**Interfaces:**
- Consumes: toutes les fonctions des tâches 2 à 5.
- Produces:
  - `renderApiMetadata(entries): string`, `renderDemoSources(sources, index): string`, `renderCoverage(coverage): string`
  - Fichiers `src/app/showcase/generated/{api-metadata,demo-sources,coverage}.ts`
  - Scripts npm `showcase:metadata`, `showcase:metadata:check`, `test:showcase-metadata`

- [ ] **Step 1: Écrire le test qui échoue**

`scripts/showcase-metadata/emit.test.mjs` :

```js
import assert from "node:assert/strict";
import { test } from "node:test";

import { renderApiMetadata, renderCoverage, renderDemoSources } from "./emit.mjs";

test("le rendu porte un avertissement de fichier généré", () => {
  const out = renderApiMetadata([]);

  assert.match(out, /NE PAS ÉDITER/);
  assert.match(out, /yarn showcase:metadata/);
});

test("les clés sont triées pour produire des diffs stables", () => {
  const entries = [
    { id: "ta-zeta", pkg: "@ta/ui", className: "Z", kind: "component", file: "z.ts", members: [] },
    { id: "ta-alpha", pkg: "@ta/ui", className: "A", kind: "component", file: "a.ts", members: [] },
  ];

  const out = renderApiMetadata(entries);

  assert.ok(out.indexOf('"ta-alpha"') < out.indexOf('"ta-zeta"'), "ta-alpha doit précéder ta-zeta");
});

test("le rendu est idempotent", () => {
  const entries = [{ id: "ta-a", pkg: "@ta/ui", className: "A", kind: "component", file: "a.ts", members: [] }];

  assert.equal(renderApiMetadata(entries), renderApiMetadata(entries));
});

test("les sources de démo échappent les accents graves et les interpolations", () => {
  const out = renderDemoSources({ Ex: "<p>a ` b ${c}</p>" }, {});

  assert.match(out, /\\`/);
  assert.match(out, /\\\$\{/);
});

test("la couverture expose les trois listes", () => {
  const out = renderCoverage({ documented: ["ta-a"], missing: ["ta-b"], unresolvedMembers: ["X.y"] });

  assert.match(out, /documented/);
  assert.match(out, /missing/);
  assert.match(out, /unresolvedMembers/);
});
```

- [ ] **Step 2: Lancer le test pour le voir échouer**

```powershell
node --test scripts/showcase-metadata/emit.test.mjs
```

Attendu : `ERR_MODULE_NOT_FOUND` sur `./emit.mjs`.

- [ ] **Step 3: Écrire le module d'émission**

`scripts/showcase-metadata/emit.mjs` :

```js
const HEADER = `/* eslint-disable */
// -----------------------------------------------------------------------------
// Fichier généré par scripts/generate-showcase-metadata.mjs — NE PAS ÉDITER.
// Régénérer : yarn showcase:metadata
// -----------------------------------------------------------------------------
`;

/** JSON déterministe : clés d'objet triées à tous les niveaux. */
function stableJson(value, indent = 2) {
  return JSON.stringify(value, (_key, val) => {
    // Uniquement les objets simples : un Set ou une instance de classe n'a pas
    // de clés énumérables propres et serait silencieusement rendu `{}`, ce qui
    // contredirait le type déclaré juste au-dessus dans le fichier généré.
    const isPlainObject =
      val !== null && typeof val === "object" && Object.getPrototypeOf(val) === Object.prototype;
    if (isPlainObject) {
      return Object.fromEntries(Object.keys(val).sort().map((k) => [k, val[k]]));
    }
    return val;
  }, indent);
}

export function renderApiMetadata(entries) {
  const byId = {};
  for (const entry of [...entries].sort((a, b) => a.id.localeCompare(b.id))) {
    byId[entry.id] = entry;
  }

  return `${HEADER}
export interface TaApiMember {
  name: string;
  propertyName: string;
  kind: "input" | "output" | "method" | "property";
  type: string;
  default?: string;
  required: boolean;
  doc?: string;
  inheritedFrom?: string;
}

export interface TaApiEntry {
  id: string;
  pkg: string;
  className: string;
  kind: "component" | "directive" | "pipe" | "service" | "model";
  file: string;
  doc?: string;
  members: TaApiMember[];
}

export const TA_API: Record<string, TaApiEntry> = ${stableJson(byId)};
`;
}

/** Un template va dans un littéral gabarit : neutraliser ` et \${. */
function escapeTemplate(text) {
  return text.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

export function renderDemoSources(sources, index) {
  const entries = Object.keys(sources)
    .sort()
    .map((key) => `  ${JSON.stringify(key)}: \`${escapeTemplate(sources[key])}\`,`)
    .join("\n");

  return `${HEADER}
export interface DemoIndexExample {
  title: string;
  slug: string;
  className: string;
  skipHarness: boolean;
}

export interface DemoIndexEntry {
  summary: string;
  notRenderable: boolean;
  examples: DemoIndexExample[];
}

/** Code source du template de chaque classe d'exemple, indexé par nom de classe. */
export const DEMO_SOURCES: Record<string, string> = {
${entries}
};

/** Résumés et titres lisibles sans importer les démos, pour la recherche et le harness. */
export const DEMO_INDEX: Record<string, DemoIndexEntry> = ${stableJson(index)};
`;
}

export function renderCoverage(coverage) {
  return `${HEADER}
export interface ShowcaseCoverage {
  /** Composants publics dotés d'une démo enregistrée. */
  documented: string[];
  /** Composants publics sans démo : la vitrine est incomplète tant que non vide. */
  missing: string[];
  /** Propriétés dont la forme d'écriture n'a pas été reconnue par le générateur. */
  unresolvedMembers: string[];
}

export const COVERAGE: ShowcaseCoverage = ${stableJson(coverage)};
`;
}
```

- [ ] **Step 4: Lancer le test pour le voir passer**

```powershell
node --test scripts/showcase-metadata/emit.test.mjs
```

Attendu : 5 tests verts.

- [ ] **Step 5: Écrire le module d'assemblage**

Le parcours des paquets vit dans son propre module plutôt que dans le point
d'entrée : c'est la partie qui porte la logique, donc celle qu'on doit pouvoir
tester.

`scripts/showcase-metadata/build.mjs` :

```js
import fs from "node:fs";
import path from "node:path";

import { resolveInheritance } from "./inherit.mjs";
import { collectAllSources, collectPublicFiles, listPackages, REPO_ROOT } from "./packages.mjs";
import { parseDemoFile } from "./parse-demos.mjs";
import { parseSource } from "./parse-api.mjs";

const DEMOS_DIR = path.join(REPO_ROOT, "src", "app", "showcase", "demos");

/** Chemin relatif au dépôt, séparateurs normalisés pour les fichiers générés. */
export function relative(file) {
  return path.relative(REPO_ROOT, file).split(path.sep).join("/");
}

/** Analyse toutes les sources des paquets, puis ne retient que l'API publique. */
export function buildApi() {
  const all = [];

  for (const pkg of listPackages()) {
    const publicFiles = new Set(collectPublicFiles(pkg.publicApi));

    for (const file of collectAllSources(pkg.dir)) {
      for (const cls of parseSource(file, fs.readFileSync(file, "utf8"), relative(file))) {
        // Le paquet et la visibilité s'attachent à la classe elle-même. Les
        // indexer par nom de classe, comme le faisait une version antérieure,
        // confond les sept paires d'homonymes du dépôt — LabelComponent,
        // RatingComponent, TextComponent, BulletComponent, CultureComponent,
        // LinkComponent, UploadComponent — et attribue à sept composants un
        // paquet faux, donc une ligne d'import fausse sur leur page.
        all.push({ ...cls, pkg: pkg.name, isPublic: publicFiles.has(file) });
      }
    }
  }

  const resolved = resolveInheritance(all);
  const entries = [];
  const unresolvedMembers = [];
  const idOwners = new Map();

  for (const cls of resolved) {
    if (!cls.isPublic) continue;
    if (cls.kind === "component" && !cls.selector?.startsWith("ta-")) continue;

    const id = cls.selector ?? cls.className;

    // Deux entrées de même identifiant s'écraseraient à l'émission : on le dit.
    const previous = idOwners.get(id);
    if (previous) {
      unresolvedMembers.push(`${id} : identifiant partagé par ${previous} et ${cls.file}`);
    }
    idOwners.set(id, cls.file);

    entries.push({
      id,
      pkg: cls.pkg,
      className: cls.className,
      kind: cls.kind,
      file: cls.file,
      doc: cls.doc,
      members: cls.members,
    });

    // Une classe vide n'est une anomalie que si elle a déclaré quelque chose.
    // `declarationCount` répond classe par classe, là où un test sur le texte du
    // fichier contaminerait une classe vide co-localisée avec une classe riche.
    // Sur le dépôt actuel : 25 conteneurs de projection pure ne sont pas
    // signalés, et un seul composant l'est — à juste titre, il déclare une
    // propriété publique sans initialiseur que le parseur ne sait pas lire.
    if (cls.kind === "component" && cls.members.length === 0 && cls.declarationCount > 0) {
      unresolvedMembers.push(
        `${cls.className} (déclare ${cls.declarationCount} membre(s) qu'aucune règle ne reconnaît)`
      );
    }

    // Un membre de type "unknown" vient d'un accesseur sans annotation de retour :
    // le parseur lit l'AST sans vérificateur de types, il ne peut donc pas inférer.
    // On le nomme plutôt que de laisser un "unknown" muet dans un tableau d'API.
    for (const member of cls.members) {
      if (member.type === "unknown" && !member.inheritedFrom) {
        unresolvedMembers.push(`${cls.className}.${member.name} (type non annoté)`);
      }
    }
  }

  return { entries, unresolvedMembers };
}

/** Parcourt les fichiers *.demo.ts et agrège templates et index. */
export function buildDemos() {
  const sources = {};
  const index = {};

  const stack = [DEMOS_DIR];
  while (stack.length > 0) {
    const current = stack.pop();
    if (!fs.existsSync(current)) continue;

    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
        continue;
      }
      if (!entry.name.endsWith(".demo.ts")) continue;

      const parsed = parseDemoFile(full, fs.readFileSync(full, "utf8"));

      // `DEMO_SOURCES` est une table plate indexée par nom de classe : deux
      // exemples homonymes écraseraient leur source mutuelle, et une page
      // afficherait le code d'un autre composant. La convention de nommage
      // `Ta<Composant><Variante>Example` l'évite, rien ne l'impose.
      for (const className of Object.keys(parsed.templates)) {
        if (className in sources) {
          throw new Error(
            `${full} : la classe d'exemple ${className} porte un nom déjà utilisé par une autre démo.`
          );
        }
      }
      if (parsed.id in index) {
        throw new Error(`${full} : l'identifiant de démo ${parsed.id} est déjà pris.`);
      }

      Object.assign(sources, parsed.templates);
      index[parsed.id] = {
        summary: parsed.summary,
        notRenderable: parsed.notRenderable,
        examples: parsed.examples,
      };
    }
  }
  return { sources, index };
}
```

- [ ] **Step 6: Écrire les tests d'intégration**

Ces deux tests s'exécutent sur le vrai dépôt. Le premier aurait attrapé les sept
paquets erronés ; le second, une collision d'identifiants.

`scripts/showcase-metadata/build.test.mjs` :

```js
import assert from "node:assert/strict";
import { test } from "node:test";

import { buildApi, relative } from "./build.mjs";
import { listPackages } from "./packages.mjs";

test("chaque entrée porte le paquet de son propre fichier", () => {
  const prefixes = new Map(listPackages().map((p) => [p.name, `${relative(p.dir)}/`]));
  const { entries } = buildApi();

  const mismatches = entries.filter((e) => !e.file.startsWith(prefixes.get(e.pkg) ?? "\0"));

  assert.deepEqual(
    mismatches.map((e) => `${e.id}: ${e.pkg} au lieu de ${e.file}`),
    []
  );
});

test("aucun identifiant n'est attribué deux fois", () => {
  const { entries } = buildApi();
  const ids = entries.map((e) => e.id);

  assert.equal(new Set(ids).size, ids.length);
});
```

- [ ] **Step 7: Écrire le point d'entrée CLI**

`scripts/generate-showcase-metadata.mjs`, volontairement mince — il ne fait que
l'entrée/sortie :

```js
#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

import { buildApi, buildDemos } from "./showcase-metadata/build.mjs";
import { renderApiMetadata, renderCoverage, renderDemoSources } from "./showcase-metadata/emit.mjs";
import { REPO_ROOT } from "./showcase-metadata/packages.mjs";

const OUT_DIR = path.join(REPO_ROOT, "src", "app", "showcase", "generated");

function main() {
  const check = process.argv.includes("--check");

  const { entries, unresolvedMembers } = buildApi();
  const { sources, index } = buildDemos();

  const documented = Object.keys(index).sort();
  const missing = entries
    .filter((e) => e.kind === "component" && !index[e.id])
    .map((e) => e.id)
    .sort();

  const files = {
    "api-metadata.ts": renderApiMetadata(entries),
    "demo-sources.ts": renderDemoSources(sources, index),
    "coverage.ts": renderCoverage({ documented, missing, unresolvedMembers }),
  };

  if (check) {
    const stale = Object.entries(files).filter(([name, content]) => {
      const target = path.join(OUT_DIR, name);
      return !fs.existsSync(target) || fs.readFileSync(target, "utf8") !== content;
    });

    if (stale.length > 0) {
      console.error(`Fichiers générés périmés : ${stale.map(([n]) => n).join(", ")}`);
      console.error("Lancer `yarn showcase:metadata` puis committer le résultat.");
      process.exit(1);
    }
    console.log("Métadonnées de la vitrine à jour.");
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [name, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(OUT_DIR, name), content, "utf8");
  }

  console.log(
    `Vitrine : ${entries.length} entrées d'API, ${documented.length} démos, ${missing.length} composants sans démo.`
  );
  if (unresolvedMembers.length > 0) {
    console.warn(`Membres non reconnus (${unresolvedMembers.length}) : ${unresolvedMembers.join(", ")}`);
  }
}

main();
```

- [ ] **Step 8: Brancher les scripts npm**

Dans `package.json`, ajouter au bloc `scripts` :

```json
    "showcase:metadata": "node scripts/generate-showcase-metadata.mjs",
    "showcase:metadata:check": "node scripts/generate-showcase-metadata.mjs --check",
    "test:showcase-metadata": "node --test \"scripts/**/*.test.mjs\"",
    "prestart": "node scripts/generate-showcase-metadata.mjs",
    "prestart-local": "node scripts/generate-showcase-metadata.mjs",
    "prebuild-website": "node scripts/generate-showcase-metadata.mjs",
```

- [ ] **Step 9: Exclure les fichiers générés du formatage**

Créer `.prettierignore` à la racine :

```
# Fichiers produits par scripts/generate-showcase-metadata.mjs : les reformater
# ferait diverger le contenu du dépôt de celui que le générateur produit, et le
# contrôle `showcase:metadata:check` échouerait en boucle.
src/app/showcase/generated/
```

Dans `eslint.config.mjs`, ajouter `"src/app/showcase/generated/**"` à la liste des chemins ignorés, en suivant la forme déjà utilisée par le fichier.

- [ ] **Step 10: Générer et vérifier**

```powershell
yarn showcase:metadata
yarn showcase:metadata:check
```

Attendu : la première commande annonce environ 183 entrées d'API, 0 démo et environ 183 composants sans démo — le registre est encore vide, c'est normal. La seconde répond « Métadonnées de la vitrine à jour. »

- [ ] **Step 11: Vérifier trois entrées à la main**

```powershell
node -e "const t=require('fs').readFileSync('src/app/showcase/generated/api-metadata.ts','utf8'); for (const id of ['ta-button','ta-card','ta-input-textbox']) console.log(id, t.includes(JSON.stringify(id)))"
```

Attendu : `ta-button true`, `ta-card true`, `ta-input-textbox true`.

- [ ] **Step 12: Lancer toute la suite du générateur**

```powershell
yarn test:showcase-metadata
```

Attendu : 31 tests verts (4 + 7 + 4 + 9 + 5 + 2).

- [ ] **Step 13: Point de contrôle**

Message suggéré : `feat(showcase): générer API, extraits et couverture depuis les sources`

---

## Task 7: Contrats de démo, registre et trois pilotes

**Files:**
- Create: `src/app/showcase/demo.types.ts`
- Create: `src/app/showcase/registry.ts`
- Create: `src/app/showcase/demos/ui/ta-button.demo.ts`
- Create: `src/app/showcase/demos/ui/ta-card.demo.ts`
- Create: `src/app/showcase/demos/form-input/ta-input-textbox.demo.ts`

**Interfaces:**
- Consumes: rien du code applicatif ; le générateur de la tâche 6 lit ces fichiers.
- Produces:
  - `ComponentDemo`, `DemoExample` — consommés par les tâches 8, 9, 11
  - `REGISTRY: RegistryEntry[]`, `RegistryEntry = { id, pkg, short, group, load }` — consommé par les tâches 9, 10, 11

- [ ] **Step 1: Écrire les contrats**

`src/app/showcase/demo.types.ts` :

```ts
import { Type } from "@angular/core";

export interface DemoExample {
  /** Titre affiché ; son slug sert d'identifiant de cas harness. */
  title: string;
  description?: string;
  component: Type<unknown>;
  /** Exclut l'exemple du harness E2E (permission, minuterie, plein écran…). */
  skipHarness?: boolean;
}

export interface ComponentDemo {
  /** Sélecteur du composant. Doit correspondre au nom du fichier de démo. */
  id: string;
  summary: string;
  examples: DemoExample[];
  /**
   * Renseigné uniquement quand le composant ne peut pas être monté isolément
   * (jeton fourni par un conteneur, API globale absente…). `examples` est alors
   * vide et la page affiche cette explication suivie d'un usage non exécuté.
   */
  notRenderable?: { reason: string; usage: string };
  /** Notes libres rendues sous les exemples. */
  notes?: string;
}
```

- [ ] **Step 2: Écrire la démo de `ta-button`**

`src/app/showcase/demos/ui/ta-button.demo.ts` :

```ts
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-button-types",
  imports: [ButtonComponent],
  template: `
    <ta-button type="primary">Primary</ta-button>
    <ta-button type="secondary">Secondary</ta-button>
    <ta-button type="tertiary">Tertiary</ta-button>
    <ta-button type="danger">Danger</ta-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonTypesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-button-sizes",
  imports: [ButtonComponent],
  template: `
    <ta-button size="small">Small</ta-button>
    <ta-button size="medium">Medium</ta-button>
    <ta-button size="large">Large</ta-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-button-states",
  imports: [ButtonComponent],
  template: `
    <ta-button state="classic">Classic</ta-button>
    <ta-button state="disabled">Disabled</ta-button>
    <ta-button state="inactive">Inactive</ta-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonStatesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-button-icon",
  imports: [ButtonComponent],
  template: `
    <ta-button icon="add">Ajouter</ta-button>
    <ta-button icon="edit" type="secondary">Modifier</ta-button>
    <ta-button icon="delete" type="danger">Supprimer</ta-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonIconExample {}

export const DEMO: ComponentDemo = {
  id: "ta-button",
  summary: "Bouton d'action, décliné en quatre types, trois tailles et trois états.",
  examples: [
    { title: "Types", description: "Quatre intentions visuelles.", component: TaButtonTypesExample },
    { title: "Tailles", component: TaButtonSizesExample },
    {
      title: "États",
      // `handleClick()` n'émet `action` que si l'état vaut `classic` : les deux
      // états non-classiques bloquent donc le clic à l'identique, et ne se
      // distinguent que par leurs jetons de couleur.
      description: "Les deux états non-classiques bloquent le clic ; seule leur couleur diffère.",
      component: TaButtonStatesExample,
    },
    { title: "Avec icône", component: TaButtonIconExample },
  ],
};
```

- [ ] **Step 3: Écrire la démo de `ta-card`**

`src/app/showcase/demos/ui/ta-card.demo.ts` :

```ts
import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardTitleComponent,
} from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-card-basic",
  imports: [CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-title>Titre de la carte</ta-card-title>
      </ta-card-header>
      <ta-card-content>Contenu projeté dans la carte.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardBasicExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-card-flags",
  imports: [CardComponent, CardContentComponent],
  template: `
    <ta-card [highlight]="true">
      <ta-card-content>highlight</ta-card-content>
    </ta-card>
    <ta-card [shadow]="false">
      <ta-card-content>shadow désactivée</ta-card-content>
    </ta-card>
    <ta-card [isNew]="true">
      <ta-card-content>isNew</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardFlagsExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-card-direction",
  imports: [CardComponent, CardContentComponent],
  template: `
    <ta-card directionCard="vertical">
      <ta-card-content>vertical</ta-card-content>
    </ta-card>
    <ta-card directionCard="horizontal">
      <ta-card-content>horizontal</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardDirectionExample {}

export const DEMO: ComponentDemo = {
  id: "ta-card",
  summary: "Conteneur de contenu à projection, avec en-tête, titre et corps optionnels.",
  examples: [
    { title: "Composition", description: "En-tête, titre et contenu projetés.", component: TaCardBasicExample },
    { title: "Drapeaux", component: TaCardFlagsExample },
    { title: "Direction", component: TaCardDirectionExample },
  ],
};
```

- [ ] **Step 4: Écrire la démo de `ta-input-textbox`**

Ce pilote est celui qui prouve la résolution des alias (`inputModel` s'écrit `input`, `standaloneMode` s'écrit `standalone`) et l'affichage des membres hérités de `TaAbstractInputComponent`.

`src/app/showcase/demos/form-input/ta-input-textbox.demo.ts` :

```ts
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Validators } from "@angular/forms";

import { TextBoxComponent } from "@ta/form-input";
import { InputTextBox } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-textbox-basic",
  imports: [TextBoxComponent],
  template: ` <ta-input-textbox [input]="this.model" [standalone]="true"></ta-input-textbox> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTextboxBasicExample {
  model = new InputTextBox({ key: "name", label: "Nom", value: "Dupont" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-textbox-required",
  imports: [TextBoxComponent],
  template: ` <ta-input-textbox [input]="this.model" [standalone]="true"></ta-input-textbox> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTextboxRequiredExample {
  model = new InputTextBox({
    key: "email",
    label: "Courriel",
    validators: [Validators.required],
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-textbox-disabled",
  imports: [TextBoxComponent],
  template: ` <ta-input-textbox [input]="this.model" [standalone]="true"></ta-input-textbox> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTextboxDisabledExample {
  // `InputBase` expose `disabled` dans ses options. Appeler `disable()` depuis le
  // constructeur n'aurait aucun effet visible : cette méthode agit sur le
  // `FormControl`, qui n'existe pas encore à ce moment-là.
  model = new InputTextBox({
    key: "readonly",
    label: "Non modifiable",
    value: "Valeur figée",
    disabled: true,
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-textbox",
  summary:
    "Champ texte du système de formulaires. Se pilote par un modèle `InputTextBox`, jamais par des inputs individuels.",
  examples: [
    { title: "Valeur simple", component: TaInputTextboxBasicExample },
    { title: "Requis", description: "Le validateur vient du modèle, pas du composant.", component: TaInputTextboxRequiredExample },
    { title: "Désactivé", component: TaInputTextboxDisabledExample },
  ],
  notes:
    "En usage réel, ces champs sont rendus par `<ta-form [inputs]=\"…\">` ; l'attribut `standalone` n'existe que pour les monter isolément.",
};
```

- [ ] **Step 5: Écrire le registre**

`src/app/showcase/registry.ts` :

```ts
import { ComponentDemo } from "./demo.types";

export interface RegistryEntry {
  /** Sélecteur du composant, second segment de la route. */
  id: string;
  /** Nom complet du paquet, affiché tel quel. */
  pkg: string;
  /** Nom court, premier segment de la route. */
  short: string;
  /** Famille affichée dans l'index du paquet. */
  group: string;
  load: () => Promise<{ DEMO: ComponentDemo }>;
}

/**
 * Catalogue des démos. Chaque entrée est chargée à la demande : la page d'un
 * composant n'importe que la sienne.
 */
export const REGISTRY: RegistryEntry[] = [
  {
    id: "ta-button",
    pkg: "@ta/ui",
    short: "ui",
    group: "Boutons",
    load: () => import("./demos/ui/ta-button.demo"),
  },
  {
    id: "ta-card",
    pkg: "@ta/ui",
    short: "ui",
    group: "Cartes",
    load: () => import("./demos/ui/ta-card.demo"),
  },
  {
    id: "ta-input-textbox",
    pkg: "@ta/form-input",
    short: "form-input",
    group: "Saisie",
    load: () => import("./demos/form-input/ta-input-textbox.demo"),
  },
];

export function findEntry(short: string, id: string): RegistryEntry | undefined {
  return REGISTRY.find((entry) => entry.short === short && entry.id === id);
}

export function entriesOfPackage(short: string): RegistryEntry[] {
  return REGISTRY.filter((entry) => entry.short === short);
}
```

- [ ] **Step 6: Régénérer et vérifier que les démos sont vues**

```powershell
yarn showcase:metadata
```

Attendu : « 3 démos » dans la sortie, et le nombre de composants sans démo diminué de 3.

- [ ] **Step 7: Vérifier que le projet compile**

```powershell
npx ng build Techatome --configuration development
```

Attendu : compilation réussie. Un échec ici signale un import erroné dans une démo.

La configuration `development` est utilisée volontairement : la configuration
`production`, qui est celle par défaut, échoue sur ce dépôt pour une raison
**préexistante et commitée** — `src/app/showcase/theme/theme.component.scss` pèse
11 442 octets alors que le budget `anyComponentStyle` d'`angular.json` fixe l'erreur
à 4 ko. Ce dépassement n'a aucun rapport avec la vitrine, et le corriger reviendrait
à réécrire une feuille de style hors périmètre. Le contrôle recherché ici est la
compilation TypeScript et la résolution des imports, que `development` couvre
intégralement.

- [ ] **Step 8: Point de contrôle**

Message suggéré : `feat(showcase): contrats de démo, registre et trois composants pilotes`

---

## Task 8: Tableau d'API et bloc d'exemple

**Files:**
- Create: `src/app/showcase/component-page/api-table.component.ts`
- Create: `src/app/showcase/component-page/api-table.component.html`
- Create: `src/app/showcase/component-page/api-table.component.scss`
- Create: `src/app/showcase/component-page/example-block.component.ts`
- Create: `src/app/showcase/component-page/example-block.component.html`
- Create: `src/app/showcase/component-page/example-block.component.scss`

**Interfaces:**
- Consumes: `TaApiEntry` (tâche 6), `DEMO_SOURCES` (tâche 6).
- Produces: `<app-api-table [entry]="…">`, `<app-example-block [heading]="…" [description]="…" [example]="…" [source]="…">` — consommés par la tâche 9.

- [ ] **Step 1: Écrire le tableau d'API**

`src/app/showcase/component-page/api-table.component.ts` :

```ts
import { ChangeDetectionStrategy, Component, computed, input, signal } from "@angular/core";

import { TitleComponent } from "@ta/ui";

import { TaApiEntry, TaApiMember } from "../generated/api-metadata";

@Component({
  standalone: true,
  selector: "app-api-table",
  imports: [TitleComponent],
  templateUrl: "./api-table.component.html",
  styleUrl: "./api-table.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiTableComponent {
  entry = input.required<TaApiEntry>();

  /** Membres déclarés par le composant lui-même. */
  own = computed(() => this.entry().members.filter((m) => !m.inheritedFrom));

  /** Membres venus des classes de base, repliés par défaut. */
  inherited = computed(() => this.entry().members.filter((m) => !!m.inheritedFrom));

  /** Signal plutôt que champ simple, pour rester cohérent avec le bloc d'exemple. */
  readonly showInherited = signal(false);

  inputsOf(members: TaApiMember[]): TaApiMember[] {
    return members.filter((m) => m.kind === "input");
  }

  outputsOf(members: TaApiMember[]): TaApiMember[] {
    return members.filter((m) => m.kind === "output");
  }

  methodsOf(members: TaApiMember[]): TaApiMember[] {
    return members.filter((m) => m.kind === "method");
  }

  /**
   * Accesseurs et propriétés publiques. Les omettre amputerait 62 composants du
   * dépôt, dont `ta-input-textbox` qui en expose trois.
   */
  propertiesOf(members: TaApiMember[]): TaApiMember[] {
    return members.filter((m) => m.kind === "property");
  }

  toggleInherited(): void {
    this.showInherited.update((value) => !value);
  }
}
```

`src/app/showcase/component-page/api-table.component.html` :

```html
<section class="api" data-testid="api-table">
  <ta-title [level]="2">API</ta-title>

  @if (this.inputsOf(this.own()).length > 0) {
    <div class="api-table-scroll">
      <table class="api-table">
        <caption>Inputs</caption>
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Type</th>
            <th scope="col">Défaut</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          @for (member of this.inputsOf(this.own()); track member.name) {
            <tr [attr.data-testid]="'api-row-' + member.name">
              <td>
                <code>{{ member.name }}</code>
                @if (member.required) {
                  <span class="api-required" data-testid="api-required">requis</span>
                }
              </td>
              <td><code>{{ member.type }}</code></td>
              <td>
                @if (member.default) {
                  <code>{{ member.default }}</code>
                } @else {
                  <span class="api-empty">—</span>
                }
              </td>
              <td>{{ member.doc ?? "" }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  @if (this.outputsOf(this.own()).length > 0) {
    <div class="api-table-scroll">
      <table class="api-table">
        <caption>Outputs</caption>
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Charge utile</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          @for (member of this.outputsOf(this.own()); track member.name) {
            <tr [attr.data-testid]="'api-row-' + member.name">
              <td><code>{{ member.name }}</code></td>
              <td><code>{{ member.type }}</code></td>
              <td>{{ member.doc ?? "" }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  @if (this.propertiesOf(this.own()).length > 0) {
    <div class="api-table-scroll">
      <table class="api-table">
        <caption>Propriétés et accesseurs</caption>
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          @for (member of this.propertiesOf(this.own()); track member.name) {
            <tr [attr.data-testid]="'api-row-' + member.name">
              <td><code>{{ member.name }}</code></td>
              <td><code>{{ member.type }}</code></td>
              <td>{{ member.doc ?? "" }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  @if (this.methodsOf(this.own()).length > 0) {
    <div class="api-table-scroll">
      <table class="api-table">
        <caption>Méthodes publiques</caption>
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Signature</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          @for (member of this.methodsOf(this.own()); track member.name) {
            <tr [attr.data-testid]="'api-row-' + member.name">
              <td><code>{{ member.name }}</code></td>
              <td><code>{{ member.type }}</code></td>
              <td>{{ member.doc ?? "" }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  @if (this.inherited().length > 0) {
    <button
      type="button"
      class="api-toggle"
      data-testid="toggle-inherited"
      [attr.aria-expanded]="this.showInherited()"
      (click)="this.toggleInherited()"
    >
      {{ this.showInherited() ? "Masquer" : "Afficher" }} les {{ this.inherited().length }} membres hérités
    </button>

    @if (this.showInherited()) {
      <div class="api-table-scroll">
        <table class="api-table" data-testid="api-inherited">
          <caption>Membres hérités</caption>
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Type</th>
              <th scope="col">Défaut</th>
              <th scope="col">Hérité de</th>
            </tr>
          </thead>
          <tbody>
            @for (member of this.inherited(); track member.name) {
              <tr [attr.data-testid]="'api-row-' + member.name">
                <td>
                  <code>{{ member.name }}</code>
                  @if (member.required) {
                    <span class="api-required">requis</span>
                  }
                </td>
                <td><code>{{ member.type }}</code></td>
                <td>
                  @if (member.default) {
                    <code>{{ member.default }}</code>
                  } @else {
                    <span class="api-empty">—</span>
                  }
                </td>
                <td><code>{{ member.inheritedFrom }}</code></td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  }
</section>
```

`src/app/showcase/component-page/api-table.component.scss` :

```scss
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/flex";
@use "ta/utils/mixins/fonts";

:host {
  display: block;
}

.api {
  @include flex.flex-column();
  gap: common.get-var(space, md);
}

// Un tableau d'API est large par nature : il défile dans sa propre boîte plutôt
// que de pousser la page à défiler horizontalement. Le défilement vit sur une
// enveloppe et non sur le `<table>` lui-même : changer le `display` d'un tableau
// lui fait perdre sa sémantique implicite pour les lecteurs d'écran. C'est aussi
// la convention déjà employée dans cette application (`.flags-table-wrapper`).
.api-table-scroll {
  overflow-x: auto;
  width: 100%;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;

  caption {
    @include fonts.fontSizeBody(sm);
    padding-bottom: common.get-var(space, xs);
    color: common.get-var(text, secondary);
    text-align: left;
  }

  th,
  td {
    @include fonts.fontSizeBody(sm);
    padding: common.get-var(space, xs) common.get-var(space, sm);
    border-bottom: 1px solid common.get-var(border, tertiary);
    text-align: left;
    vertical-align: top;
  }

  th {
    color: common.get-var(text, secondary);
    font-weight: 600;
  }

  td:last-child {
    white-space: normal;
  }
}

.api-required {
  @include fonts.fontSizeBody(xs);
  margin-left: common.get-var(space, xs);
  padding: 1px 6px;
  border-radius: common.get-var(radius, label);
  background: common.get-var(surface, brand, primary);
  color: common.get-var(text, invert, primary);
}

.api-empty {
  color: common.get-var(text, tertiary);
}

.api-toggle {
  @include fonts.fontSizeBody(sm);
  align-self: flex-start;
  padding: common.get-var(space, xs) common.get-var(space, sm);
  border: 1px solid common.get-var(border, secondary);
  border-radius: common.get-var(radius, rounded);
  background: transparent;
  color: common.get-var(text, secondary);
  cursor: pointer;

  &:hover {
    background: common.get-var(surface, hover, primary);
    color: common.get-var(text, primary);
  }
}
```

- [ ] **Step 2: Écrire le bloc d'exemple**

`src/app/showcase/component-page/example-block.component.ts` :

```ts
import { NgComponentOutlet } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, signal, Type } from "@angular/core";

import { TitleComponent } from "@ta/ui";
import { copyTextToClipboard } from "@ta/utils";

@Component({
  standalone: true,
  selector: "app-example-block",
  imports: [NgComponentOutlet, TitleComponent],
  templateUrl: "./example-block.component.html",
  styleUrl: "./example-block.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleBlockComponent {
  heading = input.required<string>();
  description = input<string>("");
  example = input.required<Type<unknown>>();
  /** Template exact du composant d'exemple, produit par le générateur. */
  source = input<string>("");

  readonly showSource = signal(false);

  /**
   * Un échec de copie doit se voir. Le presse-papiers est refusé en contexte non
   * sécurisé ou sans permission ; sans état distinct, l'utilisateur cliquerait
   * sans jamais savoir que rien ne s'est passé.
   */
  readonly copyState = signal<"idle" | "copied" | "failed">("idle");

  /** Minuterie du retour au repos, annulée à chaque nouvelle tentative. */
  private _resetTimer?: ReturnType<typeof setTimeout>;

  toggleSource(): void {
    this.showSource.update((value) => !value);
  }

  copySource(): void {
    // `copyTextToClipboard` est asynchrone et attend deux rappels : succès et
    // erreur, chacun recevant une clé de traduction dont on n'a pas l'usage ici.
    void copyTextToClipboard(
      this.source(),
      () => this._flash("copied", 1500),
      () => this._flash("failed", 3000)
    );
  }

  /**
   * Affiche un état transitoire. La minuterie précédente est annulée : sans cela,
   * le retour au repos programmé par un succès tronquerait l'affichage d'un échec
   * survenu juste après, et le message le plus important serait le plus fugace.
   */
  private _flash(state: "copied" | "failed", delay: number): void {
    clearTimeout(this._resetTimer);
    this.copyState.set(state);
    this._resetTimer = setTimeout(() => this.copyState.set("idle"), delay);
  }
}
```

`src/app/showcase/component-page/example-block.component.html` :

```html
<section class="example" data-testid="example-block">
  <header class="example-header">
    <ta-title [level]="3">{{ this.heading() }}</ta-title>
    <div class="example-actions">
      @if (this.source()) {
        <button
          type="button"
          data-testid="toggle-source"
          [attr.aria-expanded]="this.showSource()"
          (click)="this.toggleSource()"
        >
          {{ this.showSource() ? "Masquer le code" : "Voir le code" }}
        </button>
        <button type="button" data-testid="copy-source" (click)="this.copySource()">
          @switch (this.copyState()) {
            @case ("copied") {
              Copié
            }
            @case ("failed") {
              Échec de la copie
            }
            @default {
              Copier
            }
          }
        </button>
      }
    </div>
  </header>

  @if (this.description()) {
    <p class="example-description">{{ this.description() }}</p>
  }

  <div class="example-render" data-testid="example-render">
    <ng-container *ngComponentOutlet="this.example()"></ng-container>
  </div>

  @if (this.showSource()) {
    <pre class="example-source" data-testid="example-source"><code>{{ this.source() }}</code></pre>
  }
</section>
```

`src/app/showcase/component-page/example-block.component.scss` :

```scss
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/flex";
@use "ta/utils/mixins/fonts";

:host {
  display: block;
}

.example {
  @include flex.flex-column();
  gap: common.get-var(space, sm);
  padding: common.get-var(space, lg);
  background: common.get-var(surface, primary);
  border: 1px solid common.get-var(border, tertiary);
  border-radius: common.get-var(radius, rounded);
}

.example-header {
  @include flex.flex-row();
  @include flex.align-center();
  @include flex.space-between();
  gap: common.get-var(space, md);
}

.example-actions {
  @include flex.flex-row();
  gap: common.get-var(space, xs);

  button {
    @include fonts.fontSizeBody(xs);
    padding: common.get-var(space, xs) common.get-var(space, sm);
    border: 1px solid common.get-var(border, secondary);
    border-radius: common.get-var(radius, rounded);
    background: transparent;
    color: common.get-var(text, secondary);
    cursor: pointer;

    &:hover {
      background: common.get-var(surface, hover, primary);
      color: common.get-var(text, primary);
    }
  }
}

.example-description {
  @include fonts.fontSizeBody(sm);
  margin: 0;
  color: common.get-var(text, secondary);
}

// Les exemples posent leurs éléments côte à côte : c'est la comparaison des
// variantes qui fait la démonstration.
.example-render {
  @include flex.flex-row();
  @include flex.align-center();
  flex-wrap: wrap;
  gap: common.get-var(space, md);
  padding: common.get-var(space, md);
  border-radius: common.get-var(radius, rounded);
  background: common.get-var(surface, secondary);
}

.example-source {
  overflow-x: auto;
  margin: 0;
  padding: common.get-var(space, md);
  border-radius: common.get-var(radius, rounded);
  background: common.get-var(surface, secondary);

  code {
    @include fonts.fontSizeBody(sm);
    color: common.get-var(text, primary);
    font-family: "SFMono-Regular", "JetBrains Mono", "Menlo", "Consolas", monospace;
    white-space: pre;
  }
}
```

- [ ] **Step 3: Vérifier la compilation**

```powershell
npx ng build Techatome --configuration development
```

Attendu : compilation réussie. Si `copyTextToClipboard` n'est pas exporté sous ce nom par `@ta/utils`, le compilateur le signale ici ; utiliser alors le nom réel trouvé par `Select-String "copyTextToClipboard" projects/utils/src -Recurse`.

- [ ] **Step 4: Point de contrôle**

Message suggéré : `feat(showcase): tableau d'API et bloc d'exemple réutilisables`

---

## Task 9: Page composant et index de paquet

**Files:**
- Create: `src/app/showcase/component-page/component-page.component.ts`
- Create: `src/app/showcase/component-page/component-page.component.html`
- Create: `src/app/showcase/component-page/component-page.component.scss`
- Create: `src/app/showcase/package-index/package-index.component.ts`
- Create: `src/app/showcase/package-index/package-index.component.html`
- Create: `src/app/showcase/package-index/package-index.component.scss`
- Create: `src/app/showcase/registry.guards.ts`
- Modify: `src/app/app.routes.ts`

**Interfaces:**
- Consumes: `REGISTRY`, `findEntry`, `entriesOfPackage` (tâche 7) ; `TA_API`, `DEMO_SOURCES`, `DEMO_INDEX` (tâche 6) ; `ApiTableComponent`, `ExampleBlockComponent` (tâche 8).
- Produces: routes `/:pkg/:component` et `/:pkg`, gardes `canMatchComponentPage` et `canMatchPackageIndex`.

- [ ] **Step 1: Écrire les gardes de route**

`src/app/showcase/registry.guards.ts` :

```ts
import { CanMatchFn } from "@angular/router";

import { REGISTRY } from "./registry";

/**
 * N'active la page composant que pour une paire paquet/sélecteur connue du
 * registre. Sans cette garde, `/:pkg/:component` capterait les routes
 * thématiques héritées comme `/ui/basics`.
 */
export const canMatchComponentPage: CanMatchFn = (_route, segments) => {
  if (segments.length !== 2) {
    return false;
  }
  const [short, id] = segments.map((segment) => segment.path);
  return REGISTRY.some((entry) => entry.short === short && entry.id === id);
};

/** N'active l'index de paquet que pour un paquet ayant au moins une démo. */
export const canMatchPackageIndex: CanMatchFn = (_route, segments) => {
  if (segments.length !== 1) {
    return false;
  }
  return REGISTRY.some((entry) => entry.short === segments[0].path);
};
```

- [ ] **Step 2: Écrire la page composant**

`src/app/showcase/component-page/component-page.component.ts` :

```ts
import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";

import { catchError, from, map, of, switchMap } from "rxjs";

import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";
import { ComponentDemo } from "../demo.types";
import { TA_API } from "../generated/api-metadata";
import { DEMO_INDEX, DEMO_SOURCES } from "../generated/demo-sources";
import { findEntry, RegistryEntry } from "../registry";
import { ApiTableComponent } from "./api-table.component";
import { ExampleBlockComponent } from "./example-block.component";

@Component({
  standalone: true,
  selector: "app-component-page",
  imports: [
    ApiTableComponent,
    ExampleBlockComponent,
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./component-page.component.html",
  styleUrl: "./component-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentPage {
  private _route = inject(ActivatedRoute);

  /** Entrée de registre de la route courante — disponible immédiatement. */
  readonly entry = toSignal(
    this._route.paramMap.pipe(
      map((params) => findEntry(params.get("pkg") ?? "", params.get("component") ?? "") ?? null)
    ),
    { initialValue: null }
  );

  /**
   * Démo chargée, **mémorisée avec l'identifiant qui l'a produite**.
   *
   * Angular réutilise l'instance de cette page quand on navigue d'un composant à
   * l'autre : sans cette marque, une résolution tardive afficherait les exemples
   * de l'ancien composant sous le titre du nouveau. La comparaison d'identifiant
   * faite plus bas garantit qu'on ne rend jamais une démo qui n'est pas la sienne.
   *
   * Le `catchError` est indispensable, et à l'intérieur du `switchMap` : une erreur
   * qui remonterait au flux extérieur tuerait la souscription pour de bon, et plus
   * aucune navigation ne remettrait la page à jour — un chunk manquant après un
   * redéploiement gèlerait la vitrine entière jusqu'au rechargement.
   */
  private readonly _loaded = toSignal(
    this._route.paramMap.pipe(
      map((params) => findEntry(params.get("pkg") ?? "", params.get("component") ?? "") ?? null),
      switchMap((entry) =>
        entry
          ? from(entry.load()).pipe(
              map((module) => ({ id: entry.id, demo: module.DEMO as ComponentDemo | null })),
              catchError((error: unknown) => {
                console.error(`[vitrine] échec du chargement de la démo "${entry.id}"`, error);
                return of({ id: entry.id, demo: null as ComponentDemo | null });
              })
            )
          : of(null)
      )
    ),
    { initialValue: null }
  );

  /** La démo n'est rendue que si elle provient bien du composant affiché. */
  readonly demo = computed(() => {
    const loaded = this._loaded();
    return loaded && loaded.id === this.entry()?.id ? loaded.demo : null;
  });

  /** Le chargement s'est terminé sans démo : l'import a échoué. */
  readonly loadFailed = computed(() => {
    const loaded = this._loaded();
    return !!loaded && loaded.id === this.entry()?.id && loaded.demo === null;
  });

  readonly api = computed(() => {
    const entry = this.entry();
    return entry ? (TA_API[entry.id] ?? null) : null;
  });

  readonly importLine = computed(() => {
    const api = this.api();
    return api ? `import { ${api.className} } from "${api.pkg}";` : "";
  });

  /**
   * Titre d'exemple vers nom de classe, lu dans l'index généré. Passer par
   * `example.component.name` serait plus court mais dépendrait de la
   * préservation des noms de classes à la minification, qu'aucune garantie ne
   * couvre ; l'index, lui, est figé à la génération.
   */
  private _classNameByTitle = computed<Record<string, string>>(() => {
    const entry = this.entry();
    const examples = entry ? (DEMO_INDEX[entry.id]?.examples ?? []) : [];
    return Object.fromEntries(examples.map((example) => [example.title, example.className]));
  });

  sourceOf(title: string): string {
    const className = this._classNameByTitle()[title];
    return className ? (DEMO_SOURCES[className] ?? "") : "";
  }
}
```

`src/app/showcase/component-page/component-page.component.html` :

```html
@if (this.entry(); as entry) {
  <app-page-layout
    [eyebrow]="entry.pkg"
    [title]="entry.id"
    [description]="this.demo()?.summary ?? ''"
  >
    <div class="sections">
      @if (this.api(); as api) {
        <section class="identity" data-testid="component-identity">
          <ta-title [level]="2">Import</ta-title>
          <pre class="identity-import" data-testid="import-line"><code>{{ this.importLine() }}</code></pre>
          <ta-text size="sm">
            Classe <code>{{ api.className }}</code> — source
            <code>{{ api.file }}</code>
          </ta-text>
          @if (api.doc) {
            <ta-text size="sm">{{ api.doc }}</ta-text>
          }
        </section>
      }

      @if (this.demo(); as demo) {
        @if (demo.notRenderable; as blocked) {
          <section class="not-renderable" data-testid="not-renderable">
            <ta-title [level]="2">Pas de rendu isolé</ta-title>
            <ta-text size="sm">{{ blocked.reason }}</ta-text>
            <pre class="identity-import"><code>{{ blocked.usage }}</code></pre>
          </section>
        }

        @for (example of demo.examples; track example.title) {
          <app-example-block
            [heading]="example.title"
            [description]="example.description ?? ''"
            [example]="example.component"
            [source]="this.sourceOf(example.title)"
          ></app-example-block>
        }

        @if (demo.notes) {
          <section class="notes" data-testid="component-notes">
            <ta-title [level]="2">Notes</ta-title>
            <ta-text size="sm">{{ demo.notes }}</ta-text>
          </section>
        }
      } @else if (this.loadFailed()) {
        <section class="load-error" data-testid="demo-load-error">
          <ta-title [level]="2">Démonstration indisponible</ta-title>
          <ta-text size="sm">
            Le chargement de cette démonstration a échoué. Le tableau d'API ci-dessous
            reste exact, et la navigation vers les autres composants fonctionne.
          </ta-text>
        </section>
      }

      @if (this.api(); as api) {
        <app-api-table [entry]="api"></app-api-table>
      }
    </div>
  </app-page-layout>
}
```

`src/app/showcase/component-page/component-page.component.scss` :

```scss
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/flex";
@use "ta/utils/mixins/fonts";

.identity,
.notes,
.not-renderable,
.load-error {
  @include flex.flex-column();
  gap: common.get-var(space, sm);
  padding: common.get-var(space, lg);
  background: common.get-var(surface, primary);
  border: 1px solid common.get-var(border, tertiary);
  border-radius: common.get-var(radius, rounded);
}

.identity-import {
  overflow-x: auto;
  margin: 0;
  padding: common.get-var(space, sm) common.get-var(space, md);
  border-radius: common.get-var(radius, rounded);
  background: common.get-var(surface, secondary);

  code {
    @include fonts.fontSizeBody(sm);
    color: common.get-var(text, primary);
    font-family: "SFMono-Regular", "JetBrains Mono", "Menlo", "Consolas", monospace;
  }
}
```

- [ ] **Step 3: Écrire l'index de paquet**

`src/app/showcase/package-index/package-index.component.ts` :

```ts
import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";

import { map } from "rxjs";

import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";
import { DEMO_INDEX } from "../generated/demo-sources";
import { entriesOfPackage, RegistryEntry } from "../registry";

interface IndexGroup {
  name: string;
  entries: RegistryEntry[];
}

@Component({
  standalone: true,
  selector: "app-package-index",
  imports: [PageLayoutComponent, RouterLink, TextComponent, TitleComponent],
  templateUrl: "./package-index.component.html",
  styleUrl: "./package-index.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageIndexPage {
  private _short = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((params) => params.get("pkg") ?? "")),
    { initialValue: "" }
  );

  readonly short = computed(() => this._short());

  readonly pkg = computed(() => entriesOfPackage(this._short())[0]?.pkg ?? "");

  readonly groups = computed<IndexGroup[]>(() => {
    const byGroup = new Map<string, RegistryEntry[]>();
    for (const entry of entriesOfPackage(this._short())) {
      const bucket = byGroup.get(entry.group) ?? [];
      bucket.push(entry);
      byGroup.set(entry.group, bucket);
    }
    return [...byGroup.entries()]
      .map(([name, entries]) => ({ name, entries: entries.sort((a, b) => a.id.localeCompare(b.id)) }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  summaryOf(id: string): string {
    return DEMO_INDEX[id]?.summary ?? "";
  }
}
```

`src/app/showcase/package-index/package-index.component.html` :

```html
<app-page-layout
  [eyebrow]="this.pkg()"
  [title]="this.pkg()"
  description="Un composant par carte. Chaque page présente ses variantes, son API et son code."
>
  <div class="sections">
    @for (group of this.groups(); track group.name) {
      <section data-testid="index-group">
        <ta-title [level]="2">{{ group.name }}</ta-title>
        <div class="index-grid">
          @for (entry of group.entries; track entry.id) {
            <a
              class="index-card"
              data-testid="index-card"
              [routerLink]="['/', entry.short, entry.id]"
            >
              <ta-title [level]="3">{{ entry.id }}</ta-title>
              <ta-text size="sm">{{ this.summaryOf(entry.id) }}</ta-text>
            </a>
          }
        </div>
      </section>
    }
  </div>
</app-page-layout>
```

`src/app/showcase/package-index/package-index.component.scss` :

```scss
@use "ta/utils/mixins/common";
@use "ta/utils/mixins/flex";

.index-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: common.get-var(space, md);
}

.index-card {
  @include flex.flex-column();
  gap: common.get-var(space, xs);
  padding: common.get-var(space, md);
  background: common.get-var(surface, primary);
  border: 1px solid common.get-var(border, tertiary);
  border-radius: common.get-var(radius, rounded);
  color: common.get-var(text, primary);
  text-decoration: none;
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    background: common.get-var(surface, hover, primary);
    border-color: common.get-var(border, secondary);
  }
}
```

- [ ] **Step 4: Déclarer les routes au bon endroit**

Dans `src/app/app.routes.ts`, insérer la route composant **avant** la route `ui`, et la route d'index **après** toutes les routes héritées mais avant le joker `**`.

Juste après l'entrée `{ path: "icons", … }`, ajouter :

```ts
  // Placée avant les routes thématiques héritées : sa garde n'accepte qu'une
  // paire connue du registre, donc `/ui/basics` continue d'atteindre le shell
  // hérité tandis que `/ui/ta-button` atteint la page générique.
  {
    path: ":pkg/:component",
    canMatch: [canMatchComponentPage],
    loadComponent: () =>
      import("./showcase/component-page/component-page.component").then((c) => c.ComponentPage),
  },
```

Juste avant `{ path: "**", redirectTo: "/home" }`, ajouter :

```ts
  // Placée après les routes héritées : `/ui` continue d'ouvrir le shell existant
  // tant qu'il vit, et bascule seule sur l'index le jour où il disparaît.
  {
    path: ":pkg",
    canMatch: [canMatchPackageIndex],
    loadComponent: () =>
      import("./showcase/package-index/package-index.component").then((c) => c.PackageIndexPage),
  },
```

Et en tête de fichier, après l'import de `Routes` :

```ts
import { canMatchComponentPage, canMatchPackageIndex } from "./showcase/registry.guards";
```

- [ ] **Step 5: Vérifier la compilation et le routage à la main**

```powershell
npx ng build Techatome --configuration development
```

Attendu : compilation réussie.

```powershell
npx ng serve --port 4300
```

Puis vérifier dans un navigateur : `/ui/ta-button` affiche la page générique, `/ui/basics` affiche toujours la page héritée, `/form-input` affiche l'index de paquet, `/form-input/ta-input-textbox` affiche la page du champ texte.

- [ ] **Step 6: Point de contrôle**

Message suggéré : `feat(showcase): page composant générique et index de paquet`

---

## Task 10: Navigation par registre avec recherche

**Files:**
- Modify: `src/app/app.component.ts`
- Modify: `src/app/app.component.html`
- Modify: `src/app/app.component.scss`

**Interfaces:**
- Consumes: `REGISTRY` (tâche 7), `DEMO_INDEX` et `TA_API` (tâche 6).
- Produces: un champ de recherche `data-testid="nav-search"` et des liens `data-testid="nav-component-link"`.

- [ ] **Step 1: Ajouter la recherche au composant racine**

Dans `src/app/app.component.ts`, ajouter aux imports du fichier :

```ts
import { TA_API } from "./showcase/generated/api-metadata";
import { DEMO_INDEX } from "./showcase/generated/demo-sources";
import { REGISTRY, RegistryEntry } from "./showcase/registry";
```

Le champ se lie par `[value]` et `(input)` natifs : **n'ajoute pas `FormsModule`**, il
serait du poids mort recopié dans toutes les pages à venir.

Puis ajouter à la classe :

```ts
  /** Texte saisi dans la recherche de composants. */
  readonly query = signal("");

  /**
   * Composants du registre correspondant à la recherche. La comparaison porte
   * sur le sélecteur, le nom de classe et le résumé — tous trois disponibles
   * sans importer la moindre démo.
   */
  private readonly _matches = computed<RegistryEntry[]>(() => {
    const needle = this.query().trim().toLowerCase();
    if (needle.length < 2) {
      return [];
    }
    return REGISTRY.filter((entry) => {
      const className = TA_API[entry.id]?.className ?? "";
      const summary = DEMO_INDEX[entry.id]?.summary ?? "";
      return `${entry.id} ${className} ${summary}`.toLowerCase().includes(needle);
    });
  });

  readonly searchResults = computed(() => this._matches().slice(0, MAX_SEARCH_RESULTS));

  /**
   * Correspondances non affichées. À 183 composants, une requête courte en
   * dépasse largement la limite : on annonce le reste plutôt que de tronquer
   * en silence.
   */
  readonly hiddenResultCount = computed(() =>
    Math.max(0, this._matches().length - MAX_SEARCH_RESULTS)
  );

  onQueryInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  clearQuery(): void {
    this.query.set("");
  }
```

Ajouter `computed` et `signal` aux imports depuis `@angular/core`, et déclarer la
limite au niveau module, au-dessus de l'interface `MenuItem` :

```ts
/** Au-delà, la liste cesse d'aider : mieux vaut préciser la recherche. */
const MAX_SEARCH_RESULTS = 20;
```

- [ ] **Step 2: Ajouter le champ et la liste au template**

Dans `src/app/app.component.html`, juste avant la liste `menu` existante de la barre latérale, insérer :

```html
<div class="nav-search">
  <input
    type="search"
    data-testid="nav-search"
    aria-label="Rechercher un composant"
    placeholder="Rechercher un composant…"
    [value]="this.query()"
    (input)="this.onQueryInput($event)"
  />
</div>

<!--
  Zone annoncée, **toujours montée**. Un lecteur d'écran ne surveille de façon
  fiable qu'une région déjà présente dans le DOM avant que son contenu ne change :
  insérer d'un coup un nœud portant à la fois `aria-live` et son contenu n'est pas
  annoncé de manière garantie. Le conteneur reste donc là en permanence, vide
  quand la recherche l'est, et seul son contenu varie. Elle englobe aussi les
  messages, pour qu'une absence de résultat s'entende comme un résultat.
-->
<div class="nav-results-region" aria-live="polite">
  @if (this.query().trim().length > 0) {
    @if (this.searchResults().length > 0) {
      <ul class="nav-results" data-testid="nav-results">
        @for (result of this.searchResults(); track result.id) {
          <li>
            <a
              data-testid="nav-component-link"
              [routerLink]="['/', result.short, result.id]"
              (click)="this.clearQuery()"
            >
              <span class="nav-result-id">{{ result.id }}</span>
              <span class="nav-result-pkg">{{ result.pkg }}</span>
            </a>
          </li>
        }
      </ul>

      @if (this.hiddenResultCount() > 0) {
        <p class="nav-results-note" data-testid="nav-results-more">
          {{ this.hiddenResultCount() }} autre(s) correspondance(s) — précisez la recherche.
        </p>
      }
    } @else if (this.query().trim().length < 2) {
      <p class="nav-results-note" data-testid="nav-results-hint">
        Tapez au moins deux caractères.
      </p>
    } @else {
      <p class="nav-results-note" data-testid="nav-results-empty">
        Aucun composant ne correspond.
      </p>
    }
  }
</div>
```

- [ ] **Step 3: Styler la recherche**

Ajouter à `src/app/app.component.scss` :

```scss
.nav-search {
  padding: common.get-var(space, sm) common.get-var(space, md);

  input {
    @include fonts.fontSizeBody(sm);
    width: 100%;
    padding: common.get-var(space, xs) common.get-var(space, sm);
    border: 1px solid common.get-var(border, secondary);
    border-radius: common.get-var(radius, rounded);
    background: common.get-var(surface, primary);
    color: common.get-var(text, primary);

    &::placeholder {
      color: common.get-var(text, tertiary);
    }
  }
}

.nav-results {
  margin: 0;
  padding: 0 common.get-var(space, sm);
  list-style: none;

  a {
    @include flex.flex-column();
    gap: 2px;
    padding: common.get-var(space, xs) common.get-var(space, sm);
    border-radius: common.get-var(radius, rounded);
    color: common.get-var(text, primary);
    text-decoration: none;

    &:hover {
      background: common.get-var(surface, hover, primary);
    }
  }
}

.nav-result-id {
  @include fonts.fontSizeBody(sm);
  font-family: "SFMono-Regular", "JetBrains Mono", "Menlo", "Consolas", monospace;
}

.nav-result-pkg {
  @include fonts.fontSizeBody(xs);
  color: common.get-var(text, secondary);
}

.nav-results-note {
  @include fonts.fontSizeBody(xs);
  margin: 0;
  padding: common.get-var(space, xs) common.get-var(space, md);
  color: common.get-var(text, tertiary);
}
```

Si `app.component.scss` ne charge pas encore les mixins `fonts` et `flex`, ajouter les `@use` correspondants en tête de fichier, à la suite de ceux déjà présents.

- [ ] **Step 4: Vérifier la compilation**

```powershell
npx ng build Techatome --configuration development
```

Attendu : compilation réussie.

- [ ] **Step 5: Point de contrôle**

Message suggéré : `feat(showcase): recherche de composants dans la navigation`

---

## Task 11: Cas harness dérivés du registre

**Files:**
- Create: `src/app/e2e-harness/registry-harness-cases.ts`
- Modify: `src/app/app.config.ts`

**Interfaces:**
- Consumes: `HarnessCase.load` (tâche 1), `REGISTRY` (tâche 7), `DEMO_INDEX` (tâche 6).
- Produces: `harnessCasesFromRegistry(): HarnessCase[]`, identifiants de la forme `<sélecteur>--<slug du titre>`.

- [ ] **Step 1: Écrire le générateur de cas**

`src/app/e2e-harness/registry-harness-cases.ts` :

```ts
import { HarnessCase } from "@ta/testing";

import { DEMO_INDEX } from "../showcase/generated/demo-sources";
import { REGISTRY } from "../showcase/registry";

/**
 * Dérive un cas harness par exemple de la vitrine. Les titres proviennent de
 * l'index généré, si bien qu'aucune démo n'est importée tant qu'un test ne
 * demande pas sa route.
 */
export function harnessCasesFromRegistry(): HarnessCase[] {
  const cases: HarnessCase[] = [];

  for (const entry of REGISTRY) {
    const index = DEMO_INDEX[entry.id];
    if (!index) {
      continue;
    }

    for (const example of index.examples) {
      if (example.skipHarness) {
        continue;
      }

      cases.push({
        id: `${entry.id}--${example.slug}`,
        label: `${entry.id} — ${example.title}`,
        load: () =>
          entry.load().then((module) => {
            const found = module.DEMO.examples.find((candidate) => candidate.title === example.title);
            if (!found) {
              throw new Error(`Exemple "${example.title}" introuvable dans la démo ${entry.id}`);
            }
            return found.component;
          }),
      });
    }
  }

  return cases;
}
```

- [ ] **Step 2: Câbler la coexistence des deux catalogues**

Dans `src/app/app.config.ts`, remplacer l'appel existant :

```ts
    provideHarnessCases(HARNESS_CASES),
```

par :

```ts
    // Les deux catalogues coexistent le temps de la migration : les 166 specs
    // Playwright existantes visent des cas groupés (`/e2e-harness/core`), le
    // registre produit un cas par exemple (`ta-button--types`). Les identifiants
    // ne peuvent pas entrer en collision.
    provideHarnessCases([...HARNESS_CASES, ...harnessCasesFromRegistry()]),
```

et ajouter l'import :

```ts
import { harnessCasesFromRegistry } from "./e2e-harness/registry-harness-cases";
```

- [ ] **Step 3: Vérifier la compilation**

```powershell
npx ng build Techatome --configuration development
```

Attendu : compilation réussie.

- [ ] **Step 4: Vérifier la non-régression de toute la suite E2E**

```powershell
npx playwright test e2e/specs
```

Attendu : la suite existante reste entièrement verte. Un échec ici signalerait une collision d'identifiants ou un démarrage cassé.

- [ ] **Step 5: Point de contrôle**

Message suggéré : `feat(showcase): dériver les cas harness du registre de démos`

---

## Task 12: Suppression des références mortes à `@ta/calendar`

`projects/calendar` est absent du disque et de l'index git, mais le paquet reste déclaré dans quatre fichiers et sert une page d'attente. Cette tâche supprime la déclaration plutôt que de documenter un paquet inexistant.

**Files:**
- Modify: `tsconfig.json`
- Modify: `angular.json`
- Modify: `src/app/app.routes.ts`
- Modify: `src/app/app.component.ts`
- Modify: `CLAUDE.md`

**Interfaces:**
- Consumes: rien.
- Produces: rien. Tâche isolée, annulable indépendamment.

- [ ] **Step 1: Confirmer l'absence avant de supprimer**

```powershell
git ls-files projects/calendar
Test-Path projects/calendar
```

Attendu : aucune sortie pour la première commande, `False` pour la seconde. **Si l'une des deux répond autrement, arrêter cette tâche et le signaler** : le paquet existerait alors et devrait rejoindre la vitrine.

- [ ] **Step 2: Retirer le chemin TypeScript**

Dans `tsconfig.json`, supprimer la ligne :

```json
      "@ta/calendar": ["projects/calendar"],
```

- [ ] **Step 3: Retirer le projet Angular**

Dans `angular.json`, supprimer l'entrée `"@ta/calendar"` du bloc `projects` dans son intégralité.

- [ ] **Step 4: Retirer la route et l'entrée de menu**

Dans `src/app/app.routes.ts`, supprimer le bloc :

```ts
  {
    path: "calendar",
    data: { pkg: "@ta/calendar", title: "Calendrier" },
    loadComponent: () =>
      import("./showcase/coming-soon/coming-soon.component").then((c) => c.ComingSoonPage),
  },
```

Dans `src/app/app.component.ts`, supprimer la ligne du tableau `menu` :

```ts
    { label: "@ta/calendar", route: "/calendar", icon: "calendar_month", soon: true },
```

- [ ] **Step 5: Corriger la documentation**

Dans `CLAUDE.md`, supprimer `@ta/calendar` des trois endroits où il apparaît : la liste « Feature Libraries », la ligne `Layer 5` du graphe de dépendances, et la ligne `@ta/calendar` du tableau « Library File Paths ». Supprimer également la ligne `@ta/calendar` du « Component Catalog Quick Reference » si elle existe.

- [ ] **Step 6: Vérifier qu'il ne reste rien**

```powershell
Select-String -Pattern "ta/calendar" -Path tsconfig.json,angular.json,CLAUDE.md -SimpleMatch
Select-String -Pattern "calendar" -Path src/app/app.routes.ts,src/app/app.component.ts -SimpleMatch
```

Attendu : aucune correspondance.

- [ ] **Step 7: Vérifier que tout compile encore**

```powershell
npx ng build Techatome --configuration development
yarn showcase:metadata
```

Attendu : compilation réussie, génération inchangée (le générateur ignorait déjà le paquet absent).

- [ ] **Step 8: Point de contrôle**

Message suggéré : `chore: supprimer les références au paquet @ta/calendar inexistant`

---

## Task 13: Specs Playwright de la fondation

**Files:**
- Create: `e2e/specs/showcase/component-page.spec.ts`
- Create: `e2e/specs/showcase/package-index.spec.ts`
- Create: `e2e/specs/showcase/registry-harness.spec.ts`

**Interfaces:**
- Consumes: tout ce qui précède.
- Produces: la preuve exécutable que la fondation tient.

- [ ] **Step 1: Écrire la spec de la page composant**

`e2e/specs/showcase/component-page.spec.ts` :

```ts
import { expect, test } from "@playwright/test";

test.describe("Page composant générique", () => {
  test("ta-button : quatre exemples, ligne d'import, API lue depuis la source", async ({ page }) => {
    await page.goto("/ui/ta-button");

    await expect(page.getByTestId("import-line")).toContainText(
      'import { ButtonComponent } from "@ta/ui";'
    );
    await expect(page.getByTestId("example-block")).toHaveCount(4);

    // Le premier exemple rend bien les quatre types côte à côte.
    const firstRender = page.getByTestId("example-render").first();
    await expect(firstRender.locator("ta-button")).toHaveCount(4);

    // L'API vient du parseur, pas d'un tableau écrit à la main.
    const typeRow = page.getByTestId("api-row-type");
    await expect(typeRow).toContainText('"primary" | "secondary" | "tertiary" | "danger"');
    await expect(typeRow).toContainText('"primary"');
    await expect(page.getByTestId("api-row-action")).toBeVisible();
  });

  test("le code affiché est le template qui s'exécute", async ({ page }) => {
    await page.goto("/ui/ta-button");

    const firstBlock = page.getByTestId("example-block").first();
    await expect(firstBlock.getByTestId("example-source")).toBeHidden();

    await firstBlock.getByTestId("toggle-source").click();

    await expect(firstBlock.getByTestId("example-source")).toContainText(
      '<ta-button type="primary">Primary</ta-button>'
    );
  });

  test("ta-card : la projection de contenu est rendue", async ({ page }) => {
    await page.goto("/ui/ta-card");

    await expect(page.getByTestId("example-block")).toHaveCount(3);
    await expect(page.locator("ta-card-title").first()).toContainText("Titre de la carte");
  });

  test("ta-input-textbox : alias résolu et membres hérités séparés", async ({ page }) => {
    await page.goto("/form-input/ta-input-textbox");

    // `inputModel` est déclaré sur `TaAbstractInputComponent`, pas sur `TextBoxComponent` :
    // c'est donc un membre hérité, replié par défaut avec les autres.
    await expect(page.getByTestId("api-inherited")).toBeHidden();
    await expect(page.getByTestId("api-row-input")).toHaveCount(0);

    await page.getByTestId("toggle-inherited").click();

    await expect(page.getByTestId("api-inherited")).toContainText("TaAbstractInputComponent");

    // `inputModel` est exposé sous l'alias `input` : c'est ce nom qui compte.
    const inputRow = page.getByTestId("api-row-input");
    await expect(inputRow).toBeVisible();
    await expect(inputRow).toContainText("requis");
  });

  test("les notes d'une démo sont rendues", async ({ page }) => {
    await page.goto("/form-input/ta-input-textbox");

    // `ta-input-textbox` porte des notes ; sans elles la section n'existe pas.
    await expect(page.getByTestId("component-notes")).toContainText("ta-form");
  });

  test("le bouton de copie confirme son action", async ({ page, context }) => {
    // Sans cette permission, l'écriture dans le presse-papiers échoue et le
    // bouton afficherait « Échec de la copie » — ce qui serait aussi un résultat
    // valide du point de vue de la machine à états, mais pas celui qu'on teste.
    await context.grantPermissions(["clipboard-write"]);
    await page.goto("/ui/ta-button");

    const block = page.getByTestId("example-block").first();
    await expect(block.getByTestId("copy-source")).toHaveText("Copier");

    await block.getByTestId("copy-source").click();

    await expect(block.getByTestId("copy-source")).toHaveText("Copié");
  });

  test("un échec de copie est annoncé", async ({ page }) => {
    // On force le rejet plutôt que de compter sur le modèle de permissions du
    // navigateur : ce test doit exercer le chemin d'erreur de l'application,
    // pas celui de Chromium.
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: () => Promise.reject(new Error("refus simulé")) },
      });
    });
    await page.goto("/ui/ta-button");

    const button = page.getByTestId("example-block").first().getByTestId("copy-source");
    await button.click();

    await expect(button).toHaveText("Échec de la copie");
  });

  test("un échec survenu juste après un succès reste affiché", async ({ page }) => {
    // Le premier appel réussit, les suivants échouent. Sans annulation de la
    // minuterie, le retour au repos programmé par le succès à 1500 ms viendrait
    // effacer le message d'échec — le message le plus important deviendrait le
    // plus fugace. C'est exactement ce que `clearTimeout` empêche.
    await page.addInitScript(() => {
      let first = true;
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: {
          writeText: () => {
            if (first) {
              first = false;
              return Promise.resolve();
            }
            return Promise.reject(new Error("refus simulé"));
          },
        },
      });
    });
    await page.goto("/ui/ta-button");

    const button = page.getByTestId("example-block").first().getByTestId("copy-source");

    await button.click();
    // Cette assertion garantit qu'on est encore dans la fenêtre de 1500 ms.
    await expect(button).toHaveText("Copié");

    await button.click();
    await expect(button).toHaveText("Échec de la copie");

    // Attente délibérée : c'est l'écoulement du temps qui est sous test. La
    // minuterie du succès aurait expiré ici si elle n'avait pas été annulée.
    await page.waitForTimeout(2000);
    await expect(button).toHaveText("Échec de la copie");
  });

  test("les routes thématiques héritées ne sont pas captées par la page générique", async ({ page }) => {
    await page.goto("/ui/basics");

    // La page héritée n'a ni ligne d'import ni tableau d'API généré.
    await expect(page.getByTestId("import-line")).toHaveCount(0);
    await expect(page.locator("ta-button").first()).toBeVisible();
  });
});
```

- [ ] **Step 2: Écrire la spec de l'index de paquet**

`e2e/specs/showcase/package-index.spec.ts` :

```ts
import { expect, test } from "@playwright/test";

test("l'index d'un paquet liste ses composants et mène à leur page", async ({ page }) => {
  await page.goto("/form-input");

  await expect(page.getByTestId("index-card")).toHaveCount(1);

  await page.getByTestId("index-card").first().click();

  await expect(page).toHaveURL(/\/form-input\/ta-input-textbox$/);
  await expect(page.getByTestId("import-line")).toContainText("@ta/form-input");
});

test("la recherche de la navigation trouve un composant par sélecteur", async ({ page }) => {
  await page.goto("/home");

  await page.getByTestId("nav-search").fill("ta-card");

  const results = page.getByTestId("nav-component-link");
  await expect(results).toHaveCount(1);

  await results.first().click();
  await expect(page).toHaveURL(/\/ui\/ta-card$/);
});
```

- [ ] **Step 3: Écrire la spec du harness dérivé**

`e2e/specs/showcase/registry-harness.spec.ts` :

```ts
import { expect, test } from "@playwright/test";

test("chaque exemple de la vitrine est adressable dans le harness", async ({ page }) => {
  await page.goto("/e2e-harness/ta-button--types");

  await expect(page.getByTestId("harness-root")).toBeVisible();
  await expect(page.locator("ta-button")).toHaveCount(4);
});

test("un exemple de champ de formulaire monte isolément", async ({ page }) => {
  await page.goto("/e2e-harness/ta-input-textbox--valeur-simple");

  await expect(page.getByTestId("harness-root")).toBeVisible();
  await expect(page.locator("ta-input-textbox")).toBeVisible();
});
```

- [ ] **Step 4: Lancer les nouvelles specs**

```powershell
npx playwright test e2e/specs/showcase e2e/specs/harness
```

Attendu : 16 tests verts — 9 pour la page composant, 2 pour l'index et la
recherche, 2 pour le harness dérivé, 3 pour le témoin de chargement paresseux
(le troisième couvre l'échec de chargement, ajouté en ronde de correction).

- [ ] **Step 5: Lancer la suite complète**

```powershell
yarn e2e
```

Attendu : la totalité verte — les 176 tests antérieurs plus les 11 ajoutés par cette phase.

- [ ] **Step 6: Vérifier la chaîne complète depuis zéro**

```powershell
yarn showcase:metadata
yarn showcase:metadata:check
yarn test:showcase-metadata
npx ng build Techatome --configuration development
```

Attendu : tout vert, et `showcase:metadata:check` confirme que les fichiers générés committés correspondent aux sources.

- [ ] **Step 7: Point de contrôle final de la phase**

Message suggéré : `test(showcase): couvrir la fondation de la vitrine par des specs E2E`

---

## Fin de phase 0

La phase est terminée quand ces cinq affirmations sont vérifiées par une commande :

1. `yarn test:showcase-metadata` — 31 tests verts sur le générateur.
2. `yarn showcase:metadata:check` — les fichiers générés sont à jour.
3. `npx ng build Techatome --configuration development` — l'application compile.
   La configuration `production` échoue sur un dépassement de budget SCSS
   préexistant et commité (`theme.component.scss`, 11 442 octets pour une limite
   de 4 ko), sans rapport avec la vitrine.
4. `yarn e2e` — la suite complète est verte, y compris les 11 tests de la fondation.
5. `/ui/ta-button`, `/ui/ta-card` et `/form-input/ta-input-textbox` affichent variantes, code copiable et API, et chaque exemple est adressable sous `/e2e-harness/<sélecteur>--<slug>`.

À ce moment, et seulement à ce moment, les phases 1 à 6 deviennent mécaniques : écrire un fichier `*.demo.ts`, ajouter une ligne au registre, régénérer. Le plan de la phase 1 (`@ta/ui`, 99 composants) sera écrit à partir de ce qu'aura appris la phase 0 — notamment la liste des membres non reconnus remontée par `COVERAGE.unresolvedMembers`.
