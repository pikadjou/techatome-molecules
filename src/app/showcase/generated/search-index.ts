/* eslint-disable */
// -----------------------------------------------------------------------------
// Fichier généré par scripts/generate-showcase-metadata.mjs — NE PAS ÉDITER.
// Régénérer : yarn showcase:metadata
// -----------------------------------------------------------------------------

export interface SearchIndexEntry {
  className: string;
  summary: string;
}

/**
 * Nom de classe et résumé de chaque composant documenté, seul de quoi la barre de
 * recherche a besoin. `app.component.ts` est chargé au démarrage : lui donner
 * `TA_API` (338 Ko) ou `DEMO_SOURCES` (le texte de tous les templates) grossirait
 * le chargement initial pour un filtre qui ne lit qu'un nom de classe et un résumé.
 */
export const SEARCH_INDEX: Record<string, SearchIndexEntry> = {
  "ta-action-button": {
    "className": "ActionButtonComponent",
    "summary": "Bouton flottant à puce, qui déclenche une action seule directement ou déploie un menu au-delà d'une."
  },
  "ta-address": {
    "className": "AddressComponent",
    "summary": "Ligne d'adresse formatée, avec le nom de pays résolu depuis son code ISO."
  },
  "ta-badge": {
    "className": "BadgeComponent",
    "summary": "Pastille d'état, déclinée en huit intentions de couleur, avec icône optionnelle et clic toujours actif."
  },
  "ta-banner": {
    "className": "BannerComponent",
    "summary": "Bandeau de message, décliné en sept intentions de couleur ; épinglé en haut du viewport hors du mode `inline`."
  },
  "ta-bar-chart": {
    "className": "TaChartBarComponent",
    "summary": "Graphique en barres Chart.js. Le composant ne déclare aucun input propre : `labels`, `datasets`, `chartOptions` et `chartHeight` viennent tous de `BaseChartComponent`."
  },
  "ta-benefit-item": {
    "className": "BenefitItemComponent",
    "summary": "Ligne à icône et bordure colorée pour signaler un statut, sur fond neutre."
  },
  "ta-boolean-icon": {
    "className": "BooleanIconComponent",
    "summary": "Icône de statut booléen, avec un état « non communiqué » distinct pour `null`/`undefined`."
  },
  "ta-bottom-sheet-template-basic": {
    "className": "BottomSheetTemplateBasicComponent",
    "summary": "Contenu standard d'un `MatBottomSheet` : une liste d'actions (icône, libellé, sous-titre optionnel) fournie via le jeton `MAT_BOTTOM_SHEET_DATA`, pas par des `@Input()`."
  },
  "ta-bottom-sheet-template-generic": {
    "className": "BottomSheetTemplateGenericComponent",
    "summary": "Coquille générique d'un `MatBottomSheet` : un `TemplateRef` et un contexte libres, fournis via `MAT_BOTTOM_SHEET_DATA` — mais le contenu projeté ne s'affiche jamais (voir ci-dessous)."
  },
  "ta-bullet": {
    "className": "BulletComponent",
    "summary": "Puce colorée, ronde par défaut, avec un contenu projeté pour le type `notif`."
  },
  "ta-button": {
    "className": "ButtonComponent",
    "summary": "Bouton d'action, décliné en quatre types, trois tailles et trois états."
  },
  "ta-button-tool": {
    "className": "ButtonToolComponent",
    "summary": "Bouton icône seul, en sept tailles et trois états, avec un blocage natif distinct via `readonly`."
  },
  "ta-card": {
    "className": "CardComponent",
    "summary": "Conteneur de contenu à projection, avec en-tête, titre et corps optionnels."
  },
  "ta-card-content": {
    "className": "CardContentComponent",
    "summary": "Corps d'une carte, entre l'en-tête et la zone d'action (sélecteur `ta-card-content` dans `card.component.html`)."
  },
  "ta-card-cta": {
    "className": "CardCtaComponent",
    "summary": "Zone d'action en pied de carte, projetée via le sélecteur `ta-card-cta` de `card.component.html` — typiquement un ou plusieurs boutons."
  },
  "ta-card-header": {
    "className": "CardHeaderComponent",
    "summary": "Zone d'en-tête d'une carte : recueille les projections nommées `ta-card-tag`, `ta-card-title` et `ta-card-subtitle` au-dessus du contenu."
  },
  "ta-card-image": {
    "className": "CardImageComponent",
    "summary": "Image en tête d'une carte : `src` (chaîne, vide par défaut) est liée directement à l'attribut `src` de la balise `<img>`."
  },
  "ta-card-subtitle": {
    "className": "CardSubtitleComponent",
    "summary": "Sous-titre facultatif d'une carte, projeté sous le titre dans `ta-card-header` (sélecteur `ta-card-subtitle`)."
  },
  "ta-card-tag": {
    "className": "CardTagComponent",
    "summary": "Zone d'étiquette d'une carte, projetée au-dessus du titre dans `ta-card-header` (sélecteur `ta-card-tag`) ; ne porte elle-même aucun style, tout vient de ce qu'elle projette."
  },
  "ta-card-title": {
    "className": "CardTitleComponent",
    "summary": "Titre d'une carte, projeté dans `ta-card-header` (sélecteur `ta-card-title`) et rendu sans mise en forme propre."
  },
  "ta-civility": {
    "className": "CivilityComponent",
    "summary": "Icône Material associée à une civilité (`Civility` de `@ta/utils`)."
  },
  "ta-cms": {
    "className": "CmsComponent",
    "summary": "Contenu Strapi identifié par `contentType`, avec chargement, erreur et rendu enchaînés via `RequestState`."
  },
  "ta-cms-editor-blocks": {
    "className": "BlockTextComponent",
    "summary": "Rendu en lecture seule d'un contenu produit par `ta-cms-editor-input`, bloc par bloc."
  },
  "ta-cms-editor-input": {
    "className": "EditorInputComponent",
    "summary": "Éditeur de contenu riche (EditorJS), piloté par un modèle de blocs et une sauvegarde externe."
  },
  "ta-component-selector-modal": {
    "className": "ComponentSelectorModal",
    "summary": "Modale générique qui projette le `TemplateRef` porté par un modèle `InputComponent` ; c'est elle que `ta-input-component` ouvre en interne, mais elle se pilote aussi seule via un `ModalState<InputComponent, string>` : `asked(model)` l'ouvre, `closeEvent` rend la valeur choisie."
  },
  "ta-contact-information": {
    "className": "ContactInformationComponent",
    "summary": "En-tête icône + valeur (passée dans `translate`), avec une zone de contenu projeté en dessous."
  },
  "ta-container-validation": {
    "className": "ContainerValidationComponent",
    "summary": "Enrobe un contenu projeté (typiquement un bouton) d'une confirmation ouverte au clic — en modale, ou dans le flux."
  },
  "ta-context-menu": {
    "className": "ContextMenuComponent",
    "summary": "Grille d'actions en tuiles (icône + libellé), une tuile par élément de `menu`, chacune un `routerLink`."
  },
  "ta-copy-link-button": {
    "className": "CopyLinkButtonComponent",
    "summary": "Bouton qui copie une valeur dans le presse-papier au clic, en trois tailles et trois états."
  },
  "ta-criticity": {
    "className": "CriticityComponent",
    "summary": "Badge de criticité (`ta-badge`), coloré selon le niveau `CriticityStatus`."
  },
  "ta-culture": {
    "className": "CultureComponent",
    "summary": "Liste de cultures affichées en ligne, séparées par des virgules."
  },
  "ta-dashboard-card": {
    "className": "DashboardCardComponent",
    "summary": "Carte indicateur : une icône Material obligatoire, un titre et un sous-titre projetés, un corps libre en dessous."
  },
  "ta-default-panel": {
    "className": "TaDefaultPanelComponent",
    "summary": "Panneau générique qui projette un `TemplateRef` reçu par injection ; c'est le contenu par défaut d'un `ta-overlay-panel`."
  },
  "ta-department-icon-list": {
    "className": "DepartmentIconListComponent",
    "summary": "Liste d'icônes de départements, avec ou sans nom affiché à côté de chacune."
  },
  "ta-department-professions": {
    "className": "DepartmentProfessionsComponent",
    "summary": "Liste de professions en badges, avec un plafond optionnel et un compteur du surplus."
  },
  "ta-departments": {
    "className": "DepartmentsComponent",
    "summary": "Compose `ta-department-icon-list` et `ta-department-professions` l'un sous l'autre."
  },
  "ta-documents-list": {
    "className": "DocumentsListComponent",
    "summary": "Liste de documents pilotée par `TaDocumentsService`, avec sélection ou suppression optionnelles."
  },
  "ta-doughnut-chart": {
    "className": "TaChartDoughnutComponent",
    "summary": "Graphique en anneau Chart.js, sans input propre : `labels` et `datasets` viennent de `BaseChartComponent`, commun aux cinq composants du paquet."
  },
  "ta-dual-button": {
    "className": "DualButtonComponent",
    "summary": "Paire de boutons accolés, chacun avec sa propre icône, son libellé et son `callback`."
  },
  "ta-duration": {
    "className": "DurationComponent",
    "summary": "Durée entre deux dates, exprimée en années/mois/jours/heures via `date-fns`."
  },
  "ta-edit-field": {
    "className": "EditFieldComponent",
    "summary": "Champ affiché en lecture, qui bascule vers un `ta-inputs` d'édition au clic puis se referme au clic extérieur."
  },
  "ta-empty": {
    "className": "EmptyComponent",
    "summary": "État vide standard (icône, titre, sous-titre, action) ou passe-plat vers le contenu projeté quand `isEmpty` est faux."
  },
  "ta-error": {
    "className": "ErrorComponent",
    "summary": "Bloc d'erreur (icône, titre, message, bouton de réessai) affiché tant que `message` n'est pas vide."
  },
  "ta-excel-viewer": {
    "className": "ExcelViewerComponent",
    "summary": "Aperçu d'un fichier Excel dans un `ngx-doc-viewer` (`viewer=\"office\"`)."
  },
  "ta-expandable-text": {
    "className": "ExpandableTextComponent",
    "summary": "Bloc de texte projeté, tronqué à `height` pixels avec un bouton de bascule quand le contenu dépasse."
  },
  "ta-expansion-panel": {
    "className": "TaExpansionPanelComponent",
    "summary": "Accordéon Material : une entrée `templates`, un couple `{ title, content }` de `TemplateRef` par panneau."
  },
  "ta-file-image": {
    "className": "FileImageComponent",
    "summary": "Pictogramme de fichier déduit de l'extension du nom passé en entrée."
  },
  "ta-files-display": {
    "className": "FilesDisplayComponent",
    "summary": "Liste de fichiers pilotée par un flux `files$`, avec navigation, fichiers temporaires et envoi."
  },
  "ta-files-edit": {
    "className": "FileEditComponent",
    "summary": "Éditeur d'image (tui-image-editor intégré) : dessin, formes, texte, undo/redo, puis export en `Blob`."
  },
  "ta-files-list": {
    "className": "FileListComponent",
    "summary": "Grille de fichiers (`ta-file-card` pour les documents, vignette pour les images), sélection et suppression."
  },
  "ta-files-preview": {
    "className": "FilesPreviewComponent",
    "summary": "Aperçu d'un document : titre, date, poids, visualiseur adapté à l'extension, et téléchargement."
  },
  "ta-files-preview-modal": {
    "className": "PreviewModal",
    "summary": "Visionneuse plein écran : une pièce isolée, ou une galerie parcourable."
  },
  "ta-files-upload": {
    "className": "UploadComponent",
    "summary": "Bouton(s) de téléversement : prise de photo, choix d'image ou de document, selon `features`."
  },
  "ta-filter-container": {
    "className": "FilterContainerComponent",
    "summary": "Panneau de filtres plein hauteur (`ta-layout-side`) rendant un `ta-form` depuis `form`, avec un lien « Effacer » et un bouton « Valider »."
  },
  "ta-filter-displayer": {
    "className": "FilterDisplayerComponent",
    "summary": "Déclencheur (bouton ou lien) censé ouvrir un `ta-filter-container` en panneau plein écran ; sur mobile, une feuille du bas."
  },
  "ta-filters-container": {
    "className": "FiltersContainerComponent",
    "summary": "Panneau de filtres repliable, avec ses tags actifs intégrés (`ta-filters-tag`) et une zone de contenu projetée."
  },
  "ta-filters-tag": {
    "className": "FiltersTagComponent",
    "summary": "Rangée de `ta-badge` (`type=\"info\"`, icône `close`) affichant les filtres actifs ; cliquer la croix d'un badge retire ce filtre."
  },
  "ta-flag-icon": {
    "className": "FlagIconComponent",
    "summary": "Drapeau SVG intégré, pour sept codes de langue câblés en dur, en quatre tailles distinctes."
  },
  "ta-font-icon": {
    "className": "FontIconComponent",
    "summary": "Icône rendue par un `<mat-icon>` ligaturé, en sept tailles, à partir d'un nom de police d'icônes."
  },
  "ta-form": {
    "className": "FormComponent",
    "summary": "Formulaire complet rendu depuis un modèle `InputBase[]`, avec validation, soumission et états de chargement/erreur."
  },
  "ta-form-label": {
    "className": "FormLabelComponent",
    "summary": "Libellé de champ avec astérisque automatique, factorisé hors du système `InputBase` et réutilisé par plusieurs composants de saisie internes à @ta/form-input."
  },
  "ta-google-maps": {
    "className": "MapComponent",
    "summary": "Carte Google Maps avec marqueurs groupés, fenêtre d'info et tracé d'itinéraire via l'API Routes ; ne déclare aucun input."
  },
  "ta-grid": {
    "className": "TaGridComponent",
    "summary": "Rendu de la grille de données — vue tableau ou carte, tri par colonne, sélection de lignes, densité — au-dessus de la pagination intégrée."
  },
  "ta-grid-container": {
    "className": "TaGridContainerComponent",
    "summary": "Racine d'une grille : crée l'instance `TaGridData` pour un `gridId` donné et l'initialise avec des données locales, des colonnes typées et des vues rapides."
  },
  "ta-grid-control": {
    "className": "TaGridControlComponent",
    "summary": "Barre d'actions d'une grille — filtres, tri, vues rapides, regroupement et bascule carte/tableau — pilotée par les colonnes déclarées sur le `ta-grid-container` partageant le même `gridId`."
  },
  "ta-grid-count": {
    "className": "TaGridCountComponent",
    "summary": "Nombre de résultats d'une grille, à poser au-dessus de la liste — lit le `ta-grid-container` partageant le même `gridId`."
  },
  "ta-grid-filters-panel": {
    "className": "TaGridFiltersPanel",
    "summary": "Panneau latéral plein écran portant le formulaire de filtres d'une grille (`ta-grid-form`) — sélectionné par `ta-grid-control` en cliquant « Filtres », mais montable seul."
  },
  "ta-grid-form": {
    "className": "TaGridFormComponent",
    "summary": "Formulaire de filtres et de regroupement d'une grille, construit dynamiquement à partir des colonnes `showOnSearch` du `ta-grid-container` partageant le même `gridId`."
  },
  "ta-grid-highlight-filters": {
    "className": "TaGridHighlightFiltersComponent",
    "summary": "Bandeau de filtres mis en avant hors du panneau replié — un sous-ensemble de colonnes marquées `highlighted`, toujours visible au-dessus de la grille."
  },
  "ta-grid-search": {
    "className": "TaGridSearchComponent",
    "summary": "Champ de recherche globale d'une grille, appliqué comme filtre `like` sur les colonnes marquées `isSearchField` du `ta-grid-container` partageant le même `gridId`."
  },
  "ta-grid-tags": {
    "className": "TaGridTagsComponent",
    "summary": "Étiquettes des filtres et du regroupement actifs d'une grille, avec retrait individuel ou global — reflète l'état du `ta-grid-container` partageant le même `gridId`, sans aucun input propre."
  },
  "ta-guard": {
    "className": "GuardComponent",
    "summary": "Garde d'accès conditionnant l'affichage de son contenu projeté à `TaPermissionsService` (`@ta/user`), par fonctionnalité, rôle ou simple authentification."
  },
  "ta-hour-date-line": {
    "className": "HourDateLineComponent",
    "summary": "Ligne date + plage horaire, formatée via `DatePipe`."
  },
  "ta-image-viewer": {
    "className": "ImageViewerComponent",
    "summary": "Aperçu d'une image : `<img [src]=\"file().url\">` dans un conteneur centré."
  },
  "ta-inline-profile-data": {
    "className": "InlineProfileDataComponent",
    "summary": "Poste et e-mail d'un profil, avec un `ta-user-logo` optionnel devant."
  },
  "ta-input-checkbox": {
    "className": "CheckboxComponent",
    "summary": "Case à cocher du système de formulaires, pilotée par un modèle `InputCheckBox`."
  },
  "ta-input-choices": {
    "className": "InputChoicesComponent",
    "summary": "Sélecteur à panneau latéral avec recherche et sélection simple ou multiple, piloté par un modèle `InputChoices`."
  },
  "ta-input-color-picker": {
    "className": "ColorPickerComponent",
    "summary": "Sélecteur de couleur du système de formulaires, piloté par un modèle `InputTextBox`."
  },
  "ta-input-component": {
    "className": "ComponentInputComponent",
    "summary": "Champ texte lié à un `FormControl`, complété par une modale de sélection (`ta-component-selector-modal`) qui projette un `TemplateRef` fourni par le modèle `InputComponent`."
  },
  "ta-input-culture": {
    "className": "CultureComponent",
    "summary": "Menu déroulant spécialisé pour choisir une culture. `InputCulture` étend `InputDropdown` et remplit `options$` depuis l'énumération `Culture` de @ta/utils — toute valeur `options$` passée par l'appelant est ignorée, écrasée par le constructeur."
  },
  "ta-input-date-picker": {
    "className": "DatePickerComponent",
    "summary": "Sélecteur de date basé sur Angular Material, piloté par un modèle `InputDatePicker`."
  },
  "ta-input-dropdown": {
    "className": "DropdownComponent",
    "summary": "Menu déroulant du système de formulaires, à sélection simple ou multiple, piloté par un modèle `InputDropdown`."
  },
  "ta-input-image": {
    "className": "InputImageComponent",
    "summary": "Aperçu en lecture seule d'une image, piloté par un modèle `InputImages` (même modèle que `ta-input-images`) : il n'affiche que la première valeur, sans aucune interaction."
  },
  "ta-input-images": {
    "className": "InputImagesComponent",
    "summary": "Galerie éditable pilotée par un modèle `InputImages` : grille de vignettes avec suppression, et bouton d'ajout ouvrant un choix caméra/galerie."
  },
  "ta-input-label": {
    "className": "LabelComponent",
    "summary": "Élément de formulaire sans valeur, piloté par un modèle `InputLabel` : texte simple avec icône, ou titre de section selon que `level` est défini."
  },
  "ta-input-logo": {
    "className": "InputLogoComponent",
    "summary": "Aperçu éditable d'un logo unique, piloté par un modèle `InputLogo` : image ou emplacement vide, avec un choix caméra/galerie et un bouton de suppression."
  },
  "ta-input-phone": {
    "className": "InputPhoneComponent",
    "summary": "Champ téléphone international (`intl-tel-input`), avec indicatif de pays et validation de format intégrée."
  },
  "ta-input-radio": {
    "className": "RadioComponent",
    "summary": "Groupe de boutons radio, options passées par un `Observable`, avec variante à icônes."
  },
  "ta-input-rating": {
    "className": "RatingComponent",
    "summary": "Notation par étoiles (`ta-rating` de `@ta/ui`), avec maximum, taille et demi-étoiles configurables."
  },
  "ta-input-schema": {
    "className": "InputSchemaComponent",
    "summary": "Sélecteur d'une image unique (logo, schéma), ouvrant un éditeur en plein écran (`ta-input-schema-modal`)."
  },
  "ta-input-slider": {
    "className": "SliderComponent",
    "summary": "Curseur natif (`input[type=range]`), bornes `min`/`max` fixées par le modèle."
  },
  "ta-input-switch": {
    "className": "SwitchComponent",
    "summary": "Champ dont le type de rendu (texte, case à cocher, liste déroulante…) est décidé à l'exécution par un `Observable`."
  },
  "ta-input-textarea": {
    "className": "TextareaComponent",
    "summary": "Zone de texte multi-lignes, avec redimensionnement automatique (`cdkTextareaAutosize`)."
  },
  "ta-input-textbox": {
    "className": "TextBoxComponent",
    "summary": "Champ texte du système de formulaires. Se pilote par un modèle `InputTextBox`, jamais par des inputs individuels."
  },
  "ta-input-time-picker": {
    "className": "TimePickerComponent",
    "summary": "Sélecteur d'heure (`ngx-material-timepicker`) ; le champ natif est toujours en lecture seule, la saisie passe par le cadran."
  },
  "ta-input-toggle": {
    "className": "ToggleComponent",
    "summary": "Interrupteur booléen, piloté par un `InputCheckBox` construit avec `toggle: true`."
  },
  "ta-input-upload": {
    "className": "UploadComponent",
    "summary": "Zone de dépôt de fichiers, avec barre de progression simulée et téléversement réel via `TaDocumentsService`."
  },
  "ta-input-wysiswyg": {
    "className": "WysiswygComponent",
    "summary": "Éditeur de contenu riche (EditorJS), enveloppé dans un modèle de formulaire — voir `ta-cms-editor-input` pour le composant sous-jacent."
  },
  "ta-inputs": {
    "className": "InputsComponent",
    "summary": "Dispatcher qui rend le composant @ta/form-input adapté à un modèle `InputBase`, seul ou dans un `ta-form`."
  },
  "ta-itsme-button": {
    "className": "ItsmeButtonComponent",
    "summary": "Bouton de connexion itsme, avec ou sans libellé, en trois tailles et trois états."
  },
  "ta-label": {
    "className": "LabelComponent",
    "summary": "Étiquette de contenu projeté, déclinée en sept intentions de couleur et sept tailles, avec pictogramme optionnel."
  },
  "ta-layout-content": {
    "className": "LayoutContentComponent",
    "summary": "Conteneur de contenu de page, avec une hauteur minimale d'écran par défaut ou une hauteur suivant le contenu."
  },
  "ta-layout-flex": {
    "className": "LayoutFlexComponent",
    "summary": "Disposition à trois zones (gauche, centre, droite) repliables, chacune projetée via un attribut `left` / `center` / `right`."
  },
  "ta-layout-full-panel": {
    "className": "LayoutFullPanelComponent",
    "summary": "Panneau plein hauteur en overlay fixe depuis la droite, avec fond semi-transparent, en-tête titré et pieds de panneau projetés."
  },
  "ta-layout-header": {
    "className": "LayoutHeaderComponent",
    "summary": "Bandeau d'en-tête sans mise en forme propre : `<div class=\"header\"><ng-content></ng-content></div>` (vérifié dans layout-header.component.html), destiné à recevoir `ta-layout-header-default`, `ta-layout-header-logo` et/ou `ta-layout-title`."
  },
  "ta-layout-header-default": {
    "className": "LayoutHeaderDefaultComponent",
    "summary": "Barre d'en-tête à trois zones : retour, titre centré, menu contextuel — chacune conditionnée par ses inputs."
  },
  "ta-layout-header-logo": {
    "className": "LayoutHeaderLogoComponent",
    "summary": "Ligne d'en-tête avec avatar de profil, logo central et cloche de notifications, chacun ouvrant une `ta-modal` plein écran sur un `TemplateRef` fourni."
  },
  "ta-layout-modal": {
    "className": "LayoutModalComponent",
    "summary": "Structure de contenu de modale — en-tête avec titre et fermeture optionnelle, zone de contenu défilante — sans overlay ni fond propres."
  },
  "ta-layout-nav": {
    "className": "LayoutNavComponent",
    "summary": "Emplacement de barre de navigation sans mise en forme propre : `<ng-content></ng-content>` seul (vérifié dans layout-nav.component.html et son SCSS vide)."
  },
  "ta-layout-not-found": {
    "className": "LayoutNotFoundComponent",
    "summary": "Page d'erreur 404 statique, sans input : icône, titre et texte traduits (clés `ui.layout.notfound.*`), avec un bouton de retour à l'accueil."
  },
  "ta-layout-page": {
    "className": "LayoutPageComponent",
    "summary": "Squelette de page complète : distribue son contenu projeté en quatre zones fixes — en-tête, titre, contenu principal et navigation."
  },
  "ta-layout-panel": {
    "className": "LayoutPanelComponent",
    "summary": "Enveloppe de contenu sans mise en forme propre — `<ng-content></ng-content>` seul, SCSS vide (vérifié dans layout-panel.component.ts/.scss) — destinée au tiroir de `ta-layout-with-panel`."
  },
  "ta-layout-side": {
    "className": "LayoutSideComponent",
    "summary": "Colonne latérale à deux zones nommées : un contenu défilant (`ta-layout-side-content`) et un pied d'action fixe (`ta-layout-side-cta`)."
  },
  "ta-layout-side-content": {
    "className": "LayoutSideContentComponent",
    "summary": "Enveloppe de contenu latéral sans mise en forme propre — `<div class=\"form-container\"><ng-content></ng-content></div>`, avec un SCSS entièrement commenté (vérifié dans layout-side-content.component.scss)."
  },
  "ta-layout-side-cta": {
    "className": "LayoutSideCtaComponent",
    "summary": "Pied d'action pour une colonne latérale : fond optionnel et coins inférieurs arrondis optionnels autour du contenu projeté."
  },
  "ta-layout-title": {
    "className": "LayoutTitleComponent",
    "summary": "Emplacement de titre de page : ajoute uniquement un padding horizontal autour de son contenu projeté."
  },
  "ta-layout-with-bottom-nav": {
    "className": "LayoutWithBottomNavComponent",
    "summary": "Page avec une navigation dédiée (`ta-layout-nav` projeté par sélecteur) positionnée en bas sur mobile, en rail latéral sur desktop."
  },
  "ta-layout-with-panel": {
    "className": "LayoutWithPanelComponent",
    "summary": "Zone principale avec un tiroir latéral (Angular Material `mat-drawer`) piloté par l'input `open`, sur deux zones nommées : `ta-layout-content` et `ta-layout-panel`."
  },
  "ta-line-chart": {
    "className": "TaChartLineComponent",
    "summary": "Graphique en courbes Chart.js, sans input propre : `labels`, `datasets` et `chartHeight` viennent de `BaseChartComponent`, commun aux cinq composants du paquet."
  },
  "ta-link": {
    "className": "LinkComponent",
    "summary": "Lien de contenu projeté, avec icône optionnelle, soulignement et graisse indépendants, trois états et sept tailles."
  },
  "ta-list-container": {
    "className": "ListContainerComponent",
    "summary": "Conteneur d'une liste : enveloppe une suite de `ta-list-element` sans logique propre."
  },
  "ta-list-element": {
    "className": "ListElementComponent",
    "summary": "Ligne d'une liste : assemble titre, sous-titre, étiquette et information annexe projetés, avec un output `action`."
  },
  "ta-list-extra-information": {
    "className": "ListExtraInformationComponent",
    "summary": "Information annexe d'une ligne de liste, projetée en fin de ligne dans `ta-list-element` (sélecteur `ta-list-extra-information`)."
  },
  "ta-list-sub-title": {
    "className": "ListSubTitleComponent",
    "summary": "Sous-titre facultatif d'une ligne de liste, projeté sous le titre dans `ta-list-element` (sélecteur `ta-list-sub-title`)."
  },
  "ta-list-tag": {
    "className": "ListTagComponent",
    "summary": "Zone d'étiquette d'une ligne de liste, projetée à droite du titre dans `ta-list-element` (sélecteur `ta-list-tag`) ; ne porte elle-même aucun style."
  },
  "ta-list-title": {
    "className": "ListTitleComponent",
    "summary": "Titre principal d'une ligne de liste, projeté dans `ta-list-element` via le sélecteur `ta-list-title`."
  },
  "ta-loader": {
    "className": "LoaderComponent",
    "summary": "Chargeur animé (plan d'appartement qui se dessine en boucle) avec message, ou squelette de mise en page alternatif."
  },
  "ta-local-icon": {
    "className": "LocalIconComponent",
    "summary": "Icône SVG intégrée, résolue depuis l'énumération `TaIconType` par `TaIconsService`, en cinq tailles."
  },
  "ta-login-card": {
    "className": "LoginCardComponent",
    "summary": "Carte cliquable déclenchant la connexion, via le jeton d'injection `TA_AUTH_TOKEN` (`@ta/user`) que l'application hôte doit fournir."
  },
  "ta-logo": {
    "className": "LogoComponent",
    "summary": "Logo Techatome, décliné en variantes de couleur et de mise en page, servi depuis `assets/partners/logo/`."
  },
  "ta-main-menu": {
    "className": "MainMenuComponent",
    "summary": "Barre de navigation principale de l'application : logo, `ta-menu` pour `menuMain`, et zone utilisateur optionnelle (`menuUser` ou `userMenuTemplate`)."
  },
  "ta-material-icon": {
    "className": "MaterialIconComponent",
    "summary": "Icône Material rendue par un `<mat-icon>` dont le nom de ligature est projeté, en quatre variantes de style."
  },
  "ta-megaoctet": {
    "className": "MegaoctetComponent",
    "summary": "Taille de fichier convertie en mégaoctets (`octetsToMo`), toujours affichée avec le suffixe « MB »."
  },
  "ta-menu": {
    "className": "MenuComponent",
    "summary": "Liste de `ta-menu-item` construite à partir d'un `Menu` ; `container` choisit la classe CSS appliquée (`main-nav`, `second`, `overflow vertical`, ou aucune pour `panel`)."
  },
  "ta-menu-item": {
    "className": "MenuItemComponent",
    "summary": "Élément de menu unique : icône, libellé, badge de notification optionnel, lien ou action au clic, et sous-menu à deux niveaux via `MenuPanel`."
  },
  "ta-menu-navigation": {
    "className": "NavigationComponent",
    "summary": "Navigation en onglets, étiquettes ou sous-menu, avec suivi interne de l'élément actif — sans dépendre du routeur quand les éléments portent un `callback`."
  },
  "ta-messenger-button": {
    "className": "MessengerButtonComponent",
    "summary": "Bouton de partage Messenger, avec ou sans libellé, en trois tailles et trois états."
  },
  "ta-mixed-chart": {
    "className": "TaChartMixedComponent",
    "summary": "Graphique combinant plusieurs types de séries (barres, courbe…) sur un même canevas Chart.js, sans input propre."
  },
  "ta-modal": {
    "className": "TaModalComponent",
    "summary": "Modale contrôlée par `[open]`, avec en-tête/titre, zone de contenu et pied projetés (`modal-content`, `modal-footer`)."
  },
  "ta-my-account": {
    "className": "MyAccountComponent",
    "summary": "Carte de profil connecté : identité, menu de profil optionnel, bouton d'édition optionnel et déconnexion, via les jetons `TA_USER_SERVICE` et `TA_AUTH_TOKEN` (`@ta/user`)."
  },
  "ta-new": {
    "className": "NewComponent",
    "summary": "Puce « nouveau », positionnée en absolu sur un coin par défaut ou dans le flux avec `isRelative`."
  },
  "ta-notification-badge": {
    "className": "NotificationBadgeComponent",
    "summary": "Pastille de comptage, positionnée en absolu sur son conteneur par défaut ou en flux avec `relative`."
  },
  "ta-notification-badge-container": {
    "className": "NotificationBadgeContainerComponent",
    "summary": "Conteneur générique en `position: relative`, dont le seul rôle est d'ancrer un `ta-notification-badge` projeté en son coin."
  },
  "ta-notification-box": {
    "className": "NotificationBoxComponent",
    "summary": "Pile de notifications, alimentée par `TaNotificationService` et retirée automatiquement après trois secondes — sauf les erreurs, qui restent jusqu'à fermeture manuelle."
  },
  "ta-notification-bullet": {
    "className": "BulletComponent",
    "summary": "Pastille numérique affichant un décompte de notifications, obtenu par une requête GraphQL comptée."
  },
  "ta-notification-inline": {
    "className": "NotificationInlineComponent",
    "summary": "Bannière d'alerte contextuelle, déclinée en quatre intentions, avec fermeture et détails d'erreur."
  },
  "ta-overlay-panel": {
    "className": "TaOverlayPanelComponent",
    "summary": "Panneau flottant (CDK Overlay) ancré à un déclencheur projeté, avec un contenu projeté séparé."
  },
  "ta-pdf-viewer": {
    "className": "PdfViewerComponent",
    "summary": "Aperçu d'un fichier PDF dans un `ngx-doc-viewer` (`viewer=\"pdf\"`)."
  },
  "ta-picture-info-message": {
    "className": "PictureInfoMessageComponent",
    "summary": "Message illustré par une icône locale ou Material, ou message typé (`ta-typed-message`) si aucune icône n'est fournie."
  },
  "ta-pie-chart": {
    "className": "TaChartPieComponent",
    "summary": "Graphique circulaire Chart.js. `labels` et `datasets` viennent de `BaseChartComponent` ; c'est le seul des cinq composants du paquet à ajouter un input propre, `radius`."
  },
  "ta-progress": {
    "className": "ProgressComponent",
    "summary": "Barre de progression compacte (piste + remplissage + libellé projeté), en sept couleurs et quatre tailles distinctes."
  },
  "ta-progress-bar": {
    "className": "ProgressBarComponent",
    "summary": "Barre de progression minimale : un élément HTML `<progress>` natif, sans libellé ni couleur configurable."
  },
  "ta-progress-bar-data": {
    "className": "ProgressBarDataComponent",
    "summary": "`ta-progress-bar` habillée d'un titre (avec icône Material optionnelle) et d'une valeur textuelle à droite."
  },
  "ta-progress-circle": {
    "className": "ProgressCircleComponent",
    "summary": "Anneau de progression SVG, avec un pourcentage centré et un libellé optionnel au-dessus et en dessous."
  },
  "ta-pwa": {
    "className": "PwaComponent",
    "summary": "Bandeau flottant proposant l'installation en PWA, affiché quand le navigateur signale la capacité d'installation."
  },
  "ta-rating": {
    "className": "RatingComponent",
    "summary": "Étoiles de notation cliquables, avec remplissage partiel décimal, en lecture seule ou personnalisées (couleurs, taille)."
  },
  "ta-rating-distribution": {
    "className": "RatingDistributionComponent",
    "summary": "Répartition des notes reçues, une barre par échelon — ce que la moyenne seule ne dit pas."
  },
  "ta-sale": {
    "className": "SaleComponent",
    "summary": "Contenu Strapi « conditions de vente » avec case à cocher d'acceptation, émise sur `acceptation`."
  },
  "ta-search-displayer": {
    "className": "SearchDisplayerComponent",
    "summary": "Champ de recherche avec historique local, censé encapsuler `ta-search-history-displayer` ; `container` choisirait le déclencheur affiché sous 576px de large."
  },
  "ta-search-field": {
    "className": "SearchFieldComponent",
    "summary": "Champ de recherche qui se déploie depuis une icône ; se pilote par un `InputTextBox` (ou `InputNumber`)."
  },
  "ta-search-history-displayer": {
    "className": "SearchHistoryDisplayerComponent",
    "summary": "Champ de recherche (`ta-search-field`) avec liste des dernières recherches persistées en `localStorage`, en liste inline ou en menu déroulant."
  },
  "ta-share-button": {
    "className": "ShareButtonComponent",
    "summary": "Bouton de partage natif (`navigator.share`), en trois tailles et trois états."
  },
  "ta-swiper": {
    "className": "SwiperComponent",
    "summary": "Conteneur à défilement horizontal, sans aucune entrée : c'est le contenu projeté qui porte la mise en page."
  },
  "ta-swiper-light": {
    "className": "SwiperLightComponent",
    "summary": "Liste projetée via un `TemplateRef`, mise en scène en défilement horizontal sur mobile ou selon `forced`."
  },
  "ta-switch-language": {
    "className": "SwitchLanguageComponent",
    "summary": "Sélecteur de langue, dans l'une de trois présentations : liste de pastilles en ligne, menu déroulant ou panneau modal."
  },
  "ta-switch-language-cta": {
    "className": "SwitchLanguageCtaComponent",
    "summary": "Bouton d'accès rapide au changement de langue : un simple alias de `ta-switch-language` figé en `mode=\"modal\"`."
  },
  "ta-template-modal-container": {
    "className": "TemplateModalContainer",
    "summary": "Modale pilotée par `TemplateRef`, ouverte/fermée via l'input `open` : enveloppe une `ta-modal` interne dont la taille est dérivée de `style`."
  },
  "ta-text": {
    "className": "TextComponent",
    "summary": "Bloc de texte projeté, avec taille, couleur de token et graisse."
  },
  "ta-text-to-clipboard": {
    "className": "TextToClipboardComponent",
    "summary": "Icône « copier » : au clic, copie `value` dans le presse-papiers (`navigator.clipboard.writeText`) et déclenche une notification de succès ou d'échec."
  },
  "ta-time-ago": {
    "className": "TimeAgoComponent",
    "summary": "Distance relative entre une date et aujourd'hui, en jours calendaires (`date-fns`)."
  },
  "ta-title": {
    "className": "TitleComponent",
    "summary": "Titre `h1`-`h6` avec icône optionnelle, graisse et thème contrôlés indépendamment du niveau."
  },
  "ta-toast": {
    "className": "ToastComponent",
    "summary": "Carte au liseré coloré selon `code`, dont le contenu est entièrement projeté."
  },
  "ta-toggle-card": {
    "className": "ToggleCardComponent",
    "summary": "Carte cliquable à cocher/décocher (titre, description, icône), pilotée depuis l'extérieur par `isActive`."
  },
  "ta-tree-children": {
    "className": "TaTreeChildrenComponent",
    "summary": "Regroupe les `ta-tree-item` enfants d'un nœud, décalés et reliés à leur parent par un connecteur vertical."
  },
  "ta-tree-container": {
    "className": "TaTreeContainerComponent",
    "summary": "Conteneur racine d'un arbre : enveloppe une hiérarchie de `ta-tree-item`, sans logique propre."
  },
  "ta-tree-item": {
    "className": "TaTreeItemComponent",
    "summary": "Nœud d'un arbre : un `ta-tree-item` peut contenir un `ta-tree-children`, qui contient à son tour d'autres `ta-tree-item` — récursif par composition."
  },
  "ta-trigram": {
    "className": "TrigramComponent",
    "summary": "Pastille ronde affichant une courte chaîne, taille personnalisable en pixels."
  },
  "ta-typed-message": {
    "className": "TypedMessageComponent",
    "summary": "Message d'alerte typé, avec icône assortie au niveau (`MessageLevel`)."
  },
  "ta-user-logo": {
    "className": "UserLogoComponent",
    "summary": "Avatar utilisateur : photo si fournie, sinon trigramme ou icône générique."
  },
  "ta-users-list": {
    "className": "UsersListComponent",
    "summary": "Rangée de `ta-user-logo` (taille `md`, trigramme forcé) à partir d'un flux d'utilisateurs."
  },
  "ta-validation-modal": {
    "className": "ValidationModal",
    "summary": "Modale de confirmation Oui/Non pilotée par un `ModalState<ModalParameter | undefined, boolean>`."
  },
  "ta-veriff-button": {
    "className": "VeriffButtonComponent",
    "summary": "Bouton de vérification d'identité Veriff, avec ou sans libellé, en trois tailles et trois états."
  },
  "ta-whatsapp-button": {
    "className": "WhatsappButtonComponent",
    "summary": "Bouton d'ouverture d'une conversation WhatsApp, avec ou sans libellé, en trois tailles et trois états."
  },
  "ta-word-viewer": {
    "className": "WordViewerComponent",
    "summary": "Aperçu d'un fichier Word dans un `ngx-doc-viewer` (`viewer=\"google\"`)."
  },
  "ta-wrapped-icon": {
    "className": "WrappedIconComponent",
    "summary": "Icône Material dans un fond coloré arrondi (`ColorType`), en quatre tailles."
  }
};
