# Vitrine `@ta/*` — Démonstrations de tous les composants

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Écrire les démonstrations des 180 composants publics qui n'en ont pas encore, jusqu'à ce que `COVERAGE.missing` soit vide, et supprimer toute page d'attente du dépôt.

**Architecture:** La phase 0 a livré la machinerie : un générateur qui extrait l'API depuis les sources, une page générique servie par route, un registre de démos à chargement paresseux, et un harness E2E qui en dérive ses cas. Ce plan n'ajoute aucune mécanique — il remplit le catalogue. Chaque tâche traite un paquet (ou une famille, pour `@ta/ui`) : écrire un fichier de démo par composant, l'enregistrer, régénérer, vérifier que la couverture a fondu d'autant.

**Tech Stack:** Angular 18.2 (standalone, signal inputs, `@if`/`@for`), SCSS avec les jetons `@ta/styles`, générateur Node testé par `node --test`, Playwright pour le rendu.

**Spec:** `docs/superpowers/specs/2026-09-07-showcase-vitrine-complete-design.md`

**Plan précédent :** `docs/superpowers/plans/2026-09-07-showcase-vitrine-phase0-fondation.md` — à lire pour comprendre la machinerie, pas pour l'exécuter, elle est livrée.

**Liste de travail :** `docs/superpowers/plans/showcase-inventaire.md` — **fichier généré**, régénéré par `yarn showcase:inventaire`. Il porte, pour chaque composant restant, son sélecteur, sa classe, son fichier source, le décompte de son API et la matière déjà écrite ailleurs dans le dépôt. C'est lui qui dit ce qui reste à faire ; ce plan dit comment le faire.

## Global Constraints

- **Angular 18.2** : composants `standalone: true`, `ChangeDetectionStrategy.OnPush`, inputs par `input()` / `input.required()` — jamais `@Input()`. Flux de contrôle `@if` / `@for` / `@switch`, jamais `*ngIf` / `*ngFor`. Préfixe `this.` dans les templates.
- **Injection** par `inject()`, jamais par constructeur. Champs privés préfixés `_`.
- **Ordre des imports**, séparés par une ligne vide : Angular → bibliothèques externes (dont `rxjs`) → `@ta/*` → relatifs.
- **Les composants de l'application vitrine n'étendent aucune classe de base `@ta`** : convention établie de cette app, vérifiée sur ses 24 composants.
- **Encodage UTF-8 sans BOM.** Les fichiers contiennent du français accentué : c'est normal et voulu. Ne réécris jamais un fichier accentué en bloc — une ronde de la phase 0 l'a corrompu ainsi.
- **Aucune modification des bibliothèques `projects/*`.** Ce plan documente l'existant. Toute anomalie repérée dans une bibliothèque se signale, ne se corrige pas ici.
- **Ne jamais éditer `src/app/showcase/generated/`** : ces fichiers sont produits par `yarn showcase:metadata`.
- **Validation** : `node --test "scripts/**/*.test.mjs"`, `yarn showcase:metadata`, `npx ng build Techatome --configuration development`, `yarn e2e`. Karma est inutilisable (erreurs TypeScript préexistantes dans `projects/utils/src/lib/utils/object.spec.ts`), `yarn lint` est cassé en amont (config ESLint plate référençant un `.eslintignore` refusé), et `ng build` en configuration `production` échoue sur un dépassement de budget SCSS préexistant et commité. Ces trois pannes sont antérieures à la vitrine.
- **Ligne de base E2E** : un échec connu et un seul, `e2e/specs/features/grid.spec.ts` sur `ta-grid-filters-modal`, dû à un renommage non commité de l'utilisateur. Tout échec supplémentaire est une régression.
- **Commits** : ce dépôt interdit tout `git commit` sans demande explicite de l'utilisateur. Aucune tâche ne commite.

---

## La recette d'une démo

Cette section est le cœur du plan. Elle est écrite une fois et s'applique aux 180 composants. Chaque tâche s'y réfère plutôt que de la répéter.

### Le fichier

`src/app/showcase/demos/<paquet-court>/<sélecteur>.demo.ts`, où `<paquet-court>` est le nom du paquet sans le préfixe `@ta/` — `ui`, `form-input`, `core`… — et `<sélecteur>` le sélecteur du composant, qui **doit** être identique au nom du fichier : le générateur lève une erreur sinon.

Il contient une classe d'exemple par variante, puis une constante `DEMO`.

```ts
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BadgeComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-badge-types",
  imports: [BadgeComponent],
  template: `
    <ta-badge type="info">Information</ta-badge>
    <ta-badge type="success">Succès</ta-badge>
    <ta-badge type="warning">Attention</ta-badge>
    <ta-badge type="danger">Erreur</ta-badge>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBadgeTypesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-badge",
  summary: "Pastille d'état, déclinée en quatre intentions et deux tailles.",
  examples: [
    { title: "Types", component: TaBadgeTypesExample },
    { title: "Tailles", component: TaBadgeSizesExample },
  ],
};
```

### La disposition d'un exemple

Par défaut, les variantes d'un exemple sont posées **côte à côte** : c'est la
comparaison qui fait la démonstration pour un bouton, une pastille, une icône.

Certains composants veulent au contraire toute la largeur, empilés — une mise en
page, un formulaire, un tableau, une visionneuse. Déclare-le sur l'exemple :

```ts
    { title: "Page complète", component: TaLayoutPageExample, layout: "stack" },
