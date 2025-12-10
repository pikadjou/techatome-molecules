# Guidelines de Développement - Bailo Front

## Table des Matières

### 1. [Variables SCSS](#1-variables-scss)

- [Organisation](#organisation)
- [Convention de nommage](#convention-de-nommage)
- [Import et utilisation correcte](#import-et-utilisation-correcte)
- [Fonctions SCSS disponibles](#fonctions-scss-disponibles)
- [Mixins disponibles](#mixins-disponibles)
- [Classes utilitaires disponibles](#classes-utilitaires-disponibles)
- [Exemple d'utilisation complète](#exemple-dutilisation-complète)

### 2. [Structure des Composants](#2-structure-des-composants)

- [Hiérarchie d'héritage](#hiérarchie-dhéritage)
- [Structure type](#structure-type)
- [Conventions de nommage](#conventions-de-nommage)

### 3. [Système de Formulaires](#3-système-de-formulaires)

- [Types de champs disponibles](#types-de-champs-disponibles)
  - [Champs de texte](#champs-de-texte)
  - [Champs de sélection](#champs-de-sélection)
  - [Champs booléens](#champs-booléens)
  - [Champs de date/heure](#champs-de-dateheure)
  - [Champs avancés](#champs-avancés)
  - [Champs de layout et groupement](#champs-de-layout-et-groupement)
  - [Champs dynamiques et conditionnels](#champs-dynamiques-et-conditionnels)
- [Configuration du composant de formulaire](#configuration-du-composant-de-formulaire)
- [Propriétés communes des champs](#propriétés-communes-des-champs)
- [Validation et gestion d'erreurs](#validation-et-gestion-derreurs)
- [Gestion des événements](#gestion-des-événements)

### 4. [Menus et Navigation](#4-menus-et-navigation)

- [Service de menu](#service-de-menu)
- [Composant de menu](#composant-de-menu)
- [Template de menu](#template-de-menu)
- [Navigation et événements](#navigation-et-événements)
- [Handlers de navigation](#handlers-de-navigation)

### 5. [Services](#5-services)

- [Service de base](#service-de-base)
- [Service avec état](#service-avec-état)

### 6. [Gestion d'État](#6-gestion-détat)

- [RequestState](#requeststate)
- [Signals](#signals)

### 7. [Templates et Observables](#7-templates-et-observables)

- [Utilisation de `this.` dans les templates](#utilisation-de-this-dans-les-templates)
- [Nouvelles syntaxes Angular](#nouvelles-syntaxes-angular)
- [Observables avec Signals](#observables-avec-signals)
- [HandleSimpleRequest et HandleComplexRequest](#handlesimplerequest-et-handlecomplexrequest)

### 8. [Organisation des Modules](#8-organisation-des-modules)

- [Structure Molecule-UI](#structure-molecule-ui)
- [Import des modules](#import-des-modules)

### 9. [Bonnes Pratiques](#9-bonnes-pratiques)

- [Composants](#composants)
- [Services](#services-1)
- [Styles](#styles)
- [Traductions](#traductions)

### 10. [Exemples Pratiques](#10-exemples-pratiques)

- [Composant complet](#composant-complet)
- [Template complet](#template-complet)

---

## 1. Variables SCSS

### Organisation

- **Fichier principal** : `sass/_vars.scss`
- **Design system** : `molecule-ui/projects/styles/src/style/ta/_vars.scss`
- **Partner-specific** : `molecule-ui/partners/[partner]/sass/_vars.scss`

### Convention de nommage

```scss
// Couleurs avec échelle numérique
$brand: (
  50: #e2f5fd,
  100: #b6e4fa,
  200: #87d2f6,
  900: #003366,
);

// Couleurs sémantiques
$semantic: (
  red: #e74c3c,
  green: #15ce1e,
);

// Système d'espacement (grille 8px)
$space: (
  xs: 4px,
  // 0.5x
  sm: 8px,
  // 1x
  md: 16px,
  // 2x
  lg: 24px,
  // 3x
  xl: 32px,
  // 4x
  xxl: 48px // 6x,
);
```

### Import et utilisation correcte

```scss
@use "@ta/styles/utils/mixins/common";
@use "@ta/styles/utils/mixins/flex";
@use "@ta/styles/utils/mixins/fonts";

.my-component {
  color: common.get-var(brand, 500);
  background: common.get-var(surface, primary);
  padding: common.get-var(space, md);
}
```

### Fonctions SCSS disponibles

#### Variables avec `common.get-var()`

```scss
// Couleurs
common.get-var(brand, 600)           // --ta-brand-600
common.get-var(text, primary)        // --ta-text-primary
common.get-var(surface, secondary)   // --ta-surface-secondary
common.get-var(border, brand)        // --ta-border-brand

// Espacement
common.get-var(space, xs)            // 4px
common.get-var(space, sm)            // 8px
common.get-var(space, md)            // 16px
common.get-var(space, lg)            // 24px
common.get-var(space, xl)            // 32px
common.get-var(space, xxl)           // 48px

// Typographie
common.get-var(font, family)
common.get-var(font, h1, default, size)
common.get-var(font, body, md, default, size)
```

### Mixins disponibles

#### Flexbox

```scss
@include flex.flex-row(); // display: flex; flex-direction: row;
@include flex.flex-column(); // display: flex; flex-direction: column;
@include flex.space-between(); // display: flex; justify-content: space-between;
@include flex.align-center(); // display: flex; align-items: center;
@include flex.justify-center(); // display: flex; justify-content: center;
@include flex.full-width(); // flex: 1; width: 100%;
```

#### Typographie

```scss
@include fonts.fontSizeHeader(h1); // Styles H1
@include fonts.fontSizeBody(md); // Body medium
@include fonts.fontSizeBody(md, true); // Body medium bold
@include fonts.fontSizeKey(lg); // Key text large
```

#### Espacement calculé

```scss
padding: spaces.spaceBase(2); // calc(common.get-var(space, base) * 2)
```

#### Media queries

```scss
@use "@ta/styles/utils/mixins/mediaQueriesRanges" as mq;

@include mq.from(768px) {
  // Styles pour écrans >= 768px
}

@include mq.between(576px, 992px) {
  // Styles pour écrans entre 576px et 991px
}
```

#### Device context

```scss
@use "@ta/styles/utils/mixins/mobile";

@include mobile.mobileDevice() {
  // Styles mobile uniquement
}

@include mobile.desktopDevice() {
  // Styles desktop uniquement
}
```

### Classes utilitaires disponibles

#### Layout Flexbox

```html
<div class="flex-row">
  <!-- flex-direction: row -->
  <div class="flex-column">
    <!-- flex-direction: column -->
    <div class="space-between">
      <!-- justify-content: space-between -->
      <div class="space-around">
        <!-- justify-content: space-around -->
        <div class="justify-center">
          <!-- justify-content: center -->
          <div class="align-center">
            <!-- align-items: center -->
            <div class="full-width">
              <!-- width: 100% -->
              <div class="flex-full"><!-- flex: 1 1 100% --></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Espacement (xs, sm, md, lg, xl, xxl, xxxl)

```html
<!-- Padding -->
<div class="p-space-md">
  <!-- padding: var(--ta-space-md) -->
  <div class="px-space-lg">
    <!-- padding-left & right -->
    <div class="py-space-sm">
      <!-- padding-top & bottom -->
      <div class="pt-space-xl">
        <!-- padding-top -->
        <div class="pb-space-xs">
          <!-- padding-bottom -->

          <!-- Margin -->
          <div class="m-space-md">
            <!-- margin: var(--ta-space-md) -->
            <div class="mx-space-lg">
              <!-- margin-left & right -->
              <div class="my-space-sm">
                <!-- margin-top & bottom -->
                <div class="mt-space-xl">
                  <!-- margin-top -->

                  <!-- Gap (flex/grid) -->
                  <div class="g-space-md">
                    <!-- gap: var(--ta-space-md) -->

                    <!-- Auto margins -->
                    <div class="m-a">
                      <!-- margin: auto -->
                      <div class="mx-a">
                        <!-- margin-left & right: auto -->

                        <!-- Border radius -->
                        <div class="bdr-radius-rounded">
                          <!-- border-radius: var(--ta-radius-rounded) -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Exemple d'utilisation complète

```scss
@use "@ta/styles/utils/mixins/common";
@use "@ta/styles/utils/mixins/flex";
@use "@ta/styles/utils/mixins/fonts";

.card {
  background: common.get-var(surface, primary);
  border: 1px solid common.get-var(border, secondary);
  padding: common.get-var(space, md);
  border-radius: common.get-var(radius, rounded);

  @include flex.flex-column();

  .title {
    @include fonts.fontSizeHeader(h3);
    color: common.get-var(text, primary);
    margin-bottom: common.get-var(space, sm);
  }

  .content {
    @include fonts.fontSizeBody(md);
    color: common.get-var(text, secondary);
  }
}
```

## 2. Structure des Composants

### Hiérarchie d'héritage

```
TaAbstractComponent (molecule-ui/utils)
└── AbstractComponent (src/app/features/core/abstract)
    ├── BaseComponent
    ├── BasePage
    └── TaBaseModal
```

### Structure type

```typescript
@Component({
  selector: "app-example",
  imports: [FormsModule, CommonModule],
  templateUrl: "./example.html",
  styleUrl: "./example.scss",
  standalone: true,
})
export class ExampleComponent extends BaseComponent {
  // Services injectés en privé
  private _service = inject(ServiceName);

  // Propriétés publiques avec signals
  public data = signal<Type[]>([]);
  public loading = this.requestState.isLoading;

  constructor() {
    super();
    this._registerSubscription(/* subscription */);
    this._fetch();
  }

  // Handlers publics
  public onAction(data: Type) {}

  // Méthodes privées
  private _fetch() {}
}
```

### Conventions de nommage

- **Selecteur** : `app-feature-name`
- **Services privés** : `_serviceName`
- **Méthodes privées** : `_methodName()`
- **Propriétés publiques** : `public propertyName`

## 3. Système de Formulaires

### Types de champs disponibles

#### Champs de texte

```typescript
// Texte simple
new InputTextBox({
  key: 'firstname',
  label: 'Prénom',
  type: 'text', // 'text', 'password', 'email', 'number', 'tel', 'url'
  icon: CamIconType, // Icône optionnelle
  iconClicked: () => void, // Handler du clic sur l'icône
  validators: [Validators.required],
  value: 'valeur par défaut',
  disabled: false,
  class: 'col-12',
  visible$: of(true)
})

// Zone de texte
new InputTextarea({
  key: 'description',
  label: 'Description',
  validators: [Validators.required]
})

// Email (avec validation automatique)
new InputEmail({
  key: 'email',
  label: 'Email',
  validators: [Validators.required, Validators.email]
})

// Téléphone (avec formatage)
new InputPhone({
  key: 'phone',
  label: 'Téléphone'
})
```

#### Champs de sélection

```typescript
// Dropdown simple
new InputDropdown({
  key: "category",
  label: "Catégorie",
  options: of([
    { id: "1", name: "Option 1", disabled: false },
    { id: "2", name: "Option 2", disabled: true },
  ]),
  multiple: false,
  showNothingOption: false,
  withSearch: false,
  width: "100%",
  valueChanged: (data) => console.log(data),
});

// Dropdown avancé avec templates
new InputChoices({
  key: "users",
  label: "Sélectionner utilisateurs",
  options: of([
    { id: "1", name: "John Doe", data: { email: "john@example.com" } },
  ]),
  multiple: true,
  withSearch: true,
  advancedSearch$: (search) => this.searchUsers(search),
  choiceTemplate: {
    one: templateRef, // Template pour l'élément sélectionné
    list: templateRef, // Template pour les éléments de la liste
  },
});

// Radio buttons
new InputRadio({
  key: "status",
  label: "Statut",
  options: of([
    { id: true, icon: "check" },
    { id: false, icon: "close" },
  ]),
});
```

#### Champs booléens

```typescript
// Checkbox
new InputCheckBox({
  key: "agree",
  label: "J'accepte les conditions",
  value: false,
  toggle: false, // true pour un switch toggle
  validators: [Validators.required],
});
```

#### Champs de date/heure

```typescript
// Sélecteur de date
new InputDatePicker({
  key: "deadline",
  label: "Date limite",
  minDate: "today", // Date object ou 'today'
  maxDate: new Date("2025-12-31"),
  rangeEnabled: false, // true pour sélection de plage
  value: new Date(),
});

// Sélecteur d'heure
new InputTimePicker({
  key: "meetingTime",
  label: "Heure de réunion",
});
```

#### Champs avancés

```typescript
// Slider
new InputSlider({
  key: "rating",
  label: "Note",
  min: 0,
  max: 100,
  step: 1,
  value: 50,
});

// Sélecteur de couleur
new InputColorPicker({
  key: "brandColor",
  label: "Couleur de marque",
});

// Upload de fichiers
new InputUpload({
  key: "documents",
  label: "Télécharger fichiers",
  confirmButton: true,
  value: [{ id: "1", url: "/path/to/file.pdf", name: "document.pdf" }],
});

// Upload d'images
new InputImages({
  key: "photos",
  label: "Photos",
  files$: this.getFiles(),
  update: (files) => this.uploadFiles(files),
  onFileDeleted: (file) => this.deleteFile(file),
});

// Éditeur riche
new InputWysiswyg({
  key: "content",
  label: "Contenu riche",
});

// Adresse avec autocomplétion
new InputAddress({
  key: "address",
  label: "Adresse",
});
```

#### Champs de layout et groupement

```typescript
// Panel pour grouper des champs
new InputPanel({
  key: "personal-info",
  label: "Informations personnelles",
  containerClass: ["with-separator", "highlight-title"], // Classes CSS pour le container
  contentClass: "flex-column g-space-md", // Classes CSS pour le contenu
  children: [
    new InputTextBox({ key: "firstname", label: "Prénom" }),
    new InputTextBox({ key: "lastname", label: "Nom" }),
  ],
});

// Classes de container disponibles :
// 'with-separator' : Ajoute un séparateur visuel
// 'no-title-space' : Supprime l'espacement du titre
// 'highlight-title' : Met en évidence le titre

// Label statique
new InputLabel({
  key: "section-title",
  label: "Titre de section",
});
```

#### Champs dynamiques et conditionnels

```typescript
// Champ dynamique (liste d'éléments)
new InputDynamic({
  key: "dynamic-list",
  label: "Liste dynamique",
  template: [
    {
      type: "InputTextBox",
      options: {
        key: "name",
        label: "Nom",
        validators: [Validators.required],
      },
    },
    {
      type: "InputTextarea",
      options: {
        key: "description",
        label: "Description",
      },
    },
  ],
  inputsGroup: {
    item1: [
      /* inputs pré-remplis */
    ],
  },
});
// Méthodes : add(key?), remove(id)

// Champ multilingue
new InputTranslation({
  key: "multilingual-content",
  label: "Contenu",
  mainCulture: Culture.FR_FR,
  template: [
    {
      type: "InputTextBox",
      options: { key: "title", label: "Titre" },
    },
  ],
  value: {
    FR_FR: { title: "Titre français" },
    EN_EN: { title: "English title" },
  },
});

// Champ conditionnel (change de type selon observable)
new InputSwitch({
  key: "conditional-field",
  label: "Champ dynamique",
  match: this.fieldType$.pipe(
    map((type) => ({
      type: type, // 'textbox', 'checkbox', 'number', 'datePicker', 'dropdown'
      prop: type === "dropdown" ? dropdownConfig : {},
    }))
  ),
});

// Composant personnalisé
new InputComponent({
  key: "custom-component",
  label: "Composant personnalisé",
});
```

### Configuration du composant de formulaire

#### Propriétés principales

```typescript
<ta-form
  [inputs]="this.formInputs"
  [askValidation$]="this.validateForm$"
  [askOnDestroy]="true"
  [loader]="this.isLoading()"
  [error]="this.formError"
  [border]="true"
  [canDisplayButton]="true"
  [buttonTitle]="'form.save'"
  [onLive]="false"
  (valid)="this.onFormSubmit($event)"
  (isFormValid)="this.onFormValidation($event)">
</ta-form>
```

**Propriétés** :

- `inputs` : Array des composants InputBase
- `askValidation$` : Observable pour déclencher la validation
- `askOnDestroy` : Auto-sauvegarde à la destruction
- `loader` : Indicateur de chargement
- `error` : Objet d'erreur `{status: ENotificationCode, message: string}`
- `border` : Afficher bordure du formulaire
- `canDisplayButton` : Afficher bouton de soumission
- `buttonTitle` : Texte du bouton de soumission
- `onLive` : Auto-sauvegarde à chaque changement

**Événements** :

- `valid` : Émis lors de la validation réussie avec les données
- `isFormValid` : Émis quand l'état de validation change

#### Mode standalone

```typescript
<ta-input-textbox
  [input]="this.textboxInput"
  [standalone]="true"
  [onFocus]="this.focusSubject$"
  (valueChanged)="this.onValueChanged($event)">
</ta-input-textbox>
```

**Propriétés** :

- `standalone` : Mode standalone (crée son propre FormControl)
- `onFocus` : Observable pour déclencher le focus
- `valueChanged` : Événement de changement de valeur

### Propriétés communes des champs

#### Interface InputBase

```typescript
interface IInputBase<T> {
  value$?: Observable<T>; // Source de valeur observable
  value?: T; // Valeur initiale/courante
  key?: string; // Identifiant unique
  label?: string; // Label d'affichage
  type?: string; // Type d'input
  message?: string; // Texte d'aide
  controlType?: string; // Identifiant du type de composant
  validators?: ValidatorFn[]; // Validateurs Angular
  class?: string; // Classes CSS (défaut: 'col-12')
  children?: (InputBase<any> | InputLabel)[]; // Composants enfants
  disabled?: boolean; // État désactivé
  visible$?: Observable<boolean>; // Contrôle de visibilité
  bindStatusToVisible?: boolean; // Auto-désactiver quand masqué
}
```

#### Propriétés avancées

- **Valeurs dynamiques** : Utiliser `value$` Observable pour les mises à jour réactives
- **Visibilité conditionnelle** : Utiliser `visible$` Observable pour afficher/masquer
- **Auto-désactivation** : `bindStatusToVisible: false` empêche la désactivation automatique
- **Layout CSS** : `class` pour les classes de grille responsive
- **Validation** : Array de validateurs Angular standard
- **Événements** : S'abonner à `changeValue$` Subject pour les changements

### Validation et gestion d'erreurs

#### Validateurs intégrés

```typescript
import { Validators } from "@angular/forms";
import { phoneValidator, slugValidator } from "@ta/form-model";

new InputTextBox({
  key: "email",
  label: "Email",
  validators: [
    Validators.required,
    Validators.email,
    Validators.minLength(5),
    Validators.maxLength(100),
    phoneValidator(),
  ],
});
```

#### Validateurs personnalisés

```typescript
export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    const isValid = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
    return isValid ? null : { validatePhoneNumber: true };
  };
}
```

### Gestion des événements

#### Événements au niveau formulaire

```typescript
public onFormValid(formData: any) {
  console.log('Formulaire soumis:', formData);
}

public onFormValidationChange(isValid: boolean) {
  this.canSubmit = isValid;
}
```

#### Événements au niveau champ

```typescript
// Souscription aux changements de valeur
input.changeValue$.subscribe((newValue) => {
  console.log("Valeur changée:", newValue);
});

// Définition manuelle de valeur
input.value = newValue; // Déclenche la mise à jour du FormControl

// Activation/désactivation
input.disable();
input.enable();
```

### Service de formulaire

```typescript
@Injectable({ providedIn: "root" })
export class ExampleFormService {
  public getForm(data?: Type) {
    return [
      new InputPanel({
        key: "panel",
        label: "form.panel.label",
        containerClass: ["highlight-title"],
        contentClass: "flex-column g-space-md",
        children: [
          new InputTextBox({
            key: EFormFields.name,
            label: "form.name.label",
            validators: [Validators.required],
            value: data?.name,
          }),
        ],
      }),
    ];
  }

  public formatForm(data: any): Partial<Type> {
    return {
      name: data[EFormFields.name],
    };
  }
}
```

### Enum des champs

```typescript
export enum EFormFields {
  name = "name",
  email = "email",
}
```

### Composant utilisant le formulaire

```typescript
export class MyProfile extends BaseComponent {
  private _userService = inject(UserService);
  private _formService = inject(AppUserFormService);

  public form = signal<InputBase<unknown>[]>([]);
  public user$ = signal(this._userService.userDetail.get$());

  constructor() {
    super();
    this._registerSubscription(
      this._userService.userDetail.get$().subscribe({
        next: (user) => {
          this.form.set(this._formService.getBasicForm(user));
        },
      })
    );
    this._fetch();
  }

  public onSave(data: unknown) {
    const user = this._formService.formatBasicForm(data);
    this._userService.updateDetails$(user).subscribe();
  }

  private _fetch() {
    this._userService.fetchDetails$().subscribe();
  }
}
```

### Template du formulaire

```html
@let user = this.user$() | async;

<ta-loader [isLoading]="this.requestState.isLoading()">
  <ta-form
    class="form"
    [inputs]="this.form()"
    [onLive]="true"
    (valid)="this.onSave($event)"
  >
  </ta-form>
</ta-loader>
```

### Formulaire avancé avec validation

```html
<form (ngSubmit)="this.onSubmit()" [formGroup]="this.form">
  @for (input of this.inputs; track trackByKey($index, input)) {
  <div>
    @if (input.visible$ | async) {
    <ta-inputs [input]="input"></ta-inputs>
    }
  </div>
  }
  <ta-notification-inline
    [message]="this.error.message"
    [code]="this.error.status"
  >
    <ta-button
      (action)="this.onSubmit()"
      [state]="!this.isValid() ? 'disabled' : 'classic'"
      icon="check-line"
    >
      {{ this.buttonTitle | translate }}
    </ta-button>
  </ta-notification-inline>
</form>
```

### Champs dynamiques

```typescript
export class RoleSelectionComponent extends BaseComponent {
  public isTenantActive = signal(false);
  public isOwnerActive = signal(false);

  public onTenantToggle(isActive: boolean) {
    this.isTenantActive.set(isActive);
    if (isActive) {
      this._userService.createTenantLink$().subscribe({
        complete: () => this._emitRoleChange(),
      });
    } else {
      this._userService.deleteTenantLink$().subscribe({
        complete: () => this._emitRoleChange(),
      });
    }
  }

  private _emitRoleChange() {
    this.roleChange.emit();
  }
}
```

## 4. Menus et Navigation

### Service de menu

```typescript
@Injectable({ providedIn: "root" })
export class MenuService {
  public getMainMenu() {
    const menu = [
      new MenuBase({
        key: "dashboard",
        label: "menu.main.dashboard",
        link: "/",
        order: 1,
        exact: true,
      }),
    ];

    return new Menu({
      elements: menu.sort((a, b) => a.order - b.order),
      direction: "horizontal",
    });
  }
}
```

### Composant de menu

```typescript
export class MainMenuComponent extends BaseComponent {
  public menu = signal<Menu | null>(null);
  @ViewChild("accountTemplate") accountTemplate!: TemplateRef<any>;

  private _menuService = inject(AppMenuService);

  ngOnInit() {
    this.menu.set(this._menuService.getMainMenu());
  }
}
```

### Template de menu

```html
@let menu = this.menu(); @if (menu) {
<ta-main-menu
  class="menu"
  [menuMain]="menu"
  [userMenuTemplate]="accountTemplate"
>
</ta-main-menu>
}

<ng-template #accountTemplate>
  <app-my-account></app-my-account>
</ng-template>
```

### Navigation et événements

```html
<!-- Menu items avec navigation -->
<ul class="menu" [ngClass]="this.containerCss">
  @for (item of this.menu.elements; track this.trackByKey($index, item)) { @if
  ((item.visible$ | async) === true) {
  <li>
    <ta-menu-item
      [item]="item"
      [class]="item.key"
      [styleType]="this.menu.direction"
    >
    </ta-menu-item>
  </li>
  } }
</ul>
```

### Handlers de navigation

```typescript
public goToLogin() {
  this._router.navigateByUrl(TaRoutes.getAbsoluteUrl([TaMainRoute.USERLOGIN]));
}

public onMenuAction(action: string) {
  // Logique de navigation ou d'action
}
```

````

## 5. Services

### Service de base
```typescript
@Injectable({ providedIn: 'root' })
export abstract class BaseService implements OnDestroy {
  protected _subscriptionList: Subscription[] = [];
  protected _serverService = inject(ServerService);
  protected _graphService = inject(GraphService);

  ngOnDestroy() {
    this._subscriptionList.forEach(sub => sub.unsubscribe());
  }

  protected _registerSubscription(subscription: Subscription) {
    this._subscriptionList.push(subscription);
  }
}
````

### Service avec état

```typescript
export class DataService extends BaseService {
  public dataRequest = new HandleSimpleRequest<Type>();

  public fetch$() {
    return this.dataRequest.fetch(
      this._graphService.fetchQuery<Type>(QUERY).pipe(filter(isNonNullable))
    );
  }
}
```

## 6. Gestion d'État

### RequestState

```typescript
// Propriété dans le composant
public requestState = new RequestState();

// Utilisation
this.requestState.asked();
// ... requête
this.requestState.completed();
// ou en cas d'erreur
this.requestState.onError(500, 'Error message');
```

### Signals

```typescript
// Déclaration
public data = signal<Type[]>([]);
public computed = computed(() => this.data().length);

// Mise à jour
this.data.set(newValue);
this.data.update(current => [...current, newItem]);
```

## 7. Templates et Observables

### Utilisation de `this.` dans les templates

**OBLIGATOIRE avec `this.` :**

- Propriétés du composant : `this.menu()`, `this.form()`, `this.user$()`
- Méthodes : `this.onSave($event)`, `this.goToLogin()`
- États : `this.requestState.isLoading()`, `this.appVersion`
- Observables : `this.userProfile$ | async`

**SANS `this.` :**

- Variables locales : Après `@let user = ...`, utiliser juste `user`
- Variables de boucle : `@for (item of items; track item.id)`
- Références de template : `#template`

### Nouvelles syntaxes Angular

```html
<!-- Variables locales -->
@let user = this.user$() | async; @let menu = this.menu(); @let categories =
this.categories$() | async;

<!-- Conditions -->
@if (user) {
<div>Bienvenue {{ user.name }}</div>
} @else {
<div>Veuillez vous connecter</div>
}

<!-- Boucles -->
@for (item of this.items(); track item.id) {
<div>{{ item.name }}</div>
}

<!-- Loader -->
<ta-loader [isLoading]="this.requestState.isLoading()">
  <content></content>
</ta-loader>
```

### Observables avec Signals

```html
<!-- Pattern recommandé avec @let -->
@let userProfile = this.userProfile$ | async; @if (userProfile) {
<div>{{ userProfile.name }}</div>
}

<!-- Direct async usage -->
@if (this.content$ | async; as content) {
<ta-loader [isLoading]="this.requestState.isLoading()">
  <div>{{ content.title }}</div>
</ta-loader>
}

<!-- Signal avec async -->
@let user = this.user$() | async;
```

### HandleSimpleRequest et HandleComplexRequest

#### HandleSimpleRequest (entité unique)

```typescript
// Dans le service
public userDetail = new HandleSimpleRequest<UserProfile>();

public fetchDetails$() {
  return this.userDetail.fetch(
    this._graphService
      .fetchQuery<UserProfile>(userInfo({ props: `...` }))
      .pipe(filter(isNonNullable))
  );
}

// Dans le composant
public user$ = signal(this._userService.userDetail.get$());
```

#### HandleComplexRequest (multiples entités par ID)

```typescript
// Dans le service
readonly saleContents = new HandleComplexRequest<Sale>();

public fetchSale$(id: string) {
  return this.saleContents.fetch(id,
    this._graphService.fetchQuery<Sale>(saleQuery(id))
  );
}

public getSale$(id: string) {
  return this.saleContents.get$(id);
}

// Dans le composant
public sale$ = this._saleService.getSale$(this.saleId);
```

## 8. Organisation des Modules

### Structure Molecule-UI

- `@ta/core` - Fonctionnalités de base
- `@ta/ui` - Composants UI (buttons, loaders)
- `@ta/form-*` - Système de formulaires
- `@ta/menu` - Navigation
- `@ta/notification` - Notifications
- `@ta/utils` - Utilitaires et classes abstraites
- `@ta/styles` - Design system et SCSS

### Import des modules

```typescript
// Dans standalone components
imports: [CommonModule, FormsModule, TaLoaderComponent, TaFormComponent];
```

## 9. Bonnes Pratiques

### Composants

- **Standalone uniquement** : `standalone: true`
- **Héritage** : Étendre BaseComponent/BasePage/TaBaseModal
- **Signals** : Utiliser pour l'état réactif
- **Injection** : Préférer `inject()` aux constructeurs

### Services

- **Injectable root** : `providedIn: 'root'`
- **Subscriptions** : Utiliser `_registerSubscription()`
- **GraphQL** : Centraliser les requêtes
- **Types** : Typer toutes les réponses

### Styles

- **Variables** : Utiliser les variables SCSS du design system
- **Classes** : Utiliser les classes utilitaires (`g-space-md`, `flex-column`)
- **Responsif** : Utiliser `breakpoints` du composant

### Traductions

- **Clés** : Format `feature.action.element` (`user.form.name.label`)
- **Pas de texte en dur** : Toujours utiliser les clés de traduction

## 10. Exemples Pratiques

### Composant complet

```typescript
@Component({
  selector: "app-user-profile",
  imports: [TaFormComponent, TaLoaderComponent],
  templateUrl: "./user-profile.html",
  styleUrl: "./user-profile.scss",
  standalone: true,
})
export class UserProfileComponent extends BaseComponent {
  private _userService = inject(UserService);
  private _formService = inject(UserFormService);

  public form = signal<InputBase<unknown>[]>([]);
  public user$ = this._userService.userDetail.get$();

  constructor() {
    super();
    this._fetch();
  }

  public onSave(data: unknown) {
    const formatted = this._formService.formatForm(data);
    this._registerSubscription(
      this._userService.update$(formatted).subscribe()
    );
  }

  private _fetch() {
    this._registerSubscription(
      this._userService.fetchDetails$().subscribe((user) => {
        this.form.set(this._formService.getForm(user));
      })
    );
  }
}
```

### Template complet

```html
@let user = this.user$ | async;

<ta-loader [isLoading]="requestState.isLoading()">
  @if (user) {
  <ta-form [inputs]="form()" [onLive]="true" (valid)="onSave($event)"></ta-form>
  } @else {
  <p>{{ 'user.not-found' | translate }}</p>
  }
</ta-loader>
```

Ces guidelines assurent la cohérence, la maintenabilité et la scalabilité du code.
