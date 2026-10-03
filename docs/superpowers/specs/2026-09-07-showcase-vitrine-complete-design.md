# Vitrine complète `@ta/*` — Design Spec

**Date :** 2026-09-07
**Statut :** En relecture
**Remplace :** `2026-06-10-showcase-complete-design.md` (phase 1 livrée, phases 2+ jamais écrites)

## Objectif

Transformer l'application showcase en vitrine de référence exhaustive du monorepo :
une page par composant public, toutes ses variantes rendues, son API réelle et le
code copiable de chaque exemple. Les paquets sans interface obtiennent des
démonstrations interactives sur données mockées.

## État des lieux (mesuré le 2026-09-07)

| Mesure | Valeur |
|---|---|
| Sélecteurs `ta-*` déclarés dans `projects/` | 206 |
| Composants `ta-*` atteignables depuis un `public-api.ts` | 184 |
| dont dans le périmètre de la vitrine (hors `ta-harness` de `@ta/testing`) | **183** |

> Chiffre confirmé le 2026-09-07 par le générateur de la phase 0, qui suit
> réellement les re-exports depuis chaque `public-api.ts` : 221 entrées d'API au
> total, dont **183 composants**, 29 services, 5 directives et 4 pipes. Une
> version intermédiaire du générateur en annonçait 185 : elle marquait à tort
> comme publics `ta-rich-paragraph-link` et `-text` de `@ta/cms`, qui ne sont
> jamais re-exportés — seuls leurs homonymes de `@ta/ui` le sont.
| Rendus quelque part dans `src/app/showcase/` | 98 |
| **Jamais rendus** | **108** |
| `@Injectable` dans les paquets | 54 |
| Directives / pipes `@ta/utils` | 6 / 4 |
| Classes `Input*` de `@ta/form-model` | 31 (+ 3 validateurs) |
| Stories Storybook existantes | 69 |
| Cas harness E2E existants | 32 |