```

Le défaut est `"row"` et n'a pas besoin d'être écrit. Choisis `"stack"` dès que
poser deux instances l'une à côté de l'autre n'aurait aucun sens.

### Les six règles que le générateur fait respecter

Il lève une erreur explicite si l'une est enfreinte. Ce ne sont pas des conventions de style : ce sont les invariants dont dépend l'exactitude de la vitrine.

1. **Le nom du fichier fait foi pour l'identifiant.** `ta-badge.demo.ts` contient `id: "ta-badge"`.
2. **Tout composant d'un fichier de démo porte un `template` littéral extractible.** Pas d'interpolation `${…}`, pas de `templateUrl`. L'extrait de code affiché sur la page est extrait de ce littéral : c'est ce qui garantit qu'il ne peut jamais diverger du code exécuté.

   Le **corps de la classe est extrait lui aussi** et affiché au-dessus du template. Une valeur dynamique passe donc par une propriété de classe sans rien perdre : le lecteur voit le modèle, le tableau de données ou le gestionnaire d'événement qui fait marcher l'exemple. Écris ce corps comme du code que quelqu'un va copier — c'est le cas.
3. **`summary` est une chaîne littérale**, pas une concaténation.
4. **Deux exemples d'une même démo ne peuvent pas produire le même identifiant.** Les titres sont normalisés en slug — « États » et « Etats » se confondent.
5. **Deux exemples de démos différentes ne peuvent pas porter le même nom de classe.** D'où la convention `Ta<Composant><Variante>Example`, qui les rend uniques par construction.
6. **Un identifiant de démo est unique** dans tout le catalogue.

### Ce que la démo doit montrer

- **Toutes les valeurs de chaque input énuméré.** Un input `type: 'primary' | 'secondary' | 'tertiary' | 'danger'` donne un exemple montrant les quatre. Un input booléen se montre dans ses deux états. Les combinaisons à fort impact visuel — type × taille, type × état — se rendent en matrice.
- **Les états d'usage réel**, quand ils existent : requis, désactivé, en erreur, en lecture seule, vide, en chargement.
- **La projection de contenu** quand le composant en fait usage, avec ses sous-composants.
- Le décompte d'API donné par l'inventaire (`4i/1o/0p/2m`) indique l'ampleur attendue : un composant à un seul input n'a pas besoin de six exemples, un composant à sept inputs en demande plus de deux.

### Ce que la démo ne doit jamais faire

- **Affirmer un comportement sans l'avoir vérifié dans la source.** Une description est une affirmation. Un exemple intitulé « Désactivé » qui n'est pas désactivé, ou une phrase prêtant à un état un comportement que le code dément, sont les défauts les plus graves que cette vitrine puisse porter — c'est la seule chose qu'elle existe pour empêcher. Ouvre le fichier du composant avant d'écrire une description qui décrit un comportement.
- **Inventer une API.** Le fichier source cité par l'inventaire fait foi, pas l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

### Les composants qui ne se montent pas isolément

Certains exigent un jeton d'injection fourni par un conteneur, une API globale absente, ou un backend. Ils obtiennent une page complète — API, usage, explication — sans rendu vivant :

```ts
export const DEMO: ComponentDemo = {
  id: "ta-google-maps",
  summary: "Carte Google Maps intégrée.",
  examples: [],
  notRenderable: {
    reason:
      "Ce composant exige l'API JavaScript Google Maps, chargée par `provideGoogleMaps()` avec une clé d'API. La vitrine ne la fournit pas.",
    usage: `<ta-google-maps [markers]="this.markers"></ta-google-maps>`,
  },
};
```

Une démo sans exemples **et** sans `notRenderable` est une erreur de couverture. N'utilise `notRenderable` qu'après avoir constaté l'impossibilité, jamais par facilité : la campagne E2E antérieure a montré que même `editorjs`, `tui-image-editor` et les visionneuses PDF, Word et Excel se montent correctement avec des données mockées.

### Où trouver la matière

L'inventaire indique, pour chaque composant, ce qui existe déjà — **170 des 180 en ont**. Trois sources, par ordre d'utilité :

- **Les cas E2E** (`src/app/e2e-harness/cases/*.case.ts`) : ce sont des montages qui fonctionnent, souvent avec les mocks nécessaires déjà écrits. La source la plus fiable.
- **Les pages showcase héritées** (`src/app/showcase/*/*.component.html`) : du markup déjà rédigé, parfois riche — `ui.component.html` fait 594 lignes, `features.component.html` 1192.
- **Les stories Storybook** (`projects/**/*.stories.ts`) : templates et jeux d'arguments.

Les jeux de données mockées vivent dans `projects/form/__mock__/form.ts`, `projects/files/__mock__/files.ts` et `projects/menu/src/lib/components/menu/__mock__/menu.ts`.

### L'enregistrement

Chaque démo s'ajoute à `src/app/showcase/registry.ts` :

```ts
  {
    id: "ta-badge",
    pkg: "@ta/ui",
    short: "ui",
    group: "Bases",
    load: () => import("./demos/ui/ta-badge.demo"),
  },
```

`group` est la famille affichée dans l'index du paquet. C'est la **seule** taxonomie écrite à la main, et rien ne la contrôle : « Boutons », « Bouton » et « Buttons » cohabiteraient sans que rien ne proteste. Tiens-t'en donc au vocabulaire suivant, au singulier ou pluriel exact indiqué.

| Paquet | Groupes autorisés |
|---|---|
| `@ta/ui` | `Bases`, `Boutons`, `Affichage`, `Cartes`, `Listes`, `Mise en page`, `Conteneurs`, `Overlays`, `Progression`, `Arbre` |
| `@ta/form-input` | `Saisie`, `Sélection`, `Date et heure`, `Média`, `Avancé` |
| `@ta/form-basic` | `Formulaire` |
| `@ta/core` | `Filtres`, `Recherche`, `Divers` |
| `@ta/menu` | `Menu`, `Navigation` |
| `@ta/files-basic`, `@ta/files-extended` | `Fichiers`, `Visionneuses` |
| `@ta/cms` | `CMS` |
| `@ta/wysiswyg` | `Éditeur riche` |
| `@ta/notification` | `Notifications` |
| `@ta/icons` | `Icônes` |
| `@ta/charts` | `Graphiques` |
| `@ta/user` | `Authentification` |
| `@ta/features` | `Grilles` |
| tous les autres | un seul groupe portant le nom du domaine du paquet |

Si aucun ne convient, ajoute-le à ce tableau dans le même mouvement — pour que le
suivant le trouve.

**Sur le champ `description` d'un exemple** : obligatoire dès que l'exemple
affirme un comportement (« les deux états bloquent le clic »), facultatif quand
il se contente de montrer des valeurs. Un titre qui suffit se passe de glose.

### La vérification, après chaque paquet

```powershell
yarn showcase:metadata
```

Deux choses à lire dans sa sortie : elle ne doit lever **aucune** erreur, et le nombre de composants sans démo doit avoir baissé **exactement** du nombre de démos écrites. Un écart signale une démo mal nommée ou mal enregistrée.

```powershell
npx ng build Techatome --configuration development
```

Un import erroné dans une démo se voit là, et nulle part ailleurs.

```powershell
yarn showcase:inventaire
```

Régénère la liste de travail : le paquet traité doit en avoir disparu.

---

## Ordre des tâches

Les paquets sont traités du plus petit au plus grand. Ce n'est pas de la facilité : les premiers valident la cadence et la qualité attendue à faible coût, avant d'engager les 97 composants de `@ta/ui`.

| # | Tâche | Composants |
|---|---|---:|
| 1 | `@ta/cms`, `@ta/wysiswyg` et `@ta/files-extended` | 6 |
| 2 | `@ta/notification` et `@ta/form-basic` | 6 |
| 3 | `@ta/icons` | 4 |
| 4 | `@ta/charts` et `@ta/user` | 10 |
| 5 | `@ta/menu` | 7 |
| 6 | `@ta/core` | 8 |
| 7 | `@ta/features` | 8 |
| 8 | `@ta/files-basic` | 9 |
| 9 | `@ta/form-input` (1/2) | 13 |
| 10 | `@ta/form-input` (2/2) | 12 |
| 11 | `@ta/ui` — boutons et bases | 18 |
| 12 | `@ta/ui` — affichage (1/2) | 17 |
| 13 | `@ta/ui` — affichage (2/2) | 17 |
| 14 | `@ta/ui` — cartes et listes | 17 |
| 15 | `@ta/ui` — conteneurs et overlays | 9 |
| 16 | `@ta/ui` — mise en page | 19 |
| 17 | Retrait des pages d'attente et des pages thématiques héritées | — |
| 18 | Garde-fous de couverture | — |

Les lots sont plafonnés à vingt composants : au-delà, une revue perd en acuité.

---

## Task 1: `@ta/cms`, `@ta/wysiswyg` et `@ta/files-extended` — 6 composants

Première tâche du plan : elle sert autant à livrer ses démos qu'à établir la cadence. Prends le temps de bien faire, les suivantes s'en inspireront.
**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/cms/`, `src/app/showcase/demos/wysiswyg/`, `src/app/showcase/demos/files-extended/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 6 entrées de registre, 6 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-cms` | `CmsComponent` | 1i/0o/1p/0m | `projects/cms/src/lib/modules/strapi/components/cms/cms.component.ts` |
| `ta-sale` | `SaleComponent` | 0i/1o/1p/0m | `projects/cms/src/lib/modules/strapi/components/sale/sale.component.ts` |
| `ta-cms-editor-blocks` | `BlockTextComponent` | 1i/0o/0p/0m | `projects/wysiswyg/src/lib/modules/wysiswyg/components/block-text/block-text.component.ts` |
| `ta-cms-editor-input` | `EditorInputComponent` | 9i/2o/0p/2m | `projects/wysiswyg/src/lib/modules/wysiswyg/components/input/input.component.ts` |
| `ta-files-display` | `FilesDisplayComponent` | 5i/3o/2p/1m | `projects/files/files-extended/src/lib/components/display/files-display.component.ts` |
| `ta-files-upload` | `UploadComponent` | 3i/1o/1p/0m | `projects/files/files-extended/src/lib/components/upload/files-upload.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 6 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 6 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 174 composants sans démo »** — exactement 6 de moins que les 180 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 6 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 174, build vert, 6 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/cms, @ta/wysiswyg et @ta/files-extended`

