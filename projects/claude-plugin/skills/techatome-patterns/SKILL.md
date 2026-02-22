---
name: techatome-patterns
description: Bonnes pratiques et patterns Angular pour le développement sur les projets techatome/techatome. Couvre les conventions de code, le routing, les formulaires, les menus, le layout, les modales, AG Grid, les services GraphQL, la gestion des états loading/error/empty, et les classes de base. Utiliser ce skill quand l'utilisateur demande comment implémenter une feature, quel pattern utiliser, ou comment suivre les conventions du projet.
---

## 0. UTILISATION OBLIGATOIRE DES COMPOSANTS @TA/*

**L'utilisation d'un élément HTML natif ou d'un composant tiers est INTERDITE lorsqu'un équivalent `@ta/*` existe.** Cette règle est sans exception.

| Besoin             | Composant obligatoire                                                                 | Interdit                                |
| ------------------ | ------------------------------------------------------------------------------------- | --------------------------------------- |
| Bouton / CTA       | `<ta-button>`                                                                         | `<button>`, `<a>` stylisé               |
| Titre / heading    | `<ta-title [level]="N">`                                                              | `<h1>`–`<h6>`                           |
| Texte / paragraphe | `<ta-text>`                                                                           | `<p>`, `<span>`                         |
| Layout de page     | `<ta-layout-page>`, `<ta-layout-header>`, `<ta-layout-content>`, `<ta-layout-nav>`    | Divs custom                             |
| Card               | `<ta-card>` + `<ta-card-header>`, `<ta-card-content>`, `<ta-card-cta>`                | Divs custom                             |
| Liste              | `<ta-list-container>` + `<ta-list-element>`, `<ta-list-title>`, `<ta-list-sub-title>` | `<ul>/<li>`, divs                       |
| Badge              | `<ta-badge>`                                                                          | `<span>` stylisé                        |
| Icône              | `<ta-font-icon>`, `<ta-material-icon>`, `<ta-local-icon>`                             | `<i>`, `<span>` avec classes            |
| Chargement         | `<ta-loader>`                                                                         | Spinners custom, `<mat-spinner>` direct |
| État vide          | `<ta-empty>`                                                                          | Divs "no data" custom                   |
| État erreur        | `<ta-error>`                                                                          | Divs d'erreur custom                    |
| Formulaire         | `<ta-form>` + `<ta-input-*>`                                                          | `<form>`, `<input>`, `<select>` natifs  |
| Notification       | `NotificationService` (`@ta/notification`)                                            | `alert()`, `mat-snackbar` direct        |
| Progression        | `<ta-progress-bar>`, `<ta-progress-circle>`                                           | `<mat-progress-bar>` direct             |

En cas de doute, vérifier les APIs publiques de `@ta/ui`, `@ta/form-basic`, `@ta/form-input`, `@ta/icons`, `@ta/notification` avant d'utiliser un élément natif ou tiers.

---

## 0b. SCSS — VARIABLES ET CLASSES OBLIGATOIRES

**L'utilisation de valeurs CSS brutes (pixels, couleurs hex, etc.) est INTERDITE lorsqu'un token `@ta/styles` existe.** Toujours utiliser `common.get-var()` ou les classes utilitaires générées.

### Import obligatoire

Tout fichier `.component.scss` qui utilise des variables ou mixins `@ta/styles` doit commencer par :

### Espacement — `get-var(space, ...)`

| Valeur brute | Token obligatoire     |
| ------------ | --------------------- |
| `4px`        | `get-var(space, xs)`  |
| `8px`        | `get-var(space, sm)`  |
| `16px`       | `get-var(space, md)`  |
| `24px`       | `get-var(space, lg)`  |
| `32px`       | `get-var(space, xl)`  |
| `48px`       | `get-var(space, xxl)` |

```scss
// ✅ Correct
margin-bottom: get-var(space, xl);
padding: get-var(space, md);
gap: get-var(space, sm);

// ❌ Interdit
margin-bottom: 32px;
padding: 16px;
gap: 8px;
```

### Couleurs — `get-var(...)`

```scss
// ✅ Correct
color: get-var(text, primary);
color: get-var(text, secondary);
background-color: get-var(surface, primary);
background-color: get-var(surface, secondary);
border-color: get-var(border, primary);

// ❌ Interdit
color: #1f2245;
background-color: #f4f4f4;
border-color: #e0e0e0;
```

Tokens disponibles :

- `get-var(text, primary|secondary|tertiary|brand|invert|body|success|warning|alert)`
- `get-var(surface, default|primary|secondary|tertiary|brand|hover|invert|success|warning|alert)`
- `get-var(border, primary|secondary|brand|hover|invert|disabled|success|warning|alert)`
- `get-var(icon, primary|secondary|tertiary|brand|invert|disabled|success|alert)`

### Radius — `get-var(radius, ...)`

```scss
// ✅ Correct
border-radius: get-var(radius, minimal); // 4px
border-radius: get-var(radius, rounded); // 8px
border-radius: get-var(radius, label); // 16px
border-radius: get-var(radius, full); // 40px

// ❌ Interdit
border-radius: 4px;
border-radius: 8px;
```

### Ombres — `get-var(shadow, ...)`

```scss
// ✅ Correct
box-shadow: get-var(shadow, black-sm);
box-shadow: get-var(shadow, brand-md);

// ❌ Interdit
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
```

### Classes utilitaires — à préférer aux styles inline

Utiliser les classes CSS utilitaires dans les templates **plutôt que de créer des règles SCSS custom** pour des besoins communs.

**Flexbox :**

```html
<div class="space-between">
  <!-- justify-content: space-between -->
  <div class="align-center">
    <!-- align-items: center -->
    <div class="flex-column">
      <!-- flex-direction: column -->
      <div class="flex-row">
        <!-- flex-direction: row -->
        <div class="flex-full">
          <!-- flex: 1 1 100% -->
          <div class="full-width"><!-- flex: 1; width: 100% --></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Espacements :**

```html
<div class="p-md">
  <!-- padding: 16px -->
  <div class="m-lg">
    <!-- margin: 24px -->
    <div class="g-sm">
      <!-- gap: 8px -->
      <div class="mt-xl">
        <!-- margin-top: 32px -->
        <div class="px-md py-sm">
          <!-- padding horizontal + vertical -->
          <div class="ml-a"><!-- margin-left: auto --></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Couleurs :**

```html
<div class="bgc-surface-primary">
  <span class="text-color-secondary"> <i class="icon-color-brand-primary"></i></span>
</div>
```

**Typographie :**