Trous principaux : `@ta/core` entier (filtres, maps, clipboard), `@ta/menu` et
`@ta/notification` (pages d'attente), les visionneuses `@ta/files-basic`
(pdf/excel/word/image), `@ta/cms`, une trentaine de composants `@ta/ui`
(overlay-panel, toast, modales, validation, logo, placeholder…), et côté
`@ta/form` un formulaire monolithique montrant 19 types d'inputs sans aucune
variante (requis / désactivé / erreur / lecture seule).

### `@ta/calendar` n'existe pas

Le paquet est déclaré dans `tsconfig.json` (`"@ta/calendar": ["projects/calendar"]`),
dans `angular.json` et dans `CLAUDE.md`, mais `projects/calendar` est absent du
disque **et** de l'index git (`git ls-files projects/calendar` → 0 fichier).
La route `/calendar` sert une page d'attente pour un paquet sans code.

**Décision :** la vitrine ne promet pas de page `@ta/calendar`. La route, l'entrée
de sidebar et le chemin `tsconfig` sont supprimés dans la phase 0, et `CLAUDE.md`
est corrigé. Si le paquet est écrit un jour, il rejoindra la vitrine comme les autres.

## Principe directeur

> **Ce qui est répétitif est généré ; ce qui est créatif est écrit une fois.**

Écrire 183 pages à la main représente environ 20 000 lignes qui deviennent fausses
à la première évolution d'une bibliothèque. Seules les *variantes* sont rédigées à
la main. L'API, les extraits de code, l'index des paquets et l'arbre de navigation
sont dérivés des sources.

## Architecture

### Couche 1 — Extraction (génération au build)

`scripts/generate-showcase-metadata.mjs`, exécuté avec l'API compilateur
TypeScript (`typescript@5.4.5`, déjà présent à la racine).

**Entrée :** les chemins `@ta/*` de `tsconfig.json`. Pour chaque paquet, le script
part de `<dir>/src/public-api.ts` et suit récursivement les `export * from "./…"`.
Seule l'API publique est documentée : les composants internes
(`ta-input-container`, `ta-input-error`, `ta-input-layout`, les modales internes)
sont exclus par construction, sans liste noire à maintenir.

**Sortie 1 — `src/app/showcase/generated/api-metadata.ts`**

```ts
export interface TaApiMember {
  name: string;                 // nom d'alias si présent, sinon nom de propriété
  propertyName: string;         // nom réel dans la classe
  kind: "input" | "output" | "method" | "property";
  type: string;                 // texte du paramètre de type
  default?: string;             // littéral du premier argument, si présent
  required: boolean;
  doc?: string;                 // JSDoc de la propriété
  inheritedFrom?: string;       // classe de base d'origine
}

export interface TaApiEntry {
  id: string;                   // "ta-button" (sélecteur) ou nom de classe si sans sélecteur
  pkg: string;                  // "@ta/ui"
  className: string;            // "ButtonComponent"
  kind: "component" | "directive" | "pipe" | "service" | "model";
  file: string;                 // chemin relatif au dépôt
  doc?: string;                 // JSDoc de classe
  members: TaApiMember[];
}

export const TA_API: Record<string, TaApiEntry>;
```

Règles de reconnaissance, alignées sur le code réel du dépôt :

| Forme dans la source | Interprétation |
|---|---|
| `x = input<T>()` | input optionnel, sans défaut |
| `x = input<T>(v)` | input optionnel, défaut `v` |
| `x = input.required<T>()` | input **requis** |
| `x = input<T>(v, { alias: "y" })` | input exposé sous le nom `y` |
| `x = output<T>()` | output |
| `@Output() x = new EventEmitter<T>()` | output (31 occurrences résiduelles) |

L'`alias` est obligatoire à résoudre : `TaAbstractInputComponent` expose
`inputModel` sous le nom `input` et `standaloneMode` sous `standalone`. Un tableau
d'API qui afficherait le nom de propriété serait faux dans les templates.

**Héritage.** 50 composants étendent `TaBaseComponent`, 21 `TaAbstractInputComponent`,
7 `TaAbstractGridComponent`, 5 `BaseChartComponent`. La chaîne d'héritage est
remontée tant que la classe de base appartient au monorepo ; les membres hérités
sont marqués `inheritedFrom` et regroupés séparément dans le tableau affiché.

**Sortie 2 — `src/app/showcase/generated/demo-sources.ts`**

Le script parcourt `src/app/showcase/demos/**/*.demo.ts`, et pour chaque classe
d'exemple extrait le littéral `template:` désindenté :

```ts
export const DEMO_SOURCES: Record<string, string>;  // clé = nom de la classe d'exemple

/** Titres, résumés et drapeaux lisibles sans importer les démos. */
export const DEMO_INDEX: Record<string, {
  summary: string;
  examples: { title: string; slug: string; className: string; skipHarness: boolean }[];
}>;
```

L'extrait affiché est donc, par construction, le code qui s'exécute à l'écran.
Aucune dérive possible entre le rendu et le snippet.

`DEMO_INDEX` est indispensable au chargement paresseux : la recherche de la
sidebar et `harnessCasesFromRegistry()` ont besoin des résumés et des titres
d'exemples, et devraient sinon importer les 183 démos pour les obtenir.

**Sortie 3 — `src/app/showcase/generated/coverage.ts`**

```ts
export const COVERAGE: { documented: string[]; missing: string[]; unresolvedMembers: string[] };
```

Le script lit les champs `id` de `src/app/showcase/registry.ts` pour connaître les
composants documentés, et les compare aux clés de `TA_API`. `missing` liste les
composants publics sans démo enregistrée ; `unresolvedMembers` liste nommément
les propriétés dont la forme d'écriture n'a pas été reconnue — rien n'est omis
en silence. Sert à la fois à
l'affichage d'un badge de couverture et au garde-fou de la phase 6.

**Branchement :** scripts `prestart`, `prestart-local` et `prebuild-website` dans
`package.json`. Les trois fichiers générés sont commités (le build CI n'a alors
aucun prérequis) et un test échoue s'ils sont périmés par rapport aux sources.

### Couche 2 — Démos (écrites à la main)

Un fichier par composant : `src/app/showcase/demos/<pkg>/<selector>.demo.ts`.

```ts
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

export const DEMO: ComponentDemo = {
  id: "ta-button",
  summary: "Bouton d'action, décliné en 4 types × 3 tailles × 3 états.",
  examples: [
    { title: "Types", description: "…", component: TaButtonTypesExample },
    { title: "Tailles", component: TaButtonSizesExample },
    { title: "États", component: TaButtonStatesExample },
    { title: "Avec icône", component: TaButtonIconExample },
  ],
};
```

Contrat, dans `src/app/showcase/demo.types.ts` :

```ts
export interface DemoExample {
  title: string;
  description?: string;
  component: Type<unknown>;
  /** Exclut l'exemple du harness E2E (démo dépendant d'une permission, d'un timer…). */
  skipHarness?: boolean;
}

export interface ComponentDemo {
  id: string;                   // doit exister comme clé de TA_API
  summary: string;
  examples: DemoExample[];
  /**
   * Renseigné uniquement quand le composant ne peut pas être monté isolément
   * (dépendance à un jeton d'injection fourni par un conteneur, à une API
   * globale absente…). `examples` est alors vide et la page affiche cette
   * explication à la place, suivie du tableau d'API et d'un exemple d'usage
   * en code non exécuté.
   */
  notRenderable?: { reason: string; usage: string };
  /** Notes libres rendues sous les exemples (contraintes, pièges). */
  notes?: string;
}

Les campagnes E2E précédentes ont identifié des composants publics qui ne
montent pas seuls — les gabarits de bottom-sheet exigent `MAT_BOTTOM_SHEET_DATA`,
`ta-google-maps` exige le global `google`. Ils obtiennent une page complète
(API, usage, explication) sans rendu vivant. Une démo sans exemples **et** sans
`notRenderable` est une erreur de couverture.
```

**Règle de couverture des variantes.** Chaque input énuméré (union de littéraux)
donne un exemple montrant *toutes* ses valeurs ; les inputs booléens sont montrés
dans les deux états ; les combinaisons à fort impact visuel (`type × size`,
`type × state`) sont rendues en matrice, comme le fait déjà `/ui/basics`. Le
garde-fou de la phase 6 vérifie qu'aucun input énuméré n'a de valeur jamais rendue.

### Couche 3 — Rendu (une page générique)

| Route | Rôle |
|---|---|
| `/` | Accueil : couverture globale, entrée dans la recherche |
| `/theme` | Jetons de design (page actuelle conservée) |
| `/:pkg` | Index du paquet : grille de cartes, une par composant, générée depuis le registre |
| `/:pkg/:component` | Page composant |

`:pkg` est le nom court (`ui`, `form-input`, `core`…), `:component` le sélecteur
(`/ui/ta-button`). Un sélecteur inconnu redirige vers l'index du paquet.

La page composant se compose de :

1. **En-tête** — sélecteur, nom de classe, ligne d'import prête à copier
   (`import { ButtonComponent } from "@ta/ui";`), lien vers le fichier source,
   résumé de la démo.
2. **Exemples** — chacun rendu via `ngComponentOutlet`, avec bascule *voir le code*
   et bouton *copier* alimentés par `DEMO_SOURCES`.
3. **Tableau d'API** — inputs, outputs et méthodes publiques depuis `TA_API`,
   membres hérités repliés dans une section séparée.
4. **Notes** — le cas échéant.

**Registre** — `src/app/showcase/registry.ts`, chargement paresseux :

```ts
export interface RegistryEntry { id: string; pkg: string; group: string; load: () => Promise<{ DEMO: ComponentDemo }>; }
export const REGISTRY: RegistryEntry[];
```

`group` porte la famille affichée dans l'index de paquet (« Boutons », « Cartes »,
« Mise en page »…) : c'est la seule taxonomie écrite à la main, et elle remplace
les pages thématiques actuelles.