---

## Task 2: `@ta/notification` et `@ta/form-basic` — 6 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/notification/`, `src/app/showcase/demos/form-basic/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 6 entrées de registre, 6 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-notification-box` | `NotificationBoxComponent` | 0i/0o/0p/1m | `projects/notification/src/lib/components/popup/box/notification-box.component.ts` |
| `ta-notification-bullet` | `BulletComponent` | 1i/0o/1p/0m | `projects/notification/src/lib/components/bullet/bullet.component.ts` |
| `ta-notification-inline` | `NotificationInlineComponent` | 3i/1o/4p/6m | `projects/notification/src/lib/components/popup/inline/notification-inline.component.ts` |
| `ta-edit-field` | `EditFieldComponent` | 5i/1o/0p/3m | `projects/form/form-basic/src/lib/components/edit-field/edit-field.component.ts` |
| `ta-form` | `FormComponent` | 9i/2o/0p/4m | `projects/form/form-basic/src/lib/components/form.component.ts` |
| `ta-inputs` | `InputsComponent` | 4i/0o/0p/0m | `projects/form/form-basic/src/lib/components/inputs/inputs.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 6 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 6 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 168 composants sans démo »** — exactement 6 de moins que les 174 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 6 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 168, build vert, 6 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/notification et @ta/form-basic`

---

## Task 3: `@ta/icons` — 4 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/icons/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 4 entrées de registre, 4 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-flag-icon` | `FlagIconComponent` | 2i/0o/0p/1m | `projects/icons/src/lib/components/flag-icon/flag-icon.component.ts` |
| `ta-font-icon` | `FontIconComponent` | 2i/0o/0p/0m | `projects/icons/src/lib/components/font-icon/font-icon.component.ts` |
| `ta-local-icon` | `LocalIconComponent` | 3i/0o/0p/2m | `projects/icons/src/lib/components/local-icon/local-icon.component.ts` |
| `ta-material-icon` | `MaterialIconComponent` | 5i/0o/0p/2m | `projects/icons/src/lib/components/material-icon/material-icon.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 4 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 4 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 164 composants sans démo »** — exactement 4 de moins que les 168 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 4 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 164, build vert, 4 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/icons`

---

## Task 4: `@ta/charts` et `@ta/user` — 10 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/charts/`, `src/app/showcase/demos/user/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 10 entrées de registre, 10 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-bar-chart` | `TaChartBarComponent` | 0i/0o/0p/0m | `projects/charts/src/lib/components/bar-chart.component.ts` |
| `ta-doughnut-chart` | `TaChartDoughnutComponent` | 0i/0o/0p/0m | `projects/charts/src/lib/components/doughnut-chart.component.ts` |
| `ta-line-chart` | `TaChartLineComponent` | 0i/0o/0p/0m | `projects/charts/src/lib/components/line-chart.component.ts` |
| `ta-mixed-chart` | `TaChartMixedComponent` | 0i/0o/0p/0m | `projects/charts/src/lib/components/mixed-chart.component.ts` |
| `ta-pie-chart` | `TaChartPieComponent` | 1i/0o/0p/0m | `projects/charts/src/lib/components/pie-chart.component.ts` |
| `ta-guard` | `GuardComponent` | 5i/0o/1p/3m | `projects/user/src/lib/modules/user/components/guard/guard.component.ts` |
| `ta-login-card` | `LoginCardComponent` | 0i/0o/0p/1m | `projects/user/src/lib/modules/user/components/login/login-card.component.ts` |
| `ta-my-account` | `MyAccountComponent` | 3i/2o/1p/4m | `projects/user/src/lib/modules/user/components/my-account/my-account.component.ts` |
| `ta-switch-language` | `SwitchLanguageComponent` | 1i/0o/0p/2m | `projects/user/src/lib/modules/user/components/switch-language/switch-language.component.ts` |
| `ta-switch-language-cta` | `SwitchLanguageCtaComponent` | 0i/0o/0p/0m | `projects/user/src/lib/modules/user/components/switch-language/switch-language-cta/switch-language-cta.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 10 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 10 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 154 composants sans démo »** — exactement 10 de moins que les 164 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 10 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 154, build vert, 10 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/charts et @ta/user`

---

## Task 5: `@ta/menu` — 7 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/menu/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 7 entrées de registre, 7 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-bottom-sheet-template-basic` | `BottomSheetTemplateBasicComponent` | 0i/0o/0p/0m | `projects/menu/src/lib/components/bottom-sheet/templates/basic/bottom-sheet-template-basic.component.ts` |
| `ta-bottom-sheet-template-generic` | `BottomSheetTemplateGenericComponent` | 0i/0o/0p/0m | `projects/menu/src/lib/components/bottom-sheet/templates/generic/bottom-sheet-template-generic.component.ts` |
| `ta-context-menu` | `ContextMenuComponent` | 1i/0o/0p/6m | `projects/menu/src/lib/components/context-menu/context-menu.component.ts` |
| `ta-main-menu` | `MainMenuComponent` | 4i/0o/0p/4m | `projects/menu/src/lib/components/main-menu/main-menu.component.ts` |
| `ta-menu` | `MenuComponent` | 2i/0o/1p/0m | `projects/menu/src/lib/components/menu/menu.component.ts` |
| `ta-menu-item` | `MenuItemComponent` | 2i/0o/0p/11m | `projects/menu/src/lib/components/menu/item/menu-item.component.ts` |
| `ta-menu-navigation` | `NavigationComponent` | 5i/0o/0p/4m | `projects/menu/src/lib/components/navigation/navigation.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 7 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 7 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 147 composants sans démo »** — exactement 7 de moins que les 154 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 7 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 147, build vert, 7 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/menu`

---

## Task 6: `@ta/core` — 8 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/core/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 8 entrées de registre, 8 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-filter-container` | `FilterContainerComponent` | 1i/1o/0p/3m | `projects/core/src/lib/components/filters/filter-container/filter-container.component.ts` |
| `ta-filter-displayer` | `FilterDisplayerComponent` | 3i/1o/2p/3m | `projects/core/src/lib/components/filters/filter-displayer/filter-displayer.component.ts` |
| `ta-filters-container` | `FiltersContainerComponent` | 2i/2o/0p/2m | `projects/core/src/lib/components/filters/container/filters-container.component.ts` |
| `ta-filters-tag` | `FiltersTagComponent` | 1i/1o/0p/1m | `projects/core/src/lib/components/filters/tag/filters-tag.component.ts` |
| `ta-google-maps` | `MapComponent` | 0i/0o/0p/4m | `projects/core/src/lib/modules/maps/components/map/map.component.ts` |
| `ta-search-displayer` | `SearchDisplayerComponent` | 3i/1o/1p/2m | `projects/core/src/lib/components/historical-research/search-displayer.component.ts` |
| `ta-search-history-displayer` | `SearchHistoryDisplayerComponent` | 3i/1o/2p/1m | `projects/core/src/lib/components/historical-research/search-history-displayer/search-history-displayer.component.ts` |
| `ta-text-to-clipboard` | `TextToClipboardComponent` | 2i/0o/0p/0m | `projects/core/src/lib/components/text-to-clipboard/text-to-clipboard.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 8 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 8 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 139 composants sans démo »** — exactement 8 de moins que les 147 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 8 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 139, build vert, 8 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/core`

