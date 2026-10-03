# Défauts relevés par la construction de la vitrine

Écrire une démonstration isolée pour chacun des 183 composants publics a forcé à les
monter un par un, hors de leur contexte d'application habituel. C'est ce que rien
d'autre ne fait dans ce dépôt, et cela a mis au jour les défauts ci-dessous.

**Aucun n'a été corrigé.** Tous sont antérieurs au travail sur la vitrine. Chacun a été
vérifié dans la source ou dans le navigateur, jamais supposé.

## À traiter en priorité

### Clé d'API Google Maps committée

`projects/core/src/lib/modules/maps/googleMapsLoader.service.ts:5` porte une clé
d'API Google Maps en dur, et le fichier est suivi par git — la clé est donc dans
l'historique. La retirer du fichier ne suffit pas.

**Ce qu'il faut faire** : révoquer la clé côté console Google, en émettre une nouvelle,
et la faire passer par `provideGoogleMaps()` plutôt que par le code source.

### `registerLocaleData` n'est appelé nulle part

L'application déclare `LOCALE_ID` mais n'enregistre aucune donnée de locale. Tout
`DatePipe` sensible à la locale lève donc `NG0701` et **blanchit la page qui le
contient**. Cela touche `ta-time-ago` et `ta-files-preview`, donc toute vue affichant
une date.

**Ce qu'il faut faire** : `registerLocaleData(localeFr)` au démarrage de l'application.
Les démos concernées le font localement, en attendant.

### `MyAccountComponent` lève à chaque montage

`my-account.component.html:33` écrit `@let disconnectionMenu = this.disconnectionMenu();`
— le nom du `@let` masque le signal de classe lu sur la même ligne. Angular 18.2 compile
en `ɵɵstoreLet(undefined(...))` au lieu de `ɵɵstoreLet(ctx.disconnectionMenu())` : les
deux formes sont visibles côte à côte dans `dist/ta/`. Le composant lève
`TypeError: undefined is not a function` inconditionnellement, et tue le rendu des
composants montés après lui.

**Ce qu'il faut faire** : renommer le `@let` — `@let menu = this.disconnectionMenu();`.

## `NgTemplateOutlet` oublié dans `imports` — cinq occurrences

Le template lie `[ngTemplateOutlet]`, mais la directive n'est pas importée. Angular émet
`NG0303` et la projection ne fonctionne jamais.

| Composant                             | Paquet     |
| ------------------------------------- | ---------- |
| `BottomSheetTemplateGenericComponent` | `@ta/menu` |
| `FilterDisplayerComponent`            | `@ta/core` |
| `SearchDisplayerComponent`            | `@ta/core` |
| `LayoutFlexComponent`                 | `@ta/ui`   |
| `TaExpansionPanelComponent`           | `@ta/ui`   |

Cinq occurrences dans trois paquets : ce n'est pas une série d'accidents. Une règle de
lint sur les directives utilisées mais non importées les attraperait toutes, et
empêcherait la suivante.

## `CUSTOM_ELEMENTS_SCHEMA` masque les imports manquants

`LayoutHeaderLogoComponent` déclare `schemas: [CUSTOM_ELEMENTS_SCHEMA]` et omet
`UserLogoComponent` et `LogoComponent` de ses `imports`. Le schéma fait taire l'erreur
d'élément inconnu : **l'avatar et le logo central ne rendent jamais, sans la moindre
erreur en console**, tandis que leurs gestionnaires de clic répondent encore en
écouteurs DOM natifs. Le composant paraît fonctionner.

C'est le défaut le plus insidieux de la liste, parce qu'en production un en-tête sans
logo passe pour un choix de design.

## Pièges de conception

### Les boutons bloquent les clics de leurs ancêtres, par défaut

`stopPropagationActivation` vaut `true` par défaut sur `ta-button` et ses variantes
(`button.component.ts:41`, `stop-propagation.directive.ts:8`). Tout bouton `@ta/ui`
placé dans une zone cliquable empêche donc silencieusement le `(click)` du parent.
Trois démonstrations ont été cassées par ce défaut avant qu'il ne soit compris.

### Visibilité basculée par un `effect()` écrivant une propriété simple

`NotificationInlineComponent` fait `this.showMessage = !!this.messageInput()` dans un
`effect()`. L'écriture d'une propriété non signal ne redéclenche aucune détection de
changements : sous `OnPush` statique, le composant reste **visuellement vide** alors que
ses données sont correctes. Le défaut contamine tout ce qui l'embarque, `ta-form` compris
pour son état d'erreur.

### `model` et `initialData` sur la grille

Passer les deux à `ta-grid` fait **silencieusement ignorer** `initialData`. Rien
n'avertit.