**Sidebar** — arbre paquet → composant, avec **champ de recherche** filtrant sur
sélecteur, nom de classe et résumé. Indispensable à 183 entrées.

## Réutilisation de l'existant

### Les cas E2E fusionnent avec les démos

`@ta/testing` définit déjà `HarnessCase = { id, label?, component }` et
`provideHarnessCases()`. Un exemple de démo a exactement cette forme.

**Obstacle :** `TaHarnessComponent` résout le composant de façon synchrone
(`this._cases.find(c => c.id === id)?.component`). Alimenter ce contrat depuis le
registre imposerait d'importer les 183 démos au démarrage de l'application, ce qui
ruine le chargement paresseux de la vitrine.

**Extension rétro-compatible de `@ta/testing`** (phase 0, ~15 lignes) :

```ts
export interface HarnessCase {
  id: string;
  label?: string;
  /** Composant monté directement. Exclusif avec `load`. */
  component?: Type<unknown>;
  /** Chargement paresseux du composant. Exclusif avec `component`. */
  load?: () => Promise<Type<unknown>>;
}
```

`TaHarnessComponent` privilégie `component` s'il est fourni, sinon attend `load()`
et rend le résultat. Les applications consommatrices existantes, qui ne
renseignent que `component`, ne changent pas d'un caractère.