---

## Task 7: `@ta/features` — 8 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/features/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 8 entrées de registre, 8 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-grid` | `TaGridComponent` | 3i/2o/7p/8m | `projects/features/src/lib/features/grid/components/grid/grid.component.ts` |
| `ta-grid-container` | `TaGridContainerComponent` | 4i/0o/0p/0m | `projects/features/src/lib/features/grid/components/container/container.component.ts` |
| `ta-grid-control` | `TaGridControlComponent` | 2i/0o/7p/5m | `projects/features/src/lib/features/grid/components/control/control.component.ts` |
| `ta-grid-filters-panel` | `TaGridFiltersPanel` | 0i/1o/1p/1m | `projects/features/src/lib/features/grid/components/control/control.component.ts` |
| `ta-grid-form` | `TaGridFormComponent` | 5i/0o/0p/3m | `projects/features/src/lib/features/grid/components/form/form.component.ts` |
| `ta-grid-highlight-filters` | `TaGridHighlightFiltersComponent` | 2i/0o/0p/2m | `projects/features/src/lib/features/grid/components/highlight-filters/highlight-filters.component.ts` |
| `ta-grid-search` | `TaGridSearchComponent` | 1i/0o/0p/1m | `projects/features/src/lib/features/grid/components/search/search.component.ts` |
| `ta-grid-tags` | `TaGridTagsComponent` | 0i/0o/3p/5m | `projects/features/src/lib/features/grid/components/tags/tags.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 8 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 8 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 131 composants sans démo »** — exactement 8 de moins que les 139 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 8 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 131, build vert, 8 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/features`

---

## Task 8: `@ta/files-basic` — 9 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/files-basic/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 9 entrées de registre, 9 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-documents-list` | `DocumentsListComponent` | 5i/2o/1p/4m | `projects/files/files-basic/src/lib/components/documents/list/list.component.ts` |
| `ta-excel-viewer` | `ExcelViewerComponent` | 1i/0o/0p/0m | `projects/files/files-basic/src/lib/components/preview/viewers/excel-viewer/excel-viewer.component.ts` |
| `ta-files-edit` | `FileEditComponent` | 2i/1o/0p/15m | `projects/files/files-basic/src/lib/components/edit/files-edit.component.ts` |
| `ta-files-list` | `FileListComponent` | 2i/3o/0p/4m | `projects/files/files-basic/src/lib/components/list/files-list.component.ts` |
| `ta-files-preview` | `FilesPreviewComponent` | 1i/0o/0p/1m | `projects/files/files-basic/src/lib/components/preview/preview.component.ts` |
| `ta-files-preview-modal` | `PreviewModal` | 2i/1o/0p/0m | `projects/files/files-basic/src/lib/components/preview/preview.component.ts` |
| `ta-image-viewer` | `ImageViewerComponent` | 1i/0o/0p/0m | `projects/files/files-basic/src/lib/components/preview/viewers/image-viewer/image-viewer.component.ts` |
| `ta-pdf-viewer` | `PdfViewerComponent` | 1i/0o/0p/0m | `projects/files/files-basic/src/lib/components/preview/viewers/pdf-viewer/pdf-viewer.component.ts` |
| `ta-word-viewer` | `WordViewerComponent` | 1i/0o/0p/0m | `projects/files/files-basic/src/lib/components/preview/viewers/word-viewer/word-viewer.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 9 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 9 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 122 composants sans démo »** — exactement 9 de moins que les 131 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 9 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 122, build vert, 9 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/files-basic`

---

## Task 9: `@ta/form-input` (1/2) — 13 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/form-input/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 13 entrées de registre, 13 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-component-selector-modal` | `ComponentSelectorModal` | 2i/1o/0p/1m | `projects/form/form-input/src/lib/components/input/component/component.component.ts` |
| `ta-form-label` | `FormLabelComponent` | 2i/0o/0p/0m | `projects/form/form-input/src/lib/components/label/label.component.ts` |
| `ta-input-checkbox` | `CheckboxComponent` | 0i/0o/0p/0m | `projects/form/form-input/src/lib/components/input/checkbox/checkbox.component.ts` |
| `ta-input-choices` | `InputChoicesComponent` | 0i/0o/0p/4m | `projects/form/form-input/src/lib/components/input/choices/choices.component.ts` |
| `ta-input-color-picker` | `ColorPickerComponent` | 0i/0o/0p/1m | `projects/form/form-input/src/lib/components/input/color-picker/color-picker.component.ts` |
| `ta-input-component` | `ComponentInputComponent` | 0i/0o/0p/1m | `projects/form/form-input/src/lib/components/input/component/component.component.ts` |
| `ta-input-culture` | `CultureComponent` | 0i/0o/0p/0m | `projects/form/form-input/src/lib/components/input/culture/culture.component.ts` |
| `ta-input-date-picker` | `DatePickerComponent` | 0i/0o/0p/1m | `projects/form/form-input/src/lib/components/input/date-picker/date-picker.component.ts` |
| `ta-input-dropdown` | `DropdownComponent` | 1i/0o/0p/6m | `projects/form/form-input/src/lib/components/input/dropdown/dropdown.component.ts` |
| `ta-input-image` | `InputImageComponent` | 0i/0o/3p/0m | `projects/form/form-input/src/lib/components/input/image/input-image.component.ts` |
| `ta-input-images` | `InputImagesComponent` | 0i/0o/0p/3m | `projects/form/form-input/src/lib/components/input/images/input-images.component.ts` |
| `ta-input-label` | `LabelComponent` | 0i/0o/0p/0m | `projects/form/form-input/src/lib/components/input/label/label.component.ts` |
| `ta-input-logo` | `InputLogoComponent` | 0i/0o/0p/3m | `projects/form/form-input/src/lib/components/input/logo/input-logo.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 13 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 13 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 109 composants sans démo »** — exactement 13 de moins que les 122 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 13 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 109, build vert, 13 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/form-input (1/2)`

---