## Entrées et classes mortes

| Élément                                        | Emplacement                                                           | Problème                                                                                                                    |
| ---------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `border`                                       | `@ta/form-basic`                                                      | déclarée, lue nulle part                                                                                                    |
| `radius`                                       | `ta-pie-chart`                                                        | déclarée, lue nulle part                                                                                                    |
| `fontSize`                                     | `ta-department-professions`                                           | déclarée, lue nulle part                                                                                                    |
| `.icon-xs`                                     | `ta-material-icon`                                                    | `getTypeStyle()` renvoie cette classe, le SCSS ne définit que `.icon-xxs` — **et un test unitaire fige la coquille**        |
| variantes `outline`/`sharp`/`round`/`dualTone` | `ta-material-icon`                                                    | sélectionnent des classes distinctes, mais aucune police Material correspondante n'est importée : rendu identique au défaut |
| `lg` et `xl`                                   | `ta-local-icon`                                                       | mappés sur la même valeur de 120 px                                                                                         |
| `type="alert"`                                 | `ta-benefit-item`                                                     | aucune classe SCSS correspondante                                                                                           |
| `type="new"`                                   | `ta-wrapped-icon`                                                     | aucune classe SCSS correspondante                                                                                           |
| `h5`, `h6`                                     | `ta-title`                                                            | sans style                                                                                                                  |
| `[level]="'3'"`                                | `preview.component.html`                                              | une chaîne passée à un `@switch` attendant un nombre : le titre ne rend jamais                                              |
| `:host` absent                                 | `ta-excel-viewer`, `ta-pdf-viewer`, `ta-word-viewer`, `ta-files-edit` | retombent en `display: inline`, ignorent la hauteur du conteneur                                                            |
| `title.main`, `title.sub`, `phoneNumber`       | `ta-inline-profile-data`                                              | silencieusement ignorés                                                                                                     |
| `floor`                                        | `ta-address`                                                          | silencieusement ignoré                                                                                                      |
| `MenuAction`                                   | `@ta/menu`                                                            | non exporté de l'API publique                                                                                               |

## Traductions manquantes

- Espaces de noms entiers absents : `ta-criticity`, `ta-culture`
- `ta-duration` : seul « moins d'une heure » est traduit
- `ta-time-ago` : `ui.common.ahead`, `ui.common.to-date-with-hours`
- `ta-text-to-clipboard` : `ui.clipboard.*`
- `ta-search-history-displayer` : `core.historical-research.last-searches`
- Libellés de colonnes de grille : clés brutes `grid.<gridId>.core.<field>`
- `ta-container-validation`, `ta-validation-modal`, `ta-pwa` : rendent leurs libellés
  `ui.*` en anglais malgré des valeurs correctes dans `fr.json`

## Détail cosmétique

`ta-text-to-clipboard` utilise le nom de ligature `"copy"` au lieu de `"content_copy"` :
l'icône est invisible.

`ta-files-display` porte un bouton flottant en `position:absolute` sans référence de
hauteur, qui déborde d'environ 50 px sur ce qui le suit quand deux instances sont
empilées.

## Défauts levés par la page `/catalogue` — corrigés au passage

Contrairement à tout ce qui précède, ces trois-là ont été corrigés : la refonte
visuelle (direction B) passait par les mêmes fichiers, et les laisser aurait rendu
la page non conforme à la maquette.

- **`ta-button` acceptait `type="danger"` sans le styler.** Le type était déclaré
  dans `button.component.ts` depuis l'origine, mais aucune règle `.danger` n'existait
  dans le SCSS : le bouton retombait sur le gabarit nu, sans couleur ni contour.
- **`.form-control` n'héritait pas de la police du document.** `input` et `textarea`
  ne reprennent pas `font-family` de leur ancêtre : faute d'un `font-family: inherit`,
  le champ multiligne s'affichait dans la monospace par défaut du navigateur.
- **`@ta/form-input` embarque `MatDatepicker` sans fournir de `DateAdapter`.**
  `InputDatePicker` lève `No provider found for DateAdapter` tant que l'application
  hôte n'appelle pas `provideNativeDateAdapter()` (ou un équivalent). La contrainte
  n'est documentée nulle part ; la vitrine la satisfait désormais dans `app.config.ts`.

Un quatrième point reste ouvert : **`.form-control` passait sa bordure en rouge sur
`:required`**, c'est-à-dire dès qu'un champ obligatoire était vide, avant toute saisie.
La règle a été retirée — un champ obligatoire non encore rempli n'est pas en erreur —
et le signal repose désormais sur l'astérisque du libellé, l'état d'alerte n'étant
déclenché que par `ng-invalid.ng-touched`.