La vitrine fournit alors :

```ts
export function harnessCasesFromRegistry(): HarnessCase[];  // id = "<selector>--<slug du titre>"
```

où chaque entrée porte un `load` pointant vers l'import paresseux de la démo.
`app.config.ts` s'en nourrit à la place de `HARNESS_CASES`. Chaque exemple de la
vitrine devient adressable en `/e2e-harness/ta-button--types` et donc testable.
Les 166 specs Playwright existantes adressent des cas **groupés** (`/e2e-harness/core`
monte cinq composants, distingués par `taTestId`), alors que le registre produit
un cas **par exemple**. Les deux jeux coexistent donc pendant la migration :

```ts
provideHarnessCases([...HARNESS_CASES, ...harnessCasesFromRegistry()])
```

Les identifiants ne peuvent pas entrer en collision (`core` face à
`ta-button--types`). Les 32 fichiers de `src/app/e2e-harness/cases/` sont
supprimés au fur et à mesure que les démos correspondantes existent, **après**
mise à jour des spécifications Playwright qui les ciblent. Un seul catalogue
subsiste à la fin de la phase 4.

### Les stories Storybook alimentent les variantes

Les 69 stories portent des `template` et des `args` déjà rédigés, ainsi que des
jeux de données réutilisables (`projects/form/__mock__/form.ts`,
`projects/files/__mock__/files.ts`, `projects/menu/src/lib/components/menu/__mock__/menu.ts`).
Leur contenu est récolté comme matière première des démos. Les fichiers `.stories.ts`
ne sont ni déplacés ni supprimés : Storybook continue de fonctionner tel quel.

### Les pages actuelles sont récoltées, pas jetées

`ui.component.html` (594 lignes), `features.component.html` (1192), `ui-layout`,
`ui-display`, `ui-cards-lists`, `container`, `icons`, `theme` contiennent des
démonstrations déjà écrites. Leur markup est réparti dans les démos par composant.
Une page thématique n'est supprimée qu'une fois tout son contenu réparti.

## Paquets sans interface — démonstrations interactives