## Task 10: `@ta/form-input` (2/2) — 12 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/form-input/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 12 entrées de registre, 12 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-input-phone` | `InputPhoneComponent` | 0i/0o/0p/2m | `projects/form/form-input/src/lib/components/input/phone/input-phone.component.ts` |
| `ta-input-radio` | `RadioComponent` | 0i/0o/0p/3m | `projects/form/form-input/src/lib/components/input/radio/radio.component.ts` |
| `ta-input-rating` | `RatingComponent` | 0i/0o/0p/1m | `projects/form/form-input/src/lib/components/input/rating/rating.component.ts` |
| `ta-input-schema` | `InputSchemaComponent` | 0i/0o/3p/2m | `projects/form/form-input/src/lib/components/input/schema/input-schema.component.ts` |
| `ta-input-slider` | `SliderComponent` | 0i/0o/0p/0m | `projects/form/form-input/src/lib/components/input/slider/slider.component.ts` |
| `ta-input-switch` | `SwitchComponent` | 0i/0o/0p/0m | `projects/form/form-input/src/lib/components/input/switch/switch.component.ts` |
| `ta-input-textarea` | `TextareaComponent` | 0i/0o/0p/0m | `projects/form/form-input/src/lib/components/input/textarea/textarea.component.ts` |
| `ta-input-time-picker` | `TimePickerComponent` | 0i/0o/0p/0m | `projects/form/form-input/src/lib/components/input/time-picker/time-picker.component.ts` |
| `ta-input-toggle` | `ToggleComponent` | 0i/0o/0p/0m | `projects/form/form-input/src/lib/components/input/toggle/toggle.component.ts` |
| `ta-input-upload` | `UploadComponent` | 0i/1o/0p/9m | `projects/form/form-input/src/lib/components/input/upload/upload.component.ts` |
| `ta-input-wysiswyg` | `WysiswygComponent` | 0i/0o/0p/2m | `projects/form/form-input/src/lib/components/input/wysiswyg/wysiswyg.component.ts` |
| `ta-search-field` | `SearchFieldComponent` | 4i/1o/0p/3m | `projects/form/form-input/src/lib/components/input/search-field/search-field.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 12 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 12 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 97 composants sans démo »** — exactement 12 de moins que les 109 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 12 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 97, build vert, 12 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/form-input (2/2)`

---

## Task 11: `@ta/ui` — boutons et bases — 18 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/ui/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 18 entrées de registre, 18 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-action-button` | `ActionButtonComponent` | 1i/0o/0p/4m | `projects/ui/src/lib/components/ui/button/action/action-button.component.ts` |
| `ta-badge` | `BadgeComponent` | 4i/1o/0p/2m | `projects/ui/src/lib/components/ui/badge/badge.component.ts` |
| `ta-banner` | `BannerComponent` | 3i/0o/0p/1m | `projects/ui/src/lib/components/ui/banner/banner.component.ts` |
| `ta-button-tool` | `ButtonToolComponent` | 6i/1o/0p/2m | `projects/ui/src/lib/components/ui/button/tool/tool.component.ts` |
| `ta-copy-link-button` | `CopyLinkButtonComponent` | 4i/1o/0p/3m | `projects/ui/src/lib/components/ui/button/copy-link/copy-link-button.component.ts` |
| `ta-dual-button` | `DualButtonComponent` | 4i/0o/0p/1m | `projects/ui/src/lib/components/ui/button/dual/dual-button.component.ts` |
| `ta-expandable-text` | `ExpandableTextComponent` | 1i/0o/3p/1m | `projects/ui/src/lib/components/ui/expandable-text/expandable-text.component.ts` |
| `ta-itsme-button` | `ItsmeButtonComponent` | 4i/1o/0p/2m | `projects/ui/src/lib/components/ui/button/itsme/itsme-button.component.ts` |
| `ta-label` | `LabelComponent` | 2i/0o/0p/1m | `projects/ui/src/lib/components/ui/label/label.component.ts` |
| `ta-link` | `LinkComponent` | 5i/1o/0p/2m | `projects/ui/src/lib/components/ui/link/link.component.ts` |
| `ta-messenger-button` | `MessengerButtonComponent` | 5i/1o/0p/2m | `projects/ui/src/lib/components/ui/button/messenger/messenger-button.component.ts` |
| `ta-notification-badge` | `NotificationBadgeComponent` | 4i/0o/0p/1m | `projects/ui/src/lib/components/ui/notification-badge/notification-badge/notification-badge.component.ts` |
| `ta-notification-badge-container` | `NotificationBadgeContainerComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/components/ui/notification-badge/notification-badge-container.component.ts` |
| `ta-share-button` | `ShareButtonComponent` | 6i/1o/0p/3m | `projects/ui/src/lib/components/ui/button/share/share-button.component.ts` |
| `ta-text` | `TextComponent` | 3i/0o/0p/1m | `projects/ui/src/lib/components/ui/text/text.component.ts` |
| `ta-title` | `TitleComponent` | 4i/0o/0p/0m | `projects/ui/src/lib/components/ui/title/title.component.ts` |
| `ta-veriff-button` | `VeriffButtonComponent` | 4i/1o/0p/2m | `projects/ui/src/lib/components/ui/button/veriff/veriff-button.component.ts` |
| `ta-whatsapp-button` | `WhatsappButtonComponent` | 5i/1o/0p/2m | `projects/ui/src/lib/components/ui/button/whatsapp/whatsapp-button.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 18 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 18 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 79 composants sans démo »** — exactement 18 de moins que les 97 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 18 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 79, build vert, 18 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/ui — boutons et bases`

---

## Task 12: `@ta/ui` — affichage (1/2) — 17 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/ui/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 17 entrées de registre, 17 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-address` | `AddressComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/components/ui/address/address.component.ts` |
| `ta-benefit-item` | `BenefitItemComponent` | 2i/0o/0p/2m | `projects/ui/src/lib/components/ui/benefit-item/benefit-item.component.ts` |
| `ta-boolean-icon` | `BooleanIconComponent` | 2i/0o/0p/3m | `projects/ui/src/lib/components/ui/boolean-icon/boolean-icon.component.ts` |
| `ta-bullet` | `BulletComponent` | 2i/0o/0p/1m | `projects/ui/src/lib/components/ui/bullet/bullet.component.ts` |
| `ta-civility` | `CivilityComponent` | 1i/0o/0p/1m | `projects/ui/src/lib/components/ui/civility/civility.component.ts` |
| `ta-contact-information` | `ContactInformationComponent` | 3i/0o/0p/0m | `projects/ui/src/lib/components/ui/contact-information/contact-information.component.ts` |
| `ta-criticity` | `CriticityComponent` | 1i/0o/0p/2m | `projects/ui/src/lib/components/ui/criticity/criticity.component.ts` |
| `ta-culture` | `CultureComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/components/ui/culture/culture.component.ts` |
| `ta-department-icon-list` | `DepartmentIconListComponent` | 2i/0o/0p/0m | `projects/ui/src/lib/components/ui/departments/department-icon-list/department-icon-list.component.ts` |
| `ta-department-professions` | `DepartmentProfessionsComponent` | 3i/0o/1p/0m | `projects/ui/src/lib/components/ui/departments/professions/professions.component.ts` |
| `ta-departments` | `DepartmentsComponent` | 2i/0o/0p/0m | `projects/ui/src/lib/components/ui/departments/departments.component.ts` |
| `ta-duration` | `DurationComponent` | 2i/0o/0p/0m | `projects/ui/src/lib/components/ui/duration/duration.component.ts` |
| `ta-file-image` | `FileImageComponent` | 2i/0o/1p/0m | `projects/ui/src/lib/components/ui/file-image/file-image.component.ts` |
| `ta-hour-date-line` | `HourDateLineComponent` | 2i/0o/0p/0m | `projects/ui/src/lib/components/ui/hour-date-line/hour-date-line.component.ts` |
| `ta-inline-profile-data` | `InlineProfileDataComponent` | 2i/0o/0p/0m | `projects/ui/src/lib/components/ui/profil-data/inline-profile-data/inline-profile-data.component.ts` |
| `ta-logo` | `LogoComponent` | 3i/0o/1p/1m | `projects/ui/src/lib/components/ui/logo/logo.component.ts` |
| `ta-megaoctet` | `MegaoctetComponent` | 2i/0o/1p/0m | `projects/ui/src/lib/components/ui/megaoctet/megaoctet.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 17 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 17 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 62 composants sans démo »** — exactement 17 de moins que les 79 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 17 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 62, build vert, 17 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/ui — affichage (1/2)`