```html
<span class="ta-c">
  <!-- text-align: center -->
  <span class="tt-u">
    <!-- text-transform: uppercase -->
    <span class="tov-e"> <!-- text-overflow: ellipsis --></span></span
  ></span
>
```

### Mixins media queries

```scss
// ✅ Correct
@include from(md) { ... }
@include to(sm) { ... }
@include between(sm, lg) { ... }

// ❌ Interdit
@media (min-width: 768px) { ... }
```

### Règle générale

> **Ne jamais écrire une valeur CSS brute qui correspond à un token `@ta/styles`.** En cas de doute, consulter `projects/styles/src/style/_vars.scss`.

---

## 0. CONVENTIONS DE CODE — COMPOSANTS ANGULAR

### 0.1 `this.` obligatoire dans les templates HTML

**Toujours** préfixer les variables et méthodes issues du `.ts` par `this.` dans les templates HTML. C'est une convention stricte du projet.

```html
<!-- ✅ Correct -->
<ta-loader [isLoading]="this.requestState.isLoading()">
  <ta-ag-grid [gridId]="this.id" [colsMetaData]="this.colsMetaData">
    @if (this.form()) {
    <ta-form [inputs]="this.form() ?? []">
      } @for (item of this.items$ | async; track item.id) { }
      <ta-button (action)="this.create()">
        {{ 'key' | translate }}
        <!-- les pipes n'ont pas de this -->

        <!-- ❌ Incorrect -->
        <ta-loader [isLoading]="requestState.isLoading()">
          <ta-ag-grid
            [gridId]="id"
            [colsMetaData]="colsMetaData"
          ></ta-ag-grid></ta-loader></ta-button></ta-form></ta-ag-grid
></ta-loader>
```

Seules exceptions : les variables de bloc Angular (`@let`, `@for`, `@if`) ne prennent pas `this.`.

```html
@let list = this.items$ | async;
<!-- this. sur l'expression source -->
@for (item of list; track item.id)
<!-- pas de this. sur la variable de boucle -->
{{ item.name }}
<!-- pas de this. sur la variable de boucle -->
```

---

### 0.2 Ordre des membres dans une classe de composant

L'ordre canonique, tel qu'appliqué dans tous les composants techatome-back :

```typescript
@Component({
  selector: 'app-my-component',    // '' pour les pages (routes), 'app-xxx' pour les composants
  standalone: true,
  imports: [...],                   // ordre alphabétique des modules
  templateUrl: './my.component.html',
  styleUrl: './my.component.scss',
  providers: [...],                 // optionnel
})
export class MyComponent extends BaseComponent implements OnInit, AfterViewInit {

  // 1. Signal inputs / outputs / @ViewChild / @ContentChild
  myInput = input<string>('');

  myEvent = output<void>();

  @ViewChild('myRef')
  myRef!: ElementRef;

  // 2. Propriétés publiques (état du composant, signals, observables exposés)
  public myData: MyType | null = null;
  public isVisible = signal(false);
  public items$ = this._myService.items.get$();

  // 3. Propriétés readonly publiques (constantes, IDs de grille)
  readonly id = 'myGridId';

  // 4. Getters publics
  get myComputed() {
    return this._myService.items.get();
  }

  // 5. Services et dépendances privées (inject)
  private readonly _myService = inject(MyService);
  private readonly _dialog = inject(MatDialog);

  // 6. Constructeur (appel super() + logique d'initialisation synchrone)
  constructor() {
    super();
    this._fetch();    // fetch initial si nécessaire
  }

  // 7. Lifecycle hooks (dans l'ordre Angular : ngOnInit > ngAfterViewInit > ngOnDestroy)
  ngOnInit() {
    this._registerSubscription(
      this._getPathParams({ id: '' }).subscribe(({ id }) => { this.id = id; })
    );
  }

  ngAfterViewInit() {
    this.form.set(this._formService.getForm(this.entity()));
  }

  // 8. Méthodes publiques (handlers d'événements, actions appelées depuis le template)
  public validation(data: any) { ... }
  public goToItem(id: string) { ... }
  public navigation = (id: string) => { ... };  // arrow function si passée en input signal

  // 9. Méthodes privées (logique interne, fetch, helpers)
  private _fetch() {
    this.requestState.asked();
    this._myService.fetchItems$().subscribe({
      complete: () => this.requestState.completed(),
      error: (err: HttpErrorResponse) => this.requestState.onError(err.status, err.statusText),
    });
  }
}
```

### 0.3 Exemples réels extraits du projet

**Composant avec grille AG Grid** (`all-list.component.ts`) :

```typescript
export class AllListComponent extends BaseComponent {
  // 1. Signal inputs
  forcedFilter = input<any>({});

  // 2. Propriétés publiques
  public colsMetaData: GridMetaData[] | null = null;
  public services: IDataService<any> = { ... };
  public fieldsOverrides = fieldsOverrides;

  // 3. Readonly + services privés mélangés (inject)
  protected _grid: taGridData<any> | null = null;
  private readonly _dataService = inject(taGridDataService<any>);
  readonly id = 'taskView';
  readonly metaDataService = inject(taGridMetaDataService);

  // 6. Constructeur
  constructor() { super(); this._fetch(); }

  // 7. ngOnInit
  ngOnInit() { this._grid = this._dataService.get(this.id, true); ... }

  // 8. Méthodes publiques
  public goToTask(taskId: string, openInExternalLink = false) { ... }

  // 9. Méthodes privées
  private _fetch() { ... }
}
```

**Composant formulaire avec AfterViewInit** (`edit.component.ts`) :

```typescript
export class EditComponent extends AbstractPanelFormLayout implements AfterViewInit {
  // 1. Signal inputs / outputs / @ViewChild
  colorSet = input<ColorSet | null>(null);
  closeEvent = output();
  @ViewChild('formComponent') formComponent!: FormComponent;

  // 2. Propriétés publiques + signals
  public form = signal<InputBase<any>[] | null>(null);

  // 5. Services privés
  private readonly _formService = inject(taColorSetFormService);
  private readonly _colorSetService = inject(taColorSetsService);
  private _notificationService = inject(LAZY_SERVICE_TOKEN);

  // 4. Getters publics
  public get colorSetPreview(): ColorSet { return { ... }; }

  // 7. ngAfterViewInit
  ngAfterViewInit(): void { this.form.set(this._formService.getForm(this.colorSet())); }

  // 8. Méthodes publiques
  public validation(data: any) { ... }
}
```

**Page de détail avec route params** (`view.component.ts`) :