| Paquet | Démonstration |
|---|---|
| `@ta/server` | Constructeur visuel de `WhereType`/`OrderType` : on compose un filtre, la page affiche le document GraphQL produit par `createQuery` puis la réponse servie par un intercepteur HTTP de mocks local à la vitrine |
| `@ta/translation` | Bascule de langue en direct, résolution de clé à la volée, comparaison `fr`/`en` côte à côte |
| `@ta/services` | `TaEnumerationService` et `TaSharedMenuService` sur données mockées, réponses affichées |
| `@ta/capacitor` | Relevés web réels : état réseau, informations device, géolocalisation derrière un bouton explicite (la permission n'est jamais demandée au chargement) |
| `@ta/utils` | Bacs à sable pour `search()`, `sort()`, `newGuid()`, `percentage()`, `roundToDecimal()`, `fullName()`, `capitalizeFirstLetter()`, `copyTextToClipboard()`, les 4 pipes (`fileSize`, `join`, `pluralTranslate`, `safe`) et les 5 directives (`appDnd`, `appStopPropagation`, `ngLet`, `TaOnRender`, `taTestId`) |
| `@ta/form-model` | Les 31 classes `Input*` et les 3 validateurs (`bceValidator`, `phoneValidator`, `slugValidator`) documentées comme `kind: "model"`, chacune rendue dans un `<ta-form>` d'une seule entrée |

L'intercepteur de mocks est fourni uniquement sur les routes de démonstration
concernées ; il ne touche pas la configuration `provideServer()` globale de l'app.

## Périmètre par paquet

| Paquet | Composants publics | Autres entrées | Phase |
|---|---|---|---|
| `@ta/ui` | 99 | 2 services | 1 |
| `@ta/form-input` | 26 | — | 2 |
| `@ta/form-model` | 0 | 31 modèles + 3 validateurs | 2 |
| `@ta/form-basic` | 3 | — | 2 |
| `@ta/files-basic` | 9 | 2 services | 4 |
| `@ta/core` | 8 | 3 services | 3 |
| `@ta/features` | 8 | 5 services | 4 |
| `@ta/menu` | 7 | 1 service | 3 |
| `@ta/user` | 5 | 9 services | 4 |
| `@ta/charts` | 5 | — | 4 |
| `@ta/icons` | 4 | 1 service | 3 |
| `@ta/notification` | 3 | 4 services | 3 |
| `@ta/files-extended` | 2 | 1 service | 4 |
| `@ta/wysiswyg` | 2 | — | 4 |
| `@ta/cms` | 2 | 3 services | 4 |
| `@ta/utils` | 0 | 6 directives, 4 pipes, 3 services, ~25 fonctions | 5 |
| `@ta/server` | 0 | 7 services | 5 |
| `@ta/services` | 0 | 5 services | 5 |
| `@ta/translation` | 0 | 2 services | 5 |
| `@ta/capacitor` | 0 | 4 services | 5 |
| **Total** | **183** | | |

Exclus : `@ta/styles` (jetons couverts par `/theme`), `@ta/testing` (outil interne),
`@ta/eslint-config` et `@ta/prettier-config` (pas de runtime), `@ta/calendar` (inexistant).

## Non-objectifs

- Pas de terrain de jeu à props modifiables (façon *controls* Storybook) : la
  vitrine montre des variantes figées et lisibles, Storybook reste l'outil du
  réglage interactif.
- Pas de génération automatique des exemples. Seule l'API l'est ; les variantes
  restent un choix éditorial.
- Aucune modification fonctionnelle des composants documentés. La vitrine
  documente l'existant ; toute correction repérée en chemin fait l'objet d'un
  ticket séparé. **Seule exception assumée** : l'extension rétro-compatible de
  `@ta/testing` décrite ci-dessus, sans laquelle la fusion des catalogues force
  à charger les 183 démos dès le démarrage de l'application.
- Pas de versionnement ni d'historique des composants.

## Risques

| Risque | Traitement |
|---|---|
| Le codegen ne couvre pas certaines formes d'écriture | La phase 0 se termine par un rapport de couverture : tout membre non reconnu est listé nommément, pas silencieusement omis |
| Les démos et les tests E2E se désynchronisent pendant la migration | Les cas `e2e-harness/` ne sont supprimés qu'après mise à jour des specs Playwright qui les ciblent, paquet par paquet |
| Certains composants ne se rendent pas isolément (overlays, modales, `@ta/features` avec service de données) | Ces démos exposent un déclencheur explicite ; celles qui exigent un contexte lourd sont marquées `skipHarness` |
| Volume : ~183 fichiers de démo | Phases indépendantes et parallélisables une fois la phase 0 acquise ; la couverture est mesurée en continu, pas estimée |
| Le fichier généré diverge des sources | Test de fraîcheur : le CI régénère et échoue si le diff n'est pas vide |

## Phases

| # | Contenu | Fin de phase |
|---|---|---|
| **0** | Codegen (3 sorties) · `demo.types.ts` · registre · page générique `/:pkg/:component` · index `/:pkg` · sidebar avec recherche · extension `HarnessCase.load` de `@ta/testing` + `harnessCasesFromRegistry()` · suppression des références mortes `@ta/calendar` · **3 composants pilotes** (`ta-button` simple, `ta-card` à projection, `ta-input-textbox` à héritage) | Les 3 pilotes affichent variantes + API + code, et sont adressables en `/e2e-harness/…` |
| **1** | `@ta/ui` — 99 composants | Couverture `@ta/ui` à 100 %, pages thématiques `ui-*` supprimées |
| **2** | `@ta/form-input` (26) + `@ta/form-model` (31 + 3) + `@ta/form-basic` (3) | Chaque type d'input montré seul, avec ses états requis / désactivé / erreur / lecture seule |
| **3** | `@ta/core` (8), `@ta/menu` (7), `@ta/icons` (4), `@ta/notification` (3) | Pages d'attente `/menu` et `/notification` supprimées |
| **4** | `@ta/features` (8), `@ta/charts` (5), `@ta/files-basic` (9), `@ta/files-extended` (2), `@ta/wysiswyg` (2), `@ta/cms` (2), `@ta/user` (5) | `src/app/e2e-harness/cases/` vidé, `provideHarnessCases` alimenté par le seul registre |
| **5** | `@ta/utils`, `@ta/server`, `@ta/services`, `@ta/translation`, `@ta/capacitor` | Démonstrations interactives sur mocks pour les 5 paquets |
| **6** | Garde-fous : test de couverture, test de fraîcheur du généré, test des valeurs énumérées non rendues (heuristique, voir ci-dessous) | `COVERAGE.missing` vide, CI verte |

**Validation.** Karma est inutilisable dans ce dépôt : `projects/utils/src/lib/utils/object.spec.ts`
porte des erreurs TypeScript préexistantes qui bloquent tout `ng test`. La
vitrine se valide donc par trois moyens, tous opérationnels aujourd'hui :

- le générateur, script Node pur, par `node --test` (Node 22, runner intégré,
  aucune dépendance à ajouter) ;
- la compilation, par `ng build` — un boot cassé se voit immédiatement ;
- le rendu, par Playwright (166 specs, 176 tests verts au dernier jalon).

Chaque phase se termine par `yarn lint`, `ng build` et `yarn e2e` verts.

## Critères d'acceptation

1. `COVERAGE.missing` est vide : les 183 composants publics du périmètre ont une démo.
2. Chaque page composant affiche au moins un exemple rendu, son code copiable et
   son tableau d'API.
3. Aucun tableau d'API n'est écrit à la main ; régénérer produit un diff vide.
4. Aucun extrait de code n'est écrit à la main : tous viennent de `DEMO_SOURCES`.
5. Tout input à type union a chacune de ses valeurs rendue quelque part. Le
   contrôle est **heuristique** : il compare les littéraux de l'union aux chaînes
   présentes dans les `DEMO_SOURCES` du composant. Il rate une valeur passée par
   liaison depuis la classe (`[type]="this.variant"`), et ces cas sont déclarés
   au coup par coup dans une liste d'exemptions commentées.
6. `src/app/e2e-harness/cases/` n'existe plus ; les cas viennent du registre.
7. L'extension de `@ta/testing` est rétro-compatible : un `HarnessCase` ne
   renseignant que `component` se comporte exactement comme aujourd'hui.
8. La recherche de la sidebar trouve un composant par sélecteur ou par classe.
9. `yarn lint` et `yarn e2e` passent.
10. Plus aucune référence à `@ta/calendar` dans `tsconfig.json`, `angular.json`,
   `app.routes.ts`, `app.component.ts` ni `CLAUDE.md`.