---

## Task 13: `@ta/ui` — affichage (2/2) — 17 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/ui/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 17 entrées de registre, 17 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-new` | `NewComponent` | 3i/0o/0p/0m | `projects/ui/src/lib/components/ui/new/new.component.ts` |
| `ta-picture-info-message` | `PictureInfoMessageComponent` | 4i/0o/1p/3m | `projects/ui/src/lib/components/ui/picture-info-message/picture-info-message.component.ts` |
| `ta-progress` | `ProgressComponent` | 3i/0o/0p/2m | `projects/ui/src/lib/components/ui/progress/progress.component.ts` |
| `ta-progress-bar` | `ProgressBarComponent` | 2i/0o/0p/0m | `projects/ui/src/lib/components/ui/progress-bar/progress-bar.component.ts` |
| `ta-progress-bar-data` | `ProgressBarDataComponent` | 6i/0o/1p/0m | `projects/ui/src/lib/components/ui/progress/progress-bar-data/progress-bar-data.component.ts` |
| `ta-progress-circle` | `ProgressCircleComponent` | 3i/0o/2p/0m | `projects/ui/src/lib/components/ui/progress/circle/progress-circle/progress-circle.component.ts` |
| `ta-pwa` | `PwaComponent` | 0i/1o/0p/3m | `projects/ui/src/lib/components/ui/pwa/pwa.component.ts` |
| `ta-rating` | `RatingComponent` | 8i/2o/1p/5m | `projects/ui/src/lib/components/ui/rating/rating.component.ts` |
| `ta-swiper` | `SwiperComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/components/ui/swiper/swiper.component.ts` |
| `ta-time-ago` | `TimeAgoComponent` | 2i/0o/2p/1m | `projects/ui/src/lib/components/ui/time-ago/time-ago.component.ts` |
| `ta-toast` | `ToastComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/components/ui/toast/toast.component.ts` |
| `ta-toggle-card` | `ToggleCardComponent` | 5i/1o/0p/1m | `projects/ui/src/lib/components/ui/toggle-card/toggle-card.component.ts` |
| `ta-trigram` | `TrigramComponent` | 2i/0o/0p/1m | `projects/ui/src/lib/components/ui/trigram/trigram.component.ts` |
| `ta-typed-message` | `TypedMessageComponent` | 2i/0o/1p/0m | `projects/ui/src/lib/components/ui/typed-message/typed-message.component.ts` |
| `ta-user-logo` | `UserLogoComponent` | 4i/0o/1p/1m | `projects/ui/src/lib/components/ui/user-logo/user-logo.component.ts` |
| `ta-users-list` | `UsersListComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/components/ui/users-list/users-list.component.ts` |
| `ta-wrapped-icon` | `WrappedIconComponent` | 3i/0o/0p/1m | `projects/ui/src/lib/components/ui/wrapped-icon/wrapped-icon.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 17 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 17 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 45 composants sans démo »** — exactement 17 de moins que les 62 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 17 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 45, build vert, 17 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/ui — affichage (2/2)`

---

## Task 14: `@ta/ui` — cartes et listes — 17 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/ui/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 17 entrées de registre, 17 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-card-content` | `CardContentComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/card/content/card-content.component.ts` |
| `ta-card-cta` | `CardCtaComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/card/cta/card-cta.component.ts` |
| `ta-card-header` | `CardHeaderComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/card/header/card-header.component.ts` |
| `ta-card-image` | `CardImageComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/modules/card/card-image/card-image.component.ts` |
| `ta-card-subtitle` | `CardSubtitleComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/card/subtitle/card-subtitle.component.ts` |
| `ta-card-tag` | `CardTagComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/card/tag/card-tag.component.ts` |
| `ta-card-title` | `CardTitleComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/card/title/card-title.component.ts` |
| `ta-dashboard-card` | `DashboardCardComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/modules/card/dashboard/dashboard.component.ts` |
| `ta-list-container` | `ListContainerComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/list/list-container/list-container.component.ts` |
| `ta-list-element` | `ListElementComponent` | 2i/1o/0p/0m | `projects/ui/src/lib/modules/list/element/list-element.component.ts` |
| `ta-list-extra-information` | `ListExtraInformationComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/list/extra-information/list-extra-information.component.ts` |
| `ta-list-sub-title` | `ListSubTitleComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/list/sub-title/list-sub-title.component.ts` |
| `ta-list-tag` | `ListTagComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/list/tag/list-tag.component.ts` |
| `ta-list-title` | `ListTitleComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/list/title/list-title.component.ts` |
| `ta-tree-children` | `TaTreeChildrenComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/components/ui/tree/tree-children/tree-children.component.ts` |
| `ta-tree-container` | `TaTreeContainerComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/components/ui/tree/tree-container/tree-container.component.ts` |
| `ta-tree-item` | `TaTreeItemComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/components/ui/tree/tree-item/tree-item.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 17 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 17 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 28 composants sans démo »** — exactement 17 de moins que les 45 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 17 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 28, build vert, 17 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/ui — cartes et listes`

---

## Task 15: `@ta/ui` — conteneurs et overlays — 9 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/ui/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 9 entrées de registre, 9 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-container-validation` | `ContainerValidationComponent` | 3i/1o/0p/3m | `projects/ui/src/lib/modules/container/validation/cta/container-validation.component.ts` |
| `ta-default-panel` | `TaDefaultPanelComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/modules/overlay-panel/default-panel/default-panel.component.ts` |
| `ta-empty` | `EmptyComponent` | 7i/0o/0p/0m | `projects/ui/src/lib/modules/container/empty/empty.component.ts` |
| `ta-error` | `ErrorComponent` | 4i/1o/0p/1m | `projects/ui/src/lib/modules/container/error/error.component.ts` |
| `ta-expansion-panel` | `TaExpansionPanelComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/components/ui/expansion-panel/expansion-panel.component.ts` |
| `ta-loader` | `LoaderComponent` | 4i/0o/0p/1m | `projects/ui/src/lib/modules/container/loader/loader.component.ts` |
| `ta-overlay-panel` | `TaOverlayPanelComponent` | 2i/1o/0p/2m | `projects/ui/src/lib/modules/overlay-panel/overlay-panel/overlay-panel.component.ts` |
| `ta-swiper-light` | `SwiperLightComponent` | 5i/0o/0p/0m | `projects/ui/src/lib/modules/container/swiper-light/swiper-light.component.ts` |
| `ta-validation-modal` | `ValidationModal` | 2i/2o/2p/2m | `projects/ui/src/lib/modules/container/validation/modal/modal-validation.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 9 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 9 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 19 composants sans démo »** — exactement 9 de moins que les 28 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 9 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 19, build vert, 9 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/ui — conteneurs et overlays`

---

## Task 16: `@ta/ui` — mise en page — 19 composants

**Files:**
- Create: un fichier par composant sous `src/app/showcase/demos/ui/`
- Modify: `src/app/showcase/registry.ts`

**Interfaces:**
- Consumes: `ComponentDemo` (`src/app/showcase/demo.types.ts`), `RegistryEntry` (`src/app/showcase/registry.ts`).
- Produces: 19 entrées de registre, 19 identifiants de moins dans `COVERAGE.missing`.

**Les composants à documenter**