```typescript
export class ViewPage extends BasePage implements AfterViewInit {
  // 1. @ViewChild
  @ViewChild('taskStatusTemplate', { read: TemplateRef })
  filterTemplate!: TemplateRef<{ status: number }>;

  // 2. Propriétés publiques
  public id = '';
  public readonly = signal(false);

  // 5. Services privés
  private readonly _tasksService = inject(AppTasksService);
  private readonly _readonlyContextService = inject(ReadOnlyContextService);

  // 3. Readonly public
  readonly sharedService = inject(taSharedCommunicationsService);

  // 4. Getter public
  get contactId$() { return this._tasksService.task.get$(this.id).pipe(...); }

  // 7. Lifecycle
  ngOnInit() { ... }
  ngAfterViewInit() { ... }

  // 8. Méthodes publiques
  public navigation = (id: string) => { ... };
}
```

### 0.4 Règles du décorateur `@Component`

- `selector: ''` sur les **pages** (composants chargés via routing) — pas de sélecteur HTML
- `selector: 'app-xxx'` sur les **composants réutilisables** (préfixe `app-` dans l'app, `ta-` dans les libs)
- `standalone: true` **toujours**
- `styleUrl` (singulier) et non `styleUrls` (pluriel) — nouvelle syntaxe Angular 17+
- `imports` dans l'ordre alphabétique des noms de modules

### 0.5 Conventions de nommage

| Type                   | Suffix classe | Exemple                                        |
| ---------------------- | ------------- | ---------------------------------------------- |
| Page chargée par route | `Page`        | `TeamsPage`, `AllTasksListPage`                |
| Composant réutilisable | `Component`   | `AllListComponent`, `EditComponent`            |
| Modale MatDialog       | `Modal`       | `DocumentAttachmentModal`                      |
| Service métier         | `Service`     | `AppTasksService`, `AppTeamsService`           |
| Service de formulaire  | `FormService` | `AppTasksFormService`, `taColorSetFormService` |

- Propriétés privées et méthodes privées : préfixées par `_` → `_myService`, `_fetch()`
- Services injectés : toujours `private readonly` (sauf si besoin de réassignation)
- Méthodes lifecycle Angular (`ngOnInit`, `ngAfterViewInit`) : sans modificateur d'accès
- Méthodes publiques : `public` explicite

---

## 1. ROUTING

### Structure de base d'un fichier de routes feature

**Étape 1 — Déclarer l'enum et enregistrer les routes dans `taRoutes`**

```typescript
// features/tasks/tasks.routes.ts
import { Routes } from '@angular/router';

import { taRoutes } from '@ta/menu';

export enum ETasksRoute {
  tasks = 'tasks',
  list = 'list',
  view = 'view',
  summary = 'summary',
}

// Enregistrement centralisé des URLs (obligatoire pour taRoutes.getAbsoluteUrl)
taRoutes.addRoute({
  key: ETasksRoute.tasks,
  url: 'tasks',
  children: [
    { key: ETasksRoute.summary, url: 'summary' },
    { key: ETasksRoute.list, url: 'list' },
    { key: ETasksRoute.view, url: 'view/:id' }, // paramètre dynamique
  ],
});

export const tasksRoutes: Routes = [
  {
    path: '',
    redirectTo: taRoutes.getUrl([ETasksRoute.tasks, ETasksRoute.summary]),
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./pages/base.component').then(c => c.TasksPage), // layout shell
    children: [
      {
        path: taRoutes.getUrl([ETasksRoute.tasks, ETasksRoute.summary]),
        loadComponent: () => import('./pages/summary/summary.component').then(c => c.SummaryPage),
      },
      {
        path: taRoutes.getUrl([ETasksRoute.tasks, ETasksRoute.list]),
        loadComponent: () => import('./pages/list/list.component').then(c => c.ListPage),
      },
    ],
  },
  // Route de détail HORS du shell (pas de menu latéral)
  {
    path: taRoutes.getUrl([ETasksRoute.tasks, ETasksRoute.view]),
    loadComponent: () => import('./pages/view/view.component').then(c => c.ViewPage),
  },
];
```

### Enregistrement dans app.routes.ts

```typescript
// app.routes.ts
import { AuthGuard, FeatureGuard } from '@ta/user';

import { ETasksRoute, tasksRoutes } from './features/tasks/tasks.routes';

export const routes: Routes = [
  {
    path: taRoutes.getUrl([ETasksRoute.tasks]),
    children: tasksRoutes,
    canActivate: [AuthGuard, FeatureGuard], // guards en tableau
    data: { feature: 'ticketing', level: 'authorize' }, // data pour FeatureGuard
  },
];
```

### Navigation programmatique

```typescript
// Depuis n'importe quel composant étendant BaseComponent ou BasePage
import { taRoutes } from '@ta/menu';

import { ETasksRoute } from '../tasks.routes';

// Naviguer vers une route avec paramètres
this._router.navigateByUrl(taRoutes.getAbsoluteUrl([ETasksRoute.tasks, ETasksRoute.view], { id: taskId }));

// Ouvrir dans un nouvel onglet
window.open(taRoutes.getAbsoluteUrl([ETasksRoute.tasks, ETasksRoute.view], { id: taskId }), '_blank');
```

### Lire les paramètres de route dans une Page

```typescript
// BasePage expose _getPathParams, _getQueryParams, _getParentParams
export class ViewPage extends BasePage implements OnInit {
  public id = '';

  ngOnInit() {
    this._registerSubscription(
      this._getPathParams({ id: '' }).subscribe(({ id }) => {
        this.id = id;
        // charger les données avec this.id
      })
    );
  }
}
```

### Règles de routing

- **Toujours** utiliser `taRoutes.addRoute()` + `taRoutes.getUrl()` — jamais de strings URL hardcodées
- **Toujours** `loadComponent: () => import(...).then(c => c.MyPage)` — lazy loading systématique
- **Guards** : `AuthGuard` pour l'authentification, `FeatureGuard` + `data: { feature, level }` pour les permissions
- **Redirections** : utiliser `redirectTo` + `pathMatch: 'full'` sur le path vide
- **Shell pattern** : une page parente avec `children` pour les pages avec menu latéral commun

---

## 2. FORMULAIRES

### Pattern complet : Service de formulaire + composant d'édition

**Service de formulaire** (`services/tasks/form/tasks.service.ts`) :

```typescript
import { Injectable, inject } from '@angular/core';
import { Validators } from '@angular/forms';

import {
  InputBase,
  InputCheckBox,
  InputChoices,
  InputDatePicker,
  InputPanel,
  InputTextBox,
  InputWysiswyg,
} from '@ta/form-model';

// Déclarer les clés comme enum pour éviter les typos
export enum EMyFormFields {
  title = 'title',
  status = 'status',
  assigneeId = 'assigneeId',
  dueDate = 'dueDate',
  description = 'description',
}

@Injectable({ providedIn: 'root' })
export class MyFormService {
  private _usersService = inject(taUsersService);

  // Construire le formulaire (prend l'entité existante pour l'édition, null pour la création)
  public getForm(entity: MyEntity | null): InputBase<any>[] {
    return [
      new InputPanel({
        key: 'main-panel',
        label: 'my-feature.form.main.label',
        containerClass: ['highlight-title space-between bdp-b color-border-primary py-space-md'],
        contentClass: 'col-6 flex-column',
        children: [
          new InputTextBox({
            key: EMyFormFields.title,
            label: 'my-feature.form.title',
            validators: [Validators.required],
            value: entity?.title ?? '',
          }),
          new InputChoices({
            key: EMyFormFields.assigneeId,
            label: 'my-feature.form.assignee',
            multiple: false,
            withSearch: true,
            options: this._usersService.fetchUsers$().pipe(
              filter(isNonNullable),
              map(users => users.map(u => ({ id: u.id, name: fullName(u), data: u })))
            ),
            value: entity?.assigneeId ? [entity.assigneeId] : [],
          }),
          new InputDatePicker({
            key: EMyFormFields.dueDate,
            label: 'my-feature.form.dueDate',
            minDate: 'today',
            value: entity?.dueDate ?? null,
          }),
        ],
      }),
    ];
  }

  // Formatter les données du formulaire pour la création
  public formatCreateForm(data: any): MyCreationPayloadInput {
    return {
      assigneeId: data[EMyFormFields.assigneeId]?.[0] ?? null,
      dueDate: data[EMyFormFields.dueDate] ?? null,
      title: data[EMyFormFields.title],
    };
  }

  // Formatter les données du formulaire pour la mise à jour
  public formatUpdateForm(id: string, data: any): Partial<MyModifierPayloadInput> {
    const modified = getModifiedValues(data, existingEntity);
    return {
      id,
      ...modified,
      ...graphQlUpdateFields(modified), // pour GraphQL updatedFields
    };
  }
}
```

**Composant d'édition** (pattern panel latéral) :

```typescript
// components/my-entity/edit/edit.component.ts
import { AfterViewInit, Component, ViewChild, inject, input, output, signal } from '@angular/core';

import { AbstractPanelFormLayout, PanelFormLayoutComponent } from '@ta/core';
import { FormComponent } from '@ta/form-basic';
import { InputBase } from '@ta/form-model';
import { ENotificationCode, LAZY_SERVICE_TOKEN } from '@ta/notification';

@Component({
  selector: 'app-my-entity-edit',
  standalone: true,
  imports: [taFormModule, taLayoutModule, PanelFormLayoutComponent /* ... */],
  templateUrl: './edit.component.html',
})
export class EditComponent extends AbstractPanelFormLayout implements AfterViewInit {
  entity = input<MyEntity | null>(null);
  closeEvent = output<void>();
  @ViewChild('formComponent') formComponent!: FormComponent;

  public form = signal<InputBase<any>[] | null>(null);

  private _formService = inject(MyFormService);
  private _entityService = inject(MyEntityService);
  private _notificationService = inject(LAZY_SERVICE_TOKEN);

  ngAfterViewInit(): void {
    // Initialiser le formulaire après ViewInit pour accéder au ViewChild
    this.form.set(this._formService.getForm(this.entity()));
  }

  public validation(data: any) {
    this.requestState.asked(); // démarre l'état de chargement

    const request$ = this.entity()?.id
      ? this._entityService.update$(this._formService.formatUpdateForm(this.entity()!.id, data))
      : this._entityService.create$(this._formService.formatCreateForm(data));

    request$.subscribe({
      complete: () => {
        this._notificationService.addNotification('notification.common.success', ENotificationCode.success);
        this.closeEvent.emit();
      },
      error: () => {
        this._notificationService.addNotification('app.notification.common.error', ENotificationCode.error);
        this.requestState.completed();
      },
    });
  }
}
```

**Template du formulaire d'édition** (`edit.component.html`) :

```html
<ta-panel-form-layout [askValidation$]="this.askValidation$" [formValidity]="this.formValidity" class="full-width">
  <div class="m-space-sm">
    @if (this.form()) {
    <ta-form
      #formComponent
      [inputs]="this.form() ?? []"
      (valid)="this.validation($event)"
      [askValidation$]="this.askValidation$"
      [canDisplayButton]="false"
      (isFormValid)="this.formValidity.set($event)"
    ></ta-form>
    }
  </div>
</ta-panel-form-layout>
```

### Champs dynamiques (visibilité et options réactives)

```typescript
// Un champ peut dépendre de la valeur d'un autre via changeValue$
const teamInput = new InputChoices({
  key: 'teamId',
  label: 'Équipe',
  multiple: false,
  options: teams$,
});

const assigneeInput = new InputChoices({
  key: 'assigneeId',
  label: 'Assigné à',
  multiple: false,
  // Visible seulement si une équipe est sélectionnée
  visible$: teamInput.changeValue$.pipe(map(value => !!value)),
  // Options filtrées selon l'équipe sélectionnée
  options: teamInput.changeValue$.pipe(
    filter(isNonNullable),
    switchMap(teamId => this._usersService.getUsersByTeam$(teamId))
  ),
});
```

### Règles formulaires

- **Toujours** utiliser un service dédié (`MyFormService`) pour construire les champs — jamais de `new InputXxx()` inline dans le composant
- **Toujours** déclarer les clés de champs dans un `enum` (`EMyFormFields`)
- Les `label` sont des **clés de traduction**, jamais du texte direct
- `ngAfterViewInit` pour initialiser `form.set()` si `@ViewChild('formComponent')` est utilisé
- Utiliser `AbstractPanelFormLayout` comme base pour les formulaires dans un panneau latéral
- Utiliser `getModifiedValues()` + `graphQlUpdateFields()` pour les updates GraphQL
- Les `validators` Angular vont dans les `InputBase` (ex: `validators: [Validators.required]`)

---

## 3. MENUS

### Menu principal (MenuIcon avec lien)

```typescript
// services/menus.service.ts
import { of } from 'rxjs';

import { Menu, MenuBase, MenuCollapse, MenuIcon, MenuPanel, taRoutes } from '@ta/menu';
import { taPermissionsService } from '@ta/user';

@Injectable({ providedIn: 'root' })
export class AppMenuService {
  private _permissionsService = inject(taPermissionsService);

  public getMainMenu() {
    const items = [
      new MenuIcon({
        exact: true,
        icon: 'home',
        key: 'dashboard',
        label: 'app.menu.main.dashboard',
        link: '/',
        order: 1,
      }),
      new MenuIcon({
        icon: 'task',
        key: 'tasks',
        label: 'app.menu.main.tasks',
        link: taRoutes.getAbsoluteUrl([ETasksRoute.tasks, ETasksRoute.summary]),
        order: 2,
        // Contrôle de visibilité via permissions (Observable<boolean>)
        visible$: this._permissionsService.canAccess$('ticketing', 'authorize'),
      }),
      new MenuIcon({
        icon: 'calendar-event-line',
        key: 'plannings',
        label: 'app.menu.main.plannings',
        link: taRoutes.getAbsoluteUrl([EPlanningsRoute.plannings]),
        order: 3,
        // Visibilité via flag d'environnement
        visible$: of(environment.PLANNING.enable),
      }),
    ];

    return new Menu({
      direction: 'responsive',
      elements: items.sort((a, b) => a.order - b.order),
    });
  }
}
```

### Menu hiérarchique (MenuCollapse avec enfants)

```typescript
public getSettingsMenu() {
  const items = [
    new MenuCollapse({
      exact: true,
      icon: 'Users',
      key: 'user',
      label: 'app.menu.settings.users',
      order: 1,
      children: [
        new MenuBase({
          key: 'users',
          label: 'app.menu.settings.users',
          link: taRoutes.getAbsoluteUrl([ESettingsRoute.settings, ESettingsRoute.users]),
          order: 1,
        }),
        new MenuBase({
          key: 'functions',
          label: 'app.menu.settings.functions',
          link: taRoutes.getAbsoluteUrl([ESettingsRoute.settings, ESettingsRoute.functions]),
          order: 2,
        }),
      ],
    }),
  ];
  return new Menu({ direction: 'responsive', elements: items });
}
```

### Menu avec panel (notifications, compte utilisateur)

```typescript
// MenuPanel : ouvre un panneau avec un TemplateRef
public getUserMenu(
  accountTemplate: TemplateRef<any>,
  notifTemplate: TemplateRef<any>,
  notifCounterTemplate: TemplateRef<any>
) {
  return new Menu({
    direction: 'responsive',
    elements: [
      new MenuPanel({
        endingIcon: 'icon-back',
        icon: 'contacts',
        key: 'account',
        label: 'app.menu.user.account',
        options: { extraTemplate: notifCounterTemplate },
        order: 1,
        template: accountTemplate,
      }),
      new MenuPanel({
        icon: 'notifications',
        key: 'notif',
        label: 'app.menu.user.notifications',
        order: 2,
        template: notifTemplate,
      }),
    ],
  });
}
```

### Menu avec callback (actions)

```typescript
// MenuIcon avec callback au lieu de link
new MenuIcon({
  callback: (data?: any) => this.handleAction(data),
  defaultOpen: true,
  disabled: false,
  key: 'my-action',
  label: 'Action',
  order: 1,
});
```

### Règles menus

- **Toujours** trier les éléments par `order` : `items.sort((a, b) => a.order - b.order)`
- **Toujours** `sort-keys` : les clés de l'objet passé au constructeur doivent être **triées alphabétiquement**
- Les `label` sont des **clés de traduction**
- `visible$` accepte un `Observable<boolean>` — utiliser `of(true/false)` pour les valeurs statiques
- Utiliser `taRoutes.getAbsoluteUrl()` (pas `getUrl()`) pour les liens de menu
- Types disponibles : `MenuIcon` (lien + icône), `MenuBase` (lien simple), `MenuCollapse` (groupe repliable), `MenuPanel` (ouvre un panneau), `MenuCollapse` (sous-menu)

---

## 4. LAYOUT DE PAGES

### Page de premier niveau (avec menu nav principal)

Utiliser le composant shell `LayoutFirstLevelComponent` ou `LayoutSecondLevelComponent` :

```html
<!-- layout-first-level.component.html -->
<ta-layout-page>
  <ta-layout-header><!-- contenu optionnel --></ta-layout-header>
  <ta-layout-title>
    <ta-title>
      <ng-content select="app-layout-title"></ng-content>
    </ta-title>
  </ta-layout-title>
  <ta-layout-content>
    <ng-content select="app-layout-content"></ng-content>
  </ta-layout-content>
  <ta-layout-nav>
    @defer (on immediate; prefetch on immediate) {
    <app-main-menu></app-main-menu>
    }
  </ta-layout-nav>
</ta-layout-page>
```

**Utilisation dans une page** :

```html
<!-- pages/list/list.component.html -->
<app-layout-first-level>
  <app-layout-title>{{ 'tasks.page.title' | translate }}</app-layout-title>
  <app-layout-content>
    <!-- contenu principal -->
    <app-task-all-list></app-task-all-list>
  </app-layout-content>
</app-layout-first-level>
```

### Panel latéral (liste + formulaire côte à côte)

Pattern `BaseListPage<T>` :

```typescript
// pages/teams/list/list.component.ts
@Component({
  standalone: true,
  imports: [taLayoutModule, ListComponent, EditComponent, TranslatePipe /* ... */],
  templateUrl: './list.component.html',
})
export class TeamsPage extends BaseListPage<Team> {}
```

```html
<!-- list.component.html -->
<div class="flex-column g-space-sm">
  <div class="d-flex ml-a">
    <ta-button (action)="this.create()">{{ 'teams.cta.creation' | translate }}</ta-button>
  </div>
  <app-teams-list (open)="this.active($event)" [refresh$]="this.refresh$"></app-teams-list>
</div>

<ta-layout-full-panel
  [toggleState]="!!this.isShowPanel()"
  (closeEvent)="this.close()"
  [title]="'teams.edit.title' | translate"
>
  @if (this.isShowPanel()) {
  <app-team-edit class="d-flex full-width" [team]="this.activeItem" (closeEvent)="this.close()"></app-team-edit>
  }
</ta-layout-full-panel>
```

`BaseListPage<T>` fournit :

- `activeItem: T | null` — élément sélectionné pour l'édition
- `creation: boolean` — mode création
- `refresh$: Subject<void>` — signal de rafraîchissement de la liste
- `isShowPanel()` — true si panel ouvert
- `create()` — ouvre le panel en mode création
- `active(item)` — ouvre le panel en mode édition
- `close()` — ferme le panel + émet `refresh$`

---

## 5. MODALES (MatDialog)

### Ouvrir une modale depuis un composant

```typescript
import { MatDialog } from '@angular/material/dialog';

import { AttachmentsResult, DocumentAttachmentModal } from './document-attachment-modal.component';

@Component({
  standalone: true,
  imports: [
    /* ... */
  ],
})
export class ParentComponent extends BaseComponent {
  private _dialog = inject(MatDialog);

  public openAttachmentModal() {
    const ref = this._dialog.open<DocumentAttachmentModal, void, AttachmentsResult | null>(DocumentAttachmentModal, {
      panelClass: 'classic-modal',
    });

    ref.afterClosed().subscribe(result => {
      if (!result) return;
      // traiter result.files, etc.
    });
  }
}
```

### Créer une modale

```typescript
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { InputUpload, InputUploadValue } from '@ta/form-model';
import { taBaseModal } from '@ta/utils';

export interface MyModalResult {
  files: InputUploadValue[];
}

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [taFormInputsModule, taLayoutModule],
  templateUrl: './my-modal.component.html',
})
export class MyModal extends taBaseModal {
  public uploadInput = new InputUpload({ confirmButton: true });

  constructor(public dialogRef: MatDialogRef<MyModal, MyModalResult | null>) {
    super();
    this.dialogRef.addPanelClass('classic-modal');

    // Réagir aux changements du formulaire dans la modale
    this.uploadInput.changeValue$.subscribe({
      next: files => this.onSave(files),
    });
  }

  public onSave(files: InputUploadValue[]) {
    this.dialogRef.close({ files });
  }

  public onCancel() {
    this.dialogRef.close(null);
  }
}
```

---

## 6. AG GRID (listes de données)

### Composant de grille standard

```typescript
// components/shared/all-list/all-list.component.ts
import {
  GridMetaData,
  IDataService,
  taGridData,
  taGridDataService,
  taGridMetaDataService,
  taGridModule,
} from '@ta/core';

@Component({
  selector: 'app-task-all-list',
  standalone: true,
  imports: [taGridModule, taLayoutModule, taContainerModule],
  templateUrl: './all-list.component.html',
})
export class AllListComponent extends BaseComponent {
  forcedFilter = input<any>({});

  readonly id = 'taskView'; // identifiant unique de la grille
  readonly metaDataService = inject(taGridMetaDataService);

  protected _grid: taGridData<any> | null = null;
  private readonly _dataService = inject(taGridDataService<any>);

  public colsMetaData: GridMetaData[] | null = null;

  // Services de données pour la grille (serveur-side)
  public services: IDataService<any> = {
    getChildren$: params => this.metaDataService.getData$(this.id, params),
    getFieldsData$: (search, colId) => this.metaDataService.getFieldsData$(this.id, search, colId),
  };

  constructor() {
    super();
    this._fetchMetaData(); // charger les métadonnées des colonnes
  }

  ngOnInit() {
    this._grid = this._dataService.get(this.id, true);

    // Réagir au clic sur une ligne
    this._registerSubscription(
      this._grid.clickedRow$.subscribe(data =>
        this._router.navigateByUrl(taRoutes.getAbsoluteUrl([EMyRoute.list, EMyRoute.view], { id: data.id }))
      )
    );

    // Réagir aux actions du menu contextuel
    this._registerSubscription(
      this._grid.contextMenuAction$.subscribe(data => {
        if (data.action === 'openInExternalLink') {
          window.open(taRoutes.getAbsoluteUrl([EMyRoute.list, EMyRoute.view], { id: data.item.id }), '_blank');
        }
      })
    );
  }

  private _fetchMetaData() {
    this.requestState.asked();
    this.metaDataService.fectMetaData$(this.id).subscribe({
      next: data => (this.colsMetaData = data),
      complete: () => this.requestState.completed(),
    });
  }
}
```

### Template de grille

```html
<!-- all-list.component.html -->
<ta-loader [isLoading]="this.requestState.isLoading()">
  <ta-error [message]="this.requestState.getErrorMessage()" [code]="this.requestState.getErrorStatus()">
    <div class="content mt-space-md flex-column">
      <!-- Barre de contrôles (filtres, vues, colonnes) -->
      <div class="space-between">
        <ta-grid-tag class="d-flex" [gridId]="this.id"></ta-grid-tag>
        <ta-grid-control
          class="d-flex"
          [gridId]="this.id"
          [show]="{ fields: true, filters: true, search: false, switchView: false, views: true }"
        ></ta-grid-control>
      </div>

      @if (this.colsMetaData) {
      <ta-ag-grid
        [gridId]="this.id"
        [colsMetaData]="this.colsMetaData"
        [fieldsOverrides]="this.fieldsOverrides"
        [services]="this.services"
        [forcedFilter]="this.forcedFilter"
        [contextMenuItems]="['openInExternalLink']"
        [gridOptions]="{ cacheBlockSize: 50, pagination: true }"
        [colOptions]="{ sortable: true }"
      ></ta-ag-grid>
      }
    </div>
  </ta-error>
</ta-loader>
```

---

## 7. SERVICES GRAPHQL

### Pattern service GraphQL

```typescript
// services/my-entity/my-entity.service.ts
import { Injectable, inject } from '@angular/core';

import { GraphEndpoint, HandleComplexRequest, HandleSimpleRequest, enrichWith, taBaseService } from '@ta/server';

const graphEndpoint: GraphEndpoint = {
  clientName: 'myService',
  endpoint: 'my-entity',
};

@Injectable({ providedIn: 'root' })
export class MyEntityService extends taBaseService {
  // HandleSimpleRequest : un seul état (pas de clé)
  public entities = new HandleSimpleRequest<MyEntity[]>();

  // HandleComplexRequest : état par clé (ex: par ID)
  public entity = new HandleComplexRequest<MyEntity | null>();

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint });
  }

  public fetchEntities$() {
    return this.entities.fetch(
      this._graphService
        .fetchPagedQueryList<MyEntity>(GET_ENTITIES('', `id name status`), 'myEntities', graphEndpoint.clientName)
        .pipe(
          filter(isNonNullable),
          map(data => data.items)
        )
    );
  }

  public fetchEntity$(id: string) {
    return this.entity.fetch(
      id,
      this._graphService
        .fetchPagedQueryList<MyEntity>(
          GET_ENTITIES(`where: { id: { eq: "${id}" } }`, `id name status description`),
          'myEntities',
          graphEndpoint.clientName
        )
        .pipe(
          filter(isNonNullable),
          map(data => data.items?.[0] ?? null)
        )
    );
  }

  public create$(payload: MyCreationPayloadInput) {
    return this._graphService.mutate<MyEntity>(
      CREATE_ENTITY(payload),
      'createMyEntity',
      graphEndpoint.clientName,
      ['myEntities'] // cache keys à invalider
    );
  }

  public update$(payload: Partial<MyModifierPayloadInput>) {
    return this._graphService
      .mutate<MyEntity>(UPDATE_ENTITY(payload), 'updateMyEntity', graphEndpoint.clientName, ['myEntities'])
      .pipe(mergeMap(() => this.fetchEntity$(payload.id ?? '')));
  }
}
```

### Enrichissement des données (pattern enrichWith)

```typescript
// Enrichir des entités avec des données d'un autre service
private _enrichWithUsers(entities: { items?: MyEntity[] }) {
  return enrichWith<MyEntity>(
    entities,
    item => item.userId,          // extraire l'ID à résoudre
    ids => this._usersService.fetchUsersByIds$(ids), // charger en batch
    'user'                        // clé à ajouter sur l'entité
  );
}

// Chaîner plusieurs enrichissements
return this._graphService.fetchPagedQueryList<MyEntity>(/* ... */).pipe(
  filter(isNonNullable),
  mergeMap(entities => this._enrichWithUsers(entities)),
  mergeMap(entities => this._enrichWithContacts(entities)),
  map(data => data.items)
);
```

---

## 8. LOADING / ERROR / EMPTY — GESTION DES ÉTATS

### Principe : `RequestState` + composants `ta-loader` / `ta-error` / `ta-empty`

`RequestState` est disponible sur tous les composants via `this.requestState` (hérité de `taAbstractComponent`).

### Cycle de vie d'une requête

```typescript
private _fetch() {
  this.requestState.asked();         // démarre le spinner, reset l'erreur
  this._myService.fetchData$().subscribe({
    complete: () => this.requestState.completed(),    // arrête le spinner
    error: (err: HttpErrorResponse) =>
      this.requestState.onError(err.status, err.statusText), // affiche l'erreur
  });
}
```

Méthodes disponibles sur `requestState` :

- `asked()` — démarre le chargement
- `completed()` — termine le chargement (succès)
- `onError(status, message)` — termine avec une erreur
- `clean()` — remet à zéro (utile avant un refresh)
- `isLoading()` — retourne `boolean` (signal)
- `getErrorMessage()` — retourne le message d'erreur
- `getErrorStatus()` — retourne le code HTTP

### Template standard d'imbrication

```html
<ta-loader [isLoading]="this.requestState.isLoading()">
  <ta-error [message]="this.requestState.getErrorMessage()" [code]="this.requestState.getErrorStatus()">
    <ta-empty [isEmpty]="((this.items$ | async)?.length || 0) === 0">
      <!-- Contenu principal (liste, grille, carte...) -->
      @for (item of this.items$ | async; track item.id) {
      <app-item-card [item]="item"></app-item-card>
      }
    </ta-empty>
  </ta-error>
</ta-loader>
```

### `ta-loader` — état de chargement

```html
<!-- Spinner simple -->
<ta-loader [isLoading]="this.requestState.isLoading()">
  <!-- le contenu n'est rendu que quand isLoading = false -->
</ta-loader>

<!-- Avec skeleton placeholder -->
<ta-loader [isLoading]="this.requestState.isLoading()" [skeleton]="'list'"> </ta-loader>
```

### `ta-error` — état d'erreur

```html
<!-- Affiche un message d'erreur si message !== '' -->
<ta-error [message]="this.requestState.getErrorMessage()" [code]="this.requestState.getErrorStatus()">
  <!-- contenu normal si pas d'erreur -->
</ta-error>
```

### `ta-empty` — état vide

```html
<!-- Light (par défaut) — icône minimaliste -->
<ta-empty [isEmpty]="!list || list.length === 0">
  <!-- contenu si non vide -->
</ta-empty>

<!-- Heavy — grande illustration + message personnalisé -->
<ta-empty
  [isEmpty]="!list || list.length === 0"
  icon="ghost"
  iconSize="xl"
  [isLight]="false"
  text="my-feature.empty.message"
>
  <!-- contenu si non vide -->
</ta-empty>

<!-- Sans message -->
<ta-empty [isEmpty]="condition" [showMessage]="false"> </ta-empty>
```

Inputs de `ta-empty` :

- `isEmpty: boolean` — contrôle l'affichage (obligatoire)
- `isLight: boolean` — `true` = icône simple, `false` = grande illustration (default: `true`)
- `showMessage: boolean` — afficher le texte ou non (default: `true`)
- `text: string` — clé de traduction du message (default: `'container.empty.light-message'`)
- `type: MessageLevel` — niveau du message : `'info'`, `'warning'`, `'danger'` (default: `'info'`)
- `icon: taIconType | string` — icône (default: `'ghost'`)
- `iconSize: taSizes | 'xl'` — taille de l'icône (default: `'lg'`)

### Exemple complet : liste de cards avec refresh

```typescript
// list.component.ts
@Component({
  standalone: true,
  imports: [AsyncPipe, taContainerModule /* ... */],
  templateUrl: './list.component.html',
})
export class ListComponent extends BaseComponent implements OnInit {
  refresh$ = input.required<Subject<void>>();

  private readonly _myService = inject(MyService);
  public items$ = this._myService.items.get$();

  constructor() {
    super();
    this._fetch();
  }

  ngOnInit() {
    // Recharger quand le parent émet un refresh
    this._registerSubscription(this.refresh$().subscribe({ next: () => this._fetch() }));
  }

  private _fetch() {
    this.requestState.asked();
    this._myService.fetchItems$().subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => this.requestState.onError(error.status, error.statusText),
    });
  }
}
```

```html
<!-- list.component.html -->
<ta-loader [isLoading]="this.requestState.isLoading()">
  <ta-error [message]="this.requestState.getErrorMessage()" [code]="this.requestState.getErrorStatus()">
    <ta-empty [isEmpty]="((this.items$ | async)?.length || 0) === 0">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        @for (item of this.items$ | async; track item.id) {
        <app-item-card [item]="item"></app-item-card>
        }
      </div>
    </ta-empty>
  </ta-error>
</ta-loader>
```

### Imports nécessaires

```typescript
import { taContainerModule } from '@ta/ui';

// taContainerModule exporte : ta-loader, ta-error, ta-empty
```

### Règles loading/error/empty

- **Toujours** encapsuler avec `ta-loader` > `ta-error` > (optionnel) `ta-empty` — dans cet ordre
- **Toujours** appeler `requestState.asked()` juste avant le subscribe, pas avant
- **Toujours** gérer `error:` dans le subscribe pour appeler `requestState.onError()`
- Utiliser `@let list = this.items$ | async;` pour éviter les doubles pipes `async` dans le template
- `ta-empty` n'est pas obligatoire pour les grilles AG Grid (elles gèrent leur propre état vide)
- Ne **pas** utiliser `ta-loader` si le composant n'a pas de requête asynchrone

---

## 9. SERVICES — PATTERNS DE DONNÉES

### `HandleSimpleRequest<T>` — une seule liste/entité

```typescript
// Dans le service
public items = new HandleSimpleRequest<MyEntity[]>();

public fetchItems$() {
  return this.items.fetch(
    this._graphService.fetchPagedQueryList<MyEntity>(GET_ITEMS(), 'items', graphEndpoint.clientName)
      .pipe(map(data => data.items ?? []))
  );
}
```

```typescript
// Dans le composant
public items$ = this._myService.items.get$();  // Observable<MyEntity[]>

// Valeur synchrone (après fetch)
const current = this._myService.items.get();   // MyEntity[] | null
```

### `HandleComplexRequest<T>` — plusieurs entités indexées par ID

```typescript
// Dans le service
public itemsByTeam = new HandleComplexRequest<MyEntity[]>();
public item = new HandleComplexRequest<MyEntity | null>();

public fetchItemsByTeam$(teamId: string) {
  return this.itemsByTeam.fetch(
    teamId,
    this._graphService.fetchPagedQueryList<MyEntity>(
      GET_ITEMS(`where: { team: { id: { eq: "${teamId}" } } }`),
      'items', graphEndpoint.clientName
    ).pipe(map(data => data.items ?? []))
  );
}
```

```typescript
// Dans le composant
public teamItems$ = this._myService.itemsByTeam.get$(teamId); // Observable<MyEntity[]>

// Valeur synchrone
const items = this._myService.itemsByTeam.get(teamId);         // MyEntity[] | null
```

Différences clés :
| | `HandleSimpleRequest<T>` | `HandleComplexRequest<T>` |
|---|---|---|
| Usage | Une liste unique | Plusieurs listes/entités par clé |
| `fetch()` | `fetch(observable$)` | `fetch(id, observable$)` |
| `get()` | `get()` → `T \| null` | `get(id)` → `T \| null` |
| `get$()` | `get$()` → `Observable<T>` | `get$(id)` → `Observable<T>` |
| Stockage | `BehaviorSubject<T \| null>` | `BehaviorSubject<{ [id]: T }>` |

## 10. CLASSES DE BASE

### AbstractComponent (base commune)

```typescript
// features/core/abstract/abstractComponent.ts
// Expose : _router, _route, _location (via taAbstractComponent de @ta/utils)
// Expose : _notificationService, _usersService
// Expose : trackById(), trackByKey(), track()
export abstract class AbstractComponent extends taAbstractComponent {
  protected _notificationService = inject(LAZY_SERVICE_TOKEN);
  protected _usersService = inject(taUsersService);

  public trackById(_: any, item: { id: number }) {
    return item.id;
  }
  public trackByKey(_: any, item: { key: string }) {
    return item.key;
  }
}
```

### Hiérarchie des classes de base

```
taAbstractComponent (@ta/utils)
  └── AbstractComponent (app)         ← accès _notificationService, _usersService
        ├── BaseComponent (app)       ← pour les composants simples
        ├── BaseDialog (app)          ← pour les modales
        └── BasePage (app)            ← pour les pages (+ _getPathParams, _getQueryParams)
              └── BaseListPage<T>     ← pour les pages liste+panel (create/active/close)
```

### Règles d'utilisation

- Composant simple → étend `BaseComponent`
- Page → étend `BasePage`
- Page avec liste + panneau latéral → étend `BaseListPage<MonType>`
- Modale MatDialog → étend `taBaseModal` (de `@ta/utils`)
- Toujours utiliser `this._registerSubscription()` pour les subscriptions (auto-unsubscribe)
- `requestState.asked()` / `requestState.completed()` pour gérer l'état de chargement

---

## 11. NOTIFICATIONS UTILISATEUR

```typescript
// Depuis n'importe quel composant (AbstractComponent expose _notificationService)
import { ENotificationCode } from '@ta/notification';

// Succès
this._notificationService.addNotification('notification.common.success', ENotificationCode.success);

// Erreur
this._notificationService.addNotification('notification.common.error', ENotificationCode.error);

// Info
this._notificationService.addNotification('my.info.key', ENotificationCode.info);
```

---

## 12. CHECKLIST DE REVUE DE CODE

- [ ] Clés d'objets triées alphabétiquement (`sort-keys` ESLint)
- [ ] Imports dans l'ordre : Angular → RxJS → tiers → @ta → src → relative
- [ ] Pas d'imports inutilisés
- [ ] `loadComponent` avec lazy import sur toutes les routes
- [ ] Guards (`AuthGuard`, `FeatureGuard`) sur toutes les routes protégées
- [ ] `taRoutes.addRoute()` + enum pour chaque feature de routing
- [ ] Service de formulaire dédié (pas de `new InputXxx()` dans le composant)
- [ ] Enum pour les clés de champs de formulaire
- [ ] `label` = clé de traduction (jamais de texte direct)
- [ ] `this._registerSubscription()` sur toutes les subscriptions
- [ ] `requestState.asked()` / `requestState.completed()` pour les états de chargement
- [ ] `requestState.onError(status, message)` dans le callback `error:` du subscribe
- [ ] Template encapsulé avec `ta-loader` > `ta-error` > `ta-empty` (dans cet ordre)
- [ ] `taContainerModule` importé si `ta-loader`, `ta-error` ou `ta-empty` utilisés
- [ ] `HandleSimpleRequest` vs `HandleComplexRequest` : utiliser la bonne selon le besoin
- [ ] `standalone: true` sur tous les nouveaux composants
- [ ] `selector: ''` sur les pages (pas de sélecteur HTML pour les routes)
- [ ] `this.` devant toutes les variables/méthodes dans les templates HTML
- [ ] Ordre des membres : signal inputs/outputs / `@ViewChild` → publics → readonly → getters → services privés → constructor → lifecycle → méthodes publiques → méthodes privées
- [ ] Suffixe de classe : `Page` pour les routes, `Component` pour les réutilisables, `Modal` pour les dialogues
- [ ] Propriétés/méthodes privées préfixées par `_`
- [ ] Services injectés : `private readonly`