| Sélecteur | Classe | API | Source |
|---|---|---|---|
| `ta-layout-content` | `LayoutContentComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/modules/layout/layout-content/layout-content.component.ts` |
| `ta-layout-flex` | `LayoutFlexComponent` | 1i/0o/0p/4m | `projects/ui/src/lib/modules/layout/layout-flex/layout-flex.component.ts` |
| `ta-layout-full-panel` | `LayoutFullPanelComponent` | 2i/1o/0p/1m | `projects/ui/src/lib/modules/layout/layout-full-panel/layout-full-panel.component.ts` |
| `ta-layout-header` | `LayoutHeaderComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/layout/layout-header/layout-header.component.ts` |
| `ta-layout-header-default` | `LayoutHeaderDefaultComponent` | 3i/1o/0p/1m | `projects/ui/src/lib/modules/layout/layout-header/layout-header-default/layout-header-default.component.ts` |
| `ta-layout-header-logo` | `LayoutHeaderLogoComponent` | 3i/0o/0p/4m | `projects/ui/src/lib/modules/layout/layout-header/layout-header-logo/layout-header-logo.component.ts` |
| `ta-layout-modal` | `LayoutModalComponent` | 3i/1o/0p/1m | `projects/ui/src/lib/modules/layout/layout-modal/layout-modal.component.ts` |
| `ta-layout-nav` | `LayoutNavComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/layout/layout-nav/layout-nav.component.ts` |
| `ta-layout-not-found` | `LayoutNotFoundComponent` | 0i/0o/0p/1m | `projects/ui/src/lib/modules/layout/layout-error/not-found/not-found.component.ts` |
| `ta-layout-page` | `LayoutPageComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/layout/layout-page/layout-page.component.ts` |
| `ta-layout-panel` | `LayoutPanelComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/layout/layout-panel/layout-panel.component.ts` |
| `ta-layout-side` | `LayoutSideComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/layout/layout-side/layout-side.component.ts` |
| `ta-layout-side-content` | `LayoutSideContentComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/layout/layout-side/layout-side-content/layout-side-content.component.ts` |
| `ta-layout-side-cta` | `LayoutSideCtaComponent` | 2i/0o/0p/0m | `projects/ui/src/lib/modules/layout/layout-side/layout-side-cta/layout-side-cta.component.ts` |
| `ta-layout-title` | `LayoutTitleComponent` | 0i/0o/0p/0m | `projects/ui/src/lib/modules/layout/layout-title/layout-title.component.ts` |
| `ta-layout-with-bottom-nav` | `LayoutWithBottomNavComponent` | 1i/0o/0p/0m | `projects/ui/src/lib/modules/layout/with-bottom-nav/layout-with-bottom-nav.component.ts` |
| `ta-layout-with-panel` | `LayoutWithPanelComponent` | 1i/0o/0p/1m | `projects/ui/src/lib/modules/layout/with-panel/layout-with-panel.component.ts` |
| `ta-modal` | `TaModalComponent` | 5i/1o/0p/3m | `projects/ui/src/lib/modules/layout/modal/modal.component.ts` |
| `ta-template-modal-container` | `TemplateModalContainer` | 4i/1o/0p/1m | `projects/ui/src/lib/modules/layout/layout-modal/layout-modal-container/layout-modal-container.component.ts` |

La colonne API donne le décompte des membres propres : inputs, outputs, propriétés et accesseurs, méthodes publiques. Elle indique l'ampleur attendue de la démo.

- [ ] **Step 1: Lire la matière existante**

Ouvre `docs/superpowers/plans/showcase-inventaire.md` et repère les composants ci-dessus. L'inventaire indique pour chacun la matière déjà écrite ailleurs dans le dépôt : cas E2E, page showcase héritée, story Storybook. Les cas E2E sont la source la plus fiable — ce sont des montages qui fonctionnent, souvent avec leurs mocks.

Puis ouvre le fichier source de chaque composant. **C'est lui qui fait foi pour l'API**, jamais l'intuition ni un composant homonyme d'un autre paquet — le dépôt en compte sept paires.

- [ ] **Step 2: Écrire les 19 fichiers de démo**

Applique la recette de la section « La recette d'une démo » de ce plan. Rappel des six règles dont le non-respect fait échouer la génération : nom de fichier = identifiant, `template` littéral sans interpolation, `summary` littéral, titres distincts au sein d'une démo, noms de classes d'exemple uniques dans tout le catalogue, identifiant de démo unique.

Et le rappel qui compte le plus : **n'affirme aucun comportement sans l'avoir lu dans la source**. Une description est une affirmation.

- [ ] **Step 3: Enregistrer les démos**

Ajoute les 19 entrées à `src/app/showcase/registry.ts`, en gardant le tableau trié par paquet puis par identifiant, et en réutilisant les valeurs de `group` déjà en place plutôt qu'en créant une famille par composant.

- [ ] **Step 4: Régénérer et vérifier le décompte**

```powershell
yarn showcase:metadata
```

Attendu : aucune erreur levée, et **« 0 composant sans démo »** — exactement 19 de moins que les 19 précédents. Un écart signale une démo mal nommée ou mal enregistrée.

- [ ] **Step 5: Compiler**

```powershell
npx ng build Techatome --configuration development
```

Attendu : succès. Un import erroné dans une démo se voit là, et nulle part ailleurs. Le build prend plusieurs minutes : lance-le en tâche de fond.

- [ ] **Step 6: Regarder le résultat**

```powershell
npx ng serve --port 4300
```

Ouvre les 19 pages et vérifie que chaque exemple rend ce que son titre annonce. C'est la seule étape qui prouve que les démos montrent réellement quelque chose ; la compilation ne le dit pas.

- [ ] **Step 7: Point de contrôle**

`yarn showcase:metadata` sans erreur et à 0, build vert, 19 pages qui rendent.
Message de commit suggéré, **à n'exécuter que si l'utilisateur l'a demandé** :
`feat(showcase): démos @ta/ui — mise en page`

---
## Task 17: Retrait des pages d'attente et des pages thématiques héritées

Tant que ces pages existent, la vitrine porte des sections vides que ce plan a précisément pour but d'éliminer.

**Files:**
- Delete: `src/app/showcase/coming-soon/coming-soon.component.ts`
- Delete: les pages thématiques héritées dont le contenu a été récolté
- Modify: `src/app/app.routes.ts`, `src/app/app.component.ts`
- Modify: `e2e/specs/**` — les spécifications visant les pages supprimées

**Interfaces:**
- Consumes: tout le catalogue livré par les tâches 1 à 16.
- Produces: une application sans page d'attente.

- [ ] **Step 1: Vérifier que plus rien ne manque**

```powershell
yarn showcase:metadata
```

Attendu : « 0 composant sans démo ». **Si ce n'est pas le cas, arrête-toi et signale-le** : supprimer les pages d'attente avant que leur contenu existe créerait des trous au lieu d'en combler.

- [ ] **Step 2: Supprimer les routes d'attente**

Dans `src/app/app.routes.ts`, supprime les routes `menu` et `notification` qui pointent vers `ComingSoonPage`. Elles seront désormais servies par l'index de paquet, via la route `:pkg` et sa garde.

- [ ] **Step 3: Supprimer le composant d'attente**

```powershell
Remove-Item -Recurse src/app/showcase/coming-soon
```

Puis vérifie qu'aucune référence ne subsiste :

```powershell
Select-String -Pattern "ComingSoon|coming-soon" -Path src/app -Recurse
```

Attendu : aucune correspondance.

- [ ] **Step 4: Supprimer le mécanisme « bientôt »**

La page d'accueil et la barre latérale portent un drapeau `soon` qui affiche un
marqueur « bientôt » sur les paquets non documentés. Une fois toutes les démos
écrites, il ne désigne plus rien.

Dans `src/app/showcase/home/home.component.ts`, retire le champ `soon` de
l'interface et des entrées qui le portent. Dans `src/app/showcase/home/home.component.html`,
retire le bloc `@if (section.soon)` et la liaison `[class.is-soon]`, puis la règle
`.is-soon` de la feuille de style associée.

Fais de même dans `src/app/app.component.ts` — champ `soon?` de l'interface
`MenuItem` et entrées concernées — et dans `src/app/app.component.html`, bloc
`@if (item.soon)`.

Vérifie ensuite qu'il ne reste rien :

```powershell
Select-String -Pattern "soon|bientôt" -Path src/app -Recurse
```

Attendu : aucune correspondance.

- [ ] **Step 5: Retirer les pages thématiques héritées**

Pour chaque page de `src/app/showcase/` dont tout le contenu a été récolté dans des démos — `ui/`, `ui-display/`, `ui-cards-lists/`, `ui-layout/`, `ui-progress/`, `ui-feedback/`, `ui-navigation/`, `container/`, `form/`, `features/`, `charts/`, `files/`, `wysiswyg/`, `utils/`, `user/`, `icons/` — supprime le répertoire, sa route dans `app.routes.ts` et son entrée dans le menu de `app.component.ts`.

**Vérifie avant chaque suppression** que le contenu a bien été repris. Une page dont le markup n'a pas été récolté ne se supprime pas : elle se récolte d'abord.

Les pages `home/` et `theme/` restent : elles ne documentent aucun composant.

- [ ] **Step 6: Mettre à jour les spécifications Playwright concernées**

Les spécifications qui visaient une page supprimée doivent viser sa remplaçante. `e2e/specs/features/grid.spec.ts` en particulier utilise la page `/features`.

- [ ] **Step 7: Vérifier**

```powershell
npx ng build Techatome --configuration development
yarn e2e
```

Attendu : build vert, et la suite E2E verte à l'exception connue près.

- [ ] **Step 8: Point de contrôle**

Aucune page d'attente, aucune page thématique orpheline, suite verte.
Message suggéré : `refactor(showcase): retirer les pages d'attente et les pages thématiques héritées`

---

## Task 18: Garde-fous de couverture

Sans eux, rien n'empêche la vitrine de se retrouver incomplète au prochain composant ajouté à une bibliothèque.

**Files:**
- Create: `scripts/showcase-metadata/coverage.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: `buildApi`, `buildDemos` (`scripts/showcase-metadata/build.mjs`).
- Produces: un test qui échoue dès qu'un composant public n'a pas de démo.

- [ ] **Step 1: Écrire le test qui échoue**

`scripts/showcase-metadata/coverage.test.mjs` :

```js
import assert from "node:assert/strict";
import { test } from "node:test";

import { buildApi, buildDemos, readRegistryIds } from "./build.mjs";

test("chaque composant public a une démo", () => {
  const { entries } = buildApi();
  const { index } = buildDemos();

  const missing = entries
    .filter((entry) => entry.kind === "component" && !index[entry.id])
    .map((entry) => entry.id);

  assert.deepEqual(missing, []);
});

test("chaque démo enregistrée correspond à un composant existant", () => {
  const { entries } = buildApi();
  const { index } = buildDemos();

  const known = new Set(entries.map((entry) => entry.id));
  const orphans = Object.keys(index).filter((id) => !known.has(id));

  assert.deepEqual(orphans, []);
});

test("chaque démo écrite est enregistrée dans le registre", () => {
  // Sans ce test, une démo écrite mais non enregistrée ferait baisser le compte
  // de composants manquants tout en produisant une page sans route, sans carte
  // d'index et sans résultat de recherche : une couverture qui ment.
  const { index } = buildDemos();
  const registered = readRegistryIds();

  const unregistered = Object.keys(index).filter((id) => !registered.has(id));
  assert.deepEqual(unregistered, []);

  const phantom = [...registered].filter((id) => !index[id]);
  assert.deepEqual(phantom, []);
});
```

- [ ] **Step 2: Le lancer**

```powershell
node --test scripts/showcase-metadata/coverage.test.mjs
```

Attendu : **vert**, puisque les tâches 1 à 16 ont vidé `missing`. S'il échoue, il nomme les composants oubliés — traite-les avant de continuer.

- [ ] **Step 3: Vérifier qu'il mord**

Retire temporairement une entrée de `registry.ts`, relance le test, constate que
**« chaque démo écrite est enregistrée dans le registre » échoue** en nommant le
composant, puis remets l'entrée et constate qu'il repasse. Mets les deux sorties
dans ton rapport.

C'est ce troisième test qui porte la preuve : les deux premiers ne lisent pas
`registry.ts` et resteraient verts.

- [ ] **Step 4: Couvrir les branches que la phase 0 ne pouvait pas atteindre**

Trois branches de la page composant sont restées sans test parce que rien ne les
déclenchait à l'époque. Les démos écrites depuis les rendent atteignables :

Dans `e2e/specs/showcase/component-page.spec.ts`, ajoute :

```ts
  test("un composant non montable affiche son explication et son usage", async ({ page }) => {
    await page.goto("/core/ta-google-maps");

    await expect(page.getByTestId("not-renderable")).toContainText("Google Maps");
    await expect(page.getByTestId("example-block")).toHaveCount(0);
    // Le tableau d'API reste rendu : c'est ce que la page promet au lecteur.
    await expect(page.getByTestId("api-table")).toBeVisible();
  });
```

Adapte le sélecteur et le texte attendu au composant que tu auras effectivement
marqué `notRenderable` — `ta-google-maps` si c'est bien lui.

Dans `e2e/specs/showcase/package-index.spec.ts`, ajoute :

```ts
  test("l'index d'un paquet groupe et trie ses composants", async ({ page }) => {
    await page.goto("/ui");

    // @ta/ui compte plusieurs familles : le groupement doit être visible.
    const groups = page.getByTestId("index-group");
    await expect(groups.first()).toBeVisible();
    expect(await groups.count()).toBeGreaterThan(1);
  });
```

Ce test n'était pas possible avant la tâche 17 : `/ui` était capté par le shell
thématique hérité.

La troisième branche, `demo-load-error`, exige un import volontairement rompu. Le
harness couvre déjà ce mécanisme par son cas `lazy-broken` ; ne cherche pas à le
reproduire ici, et dis-le dans ton rapport.

- [ ] **Step 5: Lancer toute la suite**

```powershell
yarn test:showcase-metadata
```

Attendu : les 31 tests de la fondation plus les 2 nouveaux.

- [ ] **Step 6: Point de contrôle**

Couverture verrouillée par un test qui échoue dès qu'un composant public n'a pas de démo.
Message suggéré : `test(showcase): verrouiller la couverture des composants`

---

## Fin

Le travail est terminé quand ces cinq affirmations sont vérifiées par une commande :

1. `yarn showcase:metadata` annonce **0 composant sans démo**.
2. `yarn test:showcase-metadata` est vert, garde-fou de couverture compris.
3. `npx ng build Techatome --configuration development` compile.
4. `yarn e2e` est vert, à l'échec préexistant près.
5. `Select-String -Pattern "ComingSoon" -Path src -Recurse` ne renvoie rien, et aucune page de la vitrine n'affiche de section vide.
